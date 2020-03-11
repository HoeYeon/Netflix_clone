import React, { useState } from "react";
import styled from "styled-components";
const TabList = styled.div`
  display: flex;
`;
const Tab = styled.div`
  text-align: center;
  justify-content: center;
  padding: 5px;
  height: 30px;
  width: 100px;
  font-size: 18px;
  color: ${props => (props.current ? "#dfe6e9" : "#2d3436")};
  background-color: ${props => (props.current ? "#2d3436" : "#dfe6e9")};
`;

const InfoTab = () => {
  const [tab, setTab] = useState("overview");
  return (
    <TabList>
      <Tab
        current={tab === "overview"}
        onClick={() => {
          setTab("overview");
        }}
      >
        Overview
      </Tab>
      <Tab
        current={tab === "trailer"}
        onClick={() => {
          setTab("trailer");
        }}
      >
        Trailer
      </Tab>
    </TabList>
  );
};

export default InfoTab;
