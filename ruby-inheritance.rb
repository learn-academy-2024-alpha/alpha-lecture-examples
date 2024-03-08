# Ruby Class Inheritance

# OOP
# p 5.class
# => Integer

# class Hulu
# end
# p Hulu.new
# p Hulu.new
# p Hulu.new

# 4 Pillars
# 1. Abstraction - keeping all the logic inside a class, keeping the mechanics inside, you don't have to know how the interior works in order for it to work
# 2. Encapsulation - be protective of the inner workings of the class, don't allow logic to leak
# 3. Polymorphism - many shapes, universal remote, make reusable classes
# 4. Inheritance - create relationships between classes, classes can share data and behavior

# define a class for a show, create many instances of that show
# class Hulu
#   attr_accessor :title, :actor, :watched

#   def initialize(title, actor)
#     @title = title
#     @actor = actor
#     @watched = false
#   end

#   def show_data
#     if @watched
#       "You have watched #{@title} starring #{@actor}"
#     else
#       "You have not watched #{@title} starring #{@actor}"
#     end
#   end
# end

# jerry = Hulu.new('Jerry Springer', 'Jerry Springer')
# #<Hulu:0x0000000100a075c0 @title="Jerry Springer", @actor="Jerry Springer", @watched=false>
# p jerry.show_data
# # "You have not watched Jerry Springer starring Jerry Springer"

# class Netflix
#   attr_accessor :title, :run_time, :watched

#   def initialize(title, run_time)
#     @title = title
#     @run_time = run_time
#     @watched = false
#   end

#   def show_data
#     if @watched
#       "You have watched #{@title} that is #{@run_time} long"
#     else
#       "You have not watched #{@title} that is #{@run_time} long"
#     end
#   end
# end

# things = Netflix.new('Stranger Things', '45 min')
# #<Netflix:0x00000001046f5ef0 @title="Stranger Things", @run_time="45 min", @watched=false>
# p things.show_data 
# # "You have not watched Stranger Things that is 45 min long"

# # superclass
# class StreamingService
#   attr_accessor :title

#   def initialize(title)
#     @title = title
#   end
# end

# #subclass
# class Hulu < StreamingService
#   attr_accessor :actor, :watched

#   def initialize(title, actor)
#     # super calls the initialize method in the superclass
#     super(title)
#     @actor = actor
#     @watched = false
#   end

#   def show_data
#     if @watched
#       "You have watched #{@title} starring #{@actor}"
#     else
#       "You have not watched #{@title} starring #{@actor}"
#     end
#   end
# end

# jerry = Hulu.new('Jerry Springer', 'Jerry Springer')
# #<Hulu:0x0000000100a075c0 @title="Jerry Springer", @actor="Jerry Springer", @watched=false>
# p jerry.show_data
# # "You have not watched Jerry Springer starring Jerry Springer"

# # ruby-inheritance.rb:79:in `initialize': wrong number of arguments (given 2, expected 1)

# #subclass
# class Netflix < StreamingService
#   attr_accessor :run_time, :watched

#   def initialize(title, run_time)
#     super(title)
#     @run_time = run_time
#     @watched = false
#   end

#   def show_data
#     if @watched
#       "You have watched #{@title} that is #{@run_time} long"
#     else
#       "You have not watched #{@title} that is #{@run_time} long"
#     end
#   end
# end

# things = Netflix.new('Stranger Things', '45 min')
# #<Netflix:0x00000001046f5ef0 @title="Stranger Things", @run_time="45 min", @watched=false>
# p things.show_data 
# # "You have not watched Stranger Things that is 45 min long"


# superclass
class StreamingService
  # create getter and setter methods
  attr_accessor :title, :watched

  def initialize(4. 'Stranger Things')
    @title = 5. 'Stranger Things'
    @watched = false
  end
end

#subclass
class Hulu < StreamingService
  attr_accessor :actor

  def initialize(title, actor)
    # super calls the initialize method in the superclass
    super(title)
    @actor = actor
  end

  def show_data
    if @watched
      "You have watched #{@title} starring #{@actor}"
    else
      "You have not watched #{@title} starring #{@actor}"
    end
  end
end

jerry = Hulu.new('Jerry Springer', 'Jerry Springer')
#<Hulu:0x0000000100a075c0 @title="Jerry Springer", @actor="Jerry Springer", @watched=false>
p jerry.show_data
# "You have not watched Jerry Springer starring Jerry Springer"

# ruby-inheritance.rb:79:in `initialize': wrong number of arguments (given 2, expected 1)

#subclass
class Netflix < StreamingService
  attr_accessor :run_time

  def initialize(2. 'Stranger Things', run_time)
    super calls initialize in the superclass
    super(3. 'Stranger Things')
    @run_time = run_time
  end

  def show_data
    if @watched
      "You have watched #{6. 'Stranger Things'} that is #{@run_time} long"
    else
      "You have not watched #{@title} that is #{@run_time} long"
    end
  end
end

things = Netflix.new(1. 'Stranger Things', '45 min')
#<Netflix:0x00000001046f5ef0 @title="Stranger Things", @run_time="45 min", @watched=false>
p things.show_data 
# "You have not watched Stranger Things that is 45 min long"
p things.watched = true
p things.watched