const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')


let count = 1
addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)

    newCard.addEventListener('click', (e) => {
        // newCard.classList.add('delet')
        // e.target.remove()
        newCard.style.display = 'none'
    })
})

