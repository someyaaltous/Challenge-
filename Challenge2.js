function Challenge2 (arrayone){
  

    let max = Math.max(...arrayone);
   let arraySum = 0;
   let allSum = 0;
   
   for (let i=0;i<arrayone.length;i++){
     arraySum += arrayone[i];
   }
 
   for(let i=0;i<=max;i++){
      allSum += i
   }
   
   return allSum - arraySum
   
 }
 console.log(Challenge2([1,2,4,5]))