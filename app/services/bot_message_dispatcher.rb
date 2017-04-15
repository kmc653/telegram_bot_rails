class BotMessageDispatcher
  attr_reader :message

  def initialize(message, chat_id)
    @message = message
    @chat_id = chat_id
  end
end
