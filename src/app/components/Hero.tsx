"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, scaleIn } from "@/utils/animations";

const Hero = () => {
  return (
    <section className="py-28 container max-w-7xl mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          {...scaleIn}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center mb-4"
        >
          <Image
            src="/profile.jpg"
            alt="Profile Image"
            width={100}
            height={100}
            className="rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary"
          />
        </motion.div>
        <motion.h1
          {...fadeInUp}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Hi, I&apos;m{" "}
          <motion.span
            {...fadeIn}
            transition={{ delay: 0.8 }}
            className="text-primary"
          >
            Zarin Tasnim Chowdhury
          </motion.span>
        </motion.h1>
        <motion.p
          {...fadeInUp}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
        >
          Full Stack Developer
        </motion.p>
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.5 }}
          className="flex justify-center space-x-4 mb-8"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ztasnim263@gmail.com&su=Hiring%20Inquiry&body=Hi%20Zarin,"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <MdEmail />
          </motion.a>
        </motion.div>
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.6 }}
          className="flex flex-col md:flex-row justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/projects"
              className="bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              View Projects
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className=" inline-block w-full bg-gray-500  md:w-auto text-gray-800 dark:text-white px-8 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
