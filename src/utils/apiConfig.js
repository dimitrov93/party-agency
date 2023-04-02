// "https://party-agency-nodejs.onrender.com/api";

let BASE_URL = "http://localhost:5000/api";
if (window.location.hostname !== 'localhost') {
  BASE_URL = `https://party-agency-nodejs.onrender.com/api`;
}

export { BASE_URL };
