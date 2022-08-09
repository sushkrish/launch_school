#CHARACTER CLASSES

#/[abc]/ matches a single occurrence of any character between the square brackets. 
opt = '1'
str = 'y'
name = "HOOVER"
opt.match(/[12345]/)
str.match(/[nyNY]/)
name.match(/[hH]oover/)

#meta characters within character classes: ^ \ - [ ]
add = " a + b "
add.match(/[*+]/)

=begin
Range of characters
lowercase_alpha = /[a-z]/
uppercase_alpha = /[A-Z]/
middle_alpha = /[j-p]/
numeric = /[0-9/]
Ranges can be combined too. See hex_digit? below.
Do not try to construct ranges for non-alphanumeric characters & don't mix different types in a single range lik A-z.
=end

def hex_digit?(char)
  char.match(/[0-9A-Fa-f]/)
end

=begin
Negated class matches all chars not identified in the rang
e.g. /[^y]/ matches everything but y. 
[^aeious] matches all but lowercase vowels
=end

=begin
Exercises
1. /[Kks]/
2. /[bc][aou]t/i
3. /[0-9A-Ja-j]/
4. [a-wyzA-WYZ]
5. matches non-letters too.
6. [^a-zA-Z] or [^a-z]/i
7. No the second one can match different combinations of case. aBC
8. Yes, they're equivalent so far. 
9. /\[\^[a-zA-Z0-9]\-[a-zA-Z0-9]\]/
=end
