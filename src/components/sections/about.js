import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'Vue JS',
    'Nuxt JS',
    'React JS',
    'Next JS',
    'Node.js',
    'Express JS',
    'ChatGPT API',
    'LLM',
    'AWS',
    'Docker',
    'Pinia',
    'Redux',
    'Vuex',
    'Python',
    'Flask',
    'Laravel',
    'TailwindCSS',
    'Bootstrap4',
    'Vuetify',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello, I’m Sukanta — a Fullstack Engineer based in Berlin, Germany, with a Bachelor's
              degree in Computer Science and Telecommunication Engineering. I enjoy building
              meaningful web experiences that bring real value to users.
            </p>

            <p>
              With expertise in both frontend and backend development, I bring a holistic approach
              to problem-solving and product building.
            </p>

            <p>
              I graduated from{' '}
              <a href="https://nstu.edu.bd" target="_blank" rel="noreferrer">
                Noakhali Science and Technology University
              </a>
              , a renowned public university in Bangladesh. Both my degree and university are
              officially recognized by the German authority{' '}
              <a
                href="https://drive.google.com/file/d/15w9l2jASGbfYssJWfysJDZ9-exCEbzWW/view?usp=sharing"
                target="_blank" rel="noreferrer">
                ZAB
              </a>
              .
            </p>

            <p>
              Throughout my journey as a developer, I've built several useful and impactful projects
              — both for companies and clients. I'm always open to collaborating with fellow
              developers, creative minds, and forward-thinking teams. Let’s connect on{' '}
              <a href="https://www.linkedin.com/in/iamsukanta/">LinkedIn</a>!
            </p>

            <p>Here are some technologies I’ve been working with recently:</p>

            {/* <p>
              Hello, I’m Sukanta - a Berlin, Germany based Fullstack Engineer with a bachelor's degree in Computer
              Science and Telecommunication Engineering. I enjoy creating things for the web which is beneficial to real users.
              My expertise in both areas frontend and backend, made me a Fullstack Engineer. 

              I have completed my graduation from <a href='https://nstu.edu.bd' target='_blank'>Noakhali Science and Technology University</a>, 
              which is a very well known public University of Bangladesh. My Degree and University are both verified by German Authority 
              <a href='https://drive.google.com/file/d/15w9l2jASGbfYssJWfysJDZ9-exCEbzWW/view?usp=sharing' target='_blank'>ZAB</a>

              I have developed some interesting and usefull projects for my company as well as my client's throughout my entire developer journey. I am always open to collaborate with fellow developers, clients and visionary people. Let's connect through <a href='https://www.linkedin.com/in/iamsukanta/'>Linkedin</a>.
            </p>

            <p>Here are a some technologies I’ve been working with recently:</p> */}
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
