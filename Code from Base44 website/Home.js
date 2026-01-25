import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Heart, ChevronRight } from 'lucide-react';

const FloatingHeart = ({ delay, size, left, duration }) => (
  <motion.div
    className="absolute text-rose-300/40"
    style={{ left: `${left}%`, bottom: -20 }}
    initial={{ y: 0, opacity: 0 }}
    animate={{ 
      y: -800, 
      opacity: [0, 1, 1, 0],
      x: [0, 20, -20, 0]
    }}
    transition={{ 
      duration: duration,
      delay: delay,
      repeat: Infinity,
      ease: "easeOut"
    }}
  >
    <Heart size={size} fill="currentColor" />
  </motion.div>
);

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const hearts = [
    { delay: 0, size: 24, left: 10, duration: 8 },
    { delay: 2, size: 16, left: 25, duration: 10 },
    { delay: 1, size: 32, left: 45, duration: 9 },
    { delay: 3, size: 20, left: 65, duration: 11 },
    { delay: 0.5, size: 28, left: 80, duration: 8.5 },
    { delay: 4, size: 18, left: 90, duration: 10 },
    { delay: 1.5, size: 22, left: 5, duration: 9.5 },
    { delay: 2.5, size: 26, left: 55, duration: 8 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-white relative overflow-hidden">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {hearts.map((heart, i) => (
          <FloatingHeart key={i} {...heart} />
        ))}
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-rose-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="mb-8"
        >
          <div className="relative">
            <Heart 
              className="w-20 h-20 text-rose-500 fill-rose-500" 
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Heart className="w-20 h-20 text-rose-400/50 fill-rose-400/50" />
            </motion.div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-rose-400 tracking-[0.3em] uppercase text-sm font-medium mb-4"
        >
          Valentine's Day 2025
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-5xl md:text-7xl font-light text-gray-800 text-center mb-2"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          <span className="text-rose-600">Your Name</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="my-4"
        >
          <span className="text-3xl text-rose-300">&</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-5xl md:text-7xl font-light text-gray-800 text-center"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          <span className="text-rose-600">Her Name</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-8 text-gray-500 text-lg text-center max-w-md"
          style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
        >
          "A love story written in the stars"
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="mt-12"
        >
          <Link to={createPageUrl('RelationshipStats')}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full shadow-lg shadow-rose-200 transition-all duration-300"
            >
              <span className="font-medium">Explore Our Story</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>

        {/* Navigation dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          className="absolute bottom-8 flex gap-3"
        >
          <div className="w-2 h-2 rounded-full bg-rose-500" />
          <Link to={createPageUrl('RelationshipStats')}>
            <div className="w-2 h-2 rounded-full bg-rose-200 hover:bg-rose-300 transition-colors cursor-pointer" />
          </Link>
          <Link to={createPageUrl('Gallery')}>
            <div className="w-2 h-2 rounded-full bg-rose-200 hover:bg-rose-300 transition-colors cursor-pointer" />
          </Link>
          <Link to={createPageUrl('BeMyValentine')}>
            <div className="w-2 h-2 rounded-full bg-rose-200 hover:bg-rose-300 transition-colors cursor-pointer" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}