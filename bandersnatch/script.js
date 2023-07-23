// Game variables
let storyIndex = 0;
const storyTextElement = document.getElementById("story-text");

// Choices
const choices = [
  {
    text: "Venture into the forest",
    nextIndex: 1,
  },
  {
    text: "Turn back and seek refuge in your hometown",
    nextIndex: "End (Hometown)",
  },
  {
    text: "Accept the offer and learn what lies ahead",
    nextIndex: 2,
  },
  {
    text: "Dismiss the guardian as a mere charlatan and forge your own path",
    nextIndex: "End (Forge Own Path)",
  },
  {
    text: "Confront them and demand the truth",
    nextIndex: 3,
  },
  {
    text: "Turn a blind eye and cling to the illusion of happiness",
    nextIndex: "End (Illusion of Happiness)",
  },
  {
    text: "Join forces with the Shadows and utilize their dark influence",
    nextIndex: 4,
  },
  {
    text: "Stand against the Shadows, embracing the light and fighting for freedom",
    nextIndex: "End (Embrace the Light)",
  },
  {
    text: "Embrace the newfound knowledge and use it to rewrite your fate",
    nextIndex: "End (Rewrite Fate)",
  },
  {
    text: "Succumb to the predestined path set before you",
    nextIndex: "End (Predestined Path)",
  },
];

// Function to handle choice selection
function makeChoice(choiceIndex) {
  storyIndex = choices[choiceIndex].nextIndex;
  updateStory();
}

// Function to update the story text and choices
function updateStory() {
  if (storyIndex === 0) {
    storyTextElement.textContent = "Chapter 1: The Crossroads";
    displayChoices([0, 1]);
  } else if (storyIndex === 1) {
    storyTextElement.textContent = "Chapter 2: A Meeting with Fate";
    displayChoices([2, 3]);
  } else if (storyIndex === 2) {
    storyTextElement.textContent = "Chapter 3: Love and Betrayal";
    displayChoices([4, 5]);
  } else if (storyIndex === 3) {
    storyTextElement.textContent = "Chapter 4: Confronting the Shadows";
    displayChoices([6, 7]);
  } else if (storyIndex === 4) {
    storyTextElement.textContent = "Chapter 5: The Final Revelation";
    displayChoices([8, 9]);
  } else if (storyIndex === "End (Hometown)") {
    showEnd("You turned back and sought refuge in your hometown.");
  } else if (storyIndex === "End (Forge Own Path)") {
    showEnd("You dismissed the guardian and forged your own path.");
  } else if (storyIndex === "End (Illusion of Happiness)") {
    showEnd("You turned a blind eye and clung to the illusion of happiness.");
  } else if (storyIndex === "End (Embrace the Light)") {
    showEnd("You stood against the Shadows, embracing the light and fighting for freedom.");
  } else if (storyIndex === "End (Rewrite Fate)") {
    showEnd("You embraced the newfound knowledge and used it to rewrite your fate.");
  } else if (storyIndex === "End (Predestined Path)") {
    showEnd("You succumbed to the predestined path set before you.");
  }
  // Add more story updates and choices as needed
}

// Function to display the available choices
function displayChoices(choiceIndices) {
  const choicesContainer = document.getElementById("choices-container");
  choicesContainer.innerHTML = "";

  choiceIndices.forEach((index) => {
    const choice = choices[index];
    const button = document.createElement("button");
    button.className = "choice";
    button.textContent = choice.text;
    button.addEventListener("click", () => makeChoice(index));
    choicesContainer.appendChild(button);
  });
}

// Function to display the end of the story
function showEnd(message) {
  const gameContainer = document.getElementById("game-container");
  gameContainer.style.display = "none";

  const endContainer = document.createElement("div");
  endContainer.id = "end-container";

  const endText = document.createElement("h1");
  endText.textContent = message;

  endContainer.appendChild(endText);
  document.body.appendChild(endContainer);
}

// Initialize the story
updateStory();
