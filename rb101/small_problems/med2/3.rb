def letter_percentages(str)
  counts = {lowercase: 0, uppercase: 0, neither: 0}
  str.chars.each do |c|
    case c.ord
    when ('a'.ord)..('z'.ord) then counts[:lowercase]+=1
    when ('A'.ord)..('Z'.ord) then counts[:uppercase]+=1
    else counts[:neither]+=1
    end
  end
  counts.each_key {|k| counts[k] = 100.0 * counts[k] / str.length}
  counts
end

puts letter_percentages('abCdef 123') == { lowercase: 50.0, uppercase: 10.0, neither: 40.0 }
puts letter_percentages('AbCd +Ef') == { lowercase: 37.5, uppercase: 37.5, neither: 25.0 }
puts letter_percentages('123') == { lowercase: 0.0, uppercase: 0.0, neither: 100.0 }
