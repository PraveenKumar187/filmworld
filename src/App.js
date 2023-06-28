
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Addmovie from './component/AddMovie';
import Filmlist from './component/Filmlist';
import Home from './component/Home';
import Movies from './component/Movies';
import Nav from './component/Nav';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Update from './component/Update';
import Filedetails from './component/Filedetails';
import Language from './component/Language';

function App() {
  return (
   <BrowserRouter>
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Movies/>}></Route>
        <Route path='/film' element={ <Home/>} ></Route>
      <Route path='/add' element={<Addmovie/>}></Route>
      <Route path='/update' element={<Update/>}></Route>
      <Route path='/detail/:id' element={<Filedetails/>}></Route>
      <Route path='/update/:userid' element={<Update/>}></Route>
      <Route path='/lang' element={<Language/>}></Route>
      </Routes>
    </div>
   </BrowserRouter>
  );
}

export default App;
