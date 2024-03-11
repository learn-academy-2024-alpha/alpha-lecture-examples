# RSPEC 3/11/2024

# TDD - Test Driven Development

- red-green-refactor (good fail - code - pass - refactor)

Triple A's

- Arrange, Act, Assert
- set up
- make a change
- assert result from the change

Book Class

- title
- author
- pages - which can change when read (method)

# spec file

    - specification file
    - define my expectations, fail if not met

# DSL - domain specialized language

- tests Ruby code ONLY
  https://rubygems.org/gems/rspec/versions/3.4.0

run spec files:
` rspec file_name_spec.rb -f d`

2 things in your spec file:
require 'rspec'
require_relative 'book'

<!-- Good fail example:  got #<NameError: uninitialized constant Book> -->
