def digit_list(number)
  number.to_s.split("").map {|d| d.to_i}
end

[12345,7,375290,444].each {|n| p digit_list(n)}
