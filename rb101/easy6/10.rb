def triangle(n)
  n.times {|i| puts " "*(n-i-1) + "*"*(i+1)}
end

triangle(5)
triangle(9)
