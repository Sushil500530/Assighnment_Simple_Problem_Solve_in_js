function canPay(array, number){
    if(!Array.isArray (array) || typeof number !== 'number' || array.length === 0){
        return 'please provide valid input'
    }
    else{
        let sum = 0;
        for(let price of array){
            sum = sum + price;  
            // console.log(sum) 
        }
        if(sum > number){
            return true;
        }
        else{
            return false;
        }
        // return sum;
    }   
}
const cheapPrice = 10;
const arrayMoney = [1, 3, 5];
console.log(canPay(arrayMoney, cheapPrice));