import React from "react";
import { motion } from "framer-motion";
import OurMissionSection from "../components/shared/OurMissionSection";
import TeamSection from "../components/about/OurTeamSection";
// import TeamMembersSection from "../components/about/TeamMembersSection";
import { Link } from "react-router-dom";
import { COMPANY_NAME } from "../utils/constants/company-details";

const AboutUs: React.FC = () => {
    return (
        <div className="pt-24 text-white bg-black">
            {/* Background Image with Dark Overlay */}
            <div
                className="fixed inset-0 z-0 bg-center bg-cover"
                style={{ backgroundImage: "url(/images/join-us-2.jpg)" }}
            >
                <div className="absolute inset-0 bg-black opacity-60"></div>
            </div>

            {/* Content Section */}
            <div className="relative z-10">
                {/* Introduction Section */}
                <section className="px-6 pb-20">
                    <motion.h1
                        className="mb-4 text-5xl font-bold text-center"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        About Us
                    </motion.h1>

                    <motion.p
                        className="mb-6 text-xl text-gray-300"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        Welcome to <Link to="/">{COMPANY_NAME}</Link> – your expert partner in
                        full-stack development and digital transformation. At <Link to="/">{COMPANY_NAME}</Link>, 
                        we empower businesses with cutting-edge web solutions, AI integration, and scalable applications. 
                        From custom web applications to mobile apps and e-commerce platforms, we transform your ideas 
                        into powerful digital realities that drive business growth.
                    </motion.p>

                    <motion.p
                        className="text-xl text-gray-300"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        Our expertise spans Full Stack Development, AI & ML Integration, Mobile App Development, 
                        API Development, E-commerce Solutions, and Cloud & DevOps. By combining proven
                        development practices with cutting-edge technologies, we deliver excellence, scalability, and
                        measurable impact — helping businesses build powerful digital solutions and achieve
                        sustainable success in today's competitive market.
                    </motion.p>
                </section>


                {/* Mission and Team Sections - Grid Layout */}
                <section className="grid grid-cols-1 gap-12 px-6 pb-20 text-center md:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <OurMissionSection />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <TeamSection />
                    </motion.div>
                </section>

                {/* Specializations Section */}
                <section className="px-6 pb-20">
                    <motion.h2
                        className="mb-6 text-3xl font-semibold text-center"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        We Specialize In
                    </motion.h2>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {/* Expertise Items */}
                        {[
                            {
                                icon: "",
                                title: "Full Stack Development",
                                content:
                                    "Building end-to-end web applications with React, Node.js, and modern frameworks for scalable business solutions.",
                                delay: 0.2,
                            },
                            {
                                icon: "🤖",
                                title: "AI & ML Integration",
                                content:
                                    "Integrating intelligent automation, chatbots, and predictive analytics to enhance application capabilities.",
                                delay: 0.4,
                            },
                            {
                                icon: "�",
                                title: "Mobile App Development",
                                content:
                                    "Creating cross-platform mobile applications using React Native and Flutter for iOS and Android.",
                                delay: 0.6,
                            },
                            {
                                icon: "�",
                                title: "API Development",
                                content:
                                    "Designing robust RESTful and GraphQL APIs with third-party service integrations for seamless connectivity.",
                                delay: 0.8,
                            },
                            {
                                icon: "�",
                                title: "E-commerce Solutions",
                                content:
                                    "Building complete e-commerce platforms with payment processing, inventory management, and customer experiences.",
                                delay: 1.0,
                            },
                            {
                                icon: "☁️",
                                title: "Cloud & DevOps",
                                content:
                                    "Implementing scalable cloud infrastructure, CI/CD pipelines, and deployment automation for optimal performance.",
                                delay: 1.2,
                            },
                        ].map(({ icon: Icon, title, content, delay }) => (
                            <motion.div
                                key={title}
                                className="flex flex-col items-center text-center"
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay }}
                            >
                                <div className="mb-4 text-5xl">{Icon}</div>
                                <h3 className="mb-2 text-xl font-semibold">{title}</h3>
                                <p className="text-gray-300">{content}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>


                {/* Team Members Section */}
                {/* <section className="px-6 pb-20">
                    <TeamMembersSection />
                </section> */}

                {/* Closing Section */}
                <section className="px-6 pb-20 text-center">
                    <motion.h2
                        className="mb-6 text-3xl font-semibold"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <Link to="/">{COMPANY_NAME}</Link> – Transforming Ideas Into Digital Reality
                    </motion.h2>

                    <motion.p
                        className="max-w-3xl mx-auto text-lg text-gray-300"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        Our team at <Link to="/">{COMPANY_NAME}</Link> is dedicated to helping businesses thrive through
                        cutting-edge development solutions, innovative technology integration, and scalable digital applications.
                        We focus on delivering consistent, measurable impact — from Full Stack Development and AI Integration to Mobile Apps and Cloud Solutions — ensuring sustainable growth and exceptional user experiences.
                    </motion.p>
                </section>

            </div>
        </div>
    );
};

export default AboutUs;
