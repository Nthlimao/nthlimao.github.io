import React from "react";
import SectionStyles from "./section.styles";

type SectionProps = {
    children?: any;
    id?: string;
};

const Section = ({ children, id }: SectionProps) => (
    <div className="container">
        <SectionStyles id={id}>
            <h2>{children}</h2>
        </SectionStyles>
    </div>
);

export default Section;
