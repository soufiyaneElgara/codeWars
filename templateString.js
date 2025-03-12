// Template Strings
// Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
// Task
// Your task is to return the correct string using the Template String Feature.
// Input
// Two Strings, no validation is needed.
// Output


/*
PREP:
 P: onlys strings with no validation
 R: String with the word 'are' between the two 
 E:

*/

function templateStrings(noun, adjective) {
    return  `${noun} are ${adjective}`
}

console.log(templateStrings('Animals', 'Angry'), "Animals are angry")
