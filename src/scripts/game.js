
const hardGrid = document.querySelector('.HardGrid');

const elements = [
    'air',
    'earth',
    'fire',
    'plasma',
    'water'
];

const createElement = (tag, className) =>{
 const element = document.createElement(tag);
 element.className = className;
 return element;
}

const createCard = (element) =>{

    const card = createElement('div', 'Card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../image/${element}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    return card;
}
const loadGame = () => {
    elements.forEach((element) => {

        const card = createCard(element);
        hardGrid.appendChild(card);

    });
}

loadGame();