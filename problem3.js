function sortMaker(arr){
    if(!Array.isArray (arr)){
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

const array = [4, 4];
console.log(sortMaker(array))