// option: 1 direct onclick

// option: 2 onclick function add
// we will used sometimes
function redBg() {
    document.body.style.backgroundColor = 'red';
}
// option: 3

const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// Option: 3 another
const PurpleButton = document.getElementById('make-purple');
PurpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

// option: 4

const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);

function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// option: 4 another

const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
});

// option: 4 final
// importent we will used sometime
document.getElementById('make-goldenRod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod'
});