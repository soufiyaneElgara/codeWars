/*

Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

For example n = 3 result in:

"I\n I\n  I"
or printed:

I
 I
  I

*/

/* 
PREP:
    P: an integer 'n' represent the tall (number of repetition) and wide (number of \n)
    R: A draw of letter 'I' n times tall and n times wide


*/ 


function drawStairs(n) {
    let str = "";
    for (let i = 0; i < n; i++) {
        // Add spaces before the 'I' for alignment
        for (let j = 0; j < i; j++) {
            str += " ";
        }
        str += "I"; // Add the 'I' character
        if (i < n - 1) { // Add a newline after each step except the last one
            str += "\n";
        }
    }
    return str;
}