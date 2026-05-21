import { Cpu, FileCode, Bot, Settings } from 'lucide-react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';

export default function CursorToolsSlide() {
  const modes = [
    {
      icon: FileCode,
      name: 'TRYB MANUAL',
      desc: 'Autouzupełnianie na sterydach',
      details: 'Piszesz kod, AI sugeruje. Ty akceptujesz lub ignorujesz.',
      use: 'Szybkie kodowanie gdy wiesz co robisz',
      color: '#46BAD8'
    },
    {
      icon: Settings,
      name: 'TRYB PLAN',
      desc: 'AI najpierw planuje, potem wykonuje',
      details: 'Prosisz AI o plan działania PRZED generowaniem kodu.',
      use: 'MEGA WAŻNE - za chwilę pokażę dlaczego',
      color: '#FEBE42'
    },
    {
      icon: Bot,
      name: 'TRYB AGENT',
      desc: 'AI dostaje autonomię',
      details: 'Może czytać pliki, uruchamiać komendy, wprowadzać zmiany.',
      use: 'Potężne, ale wymaga zaufania i dobrych reguł',
      color: '#FF438B'
    }
  ];

  const models = [
    { name: 'claude-sonnet-4-6', note: 'Codzienna praca — szybki i bardzo dokładny' },
    { name: 'claude-opus-4-7', note: 'Złożone zadania, architektura, refactoring' },
    { name: 'claude-haiku-4-5', note: 'Szybkie zadania, małe poprawki' }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <h2 className="text-4xl text-black" style={{ fontWeight: 800 }}>
          VS Code + Claude Code — Tryby pracy z AI
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {modes.map((mode, idx) => {
          const Icon = mode.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.15 }}
            >
              <Card className="bg-white border-gray-200 shadow-md p-6 h-full hover:shadow-lg transition-shadow">
                <div className="p-3 rounded-lg w-fit mb-4" style={{ backgroundColor: `${mode.color}20` }}>
                  <Icon className="w-8 h-8" style={{ color: mode.color }} />
                </div>
                <h3 className="text-xl text-black mb-2" style={{ fontWeight: 700 }}>{mode.name}</h3>
                <p className="text-sm mb-3" style={{ color: mode.color, fontWeight: 600 }}>{mode.desc}</p>
                <p className="text-gray-700 text-sm mb-3">{mode.details}</p>
                <div className="pt-3 border-t border-gray-200">
                  <p className="text-xs text-gray-600 uppercase tracking-wide mb-1" style={{ fontWeight: 600 }}>Kiedy używać:</p>
                  <p className="text-sm text-gray-700">{mode.use}</p>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Card className="bg-white border-gray-200 shadow-md p-6">
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="w-6 h-6 text-black" />
              <h3 className="text-xl text-black" style={{ fontWeight: 700 }}>Modele AI</h3>
            </div>
            <ul className="space-y-3">
              {models.map((model, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + idx * 0.1 }}
                  className="p-3 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <div className="text-black mb-1" style={{ fontWeight: 600 }}>{model.name}</div>
                  <div className="text-sm text-gray-600">{model.note}</div>
                </motion.li>
              ))}
            </ul>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 }}
        >
          <Card className="bg-gradient-to-br from-[#FEBE42]/20 to-[#FFBF42]/20 border-[#FEBE42]/30 shadow-md p-6">
            <div className="flex items-center gap-3 mb-4">
              <Settings className="w-6 h-6 text-black" />
              <h3 className="text-xl text-black" style={{ fontWeight: 700 }}>RULES - Reguły</h3>
            </div>
            <p className="text-gray-700 mb-4">
              To jest <strong style={{ fontWeight: 700 }}>serce całego systemu</strong>. Pliki jak:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-2">
                <span className="text-[#FEBE42]" style={{ fontWeight: 700 }}>•</span>
                <code className="bg-gray-100 px-2 py-1 rounded text-sm text-black border border-gray-200">CLAUDE.md</code>
                <span className="text-xs text-gray-500">projekt</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FEBE42]" style={{ fontWeight: 700 }}>•</span>
                <code className="bg-gray-100 px-2 py-1 rounded text-sm text-black border border-gray-200">~/.claude/CLAUDE.md</code>
                <span className="text-xs text-gray-500">globalne</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FEBE42]" style={{ fontWeight: 700 }}>•</span>
                <code className="bg-gray-100 px-2 py-1 rounded text-sm text-black border border-gray-200">.claude/settings.json</code>
              </li>
            </ul>
            <p className="text-gray-700 text-sm">
              To są <strong style={{ fontWeight: 600 }}>instrukcje dla AI</strong> jak ma pracować w TWOIM projekcie.
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
