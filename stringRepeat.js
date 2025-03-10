// Write a function that accepts a non-negative integer n and a string s as parameters, 
// and returns a string of s repeated exactly n times.

function repeatStr(n, s) {
    let str = "";
    if (n => 0 && typeof(s) === "string"){
        for(let i=0; i<n; i++){
            str+=s;
        }
        return str;
    }
}
