import styled from "styled-components";

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

export default Style;
