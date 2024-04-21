const fs = require("fs");
const axios = require("axios");
const puppeteer = require("puppeteer");

// Fetch LeetCode statistics from API
async function getLeetCodeStats(username) {
	try {
		const url = `https://leetcode-stats-api.herokuapp.com/${username}`;
		const response = await axios.get(url);
		console.log(response.data);
		return response.data;
	} catch (error) {
		console.error("Error fetching LeetCode stats:", error);
		return null;
	}
}

// Take a screenshot of LeetCode page
async function takeScreenshot(url) {
	const browser = await puppeteer.launch({
		defaultViewport: {
			width: 1280 * 1.5,
			height: 2000 * 1.5,
		},
		executablePath:
			"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
		headless: false,
	});

	try {
		const page = await browser.newPage();

		// Set up event listener for page load event
		await page.goto(url, {
			waitUntil: "networkidle2",
		});

		// Selectors for the elements to be captured
		const profileSelector =
			".text-label-2.dark\\:text-dark-label-2.flex.flex-col.space-y-4";
		const solvedProblemsSelector =
			".bg-layer-1.dark\\:bg-dark-layer-1.shadow-down-01.dark\\:shadow-dark-down-01.rounded-lg.lc-xl\\:h-\\[186px\\].min-h-\\[186px\\].w-full.pb-3.pt-4";
		const submissionsSelector =
			".bg-layer-1.dark\\:bg-dark-layer-1.shadow-down-01.dark\\:shadow-dark-down-01.rounded-lg.lc-md\\:pb-4.flex.h-auto.flex-col.space-y-4.p-4.pb-0";
		const lastSubmissionSelector =
			".bg-layer-1.dark\\:bg-dark-layer-1.shadow-down-01.dark\\:shadow-dark-down-01.rounded-lg.px-4.pb-4.pt-4";

		// Wait for the elements to be visible
		await page.waitForSelector(profileSelector);
		await page.waitForSelector(solvedProblemsSelector);
		await page.waitForSelector(submissionsSelector);
		await page.waitForSelector(lastSubmissionSelector);

		// Capture screenshots of the elements
		const profileSelectorElement = await page.$(profileSelector);
		const solvedProblemsElement = await page.$(solvedProblemsSelector);
		const submissionsElement = await page.$(submissionsSelector);
		const lastSubmissionsElement = await page.$(lastSubmissionSelector);

		// Save the screenshots result
		await profileSelectorElement.screenshot({
			path: "./ss_result/profile.png",
		});
		await solvedProblemsElement.screenshot({
			path: "./ss_result/solvedProblems.png",
		});
		await submissionsElement.screenshot({
			path: "./ss_result/submissions.png",
		});
		await lastSubmissionsElement.screenshot({
			path: "./ss_result/lastSubmissions.png",
		});
	} catch (error) {
		console.error("Error taking screenshot:", error);
	} finally {
		console.log("Screnshoot taken successfully!");
		await browser.close();
	}
}

const username = "manansaipi";
const leetCodeUrl = `https://leetcode.com/${username}`;

getLeetCodeStats(username)
	.then(async (stats) => {
		if (stats !== null) {
			// Read the current content of README.md
			fs.readFile("README_TEMPLATE.md", "utf8", (err, data) => {
				if (err) {
					console.error("Error reading README.md:", err);
					return;
				}

				// Replace placeholders with updated values
				let updatedContent = data.replace(
					"{total_problems_solved}",
					stats.totalSolved
				);
				updatedContent = updatedContent.replace(
					"{total_easy}",
					stats.easySolved
				);
				updatedContent = updatedContent.replace(
					"{total_medium}",
					stats.mediumSolved
				);
				updatedContent = updatedContent.replace(
					"{total_hard}",
					stats.hardSolved
				);

				// Write updated content back to README.md
				fs.writeFile("../README.md", updatedContent, "utf8", (err) => {
					if (err) {
						console.error("Error writing to README.md:", err);
						return;
					}
					console.log("README.md updated successfully!");
				});
			});

			// Take a screenshot of LeetCode page
			await takeScreenshot(leetCodeUrl);
		}
	})
	.catch((error) => {
		console.error("Error:", error);
	});
