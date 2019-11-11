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
  flex-basis: 15%;
  flex-grow: 0;
  flex-shrink: 0;
  width: 100%;
  background-color: yellow;
`;
const MiddleComponent = styled.div`
  flex-basis: 70%;
  flex-grow: 1;
  width: 100%;
  background-color: green;
`;
const BottomComponent = styled.div`
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: 0;
  width: 100%;
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
