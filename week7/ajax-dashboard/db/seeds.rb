# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Message.destroy_all

Message.create author: 'Edgy', content: 'Please call me developer-in-residence from now on (a.k.a. DIR a.k.a. DUUUUUHHH)'

Message.create author: 'Craigsy', content: 'Nice work on your website, love this fresh content'

Message.create author: 'Mikaela', content: 'I am a serial killer. I love to kill.'

Message.create author: 'Olivia', content: 'What is a web?'

Message.create author: 'Joel', content: 'Please kill me.'

p Message.all
