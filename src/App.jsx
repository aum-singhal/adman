import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Sidebar } from './components/sidebar/Sidebar';
import { Table } from './components/table/Table';
import { Clients } from './pages/clients/Clients';
import { CSSTransition, SwitchTransition, TransitionGroup } from 'react-transition-group';
import { Plans } from './pages/plans/Plans';
import { Users } from './pages/users/Users';
import { Advertisements } from './pages/advertisements/Advertisements';
import { Shows } from './pages/shows/Shows';
import { Reports } from './pages/reports/Reports';

function App() {
  return (
    <div className="App">

      <div className="left-section">
        <Sidebar />
      </div>

      <div className="right-section">
        <Routes>
          <Route path='' element={<Clients />} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/plans' element={<Plans />} />
          <Route path='/advertisements' element={<Advertisements />} />
          <Route path='/shows' element={<Shows />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/users' element={<Users />} />
        </Routes> 
      </div>

    </div>
  );
}

export default App;
