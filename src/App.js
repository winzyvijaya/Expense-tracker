
import './App.css';
import {Header} from './Component/Header';
import {Balance} from './Component/Balance';
import {Incomeexpences} from './Component/Incomeexpences';
import {TransactionList} from './Component/TransactionList';
import { AddTransaction } from './Component/AddTransaction';

import {GlobalProvider} from './Contex/GlobalState';

function App() {
  return (
    <div>
      <GlobalProvider>
      <Header></Header>
      <div className="container">
      <Balance></Balance>
      <Incomeexpences></Incomeexpences>
      <TransactionList></TransactionList>
      <AddTransaction></AddTransaction>
      </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
