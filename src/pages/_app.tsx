import Layout from "@/components/Layout";
import { StyledGlobalStyle } from "@/utils/styles/globalStyle";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <StyledGlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
