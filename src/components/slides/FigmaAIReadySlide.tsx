import { CheckCircle2, Variable, Component, Tag, Layout, FileText, XCircle, Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';

export default function FigmaAIReadySlide() {
  const features = [
    {
      icon: Variable,
      title: 'Variables',
      desc: 'Design tokens dla spójności',
      color: '#31BFC7'
    },
    {
      icon: Component,
      title: 'Components',
      desc: 'Reużywalne elementy',
      color: '#46BAD8'
    },
    {
      icon: Tag,
      title: 'Naming',
      desc: 'Czytelne nazwy warstw',
      color: '#FF438B'
    },
    {
      icon: Layout,
      title: 'Auto Layout',
      desc: 'Responsywne układy',
      color: '#F69E2C'
    },
    {
      icon: FileText,
      title: 'Descriptions',
      desc: 'Dokumentacja dla AI',
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
        <h2 className="text-5xl text-black" style={{ fontWeight: 800 }}>
          Przygotuj Figmę dla AI
        </h2>
        <p className="text-xl text-gray-600" style={{ fontWeight: 600 }}>
          5 elementów które AI pokochają w Twoim designie
        </p>
      </motion.div>

      {/* Main visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="bg-gradient-to-br from-[#FEBE42]/10 to-[#31BFC7]/10 border-[#FEBE42] p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-8 h-8 text-green-500" />
              <h3 className="text-3xl text-black" style={{ fontWeight: 800 }}>
                Dobrze zorganizowany design = Lepszy kod
              </h3>
            </div>
            <p className="text-gray-600">
              AI generuje kod na podstawie struktury Twojego designu
            </p>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-5 gap-4">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
              >
                <Card 
                  className="p-6 h-full hover:shadow-lg transition-all cursor-pointer group"
                  style={{ 
                    borderWidth: '2px',
                    borderColor: `${feature.color}40`
                  }}
                >
                  <div className="text-center space-y-3">
                    <div 
                      className="w-14 h-14 rounded-lg mx-auto flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${feature.color}20` }}
                    >
                      <feature.icon className="w-7 h-7" style={{ color: feature.color }} />
                    </div>
                    <div>
                      <h4 className="text-black mb-1" style={{ fontWeight: 700 }}>
                        {feature.title}
                      </h4>
                      <p className="text-xs text-gray-600">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Why it matters */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Card className="bg-red-50 border-red-200 p-6 h-full">
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="w-6 h-6 text-red-500" />
              <h4 className="text-xl text-black" style={{ fontWeight: 800 }}>
                Bez organizacji:
              </h4>
            </div>
            <div className="space-y-2">
              {[
                'AI generuje chaotyczny kod',
                'Nazwy komponentów to "Rectangle 47"',
                'Trudno zmieniać i utrzymywać',
                'Każda zmiana to przepisywanie od nowa'
              ].map((text, idx) => (
                <div key={idx} className="flex items-start gap-2 text-gray-700">
                  <span className="text-red-500 flex-shrink-0">•</span>
                  <span className="text-sm">{text}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 }}
        >
          <Card className="bg-green-50 border-green-200 p-6 h-full">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-6 h-6 text-green-500" />
              <h4 className="text-xl text-black" style={{ fontWeight: 800 }}>
                Z organizacją:
              </h4>
            </div>
            <div className="space-y-2">
              {[
                'AI generuje czysty, semantyczny kod',
                'Komponenty mają sensowne nazwy',
                'Łatwo modyfikować i skalować',
                'Zmiany w Figmie = aktualizacja kodu'
              ].map((text, idx) => (
                <div key={idx} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{text}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
      >
        <Card className="bg-gradient-to-r from-[#FEBE42] to-[#F69E2C] border-none p-6 text-center">
          <div className="flex items-center justify-center gap-2">
            <Lightbulb className="w-6 h-6 text-black" />
            <p className="text-black text-xl" style={{ fontWeight: 700 }}>
              Dobre nawyki w Figmie = oszczędność czasu przy kodowaniu
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
