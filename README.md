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

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Further help

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
