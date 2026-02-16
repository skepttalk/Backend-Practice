let Str = "hello"

let Alphabet = true

for(let char of Str){

    if(!(( char>="a" && char<="z") || (char>="A" && char<="Z")))
        {
         Alphabet=false
         break;
    }
}

if(Alphabet){
    console.log("number is pangram")
}
else{
    console.log("not a pangram")
}