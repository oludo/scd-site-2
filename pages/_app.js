import { ThemeProvider } from "styled-components";
import "../styles/globals.scss";
import { defaultTheme } from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
