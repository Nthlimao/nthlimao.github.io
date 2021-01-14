import React, { useRef } from "react";
import LinkStyles from "./link.styles";

type LinkProps = {
    children: any;
    href: string;
    onClick: any;
    onLeave: any;
    onHover: Function;
    id?: string;
    isActive?: boolean;
    isFixed?: boolean;
};

const Link = ({
    children,
    href,
    onClick,
    onHover,
    onLeave,
    id = "",
    isActive = false,
    isFixed = false,
}: LinkProps) => {
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
