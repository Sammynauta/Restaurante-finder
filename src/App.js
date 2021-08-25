import React from "react";
import Home from "./pages/Home";
import theme from "./theme";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Reset />
          <Home />
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
