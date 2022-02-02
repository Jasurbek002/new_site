

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
  
   resaltel.innerText++ 
  
})

var korzinkabar = document.querySelector('.imgkor')
var sec = document.querySelector('.hearor')

korzinkabar.addEventListener('click',() =>{

      var card = document.createElement('div')
     
      card.style.position='absolute'
      card.style.right='0px'
      card.style.transition='1s easy-in-out'
      card.style.top='0px'
      card.style.padding='10px'
      card.style.width="400px"
      card.style.height='auto'
      card.textContent="Sizning maxsulotlar"
      card.style.background='DarkGray'

      let zakript = document.createElement('button')
      zakript.textContent="x"
      zakript.style.marginLeft='120px'
      zakript.addEventListener('click',()=>{ 
         card.style.opacity='0'


      })
      var images = document.querySelectorAll('.box-images')
      let buttonkor = document.getElementsByClassName('corzina')
      
     
      for(let i = 0;i<buttonkor.length;i++){
         buttonkor[i].addEventListener('click',()=>{
            alert("yangi maxsulot qo'shildi")
           for(let a = 0;a<images.length;a++){
            let cloneitem= images[a].cloneNode(true)
            card.appendChild(cloneitem)
           }
         })
      }

      // buttonkor.addEventListener('click',(stop)=>{
      //    alert("yangi maxsulot qo'shildi")
      //      let cloneitem = images.cloneNode(true)
      //      card.appendChild(cloneitem)
      // })
      
   console.log(card)

   card.appendChild(zakript)
  sec.appendChild(card)
  
})
