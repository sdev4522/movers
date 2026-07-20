export interface ITestimonial {
    name: string;
    city: string;
    service: string;
    quote: string;
    rating: number;
}

export const testimonialsData: ITestimonial[] = [
    {
        name: "Priya Ramakrishnan",
        city: "Koramangala, Bangalore",
        service: "Local Shifting",
        quote:
            "Absolutely seamless experience. They packed my entire 2BHK in 3 hours and not a single item was damaged. The crew was polite, professional, and genuinely careful. Will definitely use again.",
        rating: 5,
    },
    {
        name: "Arjun Mehta",
        city: "Whitefield → Pune",
        service: "Interstate Move",
        quote:
            "Moved from Whitefield to Pune and was nervous about the long haul. Diamondsafety Packers handled everything perfectly — my car arrived in the same condition it left, and so did my furniture.",
        rating: 5,
    },
    {
        name: "Sneha Pillai",
        city: "Indiranagar, Bangalore",
        service: "Office Relocation",
        quote:
            "Our entire 40-person office was relocated over a weekend. Monday morning, we walked into a fully set-up workspace. Zero downtime. Phenomenal coordination from the team.",
        rating: 5,
    },
    {
        name: "Vikram Choudhary",
        city: "HSR Layout → Chennai",
        service: "Interstate Move",
        quote:
            "Transparent pricing — what they quoted is exactly what I paid. No hidden charges, no last-minute surprises. The move from HSR to Chennai was smooth and on time.",
        rating: 5,
    },
    {
        name: "Deepa Nair",
        city: "JP Nagar, Bangalore",
        service: "Packing & Storage",
        quote:
            "I needed short-term storage between homes and they arranged it effortlessly. Their packing crew is top-notch — bubble-wrapped even my plants and they arrived perfectly intact.",
        rating: 5,
    },
    {
        name: "Rajesh Kulkarni",
        city: "Electronic City → Hyderabad",
        service: "Interstate Move",
        quote:
            "Moving from Bangalore to Hyderabad used to feel daunting, but this team made it feel like a walk in the park. Highly professional, punctual, and friendly. Highly recommend!",
        rating: 5,
    },
];
