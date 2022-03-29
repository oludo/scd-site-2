import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--button-bg);
  border: none;
  border-radius: 13px;
  color: var(--button-color);
  font-family: system-ui;
  font-weight: 600;
  cursor: pointer;
  font-weight: 600;
  min-width: 4ch;
  padding: 0.8rem 1.6em;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 0.08s ease-in;

  &:hover,
  &:focus {
    transform: scale(1.03);
  }
`;

export function ButtonWithIcon({ icon, children, ...rest }) {
  return (
    <ButtonWithIconContainer {...rest}>
      {icon} <span>{children}</span>
    </ButtonWithIconContainer>
  );
}

const ButtonWithIconContainer = styled(Button)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;

export const ButtonLink = styled.a`
  background-color: var(--button-bg);
  border: none;
  border-radius: 13px;
  color: var(--button-color);
  font-family: system-ui;
  font-weight: 600;
  cursor: pointer;
  font-weight: 600;
  min-width: 4ch;
  padding: 0.8rem 1.6em;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 0.08s ease-in;

  &:hover,
  &:focus {
    transform: scale(1.03);
  }
`