import React from 'react';
import BlockContainer from '../BlockContainer';
import { ComponentTitle } from '../Title/Title';
import SocialMediaItem from './SocialMediaItem';
import Row from '../Row';


const SocialMedia = (props) => {
  const { socialMediaItems } = props;
  return (
    <BlockContainer>
      <ComponentTitle>
        Social Media
      </ComponentTitle>
      <Row>
      { socialMediaItems.map((item, idx) => (
        <SocialMediaItem 
          key={idx} 
          logo={item.logo} 
          number={item.number} 
          text={item.text} 
        />
      ))}
    </Row>
    </BlockContainer>
  );
};

export default SocialMedia;
