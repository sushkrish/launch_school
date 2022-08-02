def staggered_case(sentence)
  i = 0
  sentence.chars.each_with_object("") do |ch, str|
    i.even? ? str << ch.upcase : str << ch.downcase
    i += 1
  end
end

puts staggered_case('I Love Launch School!') == 'I LoVe lAuNcH ScHoOl!'
puts staggered_case('ALL_CAPS') == 'AlL_CaPs'
puts staggered_case('ignore 77 the 444 numbers') == 'IgNoRe 77 ThE 444 NuMbErS'
