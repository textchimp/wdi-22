Rails.application.routes.draw do

  get 'messages/create'

  get 'chatrooms/index'

  get 'chatrooms/create'

  get 'chatrooms/show'

  get '/chatrooms/:topic/:user' => 'chatrooms#show'

  resources :messages
  resources :chatrooms

end
