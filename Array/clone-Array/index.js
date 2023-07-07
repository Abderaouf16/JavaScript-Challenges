function cloneArray(input) {
   let array = [1,2,3]
   return [array,input]; // spread operator to merge two arrays and create a new one.

}
console.log(cloneArray([4,5]))