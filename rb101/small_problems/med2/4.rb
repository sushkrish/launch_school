def balanced?(str)
  left = 0
  str.chars.each do |c|
    left += 1 if c == '('
    left -= 1 if c == ')'
    break if left < 0
  end
  left.zero?
end

puts balanced?('What (is) this?') == true
puts balanced?('What is) this?') == false
puts balanced?('What (is this?') == false
puts balanced?('((What) (is this))?') == true
puts balanced?('((What)) (is this))?') == false
puts balanced?('Hey!') == true
puts balanced?(')Hey!(') == false
puts balanced?('What ((is))) up(') == false
