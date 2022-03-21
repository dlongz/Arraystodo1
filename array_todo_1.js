// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.
var one = []

// function pushFront(arr, val) {
//     arr.length = arr.length + 1
//     for (let i = arr.length - 1; i >=0; i--) {
//         arr[i] = arr[i-1]
//         if (i == 0) {
//             arr[i] = val
//             break
//         }
//     }
//     return arr
// }

function pushFront(arr, val) {
    for (let i = arr.length; i>=0; i--) {
        arr[i] = arr[i-1]
    }
    arr[0] = val

    return arr
}

var one = [3,6,9,10,2,1,]
var val = 55
console.log(pushFront(one,val))
// Pop Front
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().

var one = []

function popFront(arr) {
    var reverse = []
    var newindex = 0
    for (let index = arr.length -1; index >= 0; index--) {
        
        reverse[newindex] =  arr[index]
        newindex++
        console.log(reverse)
    }
    var val = reverse.pop()
    // console.log(val)
    return val
}

function popFront2(arr) {
    for (let index = 0; index < arr.length; index++) {
        firstVal = arr[index]
        if(index == 0)
        break
    }
    return firstVal
}
// console.log(popFront(one))
// console.log(popFront2(one))
var one = [3,6,9,10,2,1]
console.log(...one)
console.log(one)

// Insert At
// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
function inserAt(arr, index = 0, val) {
    arr.length = arr.length+1

    for (let i = 0; index < arr.length; i++) {

        if (i == index) {
            console.log(arr)
            arr[index] = val
        }
    }
    return arr
}

var one = []
var one = [3,6,9,10,2,1]


console.log(inserAt(one,3,55))
// Remove At (Bonus Challenge)
// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).



// Swap Pairs (Bonus Challenge)
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.



// Remove Duplicates (Bonus Challenge)
// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.


// Second: Solve this without using any nested loops.