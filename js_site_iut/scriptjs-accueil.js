const sep = document.querySelector('.separateur');
const div = document.querySelector('.carousel');
const boxone = document.querySelector('.boxinfo-1');
const boxtwo = document.querySelector('.boxinfo-2');
const boxthree = document.querySelector('.boxinfo-3');
const boxfour = document.querySelector('.boxinfo-4');
const linkone = document.querySelector('.pres-1');
const linktwo = document.querySelector('.pres-2');
const linkthree = document.querySelector('.pres-3');
const cloudone = document.querySelector('.nuage-1');
const cloudtwo = document.querySelector('.nuage-2');
const cloudthree = document.querySelector('.nuage-3');
const cloudfour = document.querySelector('.nuage-4');



let hauteur = div.clientHeight;
let hauteur2 = 1700;

window.addEventListener('scroll', () => {

    // console.log(window.scrollY);

    if(window.scrollY > hauteur) {
        sep.classList.add('scroll');
    }
    else {
        sep.classList.remove('scroll');
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

    if(window.scrollY > hauteur2) {
        cloudone.classList.add('scroll');
    }

    if(window.scrollY > hauteur2 + 150) {
        cloudtwo.classList.add('scroll');
    }

    if(window.scrollY > hauteur2 + 350) {
        cloudthree.classList.add('scroll');
    }

    if(window.scrollY > hauteur2 + 500) {
        cloudfour.classList.add('scroll');
    }
});