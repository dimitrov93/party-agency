// "https://party-agency-nodejs.onrender.com/api";

let BASE_URL = "http://localhost:5000/api";
if (window.location.hostname !== 'localhost') {
  BASE_URL = `https://nodejs.fairy.dimitrov93.eu/api`;
}

export { BASE_URL };
