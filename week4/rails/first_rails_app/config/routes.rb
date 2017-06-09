Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'pages#welcome'   # for the simplest route "/"

  get '/home'  => 'pages#home'
  get '/about' => 'pages#about'

  get '/random_colour' => 'pages#random'

  get '/calc/:x/:operator/:y' => 'calculator#do_calc'


end
