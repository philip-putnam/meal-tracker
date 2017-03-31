# MealTracker

By: Philip Putnam, 03/31/2017

## Description

This application allows users to track foods they've eaten or plan to by utilizing a database on Google's Firebase and Angular-CLI. User's have the ability to enter new foods through a form, entering the name, details, and calories; after entering a new food users have the ability to update their previously entered foods as well.

## Planning

1. Configuration/dependencies
  * Node.js, Node Packet Manager (NPM)
  * Bower
  * Angular-CLI
  * Bootstrap
  * Firebase

2. Specs
  * Spec 1: navigate to main page, displays foods with calories.
  * Spec 2: click high calorie food button/filter, display only food 500 calories and over.
  * Spec 3: click 'add-food' button, display form with food name, calories, and details field
  * Spec 4: click 'submit' form button, add food to database
  * Spec 5: click 'edit' food button, display form with food name, calories, and details field
  * Spec 6: click 'submit' form button, update food chosen with relevant information from form fields

3. Integration
  * app.component.ts & app.component.html displaying navbar through different routes
  * main.component.ts & main.component.ts displaying data on main '' root route
  * food.model.ts providing class framework for 'food' class w/ name, calorie, & detail attributes
  * food.service.ts injecting data from database to components as necessary
  * add-food component providing form HTML & transfer information to Firebase to add food
  * update-food component providing form HTML & transfer information to Firebase to update a food

4. UX/UI
  * Display show all foods currently in database
  * Create food form
  * Update food form

5. Polish
  * Fresh styles with bootstrap and custom
  * Add different routes
  * Attempt dynamic routing from Firebase
  * Add dates to foods
  * Add foods to meals

## Setup
* In terminal, navigate to desired directory for project and clone project by typing: git clone https://github.com/philip-putnam/meal-tracker
* In terminal, navigate into project / project directory by typing: cd meal-tracker
* In terminal, after navigating into project directory, type: npm install
* In terminal, after navigating into project directory, type: bower install
* In terminal, after navigating into project directory, type: ng serve (or ng s)
* In terminal, navigate to project directory and type: atom . (or open project in your preferred program)
* Create a file named 'api-keys.ts' within src/app (i.e., src/app/api-keys.ts)

* **Requires Firebase**, in web browser, navigate to https://firebase.google.com/ , sign-up for a free account or login
* Click 'go to console' near the top right of the screen
* Click 'Add project'
* Type in a name for the project, (i.e., 'meal-tracker')
* Click 'database' on the left of screen, then the three vertical dots on the right of the screen above the word 'dismiss', import the mock-foods.json if desired for seed data OR your own json file
* Click 'RULES' change default ".read" and ".write" both, to "true" or true
* Click 'Overview' at top left of screen, then click 'Add Firebase to your web app'
* Copy info 'var config' info, i.e:
            var config = {
              apiKey: "xxxx",
              authDomain: "xxxx.firebaseapp.com",
              databaseURL: "https://xxxx.firebaseio.com",
              storageBucket: "xxxx.appspot.com",
              messagingSenderId: "xxxx"
            };

    Where "x"s represent your actual API key found here

* Copy this information into the file 'api-keys.ts' however modify it with the following format:
        export var masterFirebaseConfig = {
          apiKey: "xxxx",
          authDomain: "xxxx.firebaseapp.com",
          databaseURL: "https://xxxx.firebaseio.com",
          storageBucket: "xxxx.appspot.com",
          messagingSenderId: "xxxx"
        };
* In web browser, navigate to localhost:4200
* Enjoy!

## Further help

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
