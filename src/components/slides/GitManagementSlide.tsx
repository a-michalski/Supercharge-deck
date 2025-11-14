import { useState, useEffect } from 'react';
import { 
  Shield, Zap, Clock, GitBranch, Save, Eye, Users, 
  AlertTriangle, CheckCircle2, XCircle, ArrowRight, 
  ChevronUp, ChevronDown, Sparkles, AlertCircle, FileCode,
  History, GitPullRequest, Coffee, Timer, Camera, FileText, Key, Lightbulb
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
const mainVsBranchImage = '/assets/7fc5fa026a7ccbe9426543f87c16c32ccae9fe7f.png';
const workflowImage = '/assets/1834f74c01842cdccbeb9b1e3cf9aea6ce16a647.png';

export default function GitManagementSlide() {
  const [subSlide, setSubSlide] = useState(0);
  const [fileCount, setFileCount] = useState(0);
  const [unwantedChanges, setUnwantedChanges] = useState(0);
  const [isCountingComplete, setIsCountingComplete] = useState(false);

  // Animated file counter - ONLY when on SubSlide0 and not complete
  useEffect(() => {
    if (subSlide !== 0 || isCountingComplete) return;
    
    const interval = setInterval(() => {
      setFileCount(prev => {
        const next = prev + Math.floor(Math.random() * 15) + 5;
        if (next >= 484) {
          setIsCountingComplete(true);
          setUnwantedChanges(Math.floor(484 * 0.02));
          return 484;
        }
        setUnwantedChanges(Math.floor(next * 0.02));
        return next;
      });
    }, 100);
    
    return () => clearInterval(interval);
  }, [subSlide, isCountingComplete]);

  // Keyboard navigation for sub-slides
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown' && subSlide < 8) {
        setSubSlide(prev => prev + 1);
      } else if (event.key === 'ArrowUp' && subSlide > 0) {
        setSubSlide(prev => prev - 1);
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

  // SLAJD 1: Strona tytułowa
  const SubSlide0 = () => (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <Badge className="bg-[#31BFC7] text-white border-[#31BFC7]">
          CZĘŚĆ 2: Konfiguracja
        </Badge>
        <h2 className="text-5xl text-black" style={{ fontWeight: 800 }}>
          Git - Twoje Ubezpieczenie
        </h2>
        <p className="text-xl text-gray-600" style={{ fontWeight: 600 }}>
          Dlaczego Git jest KRYTYCZNY w erze AI
        </p>
      </motion.div>

      {/* Dramatyczna ilustracja */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="relative"
      >
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* AI Generator - Chaos */}
          <Card className="bg-gradient-to-br from-[#FEBE42]/20 to-orange-100 border-[#FEBE42] p-6 relative overflow-hidden flex flex-col">
            {/* Lightning animation */}
            <motion.div
              animate={{ 
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: 3,
                ease: "easeInOut"
              }}
              className="absolute top-4 right-4"
            >
              <Zap className="w-12 h-12 text-orange-500" />
            </motion.div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Sparkles className="w-10 h-10 text-[#FEBE42]" />
                <h3 className="text-2xl text-black" style={{ fontWeight: 700 }}>AI Code Generator</h3>
              </div>
              <div className="space-y-2">
                <motion.div 
                  className="h-2 bg-gradient-to-r from-[#FEBE42] to-orange-400 rounded"
                  animate={{ width: ['0%', '100%'] }}
                  transition={{ duration: 1.5 }}
                />
                <p className="text-sm text-gray-600">
                  <span className="tabular-nums" style={{ fontWeight: 700 }}>{fileCount}</span> plików zmienionych w 30 sekund...
                </p>
                <p className="text-xs text-orange-600">
                  w tym <span className="tabular-nums" style={{ fontWeight: 700 }}>{unwantedChanges}</span> niechcianych zmian
                </p>
              </div>
            </div>
          </Card>

          {/* Git - Bezpieczeństwo */}
          <Card className="bg-gradient-to-br from-[#31BFC7]/20 to-blue-100 border-[#31BFC7] p-6 flex flex-col">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Shield className="w-10 h-10 text-[#31BFC7]" />
                <h3 className="text-2xl text-black" style={{ fontWeight: 700 }}>Git Protection</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Historia wszystkich zmian</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Cofnięcie w każdej chwili</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Bezpieczne eksperymenty</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </motion.div>
    </div>
  );

  // SLAJD 2: Problem
  const SubSlide1 = () => (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <Badge className="bg-[#FF438B] text-white border-[#FF438B]">
          Problem
        </Badge>
        <h2 className="text-4xl text-black" style={{ fontWeight: 800 }}>
          AI działa szybko. Czasem ZA szybko.
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200 p-6">
          <div className="text-center mb-6">
            <h3 className="text-2xl text-black mb-2" style={{ fontWeight: 700 }}>
              AI zmienia 50 plików w 30 sekund
            </h3>
            <p className="text-gray-600">Prosiłeś AI: "Zmień obsługę tego formularza"</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* AI zrobił */}
            <div className="space-y-3">
              <h4 className="text-lg text-black" style={{ fontWeight: 700 }}>AI zrobił:</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2 p-3 bg-white rounded-lg border border-green-200">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Zmienił formularz</span>
                </div>
                <div className="flex items-start gap-2 p-3 bg-white rounded-lg border border-orange-200">
                  <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">"Przy okazji" zrefaktorował system state management</span>
                </div>
                <div className="flex items-start gap-2 p-3 bg-white rounded-lg border border-orange-200">
                  <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Zmienił nazwy w 30 innych plikach</span>
                </div>
                <div className="flex items-start gap-2 p-3 bg-white rounded-lg border border-red-200">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Usunął funkcje, które uznał za "nieużywane"</span>
                </div>
              </div>
            </div>

            {/* Efekt */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center"
            >
              <Card className="bg-red-500 border-red-600 p-8 text-center">
                <AlertCircle className="w-16 h-16 text-white mx-auto mb-4" />
                <p className="text-white text-2xl" style={{ fontWeight: 800 }}>
                  2 godziny pracy<br />do kosza
                </p>
              </Card>
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </div>
  );

  // SLAJD 3: Rozwiązanie - Git maszyna czasu
  const SubSlide2 = () => (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <Badge className="bg-[#31BFC7] text-white border-[#31BFC7]">
          Rozwiązanie
        </Badge>
        <h2 className="text-4xl text-black" style={{ fontWeight: 800 }}>
          Git = CTRL+Z dla całego projektu
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="bg-white border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <History className="w-8 h-8 text-[#31BFC7]" />
            <h3 className="text-2xl text-black" style={{ fontWeight: 700 }}>
              Git to historia każdej zmiany w projekcie
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-3">
              {[
                { icon: Users, text: 'Kto zmienił', color: '#31BFC7' },
                { icon: Clock, text: 'Kiedy zmienił', color: '#46BAD8' },
                { icon: FileCode, text: 'Co konkretnie zmienił', color: '#FF438B' },
                { icon: AlertCircle, text: 'Dlaczego zmienił (opis)', color: '#FEBE42' }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg"
                  style={{ backgroundColor: `${item.color}10` }}
                >
                  <item.icon className="w-6 h-6" style={{ color: item.color }} />
                  <span className="text-gray-700">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center"
            >
              <Card className="bg-gradient-to-br from-[#31BFC7] to-blue-500 border-[#31BFC7] p-6 text-center">
                <Clock className="w-12 h-12 text-white mx-auto mb-3" />
                <p className="text-white text-xl" style={{ fontWeight: 700 }}>
                  Możesz wrócić do<br />
                  <span style={{ fontWeight: 800 }}>DOWOLNEGO</span><br />
                  punktu w czasie
                </p>
              </Card>
            </motion.div>
          </div>

          {/* Timeline wizualizacja */}
          <div className="relative pt-8">
            <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-[#31BFC7] via-[#46BAD8] to-[#FEBE42]" />
            <div className="flex justify-between relative">
              {[
                { label: 'Początek', time: '3 dni temu' },
                { label: 'Feature A', time: '2 dni temu' },
                { label: 'Bug fix', time: 'wczoraj' },
                { label: 'AI changes', time: '2h temu' },
                { label: 'Teraz', time: 'aktualny' }
              ].map((commit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + idx * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div 
                    className="w-4 h-4 rounded-full border-2 mb-2"
                    style={{ 
                      backgroundColor: idx === 4 ? '#FEBE42' : 'white',
                      borderColor: idx === 4 ? '#FEBE42' : '#31BFC7'
                    }}
                  />
                  <p className="text-xs text-gray-600 text-center">{commit.label}</p>
                  <p className="text-xs text-gray-400">{commit.time}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );

  // SLAJD 4: Main vs Branch
  const SubSlide3 = () => (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <Badge className="bg-[#F69E2C] text-white border-[#F69E2C]">
          Bezpieczne eksperymenty
        </Badge>
        <h2 className="text-4xl text-black" style={{ fontWeight: 800 }}>
          Main = Produkcja | Branch = Piaskownica
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Lewa strona - Obrazek */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <img 
            src={mainVsBranchImage} 
            alt="Produkcja - Chronione vs Twój Branch - Eksperymentuj" 
            className="w-full rounded-xl shadow-2xl border-4 border-gray-200"
          />
        </motion.div>

        {/* Prawa strona - Co możesz robić */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col justify-center"
        >
          <Card className="bg-gradient-to-br from-[#F69E2C]/20 to-orange-100 border-[#F69E2C] p-6 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <GitBranch className="w-10 h-10 text-[#F69E2C]" />
              <h3 className="text-2xl text-black" style={{ fontWeight: 800 }}>
                Co możesz robić na swoim branchu?
              </h3>
            </div>

            <div className="space-y-4 flex-1">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="p-4 bg-white rounded-lg border border-gray-200"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-6 h-6 text-[#FEBE42]" />
                  <span className="text-gray-700" style={{ fontWeight: 700 }}>Testować pomysły AI</span>
                </div>
                <p className="text-sm text-gray-600">Niech AI generuje kod bez obaw</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="p-4 bg-white rounded-lg border border-gray-200"
              >
                <div className="flex items-center gap-2 mb-2">
                  <FileCode className="w-6 h-6 text-[#46BAD8]" />
                  <span className="text-gray-700" style={{ fontWeight: 700 }}>Zmieniać radykalnie kod</span>
                </div>
                <p className="text-sm text-gray-600">Refaktoryzuj śmiało</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="p-4 bg-white rounded-lg border border-gray-200"
              >
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="w-6 h-6 text-[#F69E2C]" />
                  <span className="text-gray-700" style={{ fontWeight: 700 }}>Popełniać błędy</span>
                </div>
                <p className="text-sm text-gray-600">Nie ma konsekwencji dla main</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-4 p-3 bg-[#F69E2C] rounded-lg"
            >
              <p className="text-white text-center text-sm" style={{ fontWeight: 700 }}>
                Coś poszło nie tak? Usuń branch. Main bezpieczny! ✨
              </p>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </div>
  );

  // SLAJD 5: Commit - Checkpoint
  const SubSlide4 = () => (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <Badge className="bg-[#FEBE42] text-black border-[#FEBE42]">
          Save Point
        </Badge>
        <h2 className="text-4xl text-black" style={{ fontWeight: 800 }}>
          Commit = Checkpoint w grze wideo
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Lewa strona - Analogia do gry */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-gradient-to-br from-purple-100 to-pink-100 border-purple-300 p-8 h-full flex flex-col items-center justify-center">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: 2
              }}
            >
              <Save className="w-24 h-24 text-purple-600 mb-6" />
            </motion.div>
            
            <h3 className="text-2xl text-black text-center mb-4" style={{ fontWeight: 800 }}>
              SAVE POINT
            </h3>
            
            <div className="space-y-2 w-full">
              <div className="bg-white/70 p-3 rounded border border-purple-200">
                <p className="text-center text-purple-700" style={{ fontWeight: 600 }}>
                  Przed trudnym bossem<br />robisz SAVE
                </p>
              </div>
              <div className="bg-white/70 p-3 rounded border border-purple-200">
                <p className="text-center text-purple-700" style={{ fontWeight: 600 }}>
                  Tak samo z kodem!
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Prawa strona - Kiedy commitować */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="bg-white border-gray-200 p-6 h-full">
            <h3 className="text-2xl text-black mb-6" style={{ fontWeight: 800 }}>
              Każdy commit to:
            </h3>

            <div className="space-y-4 mb-6">
              {[
                { icon: '📸', label: 'Snapshot całego projektu', color: '#31BFC7' },
                { icon: '📝', label: 'Twój opis: "Dodano logowanie"', color: '#FF438B' },
                { icon: '⏱️', label: 'Znacznik czasu', color: '#FEBE42' }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-lg border-2"
                  style={{ borderColor: item.color + '40', backgroundColor: item.color + '10' }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-gray-700">{item.label}</span>
                </motion.div>
              ))}
            </div>

            <div className="border-t-2 border-gray-200 pt-6">
              <h4 className="text-lg text-black mb-3" style={{ fontWeight: 700 }}>
                Commituj gdy:
              </h4>
              <div className="space-y-2">
                {[
                  'Dodałeś funkcję? Commit.',
                  'Naprawiłeś błąd? Commit.',
                  'Przed użyciem AI? COMMIT!'
                ].map((text, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + idx * 0.1 }}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>{text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );

  // SLAJD 6: Workflow z AI
  const SubSlide5 = () => (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <Badge className="bg-[#31BFC7] text-white border-[#31BFC7]">
          Praktyczny Flow
        </Badge>
        <h2 className="text-4xl text-black" style={{ fontWeight: 800 }}>
          Jak pracować z AI bezpiecznie?
        </h2>
      </motion.div>

      {/* Workflow image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="flex justify-center"
      >
        <img 
          src={workflowImage} 
          alt="Workflow: Commit → Nowy Branch → Poproś o zmiany → Sprawdź → Commit lub Wyrzuć" 
          className="w-full max-w-2xl mx-auto rounded-xl shadow-lg"
        />
      </motion.div>

      {/* Key principle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="bg-[#FEBE42] border-[#FEBE42] p-6">
          <p className="text-black text-center text-xl" style={{ fontWeight: 700 }}>
            🔑 Kluczowa zasada: Nigdy nie pozwól AI zmieniać kodu bez commita przed!
          </p>
        </Card>
      </motion.div>
    </div>
  );

  // SLAJD 7: Pull Request
  const SubSlide6 = () => (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <Badge className="bg-[#46BAD8] text-white border-[#46BAD8]">
          Code Review
        </Badge>
        <h2 className="text-4xl text-black" style={{ fontWeight: 800 }}>
          PR = łączenie z główną aplikacją
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="bg-white border-gray-200 p-6">
          {/* Co to jest PR */}
          <div className="mb-8">
            <h3 className="text-2xl text-black mb-4" style={{ fontWeight: 700 }}>
              Pull Request to:
            </h3>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
              <p className="text-lg text-gray-700 text-center" style={{ fontWeight: 600 }}>
                "Hej, zrobiłem X. Sprawdź czy nie zepsułem Y"
              </p>
            </div>
          </div>

          {/* Proces review */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Lewa strona - Twórca */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-3"
            >
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-6 h-6 text-[#31BFC7]" />
                <h4 className="text-lg text-black" style={{ fontWeight: 700 }}>Twórca</h4>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <FileCode className="w-8 h-8 text-blue-500 mb-2" />
                <p className="text-sm text-gray-700">Skończyłem feature na branchu</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <GitPullRequest className="w-8 h-8 text-blue-500 mb-2" />
                <p className="text-sm text-gray-700">Tworzę Pull Request</p>
              </div>
            </motion.div>

            {/* Prawa strona - Reviewer */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-3"
            >
              <div className="flex items-center gap-2 mb-4">
                <Eye className="w-6 h-6 text-[#FF438B]" />
                <h4 className="text-lg text-black" style={{ fontWeight: 700 }}>Reviewer</h4>
              </div>
              <div className="p-4 bg-pink-50 rounded-lg border border-pink-200">
                <Eye className="w-8 h-8 text-pink-500 mb-2" />
                <p className="text-sm text-gray-700">Przegląda zmiany</p>
              </div>
              <div className="p-4 bg-pink-50 rounded-lg border border-pink-200">
                <AlertCircle className="w-8 h-8 text-pink-500 mb-2" />
                <p className="text-sm text-gray-700">Zadaje pytania, sugeruje poprawki</p>
              </div>
            </motion.div>
          </div>

          {/* Kroki PR */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="space-y-3"
          >
            <h4 className="text-lg text-black mb-3" style={{ fontWeight: 700 }}>Proces:</h4>
            {[
              'Inna osoba patrzy na zmiany',
              'Dyskusja: "Czy to działa? Czy to czytelne?"',
              'Testy automatyczne',
              '✅ OK → merge do main'
            ].map((text, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + idx * 0.1 }}
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
              >
                <ArrowRight className="w-5 h-5 text-[#31BFC7]" />
                <span className="text-gray-700">{text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200"
          >
            <p className="text-center text-green-800" style={{ fontWeight: 700 }}>
              💡 Bonus: Gdy AI coś dziwnego zrobi, kto to wyłapie!
            </p>
          </motion.div>
        </Card>
      </motion.div>
    </div>
  );

  // SLAJD 8: Bez Git vs Z Git
  const SubSlide7 = () => (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <Badge className="bg-[#FEBE42] text-black border-[#FEBE42]">
          Prawdziwe scenariusze
        </Badge>
        <h2 className="text-4xl text-black" style={{ fontWeight: 800 }}>
          Historia z życia
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* BEZ GIT - Chaos */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-gradient-to-br from-red-100 to-orange-100 border-red-300 p-6 h-full">
            <div className="text-center mb-4">
              <h3 className="text-2xl text-red-700 mb-2" style={{ fontWeight: 800 }}>
                BEZ GIT
              </h3>
            </div>

            <div className="space-y-3 mb-6">
              {[
                { icon: Sparkles, text: 'AI zmienia 50 plików', color: 'text-orange-600' },
                { icon: XCircle, text: 'Aplikacja przestaje działać', color: 'text-red-600' },
                { icon: AlertCircle, text: 'Nie wiesz CO dokładnie się zmieniło', color: 'text-red-600' },
                { icon: AlertTriangle, text: 'Próbujesz ręcznie cofnąć', color: 'text-orange-600' }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="flex items-center gap-3 p-3 bg-white/70 rounded-lg border border-red-200"
                >
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                  <span className="text-gray-700 text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-red-600 p-6 rounded-lg text-center"
            >
              <Timer className="w-12 h-12 text-white mx-auto mb-2" />
              <p className="text-white text-3xl" style={{ fontWeight: 800 }}>
                4 godziny
              </p>
              <p className="text-red-100">stracone</p>
            </motion.div>
          </Card>
        </motion.div>

        {/* Z GIT - Spokój */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="bg-gradient-to-br from-green-100 to-blue-100 border-green-300 p-6 h-full">
            <div className="text-center mb-4">
              <h3 className="text-2xl text-green-700 mb-2" style={{ fontWeight: 800 }}>
                Z GIT
              </h3>
            </div>

            <div className="space-y-3 mb-6">
              {[
                { icon: Sparkles, text: 'AI zmienia 50 plików', color: 'text-blue-600' },
                { icon: XCircle, text: 'Aplikacja przestaje działać', color: 'text-orange-600' },
                { icon: History, text: 'git checkout previous-commit', color: 'text-green-600', highlight: true },
                { icon: CheckCircle2, text: 'Próbujesz inaczej', color: 'text-green-600' }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  className={`flex items-center gap-3 p-3 rounded-lg border ${
                    item.highlight 
                      ? 'bg-green-500 border-green-600' 
                      : 'bg-white/70 border-green-200'
                  }`}
                >
                  <item.icon className={`w-6 h-6 ${item.highlight ? 'text-white' : item.color}`} />
                  <span className={`text-sm ${item.highlight ? 'text-white font-mono' : 'text-gray-700'}`} style={item.highlight ? { fontWeight: 700 } : {}}>
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="bg-green-600 p-6 rounded-lg text-center"
            >
              <Coffee className="w-12 h-12 text-white mx-auto mb-2" />
              <p className="text-white text-3xl" style={{ fontWeight: 800 }}>
                30 sekund
              </p>
              <p className="text-green-100">jesteś z powrotem</p>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </div>
  );

  // SLAJD 9: Podsumowanie - 3 zasady
  const SubSlide8 = () => (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <Badge className="bg-[#FEBE42] text-black border-[#FEBE42]">
          Podsumowanie
        </Badge>
        <h2 className="text-5xl text-black mb-4" style={{ fontWeight: 800 }}>
          Zapamiętaj to:
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {[
          {
            icon: Save,
            color: '#31BFC7',
            number: '1',
            title: 'Commituj CZĘSTO',
            desc: 'Przed każdą większą zmianą'
          },
          {
            icon: GitBranch,
            color: '#FEBE42',
            number: '2',
            title: 'Nowy feature = nowy branch',
            desc: 'Nigdy nie ruszaj main'
          },
          {
            icon: Eye,
            color: '#FF438B',
            number: '3',
            title: 'AI jest szybkie, Ty bądź ostrożny',
            desc: 'Zawsze sprawdzaj co AI zmieniło'
          }
        ].map((rule, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.2 }}
          >
            <Card 
              className="p-6 h-full hover:shadow-xl transition-shadow"
              style={{ 
                borderWidth: '3px',
                borderColor: rule.color,
                backgroundColor: `${rule.color}05`
              }}
            >
              <div className="text-center space-y-4">
                <div 
                  className="w-16 h-16 rounded-full mx-auto flex items-center justify-center"
                  style={{ backgroundColor: rule.color }}
                >
                  <rule.icon className="w-8 h-8 text-white" />
                </div>
                <div 
                  className="w-12 h-12 rounded-full mx-auto flex items-center justify-center text-2xl text-white"
                  style={{ backgroundColor: rule.color, fontWeight: 800 }}
                >
                  {rule.number}
                </div>
                <h3 className="text-xl text-black" style={{ fontWeight: 800 }}>
                  {rule.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {rule.desc}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Card className="bg-gradient-to-r from-[#31BFC7] via-[#46BAD8] to-[#31BFC7] border-none p-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Shield className="w-16 h-16 text-white" />
          </div>
          <h3 className="text-3xl text-white mb-3" style={{ fontWeight: 800 }}>
            GIT = TWOJE UBEZPIECZENIE
          </h3>
          <p className="text-xl text-white/90" style={{ fontWeight: 600 }}>
            Git to nie opcja. To konieczność.
          </p>
          <p className="text-white/80 mt-2">
            Szczególnie gdy AI może zmienić Ci pół projektu,<br />
            zanim zdążysz mrugnąć okiem.
          </p>
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
          onClick={() => subSlide > 0 && setSubSlide(prev => prev - 1)}
          disabled={subSlide === 0}
          className="w-8 h-8 rounded-full bg-white/80 border border-black/10 hover:bg-[#FEBE42] hover:border-[#FEBE42]/50 disabled:opacity-20 transition-all flex items-center justify-center"
          style={{ cursor: subSlide === 0 ? 'not-allowed' : 'pointer' }}
          title="Przewiń w górę"
        >
          <ChevronUp className="w-4 h-4 text-black/70" />
        </button>

        {/* Dots Indicator */}
        <div className="flex flex-col gap-2">
          {Array.from({ length: 9 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSubSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full border transition-all ${
                subSlide === idx 
                  ? 'bg-[#FEBE42] border-[#FEBE42] scale-110' 
                  : 'bg-white/80 border-black/20 hover:bg-[#FEBE42]/40'
              }`}
              style={{ cursor: 'pointer' }}
              title={`Część ${idx + 1}`}
            />
          ))}
        </div>

        {/* Down Arrow */}
        <button
          onClick={() => subSlide < 8 && setSubSlide(prev => prev + 1)}
          disabled={subSlide === 8}
          className="w-8 h-8 rounded-full bg-white/80 border border-black/10 hover:bg-[#FEBE42] hover:border-[#FEBE42]/50 disabled:opacity-20 transition-all flex items-center justify-center"
          style={{ cursor: subSlide === 8 ? 'not-allowed' : 'pointer' }}
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