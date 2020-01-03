import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import SearchBar from '../src/components/layout/SearchBar';
import Logs from '../src/components/logs/Logs';
import AddBtn from '../src/components/layout/AddBtn';
import AddLogModal from '../src/components/logs/AddLogModal';
import EditLogModal from '../src/components/logs/EditLogModal';
import AddTechModal from '../src/components/techs/AddTechModal';
import TechListModal from '../src/components/techs/TechListModal';
import {Provider} from 'react-redux';
import store from './store';

function App() {
  useEffect(() => {
    //Initializes Materialize
    M.AutoInit();
  });

  return (
    <Provider store={store}>
<React.Fragment>
      <SearchBar />

      <div className="container">
        <AddBtn/>
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <Logs />
        
      </div>
    </React.Fragment>
    </Provider>
    


  );
}

export default App;
