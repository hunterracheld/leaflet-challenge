# leaflet-challenge

The static folder contains the JavaScript code and CSS styling. You will need to use a local server to view the html to avoid CORS errors. 

This code also requires a config.js file that includes:
const API_KEY = "(your Mapbox API key)";
const MAPBOX_URL = "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}";
const ATTRIBUTION = "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>";
