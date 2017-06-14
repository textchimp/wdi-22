# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Artist.destroy_all
a1 = Artist.create name: "Shipping News"
a2 = Artist.create name: "June of 44"
a3 = Artist.create name: "Radiohead"
a4 = Artist.create name: "Dawn of Midi"

puts "Created #{ Artist.all.length } artists."

Song.destroy_all
s1 = Song.create name: "All By Electricity"
s2 = Song.create name: "Books on Trains"
s3 = Song.create name: "Have a Safe Trip, Dear"
s4 = Song.create name: "Identikit"
s5 = Song.create name: "Creep"
s6 = Song.create name: "Io"

puts "Created #{ Song.all.length } songs."

Album.destroy_all
alb1 = Album.create name: "Save Everything", release_date: '1997'
alb2 = Album.create name: "Engine Takes to the Water", release_date: '1995'
alb3 = Album.create name: "A Moon-Shaped Pool", release_date: '2016'
alb4 = Album.create name: "Dysnomia", release_date: '2013'

puts "Created #{ Album.all.length } albums."


Genre.destroy_all
g1 = Genre.create name: "Nautical Rock"
g2 = Genre.create name: "Text Rock"
g3 = Genre.create name: "Sad Experimental"
g4 = Genre.create name: "Post-Jazz"
g5 = Genre.create name: "Math Rock"
g6 = Genre.create name: "Glam Rock"

 # Add  "All By Electricity"(s1) and "Books on Trains"(s2) to the songs for "Shipping News"(a1)
a1.songs << s1 << s2

a2.songs << s3
a3.songs << s4 << s5
a4.songs << s6
puts "Artist '#{ a1.name }' has #{ a1.songs.length } songs."

alb1.songs << s1 << s2
alb2.songs << s3
alb3.songs << s4
alb4.songs << s6
puts "Album '#{ alb1.name }' has #{ alb1.songs.length } songs."


puts "Done!"
