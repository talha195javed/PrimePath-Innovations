import { motion } from "framer-motion";
import useImageCarousel from "../../hooks/useImageCarousel";
import { useNavigate } from "react-router-dom";

const images = [
    "/images/join-us-1.webp",
    "/images/join-us-2.jpg",
    "/images/join-us-3.jpg",
    "/images/join-us-4.jpg",
    "/images/join-us-5.webp",
];

const JoinUsSection = () => {
    const { currentImage, nextImage } = useImageCarousel(images, 4000);
    const navigate = useNavigate();

    return (
        <div className="relative flex items-center justify-center w-full h-screen overflow-hidden bg-center bg-cover">
            {/* Old Image */}
            <motion.div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${currentImage})` }}
                key={`old-${currentImage}`}
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 0, y: -50 }}
                transition={{ duration: 1, ease: "easeInOut" }}
            ></motion.div>

            {/* New Image */}
            <motion.div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${nextImage})` }}
                key={`new-${nextImage}`}
                initial={{ opacity: 0, y: 500 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
            ></motion.div>

            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 max-w-2xl p-8 text-center text-white">
                <h2 className="mb-6 text-4xl font-bold">Join Us</h2>
                <p className="mb-6 text-lg">
                    At PrimePath Innovations, we're more than just a development team — we're a community of
                    innovators, problem-solvers, and technology enthusiasts. If you're passionate
                    about cutting-edge development, AI integration, and creating exceptional digital experiences,
                    we'd love to have you on board.
                </p>

                <ul className="mb-6 space-y-3 text-left text-lg">
                    <li>🚀 <strong>Technical Excellence</strong> – Work with cutting-edge technologies and modern development practices.</li>
                    <li>🤝 <strong>Collaborative Development</strong> – Join talented developers who share a passion for clean code and innovation.</li>
                    <li>🌍 <strong>Impactful Projects</strong> – Build applications that make a real difference across industries and businesses.</li>
                    <li>💡 <strong>Innovation-Driven</strong> – Be part of a team that embraces new technologies, AI integration, and creative solutions.</li>
                </ul>

                <p className="text-lg mb-8">
                    ✨ Join us and let's build the future of digital solutions together.
                </p>

                <button
                    className="px-8 py-4 text-xl font-semibold text-white transition duration-300 ease-in-out transform scale-95 rounded-full shadow-lg bg-gradient-to-r from-red-500 to-red-900 animate-pulse hover:scale-105 hover:shadow-xl focus:outline-none"
                    onClick={() => navigate("/services")}
                >
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default JoinUsSection;
