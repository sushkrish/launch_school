def longest_sentence(fname)
  longest = 0 
  File.open(fname,'r') do |f|
    f.each_line do |line|
      max_len = line.split(".").max_by {|l| l.split(" ").size}
      longest = max_len.split(" ").size if max_len.split(" ").size > longest
    end 
  end
  longest 
end 

puts longest_sentence("txt1.txt")
