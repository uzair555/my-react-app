import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'
const NewExpense =(props)=>{
    const saveExpenseHandler=(expense)=>{
        const expenseData=({
            ...expense,
            id:Math.random().toString()
        })
        // console.log(expenseData,"From New Expense")
        props.onAddExpense(expenseData)
    }
    return(
    <div className="new-expense">
        <ExpenseForm onSaveExpense={saveExpenseHandler}/>
    </div>
    )
}

export default NewExpense;