def get_grade(s1, s2, s3)
  case (s1+s2+s3)/3.0
  when 90..100 then 'A'
  when 80...90 then 'B'
  when 70...80 then 'C'
  when 60...70 then 'D'
  else 'F'
  end 
end 

puts get_grade(95, 90, 93) == "A"
puts get_grade(50, 50, 95) == "D"
