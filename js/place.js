const yearSpan = document.querySelector("#year");
const lastModifiedSpan = document.querySelector("#lastModified");

yearSpan.textContent = new Date().getFullYear();
lastModifiedSpan.textContent = document.lastModified;

const temperature = 10;
const windSpeed = 5;

function calculateWindChill(t, w) {
    return 13.12 + 0.6215 * t - 11.37 * w * 0.16 + 0.3965 * t * w * 0.16;
}

const windChillSpan = document.querySelector("#windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChillSpan.textContent = calculateWindChill(temperature, windSpeed).toFixed(1) + " °C";
} else {
    windChillSpan.textContent = "N/A";
}