'use client'
import { useState } from 'react'
import Heading from './sub/Heading'
import Image from 'next/image'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Debug: Check if environment variables are loaded
      console.log('Service ID:', process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID)
      console.log('Template ID:', process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID)
      console.log('Public Key:', process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
      
      // Check if all required env variables are present
      if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 
          !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 
          !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.')
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Your Name', // Add this if your template uses it
      }

      console.log('Sending with params:', templateParams)

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )

      console.log('EmailJS Result:', result)

      if (result.status === 200) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitStatus(null), 5000)
      }
    } catch (error) {
      console.error('Failed to send email:', error)
      console.error('Error details:', {
        message: error?.message,
        status: error?.status,
        text: error?.text,
        fullError: JSON.stringify(error, null, 2)
      })
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div id="contact" className="h-screen lg:h-auto py-40 lg:py-20 xs:pb-20 px-96">
      <Heading text={'Get in touch'} />
      <div className="w-full h-full my-auto flex lg:flex-col items-center justify-between lg:justify-center gap-x-20 lg:gap-x-0 gap-y-20">
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Image
            src={'/contact.gif'}
            alt="Contact Image"
            width={400}
            height={400}
            className="w-[400px] rounded-md opacity-80"
          />
        </motion.div>
        <motion.form
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="w-[600px] lg:w-[400px] sm:w-full flex flex-col gap-3"
          onSubmit={handleSubmit}
        >
          <div className="w-full flex lg:flex-col gap-x-3 lg:gap-y-3">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
              placeholder="Your Email"
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
            placeholder="Subject"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="max-h-[250px] min-h-[150px] border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
            placeholder="Write Me..."
            required
          ></textarea>
          
          {/* Submit Button with Loading State */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full border border-yellow-500 rounded-md px-4 py-2 text-sm font-light tracking-wider text-white outline-none transition-all cursor-pointer
              ${isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-yellow-600 hover:bg-yellow-500'}`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mt-2 p-3 bg-green-100 border border-green-400 text-green-700 rounded-md text-sm">
              Message sent successfully! I'll get back to you soon.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mt-2 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm">
              Failed to send message. Please try again or email me directly.
            </div>
          )}
        </motion.form>
      </div>
    </div>
  )
}

export default Contact