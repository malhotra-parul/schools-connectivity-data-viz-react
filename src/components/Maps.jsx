import React, { Fragment } from "react";
import styled from "styled-components";
import ControlPanel from "./ControlPanel";
import Card from "./Card";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import ClockLoader from "react-spinners/ClockLoader";

import ReactMapGl, {
  Marker,
  Popup,
  Source,
  Layer,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
} from "react-map-gl";

const Maps = ({
  school,
  loading,
  busStops,
  onClickCard,
  viewport,
  setViewport,
  setSelectedPopup,
  selectedPopup,
  closePopup,
  setSchoolPopup,
  schoolPopup,
  colorMarker,
}) => {

    if(loading){
        return <div style={{ display: 'flex', 
        justifyContent: 'center', 
        alignItms: 'center',
        height: '100%'}}><ClockLoader size={150}
                                color={"#F5A623"}
                                loading={loading}
                                /></div>
    }

  return (
    <DIV>
      
      {!loading && busStops && (
        <>
          <ListOfBusStops>
            {busStops.map((busStop, index) => {
              return (
                <Card onClickCard={onClickCard} key={index} busStop={busStop} />
              );
            })}
          </ListOfBusStops>
          <MapDiv>
            <ReactMapGl
              {...viewport}
              mapStyle="mapbox://styles/paruldev/ckg1quap7008v19mkbt1i3oag"
              onViewportChange={(viewport) => setViewport(viewport)}
              mapboxApiAccessToken="pk.eyJ1IjoicGFydWxkZXYiLCJhIjoiY2tmdGtseGJuMHg2YTJzbXp5d293anN1cCJ9.4u_FXzVGzLxERaVv0QhiMA"
            >
              <Source
                id="polygon"
                type="geojson"
                data="https://raw.githubusercontent.com/datameet/PincodeBoundary/master/Bangalore/boundary.geojson"
              >
                <Layer
                  id="data"
                  type="fill"
                  source="polygon"
                  paint={{
                    "fill-color": "#dbe4f7",
                    "fill-opacity": 0.1,
                  }}
                />
              </Source>
              {!loading &&
                busStops &&
                busStops.map((busStop, index) => {
                  return (
                    <Fragment key={index}>
                      <Marker
                        key={busStop._id}
                        latitude={busStop.geometry.coordinates[1]}
                        longitude={busStop.geometry.coordinates[0]}
                      >
                        <LocationOnOutlinedIcon
                          className={colorMarker === busStop ? "colored" : null}
                          onMouseEnter={() => setSelectedPopup(busStop)}
                          onMouseLeave={() => setSelectedPopup(null)}
                          onClick={() => setSelectedPopup(busStop)}
                          alt="bus_stops"
                          style={{
                            fontSize: "32px",
                            color: `${
                              colorMarker === busStop ? "#ee5861" : "#5a667a"
                            }`,
                            transition: "color 0.5s ease",
                          }}
                        />
                      </Marker>
                      {selectedPopup && (
                        <Popup
                          tipSize={5}
                          anchor="bottom-right"
                          longitude={selectedPopup.geometry.coordinates[0]}
                          latitude={selectedPopup.geometry.coordinates[1]}
                          closeOnClick={false}
                          onClose={closePopup}
                          className="busStopPopup"
                        >
                          <p>
                            Bus Stop: <em>{selectedPopup.properties.name}</em>
                          </p>
                        </Popup>
                      )}
                    </Fragment>
                  );
                })}

              {!loading && school && (
                <>
                  <Marker
                    latitude={school.geometry.coordinates[1]}
                    longitude={school.geometry.coordinates[0]}
                  >
                    <MyLocationIcon
                      onMouseEnter={() => setSchoolPopup(school)}
                      onMouseLeave={() => setSchoolPopup(null)}
                      onClick={() => setSchoolPopup(school)}
                      alt="school"
                      style={{
                        fontSize: "42px",
                        color: "#d3931d",
                      }}
                    />
                  </Marker>
                  {schoolPopup && (
                    <Popup
                      tipSize={5}
                      anchor="bottom-right"
                      longitude={school.geometry.coordinates[0]}
                      latitude={school.geometry.coordinates[1]}
                      closeOnClick={false}
                      onClose={closePopup}
                      className="schoolPopup"
                    >
                      <p>
                        School Name :
                        <br />
                        <em>{school.name}</em>
                        <br />
                        <em>{school.address}</em>
                      </p>
                    </Popup>
                  )}
                </>
              )}

              <div style={fullscreenControlStyle}>
                <FullscreenControl />
              </div>
              <div style={navStyle}>
                <NavigationControl />
              </div>
              <div style={scaleControlStyle}>
                <ScaleControl />
              </div>

              <ControlPanel />
            </ReactMapGl>
          </MapDiv>
        </>
      )}
    </DIV>
  );
};
export default Maps;

const fullscreenControlStyle = {
  position: "absolute",
  top: 36,
  left: 0,
  padding: "10px",
};

const navStyle = {
  position: "absolute",
  top: 72,
  left: 0,
  padding: "10px",
};

const scaleControlStyle = {
  position: "absolute",
  bottom: 36,
  left: 0,
  padding: "10px",
};

const DIV = styled.div`
  grid-row: 1/3;
  grid-column: 2;
  display: grid;
  grid-template-rows: 130px calc(100% - 130px);
  margin: 0;
  padding: 0;
`;

const MapDiv = styled.div`
  grid-row: 2/3;
  max-width: calc(100%);
  margin: 0;
  padding: 0;
  -webkit-box-shadow: 5px 5px 11px 0px rgba(50, 50, 50, 0.24);
  -moz-box-shadow: 5px 5px 11px 0px rgba(50, 50, 50, 0.24);
  box-shadow: 5px 5px 11px 0px rgba(50, 50, 50, 0.24);
  border-radius: 10px;
`;

const ListOfBusStops = styled.div`
  display: flex;
  width: 100%;
  height: 125px;
  margin: 0;
  padding: 0;
  align-items: center;
  grid-row: 1/2;
  max-width: calc(100%);
  overflow-x: scroll;
  -webkit-box-shadow: 5px 5px 11px 0px rgba(50, 50, 50, 0.24);
  -moz-box-shadow: 5px 5px 11px 0px rgba(50, 50, 50, 0.24);
  box-shadow: 5px 5px 11px 0px rgba(50, 50, 50, 0.24);
  border-radius: 10px;
  position: relative;
`;
