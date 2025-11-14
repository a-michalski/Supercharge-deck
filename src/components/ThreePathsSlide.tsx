import { Code, Image, Figma } from 'lucide-react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

export default function ThreePathsSlide() {
  const paths = [
    {
      icon: Code,
      number: '1',
      title: 'KOD OD ZERA',
      description: 'Mówisz AI czego chcesz i AI tworzy od podstaw',
      modes: [
        { name: 'Spec Driven', desc: 'Pełna specyfikacja z góry - szczegółowy opis' },
        { name: 'Vibe Mode', desc: 'Iteracyjne doprecyzowywanie krok po kroku' }
      ],
      example: '"Stwórz komponent tabeli z sortowaniem i paginacją"',
      color: '#46BAD8'
    },
    {
      icon: Image,
      number: '2',
      title: 'KOD Z REFERENCJĄ',
      description: 'Pokazujesz AI przykład i mówisz "zrób coś podobnego"',
      modes: [
        { name: 'Obrazek', desc: 'Screenshot z Dribbble, innej strony' },
        { name: 'Kod', desc: 'Fragment z innego projektu jako wzór' },
        { name: 'AI Examples', desc: 'Prosisz AI o 3 opcje i wybierasz najlepszą' }
      ],
      example: '"Zobacz ten navbar z stripe.com - zrób podobny"',
      color: '#FF438B'
    },
    {
      icon: Figma,
      number: '3',
      title: 'KOD Z DESIGNU',
      description: 'AI czyta bezpośrednio z Figmy i generuje kod zgodny z designem',
      modes: [
        { name: 'Design Tokens', desc: 'Kolory, spacing, typography z Figmy' },
        { name: 'Komponenty', desc: '1:1 implementacja designu' },
        { name: 'Atomic Design', desc: 'Automatyczna dekompozycja na atomy/molekuły' }
      ],
      example: '"Przeanalizuj ProductCard z Figmy i zaimplementuj"',
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
          CZĘŚĆ 3: Efektywne promptowanie
        </Badge>
        <h2 className="text-4xl text-black" style={{ fontWeight: 800 }}>
          Trzy ścieżki kodowania z AI
        </h2>
        <p className="text-gray-700">Każda ma swoje miejsce - wybierz odpowiednią do sytuacji</p>
      </motion.div>

      <div className="grid gap-6">
        {paths.map((path, idx) => {
          const Icon = path.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + idx * 0.2 }}
            >
              <Card className="bg-white border-gray-200 shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 rounded-lg" style={{ backgroundColor: `${path.color}20` }}>
                        <Icon className="w-8 h-8" style={{ color: path.color }} />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wide" style={{ color: path.color, fontWeight: 700 }}>
                          Ścieżka {path.number}
                        </div>
                        <h3 className="text-2xl text-black" style={{ fontWeight: 800 }}>{path.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{path.description}</p>
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <p className="text-xs text-gray-600 uppercase tracking-wide mb-1" style={{ fontWeight: 600 }}>Przykład:</p>
                      <p className="text-sm" style={{ color: path.color, fontWeight: 600 }}>{path.example}</p>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <div className="text-xs text-gray-600 uppercase tracking-wide mb-3" style={{ fontWeight: 600 }}>Tryby pracy:</div>
                    <div className="grid gap-3">
                      {path.modes.map((mode, mIdx) => (
                        <motion.div
                          key={mIdx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + idx * 0.2 + mIdx * 0.1 }}
                          className="p-4 bg-gray-50 rounded-lg border border-gray-200"
                        >
                          <div className="mb-1" style={{ color: path.color, fontWeight: 700 }}>{mode.name}</div>
                          <div className="text-sm text-gray-700">{mode.desc}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="text-center"
      >
        <Card className="bg-gradient-to-r from-[#FEBE42] to-[#FFBF42] border-[#FEBE42] shadow-lg p-4 inline-block">
          <p className="text-black">
            💡 <strong style={{ fontWeight: 700 }}>Pro tip:</strong> Możesz łączyć ścieżki - np. kod z referencją + design z Figmy
          </p>
        </Card>
      </motion.div>
    </div>
  );
}
