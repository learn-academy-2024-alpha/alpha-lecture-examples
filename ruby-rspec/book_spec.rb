require 'rspec'
require_relative 'book'
require_relative 'library'

# AAA
#  Arrange - setup
describe 'Book' do
  before(:each) do
    @book = Book.new
  end

  it 'should exist' do
    # curly brackets because it's a behavior
    # act is the instantiation
    # assert is the expect
    expect { @book }.to_not raise_error
  end

  it 'should have a title' do
    # ACT
    my_book = Book.new
    # Arrange
    my_book.title = 'Lord of the Rings'
    # Assert
    expect(my_book.title).to eq 'Lord of the Rings'
  end

  it 'should have an author' do
    my_book = Book.new
    expect(my_book.author).to eq 'anonymous'
    expect(my_book.author).to be_a String
  end

  it 'starts at page 1' do
    my_book = Book.new
    expect(my_book.page).to eq 1
    expect(my_book.page).to be_a Integer
  end

  it 'can read pages' do
    my_book = Book.new
    #  expect { Counter.increment }.to change { Counter.count }.from(0).to(1)
    expect { my_book.read_pages 5 }.to change { my_book.page }.from(1).to(6)
  end
end

describe 'Library' do
  it 'has to be real' do
    expect { Library.new }.to_not raise_error
  end

  it 'has an array of books' do
    my_library = Library.new
    # we are just creating the array and calling it book_collection
    expect(my_library.book_collection).to be_a Array
  end

  it 'adds books to collection' do
    my_library = Library.new
    # create instances of Book
    lotr = Book.new
    brave = Book.new
    # add them to library - create a method (add_books)
    my_library.add_books lotr
    my_library.add_books brave
    expect(my_library.book_collection).to_not be_empty
    expect(my_library.book_collection).to contain_exactly(lotr, brave)
  end
end
