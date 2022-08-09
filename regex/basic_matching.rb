# rubular.com
# https://launchschool.com/books/regex/read/conclusion

# regex is placed between two slashes: //
str = 'cast'
puts "matched 's'" if str.match(/s/)
puts "matched 'x'" if str.match(/x/)

=begin
chars with special meaning in Ruby regex:
$ ^ * + ? . ( ) [ ] { } | \ /

To match a meta-character literally, it has to be escaped with a leading backslah \
=end
strings = ["?", "What's up, doc?", "Silence!", "What's that?"]
strings.each {|s| puts "#{s} has a '?'" if s.match(/\?/)}

#Patterns can be concatenated in a regexs
cat_strings = %w(cat catalog copycat scatter the_lazy_cat. CAT cast)
cat_strings.each {|s| puts "#{s} matches /cat/" if s.match(/cat/)}

#Alternation: /(cat|dog|rabbit)/

# Control Character Escapes \n, \t, \r
# Note that not all backslash-letter pairs are control character escapes. \s and \d are special character classes. \A and \z are anchors.
text = "hello\tworld"
puts "#{text} has tab" if text.match(/\t/)

#Ignoring case - options/flags/modifiers
cat_strings.each {|s| puts "#{s} matches /cat/i" if s.match(/cat/i)}


=begin
EXERCISES
1. /K/
2. /h/i
3. /dragon/
4  /(banana|orange|strawberry|apple)/
5. /(,|[ ])/
6. /(blue|black)berry/
=end
