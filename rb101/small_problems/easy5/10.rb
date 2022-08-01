def print_in_box(text)
  #top
  print '+'
  (text.length+2).times{ print '-'}
  puts '+'
  print '|'
  (text.length+2).times{ print ' '}
  puts '|'
  #text
  print '| '
  print text 
  puts ' |'
  #bottom
  print '|'
  (text.length+2).times{ print ' '}
  puts '|'
  print '+'
  (text.length+2).times{ print '-'}
  puts '+'
end

print_in_box('')
print_in_box('To boldly go where no has gone before.')


