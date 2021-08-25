import Image from "next/image";
import styled from "styled-components";

import { Button } from "../base/Buttons";
import { Section, SectionHeader } from "../base/Sections";
import { HeadingOne, Paragraph } from "../base/Typography";

export default function Hero({ title, logo, text, cta }) {
  return (
    <HeroContainer>
      <SectionHeader>
        <HeadingOne>{title}</HeadingOne>
      </SectionHeader>

      <HeroContent>
        {logo && (
          <HeroImageContainer>
            <Image
              src={logo.src}
              alt={logo.alt}
              layout="fixed"
              height={175}
              width={175}
              priority={true}
            />
          </HeroImageContainer>
        )}

        <Paragraph>{text}</Paragraph>

        <HeroButton>{cta}</HeroButton>
      </HeroContent>
    </HeroContainer>
  );
}

const HeroContainer = styled(Section)`
  text-align: center;
`;

const HeroContent = styled.article``;

const HeroImageContainer = styled.div`
  position: relative;
  margin-block: 20px auto;
`;

const HeroButton = styled(Button)`
  margin-top: 1rem;
`;
