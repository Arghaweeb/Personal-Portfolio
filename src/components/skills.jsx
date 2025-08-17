'use client'
import { skillsData } from '@/assets'

const Skills = () => {
  return (
    <div id="skills" className="min-h-screen flex flex-col items-center justify-center py-20 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-semibold text-center mb-16 text-gray-900 tracking-wide">
          SKILLS AND TECHNOLOGIES
        </h2>
        
        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl border border-gray-200 px-8 py-6 
                         hover:shadow-xl hover:border-yellow-400 
                         transition-all duration-300 ease-in-out overflow-hidden"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-yellow-100/50 to-orange-50 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
              
              {/* Content Container - Add relative and z-10 to keep content above gradient */}
              <div className="relative z-10">
                {/* Category Title */}
                <h3 className="text-base font-semibold text-gray-900 mb-2 
                               group-hover:text-gray-800 transition-colors duration-300">
                  {category.title}
                </h3>
                
                {/* Skills Description */}
                <p className="text-sm text-gray-500 leading-relaxed 
                              group-hover:text-gray-600 transition-colors duration-300">
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

