// https://leetcode.com/problems/largest-3-same-digit-number-in-string/?envType=daily-question&envId=2025-08-14
/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let result = ""
    let counter = 0

    for(let i =0; i<num.length-1; i++){
        if(num[i] == num[i+1]){
            counter++
        } else {
            counter=0
        }
        if(counter==2){
            let compare = num[i]

            if(compare > parseInt(result.charAt(0)) || result.length==0){
                result = ""
                result+=num[i]
                result+=num[i]
                result+=num[i]
            }
        }
    }
    return result

};