# You are to generate a basic "guess my number" game. The computer will pick a random number between 0 and 10. The user will guess the number until they guess correctly.
# Specification:
#
# The user should be asked to guess a number
# If the user's guess is correct, the user should see a congratulatory message
# If the user's guess is not correct, the user should be asked to guess the number again.
# Extensions:
#
# Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
# Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"

MAX_VALUE = 10

secret_number = rand MAX_VALUE


guess_count = 1

# while guess != secret_number
#

# begin
#
#   puts "Guess a number between 0 and #{ MAX_VALUE }: "
#   guess = gets.to_i
#
#
#   if guess > secret_number
#     puts "Wrong! Guess lower."
#   else
#     puts "Wrong! Guess higher."
#   end
#
#   guess_count += 1
#
#   guess = gets.to_i
#
#
# until guess == secret_number



until guess == secret_number

  if guess > secret_number
    puts "Wrong! Guess lower."
  else
    puts "Wrong! Guess higher."
  end

  guess_count += 1

  guess = gets.to_i


end  # until

puts "Congratulations! You guessed the number in #{ guess_count } tries."
