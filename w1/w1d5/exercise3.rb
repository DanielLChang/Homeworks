class Map

  attr_accessor :my_map

  def initialize
    @my_map = []
  end

  def assign(key, value)
    key_index = @my_map.index { |pair| pair[0] == key }
    if key_index.nil?
      @my_map << [key, value]
    else
      @my_map[key_index][1] = value
    end
  end

  def lookup(key)
    @my_map.each do |pair|
      return pair[1] if pair[0] == key
    end
    nil
  end

  def remove(key)
    @my_map.reject! do |pair|
      pair[0] == key
    end
    nil
  end

  def show
    @my_map
  end

end
