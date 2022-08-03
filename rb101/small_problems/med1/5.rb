def display_stars(n, stars)
  blanks = (n-stars)/2
  puts " "*blanks + "*"*stars + " "*blanks
end
def diamond(n)
  (1..n).step(2) {|i| display_stars(n,i)}
  (1..(n-2)).step(2) {|i| display_stars(n,n-1-i)}
end

diamond(3)
diamond(7)
diamond(9)
