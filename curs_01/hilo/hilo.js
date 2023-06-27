// let numere = [ 3 , 4, , 9];
// numere.push(7);
// console.log(numere);
// numere[numere.length] = 13;
// console.log(numere);
// // 3, 4, 9, 13
// numere.splice(3, 0, 14);
// console.log(numere);


let cardTypes = ['clubs', 'diamonds', 'hearts', 'spades'];
let pachet = {
    'clubs': [],
    'diamonds': [],
    'hearts': [],
    'spades': []
}
let score = 0;
let vecheaCarte = 0;


function adaugaCartiInPachet(nrPachete = 1) {
    for (let i = 0; i < cardTypes.length; i++) { // index card type
        // i  index ( 0,1,2,3)
        // cardTypes[i] . // 'clubs', ....
        //    masina['model']


        for (let j = 2; j < 14; j++) { // card number
            pachet[cardTypes[i]].push(j);
        }
    }
    console.log(pachet);
}

function incarcare() {
    adaugaCartiInPachet();
    // adaugare carte noua
    nouaCarte = schimbaCarte();
    // ar urma comparatia()
    vecheaCarte = nouaCarte;
    // setare scor zeo
    // ...
    afiseazaScor();
}
function afiseazaScor() {
    const divScore = document.getElementById('score');
    const spanScore = divScore.getElementsByTagName('span')[0];
    spanScore.textContent = score;
}

function schimbaCarte() {
    const indexType = Math.floor(Math.random() * 4);
    const cardNumber = Math.floor(Math.random() * 13 + 2);
    const pozitie = pachet[cardTypes[indexType]].indexOf(cardNumber);   
    const fileName = 'cards/' + cardTypes[indexType] + '_' + cardNumber + '.svg';
    if(pozitie === -1){
        console.log('Am obtinut' + fileName + 'si nu e in pachet')
        schimbaCarte();
        return;
    }
    pachet[cardTypes[indexType]].splice(pozitie, 1);
    console.log(pachet);
    // lastCardNumber = cardNumber;
    console.log(fileName);
    const imgElement = document.querySelector('#card > img');
    imgElement.setAttribute('src', fileName);
    return cardNumber;
}

function higher() {
    nouaCarte = schimbaCarte();
    console.log(typeof nouaCarte);
    // if (typeof nouaCarte !== 'numer')return;
    if (nouaCarte >= vecheaCarte) {
        score++;
        afiseazaScor();
    } else {
        score--;
        afiseazaScor();
    }
    vecheaCarte = nouaCarte;

}

const lower = function () {
    console.log();
    nouaCarte = schimbaCarte();
    if (typeof nouaCarte !== 'numer') return;
    if (nouaCarte >= vecheaCarte) {
        score++;
        afiseazaScor();
    } else {
        score--;
        afiseazaScor();
    }
    vecheaCarte = nouaCarte;

}



document.addEventListener('DOMContentLoaded', incarcare);