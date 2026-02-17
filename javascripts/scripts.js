// движение кастомного курсора за движением мыши
cursorMove()
links()

function cursorMove(){
    const cursor = document.querySelector('.customCursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`
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


// анимация времени


// звук барана по клику
