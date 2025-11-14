import { useState, useEffect } from 'react';
import { 
  Terminal, Settings, FileText, Zap, CheckCircle2, Download,
  Globe, Link, Key, ShieldCheck, ChevronUp, ChevronDown,
  AlertCircle, Copy, ExternalLink, MessageSquare, Sparkles,
  XCircle, Clock, Bot, Eye, MapPin, PartyPopper, Wrench, RotateCw
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { ImageWithFallback } from '../figma/ImageWithFallback';
const githubCreateRepo = '/assets/126b4aee6cdfff70db9afefe87d2ce4efbbf6b2b.png';
const githubDashboard = '/assets/6e3969f69f589ef72cc009f810ac9063ca45f5c8.png';

export default function GitConfigSlide() {
  const [subSlide, setSubSlide] = useState(0);
  const [showHumanLanguage, setShowHumanLanguage] = useState(false);

  // Keyboard navigation for sub-slides
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Only handle ArrowUp and ArrowDown - let parent handle ArrowLeft/ArrowRight
      if (event.key === 'ArrowDown') {
        if (subSlide < 8) {
          event.stopPropagation(); // Prevent parent from handling
          setSubSlide(prev => prev + 1);
        }
      } else if (event.key === 'ArrowUp') {
        if (subSlide > 0) {
          event.stopPropagation(); // Prevent parent from handling
          setSubSlide(prev => prev - 1);
        }
      }
      // ArrowLeft and ArrowRight are NOT handled here - they bubble up to App.tsx
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

  // SLAJD 0: Przygotowanie
  const SubSlide0 = () => (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <Badge className="bg-[#31BFC7] text-white border-[#31BFC7]">
          CZĘŚĆ 2: Konfiguracja GIT
        </Badge>
        <h2 className="text-5xl text-black" style={{ fontWeight: 800 }}>
          Przygotowanie
        </h2>
        <p className="text-xl text-gray-600">
          Zanim zaczniesz - lista kontrolna
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            icon: Download,
            color: '#31BFC7',
            title: '1. Zainstaluj Cursor',
            items: ['Wejdź na cursor.sh', 'Pobierz dla swojego OS', 'Zainstaluj i uruchom'],
            link: 'cursor.sh'
          },
          {
            icon: Globe,
            color: '#FF438B',
            title: '2. Konto GitHub',
            items: ['Wejdź na github.com', 'Załóż darmowe konto', 'Potwierdź email'],
            link: 'github.com'
          },
          {
            icon: FileText,
            color: '#FEBE42',
            title: '3. Folder projektu',
            items: ['Istniejący projekt', 'lub nowy pusty folder', 'Otwórz w Cursor'],
            link: null
          }
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.15 }}
            >
              <Card 
                className="p-6 h-full"
                style={{ 
                  borderWidth: '2px',
                  borderColor: item.color,
                  backgroundColor: `${item.color}08`
                }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div 
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: `${item.color}20` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: item.color }} />
                  </div>
                  <h3 className="text-black" style={{ fontWeight: 700 }}>
                    {item.title}
                  </h3>
                  <div className="space-y-2">
                    {item.items.map((text, i) => (
                      <p key={i} className="text-sm text-gray-600">{text}</p>
                    ))}
                  </div>
                  {item.link && (
                    <a 
                      href={`https://${item.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm flex items-center gap-1 hover:underline"
                      style={{ color: item.color, fontWeight: 600 }}
                    >
                      {item.link}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-3 bg-gray-100 rounded-lg">
          <Clock className="w-5 h-5 text-gray-600" />
          <span className="text-gray-700" style={{ fontWeight: 600 }}>
            Całość zajmie ~15 minut (jednorazowo)
          </span>
        </div>
      </motion.div>
    </div>
  );

  // SLAJD 1: Krok 1 - Inicjalizacja Git lokalnie
  const SubSlide1 = () => (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <Badge className="bg-[#31BFC7] text-white border-[#31BFC7]">
          Krok 1 (2 minuty)
        </Badge>
        <h2 className="text-4xl text-black" style={{ fontWeight: 800 }}>
          Inicjalizacja Git
        </h2>
        <p className="text-gray-600">Cursor sprawdzi i skonfiguruje Git lokalnie</p>
      </motion.div>

      {/* Prompt do Cursor */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="bg-gradient-to-r from-[#FEBE42]/20 to-[#F69E2C]/20 border-[#FEBE42] p-6">
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="w-6 h-6 text-[#FEBE42]" />
            <h3 className="text-lg text-black" style={{ fontWeight: 700 }}>
              Ty mówisz do Cursor:
            </h3>
          </div>
          <div className="p-4 bg-white rounded-lg border-2 border-[#FEBE42]">
            <p className="text-gray-800">
              "Skonfiguruj Git dla tego projektu. Sprawdź czy mam już Git, jeśli nie - wyjaśnij co trzeba zrobić. Utwórz pierwszy checkpoint z obecnym stanem projektu."
            </p>
          </div>
        </Card>
      </motion.div>

      {/* Co Cursor robi */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="bg-white border-gray-200 p-6 h-full">
            <div className="flex items-center gap-3 mb-4">
              <Bot className="w-6 h-6 text-[#31BFC7]" />
              <h3 className="text-lg text-black" style={{ fontWeight: 700 }}>
                Cursor robi:
              </h3>
            </div>
            <div className="space-y-3">
              {[
                'Sprawdza czy Git jest zainstalowany',
                'Uruchamia git init',
                'Konfiguruje user.name i user.email',
                'Tworzy pierwszy commit'
              ].map((text, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{text}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Output */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="bg-white border-gray-200 p-6 h-full">
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="w-6 h-6 text-[#FF438B]" />
              <h3 className="text-lg text-black" style={{ fontWeight: 700 }}>
                👀 Widzisz:
              </h3>
            </div>
            <pre className="p-4 bg-gray-900 rounded text-xs text-gray-300 font-mono overflow-x-auto">
{`✓ Git wykryty (wersja 2.42.0)
✓ Tworzę pierwszy checkpoint...

Initialized empty Git repository
✓ Dodano wszystkie pliki
✓ Commit utworzony:
  "Initial project state"

Status: Gotowy do pracy!`}
            </pre>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-lg border border-green-200">
          <CheckCircle2 className="w-5 h-5 text-green-600" />
          <span className="text-green-800" style={{ fontWeight: 600 }}>
            Lokalny Git skonfigurowany! Teraz backup online →
          </span>
        </div>
      </motion.div>
    </div>
  );

  // SLAJD 2: Krok 2 - Utworzenie repo GitHub
  const SubSlide2 = () => (
    <div className="w-full max-w-6xl mx-auto space-y-6 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <Badge className="bg-[#FF438B] text-white border-[#FF438B]">
          Krok 2 (3 minuty)
        </Badge>
        <h2 className="text-4xl text-black" style={{ fontWeight: 800 }}>
          Utworzenie repo na GitHub
        </h2>
        <p className="text-gray-600">To zrobisz ręcznie w przeglądarce</p>
      </motion.div>

      {/* Accordion with all steps - NO motion wrapper to avoid animation conflicts */}
      <div>
        <Accordion type="single" collapsible className="space-y-3">
          {/* Krok 1: GitHub Dashboard */}
          <AccordionItem value="step1" className="border border-gray-200 rounded-lg bg-white">
            <AccordionTrigger className="hover:no-underline px-6">
              <div className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-[#FF438B]" />
                <span className="text-black" style={{ fontWeight: 700 }}>
                  Krok 1: Otwórz github.com i kliknij "New"
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6">
              <div className="pt-2 pb-4 space-y-3">
                <div className="rounded-lg overflow-hidden border-2 border-gray-200">
                  <ImageWithFallback
                    src={githubDashboard} 
                    alt="GitHub Dashboard - kliknij zielony przycisk New" 
                    className="w-full"
                  />
                </div>
                <p className="text-sm text-gray-600">
                  📍 Zielony przycisk "New" w prawym grnym rogu dashboardu
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Krok 2: Create Repository Form */}
          <AccordionItem value="step2" className="border border-gray-200 rounded-lg bg-white">
            <AccordionTrigger className="hover:no-underline px-6">
              <div className="flex items-center gap-3">
                <Settings className="w-6 h-6 text-[#FF438B]" />
                <span className="text-black" style={{ fontWeight: 700 }}>
                  Krok 2: Wypełnij formularz
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6">
              <div className="pt-2 pb-4 space-y-4">
                <div className="rounded-lg overflow-hidden border-2 border-gray-200">
                  <ImageWithFallback
                    src={githubCreateRepo} 
                    alt="GitHub Create Repository - formularz z nazwą i opcjami" 
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-3 bg-[#FF438B]/5 p-4 rounded-lg border border-[#FF438B]/20">
                  {[
                    { label: 'Repository name', value: 'my-project (lub inna nazwa)', highlight: true },
                    { label: 'Description', value: 'Opcjonalny opis projektu', highlight: false },
                    { label: 'Visibility', value: 'Private (dla projektów prywatnych) lub Public', highlight: false },
                    { label: '❌ Add README', value: 'NIE zaznaczaj - masz już pliki lokalnie!', highlight: true }
                  ].map((item, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-3"
                      style={{ 
                        padding: '8px',
                        backgroundColor: item.highlight ? '#FF438B15' : 'transparent',
                        borderRadius: '6px'
                      }}
                    >
                      <span className="text-gray-700" style={{ fontWeight: item.highlight ? 700 : 600 }}>
                        {item.label}:
                      </span>
                      <span className="text-gray-600">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Krok 3: Copy URL */}
          <AccordionItem value="step3" className="border border-gray-200 rounded-lg bg-white">
            <AccordionTrigger className="hover:no-underline px-6">
              <div className="flex items-center gap-3">
                <Copy className="w-6 h-6 text-[#FEBE42]" />
                <span className="text-black" style={{ fontWeight: 700 }}>
                  Krok 3: Skopiuj URL repo
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6">
              <div className="pt-2 pb-4 space-y-3">
                <div className="p-4 bg-white rounded-lg border-2 border-[#FEBE42]">
                  <code className="text-sm text-gray-800" style={{ fontWeight: 600 }}>
                    https://github.com/username/my-project
                  </code>
                </div>
                <p className="text-sm text-gray-600">
                  Użyjesz tego URL w kolejnym kroku (Cursor zapyta o niego)
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );

  // SLAJD 3: Krok 3 - Połączenie
  const SubSlide3 = () => (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <Badge className="bg-[#46BAD8] text-white border-[#46BAD8]">
          Krok 3 (2 minuty)
        </Badge>
        <h2 className="text-4xl text-black" style={{ fontWeight: 800 }}>
          Połączenie z GitHub
        </h2>
        <p className="text-gray-600">Cursor spróbuje i wykryje brak autoryzacji</p>
      </motion.div>

      {/* Prompt */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="bg-gradient-to-r from-[#FEBE42]/20 to-[#F69E2C]/20 border-[#FEBE42] p-6">
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="w-6 h-6 text-[#FEBE42]" />
            <h3 className="text-lg text-black" style={{ fontWeight: 700 }}>
              Ty mówisz do Cursor:
            </h3>
          </div>
          <div className="p-4 bg-white rounded-lg border-2 border-[#FEBE42]">
            <p className="text-gray-800" style={{ fontWeight: 600 }}>
              "Połącz ten projekt z GitHub repo. URL: https://github.com/username/my-project<br />
              Jeśli potrzebujesz autoryzacji, wyjaśnij mi opcje."
            </p>
          </div>
        </Card>
      </motion.div>

      {/* Output - Cursor wykrywa problem */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="bg-white border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-[#31BFC7]" />
            <h3 className="text-lg text-black" style={{ fontWeight: 700 }}>
              🤖 Cursor odpowiada:
            </h3>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-500 mt-0.5" />
                <div>
                  <p className="text-red-800" style={{ fontWeight: 600 }}>
                    Problem wykryty: Brak autoryzacji GitHub
                  </p>
                  <p className="text-sm text-red-600 mt-1">
                    Nie mogę wysłać kodu bez tokenu. Masz 2 opcje:
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-[#FEBE42]/10 rounded-lg border-2 border-[#FEBE42]">
                <h4 className="text-black mb-2" style={{ fontWeight: 700 }}>
                  Opcja A: CLI (szybka)
                </h4>
                <p className="text-sm text-gray-600">
                  Jedna komenda, autentykacja w przeglądarce
                </p>
                <div className="mt-2 px-3 py-1 bg-white rounded inline-block">
                  <code className="text-xs text-[#FEBE42]" style={{ fontWeight: 600 }}>
                    gh auth login
                  </code>
                </div>
              </div>

              <div className="p-4 bg-[#31BFC7]/10 rounded-lg border-2 border-[#31BFC7]">
                <h4 className="text-black mb-2" style={{ fontWeight: 700 }}>
                  Opcja B: GitHub Desktop
                </h4>
                <p className="text-sm text-gray-600">
                  Aplikacja GUI, obsługa przez interfejs
                </p>
                <div className="mt-2 px-3 py-1 bg-white rounded inline-block">
                  <code className="text-xs text-[#31BFC7]" style={{ fontWeight: 600 }}>
                    desktop.github.com
                  </code>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg border border-blue-200">
          <AlertCircle className="w-5 h-5 text-blue-600" />
          <span className="text-blue-800" style={{ fontWeight: 600 }}>
            Wybierz jedną opcję i przejdź do następnego kroku
          </span>
        </div>
      </motion.div>
    </div>
  );

  // SLAJD 4: Krok 4A - Opcja CLI (szybka)
  const SubSlide4 = () => (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <Badge className="bg-[#FEBE42] text-black border-[#FEBE42]">
          Krok 4A - Opcja szybka (5 minut)
        </Badge>
        <h2 className="text-3xl text-black" style={{ fontWeight: 800 }}>
          GitHub CLI - Autentykacja w przeglądarce
        </h2>
        <p className="text-gray-600">Najprostsza metoda dla początkujących</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="bg-gradient-to-r from-[#FEBE42]/20 to-[#F69E2C]/20 border-[#FEBE42] p-6">
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="w-6 h-6 text-[#FEBE42]" />
            <h3 className="text-lg text-black" style={{ fontWeight: 700 }}>
              Ty mówisz do Cursor:
            </h3>
          </div>
          <div className="p-4 bg-white rounded-lg border-2 border-[#FEBE42]">
            <p className="text-gray-800">
              "Zainstaluj GitHub CLI i przeprowadź mnie przez autentykację. Potem wyślij kod na GitHub."
            </p>
          </div>
        </Card>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="bg-white border-gray-200 p-6 h-full">
            <div className="flex items-center gap-3 mb-4">
              <Download className="w-6 h-6 text-[#FEBE42]" />
              <h3 className="text-lg text-black" style={{ fontWeight: 700 }}>
                Instalacja GitHub CLI
              </h3>
            </div>
            <div className="space-y-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-2" style={{ fontWeight: 600 }}>
                  macOS (Homebrew):
                </p>
                <code className="text-xs bg-gray-900 text-gray-300 p-2 rounded block">
                  brew install gh
                </code>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-2" style={{ fontWeight: 600 }}>
                  Windows (winget):
                </p>
                <code className="text-xs bg-gray-900 text-gray-300 p-2 rounded block">
                  winget install --id GitHub.cli
                </code>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-2" style={{ fontWeight: 600 }}>
                  Linux (apt):
                </p>
                <code className="text-xs bg-gray-900 text-gray-300 p-2 rounded block">
                  sudo apt install gh
                </code>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="bg-white border-gray-200 p-6 h-full">
            <div className="flex items-center gap-3 mb-4">
              <Key className="w-6 h-6 text-[#31BFC7]" />
              <h3 className="text-lg text-black" style={{ fontWeight: 700 }}>
                Autentykacja
              </h3>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-[#31BFC7]/10 rounded-lg border border-[#31BFC7]/30">
                <p className="text-sm text-gray-700 mb-2">1. Uruchom w terminalu:</p>
                <code className="text-xs bg-gray-900 text-gray-300 p-2 rounded block">
                  gh auth login
                </code>
              </div>
              <div className="space-y-2">
                {[
                  'Wybierz: GitHub.com',
                  'Protocol: HTTPS',
                  'Authenticate: Login with browser',
                  'Otworzy się przeglądarka',
                  'Zaloguj się i zatwierdź'
                ].map((step, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#31BFC7] flex items-center justify-center text-white text-xs" style={{ fontWeight: 700 }}>
                      {idx + 2}
                    </div>
                    <span className="text-sm text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Card className="bg-white border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-6 h-6 text-green-500" />
            <h3 className="text-lg text-black" style={{ fontWeight: 700 }}>
              Wysłanie kodu
            </h3>
          </div>
          <p className="text-gray-600 mb-3">
            Po autentykacji, Cursor automatycznie wyśle kod:
          </p>
          <pre className="p-4 bg-gray-900 rounded text-xs text-gray-300 font-mono">
{`✓ Łączenie z GitHub...
✓ Wysyłam kod...

→ https://github.com/username/my-project
✓ Kod bezpiecznie w chmurze!

Możesz teraz pracować spokojnie.`}
          </pre>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-lg border border-green-200">
          <CheckCircle2 className="w-5 h-5 text-green-600" />
          <span className="text-green-800" style={{ fontWeight: 600 }}>
            Gotowe! Masz pełny backup. Przejdź do weryfikacji (↓)
          </span>
        </div>
      </motion.div>
    </div>
  );

  // SLAJD 5: Krok 4B - Opcja GitHub Desktop
  const SubSlide5 = () => (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <Badge className="bg-[#31BFC7] text-white border-[#31BFC7]">
          Krok 4B - Opcja długoterminowa (10 minut)
        </Badge>
        <h2 className="text-3xl text-black" style={{ fontWeight: 800 }}>
          GitHub Desktop - Wygodna aplikacja GUI
        </h2>
        <p className="text-gray-600">Dla osób preferujących interfejs graficzny</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="bg-white border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <Download className="w-6 h-6 text-[#31BFC7]" />
            <h3 className="text-lg text-black" style={{ fontWeight: 700 }}>
              Krok 1: Pobierz i zainstaluj
            </h3>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://desktop.github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#31BFC7] text-white rounded-lg hover:bg-[#31BFC7]/90 transition-colors flex items-center gap-2"
              style={{ fontWeight: 600 }}
            >
              desktop.github.com
              <ExternalLink className="w-4 h-4" />
            </a>
            <span className="text-sm text-gray-600">
              Dostępne dla Windows i macOS
            </span>
          </div>
        </Card>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="bg-white border-gray-200 p-6 h-full">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-6 h-6 text-[#31BFC7]" />
              <h3 className="text-lg text-black" style={{ fontWeight: 700 }}>
                Krok 2: Zaloguj się
              </h3>
            </div>
            <div className="space-y-3">
              {[
                'Uruchom GitHub Desktop',
                'File → Options → Accounts',
                'Kliknij "Sign in to GitHub.com"',
                'Autoryzuj w przeglądarce',
                'Wróć do aplikacji'
              ].map((step, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#31BFC7] flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5" style={{ fontWeight: 700 }}>
                    {idx + 1}
                  </div>
                  <span className="text-sm text-gray-700">{step}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="bg-white border-gray-200 p-6 h-full">
            <div className="flex items-center gap-3 mb-4">
              <Link className="w-6 h-6 text-[#FF438B]" />
              <h3 className="text-lg text-black" style={{ fontWeight: 700 }}>
                Krok 3: Dodaj repo
              </h3>
            </div>
            <div className="space-y-3">
              {[
                'File → Add Local Repository',
                'Wskaż folder z projektem',
                'Kliknij "Add Repository"',
                'Repository → Push',
                'Wybierz GitHub.com jako remote'
              ].map((step, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FF438B] flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5" style={{ fontWeight: 700 }}>
                    {idx + 1}
                  </div>
                  <span className="text-sm text-gray-700">{step}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Card className="bg-gradient-to-r from-[#FEBE42]/20 to-[#F69E2C]/20 border-[#FEBE42] p-6">
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="w-6 h-6 text-[#FEBE42]" />
            <h3 className="text-lg text-black" style={{ fontWeight: 700 }}>
              Zalety GitHub Desktop
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              'Wizualizacja zmian w plikach',
              'Historia commitów w formie graficznej',
              'Łatwe cofanie zmian',
              'Zarządzanie branchami wizualnie'
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2 bg-white rounded">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-lg border border-green-200">
          <CheckCircle2 className="w-5 h-5 text-green-600" />
          <span className="text-green-800" style={{ fontWeight: 600 }}>
            Świetnie! Teraz weryfikacja czy wszystko działa (↓)
          </span>
        </div>
      </motion.div>
    </div>
  );

  // SLAJD 6: Weryfikacja
  const SubSlide6 = () => (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <Badge className="bg-[#31BFC7] text-white border-[#31BFC7]">
          Weryfikacja
        </Badge>
        <h2 className="text-4xl text-black" style={{ fontWeight: 800 }}>
          Sprawdź czy wszystko działa
        </h2>
        <p className="text-gray-600">Ostateczna kontrola setupu</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="bg-gradient-to-r from-[#FEBE42]/20 to-[#F69E2C]/20 border-[#FEBE42] p-6">
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="w-6 h-6 text-[#FEBE42]" />
            <h3 className="text-lg text-black" style={{ fontWeight: 700 }}>
              Ty mówisz do Cursor:
            </h3>
          </div>
          <div className="p-4 bg-white rounded-lg border-2 border-[#FEBE42]">
            <p className="text-gray-800">
              "Pokaż mi status Git i link do repo na GitHub. Zweryfikuj czy backup działa."
            </p>
          </div>
        </Card>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="bg-white border-gray-200 p-6 h-full">
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="w-6 h-6 text-[#31BFC7]" />
              <h3 className="text-lg text-black" style={{ fontWeight: 700 }}>
                Lokalny status
              </h3>
            </div>
            <pre className="p-4 bg-gray-900 rounded text-xs text-gray-300 font-mono">
{`$ git status

On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean

✓ Git działa lokalnie`}
            </pre>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="bg-white border-gray-200 p-6 h-full">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-6 h-6 text-green-500" />
              <h3 className="text-lg text-black" style={{ fontWeight: 700 }}>
                Remote GitHub
              </h3>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="text-green-800" style={{ fontWeight: 600 }}>
                    Repo widoczne online
                  </span>
                </div>
                <a
                  href="https://github.com/username/my-project"
                  className="text-sm text-blue-600 hover:underline flex items-center gap-1"
                >
                  github.com/username/my-project
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="text-green-800" style={{ fontWeight: 600 }}>
                    Wszystkie pliki zsynchronizowane
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-500 p-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
            </div>
            <h3 className="text-2xl text-black" style={{ fontWeight: 800 }}>
              🎉 Setup zakończony!
            </h3>
            <p className="text-gray-700">
              Masz teraz pełny Git workflow:<br />
              Lokalne checkpointy + automatyczny backup w chmurze
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
              <div className="px-4 py-2 bg-white rounded-lg border border-green-200">
                <span className="text-green-800" style={{ fontWeight: 600 }}>
                  ✓ Git skonfigurowany
                </span>
              </div>
              <div className="px-4 py-2 bg-white rounded-lg border border-green-200">
                <span className="text-green-800" style={{ fontWeight: 600 }}>
                  ✓ GitHub połączony
                </span>
              </div>
              <div className="px-4 py-2 bg-white rounded-lg border border-green-200">
                <span className="text-green-800" style={{ fontWeight: 600 }}>
                  ✓ Backup aktywny
                </span>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg border border-blue-200">
          <Zap className="w-5 h-5 text-blue-600" />
          <span className="text-blue-800" style={{ fontWeight: 600 }}>
            Teraz możesz bezpiecznie eksperymentować z kodem! →
          </span>
        </div>
      </motion.div>
    </div>
  );

  // SLAJD 7: Git Commands vs Human Language - Toggle
  const SubSlide7 = () => {
    const setupCommands = [
      {
        git: <><span className="text-[#4EC9B0]">$</span> <span className="text-white/90">git init</span></>,
        human: '💬 Zacznij nowy projekt z Git',
        minHeight: '44px'
      },
      {
        git: (
          <div className="space-y-1">
            <div><span className="text-[#4EC9B0]">$</span> <span className="text-white/90">git add .</span></div>
            <div><span className="text-[#4EC9B0]">$</span> <span className="text-white/90">git commit -m <span className="text-[#CE9178]">"Initial commit"</span></span></div>
          </div>
        ),
        human: '💬 Zapisz obecny stan projektu',
        minHeight: '60px'
      },
      {
        git: (
          <div className="space-y-1">
            <div><span className="text-[#4EC9B0]">$</span> <span className="text-white/90">git remote add origin [URL]</span></div>
            <div><span className="text-[#4EC9B0]">$</span> <span className="text-white/90">git branch -M main</span></div>
          </div>
        ),
        human: '💬 Podepnij to do mojego GitHub',
        minHeight: '60px'
      },
      {
        git: <><span className="text-[#4EC9B0]">$</span> <span className="text-white/90">git push -u origin main <span className="text-white/50">(główna gałąź)</span></span></>,
        human: '💬 Wyślij na GitHub po raz pierwszy',
        minHeight: '44px'
      }
    ];

    const dailyCommands = [
      {
        git: <><span className="text-[#4EC9B0]">$</span> <span className="text-white/90">git checkout -b feature/nazwa</span></>,
        human: '💬 Stwórz nową gałąź do pracy',
        minHeight: '44px'
      },
      {
        git: <span className="text-white/50 italic">[edytuj pliki...]</span>,
        human: '💬 Wprowadzam zmiany w kodzie...',
        minHeight: '44px'
      },
      {
        git: (
          <div className="space-y-1">
            <div><span className="text-[#4EC9B0]">$</span> <span className="text-white/90">git add .</span></div>
            <div><span className="text-[#4EC9B0]">$</span> <span className="text-white/90">git commit -m <span className="text-[#CE9178]">"Dodaj feature"</span></span></div>
          </div>
        ),
        human: '💬 Zapisz zmiany lokalnie',
        minHeight: '60px'
      },
      {
        git: <><span className="text-[#4EC9B0]">$</span> <span className="text-white/90">git push origin feature/nazwa</span></>,
        human: '💬 Wyślij gałąź na serwer',
        minHeight: '44px'
      },
      {
        git: (
          <div className="space-y-1">
            <div><span className="text-[#4EC9B0]">$</span> <span className="text-white/90">git checkout main <span className="text-white/50">(główna gałąź)</span></span></div>
            <div><span className="text-[#4EC9B0]">$</span> <span className="text-white/90">git merge feature/nazwa</span></div>
          </div>
        ),
        human: '💬 Połącz z główną gałęzią (PR)',
        minHeight: '60px'
      }
    ];

    return (
      <div className="w-full max-w-7xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-2"
        >
          <Badge className="bg-[#31BFC7] text-white border-[#31BFC7]">
            AI translator
          </Badge>
          <h2 className="text-4xl text-black" style={{ fontWeight: 800 }}>
            AI tłumaczy Git na ludzki język
          </h2>
          <p className="text-gray-600">
            Nie musisz pamiętać komend - po prostu powiedz Cursorowi co chcesz zrobić
          </p>
        </motion.div>

        {/* Toggle Switch */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="flex justify-center items-center gap-4 bg-[#1E1E1E] border border-white/20 rounded-lg p-4">
            {/* Lewa strona - Git Commands */}
            <div className="flex items-center gap-3">
              <Terminal className="w-5 h-5 text-[#4EC9B0]" />
              <span 
                className={`text-sm transition-colors ${!showHumanLanguage ? 'text-white' : 'text-white/50'}`} 
                style={{ fontWeight: 600 }}
              >
                Git Commands
              </span>
            </div>
            
            {/* Toggle button */}
            <button
              onClick={() => setShowHumanLanguage(!showHumanLanguage)}
              className="relative w-14 h-7 bg-[#31BFC7]/30 rounded-full hover:bg-[#31BFC7]/40 border border-white/20 transition-colors"
            >
              <motion.div
                className="absolute top-1 left-1 w-5 h-5 bg-[#FEBE42] rounded-full"
                animate={{ x: showHumanLanguage ? 24 : 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </button>
            
            {/* Prawa strona - Po ludzku */}
            <div className="flex items-center gap-3">
              <span 
                className={`text-sm transition-colors ${showHumanLanguage ? 'text-white' : 'text-white/50'}`} 
                style={{ fontWeight: 600 }}
              >
                Po ludzku
              </span>
              <MessageSquare className="w-5 h-5 text-[#FEBE42]" />
            </div>
          </div>
        </motion.div>

        {/* Two columns - SETUP and DAILY */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* SETUP Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-[#0D1117] border-white/10 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Settings className="w-5 h-5 text-[#FEBE42]" />
                <h3 className="text-white" style={{ fontWeight: 700 }}>
                  SETUP <span className="text-white/50 text-sm">(🔧 jednorazowo)</span>
                </h3>
              </div>
              <div className="space-y-3">
                {setupCommands.map((cmd, idx) => (
                  <div key={idx} className="space-y-1">
                    <p className="text-xs text-white/60">{idx + 1}. {idx === 0 ? 'Zainicjuj lokalne repo' : idx === 1 ? 'Pierwszy commit' : idx === 2 ? 'Połącz z GitHub' : 'Pierwszy push'}</p>
                    <div 
                      className={`bg-[#0D1117] border border-white/10 rounded p-3 flex items-center ${showHumanLanguage ? '' : 'font-mono'}`}
                      style={{ minHeight: cmd.minHeight }}
                    >
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={showHumanLanguage ? `human-setup-${idx}` : `git-setup-${idx}`}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.2 }}
                          className="w-full"
                        >
                          {showHumanLanguage ? (
                            <span className="text-white/90">{cmd.human}</span>
                          ) : (
                            <div className="text-sm">{cmd.git}</div>
                          )}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* DAILY Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-[#0D1117] border-white/10 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-[#31BFC7]" />
                <h3 className="text-white" style={{ fontWeight: 700 }}>
                  CODZIENNA PRACA <span className="text-white/50 text-sm">(🔄 powtarzaj)</span>
                </h3>
              </div>
              <div className="space-y-3">
                {dailyCommands.map((cmd, idx) => (
                  <div key={idx} className="space-y-1">
                    <p className="text-xs text-white/60">{idx + 1}. {idx === 0 ? 'Utwórz nową gałąź' : idx === 1 ? 'Wprowadź zmiany' : idx === 2 ? 'Zapisz zmiany' : idx === 3 ? 'Wypchnij na remote' : 'Połącz z main (główna gałąź)'}</p>
                    <div 
                      className={`bg-[#0D1117] border border-white/10 rounded p-3 flex items-center ${showHumanLanguage ? '' : 'font-mono'}`}
                      style={{ minHeight: cmd.minHeight }}
                    >
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={showHumanLanguage ? `human-daily-${idx}` : `git-daily-${idx}`}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.2 }}
                          className="w-full"
                        >
                          {showHumanLanguage ? (
                            <span className="text-white/90">{cmd.human}</span>
                          ) : (
                            <div className="text-sm">{cmd.git}</div>
                          )}
                        </motion.div>
                      </AnimatePresence>
                    </div>
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
          transition={{ delay: 0.6 }}
        >
          <Card className="bg-gradient-to-r from-[#FEBE42]/20 to-[#F69E2C]/20 border-[#FEBE42] p-6">
            <div className="flex items-center justify-center gap-3">
              <Sparkles className="w-6 h-6 text-[#FEBE42]" />
              <p className="text-black text-center" style={{ fontWeight: 700 }}>
                Nie musisz znać komend Git - po prostu powiedz Cursorowi co chcesz osiągnąć!
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    );
  };

  // SLAJD 8: Słowniczek - GIT
  const SubSlide8 = () => {
    const glossary = [
      { term: 'Git', definition: 'system kontroli wersji; śledzi historię zmian w projekcie' },
      { term: 'GitHub', definition: 'platforma do hostowania projektów Git online; umożliwia współpracę' },
      { term: 'Repository (repo)', definition: 'projekt w Git; folder z kodem i całą historią zmian' },
      { term: 'Branch (gałąź)', definition: 'osobna wersja projektu; można pracować nad nową funkcją bez wpływu na główną wersję' },
      { term: 'Commit', definition: 'zapisanie zmian w Git; jak "checkpoint" w grze' },
      { term: 'Main branch', definition: 'główna, produkcyjna wersja projektu' },
      { term: 'Feature branch', definition: 'branch stworzony do pracy nad konkretną funkcją' },
      { term: 'Push', definition: 'wysłanie zmian z komputera do GitHub' },
      { term: 'Merge', definition: 'połączenie zmian z jednego brancha do drugiego' },
      { term: 'Clone', definition: 'skopiowanie projektu z GitHub na swój komputer' },
      { term: 'Pull', definition: 'pobranie i zastosowanie najnowszych zmian z GitHub; kombinacja fetch + merge' }
    ];

    return (
      <div className="w-full max-w-6xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-2"
        >
          <Badge className="bg-[#31BFC7] text-white border-[#31BFC7]">
            CZĘŚĆ 2: Konfiguracja GIT
          </Badge>
          <h2 className="text-5xl text-black" style={{ fontWeight: 800 }}>
            Słowniczek
          </h2>
          <p className="text-xl text-gray-600">
            Podstawowe terminy GIT
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {glossary.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + idx * 0.05 }}
            >
              <Card className="p-4 h-full hover:shadow-md transition-shadow">
                <h3 className="text-black mb-2" style={{ fontWeight: 700 }}>
                  {item.term}
                </h3>
                <p className="text-sm text-gray-600">
                  {item.definition}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center p-8 relative overflow-y-auto">
      <AnimatePresence mode="wait" custom={subSlide}>
        <motion.div
          key={subSlide}
          custom={subSlide}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="w-full"
        >
          {subSlide === 0 && <SubSlide0 />}
          {subSlide === 1 && <SubSlide1 />}
          {subSlide === 2 && <SubSlide2 />}
          {subSlide === 3 && <SubSlide3 />}
          {subSlide === 4 && <SubSlide4 />}
          {subSlide === 5 && <SubSlide5 />}
          {subSlide === 6 && <SubSlide6 />}
          {subSlide === 7 && <SubSlide7 />}
          {subSlide === 8 && <SubSlide8 />}
        </motion.div>
      </AnimatePresence>

      {/* Sub-slide navigation indicator */}
      <div className="fixed bottom-8 right-8 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg p-3 shadow-lg">
        <div className="text-sm text-gray-600" style={{ fontWeight: 600 }}>
          {subSlide + 1}/9
        </div>
      </div>
    </div>
  );
}