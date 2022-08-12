class Animal
  attr_accessor:name

  def initialize(name)
    self.name = name
  end

  def speak
    "Hello"
  end
end 

class GoodDog < Animal
  attr_accessor :color
  def initialize(name, color)
    super(name.capitalize)
    self.color = color
  end

  def speak
    super + " to you && Arf to #{name}!"
  end
end

bruno = GoodDog.new("bruno", "brown")
p bruno
puts bruno.speak
