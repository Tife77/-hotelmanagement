import React from 'react'
import Title from '../Title/Title'
import Card from './Card';
import GalleryData from './GalleryData';
import './Gallery.css'
import GalleryText from './GalleryText';

const Gallery = () => {
  return (
    <>  
        <Title />
        <div className="gallery top">
          <GalleryText />
            <div className="container grid semicontainer">
                {GalleryData.map((value) => {
                    return <Card images={value.img} title={value.title} text={value.text} />
                })}
            </div>
        </div>
    </>
  );
}

export default Gallery