// Your code here
function mapToNegativize(arr) {
    const newArray = arr.map(a => {
        return a * -1
    })
    return newArray
}

function mapToNoChange(arr) {
    return arr
}

function mapToDouble(arr) {
    const newArray = arr.map(a => {
        return a * 2
    })
    return newArray
}

function mapToSquare(arr) {
    const squaredValues = arr.map(a => {
        return Math.pow(a, 2)
    })
    return squaredValues
}

// function reduceToTotal(arr, startingPoint) {
//     let total = startingPoint
//     const reducer = arr.reduce((total, amount) => {
//         return total + amount
//     })
//     return reducer
// }
function reduceToTotal(src, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < src.length; i++ ) {
      total = total + src[i]
    }
    return total
  }

  function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (src[i] === false) {
          return false
      }
    }
    return true
  }

//   function reduceToAnyTrue(arr) {
//       const reducer = arr.reduce((accumulator, currentValue) => {
//           if (currentValue === true) {
//               return true
//           } else {
//               return false
//           }
//       })
//       return reducer
//   }

function reduceToAnyTrue(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === true) {
            return true
        }
    }
    return false
}