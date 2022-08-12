=begin
Ex 1. using .new
Array.new
Hash.new
=end

module MyModule
  def my_method
    puts "hello world!"
  end
end

class MyClass
  include MyModule
end

my_obj = MyClass.new
my_obj.my_method

=begin
Ex 2. create a set of functionality that can be used by any class. We use them with classes through the include keyword
=end


