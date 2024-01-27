
var isValid = function(s) {
    let ArraySt=[]

        for(let i =0;i<s.length;i++){
            console.log(s[i])
            if(s[i]==='{'){
                ArraySt.push(s[i])}
            else if(s[i]==='('){
                ArraySt.push(s[i])}
            else if(s[i]==='[')
                ArraySt.push(s[i])
            else if(s[i]==='}' || s[i]===')' || s[i]===']' ){
              let var1 = ArraySt.pop()
              if(!((var1==='(' && s[i]===')') || (var1==='{'&& s[i]==='}') || (var1==='['&& s[i]===']'))){
             


                return false;
              }  
    
            } 
    
        }
            return ArraySt.length==0;       
    };


console.log(isValid('()[]{}'))


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];

    const pairs = {
        ')': '(',
        '}': '{',
        ']': '[',
    };

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i]);
        } else {
            if (!stack.length) return false;
            let char = stack.pop();
            if (char !== pairs[s[i]]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};