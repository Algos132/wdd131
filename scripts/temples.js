const date = new Date();
document.querySelector("#currentyear").innerHTML = date.getFullYear();
document.getElementById("lastmodified").innerHTML = `Last Modification: ${document.lastModified}`;

const hambutton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    hambutton.classList.toggle('show');
});

window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
        navigation.classList.remove('show');
        hambutton.classList.remove('show');
    }
});