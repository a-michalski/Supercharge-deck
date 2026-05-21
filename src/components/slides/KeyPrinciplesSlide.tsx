import { Eye, ListChecks, ShieldCheck, RotateCcw, Target } from 'lucide-react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';

export default function KeyPrinciplesSlide() {
  const principles = [
    {
      icon: Eye,
      title: 'Patrz na kod OCZAMI AI',
      description: 'Załóż że AI NIC nie wie o Twoim projekcie.',
      question: 'Co musi zobaczyć żeby zrozumieć kontekst?',
      tips: [
        'Pokaż strukturę projektu',
        'Wyjaśnij konwencje nazewnictwa',
        'Wskaź istniejące komponenty do reużycia'
      ],
      color: '#46BAD8'
    },
    {
      icon: ListChecks,
      title: 'Zawsze 2-krokowe promptowanie',
      description: 'Plan → Realizacja. Zawsze.',
      question: 'Dlaczego to działa?',
      tips: [
        'Widzisz CO AI zamierza zrobić',
        'Możesz skorygować PRZED generowaniem kodu',
        'Oszczędzasz czas na poprawkach'
      ],
      color: '#FEBE42',
      highlight: true
    },
    {
      icon: ShieldCheck,
      title: 'Trust but verify',
      description: 'Czytaj co AI generuje. Nie akceptuj na ślepo.',
      question: 'Co sprawdzać?',
      tips: [
        'Czy kod ma sens logicznie?',
        'Czy nie łamie istniejącej funkcjonalności?',
        'Czy używa właściwych bibliotek/wzorców?'
      ],
      color: '#31BFC7'
    },
    {
      icon: RotateCcw,
      title: 'Iteruj albo zacznij od nowa',
      description: 'Jak w kuchni - czasem lepiej wyrzucić i zacząć od nowa.',
      question: 'Kiedy zacząć od nowa?',
      tips: [
        'Gdy AI poszło w złym kierunku',
        'Gdy poprawki wymagają więcej pracy niż nowy kod',
        'Gdy możesz lepiej sformułować prompt'
      ],
      color: '#FF438B'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <h2 className="text-4xl text-black" style={{ fontWeight: 800 }}>
          Kluczowe zasady pracy z AI
        </h2>
        <p className="text-gray-700">Stosuj te zasady ZAWSZE - to różnica między frustracją a produktywnością</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {principles.map((principle, idx) => {
          const Icon = principle.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + idx * 0.15 }}
            >
              <Card className={`${
                principle.highlight
                  ? 'bg-gradient-to-br from-[#FEBE42]/20 to-[#FFBF42]/20 border-[#FEBE42] ring-2 ring-[#FEBE42]/50 shadow-lg'
                  : 'bg-white border-gray-200 shadow-md'
              } p-6 h-full hover:shadow-lg transition-shadow`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: `${principle.color}20` }}>
                    <Icon className="w-7 h-7" style={{ color: principle.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl text-black mb-2" style={{ fontWeight: 700 }}>{principle.title}</h3>
                    <p className="text-gray-700 text-sm">{principle.description}</p>
                  </div>
                </div>

                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 mb-4">
                  <p className="text-sm mb-2" style={{ color: principle.color, fontWeight: 700 }}>
                    {principle.question}
                  </p>
                  <ul className="space-y-1.5">
                    {principle.tips.map((tip, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2 text-xs text-gray-700">
                        <span className="flex-shrink-0" style={{ color: principle.color, fontWeight: 700 }}>→</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
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
        <Card className="bg-gradient-to-r from-[#FEBE42] to-[#FFBF42] border-[#FEBE42] shadow-lg p-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Target className="w-6 h-6 text-black" />
            <p className="text-xl text-black" style={{ fontWeight: 800 }}>
              Pamiętaj: AI to bardzo zdolny junior
            </p>
          </div>
          <p className="text-gray-700">
            Szybki i entuzjastyczny, ale potrzebuje nadzoru, jasnych instrukcji i weryfikacji
          </p>
        </Card>
      </motion.div>
    </div>
  );
}
