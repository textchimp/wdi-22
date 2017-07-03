Rails.application.routes.draw do

  root "pages#app"  # the root route should start our Backbone app
  get "/app" => "pages#app"

  resources :posts
end
