import { motion } from 'motion/react';
const adamPhoto = '/assets/e474974afb2f1044fce806ad2b0849fe2fbde677.png';

export default function TitleSlide() {
  return (
    <div className="w-full min-h-[80vh] relative overflow-hidden bg-[#FEBE42] rounded-lg">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-8 left-8 flex items-center gap-2 z-20"
      >
        <div className="flex gap-0.5">
          <div className="w-3 h-12 bg-black transform skew-x-[-20deg]"></div>
          <div className="w-3 h-12 bg-black transform skew-x-[-20deg]"></div>
          <div className="w-3 h-12 bg-black transform skew-x-[-20deg]"></div>
        </div>
        <span className="text-3xl text-black" style={{ fontWeight: 800 }}>supercharge</span>
      </motion.div>

      {/* Main Content Container */}
      <div className="w-full h-full flex items-center justify-between relative pt-20 pb-16 px-12">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="z-10 max-w-xl"
        >
          <h1 className="text-5xl text-black mb-4 leading-tight" style={{ fontWeight: 800 }}>
            Ulepszanie prototypu
          </h1>
          <h2 className="text-3xl text-black mb-8 leading-tight" style={{ fontWeight: 800 }}>
            (vibe design, vibe coding)
          </h2>
          
          <p className="text-xl text-black/90 mb-12" style={{ fontWeight: 600 }}>
            Buduj produkty dzięki AI, zamiast<br />
            tylko planować i projektować.
          </p>

          <div className="space-y-3">
            <p className="text-2xl text-black" style={{ fontWeight: 700 }}>
              Adam Michalski
            </p>
            <p className="text-xl text-black/90" style={{ fontWeight: 600 }}>
              13.11
            </p>
          </div>
        </motion.div>

        {/* Right Side - Large Arrows and Photo */}
        <div className="relative flex-1 flex justify-end items-center min-h-[500px]">
          {/* Large White Arrow Shapes */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute right-20 flex gap-4 z-0"
          >
            <div className="w-56 h-96 bg-white/60 transform skew-x-[-15deg] rounded-2xl"></div>
            <div className="w-56 h-96 bg-white/60 transform skew-x-[-15deg] rounded-2xl"></div>
          </motion.div>

          {/* Photo - Positioned in front of arrows */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative z-10"
          >
            <div className="relative">
              <img 
                src={adamPhoto} 
                alt="Adam Michalski"
                className="w-[450px] h-auto object-cover"
                style={{ 
                  filter: 'grayscale(100%) contrast(1.1)',
                  mixBlendMode: 'multiply',
                  maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
