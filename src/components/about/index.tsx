import React from "react";
import AboutStyles, {
    AboutContainer,
    AboutText,
    AboutImage,
} from "./about.styles";

const About = () => {
    return (
        <AboutStyles id="sobre">
            <div className="container">
                <AboutContainer>
                    <AboutText>
                        <h2>Sobre mim</h2>
                        <p>
                            Olá, meu nome é Nathalia Cristina de Lima, tenho 24
                            anos, nascida e criada na cidade do Recife,
                            Pernambuco, sou recém formada em Ciência da
                            Computação pela Universidade Católica de Pernambuco,
                            atuando como Desenvolvedora Pleno na Compasso UOL.
                            <br />
                            <br />
                            Já atuei anteriormente com tecnologias como
                            Javascript e suas frameworks, React e NodeJS por
                            exemplo, PHP com o framework Laravel e os CMS Drupal
                            e Liferay, Banco de Dados com o Mongodb, além de
                            utilizar ferramentas como Docker e Jenkins. E hoje
                            parto para um novo desafio na Compasso.
                            <br />
                            <br />
                            Conheci o mundo da programação Web à 10 anos, então
                            quando eu tinha 14 anos eu estava brincando de criar
                            layout para blogs. Em 2010 houve um boom em relação
                            a conteúdo sobre CSS e HTML, porque nessa época toda
                            adolescente queria ter um blog e a melhor parte de
                            ter um blog era customizar a cara dele. Então grande
                            partes dos blogs era ensinando a customização dos
                            mesmos, logo esse foi meu primeiro contato com esse
                            tipo de conteúdo e acabou que eu gostava de ter um
                            blog mais pra mudar e mudar o layout dele do que pra
                            criar conteúdo.
                            <br />
                            <br />
                            Desde então eu desbravei a internet para aprender
                            tudo relacionado com CSS e HTML, e já usava
                            Javascript e nem fazia ideia do que era linguagem de
                            script. Isso acabou se tornando um hobby pra mim e
                            depois de alguns anos eu ampliei meus conhecimentos,
                            entendi o que era front e back e me especializei em
                            desenvolvimento web como um todo e o que antes era
                            um hobby virou minha base de conhecimento para algo
                            bem maior.
                        </p>
                    </AboutText>
                    <AboutImage>
                        <div className="nath-cover"></div>
                    </AboutImage>
                </AboutContainer>
            </div>
        </AboutStyles>
    );
};

export default About;
