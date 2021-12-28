import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './OpensourceStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { openSourceProjects } from '../../constants/constants';

const OpenSourceProjects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>
      Open-Source Projects Involvement
    </SectionTitle>
    <GridContainer>
      {openSourceProjects.map(({id, image, title, description, tags, website, source})=> (
        <BlogCard key={id}>
          <Img sec={image}/>
          <TitleContent>
            <HeaderThree title>
              {title}
            </HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag,i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={website}>Frontend</ExternalLinks>
            <ExternalLinks href={source}>Code</ExternalLinks>
          </UtilityList>
          </BlogCard>
      ))}
      </GridContainer>
  </Section>
);

export default OpenSourceProjects;