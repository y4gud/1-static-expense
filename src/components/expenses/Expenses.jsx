import { useState } from "react";
import ExpenseFilter from "../extra-files/ExpenseFilter";
import ExpensesList from "./ExpensesList"
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ myExpenses }) => {
  const [filteredYear, setFilteredYear] = useState("2019");

  let hiddenFilterYear = "2020, 2021, 2022 and 2023";

  if (filteredYear === "2019") {
    hiddenFilterYear = "2020, 2021, 2022 and 2023";
  } else if (filteredYear === "2020") {
    hiddenFilterYear = "2019, 2021, 2022 and 2023";
  } else if (filteredYear === "2021") {
    hiddenFilterYear = "2019, 2020, 2022 and 2023";
  } else if (filteredYear === "2022") {
    hiddenFilterYear = "2019, 2020, 2021 and 2023";
  } else {
    hiddenFilterYear = "2019, 2020, 2021 and 2022";
  }

  const filterChangeHandler = (onYearChangeHandler) => {
    setFilteredYear(onYearChangeHandler);
  };

  const filteredExpenses = myExpenses.filter((filtered) => {
    return filtered.date.getFullYear().toString() === filteredYear;
  });

  

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <p
          style={{
            color: "white",
            textAlign: "center",
            textShadow: "2px 2px #a30fe7",
          }}
        >
          Base of your settings, the date for {hiddenFilterYear} are hidden
        </p>
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList item={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
