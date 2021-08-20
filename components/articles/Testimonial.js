import Image from "next/image";
import styled from "styled-components";

import { Article } from "../base/Article";
import { Blockquote } from "../base/Typography";

export const Testimonial = styled(Article)`
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-template-areas: "quote quote" "image info";
  gap: 10px;
  align-items: center;
  max-width: 300px;
`;

export const TestimonialQuote = styled(Blockquote)`
  grid-area: quote;
`;

export function TestimonialImage({ src, alt }) {
  return (
    <TestimonialImageContainer>
      <TestimonialImageWrapper
        src={src}
        alt={alt}
        layout="fixed"
        width={50}
        height={50}
        quality={10}
      />
    </TestimonialImageContainer>
  );
}

export const TestimonialInfo = styled.div`
  grid-area: info;
`;

const TestimonialImageContainer = styled.div`
  grid-area: image;
  position: relative;
  width: 100%;
`;

const TestimonialImageWrapper = styled(Image)`
  border-radius: 50%;
`;
