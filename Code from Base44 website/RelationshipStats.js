import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { 
  Heart, Calendar, MapPin, Coffee, Film, 
  Plane, Music, Utensils, ChevronLeft, ChevronRight,
  Sparkles, Star, Moon, Sun
} from 'lucide-react';

const StatCard = ({ icon: Icon, value, label, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: delay, duration: 0.6 }}
    whileHover={{ y: -5, scale: 1.02 }}
    className="bg-white rounded-3xl p-6 shadow-lg shadow-rose-100/50 border border-rose-50"
  >
    <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center mb-4`}>
      <Icon className="w-7 h-7 text-white" />
    </div>
    <h3 className="text-3xl md:text-4xl font-light text-gray-800 mb-1">{value}</h3>
    <p className="text-gray-500 text-sm">{label}</p>
  </motion.div>
);

const MilestoneItem = ({ date, title, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: delay, duration: 0.5 }}
    className="flex items-center gap-4 group"
  >
    <div className="w-3 h-3 rounded-full bg-rose-400 group-hover:scale-125 transition-transform" />
    <div className="flex-1">
      <p className="text-gray-800 font-medium">{title}</p>
      <p className="text-gray-400 text-sm">{date}</p>
    </div>
    <Heart className="w-4 h-4 text-rose-300 opacity-0 group-hover:opacity-100 transition-opacity" />
  </motion.div>
);

export default function RelationshipStats() {
  const stats = [
    { icon: Calendar, value: "365+", label: "Days Together", color: "bg-rose-500" },
    { icon: Heart, value: "∞", label: "Kisses Shared", color: "bg-pink-500" },
    { icon: Coffee, value: "200+", label: "Coffee Dates", color: "bg-amber-500" },
    { icon: Film, value: "50+", label: "Movies Watched", color: "bg-purple-500" },
    { icon: Utensils, value: "100+", label: "Dinners Together", color: "bg-emerald-500" },
    { icon: Plane, value: "3", label: "Trips Taken", color: "bg-sky-500" },
  ];

  const milestones = [
    { date: "January 2024", title: "The day we first met" },
    { date: "February 2024", title: "Our first date" },
    { date: "March 2024", title: "First trip together" },
    { date: "June 2024", title: "Met each other's families" },
    { date: "December 2024", title: "First holiday together" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-white">
      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-rose-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-between items-center mb-12"
        >
          <Link to={createPageUrl('Home')}>
            <button className="flex items-center gap-2 text-gray-500 hover:text-rose-500 transition-colors">
              <ChevronLeft className="w-5 h-5" />
              <span>Home</span>
            </button>
          </Link>
          <Link to={createPageUrl('Gallery')}>
            <button className="flex items-center gap-2 text-gray-500 hover:text-rose-500 transition-colors">
              <span>Gallery</span>
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
            <Sparkles className="w-5 h-5 text-rose-400" />
            <span className="text-rose-400 tracking-[0.2em] uppercase text-sm">Our Journey</span>
            <Sparkles className="w-5 h-5 text-rose-400" />
          </div>
          <h1 
            className="text-4xl md:text-5xl font-light text-gray-800"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Relationship Stats
          </h1>
          <p className="mt-4 text-gray-500 max-w-md mx-auto">
            A glimpse into the beautiful moments we've shared together
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-20">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} delay={0.2 + index * 0.1} />
          ))}
        </div>

        {/* Milestones Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg shadow-rose-100/50 border border-rose-50"
        >
          <div className="flex items-center gap-3 mb-8">
            <Star className="w-6 h-6 text-rose-500" />
            <h2 className="text-2xl font-light text-gray-800" style={{ fontFamily: 'Georgia, serif' }}>
              Our Milestones
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[5px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-rose-300 via-rose-200 to-transparent" />
            
            <div className="space-y-6 pl-8">
              {milestones.map((milestone, index) => (
                <MilestoneItem 
                  key={index} 
                  {...milestone} 
                  delay={1 + index * 0.15}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-12 grid md:grid-cols-2 gap-6"
        >
          <div className="bg-gradient-to-br from-rose-500 to-pink-500 rounded-3xl p-8 text-white">
            <Moon className="w-8 h-8 mb-4 opacity-80" />
            <h3 className="text-xl font-medium mb-2">Late Night Talks</h3>
            <p className="text-rose-100">
              Countless hours spent talking about everything and nothing at all
            </p>
          </div>
          <div className="bg-gradient-to-br from-amber-400 to-orange-400 rounded-3xl p-8 text-white">
            <Sun className="w-8 h-8 mb-4 opacity-80" />
            <h3 className="text-xl font-medium mb-2">Morning Texts</h3>
            <p className="text-amber-100">
              Every morning starts better knowing you're there
            </p>
          </div>
        </motion.div>

        {/* Navigation dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="flex justify-center gap-3 mt-16"
        >
          <Link to={createPageUrl('Home')}>
            <div className="w-2 h-2 rounded-full bg-rose-200 hover:bg-rose-300 transition-colors cursor-pointer" />
          </Link>
          <div className="w-2 h-2 rounded-full bg-rose-500" />
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