import React from 'react';
import './App.css';
import AppHeader from "./Component/AppHeader"; 
import SideMenu from "./Component/SideMenu";
import PageContent from "./Component/PageContent";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <AppHeader />
        <div className='SideMenu'>
        <SideMenu />
        </div>
        <div className="PageContent">
          <PageContent />
        </div>
      </div>
    </div>
  );
}

export default App;
