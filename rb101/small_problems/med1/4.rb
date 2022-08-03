OFF = -1
ON = 1

def switches(n)
  switch = {}
  #initialize
  (1..n).to_a.each {|i| switch[i]=-1}
  (1..n).to_a.each do |div|
    switch.keys.each do |key|
      switch[key] = switch[key]*-1 if (key % div == 0)
    end
  end
  (switch.select {|k,v| v==1}).keys
end

p switches(5) == [1,4]
p switches(10) == [1,4,9]
