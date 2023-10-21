import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Sidebar } from './components/sidebar/Sidebar';
import { Table } from './components/table/Table';
import { Clients } from './pages/clients/Clients';
import { CSSTransition, SwitchTransition, TransitionGroup } from 'react-transition-group';
import { Plans } from './pages/plans/Plans';
import { Users } from './pages/users/Users';

function App() {
  return (
    <div className="App">

      <div className="left">
        <Sidebar />
      </div>

      <div className="right">
        <Routes>
          <Route path='' element={<Clients />} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/plans' element={<Plans />} />
          <Route path='/advertisements' element={<Clients />} />
          <Route path='/shows' element={<Clients />} />
          <Route path='/reports' element={<Clients />} />
          <Route path='/users' element={<Users />} />
        </Routes> 
      </div>

    </div>
  );
}

export default App;
