# CurrencyCatalog

This project is developed with Angular 6 and it uses the API  [openfintech](https://api.openfintech.io)

## Search by currency fields feature
In order to test the search feature you can change the filter to ID then use this ID `ABCBCNY` or change the filter
to Type and use this type `currencies`

## Development server
First run `npm install` to install all dependencies.
Then run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
You can change the port using this command:
`npm run start -- --port=8000`

## Linting

Run `npm lint` to check the style code of the project

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
