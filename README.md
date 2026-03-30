Веб-плакат сделан с некоторым использованием ИИ "Яндекс Алиса", а именно:
scripts.js
offers.js
model.js

____________команды scripts.js:________________
function offerWindow() {
  const offer1 = document.querySelector('#offer1');
  const recSection = document.querySelector('.recSection');
  const timerDisplay = document.querySelector('#time2');
  let timerInterval = null;
  let countdown = 30;

  function updateTimerDisplay(seconds) {
    if (!timerDisplay) {
      console.warn('Элемент #time2 не найден');
      return;
    }
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(1, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  offer1.addEventListener('click', () => {
    countdown = 30;
    updateTimerDisplay(countdown);

    recSection.style.display = 'block';
    recSection.classList.remove('fade-out');
    recSection.classList.add('fade-in');
    if (timerDisplay) timerDisplay.style.display = 'block';

    if (timerInterval) {
      clearInterval(timerInterval);
    }

    timerInterval = setInterval(() => {
      countdown--;
      updateTimerDisplay(countdown);

      if (countdown <= 0) {
        clearInterval(timerInterval);
        recSection.classList.remove('fade-in');
        recSection.classList.add('fade-out');

        setTimeout(() => {
          recSection.style.display = 'none';
          if (timerDisplay) timerDisplay.style.display = 'none';
          showCongratulations();
        }, 2000);
      }
    }, 1000);
  });
}

______________команды offers.js:_____________________
function drawLines() {
  state.linesShow.forEach((lineState, index) => {
    if (lineState === true) {
      const lineElement = document.getElementById(`line_${index + 1}`)
      if (!lineElement) {
        console.warn(`Элемент line_${index + 1} не найден`)
        return
      }

      const recFrom = document.getElementById(`rec_${index + 1}`)
      const recTo = document.getElementById(`rec_${index + 2}`)

      if (!recFrom || !recTo) {
        console.warn(
          `Один из квадратов rec_${index + 1} или rec_${index + 2} не найден`
        )
        return
      }

      const fromRect = recFrom.getBoundingClientRect()
      const toRect = recTo.getBoundingClientRect()

      const x1 = recFrom.getBoundingClientRect().left + recFrom.offsetWidth / 2
            const y1 = recFrom.offsetTop + recFrom.offsetHeight / 2

            const x2 = recTo.getBoundingClientRect().left + recTo.offsetWidth / 2
            const y2 = recTo.offsetTop + recTo.offsetHeight / 2

            const distance = calcDistance(x1, y1, x2, y2)
            const angle = calcAngle(x1, y1, x2, y2)

      lineElement.style.top = `${y1}px`
      lineElement.style.left = `${x1}px`
      lineElement.style.width = `${distance}px`
      lineElement.style.transform = `rotate(${angle}rad)`
    }
  })
}
function moveRecs(recs) {
  const recsSection = document.querySelector('.forthScreen')
  for (let index = 0; index < recs.length; index++) {
    const recElement = recs[index]
    // const { width, height } = recElement.getBoundingClientRect()
    const { width, height } = recElement.getBoundingClientRect()

    const sectionWidth = recsSection.getBoundingClientRect().width
    const sectionHeight = recsSection.getBoundingClientRect().height

    recElement.style.top = `${getRandomArbitrary(0, sectionHeight - height)}px`

    recElement.style.left = `${getRandomArbitrary(0, sectionWidth - width)}px`
  }

  console.log('Moving recs...')
}
function cycle() {
  const recs = document.querySelectorAll('.greenRec')

  setInterval(() => {
    drawLines()
  }, 1000 / 60)

  setInterval(() => {
    moveRecs(recs)
  }, 5000)
  //   moveRecs(recs)

  setInterval(() => {
    drawLines()
  }, 1000 / 60)
}

function checkAllConnected() {
 
  const totalSquares = document.querySelectorAll('.greenRec').length
  const requiredLines = totalSquares - 1

  const allConnected = state.linesShow
    .slice(0, requiredLines) 
    .every((line) => line === true)

  if (allConnected) {
    const recsBlink = document.querySelectorAll('.greenRec')
    recsBlink.forEach((recBlink) => {
      recBlink.classList.add('recBlink') 
    })

    setTimeout(() => {
      recsBlink.forEach((recBlink) => {
        recBlink.classList.remove('recBlink')
      })
    }, 3000)
  }
}

________________команды model.js:__________________
// Инициализация размера рендерера на основе контейнера
  function updateRendererSize() {
    const containerRect = model.getBoundingClientRect()
    renderer.setSize(containerRect.width, containerRect.height)
    camera.aspect = containerRect.width / containerRect.height
    camera.updateProjectionMatrix()
  }

  updateRendererSize()

  window.addEventListener('resize', updateRendererSize)