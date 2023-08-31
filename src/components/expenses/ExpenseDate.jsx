import "./ExpenseDate.css";

const DateItem = ({ dateName }) => {
  const month = dateName.toLocaleString("en-US", { month: "short" });
  const year = dateName.getFullYear();
  const day = dateName.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default DateItem;
