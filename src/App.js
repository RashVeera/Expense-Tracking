import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';
import TransctionsList from './components/TransctionsList';
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <GlobalProvider>
    <div className="App">
      <Header/> 
      <Balance/>
      <IncomeExpenses/>
      <TransctionsList/>
      <AddTransaction/>
    </div>
    </GlobalProvider>
  );
}

export default App;
