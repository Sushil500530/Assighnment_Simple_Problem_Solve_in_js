function findAddress(obj){
    if(typeof obj !== 'object'){
        return "please provide a valid object!"
    }
    else{
    console.log(obj);
    const street = person.street || '__';
    const house = person.house || '__';
    const seciety = person.seciety || '__';
    return street + ' '+ house+ ' ' + seciety;
    }
}
const person = {street: 10 , house: '15A'  };
console.log(findAddress(person))