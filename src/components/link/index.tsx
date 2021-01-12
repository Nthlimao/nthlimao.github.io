import React, { useRef } from "react";
import LinkStyles from "./link.styles";

const Link = ({
    children,
    href,
    onClick,
    onHover,
    onLeave,
    id = "",
    isActive = false,
    isFixed = false,
}) => {
    const linkRef = useRef(null);

    const handleMouse = () => {
        onHover(linkRef.current);
    };

    return (
        <LinkStyles
            ref={linkRef}
            id={id}
            href={href}
            onClick={onClick}
            onMouseEnter={handleMouse}
            onMouseLeave={onLeave}
            fixed={isFixed}
            className={isActive ? "active" : ""}
        >
            {children}
        </LinkStyles>
    );
};

export default Link;
