// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseName;
//switch statments to render license badge that user chooses
  switch (license) {
    case "None":
      licenseName = "";
      break;
    case "Apache 2.0":
      licenseName = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
      break;
    case "Boost Software License 1.0":
      licenseName = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]";
      break;
    case "GNU GPL v3":
      licenseName = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
      break;
    case "MIT License":
      licenseName = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
      break;
    case "Mozilla Public License 2.0":
      licenseName = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]";
      break;
    case "The Unilicense":
      licenseName = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]";
      break;
  }
  return licenseName;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;
//switch statement for license link user chooses
  switch (license) {
    case "None":
      licenseLink = "";
      break;
    case "Apache 2.0":
      licenseLink = "(https://opensource.org/licenses/Apache-2.0)";
      break;
    case "Boost Software License 1.0":
      licenseLink = "(https://www.boost.org/LICENSE_1_0.txt)";
      break;
    case "GNU GPL v3":
      licenseLink = "(https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "MIT License":
      licenseLink = "(https://opensource.org/licenses/MIT)";
      break;
    case "Mozilla Public License 2.0":
      licenseLink = "(https://opensource.org/licenses/MPL-2.0)";
      break;
    case "The Unilicense":
      licenseLink = "(http://unlicense.org/)";
      break;
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection;
//switch statment for what goes into license section depending on user's choice
  switch (license) {
    case "None":
      licenseSection = "";
      break;
    case "Apache 2.0":
      licenseSection = "This project is licensed under the Apache 2.0 license";
      break;
    case "Boost Software License 1.0":
      licenseSection = "This project is licensed under the Boost Software license";
      break;
    case "GNU GPL v3":
      licenseSection = "This project is licensed under the GNU license";
      break;
    case "MIT License":
      licenseSection = "This project is licensed under the MITlicense";
      break;
    case "Mozilla Public License 2.0":
      licenseSection = "This project is licensed under the Mozilla 2.0 license";
      break;
    case "The Unilicense":
      licenseSection = "This project is licensed under the Unilicense license";
      break;
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
// returns data from index.js which was given in the "name" label for each sections in markdown
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Contributing
${data.contribution}

## Tests
${data.test}

## Questions
If you have any additional questions about this project, you can reach me at ${data.email}. You can find more of my work at [github.com/${data.userName}](https://github.com/${data.userName})!
`;
}

module.exports = generateMarkdown;
