ALPHABET = ('a'..'z').to_a
def cleanup(str)
  res = []
  str.chars.each do |ch|
    if ALPHABET.include? ch
      res << ch
    else
      res << " " unless res[-1]==" "
    end
  end
  res.join("")
end

puts cleanup("---what's my +*& line?") == ' what s my line '
