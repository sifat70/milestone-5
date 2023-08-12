// 1. where to add
const placeList = document.getElementById('places-list');
// 2. what to be added
const li = document.createElement('li');
li.innerText = 'sonae chor';

// 3. add the chaild
placeList.appendChild(li);

// where to added
const mainContainer = document.getElementById('main-container');
// what to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My food list';
section.appendChild(h1);


const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'briyani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'borhani';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'salad';
ul.appendChild(li3);

section.appendChild(ul);

mainContainer.appendChild(section);


// set innerHTML

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress section</h1>
<ul>
    <li>T-shirt</li>
    <li>Lungi</li>
    <li>Sando grngi</li>
</ul>
`
mainContainer.appendChild(sectionDress);