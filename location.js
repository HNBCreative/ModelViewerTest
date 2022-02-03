function getLocation() {
  if(!navigator.geolocation) {
    console.log('Your browser does not support Geolocation API')
  } else {
    console.log('Checking location...')
    navigator.geolocation.getCurrentPosition(success, error)
  }
}

const targetLocation = {
  lat: "-42.734499",
  long: "147.436581"
}

function success(position) {
  console.log('Latitude:', position.coords.latitude);
  console.log('Longitude:', position.coords.longitude);

  distance(position.coords.latitude, 
                          position.coords.longitude,
                          targetLocation.lat,
                          targetLocation.long
                          )
}

function error() {
  console.log('Cannot get our position.')
}

function distance(lat1, lon1, lat2, lon2) {
  if ((lat1 == lat2) && (lon1 == lon2)) {
      return 0;
  }
  else {
      var radlat1 = Math.PI * lat1/180;
      var radlat2 = Math.PI * lat2/180;
      var theta = lon1-lon2;
      var radtheta = Math.PI * theta/180;
      var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      // if (dist > 1) {
      //     dist = 1;
      // }
      dist = Math.acos(dist);
      dist = dist * 180/Math.PI;
      dist = dist * 60 * 1.1515;

      // K
      dist = dist * 1.609344;

      // if (unit=="K") { dist = dist * 1.609344 }
      // if (unit=="N") { dist = dist * 0.8684 }
      console.log(dist.toFixed(5))
      return dist;
  }
}

document.getElementById('location').addEventListener('click',getLocation)