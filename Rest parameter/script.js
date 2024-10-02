const num1 = [1,2,3,4]

function add(a,b,...numbers) {
    console.log(a,b)
    console.log('numbers:',numbers);
    let sum = 0
    for(let i=0; i<numbers.length;i++){
        sum += numbers[i]
    }
    return sum
}

add(...num1,5,6,7)



function add() {
  return [...arguments].reduce((acc, curr) => acc + curr)
}

function add() {
  return Array.from(arguments).reduce((acc, curr) => acc + curr)
}

function add(...nums) {
    return nums.reduce((acc, curr) => acc + curr)
  }
  
  const result = add(...nums1)