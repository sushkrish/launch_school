def dms(angle)
  d = angle.floor(0)
  rest = (angle - d)*60
  m = rest.floor
  s = (rest - m)*60
  d_s = "#{d}°"
  m_s = m < 10? "0#{m}'" : "#{m}'"
  s_s = s < 10? "0#{s.to_s[0]}\"" : "#{s.to_s[0,2]}\""
  d_s + m_s + s_s
end

puts dms(30) == %(30°00'00")
puts dms(76.73) == %(76°43'48")
puts dms(254.6) == %(254°36'00")
puts dms(93.034773) == %(93°02'05")
puts dms(0) == %(0°00'00")
puts dms(360) == %(360°00'00") || dms(360) == %(0°00'00")
