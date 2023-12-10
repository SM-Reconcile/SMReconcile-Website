import animationData from "../../public/test-animation.json";

export const containerData: {
    title: string;
    content: string;
    animation: any;
}[] = [
        {
            title: ">40",
            content:
                "Million people served daily with drinking water across the country.",
            animation: animationData,
        },
        {
            title: "2,200+",
            content: "ML of drinking water treated every day in 28 plants.",
            animation: animationData,
        },
        {
            title: "500 +",
            content: "ML of waste water treated every day in 15 plants..",
            animation: animationData,
        },
    ];


export const serviceData = [
    {
        title: "Sewage Treatment Solutions",
        description:
            "We specialize in advanced sewage treatment solutions, employing innovative technologies to purify wastewater and mitigate environmental risks.",
        image: "machine-1", // Replace with the path to the animation for this service
    },
    {
        title: "Environmental Consultancy",
        description:
            "Our consultancy services offer comprehensive strategies to address environmental concerns, collaborating with experts and institutions for sustainable solutions.",
        image: "machine-4", // Replace with the path to the animation for this service
    },
    {
        title: "Effluent Treatment Plant",
        description:
            "Our consultancy services offer comprehensive strategies to address environmental concerns, collaborating with experts and institutions for sustainable solutions",
        image: "machine-3", // Replace with the path to the animation for this service
    },
    // Add more objects for additional services with respective titles, descriptions, and animation paths
];