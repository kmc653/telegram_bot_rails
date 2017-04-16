require 'telegram/bot'

class WasherArrangement

  TOKEN = ENV["telegram_bot_token"]

  def initialize(chat_id, message_id, callback_query)
    @chat_id = chat_id
    @message_id = message_id
    @callback_query = callback_query
  end

  def arrange
    callback_string = @callback_query.gsub('arrange_', '')

    puts callback_string


    if callback_string.include?('白天') || callback_string.include?('晚上')
      redis = Redis::Namespace.new("washer_state", redis: Redis.new)
      redis.hset "washer_state:#{@chat_id}", "time", callback_string
      date = redis.hget "washer_state:#{@chat_id}", "date"

      Telegram::Bot::Client.run(TOKEN) do |bot|
        markup = Telegram::Bot::Types::InlineKeyboardMarkup.new(inline_keyboard: confirm_btn)
        bot.api.editMessageText(chat_id: @chat_id,
                                message_id: @message_id,
                                text: confirm_msg(date, callback_string),
                                reply_markup: markup)
      end
    elsif callback_string.include?('yes') || callback_string.include?('no')
      Telegram::Bot::Client.run(TOKEN) do |bot|
        bot.api.editMessageText(chat_id: @chat_id,
                                message_id: @message_id,
                                text: 'finished!')
      end
    else
      redis = Redis::Namespace.new("washer_state", redis: Redis.new)
      redis.hset "washer_state:#{@chat_id}", "date", callback_string

      Telegram::Bot::Client.run(TOKEN) do |bot|
        markup = Telegram::Bot::Types::InlineKeyboardMarkup.new(inline_keyboard: time_btn)
        bot.api.editMessageText(chat_id: @chat_id,
                                message_id: @message_id,
                                text: time_msg(callback_string),
                                reply_markup: markup)
      end
    end
  end

  private

    def time_msg(date_string)
      date = Time.parse(date_string)
      date_message = date_string + get_day(date.wday) + "\n\n"
      message = "我們可以在以下時段，把需要洗的衣服送去給您，您哪個時段比較方便接收衣服呢？";

      date_message + message
    end

    def time_btn
      date_list = []
      date_list << Telegram::Bot::Types::InlineKeyboardButton.new(text: '1. 白天（09:30~10:30）',
                                                                  callback_data: 'arrange_白天（09:30~10:30）')
      date_list << Telegram::Bot::Types::InlineKeyboardButton.new(text: '2. 晚上（18:30~19:30）',
                                                                  callback_data: 'arrange_晚上（18:30~19:30）')
      date_list
    end

    def confirm_msg(date_string, time)
      date = Time.parse(date_string)
      date_message = date_string + get_day(date.wday)
      full_message = date_message + time + "是否確認排班？"

      full_message
    end

    def confirm_btn
      date_list = []
      date_list << Telegram::Bot::Types::InlineKeyboardButton.new(text: '是',
                                                                  callback_data: 'arrange_yes')
      date_list << Telegram::Bot::Types::InlineKeyboardButton.new(text: '否',
                                                                  callback_data: 'arrange_no')
      date_list
    end

    def get_day(day)
      case day
      when 0
        return '（日）';
      when 1
        return '（一）';
      when 2
        return '（二）';
      when 3
        return '（三）';
      when 4
        return '（四）';
      when 5
        return '（五）';
      when 6
        return '（六）';
      end
    end
end
