//Variables
let currencyApi = new FetchCurrencyApi(),
  ui = new UI(),
  submitBtn = document.querySelector("#btnExchange");
//event Listeners
eventListeners();
function eventListeners() {
  //when Page loaded
  document.addEventListener("DOMContentLoaded", () => {
    let ShowCurrencyData = currencyApi.showCurrencies();
    ui.showCurrency(ShowCurrencyData);
  });

  //exchange Currencies
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    //get select box value
    const currency = document.querySelector("#currency").value,
      price = document.querySelector("#exchangeCurrency").value;

    if (currency == "nSelected" || price == "nSelected")
      ui.showError(
        "لطفا مقادیر را انتخاب کنید",
        "alert alert-danger text-center"
      );
    else {
      let exchangeValues = currencyApi.exchangeCurrencies(currency, price);
      ui.showExchange(exchangeValues);
    }
  });
}
