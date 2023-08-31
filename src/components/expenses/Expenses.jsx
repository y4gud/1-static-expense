import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card"
import "./Expenses.css"

const Expenses = ({myExpenses}) => {
  return (
    <Card className="expenses">
        <ExpenseItem
        title={myExpenses[0].title}
        amount={myExpenses[0].amount}
        date={myExpenses[0].date}
      />
      <ExpenseItem
        title={myExpenses[1].title}
        amount={myExpenses[1].amount}
        date={myExpenses[1].date}
      />
      <ExpenseItem
        title={myExpenses[2].title}
        amount={myExpenses[2].amount}
        date={myExpenses[2].date}
      />
      <ExpenseItem
        title={myExpenses[3].title}
        amount={myExpenses[3].amount}
        date={myExpenses[3].date}
      />
    </Card>
  )
}

export default Expenses