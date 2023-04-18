import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import "./MainRoom.css";
import Navbar from '../Navbar/Navbar'
import Header from '../Navbar/Header'
import BounceLoader from "react-spinners/BounceLoader";


const GroupCard = ({ imgSrc, title, RoomName }) => {


  return (
    <>
    <div className="group-card">
      <div className="gcleft">
      <img src={imgSrc} alt={title} />
      </div>
      <div className="gcright">
        <div>
          <h3 className="pad">{RoomName}</h3>
          <hr />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis nunc tellus, ac blandit arcu dapibus eu. Nulla facilisi. Vestibulum malesuada nulla sit amet ante eleifend egestas. Curabitur eget neque eu velit consectetur malesuada nec ut ipsum. Aliquam sed justo nisi. Duis vel augue purus.</p>
        </div>
      <div className="group-card-button">
      <div className="group-card-buttons">
        <button className="greenbtn">Book Now</button>
        <hr />
        <Link to="/roomDetails"><button className="whitebtn">Check Details</button></Link>
      </div>
      </div>
      </div>
    </div>
    </>
  );
};

const Guests = () => {
  return (
    <div>
      <>
      {/* <hr />
        <div className="centerName">
          <h3>Below are the Guest Rooms</h3>
        </div>
        <hr /> */}
        <GroupCard
          imgSrc="/images/heading.jpg"
          title="Group Card 1"
          RoomName="Standard Room"
        />
        <GroupCard className="reverse"
          imgSrc="/images/room2.jpg"
          title="Group Card 2"
          RoomName="Deluxe Room"
        />
        <GroupCard
          imgSrc="/images/room3.jpg"
          title="Group Card 1"
          RoomName="Connecting Room"
        />
        <GroupCard className="reverse"
          imgSrc="/images/room4.jpg"
          title="Group Card 2"
          RoomName="Accessible Room"
        />
      </>
    </div>
  )
}

const Suites = () => {
  return (
    <div>
      <>
      {/* <hr />
        <div className="centerName">
          <h3>Below are the Suites Rooms</h3>
        </div>
        <hr /> */}

        <GroupCard
          imgSrc="/images/room2.jpg"
          title="Group Card 3"
          RoomName="Deluxe Suites"
        />
        <GroupCard className="reverse"
          imgSrc="/images/room4.jpg"
          title="Group Card 4"
          RoomName="Garden Suites"
        />
      </>
    </div>
  )
}

const Executives = () => {
  return (
    <div>
      <>
      {/* <hr />
        <div className="centerName">
          <h3>Below are the Executive Rooms</h3>
        </div>
        <hr /> */}

        <GroupCard
          imgSrc="/images/room3.jpg"
          title="Group Card 5"
          RoomName="The Chairman's Suite"
        />
        <GroupCard className="reverse"
          imgSrc="/images/room4.jpg"
          title="Group Card 6"
          RoomName="The Executive Suite"
        />
        <GroupCard className="reverse"
          imgSrc="/images/room3.jpg"
          title="Group Card 6"
          RoomName="The Royalty Suite"
        />
        <GroupCard className="reverse"
          imgSrc="/images/room2.jpg"
          title="Group Card 6"
          RoomName="The Crown Suite"
        />
        <GroupCard className="reverse"
          imgSrc="/images/room1.jpg"
          title="Group Card 6"
          RoomName="The Empire Suite"
        />
      </>
    </div>
  )
}


const MainRoom = () => {
  const [activeHeader, setActiveHeader] = useState("Header1");

  const handleHeaderClick = (header) => {
    setActiveHeader(header);
  }
  const [loading, setLoading] = useState(false)
  useEffect(() => {
      setLoading(true)
      setTimeout(() => {
          setLoading(false)
      }, 2500)

  }, [])


  return (

    <>

    
    <div className="up">
    <div className="mainRoom"> 
        <div className="heading">
          <h2>Rooms<span> and </span>Suites</h2>
          <div className="line"></div>
      </div>
      <div>
        <h4>All Rooms below include the following</h4>
      </div>
      <div className="roominc">
        <p>&#10003; Pool Access</p>
        <p>&#10003; Free Parking</p>
        <p>&#10003; Free Breakfast</p>
        <p>&#10003; Restaurant Access</p>
        <p>&#10003; Free Wi-Fi</p>
      </div>
    </div>
<hr />
    <div className="container rooms">
      <div className="app">
        <div className="headers">         
          <button 
            onClick={() => handleHeaderClick("Header1")}
            className={activeHeader === "Header1" ? "active" : ""}
          >
            <h2>Guest</h2>
          </button>
          <button 
            onClick={() => handleHeaderClick("Header2")}
            className={activeHeader === "Header2" ? "active" : ""}
          >
            <h2>Suites</h2>
          </button>
          <button 
            onClick={() => handleHeaderClick("Header3")}
            className={activeHeader === "Header3" ? "active" : ""}
          >
            <h2>Executive</h2>
          </button>
        </div>

        <div className="group-cards">
          {activeHeader === "Header1" && <Guests/>}
          {activeHeader === "Header2" && <Suites/>}
          {activeHeader === "Header3" && <Executives />}
        </div>
      </div>
    </div>
    </div>


    </>
  );
};

export default MainRoom;
