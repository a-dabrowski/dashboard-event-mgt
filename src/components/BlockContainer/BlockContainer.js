import React from 'react';
import styled from 'styled-components';


const Component = styled.div`
  background-color: #33374c;
  border-radius: 4px;
  padding: 10px;
  margin: 10px;
  width: ${props => props.size ? props.size : 'auto'};
`;

const BlockContainer = (props) => (
  <Component {...props}>
    {props.children}
  </Component>
);


export default BlockContainer;
