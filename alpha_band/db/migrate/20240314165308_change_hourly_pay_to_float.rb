class ChangeHourlyPayToFloat < ActiveRecord::Migration[7.1]
  def change
    # change_column :table_name, :column_name, :datatype
    change_column :band_members, :hourly_pay, :float
  end
end
