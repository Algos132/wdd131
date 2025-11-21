//Dates for footer element
const date = new Date();
document.querySelector("#currentyear").innerHTML = date.getFullYear();
document.getElementById("lastmodified").innerHTML = `Last Modification: ${document.lastModified}`;


const temp = 70; // Fahrenheit
const speed = 3; // Miles per hour

function calculateWindChill(temp, speed) {
    // Formula for Fahrenheit and mph
    return 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
}

function getWindChill(temp, speed) {
    // Check valid conditions for Fahrenheit/mph formula
    if (temp <= 50 && speed > 3) {
        const windChillValue = calculateWindChill(temp, speed);
        return `${Math.round(windChillValue)} °F`;
    } else {
        return "N/A";
    }
}

const windChillDisplay = document.getElementById("windChill");
windChillDisplay.textContent = getWindChill(temp, speed);