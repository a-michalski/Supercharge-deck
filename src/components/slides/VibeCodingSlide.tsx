import { Zap, Target } from 'lucide-react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';

export default function VibeCodingSlide() {
  const vibeCoding = {
    title: 'Vibe Coding',
    icon: Zap,
    color: '#FF438B',
    description: 'Eksploracja bez planu. Rzucasz AI ideę, iterujesz na bieżąco.',
    scope: 'Małe zmiany dotyczące struktury',
    when: 'Prototypy, MVP, eksperymenty (30-50% wizji)',
    warning: 'Technical debt — kod drogi w utrzymaniu na produkcji'
  };

  const asistentDesign = {
    title: 'Asistent Design',
    icon: Target,
    color: '#31BFC7',
    description: 'Eksploracja z planem. Pełny kontekst + reguły (CLAUDE.md, PRD) → AI wykonuje precyzyjnie.',
    scope: 'Większe zmiany wraz z flow',
    when: 'Produkcja, scale, zespoły (80%+ wizji)',
    benefit: '20-50x przyspieszenie, mały tech debt'
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <h2 className="text-4xl text-black" style={{ fontWeight: 800 }}>
          Dwa podejścia do kodowania z AI
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {[vibeCoding, asistentDesign].map((approach, idx) => {
          const Icon = approach.icon;
          const delay = idx * 0.2;

          return (
            <motion.div
              key={approach.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay }}
            >
              <Card className="bg-white border-gray-200 shadow-md p-6 h-full hover:shadow-lg transition-shadow flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: `${approach.color}15` }}>
                    <Icon className="w-8 h-8" style={{ color: approach.color }} />
                  </div>
                  <div>
                    <h3 className="text-2xl text-black" style={{ fontWeight: 700 }}>{approach.title}</h3>
                  </div>
                </div>

                <div className="space-y-4 flex-1">
                  <div className="min-h-[60px]">
                    <p className="text-gray-700">{approach.description}</p>
                  </div>

                  <div className="pt-2">
                    <p className="text-sm text-gray-500">{approach.scope}</p>
                  </div>

                  <div className="pt-3">
                    <h4 className="text-sm uppercase tracking-wide text-gray-600 mb-2" style={{ fontWeight: 600 }}>
                      Kiedy:
                    </h4>
                    <p className="text-gray-700" style={{ fontWeight: 600 }}>{approach.when}</p>
                  </div>

                  <div className="pt-3 border-t border-gray-200">
                    <h4 className="text-sm uppercase tracking-wide text-gray-600 mb-2" style={{ fontWeight: 600 }}>
                      {approach.warning ? 'Zagrożenie:' : 'Korzyść:'}
                    </h4>
                    <p className="text-gray-700">
                      {approach.warning || approach.benefit}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Sekwencja */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center"
      >
        <Card className="bg-white border-gray-200 p-6">
          <h4 className="text-sm uppercase tracking-wide text-gray-600 mb-3" style={{ fontWeight: 600 }}>
            Sekwencja
          </h4>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <span className="text-gray-800" style={{ fontWeight: 700 }}>Vibe (prototyp)</span>
            <span className="text-gray-400">→</span>
            <span className="text-gray-800" style={{ fontWeight: 700 }}>ocena</span>
            <span className="text-gray-400">→</span>
            <span className="text-gray-800" style={{ fontWeight: 700 }}>Asistent Design (produkcja)</span>
            <span className="text-gray-400">→</span>
            <span className="text-gray-800" style={{ fontWeight: 700 }}>hybrid (maintenance)</span>
          </div>
        </Card>
      </motion.div>

      {/* TL;DR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center"
      >
        <Card className="bg-[#FEBE42] border-[#FEBE42] p-4 inline-block">
          <p className="text-black">
            <strong style={{ fontWeight: 800 }}>TL;DR:</strong> Oba są wartościowe w różnych fazach. <strong style={{ fontWeight: 700 }}>Vibe = szybko bez planu.</strong> <strong style={{ fontWeight: 700 }}>Asistent = kontrolowanie bez szybkości.</strong>
          </p>
        </Card>
      </motion.div>
    </div>
  );
}
