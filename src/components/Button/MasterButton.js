import React from 'react';
import styled from 'styled-components';

const CtaButton = styled.button`
  background-color: #7b3fed;
  color: #fff;
  font-weight: 600;
  padding: 16px 24px;
  border: none;
`;

const MasterButton = (props) => (
  <CtaButton>
    { props.children }
  </CtaButton>
);
export default MasterButton;
