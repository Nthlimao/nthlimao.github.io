import React, { useState, useEffect } from "react";
import Logo from "./logo";
import Menu from "./menu";
import NavbarStyles, { ContainerNavbar } from "./navbar.styles";

const links = [
    {
        href: "#Home",
        label: "Home",
        id: "link-home",
    },
    {
        href: "#sobre",
        label: "Sobre",
        id: "link-sobre",
    },
    {
        href: "#Timeline",
        label: "Timeline",
        id: "link-timeline",
    },
    {
        href: "#Cases",
        label: "Cases",
        id: "link-cases",
    },
];


const Navbar = () => {
    const [fixed, setFixed] = useState(false);

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

    return (
        <NavbarStyles fixed={fixed}>
            <div className="container">
                <ContainerNavbar>
                    <Logo />
                    <Menu fixed={fixed} links={links} />
                </ContainerNavbar>
            </div>
        </NavbarStyles>
    );
};

export default Navbar;
