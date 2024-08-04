import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-20 bg-violet-500 rounded-md text-white py-6">
            <div className="container mx-auto text-center">
                <div className="flex justify-center space-x-6 mb-4">
                    <a
                        href="https://github.com/AhmadAlbara/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-200"
                    >
                        <FaGithub size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ahmad-albara-a359202ab/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-200"
                    >
                        <FaLinkedin size={24} />
                    </a>
                    <a
                        href="https://x.com/ahmdalbrr_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-200"
                    >
                        <FaTwitter size={24} />
                    </a>
                </div>
                <p>&copy; {currentYear} Ahmad Albara. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
