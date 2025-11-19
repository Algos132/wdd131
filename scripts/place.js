//Dates for footer element
const date = new Date();
document.querySelector("#currentyear").innerHTML = date.getFullYear();
document.getElementById("lastmodified").innerHTML = `Last Modification: ${document.lastModified}`;

