import styled, { keyframes } from "styled-components";
import { DEVICES } from "../../theme";

export const Details = styled.details`
  padding-block: 0;
`;

export const DetailsSummary = styled.summary`
  list-style: none;

  @media (min-width: ${DEVICES.TABLET}) {
    text-align: center;
  }

  & ~ * {
    animation: ${keyframes`
      0%    {opacity: 0; transform: translateX(-10px)}
      100%  {opacity: 1; transform: translateX(0)}
    `} 0.5s ease-in-out;
  }
`;
