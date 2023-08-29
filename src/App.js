import React, {useState} from 'react';
import './App.css';
import AppHeader from "./Component/AppHeader"; 
import SideMenu from "./Component/SideMenu";
import PageContent from "./Component/PageContent";
import LoginPage from "./Component/LoginPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
      <div className="App">
        {loggedIn ? (
              <div className="AppGlass">
                <AppHeader />
                <div className='SideMenu'>
                  <SideMenu />
                </div>
                <div className="PageContent">
                  <PageContent />
                </div>
              </div>
        ) : (
            <LoginPage onLogin={handleLogin} />
        )}
      </div>
  );
}

export default App;
