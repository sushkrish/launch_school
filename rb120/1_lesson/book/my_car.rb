class Vehicle
  attr_accessor :color, :model, :current_speed
  attr_reader :year
  @@num_vehicles = 0

  def initialize(year, color, model)
    @year = year 
    @@num_vehicles += 1
    self.color = color
    self.model = model
    self.current_speed = 0
  end

  def self.show_total_vehicles
    puts @@num_vehicles
  end 

  def speed_up(add = 1)
    self.current_speed += add
  end

  def turn_off
    self.current_speed = 0
  end

  def spray_paint(color)
    self.color = color
  end

  def self.mileage(distance, gas_vol)
    distance / gas_vol
  end

  def to_s
    "#{color} #{model} #{year} running at #{current_speed}"
  end

  def brake(sub = 1)
    self.current_speed -= sub
  end

  def age
    how_old?
  end

  private
  def how_old?
    Time.now.year - self.year
  end 
end

module GPS
  def current_location
    return "New York"
  end

  def navigate_to(to)
    "Going from #{current_location} to #{to}"
  end
end 

class MyCar < Vehicle
  include GPS
  TYPE = :car
  def initialize(year, color, model)
    super(year, color, model)
  end
end

class MyTruck < Vehicle
  TYPE = :truck
  def initialize(year, color, model)
    super(year, color, model)
  end
end 

leaf = MyCar.new(2017, 'grey', 'Leaf')
leaf.speed_up
puts leaf.current_speed
leaf.speed_up(20)
puts leaf.current_speed
leaf.brake(10)
puts leaf.current_speed
leaf.turn_off
puts leaf.current_speed

puts leaf.color
leaf.spray_paint('red')
puts leaf.color

puts "Gas mileage is #{MyCar.mileage(100,10)}"

puts leaf
puts leaf.navigate_to("Oklahoma")
puts "My car is #{leaf.age} years old"

trucker = MyTruck.new(2022, "blue", "TEsla")
Vehicle.show_total_vehicles

p MyTruck.ancestors, MyCar.ancestors, Vehicle.ancestors
