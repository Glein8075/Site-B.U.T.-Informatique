const sep = document.querySelector('.separateur');
const div = document.querySelector('.carousel');
let hauteur = div.clientHeight;

const boxone = document.querySelector('.boxinfo-1');
const boxtwo = document.querySelector('.boxinfo-2');
const boxthree = document.querySelector('.boxinfo-3');
const boxfour = document.querySelector('.boxinfo-4');

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
    else {
        boxone.classList.remove('scroll');
    }

    if(window.scrollY > hauteur - 100) {
        boxtwo.classList.add('scroll');
    }
    else {
        boxtwo.classList.remove('scroll');
    }

    if(window.scrollY > hauteur + 100) {
        boxthree.classList.add('scroll');
    }
    else {
        boxthree.classList.remove('scroll');
    }

    if(window.scrollY > hauteur + 300) {
        boxfour.classList.add('scroll');
    }
    else {
        boxfour.classList.remove('scroll');
    }
});