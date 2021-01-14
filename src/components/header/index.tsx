import React, { useRef } from "react";
import ScrollDown from "./scrollDown";
import Typewriter from "typewriter-effect";
import HeaderStyles, {
    HeaderContainer,
    HeaderSubtitle,
    HeaderTitle,
} from "./header.styles";

const Header = () => {
    const headerRef = useRef(null);
    return (
        <HeaderStyles ref={headerRef}>
            <HeaderContainer>
                <div className="container">
                    <HeaderSubtitle>
                        Oi, meu nome é Nathalia Lima.
                    </HeaderSubtitle>
                    <HeaderTitle>
                        <Typewriter
                            options={{
                                loop: true,
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("Eu sou dev")
                                    .pauseFor(1400)
                                    .typeString(" web")
                                    .pauseFor(1200)
                                    .deleteChars(4)
                                    .pauseFor(800)
                                    .typeString(" mobile")
                                    .pauseFor(1200)
                                    .deleteChars(7)
                                    .pauseFor(800)
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
                    </HeaderTitle>
                </div>
            </HeaderContainer>
            <ScrollDown headerRef={headerRef} />
        </HeaderStyles>
    );
};

export default Header;
