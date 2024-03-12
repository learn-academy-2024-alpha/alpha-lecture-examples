# DATABASES/POSTGRESQL INTRO 3/12/2024

```ruby
class Student
  def initialize(name, cohort)
  @name = name
  @cohort = cohort
  end
end

Student.new('Seth', 'Alpha 2024')
Student.new('Amir', 'Alpha 2024')

```

## Databases

- storing data in organized way
- PostgreSQL - Relational Database (RDMS)
- rows and columns

To Create DB

1. what is the structure
2. add some data

PRIMARY KEY - row(obj) unique identifier

<!--       POSTGRES    -->

- talks to databases
- ORDMS

commands:
`psql`
`\l`

```sql

SELECT * FROM country - gives us all the data

SELECT name, continent
FROM country
ORDER BY name DESC

SELECT name, continent, population
FROM country
ORDER BY population DESC

SELECT name, continent, population
FROM country
WHERE continent = 'South America'

WHERE is comparison operator

-- 1e6 = 1 with 6 zeros after it, 1000000

use the LIKE and wildcard % together in a WHERE clause
```
