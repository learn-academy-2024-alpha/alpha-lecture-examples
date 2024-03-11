class Book
  attr_accessor :title, :author, :page

  # set default value in param
  def initialize(author = 'anonymous')
    @title = title
    @author = author
    @page = 1
  end

  def read_pages(pages_read)
    @page += pages_read
  end
end
