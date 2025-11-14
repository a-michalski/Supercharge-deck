import { MessageCircle, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

export default function QASlide() {
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

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <Badge className="bg-[#FEBE42] text-black border-[#FEBE42]">
          Q&A - 30 minut
        </Badge>
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="bg-gradient-to-r from-[#FEBE42]/20 to-[#FFBF42]/20 border-[#FEBE42]/30 shadow-md p-6 text-center">
          <MessageCircle className="w-12 h-12 text-[#FEBE42] mx-auto mb-4" />
          <h3 className="text-2xl text-black mb-3" style={{ fontWeight: 700 }}>Masz więcej pytań?</h3>
          <p className="text-gray-700 mb-4">
            To był warsztat demonstracyjny - teraz czas na Twoje pytania!
          </p>
          <div className="flex flex-col gap-2 text-sm text-gray-700">
            <p>💬 Możesz zadać pytanie teraz</p>
            <p>📧 Możesz skontaktować się później</p>
            <p>🌐 Dołącz do społeczności (Discord, Twitter, Reddit)</p>
          </div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-center"
      >
        <Card className="bg-gradient-to-br from-[#31BFC7]/20 to-[#46BAD8]/20 border-[#31BFC7]/30 shadow-md p-8">
          <h3 className="text-3xl text-black mb-4" style={{ fontWeight: 800 }}>Dziękuję za udział! 🚀</h3>
          <p className="text-lg text-gray-700 mb-4">
            Pamiętajcie - najważniejsze to po prostu <strong style={{ fontWeight: 700 }}>zacząć</strong>.
          </p>
          <p className="text-gray-700">
            Pierwszy projekt z AI będzie trudny, trzeci będzie łatwiejszy,<br />
            przy dziesiątym będziecie latać.
          </p>
          <div className="mt-6 text-2xl text-black" style={{ fontWeight: 700 }}>
            Powodzenia w kodowaniu z AI! ✨
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
