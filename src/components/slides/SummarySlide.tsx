import { GitBranch, Save, ListChecks, Eye, FileCode, Route, RotateCcw, Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';

export default function SummarySlide() {
  const keyTakeaways = [
    {
      icon: GitBranch,
      number: '1',
      title: 'ZAWSZE używaj GIT',
      desc: 'Main branch zawsze stabilny, eksperymenty z AI na oddzielnych branchach.',
      highlight: 'To Twoje ubezpieczenie.',
      color: '#FF438B'
    },
    {
      icon: Save,
      number: '2',
      title: 'Każdy ważny etap = commit',
      desc: 'AI może wygenerować 500 linii w minutę. Commituj często żeby móc cofnąć.',
      highlight: 'Frequent commits save lives.',
      color: '#FEBE42'
    },
    {
      icon: ListChecks,
      number: '3',
      title: '2-krokowe promptowanie',
      desc: 'Plan → Realizacja. Zawsze.',
      highlight: 'To game changer.',
      color: '#31BFC7'
    },
    {
      icon: Eye,
      number: '4',
      title: 'Trust but verify',
      desc: 'AI jest narzędziem, nie magią. Czytaj co generuje.',
      highlight: 'Ty jesteś szefem.',
      color: '#46BAD8'
    },
    {
      icon: FileCode,
      number: '5',
      title: 'Użyj .cursorrules',
      desc: 'To instrukcja obsługi Twojego projektu dla AI.',
      highlight: 'Bez tego - chaos.',
      color: '#FEBE42'
    },
    {
      icon: Route,
      number: '6',
      title: 'Wybierz odpowiednią ścieżkę',
      desc: 'Od zera / Z referencją / Z designu - każda ma swoje miejsce.',
      highlight: 'Dopasuj narzędzie do problemu.',
      color: '#FF438B'
    },
    {
      icon: RotateCcw,
      number: '7',
      title: 'Iteruj albo zacznij od nowa',
      desc: 'Czasem łatwiej cofnąć i zacząć z lepszym promptem.',
      highlight: 'Nie naprawiaj złego kodu.',
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
        <Badge className="bg-[#FEBE42] text-black border-[#FEBE42]">
          PODSUMOWANIE
        </Badge>
        <h2 className="text-5xl text-black" style={{ fontWeight: 800 }}>
          Najważniejsze zasady
        </h2>
        <p className="text-xl text-gray-700">To co wyniesiesz z tego warsztatu</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4">
        {keyTakeaways.map((takeaway, idx) => {
          const Icon = takeaway.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + idx * 0.1 }}
            >
              <Card className="bg-white border-gray-200 shadow-md p-5 h-full hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg flex-shrink-0" style={{ backgroundColor: `${takeaway.color}20` }}>
                    <Icon className="w-5 h-5" style={{ color: takeaway.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-xs font-mono" style={{ color: takeaway.color, fontWeight: 700 }}>
                        {takeaway.number}
                      </span>
                      <h3 className="text-lg text-black" style={{ fontWeight: 700 }}>{takeaway.title}</h3>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">{takeaway.desc}</p>
                    <p className="text-xs" style={{ color: takeaway.color, fontWeight: 600 }}>
                      → {takeaway.highlight}
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
        transition={{ delay: 0.9 }}
      >
        <Card className="bg-gradient-to-r from-[#FEBE42] to-[#FFBF42] border-[#FEBE42] shadow-lg p-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Lightbulb className="w-7 h-7 text-black" />
            <h3 className="text-2xl text-black" style={{ fontWeight: 800 }}>Ostatnia myśl</h3>
          </div>
          <p className="text-lg text-black mb-2">
            <strong style={{ fontWeight: 700 }}>AI nie zastąpi Was jako twórców.</strong>
          </p>
          <p className="text-gray-700">
            To narzędzie które sprawia że jesteście 10x szybsi.<br />
            Ale to <strong style={{ fontWeight: 700 }}>WY</strong> musicie wiedzieć co robicie, rozumieć architekturę, testować rezultaty.
          </p>
          <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
            <p className="text-black italic">
              "Myślcie o AI jak o bardzo zdolnym juniorze - szybki, entuzjastyczny,<br />ale potrzebuje nadzoru."
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}