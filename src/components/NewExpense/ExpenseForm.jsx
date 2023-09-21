import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = ({onSaveExpenseData, onStopEditing}) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");



  // const inputHandler = (identifier, value) => {
  //   if (identifier === "Title") {
  //     setTitle(value)
  //   } else if (identifier === "Amount") {
  //     setAmount(value)
  //   } else setDate(value)
  // }


  const titleChangeHandler = (e) => {
    setTitle(e.target.value)
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value)
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value)
  };

  const submitInputHandler = (e) => {
    e.preventDefault()

    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date)
    }

    onSaveExpenseData(expenseData)

    setTitle("")
    setAmount("")
    setDate("")
  }

  return (
    <form onSubmit={submitInputHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={amount} onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input type="date" min="2018-01-01" max="2023-12-31" value={date} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
      <button type="button" onClick={onStopEditing}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};




//Alternative ways of using state, my preferred on in fact

// const [formInput, setFormInput] = useState({
//     title: "",
//     amount: "",
//     date: "",
//   });

//   const titleChangeHandler = (e) => {
//     setFormInput( (prevState) => {
//         return {...prevState, title: e.target.value }
//     });
//   };

//   const amountChangeHandler = (e) => {
//     setFormInput((prevState) => {
//         return {...prevState, amount: e.target.value}
//     });
//   };

//   const dateChangeHandler = (e) => {
//     setFormInput((prevState) => {
//         return {...prevState, date: e.target.value}
//     });
//   };

export default ExpenseForm;
