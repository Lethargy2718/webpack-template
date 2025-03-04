#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';
import { execSync } from 'child_process';
import chalk from 'chalk';
import { program } from 'commander';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

program
  .argument('<project-name>', 'Name of the project')
  .action((projectName) => {
    try {
      const projectPath = path.join(process.cwd(), projectName);

      // Check if the directory already exists
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

      // Navigate to the new project directory
      process.chdir(projectPath);

      // Install dependencies
      console.log(chalk.blue('Installing dependencies...'));
      execSync('npm install', { stdio: 'inherit' });

      // Success message
      console.log(chalk.green('Project setup complete!'));
      console.log(chalk.blue(`Run the following commands to get started:
        cd ${projectName}
        npm run dev
      `));
    } catch (error) {
      console.error(chalk.red('Error:'), error.message);
      process.exit(1);
    }
  });

program.parse(process.argv);