# Sydney Suburbs
#
# Create a program that asks what suburbs you live in.
# Depending on the answer, print an appropriate response of your choosing

puts "Which suburb do you live in?: "
suburb = gets.chomp


output = case suburb
when "Bondi"
  "Nice boat shoes."
when "Newport"
  "Oh, so you're a white supremacist?"
when "Newtown"
  "Surf's up bro!"
else
  "I'm sure it's very nice there."
end

puts output

# if suburb == "Bondi"
#   puts "Nice boat shoes."
# elsif suburb == "Newport"
#   puts "Oh, so you're a white supremacist?"
# elsif suburb == "Manly"
#   puts "Surf's up bro!"
# elsif suburb == "Newtown"
#   puts "It's *pronounced* Keen-wa!!! (roll eyes)"
# else
#   puts "I'm sure it's very nice there."
# end
#
