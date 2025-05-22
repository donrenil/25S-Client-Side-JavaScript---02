// 1. Declare and Initialize Variables
let characterName = "Captain Waffles";
let age = Math.floor(Math.random() * 100);
let isSuperhero = true;
let specialPowers = ["invisibility", "super speed", "laser vision", "fart tornado"];
let favoriteFood = "pizza";

// Utility function to get random item from an array
function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// 2. Display Funny Character Description
function displayCharacter() {
  const power = getRandomItem(specialPowers);
  const description = `Meet ${characterName}, a ${age}-year-old ${isSuperhero ? "superhero" : "goofball"} who loves ${favoriteFood} and can ${power}!`;
  document.getElementById("character-display").innerText = description;
}

// 3. Update functions for interactivity
function updateName() {
  const input = document.getElementById("nameInput").value;
  if (input) {
    characterName = input;
    displayCharacter();
  }
}

function updateAge() {
  const input = document.getElementById("ageInput").value;
  if (!isNaN(input) && input !== "") {
    age = parseInt(input);
    displayCharacter();
  }
}

function increaseAge() {
  age++;
  displayCharacter();
}

function decreaseAge() {
  age--;
  displayCharacter();
}

function generateRandomCharacter() {
  const names = ["Captain Waffles", "Sir Noodle", "Princess Pickle", "Dr. Banana", "Lord Chickenpants"];
  const foods = ["spaghetti", "marshmallows", "ice cream", "burritos", "broccoli"];

  characterName = getRandomItem(names);
  age = Math.floor(Math.random() * 100);
  favoriteFood = getRandomItem(foods);
  displayCharacter();
}

// Initialize on page load
window.onload = () => {
  displayCharacter();
};
