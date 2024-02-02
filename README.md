# Dev Portfolio  [![GitHub](https://github.com/NikDrosakis/nikportfolio.git]

## STACK USED
⚡️FrontEnd: React
⚡️Backend: Nodejs with MongoDB

## TODO
⚡️ Light switch has bugs
⚡️ Resume in internal Gallery
⚡️ Improve CSS of Skills
⚡️ Add Contact page
⚡️ Add Rate Page
⚡️ Add Github Corner Link


## Features

⚡️ Modern UI Design + Animations
⚡️ Made with React
⚡️ Rain javascript effect
⚡️ Fully Responsive
⚡️ Customizable
⚡️ Dark & Light switch

## Features


## Why do you need a portfolio? ☝️

- Professional way to showcase your work
- Increases your visibility and online presence
- better chance of getting work opportunity

---

## Getting Started 🚀

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites 📋

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [NPM](http://npmjs.com)) installed on your computer.

Also, you can use [Yarn](https://yarnpkg.com/) instead of NPM ☝️

## Setup 🔧

From your command line, first clone Dev Portfolio:

# Move into the repository
$ cd nik_portfolio

# Remove the current origin repository
$ git remote remove origin
```

After that, you can install the dependencies either using NPM or Yarn.

Using NPM: Simply run the below commands.

```bash
# Install dependencies
$ npm install --force

# Start the development server
$ npm start
```

Using Yarn: Be aware of that you'll need to delete the `package-lock.json` file if exists before executing the below commands.

```bash
# Install dependencies
$ yarn

# Start the development server
$ yarn start
```

Once your server has started, go to this url `http://localhost:3000/` to see the portfolio locally.
The page will reload if you make edits.

---

## Customization Instructions:

### Step 1 - DATA & IMAGES

All customizable files are inside the `public/` folder, organised mainly into `public/images/` and `public/profile/`.
- `public/images` contains all the image assets that can be customized on website
- `public/profile` contains all text and info inside json files that can be customized according to need

### (1) NavBar

- Open `public/profile/navbar.json` 
It has 2 keys, *logo* and *sections*.

- It is a clickable link which opens the link provided (generally drive link of resume file) in the navbar.json under Resume.

### Step 2 - STYLES
Change the color theme of the website -
Go to `/src/theme/themes.js` and change the values of the required components both under lightTheme and darkTheme with your prefered HEX color.
### Step 3 - EXTRA
Go to `public/index.html`. Change *title* and *logo* if you want to customize it.
---


## Authors
Great thanks to
- **Mayank Agarwal** - [https://github.com/mayankagarwal09](https://github.com/mayankagarwal09)

## Support
If you find a bug, feel free to [open an issue](https://github.com/mayankagarwal09/dev-portfolio/issues) in this repository.

## License 📄
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

