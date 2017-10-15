Recipe.all.destroy_all
Ingredient.all.destroy_all

9.times do
  recipe = Recipe.create(
    title: Faker::Food.dish,
    directions: Faker::Hipster.sentence(3),
    owner: Faker::Friends.character
  )

  3.times do
    Ingredient.create(
      recipe: recipe,
      quantity: rand(1..6),
      measurement: Faker::Food.measurement,
      ingredient: Faker::Food.ingredient
    )
  end
end


