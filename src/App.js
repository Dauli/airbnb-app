import './App.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Experience from './component/Experience';
import Card from './component/Card';
import Katie from "./images/katie-zaferes.png"
import Alex from "./images/AlexisDauli.jpg"
import Divine from "./images/Divine.jpg"


function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Hero />
      <Experience />

      <div className='cards'>
        <Card 
          img={Katie}
          ratingScore="4.0"
          title="Life lessons with Kent"
          price="200"
        />

        <Card 
          img={Alex}
          ratingScore="5.0"
          title="Life lessons with Kent"
          price="2500"
        />

        <Card 
          img={Divine}
          ratingScore="4.5"
          title="Life lessons with Kent"
          price="1500"
        />
      </div>
    </div>
  );
}

export default App;
