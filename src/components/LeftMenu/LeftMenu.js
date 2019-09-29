import React from 'react';
import styled from 'styled-components';
import MasterButton from '../Button';

const LeftMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 90vh;
`;
const TopComponent = styled.div`
  flex-basis: 0 0 15%;
  height: 10%;
  width: 100%;
  background-color: yellow;
`;
const MiddleComponent = styled.div`
  flex-basis: 1 1 70%;
  width: 100%;
  background-color: green;
`;
const BottomComponent = styled.div`
  flex-basis: 0 0 15%;
  width: 100%;
  height: 10%;
  background-color: red;
`;

const LeftMenu = (props) => {
  const { children } = props;
  return (
    <LeftMenuWrapper>
      <TopComponent>
        EventManager
      </TopComponent>
      <MiddleComponent>
        { children }
      </MiddleComponent>
      <BottomComponent>
        <MasterButton>New Task</MasterButton>
      </BottomComponent>
    </LeftMenuWrapper>
  );
};


export default LeftMenu;
