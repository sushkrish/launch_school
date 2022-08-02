def greetings(arr, h)
  "Hello, #{arr.join(" ")}! Nice to have a #{h[:title]} #{h[:occupation]} around."
end

puts greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' })
#=> Hello, John Q Doe! Nice to have a Master Plumber around.
