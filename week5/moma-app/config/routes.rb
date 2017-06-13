Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  get "/artists/:id/edit" => "artists#edit"
  post "/artists/:id" => "artists#update"

  get "/artists/new"  => "artists#new" # empty form for new artist
  post "/artists/new" => "artists#create"  # handle submitted form and create new row in table

  # 'R' - Read: index and show
  get "/artists" => "artists#index" # list of all artists in table
  get "/artists/:id" => "artists#show" # details for one artist

end
