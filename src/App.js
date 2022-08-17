import './App.css';
import NavBar from './Components/NavBar/NavBar';
import {Routes,Route} from 'react-router-dom';
import ShowingUser from './Components/ShowingUser/ShowingUser';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import Home from './Components/Home/Home'
import Clock from './Components/Clock/Clock'
import Game from './Components/Game/Game'
import News from './Components/News/News'

function App() {
  return (
   <>
   <NavBar></NavBar>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='sign' element={<ShowingUser/>}></Route>
    <Route path='about' element={<About/>}></Route>
    <Route path='home' element={<Home/>}/>
    <Route path='clock' element={<Clock/>}/>
    <Route path='game' element={<Game/>}/>
    <Route path='news' element={<News/>}/>
    <Route path='*' element={<NotFound/>}/>
   </Routes>
   </>
  );
}

export default App;
