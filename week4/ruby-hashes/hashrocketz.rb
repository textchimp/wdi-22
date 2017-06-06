
require 'pry'

a = ["Anil", "Erik", "Jonathan"]

puts a[1]

a.push "Murray"

a << "Luke"

binding.pry

h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}

is = {true => "It's true!", false => "It's false"}



users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

# How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
puts users["Jonathan"][:twitter]

# How would you add the number 7 to Erik's favorite numbers?
users["Erik"][:favorite_numbers] << 7

# How would you add yourself to the users hash?
users["Jorge"] = { :twitter => 'internetofshit', :favorite_numbers => [5, 12] }

# How would you return the array of Erik's favorite numbers?
p users["Erik"][:favorite_numbers]

# How would you return the smallest of Erik's favorite numbers?
p users["Erik"][:favorite_numbers].min

# How would you return an array of Anil's favorite numbers that are also even?
p users["Anil"][:favorite_numbers].select { |n| n.even? }

# How would you return an array of the favorite numbers common to all users?
p users.values.map { |data| data[:favorite_numbers] }.inject &:& # You are not expected to understand this.

# How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
p users.values.map { |data| data[:favorite_numbers] }.flatten.compact.uniq.sort



binding.pry
