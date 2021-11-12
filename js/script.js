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
const library = document.getElementById("img-box");
const arrowUp = document.getElementById("su");
const arrowDown = document.getElementById("giu");

//Altre Variabili
let activeItem = 0;
// +++ /VARIABILI +++


// +++ PROGRAMMA +++

for (let i = 0; i < items.length; i++) {
    // Riempimento Showcase img + Riempimento Showcase text
    showcase.innerHTML += `<div class="item-img"><img src="${items[i]}" alt="Paesaggio ${title[i]}"></div>
    <div class="text-box item-text">
    <h2>${title[i]}</h2>
    <p>${text[i]}</p>
    </div>`;

    // Riempimento Library
    library.innerHTML += `<div class="item-mini"><img src="${items[i]}" alt="Paesaggio ${title[i]}"></div>`;
}


const arrayItemsImg = document.getElementsByClassName("item-img");
const arrayItemsText = document.getElementsByClassName("item-text");
const arrayItemsMini = document.getElementsByClassName("item-mini");

arrayItemsImg[activeItem].classList.add("active");
arrayItemsText[activeItem].classList.add("active");
arrayItemsMini[activeItem].classList.add("active");


arrowUp.addEventListener("click", function a() {
    arrayItemsImg[activeItem].classList.remove("active");
    arrayItemsText[activeItem].classList.remove("active");
    arrayItemsMini[activeItem].classList.remove("active");
    if (activeItem != 0) {
        activeItem--;
    } else {
        activeItem = items.length - 1;
    }
    arrayItemsImg[activeItem].classList.add("active");
    arrayItemsText[activeItem].classList.add("active");
    arrayItemsMini[activeItem].classList.add("active");
});


arrowDown.addEventListener("click", function b() {
    arrayItemsImg[activeItem].classList.remove("active");
    arrayItemsText[activeItem].classList.remove("active");
    arrayItemsMini[activeItem].classList.remove("active");
    if (activeItem != items.length - 1) {
        activeItem++;
    } else {
        activeItem = 0;
    }
    arrayItemsImg[activeItem].classList.add("active");
    arrayItemsText[activeItem].classList.add("active");
    arrayItemsMini[activeItem].classList.add("active");
});

// +++ /PROGRAMMA +++
