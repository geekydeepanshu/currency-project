import { useState } from "react";
import bg from "./Assets/images/bgImageStockExchange.jpg";
import InputBox from "./components/InputBox.jsx";
import useCurrencyInformation from "./hooks/useCurrencyInfo.js";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("");
  const [convertedValue, setConvertedValue] = useState(0);
  const currency_response = useCurrencyInformation(from);
  const currencyList = Object.keys(currency_response);

  const onAmountChange = function $_onAmountChange(currencyAmount) {
    if (currencyAmount < 0)
      alert("Negative Currency Amount, Enter a Valid Amount !")
    else
      setAmount(currencyAmount);

  }
  const onCurrencyChange = function $_onCurrencyChange(currency) {
    setFrom(currency);
  }
  const onCurrencyChangeTo = function $_onCurrencyChangeTo(currency) {
    setTo(currency);
  }
  const swapCurrency = function $_swapCurrency() {
    if (to === "") alert("Enter a Currency Type First !");
    else {
      const temp = from;
      const temp_amount = amount;
      setFrom(to);
      setTo(from);
      setAmount(convertedValue);
      setConvertedValue(temp_amount);
    }
  }

  const convertValue = function $_convertedValue() {
    if (to === "") alert("Enter a Valid Currency Type !")
    setConvertedValue(amount * currency_response[to])
  }

  return (
    <div className="w-screen h-screen bg-cover sm:flex sm:justify-center sm:items-center" style={{ backgroundImage: `url(${bg})` }}>
      <div className=" w-2/3 h-2/3 sm:flex sm:flex-col sm:justify-evenly sm:items-center  sm:rounded-2xl bg-transparent sm:border-2 sm:relative shadow-xl sm:border-white " style={{ backgroundColor: "rgba(255,255,255,0.6)" }} >
        <InputBox
          label={"From"}
          amount={amount}
          onAmountChange={onAmountChange}
          onCurrencyChange={onCurrencyChange}
          currencyOptions={currencyList}
          selectCurrency={from} />

        <InputBox label={"To"}
          amount={convertedValue}
          selectCurrency={to}
          onCurrencyChange={onCurrencyChangeTo}
          currencyOptions={currencyList}
        />
        <button className="w-28 h-10 pb-1 rounded-lg absolute top-40 text-2xl font-medium shadow-md tracking-wide bg-blue-600 text-white"
          onClick={swapCurrency}>swap</button>
        <button className="w-11/12 h-16 text-xl rounded-xl sm:shadow-xl bg-blue-700 text-white"
          onClick={convertValue}>
          Convert {from.toUpperCase()} To {to ? to.toUpperCase() : ("--")}
        </button>
      </div>
    </div>
  );
}

export default App;
