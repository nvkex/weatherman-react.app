import React from 'react';
import WeatherApp from './WeatherApp/WeatherApp';
import './App.css';
import NavBar from './WeatherApp/Components/NavBar/NavBar';
import Footer from './WeatherApp/Components/Footer/Footer';


function App() {
  return (
    <div>
      <NavBar/>
      <WeatherApp/>
      <Footer/>
    </div>
    
  );
}

export default App;
