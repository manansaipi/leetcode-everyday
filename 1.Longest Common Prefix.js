var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return ""; // If the input array is empty, return an empty string

    let prefix = strs[0]; // Initialize the prefix with the first word

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) { // Check if the prefix is not a prefix of the current word
            prefix = prefix.slice(0, prefix.length - 1); // Remove the last character from the prefix
            if (prefix === "") return ""; // If the prefix becomes empty, there's no common prefix
        }
    }

    return prefix; // Return the longest common prefix
};

// Test cases
console.log(longestCommonPrefix(["flower","flow","flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])); // Output: ""
