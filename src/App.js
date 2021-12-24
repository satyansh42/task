
import './App.css';
import Nav from "./Nav";
import Footer from './Footer';
import  Body  from './body';
import Storage from './storage';
import Download from './download';
import Features from './Features';
import Testimonials from './Testimonials';
import Subscribe from './Subscribe';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Body/>
      <Storage/>
      <Features/>
      <Download/>
      <Testimonials/>
      <Subscribe/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
