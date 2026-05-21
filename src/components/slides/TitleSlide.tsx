import { motion } from 'motion/react';
const adamPhoto = '/assets/03ca683580a888301b569a817e4dda00b79dc8fa.png';
const arrowsImage = '/assets/3e2f7fab03a615e9691c6b8e7c871de6689b9e8c.png';

export default function TitleSlide() {
  return (
    <div className="w-full h-[calc(100vh-160px)] relative overflow-hidden bg-[#FEBE42] rounded-lg">
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
      <div className="w-full h-full flex items-center justify-between relative pt-32 pb-0 px-16">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="z-10 max-w-lg mt-5"
        >
          <h1 className="text-4xl text-black mb-3 leading-tight" style={{ fontWeight: 800 }}>
            Budowanie z AI bez pisania kodu
          </h1>
          
          <p className="text-lg text-black/90 mb-8" style={{ fontWeight: 600 }}>
            Buduj produkty dzięki AI, zamiast<br />
            tylko planować i projektować.
          </p>
        </motion.div>

        {/* Right Side - Large Arrows and Photo - PINNED TO BOTTOM */}
        <div className="absolute bottom-0 right-16 flex items-end justify-end">
          {/* Arrows Image - Background (White, more visible) */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute right-0 bottom-0 z-0"
          >
            <img 
              src={arrowsImage} 
              alt="Arrows background"
              className="w-[750px] h-auto object-contain"
              style={{
                filter: 'brightness(1.8) contrast(0.8)',
                opacity: 0.85
              }}
            />
          </motion.div>

          {/* Photo - Positioned in front of arrows */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative z-10 mr-8"
          >
            <div className="relative">
              <img 
                src={adamPhoto} 
                alt="Adam Michalski"
                className="w-[500px] h-auto object-cover"
                style={{ 
                  filter: 'grayscale(100%) contrast(1.1)',
                  mixBlendMode: 'multiply'
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Right - Author Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-12 right-16 text-right z-20"
        >
          <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg">
            <p className="text-xl text-black" style={{ fontWeight: 700 }}>
              Adam Michalski
            </p>
            <p className="text-lg text-black/90" style={{ fontWeight: 600 }}>
              21.05
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
