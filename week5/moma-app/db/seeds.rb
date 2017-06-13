# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


a1 = Artist.create({
  name: 'Joan Miro',
  nationality: 'Catalan',
  dob: '1893/04/20',
  period: '20th Century',
  image: 'http://www.joan-miro.net/images/joan-miro.jpg'
})

a2 = Artist.create({
  name: 'Lee Krasner',
  nationality: 'American',
  dob: '1908/10/27',
  period: '20th Century',
  image: 'https://s-media-cache-ak0.pinimg.com/originals/60/65/0e/60650e0ce5364c732b8077cb32163efd.jpg'
})

a3 = Artist.create({
  name: 'Mark Rothko',
  nationality: 'American',
  dob: '1903/09/25',
  period: '20th Century',
  image: 'https://www.nga.gov/content/dam/ngaweb/features/slideshows/Mark%20Rothko/detail-rothko.jpg'
})
