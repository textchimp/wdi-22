# Air Conditioning
#
# Ask the user what the current temperature is, if the A/C is functional, and what temperature they wish it was.
# If the airconditioner is functional and the current temperature is above the the desired temperature... display "Turn on the A/C Please"
# If the airconditioner is non-functional and the current temperature is above the the desired temperature... display "Fix the A/C now! It's hot!"
# If the airconditioner is non-functional and the current temperature is below the the desired temperature... display "Fix the A/C whenever you have the chance... It's cool..."

puts "What is the current temp?"
current_temp = gets.to_f

puts "Is the A/C functioning? (y/n):"
ac_working =  gets.chomp.downcase     # .toLowerCase()

puts "What is your desired temp?"
desired_temp = gets.to_f


if ac_working == "y"

  # check desired temp
  if current_temp > desired_temp
    puts "Turn on the AC please!"
  end

else

  if current_temp < desired_temp
    puts "Fix the A/C whenever, no wuzzas..."
  else
    puts "Fix the A/C NOW man!"
  end

end
