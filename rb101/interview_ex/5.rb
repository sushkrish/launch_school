# Write a method that takes a string as an argument and returns the character that occurs least often in the given string.
# If there are multiple characters with the equal lowest number of occurrences, then return the one that appears first in the string. When counting characters, consider the uppercase and
# lowercase version to be the same.

#hash. iterate through chars, counting them. get min key by value.

def least_common_char(str)
  counts = Hash.new(0)
  str.chars.each {|ch| counts[ch.downcase] += 1}
  counts.keys.min_by {|k| counts[k]}
end

# Examples:

p least_common_char("Hello World") == "h"
p least_common_char("Peter Piper picked a peck of pickled peppers") == "t"
p least_common_char("Mississippi") == "m"
p least_common_char("Happy birthday!") == ' '
p least_common_char("aaaaaAAAA") == 'a'

# The tests above should print "true".
