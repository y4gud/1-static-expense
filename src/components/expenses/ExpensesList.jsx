import "./ExpensesList.css"
import ExpenseItem from "./ExpenseItem"

const ExpensesList = ({item}) => {
  if (item.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>
  }

  
  return (
    <ul className="expenses-list">
      {
        item.map((expense) => (
          <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
        ))
      }
    
    </ul>
  )
}

export default ExpensesList