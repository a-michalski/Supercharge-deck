import { motion } from 'motion/react';
import { Badge } from '../ui/badge';
import { ExternalLink } from 'lucide-react';
const adamPhoto = '/assets/03ca683580a888301b569a817e4dda00b79dc8fa.png';

export default function AboutSlide() {
  const companies = [
    'Dynatrace',
    'RTB House',
    'UXPin',
    'Young Digital Planet',
    'Nokaut',
    '+ inne'
  ];

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8">
      {/* Main Content - Two columns on desktop, stacked on mobile */}
      <div className="grid lg:grid-cols-[1fr_320px] gap-8 items-start">
        {/* Left Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          {/* Header - Name */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-5xl text-black" style={{ fontWeight: 800 }}>
              Adam Michalski
            </h2>
          </motion.div>

          {/* Tagline */}
          <div>
            <p className="text-2xl text-gray-700" style={{ fontWeight: 600 }}>
              15+ lat tworzenia produktów cyfrowych
            </p>
          </div>

          {/* Background */}
          <div>
            <h3 className="text-lg text-black mb-2" style={{ fontWeight: 700 }}>
              Wykształcenie
            </h3>
            <p className="text-gray-700">
              Psychologia + HCI (Human-Computer Interaction)
            </p>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-lg text-black mb-3" style={{ fontWeight: 700 }}>
              Doświadczenie
            </h3>
            <div className="flex flex-wrap gap-2 items-center">
              {companies.slice(0, 5).map((company, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + idx * 0.05 }}
                >
                  <Badge 
                    variant="outline" 
                    className="border-black/20 text-black hover:bg-[#FEBE42]/10 hover:border-[#FEBE42] transition-colors"
                  >
                    {company}
                  </Badge>
                </motion.div>
              ))}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
                className="text-gray-500 text-sm"
              >
                + inne
              </motion.span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg text-black mb-3" style={{ fontWeight: 700 }}>
              Kontakt
            </h3>
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-2 text-gray-700 hover:text-[#FEBE42] transition-colors"
              >
                <span>•</span>
                <a 
                  href="https://adammichalski.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5"
                >
                  adammichalski.com
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-2 text-gray-700 hover:text-[#FEBE42] transition-colors"
              >
                <span>•</span>
                <a 
                  href="https://uxairforce.pl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5"
                >
                  uxairforce.pl
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="hidden lg:flex justify-center lg:justify-end"
        >
          <div className="w-[320px] rounded-lg overflow-hidden border-4 border-[#FEBE42] shadow-xl">
            <img 
              src={adamPhoto} 
              alt="Adam Michalski" 
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}