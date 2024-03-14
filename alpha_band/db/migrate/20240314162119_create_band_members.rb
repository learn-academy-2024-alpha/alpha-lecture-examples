class CreateBandMembers < ActiveRecord::Migration[7.1]
  def change
    create_table :band_members do |t|
      t.string :name
      t.string :instrument

      t.timestamps
    end
  end
end
