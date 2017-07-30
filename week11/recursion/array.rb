a = [1,2,3,4,5,6]

# a.each do |i|
#   puts i
# end

def recursive_iterate( arr, indent=0 )

  # print the first item
  # call ourselves with the rest of the array
  # stop when there's nothing left in the array

  # first = arr[0]
  # rest  = arr[1..-1]

  # first = arr.first
  # rest  = arr.drop(1)

  first, *rest = arr

  spaces = "     " * indent

  puts "#{ spaces } item: #{ first }"
  puts "#{ spaces } rest: #{ rest }"


  if rest.any?
    recursive_iterate( rest, indent+1 )
  end

  puts "#{ spaces} ------ (return, current value: #{ first })"

end

recursive_iterate( a )
