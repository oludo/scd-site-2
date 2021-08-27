import Image from "next/image";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import styled from "styled-components";

import { Article } from "../../components/base/Article";
import { ButtonWithIcon } from "../../components/base/Buttons";
import { Card, CardWithContrast } from "../../components/base/Cards";
import { Section, SectionHeader } from "../../components/base/Sections";
import {
  HeadingOne,
  HeadingThree,
  HeadingTwo,
  Mark,
  Paragraph,
} from "../../components/base/Typography";

import {
  Service,
  ServiceHeader,
  ServiceImageContainer,
} from "../../components/articles/Service";
import {
  Testimonial,
  TestimonialImage,
  TestimonialInfo,
  TestimonialQuote,
} from "../../components/articles/Testimonial";

import Meta from "../../components/utils/Meta";
import Style from "../../components/utils/Style";

import { DEVICES } from "../../theme";
import { app } from "../../app";

const WppBtn = ({ ...rest }) => (
  <ButtonWithIcon icon={<FaWhatsapp />} {...rest} />
);

export default function Lesson({
  title,
  url,
  headingOne,
  messageOne,
  headingTwo,
  messageTwo,
}) {
  useEffect(() => {
    app.initialize();
  }, []);

  return (
    <Style>
      <Meta
        siteName="SCD - Escola de Dança"
        title={title}
        description="Olá! Somos o SCD. Uma Escola de Dança focada em te ensinar a dançar para a vida ou para um momento especial do zero, mesmo que você não leve jeito."
        url={url}
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
            <HeadingOne>{headingOne}</HeadingOne>
          </SectionHeader>

          <Article style={{ textAlign: "center" }}>
            <WppBtn
              style={{
                marginTop: "1rem",
              }}
              onClick={() => app.goToWhatsapp({ message: messageOne })}
            >
              Quero aprender
            </WppBtn>
          </Article>
        </Section>

        <Section>
          <SectionHeader>
            <HeadingTwo>{headingTwo}</HeadingTwo>
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

            <WppBtn onClick={() => app.goToWhatsapp({ message: messageTwo })}>
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
                    <i>Aluno do SCD</i>
                  </small>
                </Paragraph>
              </TestimonialInfo>
            </Testimonial>
          </CardWithContrast>
        </TestimonialSection>
      </Main>
    </Style>
  );
}

const Main = styled.main`
  display: block;
  max-width: ${DEVICES.TABLET};
  margin: auto;
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
