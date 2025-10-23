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

// 7. Create a new array longFoodNames for foods with names longer than 6 characters
let longFoodNames = friendFavorites.filter(food => food.length > 6);

// 8. Create another array shortFoodNames for foods 6 characters or shorter
let shortFoodNames = friendFavorites.filter(food => food.length <= 6);

// 9. Print both arrays and compare
console.log("Long-named foods:", longFoodNames);
console.log("Short-named foods:", shortFoodNames);

if (longFoodNames.length > shortFoodNames.length) {
    console.log("There are more long-named foods.");
} else if (longFoodNames.length < shortFoodNames.length) {
    console.log("There are more short-named foods.");
} else {
    console.log("There are equal numbers of long and short-named foods.");
}

// 10. STRETCH: Find the longest food name and print
let longestFood = friendFavorites.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
}, "");

console.log(`The longest food name in the list is ${longestFood} with ${longestFood.length} characters.`);