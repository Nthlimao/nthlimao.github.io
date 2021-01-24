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
                <div className="container">
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
                                    .pauseFor(1400)
                                    .deleteAll()
                                    .typeString("mobile developer")
                                    .pauseFor(1400)
                                    .deleteAll()
                                    .typeString("front-end developer")
                                    .pauseFor(1400)
                                    .deleteAll()
                                    .typeString("back-end developer")
                                    .pauseFor(1400)
                                    .deleteAll()
                                    .typeString("developer fullstack")
                                    .pauseFor(600)
                                    .typeString(" ;)")
                                    .pauseFor(4000)
                                    .deleteAll()
                                    .start();
                            }}
                        />
                    </PresentationTitle>
                </div>
            </ContentStyles>
        </PresentationStyles>
    );
};

export const PresentationAppend = () => {
    return <AppendStyles />;
};

export default PresentationContent;
