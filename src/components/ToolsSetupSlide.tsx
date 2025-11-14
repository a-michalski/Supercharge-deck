import { Code, Shield, AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

export default function ToolsSetupSlide() {
  const tools = [
    { name: 'GitHub Copilot', desc: 'Wbudowany w VS Code, autouzupełnianie' },
    { name: 'OpenAI Codex', desc: 'Model OpenAI przez API' },
    { name: 'Google Gemini', desc: 'Model Google, coraz lepszy' },
    { name: 'Claude', desc: 'Dobry w rozumowaniu - używany dzisiaj' },
    { name: 'Cursor / Kino', desc: 'Edytory zintegrowane z AI' }
  ];

  const safetyRules = [
    {
      icon: Shield,
      rule: 'NIGDY nie pozwalaj AI na zmiany bez Twojej zgody',
      color: '#FF438B'
    },
    {
      icon: Shield,
      rule: 'ZAWSZE miej backup (Git!)',
      color: '#FEBE42'
    },
    {
      icon: Shield,
      rule: 'Czytaj co AI generuje - nie akceptuj na ślepo',
      color: '#31BFC7'
    },
    {
      icon: Shield,
      rule: 'Testuj często - AI potrafi złamać działające rzeczy',
      color: '#46BAD8'
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <Badge className="bg-[#FEBE42] text-black border-[#FEBE42]">
          CZĘŚĆ 1: Setup
        </Badge>
        <h2 className="text-4xl text-black" style={{ fontWeight: 800 }}>
          Narzędzia + Konfiguracja
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-white border-gray-200 shadow-md p-6">
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-6 h-6 text-black" />
              <h3 className="text-xl text-black" style={{ fontWeight: 700 }}>Dostępne narzędzia AI</h3>
            </div>
            <ul className="space-y-3">
              {tools.map((tool, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="p-3 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <div className="text-black" style={{ fontWeight: 600 }}>{tool.name}</div>
                  <div className="text-sm text-gray-600">{tool.desc}</div>
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
          <Card className="bg-gradient-to-br from-[#FEBE42]/10 to-[#FFBF42]/10 border-[#FEBE42]/30 shadow-md p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-[#FF438B]" />
              <h3 className="text-xl text-black" style={{ fontWeight: 700 }}>BHP Kodowania z AI</h3>
            </div>
            <p className="text-sm text-gray-700 mb-4">
              Podstawowe zasady bezpieczeństwa:
            </p>
            <ul className="space-y-3">
              {safetyRules.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200"
                  >
                    <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: item.color }} />
                    <span className="text-gray-700">{item.rule}</span>
                  </motion.li>
                );
              })}
            </ul>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="text-center"
      >
        <Card className="bg-gradient-to-r from-[#FEBE42] to-[#FFBF42] border-[#FEBE42] shadow-lg p-4 inline-block">
          <p className="text-black">
            🎯 <strong style={{ fontWeight: 700 }}>Kluczowe:</strong> Narzędzie to jedno, ale KONFIGURACJA MIEJSCA PRACY jest ważniejsza
          </p>
        </Card>
      </motion.div>
    </div>
  );
}
