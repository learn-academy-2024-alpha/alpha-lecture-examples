# RUBY CONDITIONALS & METHODS 3/4/24-
# - indentation matters!  2 spaces

# if is a Ruby keyword - reserved word for a specific purpose
# if takes an evaluation & returns Boolean
# end is also a keyword
# end closes the code block

if 7 + 8 == 15
  # p 'the answer is 15'
end

# else - keyword

# if 7 + 8 == 16
#   p 'is the answer 16?'
# else
#   p 'no conditions in this statement evaluated to true'
# end

# # elsif

# if 7 + 8 == 16
#   p 'is the answer 16?'
# elsif 7 + 8 == 17
#   p 'the answer is 17?'
# elsif 7 + 8 == 18
#   p 'the answer is 18? Really?'
# elsif 7 + 8 == 15
#   p 'yes, yes it does'
# else
#   p 'no conditions in this statement evaluated to true'
# end

# User Input

my_name = 'Matt'

# if my_name == 'Trish'
#   p 'Hi There Trish'
# else
#   p "Hey there, #{my_name}"
# end

#  gets - stops code execution and waits for you to enter something into the terminal and hit enter
#  p to print out the variable
#  gets grabs user Input and sets it to a variable , always returns a string

# my_name = gets.chomp
# p my_name

# p "What's your name?"
# your_name = gets.chomp
# p "Thank you for being a polyglot, #{your_name}!"

# Methods

# def use to define a method
# every def has an end

# def greeter
#   'Hello Alpha'
# end
# p greeter

# NOTE: - automatically returns LAST LINE of every method unless otherwise specified ===> implicit return

def greeter(name)
  "Hello #{name}!"
end

# p greeter 'Mark'

def multiply(num1, num2)
  num1 * num2
end

# p multiply(6, 8)
# p multiply(5, 4)
# p multiply(3, 7)
# p multiply(2, 8)
# p multiply(9, 3)

def greater_num(num1, num2)
  if num1 > num2
    "#{num1} is greater"
  elsif num1 < num2
    "#{num2} is greater"
  else
    'They are equal'
  end
end

# p greater_num(4, 5)

puts 'Enter you name, please'
user_name = gets.chomp
# p user_name
puts "Enter your Age please, #{user_name}"
user_age = gets.chomp.to_i
# p user_age

def can_you_vote(name, age)
  if age >= 18
    "Hi #{name}! #{age} is old enough to vote.  Hooray!"
  else
    "Hi #{name}! #{age} is not old enough to vote. Boo."
  end
end

p can_you_vote(user_name, user_age)
