Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'visitors#index'
  resources :documents
  resources :products do
    post :get_barcode, on: :collection
  end
  post '/webhooks/telegram_asdfasdf' => 'webhooks#callback'
end
