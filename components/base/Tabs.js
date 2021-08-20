import styled from "styled-components";

export const Tab = styled.div`
  ${({ index, current }) =>
    index === current ? "display: initial;" : "display: none;"}
`;
