import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import {GlobalProvider} from './context/GlobalState'
function App() {
  return (
    <GlobalProvider>
     <Header></Header>
     <Balance></Balance>
     <IncomeExpenses></IncomeExpenses>
     <TransactionList></TransactionList>
     <AddTransaction></AddTransaction>
     </GlobalProvider>
  );
}

export default App;
