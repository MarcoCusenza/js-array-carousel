// +++ CONTENUTI +++
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];
// +++ /CONTENUTI +++



// +++ VARIABILI +++
// Link oggetti html
const showcase = document.getElementById("showcase");
const library = document.getElementById("library");
const arrowUp = document.querySelector(".arrow-up");
const arrowDown = document.querySelector(".arrow-down");

//Altre Variabili
let activeItem = 0;
// +++ /VARIABILI +++



// +++ PROGRAMMA +++
// Riempimento Showcase img
for (let i = 0; i < items.length; i++) {
    showcase.innerHTML += `<img src="${items[i]}" alt="Paesaggio ${title[i]}" class="img-${i}">`;
}
// Riempimento Showcase text
for (let i = 0; i < items.length; i++) {
    showcase.innerHTML += `<div class="text-box box-${i}"> 
    <h2>${title[i]}</h2>
    <p>${text[i]}</p>
    </div>`;
}
// Riempimento Library
for (let i = 0; i < items.length; i++) {
    library.innerHTML += `<img src="${items[i]}" alt="Paesaggio ${title[i]}" class="img-lib-${i}">`;
}

document.querySelector(`.img-${activeItem}`).classList.add("active");
document.querySelector(`.img-lib-${activeItem}`).classList.add("active");
document.querySelector(`.box-${activeItem}`).classList.add("active");
// +++ /PROGRAMMA +++






// arrowUp.addEventListener("click", functionUp());

// function functionUp() {

// }