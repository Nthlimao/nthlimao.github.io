import React from "react";
import Icon from "../../icon";
import ScrollDownStyles, { IconWrapper } from "./scrollDown.styles";

type HeaderType = {
    current?: any,
};

type ScrollDownType = {
    headerRef: HeaderType,
};

const ScrollDown = ({ headerRef = {} }: ScrollDownType) => {
    const handleScroll = () => {
        const { offsetHeight } = headerRef.current;
        window.scrollTo(0, offsetHeight - 70);
    };

    return (
        <ScrollDownStyles onClick={() => handleScroll()}>
            <IconWrapper>
                <Icon icon="chevronsDown" color="#4AFAD3" />
            </IconWrapper>
        </ScrollDownStyles>
    );
};

export default ScrollDown;
