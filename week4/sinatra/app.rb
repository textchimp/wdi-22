require "sinatra"
require "sinatra/reloader"
require "pry"
require "HTTParty"

def html_header( colour )
    "<html>
  <head>
  </head>
  <body style=\"background-color: #{ colour };\">
  <h1>Welcome to the general-purpose calculator</h1>"
end

$output_start = "<html>
<head>
</head>
<body>
<h1>Welcome to the general-purpose calculator</h1>"

$output_end = "</body></html>"


get "/search_form" do
  erb :searchform
end

get "/movie_search" do
  query = params[ "movie_query" ]
  url   = "http://THE-API-URL-INCLUDING-THE-API-KEY" + params[ "movie_query"]
  mdata = HTTParty.get url
  @results = mdata[ "results" ]

  # binding.pry

  erb :movie_search_results

end

get "/movie_details/:id" do

end

get "/ask" do
  erb :ask_name
end

get '/show_name' do

  erb :show_name

end

get "/hello" do
  # matches the localhost:4567/hello URL
  a = 10
  "Hello World! a = #{ a }"
end

get "/colour/:col" do
  output = html_header( params[ "col" ] )
  output += "Here's your fancy colour #{ params["col"] }"
  output += $output_end
end

get "/hello/:name" do  # /hello/edgy
  # params[ "name" ] = "edgy";

  erb :hello

end

get "/hello/:first_name/:surname/:age" do
  "Good day to you, #{ params["first_name"] } #{ params["surname"] }  - you are #{ params["age"] } years old."
end

get "/add/:x/:y" do
  result = params["x"].to_i + params["y"].to_i
  "The sum of #{ params["x"] } and #{ params["y"] } is #{ result }"
end

get "/mult/:x/:y" do
  result = params["x"].to_i * params["y"].to_i
  "The product of #{ params["x"] } and #{ params["y"] } is #{ result }"
end

get "/calc/:op/:x/:y" do
  @x = params["x"].to_i
  @y = params["y"].to_i
  @op = params["op"]

  # x + y
  # x.+( y )
  # x.+( y )  or x.*( y ) etc
  @result = @x.send(@op, @y)

  # $output_start + "The result of #{x} #{op} #{y} = #{result}" + $output_end

  erb :calc      #"views/calc.erb"

end


get "/good/bye" do
  "<h1>Goodbye I guess</h1>"
end

get "/" do
  "Hello World, but from the home page"
end
