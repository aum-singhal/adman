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
import { CreateReport } from './pages/reports/createReport/createReport';
import { ShowDetails } from './pages/shows/showDetails/showDetails';
import { Login } from './pages/login/Login';
import { useState } from 'react';

function App() {
  const [logged, setLogged] = useState(false);
  
  return (
    logged===false? <Login setLogged={setLogged} /> : <div className="App">

     { 
     logged===true?<div className="left-section">
        <Sidebar />
      </div> : null}

      <div className="right-section">
        <Routes>
          <Route path='' element={<Clients />} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/plans' element={<Plans />} />
          <Route path='/advertisements' element={<Advertisements />} />
          <Route path='/shows' element={<Shows />} />
          <Route path='/shows/show-details' element={<ShowDetails />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/reports/create' element={<CreateReport />} />
          <Route path='/users' element={<Users />} />
        </Routes> 
      </div>

    </div>
  );
}

export default App;
