// treasure coordinates
const WIDTH = 400;
const HEIGH = 400;

let target = {
  x: getRandomNumber(WIDTH),
  y: getRandomNumber(HEIGH),
};

// click handler
let $map, $distance, clicks;
$map = document.querySelector("#map");
$distance = document.querySelector("#distance");
clicks = 0;
const reloadGame = () => {
  return location.reload();
};
$map.addEventListener("click", function (e) {
  clicks++;
  let distance = getDistance(e, target);
  let distanceHint = getDistanceHint(distance);
  $distance.innerHTML = `<h1>${distanceHint}</h1>`;

  distance < 1
    ? Swal.fire(`Encontraste el tesoro a la primera`)
    : distance < 20
    ? (Swal.fire(`Encontraste el tesoro en ${clicks} intentos`),
      e.preventDefault,
      setTimeout(reloadGame, 1000))
    : "";
});
