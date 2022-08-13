class Person
  attr_accessor :first_name, :last_name

  def initialize(first_name, last_name='')
    self.first_name = first_name
    self.last_name = last_name 
  end 

  def name
    (self.first_name + " " + self.last_name).strip
  end

  def name=(name)
    self.first_name = name.split(" ")[0]
    self.last_name = name.split(" ")[1]
  end

  def to_s
    name
  end

end 

bob = Person.new('Robert')
p bob.name
p bob.first_name
p bob.last_name
bob.last_name = 'Smith'
p bob.name

bob.name = "John Adams"
p bob.first_name
p bob.last_name

bob = Person.new('Robert Smith')
rob = Person.new('Robert Smith')
p bob.name == rob.name
puts "The person's name is: #{bob}"
