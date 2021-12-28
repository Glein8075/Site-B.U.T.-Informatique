const sep = document.querySelector('.separateur');
const div = document.querySelector('.carousel');
let hauteur = div.clientHeight;

const boxone = document.querySelector('.boxinfo-1');
const boxtwo = document.querySelector('.boxinfo-2');
const boxthree = document.querySelector('.boxinfo-3');
const boxfour = document.querySelector('.boxinfo-4');
const linkone = document.querySelector('.pres-1');
const linktwo = document.querySelector('.pres-2');
const linkthree = document.querySelector('.pres-3');


window.addEventListener('scroll', () => {

    // console.log(window.scrollY);

    if(window.scrollY > hauteur) {
        sep.classList.add('scroll');
    }

    if(window.scrollY > (hauteur - 300)) {
        boxone.classList.add('scroll');
    }

    if(window.scrollY > hauteur - 150) {
        boxtwo.classList.add('scroll');
    }

    if(window.scrollY > hauteur) {
        boxthree.classList.add('scroll');
    }

    if(window.scrollY > hauteur + 100) {
        boxfour.classList.add('scroll');
    }

    if(window.scrollY > hauteur + 350) {
        linkone.classList.add('scroll');
        linktwo.classList.add('scroll');
        linkthree.classList.add('scroll');
    }

});