def triangle(a,b,c)
  return :invalid unless (a+b+c == 180) && (a*b*c > 0)
  return :right if [a,b,c].include? 90
  return :acute if [a,b,c].all? {|x| x < 90}
  return :obtuse if [a,b,c].one? {|x| x > 90}
end

p triangle(60, 70, 50) == :acute
p triangle(30, 90, 60) == :right
p triangle(120, 50, 10) == :obtuse
p triangle(0, 90, 90) == :invalid
p triangle(50, 50, 50) == :invalid
