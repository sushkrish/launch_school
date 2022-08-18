module Walkable
  def walk
    puts "#{self} #{self.gait} forward"
  end
end

class Noble
  attr_accessor :title, :name
  
  include Walkable

  def initialize(name, title)
    self.name = name
    self.title = title
  end

  def to_s
    self.title + " " + self.name
  end

  def gait
    "struts"
  end
end

class Person
  attr_reader :name
  include Walkable
  def initialize(name)
    @name = name
  end

  def to_s
    name
  end

  private

  def gait
    "strolls"
  end
end

class Cat
  attr_reader :name
  include Walkable
  def initialize(name)
    @name = name
  end

  def to_s
    @name
  end

  private

  def gait
    "saunters"
  end
end

class Cheetah
  attr_reader :name
  include Walkable
  def initialize(name)
    @name = name
  end

  def to_s
    name
  end

  private

  def gait
    "runs"
  end
end

mike = Person.new("Mike")
mike.walk
# => "Mike strolls forward"

kitty = Cat.new("Kitty")
kitty.walk
# => "Kitty saunters forward"

flash = Cheetah.new("Flash")
flash.walk
# => "Flash runs forward"

byron = Noble.new("Byron", "Lord")
byron.walk
# => "Lord Byron struts forward"
