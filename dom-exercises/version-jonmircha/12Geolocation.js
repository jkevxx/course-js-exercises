export default function getGeolocation(id) {
  const $id = document.getElementById(id);
  const options = {
    enableHighAccuracy: true,
    setTimeout: 5000,
    maximumAge: 0,
  };

  const success = (position) => {
    let { coords } = position;
    // console.log(coords);
    $id.innerHTML = `
      <p>Your current Position is:</p>
      <ul>
        <li>Latitude: <b>${coords.latitude}</b></li>
        <li>Longitude: <b>${coords.longitude}</b></li>
        <li>Precision: <b>${coords.accuracy}</b>m</li>
      </ul>
      <a href="http://www.google.com/maps/@${coords.latitude},${coords.longitude},15z" target="_blank" rel="noopener" >See Google Maps</a>
    `;
  };

  const error = (err) => {
    $id.innerHTML = `<p>Error ${err.code}: ${err.message}</p>`;
    console.log(`Error ${err.code}: ${err.message}`);
  };

  navigator.geolocation.getCurrentPosition(success, error, options);
}
