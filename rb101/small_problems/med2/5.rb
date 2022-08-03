def triangle(s1, s2, s3)
  sides = [s1,s2,s3].sort
  return :invalid unless sides[0] + sides[1] > sides[2] && (sides.all? {|s| s > 0})
  return :equilateral if (s1 == s2) && (s2 == s3)
  return :isosceles if (s1 == s2) || (s2 == s3) || (s1 == s3)
  :scalene
end

p triangle(3, 3, 3) == :equilateral
p triangle(3, 3, 1.5) == :isosceles
p triangle(3, 4, 5) == :scalene
p triangle(0, 3, 3) == :invalid
p triangle(3, 1, 1) == :invalid
