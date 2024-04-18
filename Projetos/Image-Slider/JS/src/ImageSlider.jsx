/* eslint-disable react/prop-types */
import { useState } from "react"
import './ImageSlider.css';


export default function ImageSlider({ images }) {

   const [imageIndex, setImageIndex] = useState(0);

   function nextImage() {
      setImageIndex(index => {
         
         if(images.length - 1 === imageIndex) {
            return 0
         }

         return index + 1
      })
   }

   function previousImage() {
      setImageIndex(index => {
         if (index === 0) {
            return images.length - 1
         }
         return index - 1
      })
   }


   return (
      <>
      <div className="container">
         <div className="image">
            {images.map(({ src, id, alt}, index) => 
               (
                  <img key={id} src={src} alt={alt} aria-hidden={imageIndex !== index} style={{ translate: `${-100 * imageIndex}%` }}/>
               )
            )}
         </div>

            <button onClick={previousImage} className="previousBtn"><ion-icon name="caret-back-outline"></ion-icon></button>
            <button onClick={nextImage} className="nextBtn"><ion-icon name="caret-forward-outline"></ion-icon></button>

            <div className="slider">
               {images.map((_, index) => (
                  <button key={index} onClick={() => setImageIndex(index)} className="dots"><ion-icon name="ellipse-outline"></ion-icon></button>
               ))}
            </div>
      </div>
      </>
   )
}