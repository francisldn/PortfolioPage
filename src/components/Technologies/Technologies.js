import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import {SiBlockchaindotcom} from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
   <div>
    <SectionDivider />
    <br />
      <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with smart contract language such as Solidity and have experience in Javascript libraries/frameworks such as NodeJS and React in the blockchain development world. 
      <br />
      In terms of dev tools, I have used Truffle, Hardhat, Web3.js and Ethers.js
    </SectionText>
    <List>
      <ListItem>
        <SiBlockchaindotcom size = '2.5rem'/>
        <ListContainer>
        <ListTitle>
          Solidity
          </ListTitle>
            <ListParagraph>
              Experience with <br />
              smart contract deployment and testing, with experience in ERC20, ERC721 and ERC1155 standards.
            </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size = '3rem'/>
        <ListContainer>
          <ListTitle>React</ListTitle>
            <ListParagraph>
              Experience with <br />
              React.js
            </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size = '3rem'/>
        <ListContainer>
        <ListTitle>Node</ListTitle>
            <ListParagraph>
              Experience with <br />
              Node
            </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    </div>
  </Section>
);

export default Technologies;
