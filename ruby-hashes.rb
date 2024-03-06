# RUBY HASHES 3/6/2024

# Hash = data structure, unique key:value pairs. 
# key is a symbol, value is any data type 
# access value by referencing the key

# 2 ways to create Hash 

# 1. k:v pairs inside { }
#  pairs are separated by a comma
# assign to variable to print out hash

# person = { first_name: "Buffy", last_name: "Summers", role: "Vampire Slayer" }
# p person

{:first_name=>"Buffy", :last_name=>"Summers", :role=>"Vampire Slayer"}

people = Hash.new
p people
# {}

# Manipulating Hashes

# C - create
# R - read(return data)
# U - update
# D - delete

# CRUD

# Create:
person = { first_name: "Buffy", last_name: "Summers", role: "Vampire Slayer" }
# p person

# Read:
#  p person - returns all the data in hash
# return one value

# p person[:first_name]
#  "Buffy"

#  Add content to Hash
p person[:mother] = "Joyce"
#  p person
#  {:first_name=>"Buffy", :last_name=>"Summers", :role=>"Vampire Slayer", :mother=>"Joyce"}

# update existing data
person[:role] = "The Chosen One"
# p person
# {:first_name=>"Buffy", :last_name=>"Summers", :role=>"The Chosen One", :mother=>"Joyce"}

person[:love_interests] = ['Angel', 'Spike']
# p person
{:first_name=>"Buffy", :last_name=>"Summers", :role=>"The Chosen One", :mother=>"Joyce", :love_interests=>["Angel", "Spike"]}

# update the key
person[:mom] = person.delete(:mother)
# hashname[:new_key] = hashname.delete(:old_key)
# p person
{:first_name=>"Buffy", :last_name=>"Summers", :role=>"The Chosen One", :love_interests=>["Angel", "Spike"], :mom=>"Joyce"}

#add to existing array
person[:love_interests][2] = 'Riley'
# p person[:love_interests]
# ["Angel", "Spike", "Riley"]

# change value at specific index in array
person[:love_interests][0] = "Angelo"
# p person[:love_interests]
# ["Angelo", "Spike", "Riley"]

# DELETE:
person.delete(:last_name)
# p person
{:first_name=>"Buffy", :role=>"The Chosen One", :love_interests=>["Angelo", "Spike", "Riley"], :mom=>"Joyce"}

# delete element in the array that is a 'value' in k-v pair
person[:love_interests].delete("Riley")
p person

{:first_name=>"Buffy", :role=>"The Chosen One", :love_interests=>["Angelo", "Spike"], :mom=>"Joyce"}


# Enumerables and Duck Typing
# modules - grouping together like things  with similar properties
# enumerables - module that groups things that are ITERABLE --> hashes, arrays, ranges, etc 
# aka Duck Typing 

characters = {slayer: 'Buffy', witch: 'Willow', vampire: 'Spike'}

characters.each do |key, value|
  p "#{value}'s role is the #{key}"
end
# "Buffy's role is the slayer"
# "Willow's role is the witch"
# "Spike's role is the vampire"

def buffy_roles hash
  hash.map do |key, value|
  "#{value} is a #{key}"
  end
end

p buffy_roles (characters)
# ["Buffy is a slayer", "Willow is a witch", "Spike is a vampire"]  // map returns an array!

