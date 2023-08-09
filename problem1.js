function cubeNumber(number){
    if(typeof number !=="number" || number <= 0){
        return "Please Provide a Valid Number!"
    }
    else{
        return Math.pow(number , 3)
    }
}
console.log(cubeNumber(0));

