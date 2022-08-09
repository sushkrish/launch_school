#ANCHORS
#Ensure that a regex matches a string at a specific place: the beginning or end of the string or end of a line, or on a word or non-word boundary.

=begin
^ start of line
/^cat/ matches "cat" and "catastrophe" but not "wildcat" or "I love my cat"

$ end of line
/cat$/ matches "cat", "wildcat", "I love my cat" but not "<cat>" or "catastrophe"

In Ruby, \n counts as the beginning of a new sentence. See example below where both red and blue match.
=end

TEXT1 = "red fish\nblue fish"
puts "matched red" if TEXT1.match(/^red/) 
puts "matched blue" if TEXT1.match(/^blue/)

TEXT2 = "red fish\nred shirt"
puts "matched fish" if TEXT2.match(/fish$/)
puts "matched shirt" if TEXT2.match(/shirt$/)

=begin
Matching at the beginning of string rather than line. 
\A beginning of string
\z  \Z end of string (subtle difference about matching upto but not including a newline at the end of the string. Use \z by default.
=end

TEXT3 = "red fish\nblue fish"
TEXT4 = "red fish\nred shirt"
puts "matched red" if TEXT3.match(/\Ared/)
puts "matched blue" if TEXT3.match(/\Ablue/)
puts "matched fish" if TEXT4.match(/fish\z/)
puts "matched shirt" if TEXT4.match(/shirt\z/)

=begin
Word Boundaries
\b word boundaries 
\B non-word boundaries
where words are sequences of word characters

word boundary occurs:
pair of chars where word is a word char and another is not
beginning of string where first char is a word char
end of string when last char is a word char

non-word boundary:
negation of word boundary. 

To match 3 letter words consisting of word chars, we can use /\b\w\w\w\b/

Note: these do not work as word boundaries inside of character classes. [\b] means backspace character. 
=end

=begin
Exercises
1. /^The\b/
2. /\bcat$/
3. /\b[a-z][a-z][a-z]\b/i
4. /^(A|The)[ ][a-zA-Z][a-zA-Z][a-zA-Z][a-zA-Z][ ](dog|cat)$/
=end
