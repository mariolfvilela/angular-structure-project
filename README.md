# AngularStructureProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Generating A Routing Module
By using command line parameter --routing we’re able to specify that a routing module should be added to the Angular application which is being generated:

`$ ng new [name] --routing`

## Selecting A Styling Variant
By default Angular CLI generates a CSS file for every component which is added to the project. By using option --style you can change to other CSS preprocessors like you can see in the following:

`$ ng new [name] --style=scss` 
or 
`ng new [name] --routing -is -st -style=scss`
OBS:With the command above, we are asking Angular CLI to create a new project with a routing module (--routing), use inline style (-is) for app.component.ts, skip the creation of unit testing files (-st) - since we will not need .spec file for this example and also use scss as extension for our style/CSS files.

[Creating Angular Projects With Angular CLI](https://medium.com/codingthesmartway-com-blog/creating-angular-projects-with-angular-cli-e32b2cb486da).

### Angular Material 2
`npm install --save @angular/material @angular/cdk hammerjs`
[loiane](https://loiane.com/2017/07/getting-started-with-angular-material-2/)

Angular Material components depend on _@angular/animations_ package
`npm install --save @angular/animations`

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
