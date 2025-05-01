
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

/*
PREP:
P : get a string 
R: String without any exclamation mark


*/



function removeExclamationMarks(s) {
    return s.split("").filter(char => char !== "!").join("");
  }



  console.log(removeExclamationMarks("Hello world!", "Hello world"))
  console.log(removeExclamationMarks("hii!!!", "hi"))