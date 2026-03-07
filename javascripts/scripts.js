// движение кастомного курсора за движением мыши
cursorMove()
// анимация кастомного курсора
links()
// изменение изображения по курсору
changeImageByCursor()
// кликабельные ссылки

// 3-д персонаж
ramCharacter()
// слежение за курсором
eyeAnimation()


// 3-д персонаж
function ramCharacter() {
  // Сцена, камера, рендерер
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.getElementById('ram3D').appendChild(renderer.domElement)

  // Освещение
  const light = new THREE.AmbientLight(0x404040)
  scene.add(light)

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
  directionalLight.position.set(1, 1, 1).normalize()
  scene.add(directionalLight)

  // Загрузка 3D‑модели (формат GLTF)
  const loader = new THREE.GLBoader()
  let model

  loader.load(
    '3d model/ramFigure.glb',
    function (glb) {
      model = glb.scene
      scene.add(model)
    },
    undefined,
    function (error) {
      console.error('Ошибка загрузки модели:', error)
    }
  )

  // Позиция камеры
camera.position.z = 15;

// Анимация вращения
function animate() {
  requestAnimationFrame(animate);
}

 if (model) {
    model.rotation.y += 0.01; // скорость вращения
  }

  renderer.render(scene, camera);
}

animate();

// Адаптация под размер окна
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});


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
