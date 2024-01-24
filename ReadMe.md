# Documentation Template

This repository serves as a template for new documentation pages. It's structured so that it can be added to and maintained easily without a deep understanding of coding.

# Table of Contents

- [How To Use This Repository](#how-to-use-this-repository)
  - [Create a New Repository Containing the Code from This Repository](#create-a-new-repository-containing-the-code-from-this-repository)
  - [Running the Application in Development Mode for Live Updates](#running-the-application-in-development-mode-for-live-updates)
  - [Adding Sections and Pages to the Documentation](#adding-sections-and-pages-to-the-documentation)
  - [Utilizing VS Code Extensions for Live Linting, Formatting, Spellchecking, and more](#utilizing-vs-code-extensions-for-live-linting-formatting-spellchecking-and-more)
- [How Technologies Are Used and Configured](#how-technologies-are-used-and-configured)
  - [TypeScript](#typescript)
  - [React](#react)
  - [React Router](#react-router)
  - [Sass](#sass)
  - [Express](#express)
  - [Nodemon](#nodemon)
  - [TS-Node](#ts-node)
  - [Webpack](#webpack)
  - [ESLint](#eslint)
  - [Prettier](#prettier)
  - [Code Spell Checker](#code-spell-checker)

## How To Use This Repository

### Create a New Repository Containing the Code from This Repository

This repository is designated as a GitHub template. This means you can start a new repository that will have all of the code present here as a starting point without needing to fork or clone this repository. To do so from this repos page, click on the "Use as template" button and choose the "Create a new repository" option (see image below). Follow the prompts after this to create a repository and all of this code will be there!

> ![Use-as-template button location](/read-me-assets/use-as-template.png)

Once the new repository is made, you'll be free to clone that repository to your computer. After cloning, run `npm install` from your terminal, and you will be ready to use the scripts listed in the `package.json` file's "scripts" field to perform various functions.

### Running the Application in Development Mode for Live Updates

To run the code in development mode, enter the command `npm run dev`, and the application will run locally and automatically launch in your browser. By using Webpack and Nodemon, any changes made to the frontend (code within the client folder) or backend (code within the server folder) will automatically be reflected in the locally running application.

### Adding Sections and Pages to the Documentation

This repository has been structured to make it easy to add a section and/or page. To add a section and page, go to the `src/client/pages` folder and make a new folder within it having the same name as your new section topic (e.g. "TopicA"). Within that folder, make a new page for a detail related to that topic by creating a TypeScript React ".tsx" file with the name of the detail you're going to cover (e.g. "DetailA"). Make a TypeScript React component within that file and make it the default export from that file. You can follow the structure outlined in the example file "DetailA" or create your own.

After you finish the component, open the file `src/client/pageDirectory.ts`. Import the new component at the top of this file, and add a section and page entry to the `pageDirectory` array following the style present. Upon completion, the section and a link to the page will automatically get added to the side nav-bar and the component will load when the navigation link is clicked.

### Utilizing VS Code Extensions for Live Linting, Formatting, Spellchecking, and more

If you open your new repository in VS Code, it will automatically suggest the recommended extensions to install that this repository uses. These include ESLint for live underlining of linting errors, Prettier for real-time code formatting, and a few other helpful extensions. Please see below for how to use Prettier to format your code.

This configuration is optimized to use VS-Code extensions to highlight code linting and formatting errors in real time, but if you don't use VS Code you can still take advantage of the formatting and linting rules set in place. Read the [ESLint CLI Documentation](https://eslint.org/docs/latest/use/command-line-interface) to see how to run ESLint from your terminal. The Prettier formatting rules will also be enforced by ESLint (see configuration details below).

[Return to top](#single-page-application-template)

## How Technologies Are Used and Configured

Section in progress

### TypeScript

### React

### React Router

### Sass

### Express

### Nodemon

### TS-Node

### Webpack

### ESLint

To verify that the ESLint extension is working, write an error in your code that ESLint should detect. If it’s working properly, the error should be underlined. Hovering over the underlined code will generate a tooltip with details about the error.

For example, in this configuration, ESLint will highlight instances of `console.log` usage to remind you to remove them before pushing the code to production. If your ESLint extension is functioning as expected, a `console.log` statement will be underlined and display the following tooltip upon hover.

> ![ESLint-console.log-example](/read-me-assets/es-lint-example.png)

VS Code sometimes needs be closed and re-opened after installing the ESLint extension and installing ESLint as a dependency in your project to start working correctly.

### Prettier

Formatting tools in VS Code can automatically format your code based on specific triggers, such as typing or saving your code. Alternatively, you can choose to format your code manually.

Personally, I prefer to complete a section of code before formatting it as auto-formatting can't always consider the full context of a code section before applying formatting rules. However, I want to be aware whenever there's a formatting problem that needs attention. To achieve this, this configuration supplies the Prettier rules to ESLint, enabling the ESLint extension to highlight formatting errors. Then, I use the Prettier extension to correct those formatting errors using a keyboard shortcut when I’m ready. The setting enabling Prettier as your default formatter is included in this codebase in the `settings.json` file.

Here are the VS Code formatting keyboard shortcuts:

- On Windows: Shift + Alt + F.
- On Mac: Shift + Option + F.
- On Linux: Ctrl + Shift + I.

Here's an example of ESLint generating a tooltip based on a Prettier formatting rule.

> ![ESLint-console.log-example](/read-me-assets/es-lint-prettier-example.png)

Using a formatting keyboard shortcut for the example above will automatically remove the extra semicolon.

### Code Spell Checker

The Code Spell Checker extension will check for spelling errors and highlight them. It will also check for words within camelCasing to make sure all of your variables are spelled correctly. See more details about how it works in its [VS Code Marketplace listing](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
