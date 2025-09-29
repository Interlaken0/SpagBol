// Recipe Object
const recipe = {
  title: "Spaghetti Bolognese",
  servings: 4,
  ingredients: [
    "400g spaghetti",
    "2 tbsp olive oil",
    "1 onion, chopped",
    "2 garlic cloves, crushed",
    "500g minced beef",
    "400g canned tomatoes",
    "2 tbsp tomato paste",
    "1 tsp oregano",
    "Salt and pepper to taste",
    "Parmesan cheese (optional)"
  ],
  directions: [
    "Cook the spaghetti according to package instructions.",
    "Heat olive oil in a pan, add onion and garlic, and cook until soft.",
    "Add minced beef and cook until browned.",
    "Stir in canned tomatoes, tomato paste, and oregano. Simmer for 15 minutes.",
    "Season with salt and pepper.",
    "Serve sauce over spaghetti and top with Parmesan if desired."
  ],
  letsCook: function () {
    return `I'm hungry! Let's cook... ${this.title}`;
  }
};

// Display recipe on DOM
document.getElementById("recipe-title").textContent = recipe.title;
document.getElementById("recipe-servings").textContent = `Servings: ${recipe.servings}`;

// Ingredients loop
const ingredientsList = document.getElementById("recipe-ingredients");
for (let i = 0; i < recipe.ingredients.length; i++) {
  const li = document.createElement("li");
  li.textContent = recipe.ingredients[i];
  ingredientsList.appendChild(li);
}

// Directions loop
const directionsList = document.getElementById("recipe-directions");
for (let i = 0; i < recipe.directions.length; i++) {
  const li = document.createElement("li");
  li.textContent = recipe.directions[i];
  directionsList.appendChild(li);
}

// Show method output
document.getElementById("cook-message").textContent = recipe.letsCook();
