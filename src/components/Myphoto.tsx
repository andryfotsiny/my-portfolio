'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import photo from '../../public/photo.png';

export const MyPhoto = () => {
  const [scanning, setScanning] = useState(true);

  useEffect(() => {
    // Arrêter le scan après 3 secondes
    const timer = setTimeout(() => {
      setScanning(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div 
      className="relative w-80 h-96 mx-auto my-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Container principal avec effet de verre */}
      <div className="absolute inset-0 glass-panel overflow-hidden">
        {/* Conteneur de la photo avec masque */}
        <div className="relative w-full h-full p-3">
          <Image
              src={photo}
              alt="Profile Photo"
              fill
              className="rounded-lg object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
          />
          
          {/* Overlay avec effet holographique */}
          {/* <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/5 to-neon-green/5 mix-blend-overlay rounded-lg" />
           */}
          {/* Lignes de grille holographique */}
          <div className="absolute inset-0 rounded-lg" 
            style={{
              backgroundImage: `
                linear-gradient(0deg, transparent 24%, 
                ${scanning ? 'rgba(0, 243, 255, 0.03)' : 'rgba(0, 243, 255, 0.01)'} 25%, 
                rgba(0, 243, 255, 0.01) 26%, transparent 27%, transparent 74%, 
                ${scanning ? 'rgba(0, 243, 255, 0.03)' : 'rgba(0, 243, 255, 0.01)'} 75%, 
                rgba(0, 243, 255, 0.01) 76%, transparent 77%, transparent),
                linear-gradient(90deg, transparent 24%, 
                ${scanning ? 'rgba(0, 243, 255, 0.03)' : 'rgba(0, 243, 255, 0.01)'} 25%, 
                rgba(0, 243, 255, 0.01) 26%, transparent 27%, transparent 74%, 
                ${scanning ? 'rgba(0, 243, 255, 0.03)' : 'rgba(0, 243, 255, 0.01)'} 75%, 
                rgba(0, 243, 255, 0.01) 76%, transparent 77%, transparent)`,
              backgroundSize: '30px 30px'
            }}
          />
        </div>

        {/* Cadre HUD avec coins lumineux */}
        <div className="absolute inset-0">
          {/* Coins supérieurs */}
          <motion.div 
            className="absolute top-0 left-0 w-12 h-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-neon-blanc/20 to-transparent" />
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-neon-blanc/20 to-transparent" />
          </motion.div>
          
          <motion.div 
            className="absolute top-0 right-0 w-12 h-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-l from-neon-blanc/20 to-transparent" />
            <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-neon-blanc/20 to-transparent" />
          </motion.div>

          {/* Coins inférieurs */}
          <motion.div 
            className="absolute bottom-0 left-0 w-12 h-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-neon-blanc/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-2 h-full bg-gradient-to-t from-neon-blanc/20 to-transparent" />
          </motion.div>
          
          <motion.div 
            className="absolute bottom-0 right-0 w-12 h-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="absolute bottom-0 right-0 w-full h-2 bg-gradient-to-l from-neon-blanc/20 to-transparent" />
            <div className="absolute bottom-0 right-0 w-2 h-full bg-gradient-to-t from-neon-blanc/20 to-transparent" />
          </motion.div>
        </div>

        {/* Ligne de scan */}
        {scanning && (
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-neon-blue/40 to-transparent"
            initial={{ y: '-100%' }}
            animate={{ y: '100%' }}
            transition={{
              duration: 3,
              ease: "linear",
            }}
          />
        )}

        {/* Indicateurs de statut */}
        <div className="absolute -right-3 top-0 h-full flex flex-col justify-between py-4">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 3 }}
          >
            <div className="w-2 h-2 rounded-full bg-neon-blue shadow-[0_0_10px_rgba(0,243,255,0.5)]" />
            <div className="w-2 h-2 rounded-full bg-neon-green shadow-[0_0_10px_rgba(57,255,20,0.5)]" />
            <div className="w-2 h-2 rounded-full bg-neon-blue shadow-[0_0_10px_rgba(0,243,255,0.5)]" />
          </motion.div>
        </div>

        {/* Info d'identification */}
        <motion.div
          className="absolute -bottom-8 left-0 w-full"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2 }}
        >
          <div className="flex justify-between items-center text-xs font-tech">
            <span className="text-neon-blue">ID: JM_DEV_2024</span>
            <span className="text-neon-green">STATUS: VERIFIED</span>
          </div>
          <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-neon-blue to-transparent mt-2" />
        </motion.div>
      </div>
    </motion.div>
  );
};