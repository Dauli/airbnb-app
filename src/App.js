import './App.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Experience from './component/Experience';
import Card from './component/Card';
import dataAPI from "./data.js"

function App() {
  const dataElements = dataAPI.map(data => {
    return (<Card 
              key={data.id}
              img={data.coverImg}
              ratingScore={data.stats.rating}
              ratingCount={data.stats.reviewCount}
              country={data.location}
              title={data.title}
              price={data.price}
              openSpots={data.openSpots}
          />
    )
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Experience />

      <section className='cards-list'>
        {dataElements}
      </section>
    </div>
  );
}

export default App;
