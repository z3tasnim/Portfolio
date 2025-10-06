import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              © {new Date().getFullYear()} Zarin Tasnim Chowdhury. All rights
              reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link
              href="/"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
            >
              <FaGithub />
            </Link>
            <Link
              href="/"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
            >
              <FaLinkedin />
            </Link>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ztasnim263@gmail.com&su=Hiring%20Inquiry&body=Hi%20Zarin,"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
            >
              <MdEmail />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
