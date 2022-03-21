// Reverse
/* 
Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, 
with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second 
array – move values within the array that you are given. As always, do not use built-in array functions such as splice().
*/

const reverse = (list)=>{
    let temp = ""
    let temp2 = ""
    let count = 0
    for(let i=0;i<list.length/2;i++){
        count = count + 1
        temp = list[i]
        temp2 = list[list.length - count]
        list[i] = temp2;
        list[list.length - count] = temp;
    }
    return list;
}

let arry= [1,2,3,4,5,6,];
let arry2=[8,1,0,4,9,7,];
let arry3= [1,2,3,4,5,6,7];
let arry4=[8,1,0,4,9,7,2];

console.log("REVERSE")
console.log(reverse(arry));
console.log(reverse(arry2));
console.log(reverse(arry3));
console.log(reverse(arry4));



// Rotote
/*
Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 
'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. 
Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. Don't use built-in functions.
Second: allow negative shiftBy (shift L, not R).
Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
Fourth: minimize the touches of each element.
*/

// const rotateArr = (arr, shiftBy) =>{}





// Filter Range
/*
Alan is good at breaking secret codes. One method is to eliminate values that lie outside of a specific known range. 
Given arr and values min and max, retain only the array values between min and max. 
Work in-place: return the array you are given, with values in original order. No built-in array functions.
*/





// Concat
/*
Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. 
Return a new array containing the first array's elements, followed by the second array's elements. 
Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].
*/

let arrlist =  ['a','b']
let arrlist2 = [1,2]

const arrConcat = (arr1, arr2) =>{
    return arr1 +","+ arr2;
}

console.log("ConCat")
console.log(arrConcat(arry2,arry3))
console.log(arrConcat(arrlist,arrlist2))


