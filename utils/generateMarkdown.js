// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // TODO: Implement the function to return the license badge
  if (license === 'none') {
    return '';
  }
  return `![License Badge](https://img.shields.io/badge/license-${encodeURIComponent(license)}-blue)`;
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  // TODO: Implement the function to return the license link
  switch (license) {
    case 'Apache':
      return 'https://www.apache.org/licenses/LICENSE-2.0';
    case 'Eclipse':
      return 'https://www.eclipse.org/legal/epl-2.0/';
    case 'MIT':
      return 'https://opensource.org/licenses/MIT/';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  // TODO: Implement the function to return the license section
  if (license === 'none') {
    return '## License\nNone';
  }
  return `## License\nThis project is licensed under the ${license} license. Please refer to [${license} License](${renderLicenseLink(
    license
  )}) for more details.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // TODO: Implement the function to generate markdown for README
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributions}

${renderLicenseBadge(data.license)}

${renderLicenseSection(data.license)}

## Questions
For any questions, please contact me:

GitHub: [${data.username}](https://github.com/${data.username})  
Email: ${data.email}
`;
}

module.exports = generateMarkdown;
