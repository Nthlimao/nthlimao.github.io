import React from "react";
import Progress from "../progress";
import Icon from "../icon";
import AboutStyles, {
    ContainerContent,
    ContainerResume,
    CardGame,
    CardRole,
    CardPhoto,
    CardTitle,
    SkillTable,
    SkillColumn,
    SkillRow,
    Balloon,
} from "./about.styles";

const About = () => {
    return (
        <AboutStyles>
            <div className="container">
                <ContainerContent>
                    <CardGame>
                        <CardRole>Developer FullStack</CardRole>
                        <CardPhoto
                            src={`${process.env.PUBLIC_URL}/images/profile_picture.png`}
                            alt="nathalia"
                        />
                        <div>
                            <CardTitle>
                                <Icon icon="shield" color="#ffffff" />
                                softskills
                            </CardTitle>
                            <SkillTable>
                                <SkillColumn shrink={3}>
                                    <SkillRow>
                                        <p>Autodidata</p>
                                    </SkillRow>
                                    <SkillRow>
                                        <p>Liderança</p>
                                    </SkillRow>
                                    <SkillRow>
                                        <p>Resiliência</p>
                                    </SkillRow>
                                    <SkillRow>
                                        <p>Team Work</p>
                                    </SkillRow>
                                    <SkillRow>
                                        <p>Comunicação</p>
                                    </SkillRow>
                                    <SkillRow>
                                        <p>Criatividade</p>
                                    </SkillRow>
                                    <SkillRow>
                                        <p>Empatia</p>
                                    </SkillRow>
                                </SkillColumn>
                                <SkillColumn>
                                    <SkillRow>
                                        <Progress width="90%" />
                                    </SkillRow>
                                    <SkillRow>
                                        <Progress width="80%" />
                                    </SkillRow>
                                    <SkillRow>
                                        <Progress width="95%" />
                                    </SkillRow>
                                    <SkillRow>
                                        <Progress width="75%" />
                                    </SkillRow>
                                    <SkillRow>
                                        <Progress width="60%" />
                                    </SkillRow>
                                    <SkillRow>
                                        <Progress width="70%" />
                                    </SkillRow>
                                    <SkillRow>
                                        <Progress width="40%" />
                                    </SkillRow>
                                </SkillColumn>
                            </SkillTable>
                        </div>
                    </CardGame>
                    <ContainerResume>
                        <h3>
                            <Icon icon="sun" color="#4afad3" /> in a few words
                        </h3>
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
                    </ContainerResume>
                    <Balloon>
                        <h4>english level</h4>
                        <p>
                            <b>Intermediário</b>, bom entendimento de fala e
                            leitura, boa conversação e apenas carente na
                            grámatica, mas sem grandes problemas.
                        </p>
                    </Balloon>
                </ContainerContent>
            </div>
        </AboutStyles>
    );
};

export default About;
