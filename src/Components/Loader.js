import React from "react";
import styled from "styled-components";

const Container = styled.div`
  /* height: 100vh;
  width: 100vw; */
  font-size: 40px;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export default () => {
  return (
    <Container>
      <span role="img" aria-label="Loading">
        ⏳
      </span>
    </Container>
  );
};
