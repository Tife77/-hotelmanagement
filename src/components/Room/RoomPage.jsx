import React, {useState, useEffect} from 'react'
import Footer from "../Footer/Footer";
import Header from "../Navbar/Header";
import Navbar from "../Navbar/Navbar";
import MainRoom from "../Room/MainRoom";
import Title from "../Title/Title";
import PulseLoader from "react-spinners/PulseLoader";


  const RoomPage = () => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
  
    }, [])

    return (
      <div>
            <Navbar />
    <Header />

        {
            loading?
            <div className='loaderCenter'>
            <PulseLoader
            color="#31b675"
            loading={loading}
            size={30}
            />
            </div>
            :
            <>
        <Title />
        <MainRoom />
        <Footer />
        </>
  }
      </div>
  );
};

export default RoomPage;
