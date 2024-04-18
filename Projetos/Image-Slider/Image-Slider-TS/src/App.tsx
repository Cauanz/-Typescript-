import car1 from '../public/car-1.jpg';
import car2 from '../public/car-2.jpg';
import car3 from '../public/car-3.jpg';
import car4 from '../public/car-4.jpg';
import car5 from '../public/car-5.jpg';
import ImageSlider from './ImageSlider';

interface imagesObj {
  id: number,
  src: string,
  alt: string
}

function App() {

  const images: imagesObj[] = [
    {id: 1, src: car1, alt: "Car 1" },
    {id: 2, src: car2, alt: "Car 2" },
    {id: 3, src: car3, alt: "Car 3" },
    {id: 4, src: car4, alt: "Car 4" },
    {id: 5, src: car5, alt: "Car 5" }
  ]


  return (
    <>
      <ImageSlider images={images} />
    </>
  )
}

export default App
