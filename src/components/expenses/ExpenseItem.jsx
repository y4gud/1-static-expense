import "./ExpenseItem.css";
import DateItem from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({ title, amount, date }) => {
  // const month = date.toLocaleString("en-US", {month: "short"})
  // const year = date.getFullYear()
  // const day = date.toLocaleString("en-US", {day: "2-digit"})

  return (
    <Card className="expense-item">
      {
        <DateItem
          dateName={date}
        /> /* <DateItem month={month} year={year} day={day}/> */
      }
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;