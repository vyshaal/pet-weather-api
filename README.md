# Pet Weather App

This application provides an interface to interact with the backend server to manage and store the pet database. The application shows all the list of pets in two different interactive views. The application lets you to add new pets to the database and determines whether a pet requires an umbrella at its corresponding location or not. Weather at a particular location is retrieved from forecast.io

## Setup
The application is built on node.js and angular for frontend. Along with the node packages `express`, `sqlite3`, `cors` and `body-parser`. In order to setup the project, download the source and perform following steps.
```
$cd /pet-shelter-api
$npm install
$npm start
``` 
The server will be launched at port `8000`, go to `http://localhost:8000/`.

## Features
1. The application provides two different interactive views to show the list of all pets in the database.
    1. Tabular View: A table with list of all pets from the database with its name, type and breed information. Clicking on view would take to the pet profile page.
    2. Interactive Map View: A interactive google map view, with markers at corresponding pet locations. Clicking on the marker will take to the pet profile page.

2. The application determines whether a particular pet needs an umbrella or not, using the real time weather information using `forecast.io` API.

3. The application lets you add new pets to the database.

4. The application shows any specific errors in performing the above operations.
