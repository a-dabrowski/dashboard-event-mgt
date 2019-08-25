import React from 'react';
import styled from 'styled-components';
import BlockContainer from '../BlockContainer';

const CardContainer = styled.div`
  width: 260px;
  height: 230px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardTitle = styled.h6`
  font-size: 12px;
  display: inline-block;
  position: absolute;
  align-self: flex-start;
  text-align: left;
  left: 10px;
  top: 10px;
  margin: 0;
  flex-grow: 0;
  :before {
    position: absolute;
    content: '';
    display: block;
    bottom: -10px;
    left: 0;
    width: 80%;
    height: 6px;
    background-color: #7b3fed;
  }
`;

const MainNumber = styled.h4`
  font-size: 36px;
  text-align: center;
  color: #fff;
  margin: 24px;
`;

const AdditionalContent = styled.p`
  font-size: 10px;
  margin: 0;
`;

const InfoCard = (props) => {
  const { title, mainNumber, additional } = props;
  return (
    <BlockContainer>
      <CardContainer>
        <CardTitle>{title}</CardTitle>
        <MainNumber>{mainNumber}</MainNumber>
        <AdditionalContent>{additional}</AdditionalContent>
      </CardContainer>
    </BlockContainer>
  );
};

export default InfoCard;
