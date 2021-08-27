import Image from "next/image";
import { useEffect, useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaPhoneAlt, FaSpotify, FaWhatsapp } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import styled from "styled-components";

import { Article, ArticleHeader } from "../components/base/Article";
import { ButtonWithIcon } from "../components/base/Buttons";
import { Card, CardWithContrast } from "../components/base/Cards";
import { Chip } from "../components/base/Chips";
import { Details, DetailsSummary } from "../components/base/Details";
import { IconLink } from "../components/base/Icons";
import { Section, SectionHeader } from "../components/base/Sections";
import { Tab } from "../components/base/Tabs";
import {
  HeadingOne,
  HeadingThree,
  HeadingTwo,
  ListItem,
  Mark,
  Paragraph,
  UnorderedList,
} from "../components/base/Typography";

import {
  Service,
  ServiceHeader,
  ServiceImageContainer,
} from "../components/articles/Service";
import { Shortcuts } from "../components/articles/Shortcuts";
import {
  Testimonial,
  TestimonialImage,
  TestimonialInfo,
  TestimonialQuote,
} from "../components/articles/Testimonial";

import Meta from "../components/utils/Meta";
import Style from "../components/utils/Style";

import { DEVICES } from "../theme";
import { app } from "../app";

const WppBtn = ({ ...rest }) => (
  <ButtonWithIcon icon={<FaWhatsapp />} {...rest} />
);

export default function Home() {
  const [state, setState] = useState({
    currentService: 0,
  });

  function updateState(newState) {
    setState({ ...state, ...newState });
  }

  function setService(index) {
    return function () {
      updateState({ currentService: index });
    };
  }

  function isService(index) {
    return state.currentService === index;
  }

  useEffect(() => {
    app.initialize();
  }, []);

  return (
    <Style>
      <Meta
        siteName="SCD - Escola de Dança"
        title="SCD - Escola de Dança"
        description="Olá! Somos o SCD. Uma Escola de Dança focada em te ensinar a dançar para a vida ou para um momento especial do zero, mesmo que você não leve jeito."
        url="https://www.scdanca.com.br/"
        image={{
          src: "/logo.png",
          type: "image/png",
          width: "350",
          height: "350",
        }}
      />

      <Main>
        <Section>
          <SectionHeader>
            <HeadingOne>
              Olá! Somos o <Mark>SCD</Mark>.<br></br> Te ensinamos a <br></br>
              <Mark>dançar do zero</Mark>
              <br></br> mesmo sendo duro.
            </HeadingOne>
          </SectionHeader>

          <Article style={{ textAlign: "center" }}>
            <WppBtn
              style={{
                marginTop: "1rem",
              }}
              onClick={() =>
                app.goToWhatsapp({
                  message: "Olá! Gostaria de aprender a dançar ...",
                })
              }
            >
              Quero aprender
            </WppBtn>
          </Article>
        </Section>

        <Section>
          <SectionHeader>
            <HeadingTwo>Como podemos te ajudar?</HeadingTwo>
          </SectionHeader>

          <Article>
            <ListOfChips>
              <Chip active={isService(0)} onClick={setService(0)}>
                Dança de Salão
              </Chip>

              <Chip active={isService(1)} onClick={setService(1)}>
                Casamentos
              </Chip>
            </ListOfChips>
          </Article>
        </Section>

        <Tab index={0} current={state.currentService}>
          <Section>
            <SectionHeader>
              <HeadingTwo>
                Aulas de dança de salão feitas <br></br>
                <Mark>para pessoas normais</Mark>
              </HeadingTwo>
            </SectionHeader>

            <Card>
              <Service>
                <ServiceHeader>
                  <ServiceImageContainer>
                    <Image
                      src="/icons/dancing-couple.png"
                      alt="Homem dançando"
                      height={64}
                      width={64}
                      layout="fixed"
                    />
                  </ServiceImageContainer>
                  <HeadingThree>1ª aula grátis</HeadingThree>
                </ServiceHeader>

                <Paragraph>
                  <Mark>Saia dançando na 1ª aula!</Mark> Esse é o nosso
                  compromisso com você.
                </Paragraph>
              </Service>

              <Service>
                <ServiceHeader>
                  <ServiceImageContainer>
                    <Image
                      src="/icons/class.png"
                      alt="Homem dançando"
                      height={64}
                      width={64}
                      layout="fixed"
                    />
                  </ServiceImageContainer>
                  <HeadingThree>
                    A 1ª escola realmente focada no aluno
                  </HeadingThree>
                </ServiceHeader>

                <Paragraph>
                  Muitas escolas insistem em ensinar para os alunos como se eles
                  fosses profissionais! Nós somos{" "}
                  <Mark>100% focados em fazer pessoas normais dançarem</Mark>.
                </Paragraph>
              </Service>

              <Service>
                <ServiceHeader>
                  <ServiceImageContainer>
                    <Image
                      src="/icons/couple.png"
                      alt="Homem dançando"
                      height={64}
                      width={64}
                      layout="fixed"
                    />
                  </ServiceImageContainer>
                  <HeadingThree>Se é dança de salão, está aqui</HeadingThree>
                </ServiceHeader>

                <Paragraph>
                  Não importa o seu estilo, temos a dança perfeita para você:
                </Paragraph>

                <UnorderedList>
                  <ListItem>
                    <Mark>Forró</Mark>
                  </ListItem>

                  <ListItem>
                    <Mark>Samba no Pé</Mark>
                  </ListItem>

                  <ListItem>
                    <Mark>Zouk</Mark>
                  </ListItem>

                  <ListItem>
                    <Mark>Bolero</Mark>
                  </ListItem>

                  <ListItem>
                    <Mark>Soltinho</Mark>
                  </ListItem>

                  <ListItem>
                    <Mark>Samba de Gafieira</Mark>
                  </ListItem>
                </UnorderedList>

                <Paragraph>
                  Não encontrou o que procurava? Entre em contato para ver se
                  sua turma não está te esperando.
                </Paragraph>
              </Service>
              <WppBtn
                onClick={() =>
                  app.goToWhatsapp({
                    message:
                      "Olá! Gostaria de saber mais sobre as aulas de dança de salão.",
                  })
                }
              >
                Quero saber mais
              </WppBtn>
            </Card>
          </Section>

          <TestimonialSection>
            <CardWithContrast>
              <Testimonial>
                <TestimonialQuote>
                  Estar no SCD é revigorante, me desestressa da rotina pesada de
                  trabalho e me dá mais energia pra lidar com os problemas da
                  vida. Estar no SCD é estar feliz, é estar em família! Obrigado
                  por isso.
                </TestimonialQuote>

                <TestimonialImage
                  src="/testimonials/juuliop_.jpg"
                  alt="aluno feliz"
                />

                <TestimonialInfo>
                  <Paragraph>
                    <small>
                      <b>@juuliop_</b>
                      <br></br>
                      <i>Aluno de Samba e Forró</i>
                    </small>
                  </Paragraph>
                </TestimonialInfo>
              </Testimonial>
            </CardWithContrast>
          </TestimonialSection>

          <Section>
            <SectionHeader>
              <HeadingTwo>Tire sua dúvida</HeadingTwo>
            </SectionHeader>

            <FAQ>
              <Article>
                <Card>
                  <Details>
                    <DetailsSummary>
                      <ArticleHeader>
                        <HeadingThree style={{ margin: 0 }}>
                          Posso aprender a dançar, mesmo sendo duro?
                        </HeadingThree>
                      </ArticleHeader>
                    </DetailsSummary>

                    <Paragraph>
                      É normal! Todo mundo que nunca dançou começa duro.{" "}
                      <Mark>
                        Se você sabe balançar para os lados, já consegue dançar
                      </Mark>
                      . Só não sabe como ainda - é para isso que estamos aqui.
                    </Paragraph>
                  </Details>
                </Card>
              </Article>

              <Article>
                <Card>
                  <Details>
                    <DetailsSummary>
                      <ArticleHeader>
                        <HeadingThree style={{ margin: 0 }}>
                          Posso dançar só com quem sabe?
                        </HeadingThree>
                      </ArticleHeader>
                    </DetailsSummary>

                    <Paragraph>
                      Você pode dançar só com pessoas mais avançadas que você,
                      mas aí você vai ser levado para dançar e{" "}
                      <Mark>nunca vai aprender de verdade</Mark>.
                    </Paragraph>

                    <Paragraph>
                      E tem mais... imagina se todo mundo quisesse dançar com
                      quem já sabe. Será que você teria um par? ;)
                    </Paragraph>
                  </Details>
                </Card>
              </Article>

              <Article>
                <Card>
                  <Details>
                    <DetailsSummary>
                      <ArticleHeader>
                        <HeadingThree style={{ margin: 0 }}>
                          Posso dançar só com o meu amorzinho nas aulas em
                          grupo?
                        </HeadingThree>
                      </ArticleHeader>
                    </DetailsSummary>

                    <Paragraph>
                      <Mark>Na hora da aula em grupo, desapega! :)</Mark>
                    </Paragraph>

                    <Paragraph>
                      Nossa metodologia de ensino precisa que os alunos dancem
                      com todos os outros durante as aulas.
                    </Paragraph>

                    <Paragraph>
                      <Mark>Se não conseguir soltar o mozão</Mark>, temos aulas
                      particulares também.
                    </Paragraph>
                  </Details>
                </Card>
              </Article>
            </FAQ>
          </Section>
        </Tab>

        <Tab index={1} current={state.currentService}>
          <Section>
            <SectionHeader>
              <HeadingTwo>
                Deixe esse momento <Mark>ainda mais especial</Mark>
              </HeadingTwo>
            </SectionHeader>

            <Card>
              <Service>
                <ServiceHeader>
                  <ServiceImageContainer>
                    <Image
                      src="/icons/wedding.png"
                      alt="Homem dançando"
                      height={64}
                      width={64}
                      layout="fixed"
                    />
                  </ServiceImageContainer>

                  <HeadingThree>
                    Dance para criar boas lembranças,{" "}
                    <Mark>sem se preocupar</Mark>
                  </HeadingThree>
                </ServiceHeader>

                <Paragraph>
                  A verdade é que{" "}
                  <Mark>organizar um casamento não é fácil</Mark> e fica mais
                  difícil ainda quando a dança se torna uma preocupação
                </Paragraph>

                <Paragraph>
                  <Mark>Vocês não precisam aprender a dançar do zero</Mark> para
                  fazer um casamento lindo e marcante para os seus convidados,
                  se a sua coreografia for ensinada do jeito certo.
                </Paragraph>

                <Paragraph>
                  <Mark>
                    Deixe a dança para quem tem que se preocupar com a dança
                  </Mark>
                </Paragraph>
              </Service>

              <WppBtn
                onClick={() =>
                  app.goToWhatsapp({
                    message:
                      "Olá! Gostaria de saber mais sobre a dança dos noivos",
                  })
                }
              >
                Quero saber mais
              </WppBtn>
            </Card>
          </Section>

          <TestimonialSection>
            <CardWithContrast>
              <Testimonial>
                <TestimonialQuote>
                  Eu não imaginava que meu marido ia conseguir dançar toda a
                  coreografia, mas ela ficou incrível.
                </TestimonialQuote>

                <TestimonialImage
                  src="/testimonials/rsfernan.jpg"
                  alt="aluno feliz"
                />

                <TestimonialInfo>
                  <Paragraph>
                    <small>
                      <b>Rachel Fernandes</b>
                      <br></br>
                      <i>Noiva bem coreografada</i>
                    </small>
                  </Paragraph>
                </TestimonialInfo>
              </Testimonial>
            </CardWithContrast>
          </TestimonialSection>

          <Section>
            <SectionHeader>
              <HeadingTwo>Tire sua dúvida</HeadingTwo>
            </SectionHeader>

            <FAQ>
              <Article>
                <Card>
                  <Details>
                    <DetailsSummary>
                      <ArticleHeader>
                        <HeadingThree style={{ margin: 0 }}>
                          Qual é o valor da minha coreografia?
                        </HeadingThree>
                      </ArticleHeader>
                    </DetailsSummary>

                    <Paragraph>
                      Cada ensaio no SCD sai por apenas <Mark>R$120.00</Mark>.
                    </Paragraph>
                  </Details>
                </Card>
              </Article>

              <Article>
                <Card>
                  <Details>
                    <DetailsSummary>
                      <ArticleHeader>
                        <HeadingThree style={{ margin: 0 }}>
                          Quantos ensaios são necessários?
                        </HeadingThree>
                      </ArticleHeader>
                    </DetailsSummary>

                    <Paragraph>
                      Apenas <Mark>5 ensaios</Mark>!
                    </Paragraph>

                    <Paragraph>
                      Vocês farão a <Mark>dança inteira nos 2 primeiros</Mark>{" "}
                      ensaios e vamos precisar de mais 3 para aperfeiçoar os
                      movimentos e modificar o que for necessário.
                    </Paragraph>
                  </Details>
                </Card>
              </Article>

              <Article>
                <Card>
                  <Details>
                    <DetailsSummary>
                      <ArticleHeader>
                        <HeadingThree style={{ margin: 0 }}>
                          Posso escolher as músicas?
                        </HeadingThree>
                      </ArticleHeader>
                    </DetailsSummary>

                    <Paragraph>
                      Claro! É o seu casamento. Mas tem{" "}
                      <Mark>algumas coisas importantes</Mark> que você deve
                      saber antes.
                    </Paragraph>

                    <Paragraph>
                      Quando a coreografia fica muito grande, além de ser mais
                      fácil de confundir os passos, os seus{" "}
                      <Mark>convidados começam a dispersar</Mark> pelo salão e
                      param de prestar atenção na dança.
                    </Paragraph>

                    <Paragraph>
                      Por isso, gostamos de deixar as danças com no máximo{" "}
                      <Mark>5 minutos</Mark> e até <Mark>3 músicas</Mark> para
                      evitar esses problemas.
                    </Paragraph>
                  </Details>
                </Card>
              </Article>

              <Article>
                <Card>
                  <Details>
                    <DetailsSummary>
                      <ArticleHeader>
                        <HeadingThree style={{ margin: 0 }}>
                          Meu futuro marido não sabe dançar
                        </HeadingThree>
                      </ArticleHeader>
                    </DetailsSummary>

                    <Paragraph>
                      <Mark>Nenhum marido sabe</Mark>, fica tranquila.
                    </Paragraph>
                  </Details>
                </Card>
              </Article>
            </FAQ>
          </Section>
        </Tab>

        <Section>
          <Shortcuts>
            <IconLink
              href="tel:+55(21)99575-8923"
              rel="noreferrer"
              target="_blank"
            >
              <FaPhoneAlt />
            </IconLink>

            <IconLink
              href="https://open.spotify.com/user/12175894617"
              rel="noreferrer"
              target="_blank"
            >
              <FaSpotify />
            </IconLink>

            <IconLink
              href="https://www.instagram.com/scd.danca/"
              rel="noreferrer"
              target="_blank"
            >
              <AiFillInstagram />
            </IconLink>

            <IconLink
              href="https://goo.gl/maps/FMs4QRPLBpcSttLw7"
              rel="noreferrer"
              target="_blank"
            >
              <SiGooglemaps />
            </IconLink>
          </Shortcuts>
        </Section>
      </Main>
    </Style>
  );
}

const Main = styled.main`
  display: block;
  max-width: ${DEVICES.TABLET};
  margin: auto;
`;

const ListOfChips = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 1rem;
`;

const FAQ = styled(Article)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TestimonialSection = styled(Section)`
  display: grid;
  justify-content: center;
  grid-template-columns: 100%;

  @media (min-width: 390px) {
    grid-template-columns: 350px;
  } ;
`;
