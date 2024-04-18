import './App.css'
import car1 from '../public/car-1.jpg';
import car2 from '../public/car-2.jpg';
import car3 from '../public/car-3.jpg';
import car4 from '../public/car-4.jpg';
import car5 from '../public/car-5.jpg';
import ImageSlider from './ImageSlider';

const images = [
  { src: car1, id: 1, alt: car1 },
  { src: car2, id: 2, alt: car2 },
  { src: car3, id: 3, alt: car3 },
  { src: car4, id: 4, alt: car4 },
  { src: car5, id: 5, alt: car5 }
]

function App() {

  return (
    <>
      <ImageSlider images={images} />
    </>
  )
}

export default App
