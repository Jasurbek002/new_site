

// var toggle = document.getElementById('togle')

var toggle = document.querySelector('.navbar__togle')
var navbar = document.querySelector('.navbar__sitebar')
toggle. addEventListener('click',()=>{

     if(toggle.classList.contains('navbar__togle--active')){
        navbar.classList.remove('navbar__sitebar--active')
        toggle.classList.remove('navbar__togle--active')

     }else{
        toggle.classList.add('navbar__togle--active')
        navbar.classList.add('navbar__sitebar--active')

     }
    
    

})

var descimg = document.querySelector('.glavniimg')
var btnimg = document.querySelector('.maskimg')

btnimg.addEventListener('click',()=>{
   descimg.src=btnimg.src
})


