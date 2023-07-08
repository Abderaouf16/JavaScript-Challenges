function orderNumbers(array) {
    function compareNumbers(a, b)
    {
        return a - b;
    }
    return array.sort(compareNumbers)   
}
console.log(orderNumbers([5,65,-1,-11,666, -555]))