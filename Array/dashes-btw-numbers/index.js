function dashesBtwNum(num) {
const digit= num.toString().split('')
const result = []

for (let i = 0; i < digit.length; i++) {
    result.push(digit[i])

    if (digit[i]%2 ===0 && digit[i+1] %2===0) {
        result.push('-')
    }

    
}
return result.join('')
   
}
console.log(dashesBtwNum('025468'))
// 025468 is an actal num so we need to put it into a string 