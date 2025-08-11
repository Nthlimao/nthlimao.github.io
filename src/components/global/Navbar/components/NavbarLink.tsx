import Link, { LinkProps } from "next/link";

interface NavbarLinkProps extends LinkProps {
  href: string;
  children: React.ReactNode;
}

export const NavbarLink = ({ href, children, ...props }: NavbarLinkProps) => {
  return (
    <Link href={href} passHref {...props}>
      <span className="transition-transform duration-200 ease-in-out hover:-translate-y-1 inline-block text-base text-[#777] font-medium hover:text-white">
        {children}
      </span>
    </Link>
  );
};
