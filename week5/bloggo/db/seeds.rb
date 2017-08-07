# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all

u1 = User.create email: 'textchimp@gmail.com', password: 'chicken', name: 'This Guy', image: 'https://s-media-cache-ak0.pinimg.com/736x/cf/da/d3/cfdad3218ce869630905012e4de596be.jpg'
u2 = User.create email: 'chexttimp@gmail.com', password: 'chicken', name: 'That Guy', image: 'https://s-media-cache-ak0.pinimg.com/736x/cf/da/d3/cfdad3218ce869630905012e4de596be.jpg'

p1 = Post.create title: 'Check out this adorbz doggo', content: 'SO CUTEEEEE!!!!11!11!', image: 'http://i.imgur.com/P2ZywpK.jpg'
p2 = Post.create title: 'Unbelievable epic doggo', content: 'Noble hound', image: 'http://i.imgur.com/z4hiDKU.jpg'

u1.posts << p1 << p2
