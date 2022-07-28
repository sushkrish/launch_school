def is_odd?(number)
  number % 2 != 0
end

[2,5,-17,-8,0,7].each {|n| puts is_odd? n }
