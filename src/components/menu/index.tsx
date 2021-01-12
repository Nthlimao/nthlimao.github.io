/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import Link from "../link";
import MenuBarStyles, {
    MenuContent,
    LogoImage,
    MenuStyles,
    LineMenuFixed,
} from "./menu.styles";

type LinksType = {
    href: string;
    label: string;
    id?: string;
    ref?: any;
};

type MenuType = {
    links?: LinksType[];
};

const Menu = ({ links = [] }: MenuType) => {
    const menuRef = useRef(null);

    const [fixed, setFixed] = useState(false);
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
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 200 && !fixed) {
                setFixed(true);
            }
            if (currentScrollY < 140 && fixed) {
                setFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [fixed]);

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

    // console.log(window.location.hash);
    // TO DO mudar active link quando tiver # na url

    return (
        <MenuBarStyles fixed={fixed}>
            <div className="container">
                <MenuContent>
                    <LogoImage
                        src={`${process.env.PUBLIC_URL}/images/logo.png`}
                    />
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
                        <LineMenuFixed
                            left={left}
                            width={width}
                            fixed={fixed}
                        />
                    </MenuStyles>
                </MenuContent>
            </div>
        </MenuBarStyles>
    );
};

export default Menu;
