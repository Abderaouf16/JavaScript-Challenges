function swapCharacter(string) {
    let result =''
  
 for (const letter of string) {
  if (letter == letter.toUpperCase()) {
    result+= letter.toLowerCase()

  }else{
    result+= letter.toUpperCase()
    
  }
    
 }
 return result
}

console.log(swapCharacter("The Quick Brown Fox"))