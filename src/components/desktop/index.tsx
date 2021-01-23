import React from "react";

import Sidebar from "../sidebar";
import Carousel from "../carousel";
import { PresentationAppend, PresentationContent } from "../presentation";
import { AboutAppend, AboutContent } from "../about";

import DesktopStyles from "./desktop.styles";

const Desktop = () => {
    const slidesLeft = [
        { hash: "home", slide: <PresentationAppend /> },
        { hash: "sobre", slide: <AboutContent /> },
    ];

    const slidesRight = [
        { hash: "sobre", slide: <AboutAppend /> },
        { hash: "home", slide: <PresentationContent /> },
    ];
    return (
        <DesktopStyles>
            <Sidebar />
            <Carousel
                slidesLeft={slidesLeft}
                slidesRight={slidesRight}
                totalIndexes={1}
            />
        </DesktopStyles>
    );
};

export default Desktop;
