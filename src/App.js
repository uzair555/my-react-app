import React,{useState} from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const [expense,setExpenses]=useState([
    {id:'e1',title:'Toilet Paper',amount:23.4,date:new Date(2022,0,4)},
    {id:'e2',title:'Watch',amount:123.4,date:new Date(2022,3,8)},
    {id:'e3',title:'Tea',amount:3.4,date:new Date(2021,1,10)},
    {id:'e4',title:'Car Insurance',amount:235.54,date:new Date(2022,4,15)}
  ])

  const onAddExpenseHandler=(expenses)=>{
//     console.log("Appjs")
//     console.log(expenses)
//     setExpenses(
// [      expenses,
//       ...expense]
//     )
setExpenses((prevStat)=>{return(
  [expenses,...prevStat]
)})
  }
  return (
    <div className="App">
    
        <h2>
          Lets Get started
        </h2>
     <NewExpense onAddExpense={onAddExpenseHandler}/>
     <Expenses expense={expense}/>
     
    </div>
  );
}

export default App;
