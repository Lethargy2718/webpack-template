#!/usr/bin/env node
import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const cpy = require("cpy"); // Cross-platform file copy

// Manually define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get project name from CLI args
const projectName = process.argv[2] || "my-webpack-project";
const targetDir = path.join(process.cwd(), projectName);

// Ensure the new directory exists
console.log(`Creating ${projectName}...`);
fs.mkdirSync(targetDir, { recursive: true });

// Copy all files EXCEPT node_modules
await cpy(["**", "!node_modules"], targetDir, { cwd: __dirname, dot: true });

console.log("Project created! Installing dependencies...");
execSync(`cd ${targetDir} && npm install`, { stdio: "inherit" });

console.log("All set! Run:");
console.log(`   cd ${projectName}`);
console.log("   npm run dev");
