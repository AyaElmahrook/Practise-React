import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import {Routes,Route} from 'react-router-dom';
import ShowingUser from './Components/ShowingUser/ShowingUser';
import PageTwo from './Components/PageTwo/PageTwo';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
   <>
   <NavBar></NavBar>
   <Routes>
    <Route path='/' element={<ShowingUser/>}/>
    <Route path='home' element={<ShowingUser/>}></Route>
    <Route path='pageTwo' element={<PageTwo/>}></Route>
    <Route path='*' element={<NotFound/>}/>
   </Routes>
   </>
  );
}

export default App;
