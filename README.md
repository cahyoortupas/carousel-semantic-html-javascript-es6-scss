# Project Title
Carousel Project - Semantic HTML, SCSS, and ES6 Modules

## Description
This project implements a fully responsive carousel using semantic HTML, modular JavaScript (ES6 modules), and SCSS for styling.

### project-folder/
│
├── dist/                   # Compiled output for production
│   ├── main.css            # Compiled CSS from SCSS
│   ├── bundle.css          # Bundled CSS from ES6 modules
│   ├── bundle.js           # Bundled JS from ES6 modules
│   └── index.html          # Final HTML for production
│   ├── img/                # Image folder for assets
│   ├── fonts/              # Font folder for design css
│
├── src/                    # Source files for development
│   ├── js/
│   │   ├── app.js          # Main entry point of JavaScript
│   ├── scss/
│   │   └── styles.scss     # Main SCSS file
│   │   └── layout.scss     # SCSS file handle basic design and layout
│   │   └── shape.scss      # SCSS file handle shape and object
│   │   └── variables.scss  # SCSS file handle color master
│   │   └── font-awesome/   # Font awesome folder specified scss type
│
├── package.json            # Project configuration file for npm
├── .gitignore              # Files to ignore (e.g., node_modules)
└── README.md               # Project documentation (this file)

#### How to Run the Project
- git clone https://github.com/cahyoortupas/carousel-semantic-html-javascript-es6-scss.git
- cd project folder 
- npm install
- npm run dev