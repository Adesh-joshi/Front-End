// Used in object and array


const colors = ['red', 'green', 'yellow', 'pink', 'black', 'white']

// const color1 = colors[0]
// const color2 = colors[1]
// const color3 = colors[2]

const [color1, color2, color3] = colors


// const [,,,color4] = colors
const { 3: color4, 5: color5 } = colors

const user = {
  name: 'Adesh',
  age: 20,
  address: {
    city: 'Mahendranagar',
    state: 'suderpachim',
  },
}

// const name = user.name
// const age = user.age

const { name, age } = user

// const { name: username, age: userAge } = user   // We can import name using username
 
//########## [second method]
// const { address: {city} } = user
// const { city } = address

// ########### This is better mathod [first method]
// const { address } = user



function intro({age, name}) {
  console.log(age, name);
}
// intro(user)


function printColor([a, b,,g]) {
  console.log(a, b, g);
}

printColor(colors)

