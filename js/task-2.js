
console.log("task-2")


 const i = []

function makeArray(firstArray, secondArray, maxLength) {

 for (const element of firstArray ) {
    i.push(element)
 }

 for (const element of secondArray ) {
    i.push(element)
 }

 if (i.length > maxLength) {

    return i.slice(0,maxLength)

 } else {

    return i

 }
}
