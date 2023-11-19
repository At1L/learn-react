import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Settings from './components/Settings/Settings';
function App() {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
          <Header/>
          <Navbar />
        {/*<Profile/>*/}
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' Component={Profile}/>
            <Route path='/news' Component={News}/>
            <Route path='/dialogs' Component={Dialogs}/>
            <Route path='/music' Component={Music}/>
            <Route path='/settings' Component={Settings}/>
          </Routes>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App; 
