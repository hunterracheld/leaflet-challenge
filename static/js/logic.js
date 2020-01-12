function createMap(earthquakeData) {

  // Creat tile layer
  var lightMap = L.tileLayer(MAPBOX_URL, {
    attribution: ATTRIBUTION,
    maxZoom: 18,
    id: "mapbox.light",
    accessToken: API_KEY
  });

  // Create a baseMaps object to hold base layer
  var baseMaps = {
    "Light Map": lightMap
  };

  // Create an overlayMaps object for earthquakeData layer
  var overlayMaps = {
    "Earthquake Data": earthquakeData
  };

  // Create map
  var map = L.map('map', {
    center: [39.8283, -98.5795],
    zoom: 4,
    layers: [lightMap, earthquakeData]
  });

  // Create layer control
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(map);

}

function renderCircles(response) {

  // Function to get colors for each circle
  function getColor(mag) {
    if (mag > 5) {
      return 'red';
    } else if (mag > 4) {
      return 'orange';
    } else if (mag > 3) {
      return 'yellow';
    } else {
      return 'green';
    }
  }

  // Render a circle based on magnitude
  var earthquakes = response.features
  console.log(earthquakes);

  var circles = []

  // Loop through each earthquake
  // Give each feature a popup describing the place, time, and magnitude of the earthquake

  for (var i = 0; i < earthquakes.length; i++) {
    var earthquake = earthquakes[i];
    

    var circle = L.circle([earthquake.geometry.coordinates[1], earthquake.geometry.coordinates[0]], {
      radius: earthquake.properties.mag * 10000,
      color: "black",
      weight: 1,
      fillColor: getColor(earthquake.properties.mag),
      fillOpacity: 0.5
    }).bindPopup("<h4>" + "Location: " + earthquake.properties.place + "</h4><hr><p>" + "Magnitude: " + (earthquake.properties.mag) + "</p>");

    circles.push(circle);
  }

  createMap(L.layerGroup(circles));
}

// Perform API call
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson", renderCircles)

//   // Print response.features to console for sanity-check
//   console.log(response.features);

//   // Once response is received, proceed with renderCircles function
//   renderCircles(response.features);
// });






// Send earthquakes layer to the createMap function



