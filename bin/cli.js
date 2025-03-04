#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');
const chalk = require('chalk');
const { program } = require('commander');

program
  .argument('<project-name>', 'Name of the project')
  .action((projectName) => {
    const projectPath = path.join(process.cwd(), projectName);

    if (fs.existsSync(projectPath)) {
      console.error(chalk.red(`Error: Directory "${projectName}" already exists.`));
      process.exit(1);
    }

    console.log(chalk.blue(`Creating a new Webpack project in ${projectPath}...`));

    // Copy template files
    const templatePath = path.join(__dirname, '../template');
    fs.copySync(templatePath, projectPath);

    // Update package.json with the project name
    const packageJsonPath = path.join(projectPath, 'package.json');
    const packageJson = fs.readJsonSync(packageJsonPath);
    packageJson.name = projectName;
    fs.writeJsonSync(packageJsonPath, packageJson, { spaces: 2 });

    console.log(chalk.green('Template files copied successfully!'));

    // Initialize npm project and install dependencies
    process.chdir(projectPath);
    console.log(chalk.blue('Initializing npm project...'));
    execSync('npm init -y', { stdio: 'inherit' });

    console.log(chalk.blue('Installing dependencies...'));
    execSync('npm install', { stdio: 'inherit' });

    console.log(chalk.green('Project setup complete!'));
    console.log(chalk.blue(`Run the following commands to get started:
      cd ${projectName}
      npm run dev
    `));
  });

program.parse(process.argv);