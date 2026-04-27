import { motion } from "framer-motion";
import useImageCarousel from "../../hooks/useImageCarousel";

const images = [
    "/images/intro-1.jpg",
    "/images/intro-2.avif",
    "/images/intro-3.jpg",
    "/images/intro-4.webp"
];

const ExpertiesSection: React.FC = () => {
    const { currentImage, nextImage } = useImageCarousel(images, 4000);

    return (
        <div className="w-full">
            {/* Header Section (Outside the background image) */}
            <h2 className="mb-4 text-4xl font-bold text-center text-white md:text-5xl">Our Expertise & Technical Skills</h2>

            {/* Content Section with Background Image */}
            <div className="relative w-full h-[600px] overflow-hidden">
                {/* Background Image Section */}
                <div className="absolute inset-0 w-full h-full">
                    {/* Old Image (Swipe Left & Fade Out) */}
                    <motion.div
                        className="absolute inset-0 w-full h-full bg-center bg-cover"
                        style={{ backgroundImage: `url(${currentImage})` }}
                        key={`old-${currentImage}`}
                        initial={{ x: 0, opacity: 1 }}
                        animate={{ x: "-100%", opacity: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    />

                    {/* New Image (Swipe In from Right) */}
                    <motion.div
                        className="absolute inset-0 w-full h-full bg-center bg-cover"
                        style={{ backgroundImage: `url(${nextImage})` }}
                        key={`new-${nextImage}`}
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: "0%", opacity: 1 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    />
                </div>

                {/* Text Content Overlay (Centered) */}
                <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center text-center text-white"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div className="p-8 text-center bg-gray-900 rounded-lg bg-opacity-80">
                        <p className="max-w-2xl px-4 mb-8 text-lg">
                            At PrimePath Innovations, we combine cutting-edge technologies with proven development practices to deliver scalable solutions, innovative applications, and measurable business growth.
                        </p>

                        <div className="max-w-2xl px-4 space-y-6">
                            {[
                                { title: "Full Stack Development", desc: "Building end-to-end web applications with React, Node.js, and modern frameworks." },
                                { title: "AI & Machine Learning", desc: "Integrating intelligent automation, chatbots, and predictive analytics into applications." },
                                { title: "Mobile App Development", desc: "Creating cross-platform mobile applications using React Native and Flutter." },
                                { title: "API Development & Integration", desc: "Designing robust RESTful and GraphQL APIs with third-party service integrations." },
                                { title: "Cloud & DevOps Solutions", desc: "Implementing scalable cloud infrastructure, CI/CD pipelines, and deployment automation." }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 * index }}
                                >
                                    <div>
                                        <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                                        <p className="text-gray-200">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ExpertiesSection;
