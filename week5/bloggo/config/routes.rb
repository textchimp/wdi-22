Rails.application.routes.draw do

  root to: 'posts#index'

  resources :users
  resources :posts

  get    '/login' => 'session#new'
  post   '/login' => 'session#create'
  delete '/login' => 'session#destroy'

  # remote: true AJAX test
  post "/ajaxbutton" => "posts#ajaxbutton"

end
