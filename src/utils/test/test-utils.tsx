// test-utils.js
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { StyledGlobalStyle } from "../styles/globalStyle";
import Layout from "@/components/Layout";
import '@testing-library/jest-dom'

const queryClient = new QueryClient();
const AllTheProviders = ({ children }: any) => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <StyledGlobalStyle />
        <Layout>{children}</Layout>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

const customRender = (ui: any, options?: any) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";

export { customRender as render };
