class Deck
  RANKS = ((2..10).to_a + %w(Jack Queen King Ace)).freeze
  SUITS = %w(Hearts Clubs Diamonds Spades).freeze
  def initialize
    refresh_shuffle
  end

  def draw
    refresh_shuffle if self.deck.empty?
    self.deck.pop
  end

  private
  attr_accessor :deck
  def refresh_shuffle
    self.deck = (SUITS.map do |suit|
      RANKS.map do |rank|
        Card.new(rank, suit)
      end
    end).flatten
    self.deck.shuffle!
  end
end

class Card
  include Comparable
  attr_reader :rank, :suit

  def initialize(rank, suit)
    @rank = rank
    @suit = suit
  end
  
  def <=>(card2)
    val <=> card2.val
  end

  def to_s
    "#{rank} of #{suit}"
  end

  protected
  def val
    case rank
    when 'Jack' then 10
    when 'Queen' then 11
    when 'King' then 12
    when 'Ace' then 13
    else rank
    end
  end
end

deck = Deck.new
drawn = []
52.times { drawn << deck.draw }
p drawn.count { |card| card.rank == 5 } == 4
p drawn.count { |card| card.suit == 'Hearts' } == 13

drawn2 = []
52.times { drawn2 << deck.draw }
p drawn != drawn2 # Almost always.
