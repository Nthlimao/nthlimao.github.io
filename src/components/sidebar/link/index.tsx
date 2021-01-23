import React, { useRef } from "react";
import Icon from "../../icon";
import LinkStyles from "./link.styles";

type LinkProps = {
    children: any;
    href: string;
    onClick: any;
    onLeave: any;
    onHover: Function;
    id?: string;
    isActive?: boolean;
    icon?: string;
};

const Link = ({
    children,
    href,
    onClick,
    onHover,
    onLeave,
    id = "",
    isActive = false,
    icon = "sun",
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
            className={isActive ? "active" : ""}
        >
            <Icon
                icon={icon}
                width="18px"
                height="18px"
                color={isActive ? "#FFFFFF" : "rgba(255, 255, 255, 0.7)"}
            />
            <span>{children}</span>
        </LinkStyles>
    );
};

export default Link;
