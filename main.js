'use:script'

/*
<div class="item see"><img src="IMG/01.webp" alt=""></div>
<div class="item"><img src="IMG/02.webp" alt=""></div>
<div class="item"><img src="IMG/03.webp" alt=""></div>
<div class="item"><img src="IMG/04.webp" alt=""></div>
<div class="item"><img src="IMG/05.webp" alt=""></div> 
*/

const imgs = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];
const slider = document.querySelector('.slider');
let Items = '';
let active = 0;

for (let i = 0; i < imgs.length; i++) {
    console.log(imgs[i]);
    Items += `<div class="item  "><img src="IMG/${imgs[i]}" alt=""></div>`
}

slider.innerHTML += Items;
document.querySelector('.item').classList.add('see');




const up = document.querySelector('.up');
const down = document.querySelector('.down');
const items = document.querySelectorAll('.item');


up.addEventListener('click', function () {
    
    if(active > 0){
        items[active].classList.remove('see');
        active--;
        items[active].classList.add('see');

    }

})

down.addEventListener('click', function () {

    if(active < items.length -1){
        items[active].classList.remove('see');
        active++;
        items[active].classList.add('see');

    }

});



