#capture groups & backreference

=begin
(['"]).+?\1
\1 refers to the value captured within (['"]). So if it's a single quote at the beginning, it has to be single quote at the end as well.
=end 

#transforming a string
text = 'Four score and seven'
vowelless = text.gsub(/[aeiou]/, '*')

text = %(We read "War of the Worlds".)
puts text.sub(/(['"]).+\1/, '\1The Time Machine\1')
# prints: We read "The Time Machine".
