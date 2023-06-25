import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
const Budget = () => {
  const { budget, currency, expenses } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  const [editableBudget, setEditableBudget] = useState(budget);
  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency}</span>
      <input
        required="required"
        type="number"
        id="cost"
        step="10"
        value={editableBudget}
        style={{ marginLeft: "5px", size: 10 }}
        onChange={(event) => {
          if (event.target.value > 20000) {
            alert("the value connot exceed 20000");
            setEditableBudget(20000);
            return;
          }
          if (event.target.value < totalExpenses) {
            alert("the value connot be lower than the spending");
            setEditableBudget(totalExpenses);
            return;
          }
          setEditableBudget(event.target.value);
        }}
      ></input>
    </div>
  );
};
export default Budget;
