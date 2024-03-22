// Function to get data from a page

async function fetchCharacterData(page) {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

// Function to get all characters data from all pages

async function fetchAllCharacterData() {
    let allCharacters = [];
    let page = 1;
    let characters = await fetchCharacterData(page);

    while (characters && characters.length > 0) {
        allCharacters.push(...characters);
        page++;
        characters = await fetchCharacterData(page);
    }

    return allCharacters;
}

// These functions filter global results by status

async function AliveCharacters() {
    const allCharacters = await fetchAllCharacterData();
    return allCharacters.filter(character => character.status === 'Alive');
}

async function DeadCharacters() {
    const allCharacters = await fetchAllCharacterData();
    return allCharacters.filter(character => character.status === 'Dead');
}

async function UnknownCharacters() {
    const allCharacters = await fetchAllCharacterData();
    return allCharacters.filter(character => character.status === 'unknown');
}

// Function that selects cards and returns appropriate content for each

let modalWindow = document.getElementById("modal");
let selectedCharacter;

function cardFill(tableauUtiliser) {
    const cards = document.querySelectorAll('.openModal');

    cards.forEach((card) => {
        // Randomize character choice
        const randomIndex = Math.floor(Math.random() * tableauUtiliser.length);
        const character = tableauUtiliser[randomIndex];

        // Select card elements
        const nameElement = card.querySelector('.akaya');
        const statusElement = card.querySelector('.status');
        const genderElement = card.querySelector('.gender');
        const speciesElement = card.querySelector('.species');

        // Insert content
        nameElement.textContent = character.name;
        statusElement.textContent = character.status;
        genderElement.textContent = character.gender;
        speciesElement.textContent = character.species;

        // Insert img
        const imgDiv = card.querySelector('#insertImg');
        const img = document.createElement('img');
        img.src = character.image;
        img.alt = character.name;
        imgDiv.innerHTML = '';
        imgDiv.appendChild(img);

        card.addEventListener('click', () => {
            selectedCharacter = character;
        });
    });
}

// Insert info in modal and make it visible

let openCards = document.querySelectorAll(".openModal");
let closeModal = document.getElementById("closeBtn");

openCards.forEach(card => {
    card.addEventListener('click', () => {
        modalWindow.style.display = "block";
        const modalDiv = modalWindow.querySelector('#insertImg');
        const modalImg = document.createElement('img');
        modalImg.src = card.querySelector("img").src;
        modalDiv.innerHTML = '';
        modalDiv.appendChild(modalImg);

        const modalNameElement = modalWindow.querySelector('.akaya');
        modalNameElement.textContent = card.querySelector('.akaya').textContent;

        if (selectedCharacter) {
            const originElement = modalWindow.querySelector('.origin');
            originElement.textContent = selectedCharacter.origin.name;
            const locationElement = modalWindow.querySelector('.location');
            locationElement.textContent = selectedCharacter.location.name;
        }
    });
});

// Close Modal Window

closeModal.addEventListener('click', () => {
    modalWindow.style.display = "none";
});

// Loading data on initial page load

document.addEventListener('DOMContentLoaded', async function() {
    const initCharacters = await fetchAllCharacterData();
    cardFill(initCharacters);
});

// Event listeners for buttons, triggering appropriate content

document.getElementById("button1").addEventListener("click", async function() {
    const characters = await fetchAllCharacterData();
    cardFill(characters);
});

document.getElementById("button2").addEventListener("click", async function() {
    const aliveCharacters = await AliveCharacters();
    cardFill(aliveCharacters);
});

document.getElementById("button3").addEventListener("click", async function() {
    const deadCharacters = await DeadCharacters();
    cardFill(deadCharacters);
});

document.getElementById("button4").addEventListener("click", async function() {
    const unknownCharacters = await UnknownCharacters();
    cardFill(unknownCharacters);
});