function sayHi() {
    document.body.children[3].src = 'https://getwallpapers.com/wallpaper/full/7/c/7/624165.jpg'
}


// const allImages = document.images
// const allImages = document.getElementsByTagName('img')
// const cssImage = document.getElementsByClassName('css-image')[0]
// const cssImage = document.getElementById('css-image')
// const cssImage = document.querySelectorAll('#css-image')
// const cssImage = document.querySelector('.css-image')
// const jsImage = document.querySelector('[alt="javascript roadmap"]')
// const ul = document.querySelector('ul')

// const allImages = document.querySelectorAll('img')

// const imageInsideUl = ul.querySelector('.css-image')

const imagesUrl = [
  'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg',
  'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
  'https://media.istockphoto.com/id/1181366400/photo/in-the-hands-of-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-on.jpg?s=612x612&w=0&k=20&c=jWUMrHgjMY9zQXsAwZFb1jfM6KxZE16-IXI1bvehjQM=',
]

// allImages[0].src = imagesUrl[0]
// allImages[1].src = imagesUrl[1]
// allImages[2].src = imagesUrl[2]

// for (let i = 0; i < allImages.length; i++) {
//   allImages[i].src = imagesUrl[i]
// }

// allImages.forEach((image, i) => {
//   image.src = imagesUrl[i]
// })


// for(let i = 0; i<allImages.length; i++){
//   allImages[i].src = imagesUrl[i]
// }




// ##################  getattribute and setattribute ######################

// document.querySelector('h1').id = 'hello'

// document.querySelector('h1').setAttribute('title','hello world')




// const h1  = document.querySelector('h1')
// h1.style.color = "hotpink"



// ####################?
const a = document.querySelectorAll('a')
// for(let i=0; i<a.length; i++){
//   a[i].style.color = "red"
// }

for(let link of a){
  // link.style.color = "teal"
  // link.style.textDecorationLine = 'none'
  // link.style.fontWeight = 600
  // link.style.fontFamily = "cursive"


  // link.style.cssText = ` color: teal;
  //   font-size: 18px;
  //   font-family: cursive;
  //   font-weight: 600;
  //   text-decoration-line: none;`


  // link.className = 'javascriptShortcut'


  // link.setAttribute('class', 'javascriptShortcut')



  // ################# This is the best method for add the style ##################
  link.classList.add('javascriptShortcut')   
  // link.classList.remove("javascriptShortcut")
  // link.classList.toggle("javascriptShortcut")
}


// a.forEach((a) => {
//   a.style.color = 'teal'
// })






