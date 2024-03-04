# Ruby Intro 3/4/2024

- Matz - MINASWAN, Matz is nice and so we are nice
- Human happiness first
- Categories of programming languages
  - Dynamic language - dynamically typed language, can create a variable and change it's type later, opposite is a statically typed language
  - Interpreted language - interpreter reads each line of code and translates it to machine code, opposite is compiled languages
  - Scripting language - general purpose logic language, no UI
  - Open-source - the source code is available to anyone
  - Object-oriented programming language (OOP) - opposite is a functional language
- Everything is a class, everything we interact with is an instance of a class - object
- Version manager allow you to run multiple versions of a language
- REPL - read evaluate print loop, sandbox environment
- irb - interactive Ruby, REPL environment

### Data Types

- Integers - whole numbers
- Floats - partial numbers
- Strings - single quotes
- Boolean
  - relational
  - equality ==
  - logical && and logical ||
  - negation !=
- nil
- snake_case naming conventions for variables
- string interpolation uses double quotes "#{}"
- methods are accessors, can add a bang operator to make a mutator

```ruby
➜  alpha-lecture-examples git:(ruby-intro) ✗ irb
 :001 > 5 + 4
 => 9
 :002 > 5 - 3
 => 2
 :003 > 4 * 2
 => 8
 :004 > 6 / 3
 => 2
 :005 > 4 ** 2
 => 16
 :006 > 5 % 3
 => 2
 :007 > 5 / 2
 => 2
 :008 > 4.0
 => 4.0
 :009 > 4
 => 4
 :010 > 5.0 / 2
 => 2.5
 :011 > 'hello'
 => "hello"
 :012 > "hey y'all"
 => "hey y'all"
 :013 > true
 => true
 :014 > false
 => false
 :015 > 4 > 3
 => true
 :016 > 4 < 4
 => false
 :017 > 5 >= 3
 => true
 :018 > 5 <= 9
 => true
 :019 > 8 == 4+4
 => true
 :020 > 8 == '8'
 => false
 :021 > 5 > 7 && 4 == 4
 => false
 :022 > 5 > 7 || 4 == 4
 => true
 :023 > 3 != 7
 => true
 :024 > nil
 => nil
 :025 > my_name = 'sarah'
 => "sarah"
 :026 > my_name
 => "sarah"
 :027 > "hello my name is #{my_name}"
 => "hello my name is sarah"
 :028 > my_name
 => "sarah"
 :029 > my_name.length
 => 5
 :030 > my_name.upcase
 => "SARAH"
 :031 > my_name.capitalize
 => "Sarah"
 :032 > my_name.reverse
 => "haras"
 :033 > my_name.delete('h')
 => "sara"
 :034 > my_name.delete'h'
 => "sara"
 :035 > my_name.include?('a')
 => true
 :036 > my_name.include?('j')
 => false
 :037 > my_name
 => "sarah"
 :038 > my_name = my_name.reverse
 => "haras"
 :039 > my_name
 => "haras"
 :040 > my_name.upcase!
 => "HARAS"
 :041 > my_name
 => "HARAS"
 :042 > my_num = 8
 => 8
 :043 > my_num
 => 8
 :044 > my_num.to_s
 => "8"
 :045 > my_other_num = '9'
 => "9"
 :046 > my_other_num.to_i
 => 9
 :047 > my_num.to_f
 => 8.0
 :048 > my_num.class
 => Integer
 :049 > 8.0.class
 => Float
 :050 > my_name.class
 => String
 :051 > nil.class
 => NilClass
 :052 > true.class
 => TrueClass
 :053 > false.class
 => FalseClass
 :054 > my_array = [3, 4, 5, 6]
 => [3, 4, 5, 6]
 :055 > my_array[0]
 => 3
 :056 > my_array[3]
 => 6
 :057 > my_array[-1]
 => 6
 :058 > my_array[-2]
 => 5
 :059 > my_array.last
 => 6
 :060 > my_array.first
 => 3
 :061 > my_array.length
 => 4
 :062 > my_array.reverse
 => [6, 5, 4, 3]
 :063 > my_array.delete(3)
 => 3
 :064 > my_array
 => [4, 5, 6]
 :065 > my_array.upcase
(irb):65:in `<main>': undefined method `upcase' for [4, 5, 6]:Array (NoMethodError)
	from /Users/sarahproctor/.rvm/gems/ruby-3.2.0/gems/irb-1.11.1/exe/irb:9:in `<top (required)>'
	from /Users/sarahproctor/.rvm/gems/ruby-3.2.0/bin/irb:25:in `load'
	from /Users/sarahproctor/.rvm/gems/ruby-3.2.0/bin/irb:25:in `<main>'
	from /Users/sarahproctor/.rvm/gems/ruby-3.2.0/bin/ruby_executable_hooks:22:in `eval'
	from /Users/sarahproctor/.rvm/gems/ruby-3.2.0/bin/ruby_executable_hooks:22:in `<main>'
 :066 > my_array.reverse.first
 => 6
 :067 > my_array
 => [4, 5, 6]
 :068 > my_array[0] = 99
 => 99
 :069 > my_array
 => [99, 5, 6]
 :070 > my_array << 80
 => [99, 5, 6, 80]
```
