# LeetCode Automation Script

This script automates the process of updating LeetCode progress and taking screenshots of LeetCode statistics page.

## Features

-   Fetch LeetCode statistics from the LeetCode API.
-   Take screenshots of LeetCode profile, solved problems, submissions, and last submissions.
-   Update README.md with the latest LeetCode statistics.

## Prerequisites

Before running the script, make sure you have the following installed:

-   Node.js
-   npm (Node Package Manager)

## Setup

1. Clone this repository to your local machine.
2. Install dependencies by running `npm install` in the project directory.

## Usage

To use this script, follow these steps:

1. Open a terminal.
2. Navigate to the project directory.
3. Run the script using the command `npm start`.

## Setting up Pre-commit Hook

This repository includes a pre-commit hook to enforce checks before making a commit. To set up the pre-commit hook, follow these steps:

1. Navigate to the `.git/hooks` directory in your local repository.

2. Create a new file named `pre-commit` if it doesn't already exist.

3. Add the following content to the `pre-commit` file:

    ```bash
    #!/bin/sh

    # Change directory to your project directory
    cd "C:\Users\saipiab9\Desktop\leetcode everyday\automation"

    # Run npm start to update README and take screenshots
    npm start

    # Check the exit code of npm start
    if [ $? -eq 0 ]; then
        echo "npm start successful. Exiting script."
        exit 0
    else
        echo "npm start failed. Proceeding with git operations."
    fi

    # Wait for 2 seconds
    wait 2

    # Add the updated files to the staging area
    git add .

    # Proceed with the default actions
    exec git commit --edit "$@"
    ```

4. Make the `pre-commit` file executable by running the following command:

    ```bash
    chmod +x pre-commit
    ```

Now, the pre-commit hook will be executed automatically before each commit, enforcing the checks you defined.

## Configuration

You can configure the script by modifying the following variables:

-   `username`: Your LeetCode username.
-   `leetCodeUrl`: The URL to your LeetCode profile.
