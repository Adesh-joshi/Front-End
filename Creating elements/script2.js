const container = document.querySelector('.container')

// for(let i = 1; i <= 100; i++) {
//     const imgContainer = document.createElement('div')
//     imgContainer.classList.add('img-container')

//     const newImage = document.createElement('img')
//     newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

//     const paragraph = document.createElement('p')
//     paragraph.innerText = i

//     imgContainer.append(newImage, paragraph)
//     container.append(imgContainer)
// }



// for (let i = 1; i <= 100; i++) {
//   const imgContainer = document.createElement('div')
//   imgContainer.classList.add('img-container')
//   const myHTML = `
//     <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
//     <p>${i}</p>
//   `
//   imgContainer.innerHTML = myHTML
// }


// container.append(imgContainer)


let myHTML = ``

for (let i = 1; i <= 100; i++) {
  myHTML += `
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
        <p>${i}</p>
    </div>
    `
}

container.innerHTML = myHTML



// const container = document.querySelector('.container')

// for(let i=1; i<100; i++){
//     let newImage = document.createElement('img')
//     newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${[i]}.png`
//     let newNUmber = document.createElement('p')
//     newNUmber.innerText = i
//     newNUmber.classList.add('newImage')
//     container.append(newImage)
//     container.append(newNUmber)
//     // container.append(p)
// } 


// for(let i=0; i<100; i++){
//     let number = 
//     number.innerText = i
//     container.append(number)
// }