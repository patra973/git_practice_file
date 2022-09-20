function prime(number){

   let count=0;

   for(i=1;i<=number;i++){

      if(number % i == 0){

         count++;
      }
      if(count == 2){
         return true
     } 
       return false
    }
}
let number=5

if(prime(number)==true){
     console.log(number,"is a prime number")
}else{
     console.log(number,"is a not prime number")
}