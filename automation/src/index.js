const fs = require("fs");
const axios = require("axios");
const cheerio = require("cheerio");

async function getLeetCodeStats(username) {
	try {
		const url = `https://leetcode-stats-api.herokuapp.com/${username}`;
		const response = await axios.get(url);
		console.log(response.data.totalSolved);
		return response.data.totalSolved;
	} catch (error) {
		console.error("Error fetching LeetCode stats:", error);
		return null;
	}
}

// Example usage
const username = "manansaipi";

getLeetCodeStats(username)
	.then((totalProblemsSolved) => {
		if (totalProblemsSolved !== null) {
			// Read the current content of README.md
			// 	fs.readFile("README.md", "utf8", (err, data) => {
			// 		if (err) {
			// 			console.error("Error reading README.md:", err);
			// 			return;
			// 		}
			// 		// Replace placeholder with updated value
			// 		const updatedContent = data.replace(
			// 			"{total_problems_solved}",
			// 			totalProblemsSolved
			// 		);
			// 		// Write updated content back to README.md
			// 		fs.writeFile("README.md", updatedContent, "utf8", (err) => {
			// 			if (err) {
			// 				console.error("Error writing to README.md:", err);
			// 				return;
			// 			}
			// 			console.log("README.md updated successfully!");
			// 		});
			// 	});
		}
	})
	.catch((error) => {
		console.error("Error:", error);
	});
