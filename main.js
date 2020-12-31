// Global Variables 

const addCurrencyBtn = document.querySelector(".add-currency-btn");

// Event Listeners

addCurrencyBtn.addEventListener("click", addCurrencyBtnClick);

function addCurrencyBtnClick(event) {
    addCurrencyBtn.classList.toggle("open");
}