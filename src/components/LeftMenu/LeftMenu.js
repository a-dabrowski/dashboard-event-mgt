import React from 'react';
import styled from 'styled-components';

const LeftMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 90vh;
`;
const TopComponent = styled.div`
  flex-basis: 0 0 20%;
  width: 100%;
  background-color: yellow;
`;
const MiddleComponent = styled.div`
  flex-basis: 1 1 60%;
  width: 100%;
  background-color: green;
`;
const BottomComponent = styled.div`
  flex-basis: 0 0 20%;
  width: 100%;
  background-color: red;
`;

const LeftMenu = (props) => {
  const { topItem, middleItem, bottomItem } = props;
  return (
    <LeftMenuWrapper>
      <TopComponent>
        { topItem }
      </TopComponent>
      <MiddleComponent>
        { middleItem }
      </MiddleComponent>
      <BottomComponent>
        { bottomItem }
      </BottomComponent>
    </LeftMenuWrapper>
  );
};


export default LeftMenu;
