def put_3_stars(n,l)
  # l is total space taken by stars sequence in the line
  offset = " "* ((n - l)/2)
  space = " " * ((l -3)/2)
  puts (offset + "*" + space + "*" + space + "*" + offset)
end

def star(n)
  return unless n.odd?
  (n-1).times { |i| put_3_stars(n, n-i) if i.even? }
  puts "*"*n
  (n-1).times { |i| put_3_stars(n, i+2) if i.odd? }
end

star(7)
star(9)
