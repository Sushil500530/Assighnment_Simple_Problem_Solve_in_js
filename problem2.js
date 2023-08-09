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
console.log(matchFinder(' john Deo' , ''))