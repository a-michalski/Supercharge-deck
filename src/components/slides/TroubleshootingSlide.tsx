import { RotateCcw, BookOpen, GitBranch, MessageSquare, CheckCircle, Search } from 'lucide-react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';

export default function TroubleshootingSlide() {
  const techniques = [
    {
      icon: BookOpen,
      title: 'MCP Context 7',
      desc: 'Poproś AI o weryfikację przez dokumentację',
      color: '#31BFC7'
    },
    {
      icon: MessageSquare,
      title: '3 alternatywy',
      desc: 'Niech AI przedstawi opcje przed implementacją',
      color: '#46BAD8'
    },
    {
      icon: Search,
      title: 'Wyjaśnij, nie rób',
      desc: 'AI tylko wyjaśnia, Ty podejmujesz decyzje',
      color: '#FF438B'
    },
    {
      icon: CheckCircle,
      title: 'Sprawdź podstawy',
      desc: 'Zweryfikuj czy pliki/obrazki istnieją',
      color: '#F69E2C'
    },
    {
      icon: GitBranch,
      title: 'Nowy branch',
      desc: 'Odtwórz tylko działające rozwiązanie',
      color: '#FEBE42'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <Badge className="bg-[#FEBE42] text-black border-[#FEBE42]">
          TROUBLESHOOTING
        </Badge>
        <h2 className="text-5xl text-black" style={{ fontWeight: 800 }}>
          Rozwiązywanie problemów
        </h2>
        <p className="text-xl text-gray-600" style={{ fontWeight: 600 }}>
          Gdy AI nie rozumie lub kod nie działa
        </p>
      </motion.div>

      {/* Main Rule */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-red-300 border-2 p-8">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
              <RotateCcw className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl text-black mb-3" style={{ fontWeight: 800 }}>
                Złota zasada: Zacznij od nowa
              </h3>
              <p className="text-lg text-gray-700 mb-4" style={{ fontWeight: 600 }}>
                Jeśli 2-3 podejścia nie działają - STOP. Utnij rozmowę i rozpocznij nową sesję.
              </p>
              <div className="bg-white/60 rounded-lg p-4 space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-red-500 flex-shrink-0">•</span>
                  <span className="text-gray-700">Dłuższa rozmowa = więcej błędnie zrozumianych informacji</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500 flex-shrink-0">•</span>
                  <span className="text-gray-700">Dalsze tłumaczenie marnuje czas i tokeny</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500 flex-shrink-0">•</span>
                  <span className="text-gray-700">Restart konwersacji często jest najszybszym rozwiązaniem</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Techniques Grid */}
      <div>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-2xl text-black mb-4 text-center"
          style={{ fontWeight: 800 }}
        >
          5 technik ratunkowych
        </motion.h3>
        <div className="grid md:grid-cols-5 gap-3">
          {techniques.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + idx * 0.1 }}
            >
              <Card 
                className="p-4 h-full hover:shadow-lg transition-all cursor-pointer group"
                style={{ 
                  borderWidth: '2px',
                  borderColor: `${tech.color}60`
                }}
              >
                <div className="text-center space-y-2">
                  <div 
                    className="w-12 h-12 rounded-lg mx-auto flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${tech.color}20` }}
                  >
                    <tech.icon className="w-6 h-6" style={{ color: tech.color }} />
                  </div>
                  <div>
                    <h4 className="text-black mb-1" style={{ fontWeight: 700 }}>
                      {tech.title}
                    </h4>
                    <p className="text-xs text-gray-600">
                      {tech.desc}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Tips */}
      <div className="grid md:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.0 }}
        >
          <Card className="bg-gradient-to-r from-[#31BFC7]/20 to-[#46BAD8]/20 border-[#31BFC7] p-4">
            <p className="text-black" style={{ fontWeight: 600 }}>
              <span style={{ fontWeight: 800 }}>MCP Context 7:</span> Wyraźnie wskaż użycie w promptcie - naprawdę pomaga
            </p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1 }}
        >
          <Card className="bg-gradient-to-r from-[#FF438B]/20 to-[#F69E2C]/20 border-[#FF438B] p-4">
            <p className="text-black" style={{ fontWeight: 600 }}>
              <span style={{ fontWeight: 800 }}>Nowy branch:</span> Gdy AI kombinuje - odtwórz tylko co działa
            </p>
          </Card>
        </motion.div>
      </div>

      {/* Final CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <Card className="bg-gradient-to-r from-black to-gray-800 border-none p-6 text-center">
          <p className="text-white text-xl" style={{ fontWeight: 700 }}>
            Pamiętaj: Restart {'>'} Uporczywe tłumaczenie
          </p>
        </Card>
      </motion.div>
    </div>
  );
}