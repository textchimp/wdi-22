Rails.application.routes.draw do

  get '/messages/' => 'messages#index'
  get '/messages/:id' => 'messages#show'

  root 'dashboard#info'
  get '/info' => 'dashboard#info'
  get '/info-api' => 'dashboard#info_api'

  get '/catname' => 'dashboard#cat_name'
  get '/cpuhog'  => 'dashboard#cpu_hog'
  get '/uptime'  => 'dashboard#uptime'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
