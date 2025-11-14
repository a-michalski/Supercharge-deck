import { Zap, Target } from 'lucide-react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

export default function VibeCodingSlide() {
  const vibeCoding = {
    title: 'Vibe Coding',
    icon: Zap,
    color: '#FF438B',
    description: 'Intuicyjne, szybkie, iteracyjne podejście',
    features: [
      'Rzucasz AI pomysł, patrzysz co wygeneruje',
      'Doprecyzowujesz na bieżąco',
      'Jak "jamowanie" z muzykiem'
    ],
    useCases: [
      'Eksperymentowanie bez jasnej wizji',
      'Szybkie prototypy',
      'Małe, proste projekty'
    ]
  };

  const asistentDesign = {
    title: 'Asistent Design',
    icon: Target,
    color: '#31BFC7',
    description: 'Przemyślane, precyzyjne podejście',
    features: [
      'Przygotowujesz pełny kontekst PRZED generowaniem',
      'AI wykonuje precyzyjne zadania',
      'Design, reguły, struktura z góry'
    ],
    useCases: [
      'Jasna wizja i design system',
      'Kod produkcyjny',
      'Zachowanie spójności z projektem'
    ]
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <Badge className="bg-[#FEBE42] text-black border-[#FEBE42]">
          CZĘŚĆ 1: Filozofia pracy
        </Badge>
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
              <Card className="bg-white border-gray-200 shadow-md p-6 h-full hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: `${approach.color}15` }}>
                    <Icon className="w-8 h-8" style={{ color: approach.color }} />
                  </div>
                  <div>
                    <h3 className="text-2xl text-black" style={{ fontWeight: 700 }}>{approach.title}</h3>
                    <p className="text-sm text-gray-600">{approach.description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm uppercase tracking-wide text-gray-600 mb-2" style={{ fontWeight: 600 }}>
                      Jak to działa:
                    </h4>
                    <ul className="space-y-2">
                      {approach.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <span style={{ color: approach.color }}>•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="text-sm uppercase tracking-wide text-gray-600 mb-2" style={{ fontWeight: 600 }}>
                      Kiedy używać:
                    </h4>
                    <ul className="space-y-2">
                      {approach.useCases.map((useCase, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <span style={{ color: approach.color }}>✓</span>
                          <span>{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center"
      >
        <Card className="bg-gray-50 border-gray-200 p-4 inline-block">
          <p className="text-gray-700">
            💡 <strong style={{ fontWeight: 700 }}>W praktyce</strong> używasz obu podejść na zmianę - w zależności od sytuacji
          </p>
        </Card>
      </motion.div>
    </div>
  );
}
