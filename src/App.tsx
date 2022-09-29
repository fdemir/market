import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import { store } from "./app/store";
import { theme } from "./theme/variables";
import { GlobalStyle } from "./theme/globalStyles";

import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Sidebar from "./components/layout/Sidebar";
import Content from "./components/layout/Content";
import Filter from "./components/layout/Filter";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Main>
          <Filter />
          <Content />
          <Sidebar />
        </Main>
        <Footer />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
