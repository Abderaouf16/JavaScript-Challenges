function firstElement(array,n) {

if (n == null) {
   return []
}if(array== null){
   return void 0
}if(n<0){
  return []
}
else {
   return array.slice(0,n)
}
   
}
console.log(firstElement([1,2,3,4,5,6,7,8,9],2))