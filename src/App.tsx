import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { CoffeeContextProvider } from "./contexts/CoffeeContext";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <CoffeeContextProvider>
            <Router />
          </CoffeeContextProvider>
        </BrowserRouter>

        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
