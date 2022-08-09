#CHARACTER CLASS SHORTCUTS
=begin
.
/./ any character except new line
/./m multiline option to match new line as well
/[.]/ literal fullstop match only
note that . is a shortcut for a character class but it doesn't appear inside square brackets. A . inside square brackets is taken literally. 
=end

=begin
blank spaces
\s whitespace (space, tab, vertical tab, crriage return, line feed, form feed. 
\S non-white space
=end

puts 'matched 1' if 'Four score'.match(/\s/)
puts 'matched 2' if "Four\tscore".match(/\s/)
puts 'matched 3' if "Four-score\n".match(/\s/)
puts 'matched 4' if "Four-score".match(/\s/)

puts 'matched 1' if 'a b'.match(/\S/)
puts 'matched 2' if " \t\n\r\f\v".match(/\S/)

=begin
DIGITS and HEX DIGITS
\d any decimal digit 0-9
\D any character except a decimal digit 
\h any hex digit 
\H any character except a hex digit
=end

=begin
\w word characters. This includes a-z A-Z 0-9 and _
\W non word characters
=end

=begin
Exercises
1. /\s...\s/
2. /\s...\s/ will not match red in "Doc in a big red box." It matches big and consumes the empty space to the left of red. So there's no initial \s match for red.
3. /\s\h\h\h\h\/
4. /[a-zA-Z][a-zA-Z][a-zA-Z]/
/[a-z][a-z][a-z]/i
=end
