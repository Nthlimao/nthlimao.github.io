import React, { useRef } from "react";
import Typewriter from "typewriter-effect";
import Menu from "../menu";
import ScrollDown from "../scrollDown";
import HeaderStyles, {
    ContentHeader,
    TypewriterWrapper,
} from "./header.styles";

const menuLinks = [
    {
        href: "#Home",
        label: "Home",
        id: "link-home",
    },
    {
        href: "#sobre",
        label: "Sobre",
        id: "link-sobre",
    },
    {
        href: "#Timeline",
        label: "Timeline",
        id: "link-timeline",
    },
    {
        href: "#Cases",
        label: "Cases",
        id: "link-cases",
    },
];

const Header = () => {
    const headerRef = useRef(null);

    return (
        <HeaderStyles ref={headerRef}>
            <ContentHeader>
                <Menu links={menuLinks} />
                <TypewriterWrapper>
                    <Typewriter
                        options={{
                            loop: true,
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("dev")
                                .pauseFor(1400)
                                .typeString(" front-end")
                                .pauseFor(1200)
                                .deleteChars(10)
                                .pauseFor(800)
                                .typeString(" back-end")
                                .pauseFor(1200)
                                .deleteChars(9)
                                .pauseFor(800)
                                .typeString(" fullstack")
                                .pauseFor(1400)
                                .typeString(" ;)")
                                .pauseFor(1400)
                                .deleteAll()
                                .start();
                        }}
                    />
                </TypewriterWrapper>
                <ScrollDown headerRef={headerRef} />
            </ContentHeader>
        </HeaderStyles>
    );
};

export default Header;
