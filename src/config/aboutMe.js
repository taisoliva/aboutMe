import styled from "styled-components"
import gif from "../assets/programer.gif"
import { Email, GitHub, LinkedIn } from "@mui/icons-material"
import { Link } from "@mui/material"

const Imagem = styled.div`
width: 100px;
height: 300px;
margin-top: 10px;
`

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`
const Icone = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
`

const aboutMe = [
    {
        title: 'Sobre Mim',
        content: <div style={{ lineHeight: '1.6' }}>
            Olá, eu me chamo Taís Letícia Carvalho, sim meu nome é composto ahahaha,
            tenho 24 anos, sou uma pessoa que gosta de ouvir e ajudar pessoas, e por esse motivo
            estou migrando de área, saindo do universo da matemática e mergulhando de cabeça nesse mundo da tecnologia.
            Acredito que a tecnologia facilita a vida das pessoas, e eu quero juntamente com meu conhecimento ser uma facilitadora na vida das pessoas.
            <br /> <br />
            Atualmente, curso desenvolvimento web full stack na Driven Education e lá tive oportunidade de não só aprender sobre Front-End utilizando
            o framework React como aprendi tecnologias de back-End como mongoDB, postgreSQL, prismaORM, APIRest, Nodejs, dentre outras.
            <br /> <br />
            Em 2021, me formei em Matemática com ênfase em Matemática Computacional, pela Universidade Federal Fluminense, lá obtive um dos meus primeiros contatos com programação,
            comecei programando na linguagem C, e logo depois vi um pouco sobre Programação Orientada a Objetos com C++ e Java, tudo isso voltado para o universo da Matemática. Sou muito grata a este curso
            pois tive oportunidades de fazer iniciação científica, participar de pesquisa acadêmica e até mesmo ir a congressos e simpósios, tudo isso me ajudou a desenvolver um raciocínio lógico.
            <br /> <br />
            Até então achava que a área de dados seria uma boa para mim, porém quando tive meu primeiro contato com HTML e CSS fiquei encantada, pois vi que gosto de desenvolver e usar minha critiavidade para tal.
            Então decidi embarcar nesse mundo do desenvolvimento e encontrei na driven minha oportunidade de aprender de maneira intensiva.
        </div>
    },
    {
        title: 'Data de Nascimento',
        content: 'Nasci em 16/09/1998 e tenho 24 anos, em breve 25!',
    },
    {
        title: 'Localização',
        content: 'Atualmente moro no interior do estado do Rio de Janeiro na cidade de Volta Redonda',
    },
    {
        title: 'Hobbies',
        content: <div>
            Amo a série Friends, já assisti várias vezes e nunca me canso, gosto dela porque me permite ver como era o mundo nos anos 2000.
            <br /> <br />
            Gosto muito de games, mais específico me perco jogando os jogos antigos da nitendo, como super mario world e Donkey Kong.
            <br /> <br />
            Meu momento terapeutico é cozinhar, gosto de cozinhar, mas sou uma negação para doce, minha especialidade é lasanha de carne.
            <br /> <br />
            Por fim, gosto de praia, ter contato com a natureza e claro uma boa companhia do meu lado, seja minha família ou meu namorado.
        </div>
    },
    {
        title: 'Trabalho Voluntário',
        content: <div>
            Há mais de 6 anos sou voluntária em projetos sociais numa igreja chamada Projeto Vida, aqui da minha cidade.
            <br /> <br />
            Nos trabalhos sociais que participei, pude desenvolver minha comunicação e habilidades sociais para com as outras pessoas, aprendi a ouvir pessoas e ajudar no que fosse preciso.
            Com relação as habilidades técnicas, aprendi sobre comunicação, médias sociais, como projeção, fotos, vídeos, e transmissão online. Também pude
            ensinar adolescentes e jovens ensinos bíblicos, treinar novos voluntários e aprendi a lidar com pessoas nesse tempo, tudo isso em prol dos projetos sociais.
            <br /> <br />
            Por isso me condidatei a esse voluntariado, pois sei que quando servimos temos a oportunidade de aprender em todas as áreas.
        </div>
    },
    {
        title: 'Metas',
        content: <div>
            Quero aprender mais sobre React e técnicas para deixar os desenvolvimentos mais acessiveis ao usuário, além de poder me conectar com pessoas, conhecer suas histórias e claro, ajudar no que for preciso.
            <br /> <br />
            Minha meta profissional é ser uma desenvolvedora full stack que domina bem tanto as habilidades de front quanto de back, é para isso é necessário estudo, e desenvolver projetos nessas áreas. Por isso busco oportunidades onde posso aprender mais sobre.
            <br /> <br />
            Sou uma eterna estudante.
        </div>
    },
    {
        title: 'Contatos',
        content: <div>
            Você pode entrar em contato comigo por:
            <Icone style={{color: 'black'}}>
                <Email /> tais15oliva@gmail.com
            </Icone>
            <Link href="https://www.linkedin.com/in/ta%C3%ADs-let%C3%ADcia-carvalho-13b217201/" target="_blank" rel="noopener" style={{ textDecoration: 'none', color: 'black' }}>
                <Icone>
                    <LinkedIn style={{ color: 'rgb(10, 103, 191)' }} /> LinkedIn
                </Icone>
            </Link>
            <Link href="https://github.com/taisoliva" target="_blank" rel="noopener" style={{ textDecoration: 'none', color: 'black' }}>
                <Icone>
                    <GitHub  /> Portifólio
                </Icone>
            </Link>

        </div>
    },
    {
        title: 'Agradecimento',
        content:

            <Container>
                <div>
                    Agradeço pela oportunidade de falar um pouco sobre mim, obrigada por você ter lido até aqui!
                </div>
                <Imagem>
                    <img src={gif} />
                </Imagem>
            </Container>

    }
]

export default aboutMe

