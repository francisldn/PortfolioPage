import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import OpenSourceProjects from '../components/Opensourceproject/Opensource';
import Learning from '../components/Learning/Learning';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <OpenSourceProjects/>
      <Technologies />
      <Timeline />
      <Learning />
    </Layout>
  );
};

export default Home;
