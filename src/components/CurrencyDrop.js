import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const CurrentCurrency = () => {
  const { currency, dispatch } = useContext(AppContext);

  const handleCurrencyChange = (event) => {
    const newCurrency = event.target.value;
    dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
  };

  return (
    <select
      name="currency"
      id="mySelect"
      className="btn btn-success"
      onChange={handleCurrencyChange}
      value={currency}
    >
      <option value="$">$ Dollar</option>
      <option value="£">£ Pound</option>
      <option value="€">€ Euro</option>
      <option value="₹">₹ Rupee</option>
    </select>
  );
};

export default CurrentCurrency;
