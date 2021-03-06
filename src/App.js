
import './App.css';
import { Route, Routes } from 'react-router-dom';
import {Homepage} from './Containers/Homepage';
import About from './Containers/About/About';



function App() {
  return (
    <>

   <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/about"  element={<About />} />
      </Routes>

    </>
  );
}

export default App;
