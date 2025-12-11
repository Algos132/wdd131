//Dates for footer element
const date = new Date();
document.querySelector("#currentyear").innerHTML = date.getFullYear();
document.getElementById("lastmodified").innerHTML = `Last Modification: ${document.lastModified}`;

//For hamburger button
const hambutton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    hambutton.classList.toggle('show');
});

window.addEventListener("resize", () => {
    if (window.innerWidth >= 973) {
        navigation.classList.remove('show');
        hambutton.classList.remove('show');
    }
});

/*For the form*/
const actions = [
    {
        name: "Submit a theory"
    },
    {
        name: "Ask us a question"
    },
    {
        name: "Provide feedback"
    },
    {
        name: "Make a request"
    },
    {
        name: "Apply to our team"
    }
];
/*Populates dropdown*/
const select = document.querySelector("#action");

if (select) {
    actions.forEach(action => {
        let dropdownItem = document.createElement('option');
        dropdownItem.textContent = action.name;

        select.appendChild(dropdownItem);
    });
}

//For submission button
const visitsDisplay = document.getElementById("#visits");

let numVisits = Number(window.localStorage.getItem("visitCount"));

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

numVisits++;

localStorage.setItem("visitCount", numVisits);