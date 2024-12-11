
const hardGrid = document.querySelector('.HardGrid');
const normalGrid = document.querySelector('.NormalGrid');
const easyGrid = document.querySelector('.EasyGrid');
const timer = document.querySelectorAll('.counter');
var placar = {};

var nome,
    ponto;

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

                cards.forEach((card) => {
                    card.remove();
                })
                ponto += 1;
                loadGameHard();

            }, 500);


        }
    } else if (dificuldade == 'normal') {
        if (disabledCards.length == 6) {
            setTimeout(() => {

                cards.forEach((card) => {
                    card.remove();
                })

                loadGameNormal();
            }, 500)

        }
    } else if (dificuldade == 'easy') {
        if (disabledCards.length == 4) {
            setTimeout(() => {

                cards.forEach((card) => {
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

    const shuffledElements = duplicateElements.sort(() => Math.random() - 0.5)

    shuffledElements.forEach((element) => {

        const card = createCard(element);
        normalGrid.appendChild(card);

    });
}
const loadGameEasy = () => {

    const duplicateElements = [...elementsEasy, ...elementsEasy];

    const shuffledElements = duplicateElements.sort(() => Math.random() - 0.5)

    shuffledElements.forEach((element) => {

        const card = createCard(element);
        easyGrid.appendChild(card);

    });
}

const startTime = () => {
    const cards = document.querySelectorAll('.Card');

    this.loop = setInterval(() => {

        var currenTime;

        timer.forEach((timer)=>{

            currenTime = +timer.innerHTML;
            timer.innerHTML = currenTime + 1;

        })

            if (currenTime == 5) {
                alert('fim de tempo')
                cards.forEach((card)=> {
                    card.remove();
                })

                timer.forEach((timer)=>{
                    timer.innerHTML = 0;
                })
                clearInterval(this.loop)
                document.getElementById("Start").style.display = "flex"
                document.getElementById("UserName").style.display = "flex"
                document.getElementById("btnStart").style.display = "flex";
                document.getElementById("leaderBoard").style.display = "flex";
                document.getElementById("EasyDeck").style.display = "none";
                document.getElementById("NormalDeck").style.display = "none";
                document.getElementById("HardDeck").style.display = "none";
                placar = {
                    ...placar,
                    sobrenome: ''
                }
                document.getElementById('First').textContent = placar[0];
                document.getElementById('First').textContent = placar[1];
                document.getElementById('First').textContent = placar[2];
            }

    }, 1000);

}


