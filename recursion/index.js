//*************************** */
// fibonacci
// let fibonacci = (num)=>{
//     if(num==1 || num==0)
//         return num

//     return fibonacci(num-1) + fibonacci(num-2)
// }
// console.log(fibonacci(10))
//*************************** */

//Binary Search
// let BinarySaerch = (Arr,left,right,num)=>{
//     if(left>right)
//         return -1;

//     let middle = Math.ceil((left + right)/2)
    
//     if(Arr[middle]==num){
//         return middle;}

//     if(Arr[middle]<num){
//         return BinarySaerch(Arr,middle+1,right,num)
    
//     }
//     if(i==20)
//         return;
//     return BinarySaerch(Arr,left,middle-1,num)
// }
// let Array1 = [10,100,200,300,400,500,600,700,800];
// // console.log(Array1[Array1.length-1])
// console.log(BinarySaerch(Array1,0,Array1.length-1,1000))
//*************************** */

// let Calculing =(num)=>{
//     if(num==1)
//         return num;
//     return num+ Calculing(num-1)
// }
// console.log(Calculing(10,0))
// var findComplement = function(num) {
//     let Binary = DecimalTOBinary(num,"");
//     console.log(Binary)
//     let Decimal =BinaryToDecimal(Binary,0)
//     return Decimal;
// };
//*************************** */

// let DecimalTOBinary = (num,result)=>{
//     if(num == 0)
//         return result;
//     else if (num==1){
//         // result.unshift(1)
//         result =1+ result;
//       return  DecimalTOBinary(0,result)
//     }
//     let  a = num % 2;
//     // result.unshift(a)
//     result =a+ result ;

//    return DecimalTOBinary(((num+a) / 2)-a,result)
// }
//*************************** */

// let BinaryToDecimal = (value,result)=>{
//     if(value.length ==0){
//         return result;
//     }
//     let ValueC;
//     if(value[0]==1){
//         ValueC =0
//     }else{
//         ValueC=1;
//     }
//     console.log(ValueC)
//     result = result + parseInt(ValueC,10)*Math.pow(2,value.length-1) 

//     return BinaryToDecimal(value.substring(1,value.length),result)
// }
// findComplement(1)
//*************************** */

// Binary To Decimilat

// let BinaryToDecimal = (value,result)=>{
//     if(value.length ==0){
//         return result;
//     }

//     result = result + parseInt(value[0],10)*Math.pow(2,value.length-1) 

//     return BinaryToDecimal(value.substring(1,value.length),result)
// }
// let a =BinaryToDecimal('11111111',0)
// console.log(a)

// let ar = "ahmed".substring(1,5)
// console.log(ar)


// ****************************
// Decimal toBinary 
// let DecimalTOBinary = (num,result)=>{
//     if(num == 0)
//         return result;
//     else if (num==1){
//         // result.unshift(1)
//         result =1+ result;
//       return  DecimalTOBinary(0,result)
//     }
//     let  a = num % 2;
//     // result.unshift(a)
//     result =a+ result ;

//    return DecimalTOBinary(((num+a) / 2)-a,result)
// }

// console.log(DecimalTOBinary(7,""))

//************************** */

// *******************************************
// check string palandrom with recursion
// let checkArray = (value)=>{
//     if(value.length ==0 ||value.length ==1){
//         return true;
//     }
//     if(value[0]==value[value.length-1]){
//         return checkArray(value.substring(1,value.length-1))
//     }
//     return false;
// }

// let reuslt = checkArray("ahmhas");
// console.log(reuslt);
// **************************************

// let Array = [10,10,10,10];
// function Multi(Array){
//     if(Array.length ==0){
//         return 1;
//     }
//     return Multi(Array.substring(1)) *Array.slice(1)
// }
// console.log(Multi(Array)) 
// i try it but i don't know who to do it 
// function Multi(num){
//     if(num %2 !=0){
//         return 0;
//     }

//     Ara.push(Multi(num / 2))
  
// }
// Multi(16)     
//*************************** */

// console.log(Ara)
// let name = "ahmed";

// function res(name){ 
//     if(name.length==0){
//         return ""
//     }
//    return res(name.substring(1) )+ name.charAt(0) // ahmed hmed med ed d ""
// }

// let a= res("ahmed")
// console.log(a)