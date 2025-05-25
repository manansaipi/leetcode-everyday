//https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/?envType=daily-question&envId=2025-05-25
/**
 * @param {string[]} words
 * @return {number}
//  * comback later
 */
var longestPalindrome = function(words) {
    let result = 0
    let myMap = new Map()
    let central = false

    for (let i = 0; i < words.length; i++) { 
        myMap.set(words[i], (myMap.get(words[i]) || 0)  + 1) 
    }

    for(let [key, value] of myMap){
        const reversed = key[1] + key[0]
        
        if (reversed == key) {
            const freq = Math.floor(value/2)
            result += freq *4
            if (value % 2 ===1) {
                central = true
            }
        } else if (myMap.has(reversed)) {
            const freq = Math.min(value, myMap.get(reversed))
            result+= freq * 4
            myMap.set(reversed, 0)
            myMap.set(key, 0)

        }
    }

    if (central) result += 2; // Add one central symmetric word

    return [result, myMap]
};

console.log(longestPalindrome(["dd","aa","bb","dd"]))
// expected output : Output: 6

console.log(longestPalindrome(["dd","aa","bb","dd","aa","dd","bb","dd","aa","cc","bb","cc","dd","cc"]))
// expected output : Output: 22

console.log(longestPalindrome(["lc","cl", "gg"]))
// expected output : Output: 6
// Explanation: One longest palindrome is "lc" + "gg" + "cl" = "lcggcl", of length 6.
// Note that "clgglc" is another longest palindrome that can be created. 

console.log(longestPalindrome(["ab","ty","yt","lc","cl","ab"]))
// expected output : Output: 8
console.log(longestPalindrome(["cc","ll","xx"]))
// expected output : Output: 2

