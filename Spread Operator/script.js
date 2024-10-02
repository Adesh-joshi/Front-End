const num1 = [1,2,3,4,5]
const num2 = [6,7,8,9,10]


// const myName = 'adesh'
// // const JoinedArray = num1.concat(num2)

// const joinedArray = [...num1,...num2,...myName]

const joinedArray = [...num1,...num2]


// const user = {
//     name : 'Adesh',
//     age : 20,
// }

// const updatedUser = {...user, city : 'Mahendranagar'}



function add() {
    let sum = 0
    for(let i=0; i<arguments.length;i++){
        sum += arguments[i]
    }
    return sum
}



console.log(add(...joinedArray)) // Sum of array
