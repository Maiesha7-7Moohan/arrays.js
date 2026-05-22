let colors = [];

colors.push("Tyrian Purple");
colors.push("Wisteria");
colors.push("Banana Cream");

let numbers = [5, 4, 3, 2, 1];

// Removing the last color from the array would be efficient by using the pop() method, which removes the last element from the array and returns it. In this case, it would remove "Banana Cream " from the colors array.
colors.pop("Banana Cream");

// Adding a new color to the beginning of the colors array
colors.unshift("Bleached Cedar");

// Printing the length of both arrays
console.log("Colors length:", colors.length);
console.log("Numbers length:", numbers.length);
