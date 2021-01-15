// Global Variables 

const addCurrencyBtn = document.querySelector(".add-currency-btn");
const addCurrencyList = document.querySelector(".add-currency-list");
const currenciesList = document.querySelector(".currencies");

const initiallyDisplayedCurrencies = ["USD", "EUR", "GBP", "JPY"];
let baseCurrency;
let baseCurrencyAmount;

const currencies = [ 
    {
    name: "US Dollars",
    abbreviation: "USD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/us.gif"
},
{
    name: "Euro",
    abbreviation: "EUR",
    symbol: "\u20AC",
    flagURL: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg"
  },
  {
    name: "Japanese Yen",
    abbreviation: "JPY",
    symbol: "\u00A5",
    flagURL: "http://www.geonames.org/flags/l/jp.gif"
  },
  {
    name: "British Pound",
    abbreviation: "GBP",
    symbol: "\u00A3",
    flagURL: "http://www.geonames.org/flags/l/uk.gif"
  },
  {
    name: "Australian Dollar",
    abbreviation: "AUD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/au.gif"
  },
  {
    name: "Canadian Dollar",
    abbreviation: "CAD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/ca.gif"
  },
  {
    name: "Chinese Yuan Renminbi",
    abbreviation: "CNY",
    symbol: "\u00A5",
    flagURL: "http://www.geonames.org/flags/l/cn.gif"
  },
];

// Event Listeners

addCurrencyBtn.addEventListener("click", addCurrencyBtnClick);

function addCurrencyBtnClick(event) {
    addCurrencyBtn.classList.toggle("open");
}

// Auxillary Functions

function populateaddCurrencyList() {
  for(let i=0; i<currencies.length; i++) {
    addCurrencyList.insertAdjacentHTML("beforeend", 
    `<li data-currency=${currencies[i].abbreviation}>
    <img src=${currencies[i].flagURL} class="flag"${currencies[i].abbreviation} - ${currencies[i].name}</span>
    </li>`
    );
  }
}

function populateaddCurrencyList() {
  for(let i=0; i<initiallyDisplayedCurrencies.length; i++) {
    const currency = currencies.find(c => c.abbreviation===initiallyDisplayedCurrencies[i]);
    if(currency) newCurrenciesListItem(currency);

  }
}

function newCurrenciesListItem(currency) {
  if(currenciesList.childElementCount===0) {
    baseCurrency = currency.abbreviation;
    baseCurrencyAmount = 0;
  }
  addCurrencyList.querySelector(`[data-currency=${currency.abbreviation}]`).classList.add("disabled");
  const baseCurrencyRate = currencies.find()
}

populateaddCurrencyList();

/* Almost finished with this section */ 