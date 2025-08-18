'use client'
import { questionArrow } from '@/assets'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiDownload, FiFileText } from 'react-icons/fi'

const Question = ({ data, index }) => {
  const [show, setShow] = useState(false)

  const variants = {
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.07,
      },
    }),
    hidden: { opacity: 0, x: -30 },
  }

  const handleCertificateClick = (e) => {
    e.stopPropagation() // Prevent accordion toggle when clicking certificate link
  }

  return (
    <motion.li
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ margin: '50px', once: true }}
      variants={variants}
      className="border border-yellow-500 p-1 rounded-lg"
    >
      <h1
        onClick={() => setShow(!show)}
        className={`flex items-center justify-between text-xl font-extralight text-gray-800 hover:text-yellow-600 tracking-wide cursor-pointer dark:text-white dark:hover:bg-zinc-700 dark:hover:text-yellow-600 transition-all ${
          show && 'border-b text-yellow-600 pb-2'
        }`}
      >
        <div className="flex items-center">
          <motion.span animate={{ rotate: show ? 180 : 0 }}>{questionArrow}</motion.span>
          <span>{data.question}</span>
        </div>
        
        {/* Certificate Link Icon - Always visible */}
        {data.hasLink && (
          <a
            href={data.certificateLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCertificateClick}
            className="flex items-center gap-2 ml-4 px-3 py-1 text-sm 
                     border border-yellow-500 rounded-md
                     text-yellow-600 hover:bg-yellow-500 hover:text-white
                     transition-all duration-200 group"
            aria-label="View Certificate"
          >
            <FiFileText className="w-4 h-4" />
            <span className="hidden sm:inline">Certificate</span>
            <FiExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        )}
      </h1>
      
      <motion.div
        initial={{ scaleY: 0, height: 0, opacity: 0 }}
        animate={{ scaleY: show ? 1 : 0, height: show ? 'auto' : 0, opacity: show ? 1 : 0 }}
        transition={{
          duration: 0.1,
          type: 'spring',
          stiffness: show ? 250 : 50,
          opacity: { delay: show ? 0.2 : 0 },
        }}
        className="origin-top"
      >
        <p className="box-border pl-8 pt-3 text-lg font-extralight tracking-wide text-gray-900 first-letter:pl-3 dark:text-gray-200">
          {data.answer}
        </p>
        
        {/* Alternative: Certificate link inside expanded content */}
        {data.hasLink && ( 
          <div className="pl-8 mt-4 pb-2">
            <a
              href={data.certificateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 
                       bg-yellow-500 hover:bg-yellow-600 
                       text-white rounded-lg transition-colors duration-200
                       group"
            >
              <FiDownload className="w-4 h-4 group-hover:animate-bounce" />
              <span>View Certificate</span>
              <FiExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}
      </motion.div>
    </motion.li>
  )
}

export default Question