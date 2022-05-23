import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  // Constants and variables
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangedHandler = (selectedYear) => {
    console.log("from Expenses.js");
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  }); // for filtering a List

  
  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear} // by default value of 2020
          onFilterChanged={filterChangedHandler}
        />
       <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}
export default Expenses;
