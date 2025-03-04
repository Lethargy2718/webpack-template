#!/usr/bin/env node
import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Manually define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get project name from CLI args
const projectName = process.argv[2] || "my-webpack-project";
const targetDir = path.join(process.cwd(), projectName);

// Copy template files
console.log(`Creating ${projectName}...`);
fs.mkdirSync(targetDir, { recursive: true });
execSync(`cp -r ${path.join(__dirname, "template/*")} ${targetDir}`);

console.log("Project created! Installing dependencies...");
execSync(`cd ${targetDir} && npm install`, { stdio: "inherit" });

console.log("All set! Run:");
console.log(`   cd ${projectName}`);
console.log("   npm run dev");
