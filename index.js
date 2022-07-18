const numberInput = document.querySelector("#InputNumber");
const moneyEl = document.querySelector(".money");
let mmkOutPut = "";
let bahtOutPut = "";
let yenOutPut = "";

let currencyRates = {
  mmk: 1851.26,
  baht: 36.07,
  yen: 135.78,
};

let countries = ["mmk", "baht", "yen"];
/* <div class="box">
  <h2 class="name">Myanmar Kyat</h2>
  <p class="outPut">1USD = 1000 mmk</p>
</div>; */

function convert() {
  console.log("convert", numberInput.value);
  mmkOutPut = numberInput.value * currencyRates.mmk;
  bahtOutPut = numberInput.value * currencyRates.baht;
  yenOutPut = numberInput.value * currencyRates.yen;
  let results = [mmkOutPut, bahtOutPut, yenOutPut];
  let valueName = ["Myanmar Kyat", "Baht", "Yen"];
  // let conbineAll = [numberInput.value + "USD = " + results[i]];
  // let outPutResult = conbineAll.join(" ");

  let cardDom = "";
  for (let i = 0; i < countries.length; i++) {
    const divBox = document.createElement("div");
    divBox.classList.add("box");
    const h2Name = document.createElement("h2");
    h2Name.classList.add("name");
    h2Name.textContent = valueName[i];
    divBox.appendChild(h2Name);
    const outPutP = document.createElement("p");
    outPutP.classList.add("outPut");
    // outPutP.textContent = [numberInput.value, "USD = ", mmkOutPut];
    // outPutP.textContent = [numberInput.value, "USD = ", results[i]];
    outPutP.textContent = numberInput.value + " " + "USD = " + results[i];
    divBox.appendChild(outPutP);

    moneyEl.appendChild(divBox);
  }
}
