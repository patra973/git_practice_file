
let name="naman";

function reverse(str) {

   let new_str="";

   for(let i=str.length-1; i>=0; i++){

       new_str= new_str + str[i];
   }

      return new_str
  
}
let reversed_str=reverse(name)

 if(name==reversed_str){
      console.log(name,"is a palindrome")
}
  else{
      console.log(name,"is not a palindrome")
}