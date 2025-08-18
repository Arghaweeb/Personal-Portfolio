"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiGithub, FiExternalLink, FiFileText } from 'react-icons/fi';
import { PiMicrosoftPowerpointLogo } from "react-icons/pi";


const Project = ({ data, index }) => {
  const [show, setShow] = useState(false);

  const handleLinkClick = (e) => {
    e.stopPropagation(); // Prevent card toggle when clicking links
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: index % 2 === 0 ? 100 : -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, type: "spring", stiffness: 100 }}
      onClick={() => setShow((show) => !show)}
      className="relative w-[350px] sm:w-full h-max border border-yellow-400 rounded-lg cursor-pointer group"
    >
      <Image
        src={data.url}
        alt="Project Image"
        width={400}
        height={400}
        className="rounded-lg opacity-70 group-hover:opacity-90 transition-opacity"
      />
      
      {/* Quick Access Links - Always visible on hover */}
      <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        {data.githubLink && (
          <a
            href={data.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="p-2 bg-black/80 text-white rounded-full hover:bg-yellow-500 transition-colors"
            aria-label="View GitHub Repository"
          >
            <FiGithub className="w-5 h-5" />
          </a>
        )}
        {data.pptLink && (
          <a
            href={data.pptLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="p-2 bg-black/80 text-white rounded-full hover:bg-yellow-500 transition-colors"
            aria-label="View Presentation"
          >
            <PiMicrosoftPowerpointLogo className="w-5 h-5" />
          </a>
        )}
        {data.demoLink && (
          <a
            href={data.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="p-2 bg-black/80 text-white rounded-full hover:bg-yellow-500 transition-colors"
            aria-label="View Demo"
          >
            <FiExternalLink className="w-5 h-5" />
          </a>
        )}
      </div>

      {/* Detailed View on Click */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: show ? 1 : 0 }}
        className="absolute top-0 w-full h-full flex flex-col items-center justify-center gap-y-3 bg-white/95 p-6 rounded-lg dark:bg-zinc-700/95 transition-colors"
      >
        <h2 className="text-lg font-bold tracking-wide text-gray-700 dark:text-white transition-colors">
          {data.name}
        </h2>
        <p className="text-sm text-justify text-gray-600 first-letter:pl-2 dark:text-gray-100 transition-colors">
          {data.desc}
        </p>
        
        {/* Links in expanded view */}
        <div className="flex gap-3 mt-2">
          {data.githubLink && (
            <a
              href={data.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="flex items-center gap-2 px-3 py-1.5 bg-gray-900 text-white rounded-md hover:bg-yellow-500 transition-colors text-sm"
            >
              <FiGithub className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          )}
          {data.pptLink && (
            <a
              href={data.pptLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="flex items-center gap-2 px-3 py-1.5 bg-orange-600 text-white rounded-md hover:bg-yellow-500 transition-colors text-sm"
            >
              <PiMicrosoftPowerpointLogo className="w-4 h-4" />
              <span>Presentation</span>
            </a>
          )}
          {data.demoLink && (
            <a
              href={data.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-yellow-500 transition-colors text-sm"
            >
              <FiExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Project;
