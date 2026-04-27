import React from "react";
import { Link } from "react-router-dom";

interface Service {
    id: string; // Add id for linking
    title: string;
    description: string;
    icon: React.ReactNode;
}

// Service Data
const services: Service[] = [
    { id: "fullstack", title: "Full Stack Development", description: "End-to-end web applications using React, Node.js, and modern technologies.", icon: "" },
    { id: "ai", title: "AI & ML Integration", description: "Integrate AI capabilities including chatbots, recommendation systems, and automation.", icon: "🤖" },
    { id: "mobile", title: "Mobile App Development", description: "Cross-platform mobile applications using React Native and Flutter.", icon: "�" },
    { id: "api", title: "API Development", description: "Robust RESTful and GraphQL APIs with third-party integrations.", icon: "�" },
    { id: "ecommerce", title: "E-commerce Solutions", description: "Complete e-commerce platforms with payment processing and inventory management.", icon: "�" },
    { id: "cloud", title: "Cloud & DevOps", description: "Cloud infrastructure setup, CI/CD pipelines, and deployment automation.", icon: "☁️" },
];


const ServiceCardsSection: React.FC = () => {
    return (
        <div className="container px-8 pb-8 mx-auto mt-[-4rem] max-w-full">
            <div className="grid justify-center grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                    <Link key={index} to={`/services#${service.id}`}>
                        <ServiceCard title={service.title} description={service.description} icon={service.icon} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

// ServiceCard Component
interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
    return (
        <div className="flex flex-col items-center p-6 transition-all duration-300 bg-[aliceblue] rounded-2xl hover:scale-105 hover:shadow-lg hover:shadow-red-400">
            <div className="mb-4 text-5xl">{icon}</div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
            <p className="text-center text-gray-600">{description}</p>
        </div>
    );
};

export default ServiceCardsSection;
