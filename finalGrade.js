/*
PREP:
    P: two argemenets: examGrade and ProjectNumber
    R: a number: FinalGrade

*/ 


function finalGrade(examGrade, ProjectNumber) {
    let finalGrade = 0
    if (examGrade > 90 || ProjectNumber > 10){
       //if exam is more than 90 or of number of completed projects more than 10 ==> 100

        finalGrade = 100;
    }else if (examGrade > 75 && ProjectNumber >= 5){
        //if exam is more than 75 and number of completed projects minimum than 5 ==> 90
        finalGrade = 90;

    }else if (examGrade > 50 && ProjectNumber >= 2){
        // if exam is more than 50 and if a number of completed projects is minmimum 2 ==> 75
        finalGrade = 75;
    }else{
         //O in other cases .
       finalGrade =0;
    }
    return finalGrade;





}

console.log(finalGrade(100, 12), 100)
console.log(finalGrade(99, 0), 100)
console.log(finalGrade(10, 15), 100)
console.log(finalGrade(85, 5), 90)

