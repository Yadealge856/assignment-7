console.log("Hello World!");
// 1. Create an array called favoriteFoods with at least 6 foods you love.
let favoriteFoods = ["Ramen", "Sushi", "Tacos", "Pizza", "Falafel", "Pasta"];

// 2. Loop through the list and print: "One of my favorite foods is ______."
for (let i = 0; i < favoriteFoods.length; i++) {
    console.log("One of my favorite foods is " + favoriteFoods[i] + ".");
}

// 3. Print out the rating for each food with a ranking
for (let i = 0; i < favoriteFoods.length; i++) {
    console.log(`My #${i + 1} favorite food is ${favoriteFoods[i]}`);
}

// 4a. Create a function printFoodRecommendation(foodName)
function printFoodRecommendation(foodName) {
    console.log(`Have you ever tried ${foodName}?`);
    console.log(`I always recommend ${foodName} to friends.`);
    console.log(`Trust me — ${foodName} is delicious.`);
}

// 4b. Call the function at least 3 times
printFoodRecommendation("Ramen");
printFoodRecommendation("Sushi");
printFoodRecommendation("Tacos");

// 5. Print out only foods that have an "a" in the name from friendFavorites
let foodsWithA = friendFavorites.filter(food => food.toLowerCase().includes("a"));
console.log(foodsWithA); // 6. Print out the array

// 6. Store the result in an array called foodsWithA. Print out the array.



// 7. Create a new array longFoodNames for foods with names longer than 6 characters.



// 8. Create another array shortFoodNames for foods 6 characters or shorter.



// 9. Print both arrays and compare:
// "There are more long-named foods." OR "There are more short-named foods."


// 10. STRETCH: Find the longest food name and print:
// "The longest food name in the list is ______ with ___ characters."
