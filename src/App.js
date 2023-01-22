import './App.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Experience from './component/Experience';
import Card from './component/Card';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Experience />
      <Card />
    </div>
  );
}

export default App;
