// 1. Declare variables
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
const metric = document.getElementById('metric');

// 2. Story templates and arrays
function randomValueFromArray(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

const storyText = "It was 94 fahrenheit outside, so Bob went for a walk. When they got to :insertx:, they stared in horror for a few moments, then :inserty:. Bob saw the whole thing, but was not surprised — :insertz:.";
const insertX = ["the soup kitchen", "Disneyland", "the White House"];
const insertY = ["spontaneously combusted", "melted into a puddle", "turned into a unicorn"];
const insertZ = ["it was always going to happen", "he was a very curious man", "it was on the news"];

// 3. Event listener
randomize.addEventListener('click', result);

// 4. Generate story
function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  // 5. Replace "Bob" with custom name if provided
  if (customName.value !== '') {
    newStory = newStory.replaceAll('Bob', customName.value);
  }

  // 6. Convert units if metric radio is selected
  if (metric.checked) {
    const weightInKg = Math.round(300 * 0.453592) + ' kilograms';
    const tempInCelsius = Math.round((94 - 32) * 5 / 9) + ' centigrade';

    newStory = newStory.replace('94 fahrenheit', tempInCelsius);
  } else {
    newStory = newStory.replace('94 fahrenheit', '94 fahrenheit');
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
