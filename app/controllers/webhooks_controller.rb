require 'telegram/bot'

class WebhooksController < ApplicationController
  skip_before_action :verify_authenticity_token

  TOKEN = ENV["telegram_bot_token"]

  def callback
    Telegram::Bot::Client.run(TOKEN) do |bot|
      if params[:webhook][:callback_query]
        callback_query = params[:webhook][:callback_query]

        if callback_query[:data].include? 'arrange'
          WasherArrangement.new(callback_query[:from][:id], callback_query[:message][:message_id], callback_query[:data]).arrange
        else
          bot.api.editMessageText(chat_id: callback_query[:from][:id],
                                  message_id: callback_query[:message][:message_id],
                                  text: callback_query[:data])
        end
      else
        response = CheckWasher.new(params[:webhook][:message][:from][:id]).call
        if response.code == 200
          message = params[:webhook][:message]
          case message[:text]
          when '預約接單'
            response = GetWashCapacity.new(message[:from][:id]).call
            list = sort_scheduled_date(response["data"])

            redis = Redis::Namespace.new("washer_state", redis: Redis.new)
            redis.hset "washer_state:#{message[:chat][:id]}", "step", "預約接單"

            markup = Telegram::Bot::Types::InlineKeyboardMarkup.new(inline_keyboard: generate_date_btn('arrange', date_list, list))

            bot.api.sendMessage(chat_id: message[:chat][:id], text: date_msg(list), reply_markup: markup)
          else
            bot.api.sendMessage(chat_id: message[:chat][:id], text: "I don't understand you :(")
          end
        else
          bot.api.sendMessage(chat_id: message[:chat][:id], text: "請聯絡客服")
        end
      end
    end
    # dispatcher.new(webhook, user).process
    head :ok
  end

  private

    def sort_scheduled_date(list)
      list.sort { |x, y| x["start_at"] <=> y["start_at"] }
    end

    def date_msg(list)
      msg1 = "您接下來已預約的日子為：\n\n"
      capacity = show_capacity_list(list)
      msg2 = "\n請選擇您要排班日期：\n"

      msg1 + capacity + msg2
    end

    def show_capacity_list(list)
      msg = ""
      final_mag = ""
      list.each do |capacity|
        dateTime = Time.at(capacity["start_at"])
        msg = dateTime.strftime("%Y-%m-%d") + get_day(dateTime.wday)

        if capacity["state"] == "arranged"
          if dateTime.hour > 9
            msg += " 晚上 已排班\n"
          else
            msg += " 早上 已排班\n"
          end
        else
          if dateTime.hour > 9
            msg += " 晚上 休假\n"
          else
            msg += " 早上 休假\n"
          end
        end

        final_mag += msg
      end
      final_mag
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

    def date_list
      today = DateTime.now
      list = []

      for i in 0..6
        today += 1.day
        list << today.to_i
      end
      list
    end

    def generate_date_btn(prefix, list, capacity_list)
      date_list = []
      capacities = create_schedule_date_list(capacity_list)

      list.each do |date|
        dateTime = Time.at(date)
        text_content = dateTime.strftime("%Y-%m-%d")
        unless capacities.include?(text_content)
          text_content += get_day(dateTime.wday)
          data_string = prefix + '_' + dateTime.strftime("%Y-%m-%d")
          date_list << Telegram::Bot::Types::InlineKeyboardButton.new(text: text_content, callback_data: data_string)
        end
      end
      date_list
    end

    def create_schedule_date_list(list)
      schedules = []

      list.each do |capacity|
        dateTime = Time.at(capacity["start_at"])
        msg = dateTime.strftime("%Y-%m-%d")
        schedules << msg
      end
      schedules
    end
end
