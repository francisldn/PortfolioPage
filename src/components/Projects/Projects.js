import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const projectDemo = [{
  title: 'Project 1',
  description: 'This is a description of the project'
},
{
  title: 'Project 2',
  description: 'This is a description of the project'
},
{
  title: 'Project 3',
  description: 'This is a description of the project'
}]


const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>
      Projects
    </SectionTitle>
    <GridContainer>
      {projects.map(({id, image, title, description, tags, source, visit, deployed})=> (
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
            <ExternalLinks href={visit}>Frontend</ExternalLinks>
            <ExternalLinks href={source}>Code</ExternalLinks>
            <ExternalLinks href={deployed}>Contract</ExternalLinks>
          </UtilityList>
          </BlogCard>
      ))}
      </GridContainer>
  </Section>
);

export default Projects;