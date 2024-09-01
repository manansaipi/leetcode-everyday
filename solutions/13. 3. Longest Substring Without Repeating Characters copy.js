// URL : https://leetcode.com/problems/longest-substring-without-repeating-characters/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    // Initialize a set to store characters of the current substring
    var charSet = new Set();
    
    // Initialize a left pointer for the sliding window
    var l = 0;
    
    // Variable to store the maximum length of substring without repeating characters
    var result = 0;
    
    // Iterate over the string with a right pointer
    for (let r = 0; r < s.length; r++) {
        // Get the character at the current right pointer
        const element = s[r];
        
        // If the character already exists in the set, move the left pointer to the right
        // until the duplicate character is removed from the set
        while (charSet.has(element)) {
            // Remove the character at the left pointer from the set
            charSet.delete(s[l]);
            
            // Move the left pointer to the right
            l += 1;
        }
        
        // Add the current character to the set
        charSet.add(element);
        
        // Update the result with the maximum length found so far
        // (r - l + 1) is the current window size
        result = Math.max(result, r - l + 1);
    }
    
    // Return the maximum length of substring without repeating characters
    return result;
};

