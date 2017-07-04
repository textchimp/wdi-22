Rails.application.routes.draw do

  root 'pages#app'
  get '/app' => 'pages#app'

  resources :secrets
#      Prefix Verb   URI Pattern                 Controller#Action
#        root GET    /                           pages#app
#         app GET    /app(.:format)              pages#app
#     secrets GET    /secrets(.:format)          secrets#index
#             POST   /secrets(.:format)          secrets#create
#  new_secret GET    /secrets/new(.:format)      secrets#new
# edit_secret GET    /secrets/:id/edit(.:format) secrets#edit
#      secret GET    /secrets/:id(.:format)      secrets#show
#             PATCH  /secrets/:id(.:format)      secrets#update
#             PUT    /secrets/:id(.:format)      secrets#update
#             DELETE /secrets/:id(.:format)      secrets#destroy
end
