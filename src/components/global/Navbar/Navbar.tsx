import NavbarStyles, {
  NavbarInner,
  NavbarMenu,
  NavbarMenuItem,
} from "./Navbar.styles";

const Navbar = () => {
  return (
    <NavbarStyles>
      <NavbarInner className="container">
        <img
          src="/assets/images/nthlimao.png"
          alt="Next.js Logo"
          width={120.44}
          height={40}
        />
        <NavbarMenu>
          <NavbarMenuItem>Start</NavbarMenuItem>
          <NavbarMenuItem>About</NavbarMenuItem>
          <NavbarMenuItem>Timeline</NavbarMenuItem>
          <NavbarMenuItem>Blog</NavbarMenuItem>
        </NavbarMenu>
      </NavbarInner>
    </NavbarStyles>
  );
};

export default Navbar;
