var inquirer = require('inquirer');
var fs = require('fs');

inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "Project Title:"
        },
        {
            type: "input",
            name: "description",
            message: "Description:"
        },
        {
            type: "input",
            name: "install_instructions",
            message: "Installation Instructions:"
        },
        {
            type: "input",
            name: "usage_information",
            message: "Usage Information:"
        },
        {
            type: "input",
            name: "contribution_guidelines",
            message: "Contribution Guidelines:"
        },
        {
            type: "input",
            name: "test_instructions",
            message: "Test Instructions:"
        },
        {   // most common software licenses -> https://www.google.com/search?q=common+software+licenses&rlz=1C1CHBF_enUS814US814&oq=common+software+licenses&aqs=chrome..69i57j0i22i30l2.5831j0j7&sourceid=chrome&ie=UTF-8
            type: "checkbox",
            name: "license",
            message: "License:",
            choices: [
                "MIT",
                "GPL",
                "Apache",
                "GPL",
                "BSD"
            ]
        },
        {
            type: "input",
            name: "github_username",
            message: "GitHub Username:"
        },
        {
            type: "input",
            name: "email",
            message: "Email:"
        }
    ])
    .then(input_data => {
        // generate README
        generateREADME(input_data);
    })
    .catch(error => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else when wrong
        }
    });


var generateREADME = (input_data) => {
    const README = `# ${input_data.title}

    
    ## Table of Contents

    - [Description](#description)
    - [Install Instructions](#install_instructions)
    - [Usage Information](#usage_information)
    - [Contribution Guidelines](#contribution_guidelines)
    - [Test Instructions](#test_instructions)
    - [Questions](#questions)

    ## Description
    * ${input_data.description}

    ## Install Instructions
    * ${input_data.install_instructions}

    ## Usage Information
    * ${input_data.usage_information}

    ## Contribution Guidelines
    * ${input_data.contribution_guidelines}

    ## Test Instructions
    * ${input_data.test_instructions}

    ## License
    * Application is covered under the ${input_data.license} license(s)

    ## Questions
    * If you have any questions, contact me at ${input_data.email}
    * [github link](https://github.com/${input_data.github_username})
    `;

    fs.writeFile("README.md", README, err => {
        if (err) {
            console.log(err);
        } else {
            console.log("README generated successfully!");
        }
    })
}