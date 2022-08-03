ADJ = %w(quick lazy sleepy ugly quiet)
NOUN = %w(fox dog head leg mountain)
VERB = %w(jumps lifts bites licks kisses)
ADV = %w(easily hazily noisily excitedly politely)

def print_new_story(fname)
  File.open(fname) do |f|
    f.each do |line|
      puts format(line, {noun:NOUN.sample, 
                         adjective:ADJ.sample, 
                         adverb:ADV.sample, 
                         verb:VERB.sample})
    end
  end
end

print_new_story("madlibs.txt")
