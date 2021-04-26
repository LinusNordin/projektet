'use strict'

let nav = document.getElementById('nav')
let x = document.getElementById('x')
let main = document.getElementById('mainbody')

//console.log(nav, x)

x.addEventListener('click', function(){
    //console.log('Klickad på :)');
    nav.classList.toggle('open')
    main.classList.toggle('bodyopen')
})

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape" && nav.classList.contains('open')) {
        nav.classList.toggle('open')
        main.classList.toggle('bodyopen')
    }
})
