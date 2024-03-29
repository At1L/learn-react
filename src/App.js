import './App.css';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
function App(props) {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
          <Header/>
          <Navbar/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/news' element={<News/>} />
            <Route path='/dialogs'element={<DialogsContainer/>}/>
            <Route path='/music' element={<Music/>}/>
            <Route path='/settings' element={<Settings/>}/>
            <Route path='/users' element={<UsersContainer/>}/>
          </Routes>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App; 
