class CircularQueue
  attr_accessor :queue, :old_idx, :cur_idx, :size, :max_size
  def initialize(max_size)
    self.max_size = max_size
    self.queue = (1..max_size).map {|x| nil}
    self.old_idx = 0
    self.cur_idx = 0
    self.size = 0
  end

  def dequeue
    return nil if size.zero?

    val = queue[old_idx]
    self.old_idx = self.next(old_idx)
    self.size -= 1
    val
  end

  def enqueue(v)
    self.queue[cur_idx] = v
    self.cur_idx = self.next(cur_idx)
    if size == max_size
      self.old_idx = self.next(old_idx)
    else
      self.size += 1
    end
  end

  private
  def next(idx)
    idx == max_size - 1 ? 0 : idx + 1
  end
end

queue = CircularQueue.new(3)
puts queue.dequeue == nil

queue.enqueue(1)
queue.enqueue(2)
puts queue.dequeue == 1

queue.enqueue(3)
queue.enqueue(4)
puts queue.dequeue == 2

queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)
puts queue.dequeue == 5
puts queue.dequeue == 6
puts queue.dequeue == 7
puts queue.dequeue == nil

queue = CircularQueue.new(4)
puts queue.dequeue == nil

queue.enqueue(1)
queue.enqueue(2)
puts queue.dequeue == 1

queue.enqueue(3)
queue.enqueue(4)
puts queue.dequeue == 2

queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)
puts queue.dequeue == 4
puts queue.dequeue == 5
puts queue.dequeue == 6
puts queue.dequeue == 7
puts queue.dequeue == nil
