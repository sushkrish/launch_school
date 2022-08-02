def fizzbuzz(i, j)
  (i..j).to_a.each do |n|
    if n % 3 == 0
      print "Fizz"
    elsif n % 5 == 0
      print "Buzz"
    else
      print n
    end
    print " "
  end
end

fizzbuzz(1, 15) # -> 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz
