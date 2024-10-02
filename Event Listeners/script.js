const h1 = document.querySelector('h1')
const card = document.querySelector('.card')
const container = document.querySelector('.container')

// function sayHi(){
//     console.log("HI guys")
// }

// h1.onclick = sayHi



// h1.addEventListener('click',sayHi)
// h1.addEventListener('click', function(){
//     console.log('hi second');
// })



// let count = 1
// card.addEventListener('click',() =>{
//     let newCard = card.cloneNode()
//     newCard.classList.remove('card-click')
//     newCard.innerText = count++
//     container.appendChild(newCard)  
// })






let count = 1
card.addEventListener('click',() =>{
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})

