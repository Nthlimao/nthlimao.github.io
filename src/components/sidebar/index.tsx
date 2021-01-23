import React from "react";
import Logo from "./logo";
import Menu from "./menu";
import SidebarStyles, { SidebarHeader, SidebarFooter } from "./sidebar.styles";

const links = [
    {
        href: "#home",
        label: "Home",
        id: "link-home",
        icon: "home",
        index: 0,
    },
    {
        href: "#sobre",
        label: "Sobre",
        id: "link-sobre",
        icon: "user",
        index: 1,
    },
];

const Sidebar = () => {
    return (
        <SidebarStyles>
            <SidebarHeader>
                <Logo />
            </SidebarHeader>
            <div>
                <Menu links={links} />
            </div>
            <SidebarFooter></SidebarFooter>
        </SidebarStyles>
    );
};

export default Sidebar;
