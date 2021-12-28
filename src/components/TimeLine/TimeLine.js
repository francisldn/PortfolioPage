import React from 'react';
import { Section, SectionText, SectionTitle, SectionDivider } from '../../styles/GlobalComponents';
import {SectionYear} from './TimeLineStyles'
const Timeline = () => {

  return (
    <Section id="about">
      <div>
      <SectionDivider />
      <br />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        <SectionYear>April 2021</SectionYear>
        <p>Started learning Solidity and web development and worked as a freelance blockchain developer</p>
      </SectionText>
      </div>
    </Section>
  );
};

export default Timeline;
