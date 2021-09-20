import Image from 'next/image';
import React from 'react';
import {
  SectionDivider,
  SectionText,
  SectionTitle
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { HeroSection, LeftSection, RightSection } from './HeroStyles';

const Hero = (props) => {
  return (
    <>
      <HeroSection>
        <LeftSection>
          <SectionTitle main>
            Welcome To <br />
            My Personal Portfolio
          </SectionTitle>
          <SectionText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. At
            auctor urna nunc id cursus metus aliquam eleifend mi.
          </SectionText>
          <Button onClick={props.handleClick}>Learn More</Button>
        </LeftSection>
        <RightSection>
          <Image
            src="/images/profile.jpeg"
            alt="this is my profile"
            width="500"
            height="600"
          />
        </RightSection>
      </HeroSection>
      <SectionDivider />
    </>
  );
};

export default Hero;