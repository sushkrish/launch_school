def time_of_day(time)
  time = time % (24 * 60)
  hours = time/60
  hours_s = hours < 10? "0#{hours}" : "#{hours}"
  mins = time % 60 
  mins_s = mins < 10? "0#{mins}" : "#{mins}"
  hours_s + ":" + mins_s
end

puts time_of_day(0) == "00:00"
puts time_of_day(-3) == "23:57"
puts time_of_day(35) == "00:35"
puts time_of_day(-1437) == "00:03"
puts time_of_day(3000) == "02:00"
puts time_of_day(800) == "13:20"
puts time_of_day(-4231) == "01:29"
