# RUBY BLOCKS 3/5/24

#  Iteration

# while - needs starting point and end point, condition starts as true will eventually become false

num = 1

while num <= 10
  # p num
  num += 1
end

# 1
# 2
# 3
# 4
# 5
# 6
# 7
# 8
# 9
# 10

# METHODS - can take anonymous functions, aka blocks
# Block definition: 
#  - using `do` and `end ` - multilines
# - {}  - one-liners

#  Times - executes a block a certain number of times

8.times do
  # p 'hello world'
end

#  OR

# 8.times { p 'hello world' }

# "hello world"
# "hello world"
# "hello world"
# "hello world"
# "hello world"
# "hello world"
# "hello world"

number = 10

number.times do 
  # p 'hello world'
end

#  EACH
#  - works on arrays, it's similar to forEach in JS. 

nums = [3, 4, 5, 6]

nums.each do |value|
  # p value * 5
end

# 3, 4, 5, 6


# RANGES
#  - list of values, start & end point separated by two dots, must set to variable to use

range = 1..1000
# p range

range.each do |value|
  # p value
end

letter_range = 'a'..'f'
# letter_range.each do |value|
#   p  "p #{value}"
#   print "print #{value}"
#   puts "puts #{value}"
# end

# p letter_range.to_a
# p letter_range.to_a
# p letter_range.to_a

# ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

#  MAP

numbers = 1..10
# mapped = numbers.map do |value|
#   value 
# end

# p mapped  [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]

# mapped = numbers.map do |value|
#   if value % 2 === 0
#     'even'
#   else
#     'odd'
#   end
# end

# p mapped

mapped = numbers.map do |value|
  if value.even?
    'even'
  else
    'odd'
  end
end

# p mapped


def even_or_odd array
  array.map do |value|
    if value.even?
      'even'
    else
      'odd'
    end
  end
end

# p even_or_odd 1..20

# SELECT
# - like filter in JS, return a subset based on condition, also has built in if statement

def only_evens(array)
  array.select do |value|
    value.even?
  end
end

p only_evens 1..8