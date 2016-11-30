class People < ActiveRecord::Migration
  def change
    create_table :people do |person|
      person.string :name
      person.integer :house_id
      
      person.timestamps null: false
    end
  end
end
