import { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/expenses/Expenses";

const TASK_EXPENSES = [
  { id: 1, title: "Car Insurance", amount: 200, date: new Date(2023, 2, 20) },
  { id: 2, title: "House Maintenance", amount: 900, date: new Date(2021, 6, 30) },
  { id: 3, title: "Overall Billing", amount: 650, date: new Date(2020, 4, 10) },
  { id: 4, title: "Cloud computing", amount: 500, date: new Date(2019, 8, 2) },
  { id: 5, title: "Gold mining", amount: 1500, date: new Date(2023, 7, 30) },
];

const App = () => {

  const [expenses, setExpenses] = useState(TASK_EXPENSES)


  const onAddExpenseHandler = (expense) => {
    setExpenses((prevState) => [expense, ...prevState])
    console.log(expense)
  }

  return (
    <div>
      <NewExpense onAddExpense={onAddExpenseHandler} />
      <Expenses myExpenses={expenses} onFilter={onAddExpenseHandler} />
    </div>
  );
}

export default App;
