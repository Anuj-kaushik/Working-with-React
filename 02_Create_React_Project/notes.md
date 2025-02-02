## Web Development Essentials

- **Web Development is not Platform Development**
- Requires a **code editor** (e.g., VS Code) and a **browser** to run code.

## Code Editors
- Recommended: **VS Code**, but other editors can be used.

## Node.js
- **What is Node.js?**
  - Node.js is a **JavaScript runtime environment** that allows JavaScript to run outside the browser.
  - It is built on Chrome’s **V8 JavaScript engine**, making JavaScript code execution fast and efficient.
  - Enables **server-side programming**, allowing developers to build scalable backend applications.
  - Used for tasks like handling HTTP requests, reading files, interacting with databases, and running scripts.
- **Check Node.js Version**: `node -v`
- **Node.js Package Manager (npm)**: Installed with Node.js to manage dependencies.
- **Node Package Executor (npx)**: Runs packages without installing them globally.

## React and Its Ecosystem
- **React (Core Library)**
  - `react-dom`: For web development.
  - `react-native`: For mobile app development.
- **React Documentation**: Learning React from its documentation is quite challenging in the starting as it is not very beginner-friendly.

## JavaScript Bundlers
- **Vite** or **Parcel** for bundling. Used to create react app as it bundles the essential things like `react` and `react-dom`

## Installing React
- Installing Node.js also installs npm.
- Use **npx** to execute packages directly without installation.

### Creating a React App
#### Using Create React App (CRA)
- **Command:** `npx create-react-app my-react`
- CRA is **bulky**; better alternatives are **Vite** or **Parcel**.

#### Using Vite (Recommended)
- **Command:** `npm create vite@latest`
  - Select project name: `vite-project`
  - Choose a framework: `React`
  - Select a variant: `JavaScript`
- **Differences from CRA:**
  - No `node_modules` initially; install dependencies with `npm install`.
  - Faster and lightweight compared to CRA.

## Understanding `package.json`
- **Entry point** to project configuration.
- Contains:
  - **Project metadata**: Name, version, dependencies, scripts.
  - **Scripts**: Defines commands like `npm start`.
  - **Linting & Browserslist**: Helps define supported environments.
  - **Dependencies vs. DevDependencies**:
    - `dependencies`: Required in production.
    - `devDependencies`: Used only during development.

## Running a React Project
- Ensure `package.json` is present (`ls` command to check).
- **For CRA:**
  - `npm run start` (Start development server).
  - `npm run build` (Creates a production build in `build/` folder).
- **For Vite:**
  - `npm install` (Installs required dependencies if `node_modules` is missing).
  - `npm run dev` (Starts the development server).

## Folder Structure Overview
- `src/` folder: Contains application source code.
- `public/` folder: Stores static assets.
- `node_modules/`: Installed dependencies (generated after `npm install`).
