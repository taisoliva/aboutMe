import { Card, CardMedia } from "@mui/material";
import styled, { keyframes } from "styled-components";
import personal from "../assets/personal.png"
import { useEffect } from "react";

export default function AnimatedImage() {
    useEffect(() => {
        const element = document.querySelector('.animated-image');
        element.style.opacity = 1
        element.style.transform = 'translateX(20px)';
      }, []);

    return (
        <ContainerImage className="animated-image" style={{marginLeft: '20px'}}>
                <Card>
                <CardMedia component="img"
                 height="350"  
                 width="200" 
                image={`${personal}`}
                alt="Imagem" />
                </Card>
        </ContainerImage>

    )
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const ContainerImage = styled.div`
width: 200px;
height: 350px;
animation: ${fadeIn} 3s ease both;
margin-top: 10px;
position: absolute;
right: 5vw;
top: 10%
`