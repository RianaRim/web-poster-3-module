document.addEventListener('DOMContentLoaded', () => {
  initRecs()
  cycle()
})

// соединение квадратов
const state = {
  mouseDown: false,
  currentRec: null,
  linesShow: Array(9).fill(false)
}
function resetState() {
  state.mouseDown = false
  state.currentRec = 0
}

function resetLinesShow() {
  state.linesShow = Array(9).fill(false)
}
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}
function calcDistance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
}
function calcAngle(x1, y1, x2, y2) {
  return Math.atan2(y2 - y1, x2 - x1)
}
function getElementCors(element) {
  const { x, y, width, height } = element.getBoundingClientRect()

  return {
    x,
    y,
    width,
    height
  }
}
function initDocument() {
  document.addEventListener('mousemove', (e) => {
    if (state.mouseDown === true) {
      drawLine(e)
    }
  })

  document.addEventListener('mouseup', () => {
    resetState()
    eraseLine()
  })
}
function initRecs() {
  const recs = document.querySelectorAll('.greenRec')
  for (let index = 0; index < recs.length; index++) {
    const recElement = recs[index]
    initRec(recElement)
  }
}
function initRec(recElement) {
  const recsSection = document.querySelector('.forthScreen')
  const { width, height } = recElement.getBoundingClientRect()

  const sectionWidth = recsSection.getBoundingClientRect().width
  const sectionHeight = recsSection.getBoundingClientRect().height

  recElement.style.top = `${getRandomArbitrary(0, sectionHeight - height)}px`
  recElement.style.left = `${getRandomArbitrary(0, sectionWidth - width)}px`

  recElement.addEventListener('mousedown', (e) => {
    state.mouseDown = true
    state.currentRec = Number(e.target.id.slice(-1))
  })

  recElement.addEventListener('mouseup', (e) => {
    if (state.mouseDown && state.currentRec !== null) {
      const targetId = Number(e.target.id.slice(-1))

      // Проверяем, что соединяем текущий квадрат со следующим
      if (targetId === state.currentRec + 1 && state.currentRec < 9) {
        state.linesShow[state.currentRec] = true
        drawLines() // Сразу перерисовываем линии
      }
      if (state.currentRec + 1 === Number(e.target.id.slice(-1))) {
        state.linesShow[state.currentRec - 1] = true
      }
      if (state.currentRec !== null && state.currentRec < 9) {
        state.linesShow[state.currentRec] = true
      }
      if (state.currentRec - 1 === Number(e.target.id.slice(-1))) {
        state.linesShow[state.currentRec - 2] = true
      }

      if (
        state.linesShow[0] &&
        state.linesShow[1] &&
        state.linesShow[2] &&
        state.linesShow[3] &&
        state.linesShow[4] &&
        state.linesShow[5] &&
        state.linesShow[6] &&
        state.linesShow[7] &&
        state.linesShow[8]  
      ) {
        const recsBlink = document.querySelectorAll('.greenRec')
        recsBlink.forEach((recBlink) => {
          recBlink.classList.add('recBlink')
        })
      }
    }

    resetState()
    // eraseLine()
  })
}
function removeAnimation() {
  const recsBlink = document.querySelectorAll('.greenRec')
  recsBlink.forEach((recBlink) => {
    recBlink.classList.remove('recBlink')
  })
}
function mobileCatchRec() {
  let recs = document.querySelectorAll('.greenRec')
  recs.forEach((rec) => {
    rec.addEventListener('touchstart', (event) => {
      console.log('Touchstart event started')
      state.linesShow[0] = true
      state.linesShow[1] = true
      state.linesShow[2] = true
      state.linesShow[3] = true
      state.linesShow[4] = true
      state.linesShow[5] = true
      state.linesShow[6] = true
      state.linesShow[7] = true
      state.linesShow[8] = true
      state.linesShow[9] = true
    })
  })
}
function drawLine(e) {
  const currentRecElement = document.getElementById(`rec_${state.currentRec}`)
  if (!currentRecElement) return

  // Получаем координаты центра текущего квадрата
  const recRect = currentRecElement.getBoundingClientRect()
  const x1 = recRect.left + recRect.width / 2
  const y1 = recRect.top + recRect.height / 2

  // Координаты мыши относительно viewport
  const x2 = e.clientX
  const y2 = e.clientY

  // Расчёт расстояния и угла
  const distance = calcDistance(x1, y1, x2, y2)
  const angle = calcAngle(x1, y1, x2, y2) // в радианах

  const line = document.querySelector('.line')
  if (!line) return

  // Позиционируем линию: начало в центре квадрата
  line.style.left = `${x1}px`
  line.style.top = `${y1}px`

  // Длина линии
  line.style.width = `${distance}px`

  // Поворот: ось вращения — левый край линии (начало)
  line.style.transformOrigin = 'left center'
  line.style.transform = `rotate(${angle}rad)`
}

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
