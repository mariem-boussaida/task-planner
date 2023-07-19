import './App.css';
import AppHeader from "./comporents/AppHeader"; 
import SideMenu from "./comporents/SideMenu";
import PageContent from "./comporents/PageContent";
import AppFooter from "./comporents/AppFooter";

function App() {
  return (
    <div className="App">
    <AppHeader/>
    <space className="SideMenuAndageContent">
    <SideMenu></SideMenu>
    <PageContent></PageContent>
    </space>
    <AppFooter/> 
    </div>
  );
}

export default App;
