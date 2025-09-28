// Recipe Object
const recipe = {
  title: "Spaghetti Bolognese",
  servings: 4,
  ingredients: ["spaghetti", "minced beef", "onion", "garlic", "tomato sauce", "olive oil"],
  directions: ["Boil spaghetti", "Cook beef", "Add sauce", "Mix together"],
  letsCook: function() {
    console.log("I'm hungry! Let's cook... " + this.title);
  }
};

console.log("Recipe: " + recipe.title);
console.log("Servings: " + recipe.servings);

console.log("Ingredients:");
for (let i = 0; i < recipe.ingredients.length; i++) {
  console.log(recipe.ingredients[i]);
}

console.log("Directions:");
for (let i = 0; i < recipe.directions.length; i++) {
  console.log(recipe.directions[i]);
}

recipe.letsCook();
