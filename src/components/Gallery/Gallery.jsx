import React, {useState, useEffect} from 'react'
import Title from '../Title/Title'
import Card from './Card';
import GalleryData from './GalleryData';
import './Gallery.css'
import GalleryText from './GalleryText';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar'
import Header from '../Navbar/Header'
import BounceLoader from "react-spinners/BounceLoader";



const Gallery = () => {

  const [loading, setLoading] = useState(false)
  useEffect(() => {
      setLoading(true)
      setTimeout(() => {
          setLoading(false)
      }, 2500)

  }, [])

  return (
    <>  
    <Navbar />
    <Header />

    {
        loading?
        <div className='loaderCenter'>
        <BounceLoader
        color="#31b675"
        loading={loading}
        size={80}
        />
        </div>
            :
            <> 
        <Title />
        <div className="gallery top">
          <GalleryText />
          <div>
            <div className="container allcards">
                <Card className="bottom"/>
            </div>
            </div>
        </div>
        </>
        }
        <Footer />
    </>
  );
}

export default Gallery