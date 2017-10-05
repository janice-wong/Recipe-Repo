class CreateIngredients < ActiveRecord::Migration[5.1]
  def change
    create_table :ingredients do |t|
      t.integer :quantity
      t.string :measurement
      t.string :ingredient
      t.integer :recipe_id

      t.timestamps
    end
  end
end
