import './App.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Experience from './component/Experience';
import Card from './component/Card';
import dataAPI from "./data.js"

function App() {
  const cards = dataAPI.map( data => <Card key={data.id} {...data} /> )
  
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Experience />

      <section className='cards-list'>
        {cards}
      </section>
    </div>
  );
}

export default App;
