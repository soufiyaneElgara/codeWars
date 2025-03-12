// You are given a matrix M, of positive and negative integers. It should be sorted in an up and down column way, starting always with the lowest element placed at the top left position finishing with the highest depending on n value: at the bottom right position if the number of columns,n, is odd, or placed at the top right, if n is even.


/*
PREP

    p: matrix
    R: Sorted matrix
    E: 
*/

function upDownColSort(matrix) {
   console.log( matrix.flat().sort(compaire));
}


function compaire (a, b){
    return a-b;
}



let M = [[-20, -4, -1],
[  1,  4,  7], 
[  8, 10, 12]]

upDownColSort(M) //output =  

/*

M_ = [[-20, 7, 8],
      [-4, 4, 10],
      [-1, 1, 12]]

 
  */

      