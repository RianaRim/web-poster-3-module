// движение кастомного курсора за движением мыши
cursorMove()
// анимация кастомного курсора
links()
// изменение изображения по курсору
changeImageByCursor()
// кликабельные ссылки

// слежение за курсором
eyeAnimation()

// слежение за курсором
function eyeAnimation() {
  let eyes = document.querySelectorAll('.eye')

  document.addEventListener('mousemove', (e) => {
    eyes.forEach((eye) => {
      let eyeMouse = eye.getBoundingClientRect()

      let eyeX = eyeMouse.left + eyeMouse.width / 2
      let eyeY = eyeMouse.top + eyeMouse.height / 2

      let eX = event.clientX - eyeX
      let eY = event.clientY - eyeY

      let position = Math.atan2(eY, eX)

      let px = position * (10.6 / Math.PI)

      eye.style.transform = `translate(${px}px)`
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
