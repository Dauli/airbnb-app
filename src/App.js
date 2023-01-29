import './App.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Experience from './component/Experience';
import Card from './component/Card';
import dataAPI from "./data.js"

function App() {

  console.log(dataAPI)

  const dataElements = dataAPI.map(data => {
    return <Card 
      img={data.coverImg}
      ratingScore={data.stats.rating}
      ratingCount={data.stats.reviewCount}
      country={data.location}
      title={data.title}
      price={data.price}
    />
  }) 

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Experience />

      <div className='cards'>
        {dataElements}
      </div>
    </div>
  );
}

export default App;
