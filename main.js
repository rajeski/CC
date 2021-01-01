// Global Variables 

const addCurrencyBtn = document.querySelector(".add-currency-btn");

const currencies = [ 
    {
    name: "US Dollars",
    abbreviation: "USD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/us.gif"
}
];

// Event Listeners

addCurrencyBtn.addEventListener("click", addCurrencyBtnClick);

function addCurrencyBtnClick(event) {
    addCurrencyBtn.classList.toggle("open");
}