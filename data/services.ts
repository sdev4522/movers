export interface IService {
    iconName: string; // lucide icon name
    title: string;
    description: string;
}

export const servicesData: IService[] = [
    {
        iconName: "Truck",
        title: "Local Shifting",
        description:
            "Quick, careful door-to-door moves within Bangalore. We handle packing, loading, transport, and unpacking — all in a single seamless day.",
    },
    {
        iconName: "Building2",
        title: "Office Relocation",
        description:
            "Minimal downtime, maximum care. We plan and execute complete office and corporate moves so your team is back to work the next morning.",
    },
    {
        iconName: "PackageCheck",
        title: "Packing Services",
        description:
            "Professional-grade bubble wrap, corrugated boxes, and foam padding. Every item — from fine china to large furniture — wrapped to survive the journey.",
    },
    {
        iconName: "ArrowUpDown",
        title: "Loading & Unloading",
        description:
            "Trained loaders who treat your belongings like their own. Heavy furniture, appliances, and fragile items handled with care and the right equipment.",
    },
    {
        iconName: "Warehouse",
        title: "Warehousing & Storage",
        description:
            "Secure, climate-aware storage facilities in Bangalore. Short-term between moves or long-term storage — flexible terms, no hidden fees.",
    },
    {
        iconName: "Car",
        title: "Vehicle Transportation",
        description:
            "Car, bike, or scooter — your vehicle transported safely on enclosed carriers to any city in India, with full condition documentation.",
    },
];
