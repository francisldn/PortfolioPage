import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection, emphasis } from './HeroStyles';


const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        A collection of Francisldn's blockchain development portfolios and learning journey.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;