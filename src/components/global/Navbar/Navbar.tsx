import { NavbarLink } from "./components/NavbarLink";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 z-20 pt-5 pb-5 w-full flex justify-center">
      <div className="container flex items-center justify-between">
        <img
          src="/assets/images/nthlimao.png"
          alt="nthlimao logo"
          width={120.44}
          height={40}
        />
        <nav className="flex gap-8 items-center">
          <NavbarLink href="/">Start</NavbarLink>
          <NavbarLink href="/about">About</NavbarLink>
          <NavbarLink href="/timeline">Timeline</NavbarLink>
          <NavbarLink href="/blog">Blog</NavbarLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
