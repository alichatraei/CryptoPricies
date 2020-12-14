class UI {
  //show Currency value when dom loaded
  showCurrency(fetchedData) {
    //process response
    fetchedData.then((data) => {
      let tbody = document.querySelector("#tbody-showCurrency");
      data.forEach((value) => {
        //show currencies value
        switch (value.id) {
          case "BTC":
            tbody.innerHTML += `<tr>
            <td>بیتکوین</td>
            <td>${value.price.split(".", 1)} دلار</td>
            <td>${value.price_date.split("T", 1)}</td>
            </tr>`;
            break;
          case "ETH":
            tbody.innerHTML += `<tr>
            <td>اتریوم</td>
            <td>${value.price.split(".", 1)} دلار</td>
            <td>${value.price_date.split("T", 1)}</td>
            </tr>`;
            break;
          case "XRP":
            tbody.innerHTML += `<tr>
            <td>ریپل</td>
            <td>${value.price} دلار</td>
            <td>${value.price_date.split("T", 1)}</td>
            </tr>`;
            break;
        }
      });
    });
  }
  showExchange(data) {
    let tbody = document.querySelector("#tbody-exchange"),
      thead = document.querySelector("#thead-exchange"),
      exchangeNav = document.querySelector("#showExchangeCurrency"),
      img = document.createElement("img");
    //show loading spinner
    img.setAttribute("src", "asset/images/spinner.gif");
    img.setAttribute("width", "50px");
    img.setAttribute("class", "text-center");
    exchangeNav.appendChild(img);

    setTimeout(() => {
      img.remove();
      data.then((array) => {
        array.forEach((value) => {
          //if table isn't empty , delete value of it
          if (tbody.innerHTML == "") {
            thead.innerHTML += `<tr>
          <th>ارز انتخاب شده</th>
          <th>قیمت تبدیل شده</th>
          <th>تاریخ تبدیل</th>
          </tr>
          `;
            tbody.innerHTML += `<tr>
          <td>${value.name}</td>
          <td>${value.price.split(".", 1)}</td>
          <td>${value.price_date.split("T", 1)}</td>
          </tr>
          `;
          }
        });
      });
    }, 3000);
    if (tbody.innerHTML !== "") {
      tbody.innerHTML = "";
      thead.innerHTML = "";
    }
  }
  showError(message, className) {
    let exchangeNav = document.querySelector("#showExchangeCurrency"),
      p = document.createElement("p");
    p.setAttribute("class", className);
    p.textContent = message;
    exchangeNav.appendChild(p);
    setTimeout(() => {
      p.remove();
    }, 3000);
  }
}
