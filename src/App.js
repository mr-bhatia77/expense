import './App.css';

import {GlobalProvider} from './context/GlobalState';

import Loginform from './components/Loginform';
import {Route} from 'react-router-dom'
import Fullexpense from './components/Fullexpense';
function App() {
  return (
    <GlobalProvider>
      <Route path="/login" exact component={Loginform}></Route>
      <Route path="/" exact component={Fullexpense}></Route>
     </GlobalProvider>
  );
}

export default App;
