/*Gets date for footer*/
const date = new Date();
document.querySelector("#currentyear").innerHTML = date.getFullYear();
document.getElementById("lastmodified").innerHTML = `Last Modification: ${document.lastModified}`;

/*For the form*/
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

/*Populate dropdown*/
const select = document.querySelector("#product");

if (select) {
    products.forEach(product => {
        let dropdownItem = document.createElement('option');
        dropdownItem.value = product.id;
        dropdownItem.textContent = product.name;

        select.appendChild(dropdownItem);
    });
}

/*Visit Counter on confirmation page*/
const main = document.querySelector(".confirmation");

console.log(main);

if (main) {
    let counter = document.createElement('p');
    let visitNumber = Number(window.localStorage.getItem("times-visited")) || 0;


    main.appendChild(counter)
    visitNumber++;
    localStorage.setItem("times-visited", visitNumber);

    counter.textContent = `You have submitted ${visitNumber} reviews. Thank you for your support!`;
}