import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

import { Section, SectionHeader } from "../base/Sections";

import {
  HeadingOne,
  HeadingThree,
  HeadingTwo,
  Paragraph,
} from "../base/Typography";

import { Article, ArticleHeader } from "../base/Article";
import { ButtonWithIcon } from "../base/Buttons";
import { Card, CardWithContrast } from "../base/Cards";
import { Chip } from "../base/Chips";
import { Details, DetailsSummary } from "../base/Details";
import { IconLink } from "../base/Icons";
import { Tab } from "../base/Tabs";

import { Shortcuts } from "../articles/Shortcuts";
import {
  Testimonial,
  TestimonialImage,
  TestimonialInfo,
  TestimonialQuote,
} from "../articles/Testimonial";
import { DEVICES } from "../../theme";
import { FaWhatsapp } from "react-icons/fa";

const WppBtn = ({ ...rest }) => (
  <ButtonWithIcon icon={<FaWhatsapp />} {...rest} />
);

export default function LandingPage({ meta, hero, services, shortcuts }) {
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

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Head>

      <Main>
        <Section>
          <SectionHeader>
            <HeadingOne>{hero.title}</HeadingOne>
          </SectionHeader>

          <Article style={{ textAlign: "center" }}>
            <WppBtn
              style={{
                marginTop: "1rem",
              }}
              onClick={hero.cta.onClick}
            >
              {hero.cta.text}
            </WppBtn>
          </Article>
        </Section>

        <Section>
          <SectionHeader>
            <HeadingTwo>Como podemos te ajudar?</HeadingTwo>
          </SectionHeader>

          <Article>
            <ListOfChips>
              {services.map((service, index) => (
                <Chip
                  key={index}
                  active={isService(index)}
                  onClick={setService(index)}
                >
                  {service.chip}
                </Chip>
              ))}
            </ListOfChips>
          </Article>
        </Section>

        {services.map((service, index) => (
          <Tab key={index} index={index} current={state.currentService}>
            <Section>
              <SectionHeader>
                <HeadingTwo>{service.title}</HeadingTwo>
              </SectionHeader>

              <Card>
                {service.description}
                <WppBtn onClick={service.cta.onClick}>
                  {service.cta.text}
                </WppBtn>
              </Card>
            </Section>

            <TestimonialSection>
              <CardWithContrast>
                <Testimonial>
                  <TestimonialQuote>
                    {service.testimonial.quote}
                  </TestimonialQuote>

                  <TestimonialImage
                    src={service.testimonial.image.src}
                    alt="cliente feliz"
                  />

                  <TestimonialInfo>
                    <Paragraph>
                      <small>
                        <b> {service.testimonial.name}</b>
                        <br></br>
                        <i> {service.testimonial.job}</i>
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
                {service.questions.map((question, index) => (
                  <Article key={index}>
                    <Card>
                      <Details>
                        <DetailsSummary>
                          <ArticleHeader>
                            <HeadingThree style={{ margin: 0 }}>
                              {question.title}
                            </HeadingThree>
                          </ArticleHeader>
                        </DetailsSummary>

                        {question.answer}
                      </Details>
                    </Card>
                  </Article>
                ))}
              </FAQ>
            </Section>
          </Tab>
        ))}

        <Section>
          <Shortcuts>
            {shortcuts.map((shortcut, index) => (
              <IconLink
                key={index}
                href={shortcut.href}
                rel="noreferrer"
                target="_blank"
              >
                {shortcut.icon}
              </IconLink>
            ))}
          </Shortcuts>
        </Section>
      </Main>
    </>
  );
}

const Main = styled.main`
  display: block;
  max-width: ${DEVICES.TABLET};
  margin: auto;
`;

const LogoWrapper = styled.div`
  margin: 0 auto 50px;
  width: 50px;
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
