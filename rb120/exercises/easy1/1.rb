class Banner
  attr_accessor :message

  def initialize(message)
    self.message = message
  end

  def to_s
    [horizontal_rule, empty_line, message_line, empty_line, horizontal_rule].join("\n")
  end

  private

  def horizontal_rule
    '+' + '-'*(self.message.length+2) + '+'
  end

  def empty_line
    '|' + ' '*(self.message.length + 2) + '|'
  end

  def message_line
    "| #{@message} |"
  end
end

banner = Banner.new('To boldly go where no one has gone before.')
puts banner
=begin
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
=end

banner = Banner.new('')
puts banner
=begin
+--+
|  |
|  |
|  |
+--+
=end
