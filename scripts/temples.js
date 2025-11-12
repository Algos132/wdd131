const date = new Date();
document.querySelector("#currentyear").innerHTML = date.getFullYear();
document.getElementById("lastmodified").innerHTML = `Last Modification: ${document.lastModified}`;

const hambutton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

/* Starts the mobile version closed */
navigation.classList.add('show');
hambutton.classList.add('show');

hambutton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    hambutton.classList.toggle('show');
});

window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
        navigation.classList.remove('show');
        hambutton.classList.remove('show');
    }
    else {
        navigation.classList.add('show');
        hambutton.classList.add('show');
    }

});