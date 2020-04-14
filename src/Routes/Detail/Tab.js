import React, { useState, useEffect } from "react";
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
  &:hover {
    cursor: pointer;
  }
`;
const Overview = styled.p`
  font-size: 17px;
  opacity: 0.9;
  line-height: 1.5;
  width: 70%;
`;

const Trailer = styled.iframe`
  margin: 10px;
  padding-top: 20px;
  width: 65%;
  height: 50vh;
`;
const MovieBox = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`;
const Wrapper = styled.div`
  @media only screen and (max-width: 600px) {
    width: 100vw;
    position: absolute;
    left: 0px;
    height: 50%;
    padding: 0px;
    margin-top: 5.5em;
  }
  overflow: auto;
  height: 100%;
  padding-top: 20px;
`;

const InfoTab = ({ result }) => {
  console.log("result in tab", result);
  const [tab, setTab] = useState("overview");
  return (
    <div style={{ height: "65%" }}>
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
      <Wrapper>
        {tab === "overview" ? (
          <Overview>{result.overview}</Overview>
        ) : (
          <Trailer
            src={
              result.videos
                ? `https://www.youtube.com/embed/${result.videos.results[0].key}`
                : `https://www.youtube.com/embed/5haSQXYoVwg`
            }
          ></Trailer>
        )}
      </Wrapper>
    </div>
  );
};

export default InfoTab;
