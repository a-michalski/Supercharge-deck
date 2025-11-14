import { Code, Shield, AlertTriangle, Target } from 'lucide-react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';

export default function ToolsSetupSlide() {
  const toolCategories = [
    {
      category: 'Chaty / Modele',
      tools: ['ChatGPT (OpenAI)', 'Claude (Anthropic)', 'Gemini (Google)', 'DeepSeek']
    },
    {
      category: 'Współpiloci',
      tools: ['GitHub Copilot', 'Codeium', 'Tabnine']
    },
    {
      category: 'Edytory AI-Native',
      tools: ['Cursor', 'Windsurf', 'Trae', 'Kiro', 'Zed']
    },
    {
      category: 'Narzędzia CLI',
      tools: ['Claude Code', 'Aider', 'GitHub Copilot CLI', 'Open Interpreter']
    },
    {
      category: 'Kreatory Webowe',
      tools: ['v0.dev', 'Lovable', 'Bolt.new', 'Replit Agent']
    },
    {
      category: 'Design do Kodu',
      tools: ['Figma (AI/Make)', 'Uizard']
    }
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
    },
    {
      icon: Shield,
      rule: 'Commit PRZED każdym użyciem AI',
      color: '#FEBE42'
    },
    {
      icon: Shield,
      rule: 'Poproś o plan PRZED wykonaniem',
      color: '#FF438B'
    },
    {
      icon: Shield,
      rule: 'Oddziel eksperymenty od działającej wersji',
      color: '#31BFC7'
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
          className="h-full"
        >
          <Card className="bg-white border-gray-200 shadow-md p-6 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-6 h-6 text-black" />
              <h3 className="text-xl text-black" style={{ fontWeight: 700 }}>Dostępne narzędzia AI</h3>
            </div>
            <ul className="space-y-3 flex-1">
              {toolCategories.map((category, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="p-3 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <div className="text-black" style={{ fontWeight: 600 }}>{category.category}</div>
                  <div className="text-sm text-gray-600">{category.tools.join(', ')}</div>
                </motion.li>
              ))}
            </ul>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="h-full"
        >
          <Card className="bg-gradient-to-br from-[#FEBE42]/10 to-[#FFBF42]/10 border-[#FEBE42]/30 shadow-md p-6 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-[#FF438B]" />
              <h3 className="text-xl text-black" style={{ fontWeight: 700 }}>BHP tworzenia z AI</h3>
            </div>
            <ul className="space-y-3 flex-1">
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
          <div className="flex items-center gap-2 text-black">
            <Target className="w-5 h-5" />
            <p>
              <strong style={{ fontWeight: 700 }}>Kluczowe:</strong> Narzędzie to jedno, ale KONFIGURACJA MIEJSCA PRACY jest ważniejsza
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}