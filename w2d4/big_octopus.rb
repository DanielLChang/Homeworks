#Big O-ctopus and Biggest Fish
fish_arr = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

#O(n^2)
def sluggish_oct(arr)

end

#O(n log n)
class Array
  def merge_sort(&prc)
    prc ||= Proc.new { |num1, num2| num1 <=> num2 }

    return self if self.length <= 1

    mid = count / 2
    left = self.take(mid).merge_sort(&prc)
    right = self.drop(mid).merge_sort(&prc)

    Array.merge(left, right, &prc)
  end

  private
  def self.merge(left, right, &prc)
    merged = []

    until left.empty? || right.empty?
      case prc.call(left.first, right.first)
      when -1
        merged << left.shift
      when 0
        merged << left.shift
      when 1
        merged << right.shift
      end
    end

    merged + left + right
  end
end

def dominant_oct(arr)
  prc = Proc.new { |num1, num2| num1 <=> num2 }
  arr.merge_sort(&prc)[0]
end

#O(n)
def clever_oct(arr)
  biggest_fish = arr.first
  fish_arr.each do |fish|
    biggest_fish = fish if fish.length > biggest_fish.length
  end
  biggest_fish
end

#Dancing Octopus
tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]

#O(n)
def slow_dance(dir, tiles_array)
  tiles_array.each_with_index do |tile, idx|
    return idx if tile == dir
  end
end

tiles_hash = {
  "up" => 0,
  "right-up" => 1,
  "right" => 2,
  "right-down" => 3,
  "down" => 4,
  "left-down" => 5,
  "left" => 6,
  "left-up" => 7
}

def fast_dance(dir, new_tiles_data_structure)
  tiles_hash[dir]
end
