class Student
  attr_accessor :name

  def initialize(name, grade)
    self.name = name
    @grade = grade
  end

  def better_grade_than?(other_student)
    self.grade > other_student.grade
  end

  protected
  attr_accessor :grade
end

joe = Student.new("joe", 73)
bob = Student.new("bob", 23)
puts "Well done!" if joe.better_grade_than?(bob)
