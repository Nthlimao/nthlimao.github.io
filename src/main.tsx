import React from "react";
import { Header, About, Section } from "./components";

const Main = () => {
    return (
        <div>
            <Header />
            <Section id="sobre">
                Sobre Min
            </Section>
            <About />
        </div>
    );
};

export default Main;
