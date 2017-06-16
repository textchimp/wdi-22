Rails.application.routes.draw do

  root to: 'posts#index'

  resources :users
  resources :posts

  get 'session/new' => 'session#new'
  get 'session/create' => 'session#create'
  get 'session/destroy' => 'session#destroy'

end
