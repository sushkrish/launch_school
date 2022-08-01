def after_midnight(time)
  h,m = time.split(":").map{|s| s.to_i}
  after_m = (h*60 + m) 
  after_m % (60*24)
end

def before_midnight(time)
  h,m = time.split(":").map{|s| s.to_i}
  before_m = (24*60) - (h*60 + m)
  before_m % (60*24)
end

puts after_midnight('00:00') == 0
puts before_midnight('00:00') == 0
puts after_midnight('12:34') == 754
puts before_midnight('12:34') == 686
puts after_midnight('24:00') == 0
puts before_midnight('24:00') == 0
