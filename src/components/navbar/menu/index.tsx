/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import Link from "../link";
import MenuStyles, { LineMenuFixed } from "./menu.styles";

type LinkProps = {
    href: string;
    label: string;
    id?: string;
};

type MenuProps = {
    fixed?: boolean;
    links?: LinkProps[]
};

const Menu = ({ fixed = false, links = [] }: MenuProps) => {
    const menuRef = useRef(null);

    const [active, setActive] = useState(-1);
    const [left, setLeft] = useState(0);
    const [width, setWidth] = useState(0);

    const handleLeft = (l) => {
        if (fixed) {
            setLeft(l);
        } else {
            setLeft(l + 12);
        }
    };

    const handleWidth = (w) => {
        if (fixed) {
            setWidth(w);
        } else {
            setWidth(w - 24);
        }
    };

    const handleMenuHover = (e) => {
        handleWidth(e.offsetWidth);
        handleLeft(e.offsetLeft);
    };

    const handleMenuLeave = (m) => {
        if (active >= 0) {
            const child = m.childNodes[active];
            handleWidth(child.offsetWidth);
            handleLeft(child.offsetLeft);
        } else {
            handleWidth(0);
            handleLeft(0);
        }
    };

    useEffect(() => {
        if (menuRef && active >= 0) {
            handleMenuLeave(menuRef.current);
        }
    }, [fixed]);

    useEffect(() => {
        if (links.length > 0) {
            setActive(0);
        }
    }, [links]);

    useEffect(() => {
        const handleActive = (m) => {
            const child = m.childNodes[active];
            handleWidth(child.offsetWidth);
            handleLeft(child.offsetLeft);
        };

        if (links.length > 0 && menuRef && active >= 0) {
            setTimeout(() => {
                handleActive(menuRef.current);
            }, 100);
        }
    }, [links, active, menuRef]);

    return (
        <MenuStyles ref={menuRef}>
            {links.map((link, index) => (
                <Link
                    key={link.id}
                    id={link.id}
                    href={link.href}
                    onClick={() => setActive(index)}
                    onHover={handleMenuHover}
                    onLeave={() => handleMenuLeave(menuRef.current)}
                    isFixed={fixed}
                    isActive={index === active}
                >
                    {link.label}
                </Link>
            ))}
            {fixed && <LineMenuFixed left={left} width={width} fixed={fixed} />}
        </MenuStyles>
    );
};

export default Menu;
