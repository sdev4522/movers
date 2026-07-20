export interface ICoverageCity {
    city: string;
    area: string;
    badge?: string;
}

export interface ICoverageState {
    state: string;
    cities: string[];
    label: string; // "Outstation from Bangalore"
}

export const bangaloreCoverage: ICoverageCity[] = [
    { city: "Koramangala",     area: "South Bangalore" },
    { city: "Whitefield",      area: "East Bangalore" },
    { city: "Indiranagar",     area: "Central-East" },
    { city: "HSR Layout",      area: "South Bangalore" },
    { city: "JP Nagar",        area: "South Bangalore" },
    { city: "Marathahalli",    area: "East Bangalore" },
    { city: "Yelahanka",       area: "North Bangalore" },
    { city: "Electronic City", area: "South Bangalore" },
    { city: "Hebbal",          area: "North Bangalore" },
    { city: "Rajajinagar",     area: "West Bangalore" },
    { city: "BTM Layout",      area: "South Bangalore" },
    { city: "Bannerghatta Road", area: "South Bangalore" },
];

export const interstateStates: ICoverageState[] = [
    {
        state: "Karnataka",
        cities: ["Mysuru", "Mangaluru", "Hubli-Dharwad", "Belagavi", "Tumakuru"],
        label: "Within State",
    },
    {
        state: "Tamil Nadu",
        cities: ["Chennai", "Coimbatore", "Madurai", "Salem", "Tiruchirappalli"],
        label: "Outstation",
    },
    {
        state: "Telangana",
        cities: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar"],
        label: "Outstation",
    },
    {
        state: "Maharashtra",
        cities: ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
        label: "Outstation",
    },
    {
        state: "Kerala",
        cities: ["Kochi", "Thiruvananthapuram", "Kozhikode", "Thrissur"],
        label: "Outstation",
    },
    {
        state: "Andhra Pradesh",
        cities: ["Visakhapatnam", "Vijayawada", "Guntur", "Tirupati"],
        label: "Outstation",
    },
];
