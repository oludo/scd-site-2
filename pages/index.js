import Image from "next/image";
import { useEffect } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaPhoneAlt, FaSpotify } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import styled from "styled-components";

import {
  HeadingThree,
  ListItem,
  Mark,
  Paragraph,
  UnorderedList,
} from "../components/base/Typography";
import LandingPage from "../components/templates/LandingPage";
import { app } from "../app";
import {
  Service,
  ServiceHeader,
  ServiceImageContainer,
} from "../components/articles/Service";

export default function Home() {
  useEffect(() => {
    app.initialize();
  }, []);

  return (
    <Style>
      <LandingPage
        meta={{
          title: "SCD - Escola de Dança",
          description: `Olá! Somos o SCD. Uma Escola de Dança focada em te ensinar a dançar para a vida ou para um momento especial do zero, mesmo que você não leve jeito. Forró. Samba. Dança de Salão. Casamentos. 15 anos.`,
        }}
        hero={{
          title: (
            <>
              Olá! Somos o <Mark>SCD</Mark>.<br></br> Te ensinamos a <br></br>
              <Mark>dançar do zero</Mark>
              <br></br> mesmo sendo duro.
            </>
          ),
          cta: {
            text: "Quero aprender",
            onClick: () =>
              app.goToWhatsapp({
                message: "Olá! Gostaria de aprender a dançar ...",
              }),
          },
          image: {
            src: "/logo.svg",
          },
        }}
        services={[
          {
            chip: "Dança a Dois",
            title: (
              <>
                Aulas de dança a dois feitas <br></br>
                <Mark>para pessoas normais</Mark>
              </>
            ),
            description: (
              <>
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
                    <Mark>Saia dançando na primeira aula!</Mark> Esse é o nosso
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
                    Muitas escolas insistem em ensinar para os alunos como se
                    eles fosses profissionais! Nós somos{" "}
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
                    <HeadingThree>Se é dança a dois, está aqui</HeadingThree>
                  </ServiceHeader>

                  <Paragraph>
                    Não importa o seu estilo, temos a dança perfeita para você:
                  </Paragraph>

                  <UnorderedList>
                    <ListItem>
                      <Mark>
                        <b>Forró</b>
                      </Mark>
                    </ListItem>

                    <ListItem>
                      <Mark>
                        <b>Dança de Salão</b>
                      </Mark>
                    </ListItem>

                    <ListItem>
                      <Mark>
                        <b>Samba de Gafieira</b>
                      </Mark>
                    </ListItem>

                    <ListItem>
                      <Mark>
                        <b>Zouk</b>
                      </Mark>
                    </ListItem>

                    <ListItem>
                      <Mark>
                        <b>Bolero</b>
                      </Mark>
                    </ListItem>

                    <ListItem>
                      <Mark>
                        <b>Soltinho</b>
                      </Mark>
                    </ListItem>
                  </UnorderedList>

                  <Paragraph>
                    Não encontrou o que quer? Entre em contato para ver se sua
                    turma não está te esperando.
                  </Paragraph>
                </Service>
              </>
            ),
            cta: {
              text: "Marcar aula grátis",
              onClick: () =>
                app.goToWhatsapp({
                  message:
                    "Olá! Gostaria de saber mais sobre as aulas de dança a dois.",
                }),
            },
            testimonial: {
              quote:
                "Estar no SCD é revigorante, me desestressa da rotina pesada de trabalho e me dá mais energia pra lidar com os problemas da vida. Estar no SCD é estar feliz, é estar em família! Obrigado por isso.",
              image: {
                src: "/testimonials/juuliop_.jpg",
              },
              name: "@juuliop_",
              job: "Aluno de Samba e Forró",
            },
            questions: [
              {
                title: "Posso aprender a dançar, mesmo sendo duro?",
                answer: (
                  <>
                    <Paragraph>
                      É normal! Todo mundo que nunca dançou começa duro.{" "}
                      <Mark>
                        Se você sabe balançar para os lados, já consegue dançar
                      </Mark>
                      . Só não sabe como ainda - é para isso que estamos aqui.
                    </Paragraph>
                  </>
                ),
              },
              {
                title: "Posso dançar só com quem sabe?",
                answer: (
                  <>
                    <Paragraph>
                      Você pode dançar só com pessoas mais avançadas que você,
                      mas aí você vai ser levado para dançar e{" "}
                      <Mark>nunca vai aprender de verdade</Mark>.
                    </Paragraph>
                    <Paragraph>
                      E tem mais... imagina se todo mundo quisesse dançar com
                      quem já sabe. Será que você teria um par? ;)
                    </Paragraph>
                  </>
                ),
              },
              {
                title:
                  "Posso dançar só com o meu amorzinho nas aulas em grupo?",
                answer: (
                  <>
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
                  </>
                ),
              },
            ],
          },
          {
            chip: "Casamentos",
            title: (
              <>
                Deixe esse momento <Mark>ainda mais especial</Mark>
              </>
            ),
            description: (
              <>
                <Service>
                  <ServiceHeader>
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
                    <Mark>Vocês não precisam aprender a dançar do zero</Mark>{" "}
                    para fazer um casamento lindo e marcante para os seus
                    convidados, se a sua coreografia foi ensinada do jeito
                    certo.
                  </Paragraph>

                  <Paragraph>
                    <Mark>
                      Deixe a dança para quem tem que se preocupar com a dança
                    </Mark>
                  </Paragraph>
                </Service>
              </>
            ),
            cta: {
              text: "Não quero me preocupar",
              onClick: () =>
                app.goToWhatsapp({
                  message:
                    "Olá! Gostaria de saber mais sobre a dança dos noivos",
                }),
            },
            testimonial: {
              quote:
                "Eu não imaginava que meu marido ia conseguir dançar toda a coreografia, mas ela ficou incrível.",
              image: {
                src: "/testimonials/rsfernan.jpg",
              },
              name: "Raquel Fernandes",
              job: "Noiva bem coreografada",
            },
            questions: [
              {
                title: "Qual é o valor da minha coreografia?",
                answer: (
                  <>
                    <Paragraph>
                      Cada ensaio no SCD sai por apenas <Mark>R$120.00</Mark>.
                    </Paragraph>
                  </>
                ),
              },
              {
                title: "Quantos ensaios são necessários?",
                answer: (
                  <>
                    <Paragraph>
                      Apenas <Mark>5 ensaios</Mark>!
                    </Paragraph>

                    <Paragraph>
                      Vocês farão a <Mark>dança inteira nos 2 primeiros</Mark>{" "}
                      ensaios e vamos precisar de mais 3 para aperfeiçoar os
                      movimentos e modificar o que for necessário.
                    </Paragraph>
                  </>
                ),
              },
              {
                title: "Posso escolher as músicas?",
                answer: (
                  <>
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
                  </>
                ),
              },
              {
                title: "Meu futuro marido não sabe dançar",
                answer: (
                  <>
                    <Paragraph>
                      <Mark>Nenhum marido sabe</Mark>, fica tranquila.
                    </Paragraph>
                  </>
                ),
              },
            ],
          },
        ]}
        shortcuts={[
          { href: "tel:+55(21)99575-8923", icon: <FaPhoneAlt /> },
          {
            href: "https://open.spotify.com/user/12175894617",
            icon: <FaSpotify />,
          },
          {
            href: "https://www.instagram.com/scd.danca/",
            icon: <AiFillInstagram />,
          },
          {
            href: "https://goo.gl/maps/FMs4QRPLBpcSttLw7",
            icon: <SiGooglemaps />,
          },
        ]}
      />
    </Style>
  );
}

const Style = styled.div`
  --body-bg: #0c0c0c;
  --heading-color: #ffffff;
  --text-color: #ffffffcf;
  --mark-color: #feb434;
  --card-bg: #1f1f1f;
  --card-bg-contrast: radial-gradient(
    ellipse farthest-corner at right bottom,
    #fbba52 0%,
    #feb434 35%,
    #da8f1f 80%
  );
  --chip-color: #ffffff;
  --chip-color-active: #2f2f2f;
  --chip-bg: #ffffff14;
  --chip-bg-active: #feb434;
  --button-color: #2f2f2f;
  --button-bg: #feb434;
  --icon-color: white;
  --icon-bg: #1f1f1f;
  background-color: var(--body-bg);
`;
