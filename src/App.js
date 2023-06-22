import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
 } from "react-router-dom";
import { Home } from './Home';
import FeaturedRooms from './component/FeaturedRooms';
import Rooms from './component/Rooms';
import RoomContainer from './component/RoomContainer';

function App() {
  return (
    <div className='wraper'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/rooms' element={<Rooms/>}/>
          <Route path='/featuresRooms' element={< FeaturedRooms/>}/>
          <Route path='/container' element={<RoomContainer/>} />
        </Routes>

    </div>

  );
}

export default App;
