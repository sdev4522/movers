export interface INavLink {
    name: string;
    href: string;
    icon: string; // lucide icon name
}

export const navlinks: INavLink[] = [
    { name: "Home",         href: "#hero",         icon: "Home" },
    { name: "Services",     href: "#services",     icon: "Package" },
    { name: "Process",      href: "#process",      icon: "GitCommitHorizontal" },
    { name: "Testimonials", href: "#testimonials", icon: "Star" },
    { name: "Contact",      href: "#contact",      icon: "Phone" },
];