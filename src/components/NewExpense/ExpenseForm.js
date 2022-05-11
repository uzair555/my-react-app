import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enterTitle, setEnterTitle] = useState();
  const [enterAmount, setEnterAmount] = useState();
  const [enterdate, setEnterDate] = useState();
// const [userInput,setUserInput]=useState({
//     enterTitle:'',
//     enterAmount:'',
//     enterdate:'',
// })

  const titleHandler = (event) => {
    console.log(event.target.value);
    setEnterTitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enterTitle:event.target.value
    // })
    // setUserInput((prevState)=>{
    //     return{...prevState,enterTitle:event.target.value}
    // })
  };
  const amountHandler = (event) => {
    console.log(event.target.value);
    setEnterAmount(event.target.value);
  };
  const dateHandler = (event) => {
    console.log(event.target.value);
    setEnterDate(event.target.value);
  };

  const submitHandler=(event)=>{
      event.preventDefault()
      const expenseData=({
          title:enterTitle,
          amount:enterAmount,
          date: new Date(enterdate)
      })
    //   console.log(expenseData)
      props.onSaveExpense(expenseData)
      setEnterTitle('')
      setEnterAmount('')
      setEnterDate('')
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleHandler} value={enterTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min={"0.01"}
            step="0.01"
            value={enterAmount}
           onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control    ">
          <label>Date</label>
          <input
            type="date"
            min={"2019-01=01"}
            max={"2022-12-31"}
            value={enterdate}
            onChange={dateHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="Submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
