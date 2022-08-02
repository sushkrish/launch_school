words = ['demo', 'none', 'tied', 'evil', 'dome', 'mode', 'live', 'fowl', 'veil', 'wolf', 'diet', 'vile', 'edit', 'tide', 'flow', 'neon']

anagrams = Hash.new([])
words.each {|w| anagrams[w.chars.sort.join]+=[w]}
p anagrams.values
