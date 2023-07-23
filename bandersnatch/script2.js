// Game variables
let storyIndex = 0;
const storyTextElement = document.getElementById("story-text");
const plotContextElement = document.getElementById("plot-context");

// Choices
const choices = [
  {
    text: "Venture into the mysterious forest",
    plotContext: "As you venture deeper into the mysterious forest, you encounter strange flora and hear enchanting melodies in the distance.",
    nextIndex: 1,
  },
  {
    text: "Descend into the deep underground tunnels",
    plotContext: "Descending into the deep underground tunnels, you come across ancient markings and the remnants of a long-lost civilization.",
    nextIndex: 2,
  },
  // Add more choices with plot context and next indices
];

// Function to handle choice selection
function makeChoice(choiceIndex) {
  storyIndex = choices[choiceIndex].nextIndex;
  updateStory();
}

// Function to update the story based on the current storyIndex
function updateStory() {
  if (storyIndex === 0) {
    storyTextElement.textContent = "Chapter 1: Exploration";
    plotContextElement.textContent = "You are an intrepid explorer in search of the fabled Lost City. Legends speak of a magnificent civilization that thrived in the depths of an uncharted territory. As you embark on this perilous journey, you must make critical decisions that will shape your destiny and uncover the secrets of the Lost City.";
    displayChoices([0, 1]);
  } else if (storyIndex === 1) {
    storyTextElement.textContent = "Chapter 2: Enchanted Forest";
    plotContextElement.textContent = "You find yourself surrounded by towering trees, their leaves casting a magical glow. The air is thick with an otherworldly aura, and mysterious whispers echo through the foliage.";
    displayChoices([2, 3]);
  } else if (storyIndex === 2) {
    storyTextElement.textContent = "Chapter 2: Forgotten Tunnels";
    plotContextElement.textContent = "As you descend into the depths of the underground tunnels, the air grows stale, and the temperature drops. The walls bear intricate carvings that hint at a forgotten history waiting to be unveiled.";
    displayChoices([4, 5]);
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
