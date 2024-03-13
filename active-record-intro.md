# ACTIVE RECORD

- ORM - object relational mapping
- Translator
- translating Ruby to SQL

# MODEL - works with db

rails generate model Dog name:string breed:string age:integer

Dog - class, must be singular and PascalCase
followed by column_name:datatype
no spaces between column_name & datatype!
no commas between columns

`rails new active_record_intro -d postgresql -T `
`cd active_record_intro `
`rails db:create`

Created database 'active_record_intro_development'
Created database 'active_record_intro_test'

`rails generate model Animal category:string name:string age:integer`

invoke active_record
create db/migrate/20240313175352_create_animals.rb
create app/models/animal.rb

`rails db:migrate`
== 20240313175352 CreateAnimals: migrating ====================================
-- create_table(:animals)
-> 0.0059s
== 20240313175352 CreateAnimals: migrated (0.0059s) ===========================

creates the schema: db/schema

```ruby
ActiveRecord::Schema[7.1].define(version: 2024_03_13_175352) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "animals", force: :cascade do |t|
    t.string "category"
    t.string "name"
    t.integer "age"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
```

Remember CRUD - Create, Read, Update, Delete

`rails c` or `rails console`

Animal.all
--> [] returns empty array because no data yet, but shows the table exists!

# Create

Animal.create(category:"giraffe", name:"jeffrey", age:35)
Animal.create(category:"shark", name:"shemu", age:210)

# Read

Animal.all
Animal.first
Animal.second
Animal.find(1) find by primary Key
Animal.where(age: 210)

# Update

animal_1 = Animal.find(1)
animal_1.update(name:"Mike")

Animal.first.update(name:"Tobey")

# Delete

second = Animal.second
second.destroy
