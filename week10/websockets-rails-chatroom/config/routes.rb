Rails.application.routes.draw do
  #
  # get 'messages/create'
  #
  # get 'chatrooms/index'
  #
  # get 'chatrooms/create'
  #
  # get 'chatrooms/show'

  mount ActionCable.server => '/cable'

  get '/chatrooms/:topic/:user' => 'chatrooms#show'

  resources :messages
  resources :chatrooms

end
