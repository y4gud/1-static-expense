import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true)
  }

  const stopEditing = () => {
    setIsEditing(false)
  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const newExpenseData = {
      ...enteredExpenseData,
    };

    onAddExpense(newExpenseData);
    setIsEditing(false)
  };
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler} >Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onStopEditing={stopEditing}/>}
    </div>
  );
};

export default NewExpense;
