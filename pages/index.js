import Image from "next/image";
import { useEffect, useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaPhoneAlt, FaSpotify, FaWhatsapp } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import styled from "styled-components";

import { Article, ArticleHeader } from "../components/base/Article";
import { ButtonLink, ButtonWithIcon } from "../components/base/Buttons";
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

      <Main style={{
        paddingTop: "15vh",
      }}>
        <Section>
          <SectionHeader>
            <HeadingOne>
              Olá! Somos a <Mark>SCD</Mark><br></br>Escola de Dança.<br></br>
              <Mark>Fizemos um <br></br>Site Novo</Mark><br></br>
              para receber você
            </HeadingOne>
          </SectionHeader>

          <Article style={{ textAlign: "center" }}>
            <ButtonLink href="https://scdescoladedanca.com.br/">Visitar Site Novo</ButtonLink>
          </Article>
        </Section>
      </Main>
    </Style>
  );
}

const Main = styled.main`
  display: block;
  max-width: ${DEVICES.TABLET};
  margin: auto;
  min-height: 100vh;
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
