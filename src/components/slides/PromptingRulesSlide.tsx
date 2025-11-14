import { Shield, Target, MessageSquare, Lock, Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';

export default function PromptingRulesSlide() {
  const rules = [
    {
      icon: Target,
      number: '1',
      title: 'Poznaj środowisko PRZED zmianami',
      desc: 'Agent AI musi NAJPIERW poznać środowisko, zanim zacznie cokolwiek zmieniać.',
      analogy: 'To jak dać komuś mapę przed wysłaniem go w teren.',
      color: '#46BAD8'
    },
    {
      icon: MessageSquare,
      number: '2',
      title: 'Mów CZEGO oczekujesz, nie JAK',
      desc: 'Napisz CZEGO oczekujesz, nie JAK to zrobić.',
      analogy: 'AI jest lepsze w wymyślaniu "jak" niż myślisz.',
      color: '#FF438B'
    },
    {
      icon: Shield,
      number: '3',
      title: 'Poproś o plan PRZED wykonaniem',
      desc: 'Poproś AI o wytłumaczenie jak rozumie zadanie i co planuje zrobić, ZANIM pozwolisz mu to zrobić.',
      analogy: 'To jest GAME CHANGER.',
      color: '#FEBE42',
      highlight: true
    },
    {
      icon: Lock,
      number: '4',
      title: 'Agent NIE MOŻE zmieniać bez pozwolenia',
      desc: 'Agent NIE MOŻE zmieniać rzeczy bez pozwolenia.',
      analogy: 'Nawet jeśli wydaje mu się że to dobry pomysł.',
      color: '#31BFC7'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <Badge className="bg-[#9333EA] text-white border-[#9333EA]">
          CZĘŚĆ 3: Komunikacja z AI
        </Badge>
        <h2 className="text-4xl text-black" style={{ fontWeight: 800 }}>
          Kluczowe zasady promptowania
        </h2>
        <p className="text-gray-700">Jak rozmawiać z AI żeby dostać to czego chcesz</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {rules.map((rule, idx) => {
          const Icon = rule.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + idx * 0.15 }}
            >
              <Card className={`${
                rule.highlight 
                  ? 'bg-gradient-to-br from-[#FEBE42]/20 to-[#FFBF42]/20 border-[#FEBE42] ring-2 ring-[#FEBE42]/50 shadow-lg' 
                  : 'bg-white border-gray-200 shadow-md'
              } p-6 h-full hover:shadow-lg transition-shadow`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: `${rule.color}20` }}>
                    <Icon className="w-6 h-6" style={{ color: rule.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs uppercase tracking-wide mb-1" style={{ color: rule.color, fontWeight: 700 }}>
                      Zasada {rule.number}
                    </div>
                    <h3 className="text-xl text-black mb-2" style={{ fontWeight: 700 }}>{rule.title}</h3>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-3">
                  {rule.desc}
                </p>
                
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-2">
                    <Lightbulb className="w-4 h-4" style={{ color: rule.color }} />
                    <p className="text-sm" style={{ color: rule.color, fontWeight: 600 }}>
                      {rule.analogy}
                    </p>
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
      >
        <Card className="bg-gradient-to-r from-[#FEBE42] to-[#FFBF42] border-[#FEBE42] shadow-lg p-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Target className="w-7 h-7 text-black" />
              <h3 className="text-2xl text-black" style={{ fontWeight: 800 }}>Najważniejsze</h3>
            </div>
            <p className="text-lg text-black">
              <strong style={{ fontWeight: 700 }}>2-krokowe promptowanie:</strong> Plan → Realizacja
            </p>
            <p className="text-gray-700 mt-2">
              Zaraz pokażę wam różnicę - jest ogromna!
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}