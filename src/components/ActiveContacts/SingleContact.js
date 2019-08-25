import React from 'react';
import styled from 'styled-components';

const ContactName = styled.h6`
  font-size: 18px;
  color: #fff;
  margin: 0;
  margin-bottom: 10px;
`;

const EventsCount = styled.span`
  font-size: 14px;
  color: #fff;
`;

const ContactPhoto = styled.div`
  border-radius: 999px;
  width: 60px;
  height: 60px;
  background-position: center;
  background-size: 100%;
  background-image: url('${props => props.personImg}');
`;

const ContactTexts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 16px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 10px 0;
  border-bottom: 1px solid grey;
  &:last-child {
    border-bottom-color: transparent;
  }

`;

const SingleContact = (props) => {
  const { personImg, name, eventsCount } = props;
  return (
    <Container>
      <ContactPhoto personImg={personImg} />
      <ContactTexts>
      <ContactName>
        {name}
      </ContactName>
      <EventsCount>
        {eventsCount} {eventsCount > 1 ? "Events" : "Event"}
      </EventsCount>
    </ContactTexts>
    </Container>
  );
}

export default SingleContact;
