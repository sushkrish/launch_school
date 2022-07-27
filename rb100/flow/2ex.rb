def uppercase(word)
  return word.upcase if word.length > 10
  return word
end 

puts uppercase("hello world")
puts uppercase("hello")
