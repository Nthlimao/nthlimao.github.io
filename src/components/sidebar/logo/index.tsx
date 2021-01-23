import React from "react";
import LogoStyles from "./logo.styles";

const Logo = () => (
    <LogoStyles src={`${process.env.PUBLIC_URL}/images/logo_alternative.png`} />
);

export default Logo;
