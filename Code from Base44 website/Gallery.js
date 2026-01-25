import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Heart, X, Camera, Plus } from 'lucide-react';

const placeholderImages = [
  {
    url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&q=80",
    caption: "Our first adventure together"
  },
  {
    url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80",
    caption: "Sunset walks"
  },
  {
    url: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&q=80",
    caption: "Coffee dates"
  },
  {
    url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80",
    caption: "Making memories"
  },
  {
    url: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?w=800&q=80",
    caption: "Celebrations"
  },
  {
    url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80",
    caption: "Just us"
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-white">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-rose-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-between items-center mb-12"
        >
          <Link to={createPageUrl('RelationshipStats')}>
            <button className="flex items-center gap-2 text-gray-500 hover:text-rose-500 transition-colors">
              <ChevronLeft className="w-5 h-5" />
              <span>Stats</span>
            </button>
          </Link>
          <Link to={createPageUrl('BeMyValentine')}>
            <button className="flex items-center gap-2 text-gray-500 hover:text-rose-500 transition-colors">
              <span>The Question</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Camera className="w-5 h-5 text-rose-400" />
            <span className="text-rose-400 tracking-[0.2em] uppercase text-sm">Memories</span>
            <Camera className="w-5 h-5 text-rose-400" />
          </div>
          <h1 
            className="text-4xl md:text-5xl font-light text-gray-800"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Our Gallery
          </h1>
          <p className="mt-4 text-gray-500 max-w-md mx-auto">
            Every picture tells a story of our love
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {placeholderImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedImage(image)}
              className={`
                relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg
                ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}
                ${index === 0 ? 'aspect-square' : 'aspect-[4/5]'}
              `}
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-medium">{image.caption}</p>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
            </motion.div>
          ))}

          {/* Add Photo Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="aspect-[4/5] rounded-2xl border-2 border-dashed border-rose-200 flex flex-col items-center justify-center gap-3 text-rose-300 hover:border-rose-300 hover:text-rose-400 transition-colors cursor-pointer bg-white/50"
          >
            <Plus className="w-10 h-10" />
            <span className="text-sm">Add your photos</span>
          </motion.div>
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center text-gray-400 text-sm mt-12 italic"
        >
          Replace these with your own special moments together ❤️
        </motion.p>

        {/* Navigation dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center gap-3 mt-12"
        >
          <Link to={createPageUrl('Home')}>
            <div className="w-2 h-2 rounded-full bg-rose-200 hover:bg-rose-300 transition-colors cursor-pointer" />
          </Link>
          <Link to={createPageUrl('RelationshipStats')}>
            <div className="w-2 h-2 rounded-full bg-rose-200 hover:bg-rose-300 transition-colors cursor-pointer" />
          </Link>
          <div className="w-2 h-2 rounded-full bg-rose-500" />
          <Link to={createPageUrl('BeMyValentine')}>
            <div className="w-2 h-2 rounded-full bg-rose-200 hover:bg-rose-300 transition-colors cursor-pointer" />
          </Link>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute top-6 right-6 text-white/80 hover:text-white"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </motion.button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl max-h-[85vh] relative"
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.caption}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <p className="text-white text-center mt-4 text-lg">{selectedImage.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}