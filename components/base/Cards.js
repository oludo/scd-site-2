import styled from "styled-components";

export const Card = styled.div`
  background-color: var(--card-bg);
  border-radius: 20px;
  padding: 20px;
`;

export const CardWithContrast = styled(Card)`
  background: var(--card-bg-contrast);
`;
