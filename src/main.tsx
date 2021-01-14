import React from "react";
import { ThemeProvider } from "styled-components";
import { theme, MainStyles } from "./styles";
import { Navbar, Header, About } from "./components";

const Main = () => {
    return (
        <ThemeProvider theme={theme}>
            <MainStyles>
                <Navbar />
                <Header />
                <About />
            </MainStyles>
        </ThemeProvider>
    );
};

export default Main;
