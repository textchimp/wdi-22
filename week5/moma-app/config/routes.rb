Rails.application.routes.draw do

  # create
  get "/works/new" => "works#new"
  post "/works"  => "works#create"

  # read
  get "/works" => "works#index"
  get "/works/:id" => "works#show"

  # update
  get  "/works/:id/edit" => "works#edit", as: 'work' # need this 'as' for the 'form_for', long story
  # post "/works/:id/edit"   => "works#update"
  patch "/works/:id/edit"  => "works#update"  # need this 'patch' version for 'form_for'

  # delete
  delete "/works/:id" => "works#destroy"

  ######################## artists

  delete "/artists/:id" => "artists#destroy"

  get "/artists/new"  => "artists#new" # empty form for new artist
  post "/artists" => "artists#create"  # handle submitted form and create new row in table

  get "/artists/:id/edit" => "artists#edit"
  post "/artists/:id" => "artists#update"

  # 'R' - Read: index and show
  get "/artists" => "artists#index" # list of all artists in table
  get "/artists/:id" => "artists#show" # details for one artist

end
