def countdown( n=10 )
  while n >= 0
    puts n
    n -= 1
    sleep 0.5
  end

  puts "Blast off!"
end

# countdown 10

def countdown_r( n=10 )

  if n < 0   # base case
    puts "Blastoff!"
  else
    puts n
    sleep 0.5
    # recursive call, and a step closer
    # to the terminating base case
    countdown_r( n - 1 )
  end

end

countdown_r 10
