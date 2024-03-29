//import logo from './logo.svg';
import './App.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from './img/1.jpg';
import image2 from './img/2.jpg';
import image3 from './img/3.jpg';

function App() {
  return (
    <div className="App">
      <AliceCarousel autoPlay autoPlayInterval="3000">
        <img src={image1} className='sliderimg' alt=""/> 
        <img src={image2} className='sliderimg' alt=""/> 
        <img src={image3} className='sliderimg' alt=""/> 
      </AliceCarousel>
  
    </div>
  );
}

export default App;
