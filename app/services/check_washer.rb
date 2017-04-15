class CheckWasher
  include HTTParty

  def initialize(chat_id)
    @chat_id = chat_id
  end

  def call
    api_url = "http://f36304a1.ngrok.io/api/v2/washer_auth/#{@chat_id}"

    response = HTTParty.get(api_url)
  end
end
