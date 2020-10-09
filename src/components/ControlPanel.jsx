import React from "react";
import styled from "styled-components";

const ControlPanel = () => {
  return (
    <ControlPanelDiv>
      <h4>Connectivity of schools across Bengaluru</h4>
      <p style={{fotSize: '12px'}}>
        Map showing the closest bus stops from a school basis the radius chosen.
        Click on a marker for details.
      </p>
      <p>
        Data source: <a href="https://opencity.in/">Opencity</a>
      </p>
      <div className="source-link">
        <a href="https://github.com/malhotra-parul" target="_new">
          View Code ↗
        </a>
      </div>
    </ControlPanelDiv>
  );
};

export default ControlPanel;

const ControlPanelDiv = styled.div`
 position: absolute;
  top: 0;
  right: 0;
  max-width: 300px;
  background: #fff;
  -webkit-box-shadow: 5px 5px 11px 0px rgba(50, 50, 50, 0.24);
  -moz-box-shadow: 5px 5px 11px 0px rgba(50, 50, 50, 0.24);
  box-shadow: 5px 5px 11px 0px rgba(50, 50, 50, 0.24);
  padding: 12px 24px;
  margin: 20px;
  font-size: 12px;
  line-height: 1.8;
  color: #6b6b76;
  text-transform: uppercase;
  outline: none;
`;


