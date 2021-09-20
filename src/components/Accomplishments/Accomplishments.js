import React from 'react';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';
const data = [
  {
    number: 20,
    text: 'Open Source Projects',
    text2: '10 Pull Requests',
  },
  {
    number: 1000,
    text: 'Students',
  },
  {
    number: 10,
    text: 'Github Followers',
  },
  {
    number: 400,
    text: 'Github Stars',
  },
];

const Accomplishments = () => {
  return (
    <Section>
      <SectionTitle>Personal Achievements</SectionTitle>
      <Boxes>
        {data.map((card, index) => {
          return (
            <Box key={index}>
              <BoxNum>{`${card.number}+`}</BoxNum>
              <BoxText>{card.text}</BoxText>
              {card.text2 && <BoxText>{card.text2}</BoxText>}
            </Box>
          );
        })}
      </Boxes>
    </Section>
  );
};

export default Accomplishments;