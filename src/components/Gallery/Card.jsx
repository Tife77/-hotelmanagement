import React ,{ useState } from 'react'
import './Gallery.css'



const Card = (props) => {
  const [popup, setPopup] = useState(false)
  const toggleModal1 = () => {
    setPopup(!popup)
  }
  const toggleModal2 = () => {
    setPopup(!popup)
  }
  const toggleModal3 = () => {
    setPopup(!popup)
  }
  const toggleModal4 = () => {
    setPopup(!popup)
  }
  const toggleModal5 = () => {
    setPopup(!popup)
  }
  const toggleModal6= () => {
    setPopup(!popup)
  }
  return (
    <>
    <div className='container itemss'>
      <div className="items">
        <div className="img" onClick={toggleModal1}>
            <img src="/images/gallery2.jpg" alt="" />
        </div>
        <div className="title">
            <h3>Picture 1</h3>
            <p>This is a lovely image</p>
        </div>
      </div>
      <div className="items">
        <div className="img" onClick={toggleModal2}>
            <img src="/images/gallery-3.jpg" alt="" />
        </div>
        <div className="title">
            <h3>Picture 2</h3>
            <p>This is a lovely image</p>
        </div>
      </div>
      <div className="items">
        <div className="img" onClick={toggleModal3}>
            <img src="/images/gallery3.jpg" alt="" />
        </div>
        <div className="title">
            <h3>Picture 2</h3>
            <p>This is a lovely image</p>
        </div>
      </div>


      {/* {popup && (
      <div className="popup">
        <div className="hide">
          <div className="popup-content">
            <button onClick={toggleModal1}>Close</button>
            <img src= "/images/gallery2.jpg"alt="" />
          </div>
        </div>
      </div>
      )}
      {popup && (
      <div className="popup">
        <div className="hide">
          <div className="popup-content">
            <button onClick={toggleModal2}>Close</button>
            <img src= "/images/gallery3.jpg" alt="" />
          </div>
        </div>
      </div>
      )}
      {popup && (
      <div className="popup">
        <div className="hide">
          <div className="popup-content">
            <button onClick={toggleModal3}>Close</button>
            <img src= "/images/gallery3.jpg" alt="" />
          </div>
        </div>
      </div>
      )} */}
      </div>
    <div className='container itemss itemsss'>
      <div className="items">
        <div className="img" onClick={toggleModal4}>
            <img src="/images/gallery-5.jpg" alt="" />
        </div>
        <div className="title">
            <h3>Picture 1</h3>
            <p>This is a lovely image</p>
        </div>
      </div>
      <div className="items">
        <div className="img" onClick={toggleModal5}>
            <img src="/images/gallery-1.jpg" alt="" />
        </div>
        <div className="title">
            <h3>Picture 2</h3>
            <p>This is a lovely image</p>
        </div>
      </div>
      <div className="items">
        <div className="img" onClick={toggleModal6}>
            <img src="/images/gallery4.jpg" alt="" />
        </div>
        <div className="title">
            <h3>Picture 2</h3>
            <p>This is a lovely image</p>
        </div>
      </div>


      {/* {popup && (
      <div className="popup">
        <div className="hide">
          <div className="popup-content">
            <button onClick={toggleModal4}>Close</button>
            <img src= "/images/gallery-5.jpg" alt="" />
          </div>
        </div>
      </div>
      )}
      {popup && (
      <div className="popup">
        <div className="hide">
          <div className="popup-content">
            <button onClick={toggleModal5}>Close</button>
            <img src= "/images/gallery-1.jpg" alt="" />
          </div>
        </div>
      </div>
      )}
      {popup && (
      <div className="popup">
        <div className="hide">
          <div className="popup-content">
            <button onClick={toggleModal6}>Close</button>
            <img src="/images/gallery4.jpg" alt="" />
          </div>
        </div>
      </div>
      )} */}
      </div>
      </>
  )
}

export default Card