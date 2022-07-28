#Ex1
#nothing as greeting is initialized ubut not assigned

#Ex2
# {a: 'hi there'}

#Ex3
#A - one, two, three / doesnt change original strings
#B - one, two, three / doesnt change og strings
#C - two, three,one / changes og strings

#Ex4
=begin
def dot_separated_ip_address?(input_string)
    dot_separated_words = input_string.split(".")
    return false if dot_separated_words.size != 4
    is_ip = true
    while dot_separated_words.size > 0 do
      word = dot_separated_words.pop
      is_ip = is_ip && is_an_ip_number?(word)
    end
    return is_ip
end
=end
