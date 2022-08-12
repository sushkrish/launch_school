# Write a method named to_weird_case that accepts a string, and returns the same sequence of characters with every 2nd character in every third word converted to uppercase. Other characters should remain the same.

def to_weird_case(sentence)
  weird_cased = []
  sentence.split(" ").each_with_index do |word, i|
    if (i+1) % 3 == 0
      cased_word = []
      word.chars.each_with_index do |ch, i|
        if i.odd? 
          cased_word << ch.upcase
        else
          cased_word << ch
        end 
      end 
      weird_cased << cased_word.join
    else
      weird_cased << word
    end
  end
  weird_cased.join(" ")
end

# Examples:
p to_weird_case('Lorem Ipsum is simply dummy text of the printing') == 'Lorem Ipsum iS simply dummy tExT of the pRiNtInG'
p to_weird_case( 'It is a long established fact that a reader will be distracted') == 'It is a long established fAcT that a rEaDeR will be dIsTrAcTeD'
p to_weird_case('aaA bB c') == 'aaA bB c'
p to_weird_case('Miss Mary Poppins word is supercalifragilisticexpialidocious') == 'Miss Mary POpPiNs word is sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS'

# The tests above should print "true".
