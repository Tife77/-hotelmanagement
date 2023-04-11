import React ,{ useState } from 'react'
import './Gallery.css'



const Card = (props) => {
  const [popup, setPopup] = useState(false)
  const toggleModal = () => {
    setPopup(!popup)
  }
  return (
    <>
      <div className="items">
        <div className="img" onClick={toggleModal}>
            <img src={props.images} alt="" />
        </div>
        <div className="title">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
      </div>

      {popup && (
      <div className="popup">
        <div className="hide">
          <div className="popup-content">
            <button onClick={toggleModal}>Close</button>
            <img src= {props.images} alt="" />
          </div>
        </div>
      </div>
      )}
    </>
  )
}

export default Card