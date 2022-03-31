// We need to the string into an array
  let string="";
  let array = string.split("")
  for(let i=1; i < array.length; i+=2){
  let arrayValue=  array[i] * 2;
  if(arrayValue >=10 ){
     let add = Number(arrayValue.charAt(0))+Number(arrayValue.charAt(1));
     sum= sum+add;
  }
  g
  }
// We  need to multiply every other array element 
// if i >=10 1+0
let array =[ 6,6,7];
 function sample(){
  for(let i=0; i < array.length; i++){
   let arrayValue =  array[i] * 2;
    if(arrayValue >=10 ){
     arrayValue= arrayValue.toString();
      let add = Number(arrayValue.charAt(0))+ Number(arrayValue.charAt(1));
      sum= sum+add;
    }
  return sum;
  }
}
sample(array);
  

// ****************************************
let array =[ 6,4,7,9,9,7,7,3];
let sum1= 0;
let doubledArray=[];
const  multiply = doubleArray();
 function doubleArray(){
  for(let i=1; i < array.length; i+=2){
    doubledArray.push(array[i]*2);
   }
  return  doubledArray;
  
}

 function sumOfTheDOubledArrayIndec(){
  let sumSingle=0;
  let sumDoubleDigit=0;
  for(i=0; i< multiply.length;i++){
  if(multiply[i]<10){
   sumSingle= sumSingle+multiply[i];
   sumSingle++;
   
   }else{
   multiply[i]=multiply[i].toString();
   console.log(multiply[i]);
   sumDoubleDigit = Number(multiply[i].charAt(0))+ Number(multiply[i].charAt(0));
   sumDoubleDigit++;
   }
   
   } 
  return (sumSingle+sumDoubleDigit);
  }
  
sumOfTheDOubledArrayIndec(multiply);
