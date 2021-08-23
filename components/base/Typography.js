import styled, { css } from "styled-components";

const Heading = css`
  color: var(--heading-color);
  font-family: system-ui;
  font-weight: 600;
`;

export const HeadingOne = styled.h1`
  ${Heading}
  font-size: clamp(1.225rem, 1.225rem + 3.5vw, 3rem);
`;

export const HeadingTwo = styled.h2`
  ${Heading}
  font-size: clamp(1rem, 1rem + 1vw, 2rem);
`;

export const HeadingThree = styled.h3`
  ${Heading}
  font-size: clamp(1.125rem, 1.125rem + 1vw, 1.4rem);
`;

export const Text = css`
  color: var(--text-color);
  font-family: "Mulish", sans-serif;
  font-size: clamp(1.25em, 1.25em + 0.1vw, 1.4em);
`;

export const Paragraph = styled.p`
  ${Text}
`;

export const Blockquote = styled.blockquote`
  ${Text}
  margin: 0;
`;

export const Mark = styled.mark`
  background-color: transparent;
  color: var(--mark-color);
`;

export const UnorderedList = styled.ul``;

export const ListItem = styled.li`
  ${Text}
  margin-block: 0.22em;
`;
