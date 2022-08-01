def staggered_case(sentence)
  i = 0
  sentence.chars.each_with_object("") do |ch, str|
    if ch.ord.between?('a'.ord, 'z'.ord) || ch.ord.between?('A'.ord, 'Z'.ord)
      str << ch.upcase if i.even?
      str << ch.downcase if i.odd?
      i += 1
    else 
      str << ch
    end
  end
end

puts staggered_case('I Love Launch School!') == 'I lOvE lAuNcH sChOoL!'
puts staggered_case('ALL CAPS') == 'AlL cApS'
puts staggered_case('ignore 77 the 444 numbers') == 'IgNoRe 77 ThE 444 nUmBeRs'
