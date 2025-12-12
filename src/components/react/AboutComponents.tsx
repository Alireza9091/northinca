import React from 'react';
import { motion } from "motion/react"

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const FadeIn = ({ children, delay = 0, className = "" }: FadeInProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

interface CardProps {
  title: string;
  content: string;
  delay?: number;
}

export const InfoCard = ({ title, content, delay = 0 }: CardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full"
  >
    <h3 className="text-2xl font-bold text-[#233a6c] mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed text-lg">{content}</p>
  </motion.div>
);

export const ValueCard = ({ title, content, delay }: CardProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    whileHover={{ scale: 1.03, backgroundColor: "#f0f9ff" }}
    className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-blue-200 transition-colors h-full"
  >
    <h3 className="text-xl font-bold text-[#233a6c] mb-3">{title}</h3>
    <p className="text-gray-600">{content}</p>
  </motion.div>
);

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  delay?: number;
}

export const TeamCard = ({ name, role, image, bio, delay = 0 }: TeamMemberProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="group relative w-full h-[400px] rounded-3xl overflow-hidden shadow-lg mx-auto"
    >
        {/* Background Gradient/Shape */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-300"></div>
        <div className="absolute top-0 left-0 right-0 h-32 bg-white rounded-b-[50%] opacity-50"></div>

        {/* Image */}
        <div className="absolute inset- x-0 bottom-0 top-10 flex items-end justify-center px-4 overflow-hidden">
             <motion.img 
                src={image} 
                alt={name} 
                className="w-full h-full object-contain object-bottom drop-shadow-xl"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
            />
        </div>

        {/* Text Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-center">
            <h3 className="text-xl font-bold text-white mb-1 drop-shadow-md">{name}</h3>
            <p className="text-gray-200 font-medium text-sm tracking-wide uppercase drop-shadow-md">{role}</p>
            
            {/* Bio Reveal on Hover */}
            <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                <div className="overflow-hidden">
                    <p className="text-gray-100 text-sm mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {bio}
                    </p>
                </div>
            </div>
        </div>
    </motion.div>
  );
};
