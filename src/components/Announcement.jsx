import styled from "styled-components";
// import React from 'react'

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>Black Friday Sales! Free shipping on orderes over $50</Container>
  );
};

export default Announcement;
