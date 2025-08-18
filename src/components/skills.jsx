'use client'
import { skillsData } from '@/assets'
import Heading from './sub/Heading'

const Skills = () => {
  return (
    <div 
      id="skills" 
      className="my-20 px-96 lg:px-20 md:px-10 sm:px-5"
    >
      {/* Title - Using same responsive pattern as your Heading component */}
      <Heading text={'Skills and Technologies'} />
      <div className="flex items-end gap-2 text-gray-400 pb-10">
        <h1 className="text-6xl lg:text-4xl uppercase font-light dark:text-white transition-colors">
          
        </h1>
      </div>
      
      {/* Skills Container - Using similar responsive width pattern as reviews */}
      <div className="w-full max-w-[1200px] lg:max-w-[900px] md:max-w-[100%] mx-auto">
        {/* Skills Categories Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-6 lg:gap-5 md:gap-4 sm:gap-3">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border px-8 py-6 lg:px-6 lg:py-5 md:px-5 md:py-4 sm:px-4 sm:py-3
                         transition-all duration-300 ease-in-out overflow-hidden
                         bg-zinc-50 dark:bg-zinc-700 
                         border-yellow-500
                         hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-yellow-400/20"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 transition-opacity duration-300 ease-in-out
                              bg-gradient-to-br opacity-0 group-hover:opacity-100
                              from-yellow-50 via-yellow-100/50 to-orange-50
                              dark:from-yellow-900/20 dark:via-yellow-800/10 dark:to-orange-900/10" />
              
              {/* Content Container */}
              <div className="relative z-10">
                {/* Category Title */}
                <h3 className="text-xl lg:text-lg md:text-base sm:text-sm font-semibold mb-2 
                               tracking-wider text-yellow-600 dark:text-yellow-400
                               transition-colors duration-300">
                  {category.title}
                </h3>
                
                {/* Skills Description */}
                <p className="text-base lg:text-sm md:text-sm sm:text-xs 
                              font-extralight tracking-wide text-justify
                              text-gray-600 dark:text-white
                              transition-colors duration-300
                              first-letter:pl-2 break-words">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills

//dcdnv