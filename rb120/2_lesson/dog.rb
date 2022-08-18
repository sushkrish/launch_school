class Pet
  def run 
    'running!'
  end
  
  def jump
    'jumping!'
  end

end

class Dog < Pet
  def swim
    'swimming!'
  end

  def fetch
    'fetching!'
  end

  def speak
    'bark!'
  end
end

class Cat < Pet
  def speak
    "Meow!"
  end
end

class Bulldog < Dog
  def swim
    "can't swim"
  end
end

teddy = Dog.new
puts teddy.speak # => "bark!"
puts teddy.swim # => "swimming!"

rocky = Bulldog.new
puts rocky.swim

fluffy = Cat.new
puts fluffy.speak
puts fluffy.jump
