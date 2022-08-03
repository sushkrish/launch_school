require 'date'

def friday_13th(y)
  (1..12).to_a.map {|m| Date.new(y, m, 13).friday? ? 1 : 0}.reduce(:+)
end

p friday_13th(2015) == 3
p friday_13th(1986) == 1
p friday_13th(2019) == 2
