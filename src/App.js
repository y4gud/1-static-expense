import Expenses from "./components/expenses/Expenses";

function App() {
  const taskExpenses = [
    { title: "Car Insurance", amount: 200, date: new Date(2023, 2, 20) },
    { title: "House Maintenance", amount: 900, date: new Date(2023, 6, 30) },
    { title: "Overall Billing", amount: 650, date: new Date(2023, 4, 10) },
    { title: "Cloud computing", amount: 500, date: new Date(2023, 8, 2) },
  ];

  return (
    <div>
      <Expenses myExpenses={taskExpenses} />
    </div>
  );
}

export default App;
