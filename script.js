const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const musicgameover = document.querySelector('.musicgameover')
const morto = document.querySelector('.morto')
const start = document.querySelector('.start')
const music = document.querySelector('.music')
const inicio = document.querySelector('.inicio')
const gameOver = document.querySelector('.game-over')
const gameOverr = document.querySelector('.game-overr')
const logoo = document.querySelector('.logoo')
///inicio
const nuvemm = document.querySelector('.nuvemm')
const terra = document.querySelector('.terra')
const ave = document.querySelector('.ave')
const plataforma = document.querySelector('.plataforma')
const bosta = document.querySelector('.bosta')
const dança = document.querySelector('.dança')




const startGame = () => {


  dança.style.display = 'none '
  nuvemm.style.display = 'none'
  terra .style.display = 'none'
  ave.style.display = 'none'
  plataforma.style.display = 'none'
  logoo.style.display = 'none'
  musicgameover.pause()
  pipe.classList.add('pipe-animation')
  bosta.classList.add('bosta-animation')
  start.style.display = 'none'
  inicio.style.display = 'none'
  music.play()
  
}

const restartGame = () => {
  musicgameover.pause()
  mario.style.display = 'flex'
  gameOver.style.display = 'none'
  gameOverr.style.display = 'none'
  pipe.style.left = ''
  pipe.style.right = ' -80px'
  mario.style.width = '150px'
  mario.style.bottom = '0'
  inicio.style.display= 'none'
  start.style.display = 'none'
  bosta.style.left = ''
  bosta.style.right = ' -80px'
  music.pause()
  music.currentTime = 0;

  music.play()
  music.currentTime = 0;

}

const jump = () => {
  mario.classList.add('jump')

  setTimeout(() => {
    mario.classList.remove('jump')
  }, 800)

}





const loop = () => {
  setInterval(() => {
    const pipePosition = pipe.offsetLeft
    const marioPosition = window
      .getComputedStyle(mario)
      .bottom.replace('px' ,' ')

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 ){
      pipe.classList.remove('.pipe-animation')
      pipe.style.left = `${pipePosition}px`
   
  



      mario.classList.remove('.jump')
      mario.style.bottom = `${marioPosition}px`
      mario.style.display = ' none'
      morto.style.display ='flex' 
    
      mario.style.width = '80px'
      mario.style.marginLeft = '50px'

    
      
      function stopAudioStart() {
        music.pause()
      }
      stopAudioStart()
      
      musicgameover.play()
      
      function stopAudio() {
        musicgameover.pause()
      clearInterval(loop)
     
        }  

   
      setTimeout(stopAudio, 7000)
      
      gameOver.style.display = 'flex'
      
      clearInterval(loop)
     
      setTimeout(stopAudio, 8000)

       
      gameOverr.style.display = 'flex'
      clearInterval(loop)
 
   
      }  
  }, 10)
}



/////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
setInterval(() => {
  const bostaPosition = bosta.offsetLeft
  const marioPosition = window
    .getComputedStyle(mario)
    .bottom.replace('px' ,' ')

  if (bostaPosition <= 120 && bostaPosition > 0 && marioPosition < 80 ){
    bosta.classList.remove('.bosta-animation')
    bosta.style.left = `${bostaPosition}px`
 




    mario.classList.remove('.jump')
    mario.style.bottom = `${marioPosition}px`
    mario.style.display = ' none'
    morto.style.display ='flex' 
  
    mario.style.width = '80px'
    mario.style.marginLeft = '50px'

  
    
    function stopAudioStart() {
      music.pause()
    }
    stopAudioStart()
    
    musicgameover.play()
    
    function stopAudio() {
      musicgameover.pause()
    clearInterval(loop)
   
      }  

 
    setTimeout(stopAudio, 7000)
    
    gameOver.style.display = 'flex'
    
    clearInterval(loop)
   
    setTimeout(stopAudio, 8000)

     
    gameOverr.style.display = 'flex'
    clearInterval(loop)

 
    }  
}, 10)





loop()

document.addEventListener('keypress', e => {
  const tecla = e.key
  if (tecla === ' ') {
    jump()
  }
})

document.addEventListener('touchstart', e => {
  if (e.touches.length) {
    jump() 
  }
})



document.addEventListener('keypress', e => {
  const tecla = e.key
  if (tecla === 'Enter') {
    startGame()
  }
   

})



