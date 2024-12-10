
const hardGrid = document.querySelector('.HardGrid');
const normalGrid = document.querySelector('.NormalGrid');
const easyGrid = document.querySelector('.EasyGrid');

const elementsHard = [
    'air',
    'earth',
    'fire',
    'plasma',
    'water'
];
const elementsNormal = [
    'water',
    'earth',
    'fire'
];
const elementsEasy = [
    'fire',
    'water'
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '',
    secondCard = '';

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');
    const cards = document.querySelectorAll('.Card');
    if (dificuldade == 'hard') {
        if (disabledCards.length == 10) {

            setTimeout(() => {

                alert("fim de jogo");

                cards.forEach((card)=>{
                    card.remove();
                })

                loadGameHard();

            }, 500);

            
        }
    } else if (dificuldade == 'normal') {
        if (disabledCards.length == 6) {
            setTimeout(() => {
                alert("fim de jogo");

                cards.forEach((card)=>{
                    card.remove();
                })

                loadGameNormal();
            }, 500)

        }
    } else if (dificuldade == 'easy') {
        if (disabledCards.length == 4) {
            setTimeout(() => {
                alert("fim de jogo");

                cards.forEach((card)=>{
                    card.remove();
                })

                loadGameEasy();
            }, 500)
        }
    }

}

const checkCards = () => {
    const firstElement = firstCard.getAttribute("data-element");
    const secondElement = secondCard.getAttribute("data-element");

    if (firstElement === secondElement) {

        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        firstCard = '';
        secondCard = '';

        checkEndGame();

    } else {

        setTimeout(() => {

            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            firstCard = '';
            secondCard = '';

        }, 500)


    }
}



const revealCard = ({ target }) => {
    if (target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if (firstCard === '') {

        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;


    } else if (secondCard === '') {

        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();

    }
}

const createCard = (element) => {

    const card = createElement('div', 'Card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../src/image/${element}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);

    card.setAttribute('data-element', element);

    return card;
}
const loadGameHard = () => {

    const duplicateElements = [...elementsHard, ...elementsHard];

    const shuffledElements = duplicateElements.sort(() => Math.random() - 0.5)

    shuffledElements.forEach((element) => {

        const card = createCard(element);
        hardGrid.appendChild(card);

    });
}
const loadGameNormal = () => {

    const duplicateElements = [...elementsNormal, ...elementsNormal];

    const shuffledElements = duplicateElements.sort()

    shuffledElements.forEach((element) => {

        const card = createCard(element);
        normalGrid.appendChild(card);

    });
}
const loadGameEasy = () => {

    const duplicateElements = [...elementsEasy, ...elementsEasy];

    const shuffledElements = duplicateElements.sort()

    shuffledElements.forEach((element) => {

        const card = createCard(element);
        easyGrid.appendChild(card);

    });
}
