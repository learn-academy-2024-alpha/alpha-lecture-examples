class AddWageToBandMembers < ActiveRecord::Migration[7.1]
  def change
    # add_column :table_name, :column_name, :datatype
    add_column :band_members, :pay, :integer
  end
end
