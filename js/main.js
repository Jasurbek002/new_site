

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
var btnimg = document.getElementsByClassName('maskimg')

for(let i=0;i<btnimg.length;i++){
   btnimg[i].addEventListener("click",(evt)=>{
      // console.log(evt.target.src)
      descimg.src = evt.target.src
   })
}

var star = document.getElementsByClassName('stars')

for(let i = 0;i<star.length;i++){
   star[i].addEventListener('click',(button)=>{
      button.target.style.background="black"
   })
}

var plusel = document.getElementById('plus')
 var   resaltel= document.getElementById('resalt')
  var  minusel =document.getElementById('minus')


plusel.addEventListener("submit",()=>{
  
   resaltel.textcontent + 1
  
})

var korzinkabar = document.querySelector('.imgkor')
var sec = document.querySelector('.hearor')
korzinkabar.style.background='red'

korzinkabar.addEventListener('click',() =>{

      var card = document.createElement('div')
      card.style.position='absolute'
      card.style.right='0px'
      card.style.width="300px"
      card.style.height='600px'
      card.textContent="hello"
      card.style.background='red'
   console.log(card)
  
  sec.appendChild(card)
})
