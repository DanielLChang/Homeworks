class Houses < ActiveRecord::Migration
  def change
    create_table :houses do |house|
      house.string :address

      house.timestamps null: false
    end
  end
end
