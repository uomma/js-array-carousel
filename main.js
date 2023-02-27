'use:script'

/*
<div class="item see"><img src="IMG/01.webp" alt=""></div>
<div class="item"><img src="IMG/02.webp" alt=""></div>
<div class="item"><img src="IMG/03.webp" alt=""></div>
<div class="item"><img src="IMG/04.webp" alt=""></div>
<div class="item"><img src="IMG/05.webp" alt=""></div> 
*/

const imgs = ['01.webp', '02.webp', '03.webp', '04.webp','05.webp'];

const slider = document.querySelector('.slider');

let Items = '';



for(let i = 0; i < imgs.length; i++){
    console.log(imgs[i]);
    Items += '<div class="item  "><img src="IMG/01.webp" alt=""></div>'

}

slider.innerHTML += Items;
document.querySelector('.item').classList.add('see');

    