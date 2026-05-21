import { Sparkles, X, CheckCircle, Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';

export default function IntroSlide() {
  const topics = [
    'Jak przygotować się do pracy i zarządzać kodem',
    'Jak prowadzić kontekst dla AI',
    'Jak efektywnie promptować - 3 ścieżki pracy'
  ];

  const notCovered = [
    'Mobile',
    'Flutter',
    'Testy jednostkowe i Storybook',
    'Praca z wieloma agentami',
    'Tworzenie backendu'
  ];

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <h1 className="text-5xl text-black" style={{ fontWeight: 800 }}>
          Warsztat: Kodowanie z AI
        </h1>
        <p className="text-xl text-gray-700">
          Demonstracja praktycznej pracy z narzędziami AI w developmencie
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-white border-gray-200 shadow-md p-6 h-full hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-[#31BFC7]" />
              <h3 className="text-xl text-black" style={{ fontWeight: 700 }}>O czym będziemy mówić</h3>
            </div>
            <ul className="space-y-3">
              {topics.map((topic, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-[#31BFC7] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{topic}</span>
                </motion.li>
              ))}
            </ul>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="bg-white border-gray-200 shadow-md p-6 h-full hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <X className="w-6 h-6 text-[#FF438B]" />
              <h3 className="text-xl text-black" style={{ fontWeight: 700 }}>Czego NIE będziemy omawiać</h3>
            </div>
            <ul className="space-y-3">
              {notCovered.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <X className="w-5 h-5 text-[#FF438B] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center"
      >
        <Card className="bg-gradient-to-r from-[#FEBE42] to-[#FFBF42] border-[#FEBE42] shadow-lg p-6 inline-block">
          <p className="text-lg text-black flex items-center gap-2">
            <Lightbulb className="w-5 h-5 flex-shrink-0" />
            <span>
              <strong style={{ fontWeight: 700 }}>Zapamiętaj:</strong> AI to narzędzie, które sprawia że jesteś 10x szybszy,<br />
              ale to TY musisz wiedzieć co robisz!
            </span>
          </p>
        </Card>
      </motion.div>
    </div>
  );
}
