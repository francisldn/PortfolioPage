import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
            <LinkTitle>Email</LinkTitle>
            <LinkItem href='mailto:fnhh04@gmail.com'>fnhh04@gmail.com</LinkItem>
        </LinkColumn>
        <SocialContainer>
          <SocialIcons href="https://github.com/francisldn">
            <AiFillGithub size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://uk.linkedin.com/in/francis-hui-frm-cfa-crma-6664703a">
            <AiFillLinkedin size="3rem"/>
          </SocialIcons>
        </SocialContainer>
      </LinkList>      
    </FooterWrapper>
  );
};

export default Footer;
