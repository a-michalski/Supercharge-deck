import { useState, useEffect } from 'react';
import { GitBranch, AlertCircle, CheckCircle2, ArrowRight, ChevronUp, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

export default function GitManagementSlide() {
  const [subSlide, setSubSlide] = useState(0);

  const branchStrategy = [
    { branch: 'main (master)', rule: 'ZAWSZE działa, NIGDY nie commituj bez testów', color: '#31BFC7' },
    { branch: 'feature/ai-experiment', rule: 'Branch gdzie AI może "szaleć"', color: '#FF438B' },
    { branch: 'Po większym AI change', rule: 'Commit z opisem co się zmieniło', color: '#46BAD8' },
    { branch: 'Przed merge do main', rule: 'Testuj WSZYSTKO', color: '#FEBE42' },
    { branch: 'Pull Request', rule: 'Code review nawet dla zmian AI', color: '#F69E2C' }
  ];

  const workflow = [
    '1. Nowy branch',
    '2. AI generuje zmiany',
    '3. Przejrzyj kod',
    '4. Testuj',
    '5. Commit z opisem',
    '6. Merge do main przez PR'
  ];

  // Keyboard navigation for sub-slides
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown' && subSlide < 1) {
        setSubSlide(1);
      } else if (event.key === 'ArrowUp' && subSlide > 0) {
        setSubSlide(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [subSlide]);

  // Reset to first sub-slide when component unmounts
  useEffect(() => {
    return () => setSubSlide(0);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 500 : -500,
      opacity: 0
    }),
    center: {
      y: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      y: direction < 0 ? 500 : -500,
      opacity: 0
    })
  };

  // Sub-slide 0: GIT - Twoje ubezpieczenie
  const SubSlide0 = () => (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <Badge className="bg-[#FEBE42] text-black border-[#FEBE42]">
          CZĘŚĆ 1: Zarządzanie kodem
        </Badge>
        <h2 className="text-4xl text-black" style={{ fontWeight: 800 }}>
          GIT - Twoje ubezpieczenie
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="bg-gradient-to-br from-[#FF438B]/10 to-[#FEBE42]/10 border-[#FF438B]/30 shadow-md p-6">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-8 h-8 text-[#FF438B] flex-shrink-0" />
            <div>
              <h3 className="text-xl text-black mb-2" style={{ fontWeight: 700 }}>Dlaczego GIT jest KRYTYCZNY?</h3>
              <p className="text-gray-700 mb-3">
                AI potrafi zmienić <strong style={{ fontWeight: 700 }}>50 plików w 30 sekund</strong>. I czasem... to nie jest dokładnie to czego chciałeś.
              </p>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-700 italic">
                  <strong style={{ fontWeight: 600 }}>Historia z pola bitwy:</strong> Prosiłem AI żeby zmienił obsługę formularzy. 
                  AI "przy okazji" zrefaktorował cały system state management. 2 godziny pracy wróciły do punktu zerowego. 
                  Na szczęście miałem branch i mogłem wrócić. Bez tego - straciłbym cały dzień.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-center"
      >
        <Card className="bg-gradient-to-r from-[#FEBE42] to-[#FFBF42] border-[#FEBE42] shadow-lg p-4 inline-block">
          <p className="text-black">
            💾 <strong style={{ fontWeight: 700 }}>Pamiętaj:</strong> GIT to jak cofnięcie w grze do ostatniego save pointa
          </p>
        </Card>
      </motion.div>
    </div>
  );

  // Sub-slide 1: Strategia Branch + Workflow
  const SubSlide1 = () => (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <Badge className="bg-[#FEBE42] text-black border-[#FEBE42]">
          CZĘŚĆ 1: Zarządzanie kodem
        </Badge>
        <h2 className="text-4xl text-black" style={{ fontWeight: 800 }}>
          Strategia Branch & Workflow
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-white border-gray-200 shadow-md p-6 h-full">
            <div className="flex items-center gap-3 mb-4">
              <GitBranch className="w-6 h-6 text-black" />
              <h3 className="text-xl text-black" style={{ fontWeight: 700 }}>Strategia Branch</h3>
            </div>
            <ul className="space-y-3">
              {branchStrategy.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="p-3 rounded-lg border"
                  style={{ 
                    backgroundColor: `${item.color}15`, 
                    borderColor: `${item.color}40` 
                  }}
                >
                  <div className="mb-1" style={{ color: item.color, fontWeight: 700 }}>{item.branch}</div>
                  <div className="text-sm text-gray-700">{item.rule}</div>
                </motion.li>
              ))}
            </ul>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="bg-white border-gray-200 shadow-md p-6 h-full">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="w-6 h-6 text-[#31BFC7]" />
              <h3 className="text-xl text-black" style={{ fontWeight: 700 }}>Dobry Workflow</h3>
            </div>
            <div className="space-y-3">
              {workflow.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-[#31BFC7]/20 flex items-center justify-center text-[#31BFC7]" style={{ fontWeight: 700 }}>
                    {idx + 1}
                  </div>
                  <div className="flex-1 p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <span className="text-gray-700">{step.replace(/^\d+\.\s/, '')}</span>
                  </div>
                  {idx < workflow.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  )}
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="text-center"
      >
        <Card className="bg-gradient-to-r from-[#FEBE42] to-[#FFBF42] border-[#FEBE42] shadow-lg p-4 inline-block">
          <p className="text-black">
            💾 <strong style={{ fontWeight: 700 }}>Pamiętaj:</strong> GIT to jak cofnięcie w grze do ostatniego save pointa
          </p>
        </Card>
      </motion.div>
    </div>
  );

  return (
    <div className="relative w-full">
      {/* Vertical Navigation Panel - Right Side */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-50 opacity-30 hover:opacity-100 transition-opacity duration-300">
        {/* Up Arrow */}
        <button
          onClick={() => setSubSlide(0)}
          disabled={subSlide === 0}
          className="w-8 h-8 rounded-full bg-white/80 border border-black/10 hover:bg-[#FEBE42] hover:border-[#FEBE42]/50 disabled:opacity-20 transition-all flex items-center justify-center"
          style={{ cursor: subSlide === 0 ? 'not-allowed' : 'pointer' }}
          title="Przewiń w górę"
        >
          <ChevronUp className="w-4 h-4 text-black/70" />
        </button>

        {/* Dots Indicator */}
        <div className="flex flex-col gap-2">
          <button
            onClick={() => setSubSlide(0)}
            className={`w-2.5 h-2.5 rounded-full border transition-all ${
              subSlide === 0 
                ? 'bg-[#FEBE42] border-[#FEBE42] scale-110' 
                : 'bg-white/80 border-black/20 hover:bg-[#FEBE42]/40'
            }`}
            style={{ cursor: 'pointer' }}
            title="Część 1"
          />
          <button
            onClick={() => setSubSlide(1)}
            className={`w-2.5 h-2.5 rounded-full border transition-all ${
              subSlide === 1 
                ? 'bg-[#FEBE42] border-[#FEBE42] scale-110' 
                : 'bg-white/80 border-black/20 hover:bg-[#FEBE42]/40'
            }`}
            style={{ cursor: 'pointer' }}
            title="Część 2"
          />
        </div>

        {/* Down Arrow */}
        <button
          onClick={() => setSubSlide(1)}
          disabled={subSlide === 1}
          className="w-8 h-8 rounded-full bg-white/80 border border-black/10 hover:bg-[#FEBE42] hover:border-[#FEBE42]/50 disabled:opacity-20 transition-all flex items-center justify-center"
          style={{ cursor: subSlide === 1 ? 'not-allowed' : 'pointer' }}
          title="Przewiń w dół"
        >
          <ChevronDown className="w-4 h-4 text-black/70" />
        </button>
      </div>

      {/* Sub-slides with Animation */}
      <AnimatePresence initial={false} custom={subSlide} mode="wait">
        <motion.div
          key={subSlide}
          custom={subSlide}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            y: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
        >
          {subSlide === 0 ? <SubSlide0 /> : <SubSlide1 />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
