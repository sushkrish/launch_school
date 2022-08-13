class Cat
  attr_accessor :name, :color

  def initialize(name, color = 'purple')
    self.name = name
    self.color = color
  end 

  def greet
    puts "Hello! My name is #{self.name} and I'm a #{self.color} #{self.class.to_s.downcase}!"
  end
end

kitty = Cat.new('Sophie')
kitty.greet
