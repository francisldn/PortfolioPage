import React from 'react';
import { Section, SectionText, SectionTitle, SectionDivider } from '../../styles/GlobalComponents';
import {SectionYear} from './LearningStyles'

const Learning = () => {

  return (
    
      <Section id="about">
        <div>
        <SectionDivider />
        <br />
        <SectionTitle>Learning Journey</SectionTitle>
        <SectionText>
          <SectionYear>Consensys Blockchain Developer Bootcamp</SectionYear>
          Completed the bootcamp in December 2021 and created a final project - Smart CryptoCurrency Bank
          <SectionYear>Secureum Smart Contract Audit Bootcamp</SectionYear>
          Participated in the Phase 1 of the bootcamp in October-November 2021
        </SectionText>
        </div>
      </Section>
  );
};

export default Learning;
