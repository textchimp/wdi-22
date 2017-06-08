require "sinatra"
require "sinatra/reloader"
require "pry"
require "sqlite3"

# /animals?name=dog  =>  params["name"]

# /animals/25
# /animals/:id       => params["id"]

# POST to action="/animals" from a form
# /animals           => params["species"], params["legs"]

post "/animals/" do
  binding.pry

end


get "/animals/new" do
    erb :new
end


get "/" do

  sql = "
INSERT INTO animals( species, image, description, legs ) VALUES(
  'dog',
  'http://s7d2.scene7.com/is/image/PetSmart/PB0101_HERO-Dog-TreatsRawhide-20160818?$sclp-banner-main_large$',
  'just a really doggy little pal',
  4
);
  "

  # Create a connection to the database
  db = SQLite3::Database.new 'database.db'

  # Ask for the information in a nicer format
  db.results_as_hash = true

  # Show the SQL that was generated in the logs
  puts sql

  # Execute a line of SQL and store the result
  result = db.execute sql

  p result

  erb :home
end
