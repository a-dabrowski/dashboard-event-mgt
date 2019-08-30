import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 20px;
  border: 4px solid grey;
  border-radius: 4px;
  margin: 10px 0;
`;

const ContainerTexts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 16px;
`;

const FollowerNumber = styled.h6`
  font-size: 24px;
  margin: 0;
`;

const FollowerText = styled.p`
  font-size: 16px;
  font-weight: 400;
`;

const Logo = styled.div`
  border-radius: 999px;
  width: 90px;
  height: 90px;
  background-position: center;
  background-size: 100%;
  background-image: url('${props => props.logo}');
`;

const SocialMediaItem = (props) => {
  const { logo, number, text } = props;
 return (
  <Container>
    <Logo logo={logo} />
    <ContainerTexts>
      <FollowerNumber>
        { number }
      </FollowerNumber>
      <FollowerText>
        { text }
      </FollowerText>
    </ContainerTexts>
  </Container>
 );
};
export default SocialMediaItem ;
