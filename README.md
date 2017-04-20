# WebdevkrsandAngularIntro
Example app used in WebDev Krsand meetup about Angular April 19 2017

Download the repo or clone it and run `npm install`


## Branch information
This repo contains 3 branches.

### Master branch
Angular-CLI generated project with:
* Hot Module Replacement
* Material Design
* npm start script runs tests and web development server in parallel


### with-node-sass
Same as in master branch plus:
* node-sass package installed along with scripts for converting scss files to css
* npm start script also runs sass:watch
* styles.scss used for global styles

**You must have Python 2.7 installed for this branch to work**
Download Python from www.python.org


### with-self-hosted-material-design-icons
Same as in *with-node-sass* branch, plus:
* The Material Design Icons NPM package has been installed and angular-cli.json is set up to copy font files to the assets folder on build

In this branch, the Material Icons are not downloaded from the internet when app is started.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.


# How to use this project
## npm serve
Same as `ng serve`.
Starts the web development server and listens on localhost:4200

## npm start
Starts the web development server and runs unit tests in parallel

## npm build
Same as `ng build`.
Creates a JIT build.
To create a prod build: `ng build --prod`
To create a AOT prod build: `ng build -aot --prod`

## npm serve:hmr
Starts the web development server with Hot Module Replacement enabled.

## npm test
Same as `ng test`.
Runs the unit tests (all files ending with .spec.ts)

## npm e2e
Same as `ng e2e`.
Runs E2E-tests

# Angular-CLI info
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
