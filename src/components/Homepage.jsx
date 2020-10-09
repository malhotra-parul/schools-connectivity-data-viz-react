import React, { useState, useEffect } from 'react'
import Header from "./Header"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import Maps from "./Maps"
import styled from "styled-components"
import axios from "axios"

const Homepage = () => {
    const [viewport, setViewport] = useState({
        latitude: 12.9791198,
        longitude: 77.5912997,
        zoom: 9,
        width: "100vw",
        height: 'auto',
      });
    
      const [busStops, setBusStops] = useState(null);
      const [loading, setLoading] = useState(false);
      const [selectedPopup, setSelectedPopup] = useState(null);
      const [schoolPopup, setSchoolPopup] = useState(null);
      const [colorMarker, setColorMarker] = useState(null);
    const [school, setSchool] = useState(null);
    const [radius, setRadius] = useState("");

    useEffect(()=>{
        if(school && parseInt(radius)) {
        let schoolResult = {
            geometry: [
              school.geometry.coordinates[1],
              school.geometry.coordinates[0]
            ],
            radiusFromBody: parseInt(radius) || 2
          };
          console.log("schoolResult", schoolResult);
          setViewport({
            latitude: school.geometry.coordinates[1],
            longitude: school.geometry.coordinates[0],
            zoom: 12,
            width: "70vw",
            height: "70vh"
          });
          setLoading(true);
          axios
      .post(
        "https://geojson-backend-api.malhotra-parul.vercel.app/find",
        schoolResult
      )
      .then((res) => {
        setBusStops(res.data.found);
      })
      .catch((err) => {
        console.log(err);
        setBusStops([]);
      })
      .finally(() => setLoading(false));
        }
    
    }, [school, radius]);

    const onSetRadius = (value) => {
        setRadius(value);
    }

    const onSetSchool = (value)=>{
        setSchool(value[0]);
    };

    const closePopup = () => {
        setSelectedPopup(null);
      };
    
      const onClickCard = (busStop) => {
        setViewport({
          latitude: busStop.geometry.coordinates[1],
          longitude: busStop.geometry.coordinates[0],
          zoom: 15,
          width: "70vw",
          height: "70vh"
        });
        setColorMarker(busStop);
      };
    

    return (
        <Page >
            <Header />
            <Sidebar onSetSchool={onSetSchool} onSetRadius={onSetRadius} />
            <Maps school={school} 
                  loading={loading} 
                  busStops={busStops} 
                  onClickCard={onClickCard}
                  viewport={viewport}
                  setViewport={setViewport}
                  setSelectedPopup={setSelectedPopup}
                  selectedPopup={selectedPopup}
                  closePopup={closePopup}
                  setSchoolPopup={setSchoolPopup}
                  schoolPopup={schoolPopup}
                  colorMarker={colorMarker}
                  />
            <Footer />
        </ Page>
    )
}

export default Homepage;

const Page = styled.div`
    display: grid;
    grid-template-rows: 110px calc(100% - 110px -5px);
    grid-template-columns: 430px calc(100% - 438px); 
    grid-gap: 0.4em;
`
