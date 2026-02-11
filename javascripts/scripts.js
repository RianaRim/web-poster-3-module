// движение кастомного курсора за движением мыши
const cursor = document.querySelector('.customCursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
})

// анимация кастомного курсора
