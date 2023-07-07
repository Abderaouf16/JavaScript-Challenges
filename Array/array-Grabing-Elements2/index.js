function lastElement(array,n) {

if (n == null) {
   return []
}if(array== null){
   return void 0
}if(n<0){
  return []
}
else {
   return array.slice(-n)
}
   
}
console.log(lastElement([1,2,3,4,5,6,7,8,9],4))