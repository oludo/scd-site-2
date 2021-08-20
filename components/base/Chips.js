import styled from "styled-components";

export const Chip = styled.span`
  color: ${({ active }) =>
    active ? "var(--chip-color-active)" : "var(--chip-color)"};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  font-family: "Mulish", sans-serif;
  font-size: clamp(0.9em, 0.9em + 0.1vw, 1.1em);
  background-color: ${({ active }) =>
    active ? "var(--chip-bg-active)" : "var(--chip-bg)"};
  padding: 0.7rem;
  border-radius: 20px;
  cursor: pointer;
`;

export function ChipClick({ ...rest }) {
  return <Chip {...rest} />;
}
