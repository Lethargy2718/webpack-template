# Webpack Template

A basic starter Webpack template to ease project setup and streamline your workflow.

---

## Features

- **Webpack 5**: Modern module bundling and asset management.
- **TypeScript Support**: Full TypeScript integration with ts-loader and ts-jest.
- **Babel Integration**: Transpile TypeScript and modern JavaScript features.
- **Environment-Specific Configurations**: Separate development and production setups using webpack-merge.
- **Jest**: Pre-configured Jest for running unit tests with support for TypeScript.
- **Live Development**: Includes a dev server with live reloading.
- **Optimized Production Builds**: Minified JavaScript, optimized assets, and automatic cleanup.
- **Asset Handling**: Supports CSS, HTML, images, and font files by default.
- **GitHub Pages Deployment**: Deploy your project to GitHub Pages with a single command.
- **ESLint**: Integrated ESLint configuration for maintaining code quality and consistency.
- **Prettier**: Pre-configured Prettier to automatically format your code.

---

## Getting Started

### 1. Clone the Repository

bash
git clone https://github.com/Lethargy2718/webpack-template.git
cd webpack-template

### 2. Install Dependencies

bash
npm install

### 3. Start Development Server

bash
npm run dev

This will open your project in the default browser with live reloading.

### 4. Build for Production

bash
npm run build

Your production-ready files will be output to the dist folder.

### 5. Run Tests

bash
npm test

Run Jest tests for your project. Use npm run test:watch to automatically rerun tests on file changes.

### 6. Deploy to GitHub Pages

bash
npm run deploy

This command will build your project, create a gh-pages branch if it doesn't exist, push the project to the branch, and deploy it to GitHub Pages.

---

## Running ESLint and Prettier

In order to lint and format your code, you can use the following npm scripts:

- **npm run lint**: This will run ESLint on all the TypeScript, JavaScript, HTML, CSS, JSON, and Markdown files in the src directory using ESLint.

- **npm run pretty**: This will format the TypeScript, JavaScript, HTML, CSS, JSON, and Markdown files in the src directory using Prettier.

- **npm run lint:all**: This will run ESLint on all TypeScript, JavaScript, HTML, CSS, JSON, and Markdown files in the project (not just in the src folder).

- **npm run pretty:all**: This will format all TypeScript, JavaScript, HTML, CSS, JSON, and Markdown files in the project using Prettier.

---

## Folder Structure

webpack-template/
├── src/ # Where all your main files go
│ ├── index.ts # Entry point TypeScript file
│ ├── style.css # Sample stylesheet
│ └── template.html # Base HTML template
├── tests/ # Test files (currently empty)
├── .browserlistrc # Browser support configuration
├── .eslintignore # Files to exclude from linting
├── .eslintrc.js # ESLint configuration
├── .gitignore # Files to exclude from version control
├── .prettierignore # Files to exclude from formatting
├── .prettierrc # Prettier configuration
├── babel.config.js # Babel configuration
├── jest.config.js # Jest configuration
├── package.json # Project dependencies and scripts
└── README.md # Documentation
└── tsconfig.json # TypeScript configuration
├── webpack.common.js # Shared Webpack configuration
├── webpack.dev.js # Development-specific Webpack configuration
├── webpack.prod.js # Production-specific Webpack configuration

---

## How to Customize

1. **Update src/ Files**:

    - Replace index.ts, style.css, and template.html with your project's assets.

2. **Add New Loaders/Plugins**:

    - Extend Webpack functionality by installing and configuring additional loaders/plugins (e.g. Sass).

3. **Modify Webpack Configuration**:

    - Adjust settings in webpack.common.js, webpack.dev.js, or webpack.prod.js as needed.

4. **Customize ESLint & Prettier**:

    - If you need to modify ESLint or Prettier settings, you can adjust the .eslintrc.js or .prettierrc files.
    - To lint and prettify the files in your src folder, run npm run lint and npm run pretty respectively.
    - To lint and prettify files in your root folder as well, run npm run lint-all and npm run pretty-all respectively. You may need to modify the .prettierignore and .eslintignore files to control which files are included in the linting and formatting process.

5. **Configure TypeScript**:

    - Adjust tsconfig.json to include/exclude files, set strict rules, or define custom paths for your TypeScript project.

6. **Add Jest Tests**:

    - Create test files in the tests/ directory or alongside your source files (e.g., index.test.ts).
    - Run npm test to run Jest tests or npm run test:watch for continuous testing.
