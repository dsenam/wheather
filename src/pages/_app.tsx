import Layout from "@/components/Layout";
import { StyledGlobalStyle } from "@/utils/styles/globalStyle";
import { theme } from "@/utils/styles/themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />

        <StyledGlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
