import Layout from "@/components/Layout";
import { StyledGlobalStyle } from "@/utils/styles/globalStyle";
import { theme } from "@/utils/styles/themes";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <StyledGlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
