def remove_vowels(arr)
  arr.map do |word|
    word.chars.each_with_object("") {|ch, str| str << ch unless "aeiouAEIOU".include? ch}
  end
end

puts remove_vowels(%w(abcdefghijklmnopqrstuvwxyz)) == %w(bcdfghjklmnpqrstvwxyz)
puts remove_vowels(%w(green YELLOW black white)) == %w(grn YLLW blck wht)
puts remove_vowels(%w(ABC AEIOU XYZ)) == ['BC', '', 'XYZ']

