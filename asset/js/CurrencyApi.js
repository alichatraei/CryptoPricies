class FetchCurrencyApi {
  constructor() {
    this.apiKey = "7e835f95dffd1d8d9808fcf41e452082";
  }
  async showCurrencies() {
    let URL = "https://api.nomics.com/v1/currencies/ticker?key=" + this.apiKey;
    URL += "&ids=BTC,ETH,XRP&interval=1d";
    let fetchApi = await (await fetch(URL)).json();
    return fetchApi;
  }
  async exchangeCurrencies(currency, price) {
    let URL = "https://api.nomics.com/v1/currencies/ticker?key=" + this.apiKey;
    URL += `&ids=${currency}&convert=${price}`;
    let fetchApi = await (await fetch(URL)).json();
    return fetchApi;
  }
}
