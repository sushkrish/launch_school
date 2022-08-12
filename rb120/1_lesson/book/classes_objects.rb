#instance variables keep track of state and instance methods expose behavior for objects.

class GoodDog
  @@number_of_dogs = 0
  DOG_YEARS = 7

  #getters and setters
  attr_accessor :name
  #attr_reader
  #attr writer

  #constructor
  def initialize(name, age)
    @name = name #instance variable
    @age = age * 7 
    @@number_of_dogs += 1
  end

  def speak
    "#{name} says Arf!"
  end

  def age
    @age
  end

  def age=(age)
    @age = age
  end

  def change_info(n, a)
    self.name = n
    self.age = a
  end
  
  #class method
  def self.what_am_i
    puts "I'm a GoodDog class"
  end

  def self.total_number_of_dogs
    @@number_of_dogs
  end

  def self.total_number_of_dogs=(n)
    @@number_of_dogs = n
  end

  #to_s is called when using puts & string interpolation using #{}
  def to_s
    "This dog's name is #{name} and it is #{age} dog years old."
  end 
end

sparky = GoodDog.new("Sparky", 1)
puts sparky.speak

fido = GoodDog.new("Fido", 10)
puts fido.speak

puts sparky.name
sparky.name = "Sparky Sparky"
puts sparky.name

puts "age is: #{sparky.age}"
sparky.age = 12
puts sparky.age

GoodDog.what_am_i
puts GoodDog.total_number_of_dogs
GoodDog.total_number_of_dogs = 3
puts GoodDog.total_number_of_dogs

puts sparky
