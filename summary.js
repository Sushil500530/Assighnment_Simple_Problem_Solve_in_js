// prob-1
function cubeNumber(number){
  if(typeof number !=="number" || number <= 0){
      return "Please Provide a Valid Number!"
  }
  else{
      return Math.pow(number , 3)
  }
}
// pro-2
function matchFinder(string1,string2){
  if(typeof string1 !== "string" || typeof string2 !== "string"){
      return " Please Provide a name of valid String!"
  }
  else{
    if( string1.toLowerCase().includes(string2.toLowerCase())){
      return true;
    }
      else{
          return false;
      }
  }
}
// prob-3
function sortMaker(arr){
  if(!Array.isArray){
      return 'Please Provide a valid an array!'
  }
  else if(arr[0] == arr[1]){
      return 'equal!'
  }
  else if(arr[0] < 0 || arr[1] < 0){
      return 'invalid input!'
  }
  else{
      const tem = arr[0];
      arr[0]= arr[1]
      arr[1] = tem
      return [Math.max(arr[0], arr[1]), Math.min(arr[0], arr[1])];
  }
}
// prob-4
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
// prob-5
function canPay(array, number){
  if(!Array.isArray (array) || typeof number !== 'number' || array.length === 0){
      return 'please provide valid input'
  }
  else{
      let sum = 0;
      for(let price of array){
          sum = sum + price;     
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