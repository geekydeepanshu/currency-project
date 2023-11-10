import React,{useId} from "react";

function InputBox({
    label="From",
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency,
    amountDisable=false,
    currencyDisable=false,
    className=""
}){
    const amountInputId=useId();
    // generate random id for accesiblity attributes: combination of numbers,strings
    return(
        <div className={`w-11/12 h-28 sm:py-1 sm:px-4 bg-white rounded-xl sm:flex sm:flex-row sm:justify-between`}>
            <div className="w-1/2 sm:flex sm:flex-col text-lg justify-around">
                <label htmlFor={amountInputId}
                className=" text-slate-400">
                   {label}
                </label>
                <input
                className="w-full h-8 border-0 outline-0"
                type="number"
                id={amountInputId}
                placeholder="Amount"
                disabled={amountDisable}
                value={amount}
                onChange={(event)=>onAmountChange && onAmountChange(Number(event.target.value))}
                />
            </div>
            <div className="w-1/2 sm:flex sm:flex-col sm:justify-around sm:items-end">
                <label
                htmlFor="CurrencyList"
                className="mr-8 text-lg  text-slate-400">Currency Type</label>
                <select 
                className="rounded-lg text-center cursor-pointer ouline-none border-0 bg-grey-100 "
                value={selectCurrency}
                onChangeCapture={(event)=>onCurrencyChange && onCurrencyChange(event.target.value)}
                disabled={currencyDisable}
                >
                    <option>-- Select Currency --</option>
                    {currencyOptions.map((currency)=>{
                        return(
                            <option key={currency} value={currency}>
                                {currency.toUpperCase()}
                            </option>
                        )
                    })}
                </select>
            </div>
        </div>
    );
}

export default InputBox;