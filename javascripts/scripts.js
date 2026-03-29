// движение кастомного курсора за движением мыши
cursorMove()
// анимация кастомного курсора
links()
// изменение изображения по курсору
changeImageByCursor()
// звук барашка
ramSound()
// слежение за курсором
eyeAnimation()
// окошко по клику
modalWindow()
modalWindow2()
modalWindow3()
modalWindow4()
// таймер страницы
timeTracker()
// появление текста по ховеру
hoverOpacity()
hoverOpacity2()
hoverOpacity3()
hoverOpacity4()

// окошко с подношениями
offerWindow()
offerWindow2()
offerWindow3()
offerWindow4()
offerWindow5()
offerWindow6()


// окошко с подношениями
function offerWindow() {
    const offer1 = document.querySelector('#offer1')
    const recSection = document.querySelector('.recSection')
    const timerDisplay = document.querySelector('#time2')
    const congratulationsModal = document.querySelector('#congratulationsModal')
    let timerInterval = null
    let countdown = 30

    function updateTimerDisplay(seconds) {
      const minutes = Math.floor(seconds / 60)
      const secs = seconds % 60
      timerDisplay.textContent = `${minutes.toString().padStart(1, '0')}:${secs.toString().padStart(2, '0')}`
    }

    // Функция показа всплывающего окна
    function showCongratulations() {
      congratulationsModal.style.display = 'block'
    }

    // Функция закрытия всплывающего окна
    function closeModal() {
      congratulationsModal.style.display = 'none'
    }

    // Обработчик закрытия модального окна
    document.getElementById('closeModal').addEventListener('click', closeModal)

    offer1.addEventListener('click', () => {
      // Сброс состояния
      countdown = 30
      updateTimerDisplay(countdown)

      // Показываем секцию и таймер
      recSection.style.display = 'block'
      recSection.classList.remove('fade-out')
      recSection.classList.add('fade-in')
      timerDisplay.style.display = 'block'

      // Очистка предыдущего таймера
      if (timerInterval) {
        clearInterval(timerInterval)
      }

      // Запуск обратного отсчёта
      timerInterval = setInterval(() => {
        countdown--
        updateTimerDisplay(countdown)

        // Если время вышло
        if (countdown <= 0) {
          clearInterval(timerInterval)

          // Скрываем секцию
          recSection.classList.remove('fade-in')
          recSection.classList.add('fade-out')

          // Через длительность анимации скрываем полностью и показываем поздравление
          setTimeout(() => {
            recSection.style.display = 'none'
            timerDisplay.style.display = 'none'
            showCongratulations() // Показываем всплывающее окно
          }, 2000) // 2 с — длительность fade-out анимации
        }
      }, 1000)
    })
  }
function offerWindow2() {
    const offer2 = document.querySelector('#offer2')
    const recSection = document.querySelector('.recSection')
    const timerDisplay = document.querySelector('#time3')
    const congratulationsModal = document.querySelector('#congratulationsModal')
    let timerInterval = null
    let countdown = 20

    function updateTimerDisplay(seconds) {
      const minutes = Math.floor(seconds / 60)
      const secs = seconds % 60
      timerDisplay.textContent = `${minutes.toString().padStart(1, '0')}:${secs.toString().padStart(2, '0')}`
    }

    function showCongratulations() {
      congratulationsModal.style.display = 'block'
    }

    function closeModal() {
      congratulationsModal.style.display = 'none'
    }

    document.getElementById('closeModal').addEventListener('click', closeModal)

    offer2.addEventListener('click', () => {
      
      countdown = 20
      updateTimerDisplay(countdown)

      recSection.style.display = 'block'
      recSection.classList.remove('fade-out')
      recSection.classList.add('fade-in')
      timerDisplay.style.display = 'block'

      if (timerInterval) {
        clearInterval(timerInterval)
      }

      timerInterval = setInterval(() => {
        countdown--
        updateTimerDisplay(countdown)

        if (countdown <= 0) {
          clearInterval(timerInterval)

          recSection.classList.remove('fade-in')
          recSection.classList.add('fade-out')

          setTimeout(() => {
            recSection.style.display = 'none'
            timerDisplay.style.display = 'none'
            showCongratulations() 
          }, 2000) 
        }
      }, 1000)
    })
  }
function offerWindow3() {
    const offer3 = document.querySelector('#offer3')
    const recSection = document.querySelector('.recSection')
    const timerDisplay = document.querySelector('#time4')
    const congratulationsModal = document.querySelector('#congratulationsModal')
    let timerInterval = null
    let countdown = 15

    function updateTimerDisplay(seconds) {
      const minutes = Math.floor(seconds / 60)
      const secs = seconds % 60
      timerDisplay.textContent = `${minutes.toString().padStart(1, '0')}:${secs.toString().padStart(2, '0')}`
    }

    // Функция показа всплывающего окна
    function showCongratulations() {
      congratulationsModal.style.display = 'block'
    }

    // Функция закрытия всплывающего окна
    function closeModal() {
      congratulationsModal.style.display = 'none'
    }

    // Обработчик закрытия модального окна
    document.getElementById('closeModal').addEventListener('click', closeModal)

    offer3.addEventListener('click', () => {
      // Сброс состояния
      countdown = 15
      updateTimerDisplay(countdown)

      // Показываем секцию и таймер
      recSection.style.display = 'block'
      recSection.classList.remove('fade-out')
      recSection.classList.add('fade-in')
      timerDisplay.style.display = 'block'

      // Очистка предыдущего таймера
      if (timerInterval) {
        clearInterval(timerInterval)
      }

      // Запуск обратного отсчёта
      timerInterval = setInterval(() => {
        countdown--
        updateTimerDisplay(countdown)

        // Если время вышло
        if (countdown <= 0) {
          clearInterval(timerInterval)

          // Скрываем секцию
          recSection.classList.remove('fade-in')
          recSection.classList.add('fade-out')

          // Через длительность анимации скрываем полностью и показываем поздравление
          setTimeout(() => {
            recSection.style.display = 'none'
            timerDisplay.style.display = 'none'
            showCongratulations() // Показываем всплывающее окно
          }, 2000) // 2 с — длительность fade-out анимации
        }
      }, 1000)
    })
  }
function offerWindow4() {
    const offer4 = document.querySelector('#offer4')
    const recSection = document.querySelector('.recSection')
    const timerDisplay = document.querySelector('#time2')
    const congratulationsModal = document.querySelector('#congratulationsModal')
    let timerInterval = null
    let countdown = 30

    function updateTimerDisplay(seconds) {
      const minutes = Math.floor(seconds / 60)
      const secs = seconds % 60
      timerDisplay.textContent = `${minutes.toString().padStart(1, '0')}:${secs.toString().padStart(2, '0')}`
    }

    // Функция показа всплывающего окна
    function showCongratulations() {
      congratulationsModal.style.display = 'block'
    }

    // Функция закрытия всплывающего окна
    function closeModal() {
      congratulationsModal.style.display = 'none'
    }

    // Обработчик закрытия модального окна
    document.getElementById('closeModal').addEventListener('click', closeModal)

    offer4.addEventListener('click', () => {
      // Сброс состояния
      countdown = 30
      updateTimerDisplay(countdown)

      // Показываем секцию и таймер
      recSection.style.display = 'block'
      recSection.classList.remove('fade-out')
      recSection.classList.add('fade-in')
      timerDisplay.style.display = 'block'

      // Очистка предыдущего таймера
      if (timerInterval) {
        clearInterval(timerInterval)
      }

      // Запуск обратного отсчёта
      timerInterval = setInterval(() => {
        countdown--
        updateTimerDisplay(countdown)

        // Если время вышло
        if (countdown <= 0) {
          clearInterval(timerInterval)

          // Скрываем секцию
          recSection.classList.remove('fade-in')
          recSection.classList.add('fade-out')

          // Через длительность анимации скрываем полностью и показываем поздравление
          setTimeout(() => {
            recSection.style.display = 'none'
            timerDisplay.style.display = 'none'
            showCongratulations() // Показываем всплывающее окно
          }, 2000) // 2 с — длительность fade-out анимации
        }
      }, 1000)
    })
  }
function offerWindow5() {
    const offer5 = document.querySelector('#offer5')
    const recSection = document.querySelector('.recSection')
    const timerDisplay = document.querySelector('#time3')
    const congratulationsModal = document.querySelector('#congratulationsModal')
    let timerInterval = null
    let countdown = 20

    function updateTimerDisplay(seconds) {
      const minutes = Math.floor(seconds / 60)
      const secs = seconds % 60
      timerDisplay.textContent = `${minutes.toString().padStart(1, '0')}:${secs.toString().padStart(2, '0')}`
    }

    function showCongratulations() {
      congratulationsModal.style.display = 'block'
    }

    function closeModal() {
      congratulationsModal.style.display = 'none'
    }

    document.getElementById('closeModal').addEventListener('click', closeModal)

    offer5.addEventListener('click', () => {
      
      countdown = 20
      updateTimerDisplay(countdown)

      recSection.style.display = 'block'
      recSection.classList.remove('fade-out')
      recSection.classList.add('fade-in')
      timerDisplay.style.display = 'block'

      if (timerInterval) {
        clearInterval(timerInterval)
      }

      timerInterval = setInterval(() => {
        countdown--
        updateTimerDisplay(countdown)

        if (countdown <= 0) {
          clearInterval(timerInterval)

          recSection.classList.remove('fade-in')
          recSection.classList.add('fade-out')

          setTimeout(() => {
            recSection.style.display = 'none'
            timerDisplay.style.display = 'none'
            showCongratulations() 
          }, 2000) 
        }
      }, 1000)
    })
  }
function offerWindow6() {
    const offer6 = document.querySelector('#offer6')
    const recSection = document.querySelector('.recSection')
    const timerDisplay = document.querySelector('#time4')
    const congratulationsModal = document.querySelector('#congratulationsModal')
    let timerInterval = null
    let countdown = 15

    function updateTimerDisplay(seconds) {
      const minutes = Math.floor(seconds / 60)
      const secs = seconds % 60
      timerDisplay.textContent = `${minutes.toString().padStart(1, '0')}:${secs.toString().padStart(2, '0')}`
    }

    // Функция показа всплывающего окна
    function showCongratulations() {
      congratulationsModal.style.display = 'block'
    }

    // Функция закрытия всплывающего окна
    function closeModal() {
      congratulationsModal.style.display = 'none'
    }

    // Обработчик закрытия модального окна
    document.getElementById('closeModal').addEventListener('click', closeModal)

    offer6.addEventListener('click', () => {
      // Сброс состояния
      countdown = 15
      updateTimerDisplay(countdown)

      // Показываем секцию и таймер
      recSection.style.display = 'block'
      recSection.classList.remove('fade-out')
      recSection.classList.add('fade-in')
      timerDisplay.style.display = 'block'

      // Очистка предыдущего таймера
      if (timerInterval) {
        clearInterval(timerInterval)
      }

      // Запуск обратного отсчёта
      timerInterval = setInterval(() => {
        countdown--
        updateTimerDisplay(countdown)

        // Если время вышло
        if (countdown <= 0) {
          clearInterval(timerInterval)

          // Скрываем секцию
          recSection.classList.remove('fade-in')
          recSection.classList.add('fade-out')

          // Через длительность анимации скрываем полностью и показываем поздравление
          setTimeout(() => {
            recSection.style.display = 'none'
            timerDisplay.style.display = 'none'
            showCongratulations() // Показываем всплывающее окно
          }, 2000) // 2 с — длительность fade-out анимации
        }
      }, 1000)
    })
  }



// появление текста по ховеру
function hoverOpacity4() {
  let button = document.querySelector('#ramHelper')
  let dialog = document.querySelector('.dialog')

  button.addEventListener('mouseenter', () => {
    dialog.classList.add('visible')
  })

  button.addEventListener('mouseleave', () => {
    dialog.classList.remove('visible')
  })
}

function hoverOpacity() {
  let button = document.querySelector('.hoverButton_1')
  let quote = document.querySelector('.qoute_1')

  button.addEventListener('mouseenter', () => {
    quote.classList.add('visible')
  })

  button.addEventListener('mouseleave', () => {
    quote.classList.remove('visible')
  })
}

function hoverOpacity2() {
  let button = document.querySelector('.hoverButton_2')
  let quote = document.querySelector('.qoute_2')

  button.addEventListener('mouseenter', () => {
    quote.classList.add('visible')
  })

  button.addEventListener('mouseleave', () => {
    quote.classList.remove('visible')
  })
}

function hoverOpacity3() {
  let button = document.querySelector('.hoverButton_3')
  let quote = document.querySelector('.qoute_3')

  button.addEventListener('mouseenter', () => {
    quote.classList.add('visible')
  })

  button.addEventListener('mouseleave', () => {
    quote.classList.remove('visible')
  })
}


// таймер страницы
function timeTracker() {
  let startTime = Date.now()

  function updateTimer() {
    const elapsed = Date.now() - startTime
    const seconds = Math.floor(elapsed / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)


    const formattedSeconds = (seconds % 60).toString().padStart(2, '0')
    const formattedMinutes = (minutes % 60).toString().padStart(2, '0')
    const formattedHours = hours.toString().padStart(2, '0')

    document.getElementById('time').textContent =
      `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
  }

  setInterval(updateTimer, 1000)
}

function modalWindow4() {
  let text9 = document.querySelector('#text9')
  let mainScreen4 = document.querySelector('.mainScreen4')

  text9.addEventListener('click', () => {
    mainScreen4.style.display = 'block'
  })

  mainScreen4.addEventListener('click', () => {
    mainScreen4.style.display = 'none'
  })

  text9.addEventListener('click', () => {
    mainScreen4.className = 'mainScreen4 fade-in'
  })

  mainScreen4.addEventListener('click', () => {
    mainScreen4.className = 'mainScreen4 fade-out'
    setTimeout(() => {
      mainScreen4.style.opacity = '0'
    }, 300)
  })
}

function modalWindow3() {
  let text8 = document.querySelector('#text8')
  let mainScreen3 = document.querySelector('.mainScreen3')

  text8.addEventListener('click', () => {
    mainScreen3.style.display = 'block'
  })

  mainScreen3.addEventListener('click', () => {
    mainScreen3.style.display = 'none'
  })

  text8.addEventListener('click', () => {
    mainScreen3.className = 'mainScreen3 fade-in'
  })

  mainScreen3.addEventListener('click', () => {
    mainScreen3.className = 'mainScreen3 fade-out'
    setTimeout(() => {
      mainScreen3.style.opacity = '0'
    }, 300)
  })
}

function modalWindow2() {
  let text7 = document.querySelector('#text7')
  let mainScreen2 = document.querySelector('.mainScreen2')

  text7.addEventListener('click', () => {
    mainScreen2.style.display = 'block'
  })

  mainScreen2.addEventListener('click', () => {
    mainScreen2.style.display = 'none'
  })

  text7.addEventListener('click', () => {
    mainScreen2.className = 'mainScreen2 fade-in'
  })

  mainScreen2.addEventListener('click', () => {
    mainScreen2.className = 'mainScreen2 fade-out'
    setTimeout(() => {
      mainScreen2.style.opacity = '0'
    }, 300)
  })
}

function modalWindow() {
  let text6 = document.querySelector('#text6')
  let mainScreen1 = document.querySelector('.mainScreen1')

  text6.addEventListener('click', () => {
    mainScreen1.style.display = 'block'
  })

  mainScreen1.addEventListener('click', () => {
    mainScreen1.style.display = 'none'
  })

   text6.addEventListener('click', () => {
     mainScreen1.className = 'mainScreen1 fade-in'
   })

   mainScreen1.addEventListener('click', () => {
     mainScreen1.className = 'mainScreen1 fade-out'
     setTimeout(() => {
       mainScreen1.style.opacity = '0'
     }, 300)
   })
}


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
        let cursor_x = event.clientX
        let cursor_y = event.clientY

        x.innerHTML = `X: ${cursor_x}`
        y.innerHTML = `Y: ${cursor_y}`

        let bodySizeX = window.innerWidth / 2
        let bodySizeY = window.innerHeight / 2

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
