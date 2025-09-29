# SpagBol

A simple DOM-based recipe project for practicing JavaScript objects, loops, and DOM manipulation.

---

## Pseudocode (Plain English)
- Make a recipe object with:
  - title
  - servings
  - ingredients (list)
  - directions (list)
  - method `letsCook`
- Show title and servings in the HTML
- Loop through ingredients → add each as a bullet point (`<li>`)
- Loop through directions → add each as a numbered step (`<li>`)
- Call `letsCook()` → display hungry message

---

## STARI

**Situation**  
I wanted to practice using objects, arrays, loops, and DOM manipulation in JavaScript.

**Task**  
Build a small recipe app that displays data stored in an object on a webpage, instead of hardcoding it in HTML.

**Action**  
- Created a recipe object with all properties.  
- Used a `for` loop to list each ingredient dynamically.  
- Used another `for` loop to list each direction dynamically.  
- Added a `letsCook` method to the object and displayed its output.  
- Styled the page with basic CSS.  

**Result**  
The recipe is displayed neatly in the browser. Ingredients and directions can be updated in the object, and the page updates automatically.

**Impact**  
This shows understanding of JavaScript fundamentals (objects, loops, DOM) and gives a foundation for more complex dynamic projects like task trackers or recipe books.