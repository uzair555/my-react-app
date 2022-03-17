import './App.css';
import Expenses from './components/Expenses/Expenses';

function App() {
  const expense=[
    {title:'Toilet Paper',amount:23.4,date:new Date(2022,0,4)},
    {title:'Watch',amount:123.4,date:new Date(2022,3,8)},
    {title:'Tea',amount:3.4,date:new Date(2022,1,10)},
    {title:'Car Insurance',amount:235.54,date:new Date(2022,4,15)}
  ]
  return (
    <div className="App">
    
        <h2>
          Lets Get started
        </h2>
     
     <Expenses expense={expense}/>
     
    </div>
  );
}

export default App;
