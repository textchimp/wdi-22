def fib( n )

  a = 1
  b = 1

  n.times do

    temp = a
    a = b
    b = a + temp

    # ---------------------
    # temp = a
    # temp: 1
    # a = b
    # a: 1
    # b = a + b
    # b: 2
    # --------------------
    # temp = a
    # temp: 1
    # a = b
    # a: 2
    # b = a + b
    # b: 3
    # --------------------

    # a, b = (b), (a + b)

  end
  a
end

def fib_rec( n )
  if n < 2
    return 1
  else
    return fib_rec(n  - 1) + fib_rec(n - 2)
  end
end


require 'pry'
binding.pry
