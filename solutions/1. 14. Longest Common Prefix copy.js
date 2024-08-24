// URL : https://leetcode.com/problems/longest-common-prefix/

var longestCommonPrefix = function (strs) {

	//returning empty f the array is empty
	if (strs.length == 0) {
		return strs[0]
	}
	// set the first index as the prefix 
	var prefix = strs[0];

	// loop through the array (start second index)
	for (let index = 1; index < strs.length; index++) {
		// keep looping until the index of the prefix is 0 compare to the next item in the array. for example "fl" the index is 0 in flow
		while(strs[index].indexOf(prefix) !== 0){
			// remove the last character of the prefix
			//prefix = prefix.replace(prefix[prefix.length - 1], "") // can be removed the first haracter if the first and last character is same for example "reflower"
            
			// remove the last character of the prefix
			prefix = prefix.slice(0, -1); // Correctly remove the last character

			// return empty if there is no similarity of the prefix and the next item in the array
			if(prefix == "") return ""
		}

	}
	// retur the prefix
	return prefix
};

// Test cases
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""
console.log(longestCommonPrefix(["reflower","flow","flight"])); // Output: ""
