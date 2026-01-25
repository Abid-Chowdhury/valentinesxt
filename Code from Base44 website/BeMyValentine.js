import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ChevronLeft, Sparkles, Stars } from 'lucide-react';

const ConfettiHeart = ({ delay }) => (
  <motion.div
    initial={{ y: -20, x: Math.random() * 400 - 200, opacity: 1, rotate: 0 }}
    animate={{ 
      y: 600, 
      opacity: [1, 1, 0],
      rotate: Math.random() * 360,
    }}
    transition={{ 
      duration: 3,
      delay: delay,
      ease: "easeOut"
    }}
    className="absolute top-0 left-1/2 text-rose-400"
  >
    <Heart size={Math.random() * 20 + 10} fill="currentColor" />
  </motion.div>
);

export default function BeMyValentine() {
  const [answered, setAnswered] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noAttempts, setNoAttempts] = useState(0);

  const handleNoHover = () => {
    const newX = Math.random() * 200 - 100;
    const newY = Math.random() * 100 - 50;
    setNoButtonPosition({ x: newX, y: newY });
    setNoAttempts(prev => prev + 1);
  };

  const noMessages = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You're breaking my heart!",
    "I'll be sad :(",
    "Pretty please?",
    "Just say yes!",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-rose-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-100/30 rounded-full blur-3xl" />

      {/* Confetti when answered */}
      <AnimatePresence>
        {answered && (
          <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {Array.from({ length: 50 }).map((_, i) => (
              <ConfettiHeart key={i} delay={i * 0.05} />
            ))}
          </div>
        )}
      </AnimatePresence>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-6"
        >
          <Link to={createPageUrl('Gallery')}>
            <button className="flex items-center gap-2 text-gray-500 hover:text-rose-500 transition-colors">
              <ChevronLeft className="w-5 h-5" />
              <span>Gallery</span>
            </button>
          </Link>
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 pb-20">
          <AnimatePresence mode="wait">
            {!answered ? (
              <motion.div
                key="question"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center"
              >
                {/* Animated heart */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="mb-8"
                >
                  <Heart className="w-24 h-24 md:w-32 md:h-32 text-rose-500 fill-rose-500 mx-auto drop-shadow-lg" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-rose-400" />
                    <span className="text-rose-400 tracking-[0.2em] uppercase text-sm">The Big Question</span>
                    <Sparkles className="w-5 h-5 text-rose-400" />
                  </div>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-4xl md:text-6xl font-light text-gray-800 mb-12"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  Will you be my
                  <br />
                  <span className="text-rose-600">Valentine?</span>
                </motion.h1>

                {/* Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setAnswered(true)}
                    className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-12 py-4 rounded-full text-xl font-medium shadow-lg shadow-rose-200 hover:shadow-xl hover:shadow-rose-300 transition-shadow"
                  >
                    Yes! 💕
                  </motion.button>

                  <motion.button
                    animate={{ 
                      x: noButtonPosition.x, 
                      y: noButtonPosition.y 
                    }}
                    onMouseEnter={handleNoHover}
                    onTouchStart={handleNoHover}
                    className="bg-gray-100 text-gray-600 px-8 py-4 rounded-full text-lg hover:bg-gray-200 transition-colors"
                  >
                    {noMessages[Math.min(noAttempts, noMessages.length - 1)]}
                  </motion.button>
                </motion.div>

                {noAttempts > 0 && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-8 text-gray-400 text-sm italic"
                  >
                    (The No button is a bit shy... just like my love for you isn't!)
                  </motion.p>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="answer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", bounce: 0.4 }}
                className="text-center"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, -10, 10, -10, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 0.5 }}
                  className="mb-8"
                >
                  <div className="relative inline-block">
                    <Heart className="w-32 h-32 md:w-40 md:h-40 text-rose-500 fill-rose-500 drop-shadow-xl" />
                    <motion.div
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Heart className="w-32 h-32 md:w-40 md:h-40 text-rose-400/30 fill-rose-400/30" />
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h1 
                    className="text-5xl md:text-7xl font-light text-rose-600 mb-4"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    Yay! 🎉
                  </h1>
                  <p className="text-2xl md:text-3xl text-gray-700 mb-8" style={{ fontFamily: 'Georgia, serif' }}>
                    I knew you'd say yes!
                  </p>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-gray-500 text-lg max-w-md mx-auto leading-relaxed"
                  style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
                >
                  "You have my heart, today, tomorrow, and forever. 
                  Happy Valentine's Day, my love! ❤️"
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="mt-12"
                >
                  <Link to={createPageUrl('Home')}>
                    <button className="text-rose-500 hover:text-rose-600 transition-colors flex items-center gap-2 mx-auto">
                      <span>Start Over</span>
                      <Stars className="w-5 h-5" />
                    </button>
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3"
        >
          <Link to={createPageUrl('Home')}>
            <div className="w-2 h-2 rounded-full bg-rose-200 hover:bg-rose-300 transition-colors cursor-pointer" />
          </Link>
          <Link to={createPageUrl('RelationshipStats')}>
            <div className="w-2 h-2 rounded-full bg-rose-200 hover:bg-rose-300 transition-colors cursor-pointer" />
          </Link>
          <Link to={createPageUrl('Gallery')}>
            <div className="w-2 h-2 rounded-full bg-rose-200 hover:bg-rose-300 transition-colors cursor-pointer" />
          </Link>
          <div className="w-2 h-2 rounded-full bg-rose-500" />
        </motion.div>
      </div>
    </div>
  );
}