def show_story(noun, verb, adj, adv)
  puts "Do you #{verb} your #{adj} #{noun} #{adv}? That's hilarious!"
end 

print "Enter a noun: "
noun = gets.chomp
print "Enter a verb: "
verb = gets.chomp
print "Enter an adjective: "
adj = gets.chomp
print "Enter an adverb: "
adv = gets.chomp
show_story(noun, verb, adj, adv)
