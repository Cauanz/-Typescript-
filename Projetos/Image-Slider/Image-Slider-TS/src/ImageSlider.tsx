import { useState } from "react"
import './ImageSlider.css'

interface imagesObj {
   id: number,
   src: string,
   alt: string
}

export default function ImageSlider({ images }: { images: imagesObj[] }) {
   const [imageIndex, setImageIndex] = useState(0);

   function nextImage() {
      setImageIndex((index) => {
            if (images.length - 1 === imageIndex) {
               return 0
            }
            return ++index
         }
      )
   }

   function previousImage() {
      setImageIndex((index) => {
            if (index === 0) {
               return images.length - 1;
            }
            return --index
         }
      )
   }


   return (
      <div className="container">
      <div className="image">
         {images.map(({id, src, alt}, index) => (
            <img key={id} src={src} alt={alt} aria-hidden={index !== imageIndex} style={{ translate: `${-100 * imageIndex}%` }} />
         ))}
      </div>
      
         <button onClick={nextImage} className="nextBtn"><ion-icon name="caret-forward-outline"></ion-icon></button>
         <button onClick={previousImage} className="previousBtn"><ion-icon name="caret-back-outline"></ion-icon></button>

         <div className="slider">
         </div>
   </div>
   )
}