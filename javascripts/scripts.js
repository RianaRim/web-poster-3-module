// движение кастомного курсора за движением мыши
cursorMove()
// анимация кастомного курсора
links()
// изменение изображения по курсору
changeImageByCursor()
// кликабельные ссылки

// 3-д персонаж
// ramCharacter()
// звук барашка
ramSound()
// слежение за курсором
eyeAnimation()



// звук барашка
function ramSound() {
document.addEventListener('DOMContentLoaded', function () {
  const ramImage = document.getElementById('littleRam')
  const ramSound = document.getElementById('ramSound')

  // 2. Добавляем обработчик клика
  ramImage.addEventListener('click', function () {
    // 3. Останавливаем текущее воспроизведение (если есть)
    ramSound.currentTime = 0

    // 4. Воспроизводим звук
    ramSound.play().catch((error) => {
      console.error('Ошибка воспроизведения звука:', error)
    })
  })
})
}


// 3-д персонаж
function ramCharacter() {
}


// слежение за курсором
function eyeAnimation() {
 document.addEventListener('DOMContentLoaded', function () {
   const eye = document.querySelector('.eye')
   const pupil = document.querySelector('.pupil')

   const eyeRect = eye.getBoundingClientRect()
   const eyeCenterX = eyeRect.width / 2
   const eyeCenterY = eyeRect.height / 2

   const maxMove = 8

   document.addEventListener('mousemove', function (e) {
     const mouseX = e.clientX - eyeRect.left
     const mouseY = e.clientY - eyeRect.top

     const deltaX = mouseX - eyeCenterX
     const deltaY = mouseY - eyeCenterY

          const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

     
     let moveX, moveY
     if (distance > maxMove) {
       const scale = maxMove / distance
       moveX = deltaX * scale
       moveY = deltaY * scale
     } else {
       moveX = deltaX
       moveY = deltaY
     }

     pupil.style.transform = `translate(-50%, -50%) translate(${moveX}px, ${moveY}px)`
   })
 })
}

// кликабельные ссылки


// передвижение кастомного курсора
function cursorMove() {
  const cursor = document.querySelector('.customCursor')

  document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.pageX + 5}px, ${e.pageY + 5}px)`
  })
}


// анимация кастомного курсора
function links() {
    let links = document.querySelectorAll('.links');
    const cursor = document.querySelector('.customCursor2')

    links.forEach((link) =>{
        link.addEventListener('mouseover', () => {
            cursor.classList.add('hoverCursor')
            console.log('mouseover')
        })

         link.addEventListener('mouseout', () => {
           cursor.classList.remove('hoverCursor')
           console.log('mouseout')
         })

         
    })
    
}

// изменение изображения по курсору
function changeImageByCursor() {
    let x = document.querySelector('.XCoord')
    let y = document.querySelector('.YCoord')
    let box = document.querySelector('.imageBox')
    let section = document.querySelector('.changeImage')

    document.addEventListener('mousemove', (event) => {
        let cursor_x = event.pageX
        let cursor_y = event.pageY

        x.innerHTML = `X: ${cursor_x}`
        y.innerHTML = `Y: ${cursor_y}`

        let bodySizeX = document.documentElement.clientWidth
        let bodySizeY = document.documentElement.clientHeight

        let img1 = document.querySelector('.imageBox1')
        let img2 = document.querySelector('.imageBox2')
        let img3 = document.querySelector('.imageBox3')
        let img4 = document.querySelector('.imageBox4')

        if(cursor_x < bodySizeX && cursor_y < bodySizeY) {
            img1.style.opacity = '1'
        } else {
            img1.style.opacity = '0'
        }
        
        if (cursor_x > bodySizeX && cursor_y < bodySizeY) {
          img2.style.opacity = '1'
        } else {
          img2.style.opacity = '0'
        }

        if (cursor_x > bodySizeX && cursor_y > bodySizeY) {
          img3.style.opacity = '1'
        } else {
          img3.style.opacity = '0'
        }

        if (cursor_x < bodySizeX && cursor_y > bodySizeY) {
          img4.style.opacity = '1'
        } else {
          img4.style.opacity = '0'
        }
    })
}

// анимация времени


// звук барана по клику
