

# Synetec Assessment Angular


Notes:

* When I opened the project I noted that there were over 300 critical vulnerabilities so I fixed those.

* I then realised that the project was quite outdated so I migrated it to Angular 9

* After this I set about working on the tasks taking a TDD approach:
  * I created the integration test
  * I then created unit tests for each component and service.
  * I then got those tests passing before refactoring.

I used a testing framework called Cypress instead of the default protractor / selenium based approach. This is much faster than selenium and comes with a great test runner. See the **running end to end tests** section of this document

* Whilst working on the delete functionality I noted that there was an issue with the .NET back-end, I initially considered a fire and forget approach but soon thought that this would inevitably lead to a state mismatch between the back-end and the front end.

I fixed the backend by altering delete method in the repository. The ToList() method was acting immutably and creating new in memory lists every time. This caused the delete not to work.

Here's my delete method:

``` csharp
public void Delete(City cityToDelete)
{
    // for some reason ToList was behaving like an immutable type.
    var cities = CityInfoContext.Cities.Remove(cityToDelete);
    CityInfoContext.Cities = cities;
}
```

I've also uploaded this as a repository here:
https://github.com/KiransHub/synetec-interview-test-net-core-api

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

I've implemented the end to end tests using [Cypress](https://www.cypress.io).

It's faster than protractor and has some great tooling.!

To run the tests simply use the following command:

``` bash
$ npm run cypress:open
```

This will open the cypress management UI you can then click the button labelled "run all specs" to run through the integration tests.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
