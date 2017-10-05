json.extract! ingredient, :id, :quantity, :measurement, :ingredient, :recipe_id, :created_at, :updated_at
json.url ingredient_url(ingredient, format: :json)
