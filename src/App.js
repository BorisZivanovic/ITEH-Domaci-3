import './App.css';
import NavBar from './components/NavBar';
import Pocetna from './pages/Pocetna';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Kontakt from './pages/Kontakt';
import Pretraga from './pages/Pretraga';
var max_speed=600;
function App() {
  
  // const [planes,setPlanes] = useState([]);
  // const showPlanes = async ()=>{
  //   const response = await fetch('https://api.api-ninjas.com/v1/aircraft?limit=10&max_speed=' + max_speed,{headers: {
  //     'X-Api-Key': 'Y3Vol+EYI4wZgn/zg4oOuw==lXCPLzCsOd3PyZin'
  //   }});
  //   const data  = await response.json();
  //   setPlanes(data);
  //   console.log(data);
  // }

  // useEffect(()=>{
  //     showPlanes();
  // }, []);
  return (
    <div className="App">
       {/* <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Pocetna data = {planes}/>} /> 
        <Route path='/kontakt' element={<Kontakt/>} /> 
        <Route path='/pretraga' element={<Pretraga data={planes}/>} /> 
      </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
