import Accomplishments from '../components/Accomplishments/Accomplishments';
import Hero from '../components/Hero/Hero';
import styled from 'styled-components';
import { Layout } from '../layout/Layout';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.background1};
`

const Home = ()  => {
  return(
    <Layout>
    <Hero/>
    <Accomplishments/>
    </Layout>
  )
}

export default Home