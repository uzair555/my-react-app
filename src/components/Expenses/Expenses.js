import React, { useState } from 'react';

import Card from '../UI/Card'
// import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css'
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';
function Expenses(props){
       const [filteredYear, setFilteredYear] = useState('2020');

       const filterChangeHandler = selectedYear => {
         setFilteredYear(selectedYear);
       }    
       
       const filteredExpenses =props.expense.filter(exp=>{
              return exp.date.getFullYear().toString()===filteredYear
       })

       // let expenseContent= <p>No expenses found</p>
       // if (filteredExpenses.length>0) {
       //       expenseContent= filteredExpenses.map((exp)=>{
       //               return(
       //               <ExpenseItem 
       //               key={exp.id}
       //               title={exp.title} 
       //               amount={exp.amount} 
       //               date={exp.date} />
       //               )
       //        })
       // }

       
    return(
        <Card className='expenses'>
       <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
       {/* {filteredExpenses.length===0 && <p>No expenses found</p>}
       {filteredExpenses.length>0 && filteredExpenses.map((exp)=>{
              return(
              <ExpenseItem 
              key={exp.id}
              title={exp.title} 
              amount={exp.amount} 
              date={exp.date} />
              )
       })} */}
       <ExpenseChart expenses={filteredExpenses}/>
       <ExpenseList items={filteredExpenses}/>
       

        </Card>
    )
}

export default Expenses