/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from "react";
import Link from "../link";
import MenuStyles, { LineMenuFixed } from "./menu.styles";

type LinksType = {
    index: number;
    id?: string;
    href: string;
    label: string;
    icon?: string;
};

type MenuType = {
    links?: LinksType[];
};

const Menu = ({ links = [] }: MenuType) => {
    const menuRef = useRef(null);

    const [active, setActive] = useState(0);
    const [top, setTop] = useState(0);

    const handleLinkHover = (e) => {
        setTop(e.offsetTop);
    };

    const handleLinkLeave = (menu) => {
        if (active >= 0) {
            const child = menu.childNodes[active];
            setTop(child.offsetTop);
        } else {
            setTop(0);
        }
    };

    const handleLinkActive = (hash) => {
        const filtered = links.filter((l) => {
            return l.href === hash;
        });

        if (filtered.length > 0) {
            const [selected] = filtered;
            setActive(selected.index);
        }
    };

    useEffect(() => {
        handleLinkActive(window.location.hash);
    }, []);

    useEffect(() => {
        handleLinkLeave(menuRef.current);
    }, [active]);

    useEffect(() => {
        const handleHash = () => handleLinkActive(window.location.hash);
        window.addEventListener("hashchange", handleHash, { passive: true });

        return () => window.removeEventListener("scroll", handleHash);
    }, []);

    return (
        <MenuStyles ref={menuRef}>
            {links.map((link, index) => (
                <Link
                    key={link.id}
                    id={link.id}
                    href={link.href}
                    icon={link.icon}
                    onClick={() => setActive(index)}
                    onHover={handleLinkHover}
                    onLeave={() => handleLinkLeave(menuRef.current)}
                    isActive={index === active}
                >
                    {link.label}
                </Link>
            ))}
            <LineMenuFixed top={top} />
        </MenuStyles>
    );
};

export default Menu;
