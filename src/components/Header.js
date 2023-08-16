import styled from "styled-components"
import '@fontsource/roboto/500.css';

export default function Header () {
    return (
        <ContainerHeader>
            <Title> {"Sobre Mim"} </Title>
        </ContainerHeader>
    )
}

const ContainerHeader = styled.div`
    width: 100%;
    height: 100px;
    background-color: #4682B4;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`

const Title = styled.div`
    display:  flex;
    justify-content: center;
    align-items: center;

    font-family: "roboto";
    font-size: 70px;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`