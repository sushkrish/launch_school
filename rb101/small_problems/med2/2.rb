BLOCKS = {B: 'O', X: 'K', D: 'Q', C: 'P', N: 'A', G: 'T', R: 'E', F: 'S', J: 'W', H: 'U', V: 'I', L: 'Y', Z: 'M'}
BLOCKS_REV = {}
BLOCKS.each {|k,v| BLOCKS_REV[v.to_sym] = k.to_s}
BLOCKS.merge!(BLOCKS_REV)

def block_word?(word)
  word.chars.none? {|c| word.include? (BLOCKS[c.upcase.to_sym])}
end

puts block_word?('BATCH') == true
puts block_word?('BUTCH') == false
puts block_word?('jest') == true
