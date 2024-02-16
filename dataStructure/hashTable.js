var romanToInt = function(s) {
    let Number = 0;
 for(let i =0;i<s.length;i++){
     if(s.length >= i+1 && ObjectRoman[s[i]]<ObjectRoman[s[i-1]]){
         Number +=ObjectRoman[s[i+1]] -ObjectRoman[s[i]];
         i++;
     }
     else{

        Number+=ObjectRoman[s[i]]
    }
    console.log(Number)
 }
 return Number
         

};

var ObjectRoman = {
 I:1,
 V:5,
 X:10,
 L:50,
 C:100,
 D:500,
 M:1000
}

console.log(romanToInt('LVIII'))