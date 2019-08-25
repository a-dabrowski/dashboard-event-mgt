import React from 'react';
import styled from 'styled-components';
import BlockContainer from '../BlockContainer';
import SingleContact from './SingleContact';

const ContainerTitle = styled.h5`
  font-size: 18px;
  color: #fff;
  margin: 0;
  font-weight: 800;
  text-transform: uppercase;
  text-align: left;
`;

const ActiveContacts = (props) => {
  const { contactsList } = props;
  return (
    <BlockContainer>
      <ContainerTitle>
        Active Contacts
      </ContainerTitle>
      {
        contactsList.map((contact,idx) => (
          <SingleContact 
            key={`contact-${idx}`}
            personImg={contact.image}
            name={contact.name}
            eventsCount={contact.eventsCount}
          />
 ))
      }
    </BlockContainer>
  );
};

export default ActiveContacts;
