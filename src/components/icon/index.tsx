import React from "react";
import SvgIcons from "./icon.svg";
import IconStyles from "./icon.styles";

type IconType = {
    icon: string;
    color?: string;
    width?: string;
};

const Icon = ({ icon = "x", color, width }: IconType) => {
    let SelectedIcon: any = null;
    if (icon) SelectedIcon = SvgIcons[icon];

    return (
        <IconStyles color={color} width={width}>
            {SelectedIcon && <SelectedIcon />}
        </IconStyles>
    );
};

export default Icon;
