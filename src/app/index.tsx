import { GlobalStyles, ThemeProvider } from "@mui/material";
import React from "react";
import MyRouter from "../routes";
import { theme } from "../styles";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={{ body: { fontFamily: "Roboto" } }} />
        <MyRouter />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
