# Tutorial for Pug Sass template

This package is ready to serve to build the template html/css from pug & sass.

## Requirements
- Node / npm
- now-cli (Zeit.co)

## Included Package
- Bootstrap
- Jquery
- Fontawesome

## Setup the package
Follow step by step to init the project:

### Local
- Install the dependencies:
`npm install`

- Run the template on localhost
`npm run dev`

The site will be automatically opened in the default browser on the link http://localhost:8000

### Deploy with `now` from Zeit
- Create a new `.env` file from `.env.sample` file.

- Change the project name in `.env` file. 

- Build the template for deploy
`npm run build`

- Connect to your Zeit account following the instructions in the terminal (Skip if you are connected)
`now login`

- Direct to the `build` folder.

- Deploy to server
`now`

- Demo after deployed
https://namtech-pug-sass-kit-test.stephane-namtech.now.sh/

## Start to working
Create the page into `pugs` folder & the common parts into `pugs/parts` folder.
Create the javascript files into `scripts` folder.
Modify only the `imgs` folder or the `fonts` folder or the `videos` folder in `assets` folder.

:::warning
Do not touch or create any files into `assets/css` folder and `assets/js` folder because the template project will automatically generate all the files from the `sass` and `scripts` folder. 
:::

The document for ==pug== syntax is [here](https://pugjs.org/api/getting-started.html)

You should learn & use [sass](https://sass-lang.com/documentation) for styling the projects.


## Others documents
- [Beginners guide to Pug](https://www.sitepoint.com/a-beginners-guide-to-pug/)
- [Easier life with Pug](https://itnext.io/pug-js-to-make-your-life-easier-with-html-templates-9c62273626e0)