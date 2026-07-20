// ── Navigation ──────────────────────────────────────────
export interface INavLink {
    name: string;
    href: string;
    icon: string;
}

// ── Testimonials ─────────────────────────────────────────
export interface ITestimonial {
    name: string;
    city: string;
    service: string;
    quote: string;
    rating: number;
}

export interface TestimonialCardProps {
    testimonial: ITestimonial;
    index: number;
}

// ── Services ─────────────────────────────────────────────
export interface IService {
    iconName: string;
    title: string;
    description: string;
}

// ── Why Us ───────────────────────────────────────────────
export interface IWhyUs {
    iconName: string;
    title: string;
    description: string;
}

// ── Coverage ─────────────────────────────────────────────
export interface ICoverageCity {
    city: string;
    area: string;
}

export interface ICoverageState {
    state: string;
    cities: string[];
    label: string;
}

// ── Footer ───────────────────────────────────────────────
export interface IFooterLink {
    name: string;
    href: string;
}

export interface IFooter {
    title: string;
    links: IFooterLink[];
}

// ── Section title ─────────────────────────────────────────
export interface SectionTitleProps {
    eyebrow: string;
    title: string;
    subtitle?: string;
    align?: "left" | "center";
}