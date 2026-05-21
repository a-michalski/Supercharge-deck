import { useState, useEffect } from 'react';
import { MessageCircle, HelpCircle, ChevronUp, ChevronDown, Rocket, Sparkles, Mail, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from '../ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

export default function QASlide() {
  const [subSlide, setSubSlide] = useState(0);

  const faqs = [
    {
      question: 'Czy AI nie zabierze nam pracy?',
      answer: 'Nie AI zabierze Ci pracę, tylko developer który umie z AI pracować. To narzędzie które podnosi poziom gry - trzeba się go nauczyć. Podobnie jak w przeszłości - nie komputer zabrał pracę, tylko ci co nie umieli z niego korzystać.'
    },
    {
      question: 'Które narzędzie jest najlepsze?',
      answer: 'Zależy od Twoich potrzeb. Cursor dla full integration z edytorem, Copilot dla prostoty i integracji z VS Code, Claude API dla custom solutions. Testuj co działa dla Ciebie - większość ma darmowe triala.'
    },
    {
      question: 'Jak długo zajmuje nauka?',
      answer: 'Podstawy - tydzień intensywnej pracy. Płynna praca - około miesiąc. Ale musisz używać na codzień. To jak nauka jazdy na rowerze - teoria to jedno, praktyka to drugie. Im więcej kodujesz z AI, tym lepiej rozumiesz jak z nim rozmawiać.'
    },
    {
      question: 'Co z bezpieczeństwem kodu? AI może wyciekać dane?',
      answer: 'Używaj lokalnych modeli lub enterprise versions które mają kontrakty o nieużywaniu danych do treningu. NIGDY nie wysyłaj API keys czy credentials do AI. Większość firm oferuje "zero retention" plany gdzie Twój kod nie jest zapisywany.'
    },
    {
      question: 'Czy muszę znać programowanie żeby używać AI?',
      answer: 'TAK! AI to narzędzie dla programistów, nie zamiennik programistów. Musisz rozumieć co AI generuje, żeby ocenić czy to ma sens. AI może napisać błędny kod który wygląda poprawnie - musisz to wychwycić.'
    },
    {
      question: 'Co z testami? AI pisze testy?',
      answer: 'Tak, AI świetnie pisze unit testy i integration testy. Ale strategię testowania musisz określić Ty - co testować, jakie edge cases, jaki poziom pokrycia. AI napisze test case\'y które mu podasz, ale nie wymyśli strategii za Ciebie.'
    },
    {
      question: 'Jak zacząć? Od czego polecasz?',
      answer: 'Zacznij od małego projektu side project. Zainstaluj Cursor lub Copilot, stwórz .cursorrules, i po prostu koduj. Pierwszy projekt będzie trudny, trzeci łatwiejszy, przy dziesiątym będziesz latać. Najważniejsze to zacząć!'
    }
  ];

  // Keyboard navigation for sub-slides
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown' && subSlide < 2) {
        setSubSlide(subSlide + 1);
      } else if (event.key === 'ArrowUp' && subSlide > 0) {
        setSubSlide(subSlide - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [subSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 500 : -500,
      opacity: 0
    }),
    center: {
      y: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      y: direction < 0 ? 500 : -500,
      opacity: 0
    })
  };

  // Sub-slide 0: FAQ - Pytania i odpowiedzi
  const SubSlide0 = () => (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <h2 className="text-5xl text-black" style={{ fontWeight: 800 }}>
          Pytania i odpowiedzi
        </h2>
        <p className="text-gray-700">Najczęściej zadawane pytania</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="bg-white border-gray-200 shadow-md p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left hover:text-[#FEBE42] transition-colors">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-[#FEBE42] flex-shrink-0 mt-1" />
                    <span className="text-black" style={{ fontWeight: 600 }}>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pl-8 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </motion.div>
    </div>
  );

  // Sub-slide 1: Dziękuję za udział!
  const SubSlide1 = () => (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <h2 className="text-5xl text-black flex items-center justify-center gap-3" style={{ fontWeight: 800 }}>
          <span>Dziękuję za udział!</span>
          <Rocket className="w-12 h-12" />
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center"
      >
        <Card className="bg-gradient-to-br from-[#31BFC7]/20 to-[#46BAD8]/20 border-[#31BFC7]/30 shadow-md p-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h3 className="text-3xl text-black" style={{ fontWeight: 800 }}>Dziękuję za udział!</h3>
            <Rocket className="w-8 h-8" />
          </div>
          <p className="text-lg text-gray-700 mb-4">
            Pamiętajcie - najważniejsze to po prostu <strong style={{ fontWeight: 700 }}>zacząć</strong>.
          </p>
          <p className="text-gray-700">
            Pierwszy projekt z AI będzie trudny, trzeci będzie łatwiejszy,<br />
            przy dziesiątym będziecie latać.
          </p>
          <div className="mt-6 text-2xl text-black flex items-center justify-center gap-2" style={{ fontWeight: 700 }}>
            <span>Powodzenia w kodowaniu z AI!</span>
            <Sparkles className="w-6 h-6" />
          </div>
        </Card>
      </motion.div>
    </div>
  );

  // Sub-slide 2: Kontakt i społeczność
  const SubSlide2 = () => (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <h2 className="text-5xl text-black" style={{ fontWeight: 800 }}>
          Kontakt i społeczność
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="bg-gradient-to-r from-[#FEBE42]/20 to-[#FFBF42]/20 border-[#FEBE42]/30 shadow-md p-6 text-center">
          <MessageCircle className="w-12 h-12 text-[#FEBE42] mx-auto mb-4" />
          <h3 className="text-2xl text-black mb-3" style={{ fontWeight: 700 }}>Masz więcej pytań?</h3>
          <p className="text-gray-700 mb-4">
            To był warsztat demonstracyjny - teraz czas na Twoje pytania!
          </p>
          <div className="flex flex-col gap-2 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-[#FEBE42]" />
              <p>Możesz zadać pytanie teraz</p>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#FEBE42]" />
              <p>Możesz skontaktować się później</p>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#FEBE42]" />
              <p>Dołącz do społeczności (Discord, Twitter, Reddit)</p>
            </div>
          </div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-center"
      >
        <Card className="bg-gradient-to-r from-[#31BFC7]/10 to-[#46BAD8]/10 border-[#31BFC7]/20 shadow-sm p-6">
          <div className="flex items-center justify-center gap-2 text-gray-700">
            <Sparkles className="w-5 h-5" />
            <p>
              <strong style={{ fontWeight: 700 }}>Baw się dobrze kodując z AI!</strong>
            </p>
            <Sparkles className="w-5 h-5" />
          </div>
        </Card>
      </motion.div>
    </div>
  );

  return (
    <div className="relative w-full">
      {/* Vertical Navigation Panel - Right Side */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-50 opacity-30 hover:opacity-100 transition-opacity duration-300">
        {/* Up Arrow */}
        <button
          onClick={() => setSubSlide(Math.max(0, subSlide - 1))}
          disabled={subSlide === 0}
          className="w-8 h-8 rounded-full bg-white/80 border border-black/10 hover:bg-[#FEBE42] hover:border-[#FEBE42]/50 disabled:opacity-20 transition-all flex items-center justify-center"
          style={{ cursor: subSlide === 0 ? 'not-allowed' : 'pointer' }}
          title="Przewiń w górę"
        >
          <ChevronUp className="w-4 h-4 text-black/70" />
        </button>

        {/* Dots Indicator */}
        <div className="flex flex-col gap-2">
          <button
            onClick={() => setSubSlide(0)}
            className={`w-2.5 h-2.5 rounded-full border transition-all ${
              subSlide === 0 
                ? 'bg-[#FEBE42] border-[#FEBE42] scale-110' 
                : 'bg-white/80 border-black/20 hover:bg-[#FEBE42]/40'
            }`}
            style={{ cursor: 'pointer' }}
            title="FAQ"
          />
          <button
            onClick={() => setSubSlide(1)}
            className={`w-2.5 h-2.5 rounded-full border transition-all ${
              subSlide === 1 
                ? 'bg-[#FEBE42] border-[#FEBE42] scale-110' 
                : 'bg-white/80 border-black/20 hover:bg-[#FEBE42]/40'
            }`}
            style={{ cursor: 'pointer' }}
            title="Dziękuję"
          />
          <button
            onClick={() => setSubSlide(2)}
            className={`w-2.5 h-2.5 rounded-full border transition-all ${
              subSlide === 2 
                ? 'bg-[#FEBE42] border-[#FEBE42] scale-110' 
                : 'bg-white/80 border-black/20 hover:bg-[#FEBE42]/40'
            }`}
            style={{ cursor: 'pointer' }}
            title="Kontakt"
          />
        </div>

        {/* Down Arrow */}
        <button
          onClick={() => setSubSlide(Math.min(2, subSlide + 1))}
          disabled={subSlide === 2}
          className="w-8 h-8 rounded-full bg-white/80 border border-black/10 hover:bg-[#FEBE42] hover:border-[#FEBE42]/50 disabled:opacity-20 transition-all flex items-center justify-center"
          style={{ cursor: subSlide === 2 ? 'not-allowed' : 'pointer' }}
          title="Przewiń w dół"
        >
          <ChevronDown className="w-4 h-4 text-black/70" />
        </button>
      </div>

      {/* Sub-slides with Animation */}
      <AnimatePresence initial={false} custom={subSlide} mode="wait">
        <motion.div
          key={subSlide}
          custom={subSlide}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            y: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
        >
          {subSlide === 0 ? <SubSlide0 /> : subSlide === 1 ? <SubSlide1 /> : <SubSlide2 />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
