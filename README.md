# ContactApps

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


##Framework Used for Web Applciation
==================================
Angular 17 & Boostrap 5

##Installation of WebApplication
============================
1.Clone the repo:
      git clone https://github.com/siju0013/ContactsManagementApp.git
2. Install NPM Packages
    npm install
3. For running application and for running in new browser
    ng s -o
Api endpoint are stored in Environment ts file. Boostrap5 is used for layout and design. Boostrap css and js path is added in angular.json file. Here Appcomponent is working as parent component and child components are modify and List. Communication between parent & child component is used with the help of @Input() and @Output decorator. Rxjs is used make observable api request. Alert is used for error handling.
