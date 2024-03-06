# Ruby Classes and Objects 3/6/2024

# class  used to define a class
# scope of class goes thru end keyword

class Hulu
end

# p Hulu.new
# <Hulu:0x0000000102ee2660>
# p Hulu.new
# p Hulu.new
# p Hulu.new

#<Hulu:0x00000001005c2438>
#<Hulu:0x00000001005c2118>
#<Hulu:0x00000001005c1da8>

# 2 things to do with Classes
# 1.  hold data - set
# 2. retrieve data - get

# Setters

# class Hulu
#   def set_show_data(title)
#     @title = title
#     # @ denotes an instance variable
#   end
# end

# avatar = Hulu.new
# # p avatar
# avatar.set_show_data('Avatar')
# # p avatar
# #<Hulu:0x00000001028d17d0 @title="Avatar">
# ted = Hulu.new
# ted.set_show_data('Ted Lasso')
# p ted

# class Hulu
#   def set_show_data(title, actor)
#     @title = title
#     @actor = actor
#     # @ denotes an instance variable
#   end
# end

# # my_life = Hulu.new
# # my_life.set_show_data('My 600 lb Life', 'Amy')
# # p my_life

# # GETTERS

# # p my_life.title  ---> this doesn't work! 

# class Hulu
#   def set_show_data(title, actor)
#     @title = title
#     @actor = actor
#   end

#   def get_title
#     @title
#   end

#   def get_actor
#     @actor
#   end
# end

# # 1. create an instance of the class 
# monster = Hulu.new
# # 2. add data/methods
# monster.set_show_data('River Monster', 'Jeremy Wade')
# # 3. use your getter methods to get desired data
# # p monster.get_title  
# # # "River Monster"
# # p monster.get_actor

# #  INITIALIZER

# class Hulu
#   def initialize(title, actor)
#     @title = title
#     @actor = actor
#     @watched = false
#   end

#   def get_title
#     @title
#   end

#   def get_actor
#     @actor
#   end

#   def has_watched
#     @watched = true  
#     # this method isn't returning data, it's updating the value
#   end

#   def show_data 
#     if @watched
#       "You have watched #{@title} starring #{@actor}"
#     else
#       "You have not watched #{@title} starring #{@actor}"
#     end
#   end
# end

# ozark = Hulu.new('Ozark', 'Jason Bateman')
# # p ozark.show_data
# # # p ozark.has_watched  ---> this runs the method to change watched status and returns the value true or false
# # p ozark.show_data 
# # "You have not watched Ozark starring Jason Bateman"
# # true
# # "You have watched Ozark starring Jason Bateman"

# # p ozark.has_watched.show_data
# # undefined method `show_data' for true:TrueClass (NoMethodError)

# ozark.has_watched
# p ozark.show_data 

#  ATTRIBUTE ACCESSOR
# `attr_accessor` - makes more methods. :)
#  pass it SYMBOL  of instance var; getter and setter methods are yours! 🎉

class Hulu
  attr_accessor :title, :actor, :watched
  def initialize(title, actor)
    @title = title
    @actor = actor
    @watched = false
  end

  # def get_title
  #   @title
  # end

  # def get_actor
  #   @actor
  # end

  # def has_watched
  #   @watched = true  
  #   # this method isn't returning data, it's updating the value
  # end

  def show_data 
    if @watched
      "You have watched #{@title} starring #{@actor}"
    else
      "You have not watched #{@title} starring #{@actor}"
    end
  end
end

springer = Hulu.new('Jerry Springer', 'Jerry Springer')
p springer.title
"Jerry Springer"
# reassign value of title
springer.title = 'Euphoria'
p springer.title
"Euphoria"
p springer.show_data
springer.actor = 'Zendaya'
springer.watched = true
p springer.show_data
"You have watched Euphoria starring Zendaya"