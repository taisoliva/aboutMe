import { useEffect} from 'react';
import Typography from '@mui/material/Typography';
import styled, { keyframes } from 'styled-components';
import '@fontsource/roboto/400.css';
import aboutMe from '../config/aboutMe';
import ListAboutMe from './ListAboutMe';
import { Paper } from '@mui/material';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(10px);
  }
`;

const AnimatedText = styled(Typography)`
  opacity: 0;
  transform: translateY(20px);
  animation: ${fadeIn} 3s ease both;
  color: white;
  font-family: "Roboto";
`;

const AnimatedTextComponent = () => {
  useEffect(() => {
    const element = document.querySelector('.animated-text');
    element.style.opacity = 1;
    element.style.transform = 'translateY(0)';
  }, []);
  return (
    <ContainerAbout className="animated-text">
      <AnimatedText variant="h4" style={{ padding: '5px', marginBottom:'15px' }}>
        Olá, que bom ter você por aqui! <br /> Estou muito feliz em poder compartilhar mais sobre mim com você!
      </AnimatedText>
        {aboutMe.map((item, index) => <ListAboutMe key={index} title={item.title} content={item.content} />)}
    </ContainerAbout>

  );
};

export default AnimatedTextComponent;

const ContainerAbout = styled.div`
  width:50%;
  animation: ${fadeIn} 3s ease both;
`
