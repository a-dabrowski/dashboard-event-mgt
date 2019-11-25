import React from 'react';
import styled from 'styled-components';


const Component = styled.div`
  background-color: #33374c;
  position: relative;
  border-radius: 4px;
  padding: 16px;
  margin: 10px;
  width: ${props => props.size ? props.size : 'auto'};
`;

const ContainerCorner = styled.div`
  position: absolute;
  top: 16px;
  right: 10px;
`;

const BlockContainer = (props) => (
  <Component {...props}>
    {!!props.cornerSlot && <ContainerCorner>{props.cornerSlot}</ContainerCorner>}
    {props.children}
  </Component>
);


export default BlockContainer;
