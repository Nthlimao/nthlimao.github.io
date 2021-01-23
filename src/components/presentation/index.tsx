import React from "react";
import Typewriter from "typewriter-effect";
import PresentationStyles, {
    ContentStyles,
    PresentationTitle,
    AppendStyles,
} from "./presentation.styles";

export const PresentationContent = () => {
    return (
        <PresentationStyles>
            <ContentStyles>
                <PresentationTitle>
                    Olá,
                    <br />
                    Eu sou a Nathalia,
                    <br />
                    <Typewriter
                        options={{
                            loop: true,
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("web developer")
                                .pauseFor(1100)
                                .deleteAll()
                                .typeString("mobile developer")
                                .pauseFor(1200)
                                .deleteAll()
                                .typeString("front-end developer")
                                .pauseFor(1200)
                                .deleteAll()
                                .typeString("back-end developer")
                                .pauseFor(1200)
                                .deleteAll()
                                .typeString("developer fullstack")
                                .pauseFor(600)
                                .typeString(" ;)")
                                .pauseFor(2000)
                                .deleteAll()
                                .start();
                        }}
                    />
                </PresentationTitle>
            </ContentStyles>
        </PresentationStyles>
    );
};

export const PresentationAppend = () => {
    return <AppendStyles />;
};

export default PresentationContent;
