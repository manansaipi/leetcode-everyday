// https://leetcode.com/problems/set-matrix-zeroes/description/?envType=daily-question&envId=2025-05-21
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] == 0){
                 // mark column value that need to be set to 0 horizontally
                 for (let l = 0; l < matrix[i].length; l++) {
                    if (matrix[i][l] != 0 ) {
                        matrix[i][l] =  "replace"
                    }
                     
                }
                // mark column value that need to be set to 0 vertically
                for (let k = 0; k < matrix.length; k++) {
                    if (matrix[k][j] != 0 ) {
                        matrix[k][j] = "replace";
                    }
                } 
            }          
        }  
    }
    // replace all mark to 0
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] == "replace"){
                matrix[i][j] = 0
            }          
        }  
    }
    return matrix
};

console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]))
// expected output [[1,0,1],[0,0,0],[1,0,1]]

console.log(setZeroes([[0,1,1],[1,1,1],[1,1,1]]))
// expected output [[0,0,0],[0,1,1],[0,1,1]]

console.log(setZeroes([[1,0,1],[1,1,1],[1,1,1]]))
// expected output [[0,0,0],[1,0,1],[1,0,1]]

console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]))
// expected output [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
