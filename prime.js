function prime(number){

   let factor=0;

   for(i=1;i<=number;i++){

      if(number % i == 0){

         factor++;
      }
}
      if(factor == 2){
         return true
     } 
       return false
    }
}
let ans=prime(5);

if(ans==true){
     console.log(number,"prime number")
}else{
     console.log(number,"is a not prime number")
}