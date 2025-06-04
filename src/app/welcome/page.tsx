'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { APP_NAME, APP_DESCRIPTION, APP_TAGLINE } from '@/constants/app';

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl w-full text-center space-y-8"
      >
        {/* Logo or Icon */}
        <motion.div 
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative w-20 h-20 mx-auto mb-8"
        >
          <Image
            src="/mail-icon.svg"
            alt="Mail Icon"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Welcome Message */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
        >
          Welcome to {APP_NAME}
        </motion.h1>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {APP_DESCRIPTION} {APP_TAGLINE}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link 
            href="/list"
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg md:text-xl font-medium px-12 py-4 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-200 hover:-translate-y-1"
          >
            Start Journey
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
} 