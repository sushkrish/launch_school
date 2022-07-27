def fact(n)
  return n if n==1
  return n*fact(n-1)
end

[5,6,7,8].each {|n| puts fact(n)}
