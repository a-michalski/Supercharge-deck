import { Figma, BookOpen, Boxes, Target } from 'lucide-react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';

export default function McpSetupSlide() {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <Badge className="bg-[#31BFC7] text-white border-[#31BFC7]">
          CZĘŚĆ 2: Setup środowiska
        </Badge>
        <h2 className="text-4xl text-black" style={{ fontWeight: 800 }}>
          MCP + Kontekst dla AI
        </h2>
        <p className="text-gray-700">Model Context Protocol - podłączanie zewnętrznych źródeł danych</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-gradient-to-br from-[#FF438B]/10 to-white border-[#FF438B]/30 shadow-md p-6 h-full hover:shadow-lg transition-shadow">
            <div className="p-3 bg-[#FF438B]/10 rounded-lg w-fit mb-4">
              <Figma className="w-8 h-8 text-[#FF438B]" />
            </div>
            <h3 className="text-xl text-black mb-3" style={{ fontWeight: 700 }}>FIGMA MCP</h3>
            <p className="text-gray-700 mb-4">
              AI może czytać bezpośrednio z Figmy:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-[#FF438B]" style={{ fontWeight: 700 }}>✓</span>
                <span className="text-gray-700">Design tokeny</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FF438B]" style={{ fontWeight: 700 }}>✓</span>
                <span className="text-gray-700">Komponenty</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FF438B]" style={{ fontWeight: 700 }}>✓</span>
                <span className="text-gray-700">Style i spacing</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-white rounded-lg border border-gray-200">
              <p className="text-xs text-gray-700">
                <strong style={{ color: '#FF438B' }}>"Zrób komponent jak ten w Figmie"</strong> - AI będzie wiedział o co chodzi!
              </p>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="bg-gradient-to-br from-[#31BFC7]/10 to-white border-[#31BFC7]/30 shadow-md p-6 h-full hover:shadow-lg transition-shadow">
            <div className="p-3 bg-[#31BFC7]/10 rounded-lg w-fit mb-4">
              <BookOpen className="w-8 h-8 text-[#31BFC7]" />
            </div>
            <h3 className="text-xl text-black mb-3" style={{ fontWeight: 700 }}>CONTEXT 7</h3>
            <p className="text-gray-700 mb-4">
              Jak dawanie AI podręcznika do Twojego projektu:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-[#31BFC7]" style={{ fontWeight: 700 }}>✓</span>
                <span className="text-gray-700">Dokumentacja projektu</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#31BFC7]" style={{ fontWeight: 700 }}>✓</span>
                <span className="text-gray-700">Konwencje kodowania</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#31BFC7]" style={{ fontWeight: 700 }}>✓</span>
                <span className="text-gray-700">Przykłady użycia</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-white rounded-lg border border-gray-200">
              <p className="text-xs text-gray-700">
                AI dostaje pełny kontekst projektu przed rozpoczęciem pracy
              </p>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="bg-gradient-to-br from-[#FEBE42]/10 to-white border-[#FEBE42]/30 shadow-md p-6 h-full hover:shadow-lg transition-shadow">
            <div className="p-3 bg-[#FEBE42]/10 rounded-lg w-fit mb-4">
              <Boxes className="w-8 h-8 text-[#FEBE42]" />
            </div>
            <h3 className="text-xl text-black mb-3" style={{ fontWeight: 700 }}>ATOMIC DESIGN</h3>
            <p className="text-gray-700 mb-4">
              Budowanie UI z małych, reużywalnych części:
            </p>
            <div className="space-y-2 text-sm mb-4">
              <div className="p-2 bg-[#FEBE42]/10 rounded border border-[#FEBE42]/30">
                <span className="text-black" style={{ fontWeight: 700 }}>Atomy</span>
                <span className="text-gray-600 text-xs ml-2">→ Button, Input</span>
              </div>
              <div className="p-2 bg-[#FEBE42]/10 rounded border border-[#FEBE42]/30">
                <span className="text-black" style={{ fontWeight: 700 }}>Molekuły</span>
                <span className="text-gray-600 text-xs ml-2">→ Form Field</span>
              </div>
              <div className="p-2 bg-[#FEBE42]/10 rounded border border-[#FEBE42]/30">
                <span className="text-black" style={{ fontWeight: 700 }}>Organizmy</span>
                <span className="text-gray-600 text-xs ml-2">→ Header, Card</span>
              </div>
            </div>
            <div className="p-3 bg-white rounded-lg border border-gray-200">
              <p className="text-xs text-gray-700">
                AI świetnie rozumie tę terminologię!
              </p>
            </div>
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
              <strong style={{ fontWeight: 700 }}>Cel:</strong> Im więcej kontekstu dasz AI, tym lepsze będą rezultaty
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}