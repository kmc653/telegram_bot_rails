class GetWashCapacity
  include HTTParty

  def initialize(chat_id)
    @chat_id = chat_id
  end

  def call
    api_url = "http://f36304a1.ngrok.io/api/v2/wash_capacities"

    response = HTTParty.get(api_url, headers: { "auth_token" => "#{@chat_id}" })
  end
end
