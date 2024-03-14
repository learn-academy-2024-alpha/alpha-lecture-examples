class ChangePayToHourlyPay < ActiveRecord::Migration[7.1]
  def change
    # rename_column :table_name, :old_column, :new_column
    rename_column :band_members, :pay, :something
  end
end
