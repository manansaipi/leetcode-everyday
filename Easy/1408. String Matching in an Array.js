//https://leetcode.com/problems/string-matching-in-an-array/?envType=daily-question&envId=2025-05-26
/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    let result = []

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if(j!=i) {
                if(words[j].includes(words[i] )){
                    if(
                       !result.includes(words[i]) 
                    ) {
                       result.push(words[i]) 
                    }
                }
            }   
        }
    }
    return result
};

console.log(stringMatching(["leetcoder","leetcode","od","hamlet","am"]))
// Output : ["leetcode","od","am"]
console.log(stringMatching(["mass","as","hero","superhero"]))
// Output: ["as","hero"]
// Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
// ["hero","as"] is also a valid answer.
