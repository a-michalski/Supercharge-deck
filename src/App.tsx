import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Users, Clock, Code, Lightbulb, MessageSquare, Presentation, Sparkles, Settings, Route, Shield, Trophy, HelpCircle, Maximize2, Minimize2, User, FileCode, BookOpen, Zap, Box, Layers, Play, AlertTriangle, FileText, Edit, Heart, MoreHorizontal, Brain, Database, FileCheck2, Figma, Wrench, History } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Progress } from './components/ui/progress';
import { Toaster } from './components/ui/sonner';
import { Popover, PopoverContent, PopoverTrigger } from './components/ui/popover';
import { usePostHog } from 'posthog-js/react';
import TitleSlide from './components/slides/TitleSlide';
import AboutSlide from './components/slides/AboutSlide';
import VibeCodingSlide from './components/slides/VibeCodingSlide';
import ToolsSetupSlide from './components/slides/ToolsSetupSlide';
import CursorToolsSlide from './components/slides/CursorToolsSlide';
import McpSetupSlide from './components/slides/McpSetupSlide';
import DesignSystemRulesSlide from './components/slides/DesignSystemRulesSlide';
import ExtractTokensSlide from './components/slides/ExtractTokensSlide';
import PromptingRulesSlide from './components/slides/PromptingRulesSlide';
import PromptingExampleSlide from './components/slides/PromptingExampleSlide';
import ThreePathsSlide from './components/slides/ThreePathsSlide';
import KeyPrinciplesSlide from './components/slides/KeyPrinciplesSlide';
import SummarySlide from './components/slides/SummarySlide';
import StartFreshSlide from './components/slides/StartFreshSlide';
import ComponentMigrationSlide from './components/slides/ComponentMigrationSlide';
import FigmaAIReadySlide from './components/slides/FigmaAIReadySlide';
import WorkingVersionSlide from './components/slides/WorkingVersionSlide';
import TroubleshootingSlide from './components/slides/TroubleshootingSlide';
import CursorRulesSlide from './components/slides/CursorRulesSlide';
import ThanksSlide from './components/slides/ThanksSlide';
import AIArchitectureSlide from './components/slides/AIArchitectureSlide';
import {
  AgentWorkflowSlide,
  AIMindsetSlide,
  AtomicDesignPainSlide,
  ContextManagementSlide,
  DeterministicVerificationSlide,
  FigmaMcpInstallSlide,
  FigmaMcpIntroSlide,
  FigmaMcpToolsSlide,
  FoundationsPainSlide,
  ModelContextPackageSlide,
  WorkshopWelcomeSlide,
} from './components/slides/WorkshopOutlineSlides';

const slides = [
  { id: 0, title: 'Strona tytułowa', component: TitleSlide, duration: '1 min', icon: Presentation },
  { id: 1, title: 'O mnie', component: AboutSlide, duration: '2 min', icon: User },
  { id: 2, title: 'Powitanie', component: WorkshopWelcomeSlide, duration: '2 min', icon: Presentation },
  { id: 3, title: 'Vibe coding vs Asistent design', component: VibeCodingSlide, duration: '2 min', icon: Lightbulb },
  { id: 4, title: 'Ramka nastawienia', component: AIMindsetSlide, duration: '2 min', icon: Brain },
  { id: 5, title: 'Jak działają narzędzia AI', component: AIArchitectureSlide, duration: '2 min', icon: Layers },
  { id: 6, title: 'Kontekst: pakiet modelu', component: ModelContextPackageSlide, duration: '2 min', icon: Database },
  { id: 7, title: 'Zarządzanie kontekstem', component: ContextManagementSlide, duration: '2 min', icon: History },
  { id: 8, title: 'Schemat pracy z agentem', component: AgentWorkflowSlide, duration: '3 min', icon: Route },
  { id: 9, title: 'Weryfikacja deterministyczna', component: DeterministicVerificationSlide, duration: '3 min', icon: FileCheck2 },
  { id: 10, title: 'Figma MCP', component: FigmaMcpIntroSlide, duration: '2 min', icon: Figma },
  { id: 11, title: 'Instalacja Figma MCP', component: FigmaMcpInstallSlide, duration: '3 min', icon: Settings },
  { id: 12, title: 'Narzędzia Figma MCP', component: FigmaMcpToolsSlide, duration: '4 min', icon: Wrench },
  { id: 13, title: 'Pain: Foundations', component: FoundationsPainSlide, duration: '3 min', icon: Layers },
  { id: 14, title: 'Pain: Atomic Design', component: AtomicDesignPainSlide, duration: '3 min', icon: Box },
  { id: 15, title: 'Narzędzia + Setup', component: ToolsSetupSlide, duration: '2 min', icon: Code },
  { id: 16, title: 'VS Code + Claude Code', component: CursorToolsSlide, duration: '3 min', icon: Sparkles },
  { id: 17, title: 'CLAUDE.md', component: CursorRulesSlide, duration: '3 min', icon: FileText },
  { id: 18, title: 'MCP + Setup środowiska', component: McpSetupSlide, duration: '2 min', icon: Settings },
  { id: 19, title: 'Kluczowe zasady', component: KeyPrinciplesSlide, duration: '2 min', icon: Shield },
  { id: 20, title: 'Zasady promptowania', component: PromptingRulesSlide, duration: '2 min', icon: MessageSquare },
  { id: 21, title: 'Przykład promptowania', component: PromptingExampleSlide, duration: '2 min', icon: Edit },
  { id: 22, title: 'Trzy ścieżki kodowania', component: ThreePathsSlide, duration: '2 min', icon: Route },
  { id: 23, title: 'Make Figma AI-ready', component: FigmaAIReadySlide, duration: '2 min', icon: Layers },
  { id: 24, title: 'Automatyczne Guidelines.md', component: DesignSystemRulesSlide, duration: '2 min', icon: FileCode },
  { id: 25, title: 'Ekstrakcja tokenów', component: ExtractTokensSlide, duration: '2 min', icon: BookOpen },
  { id: 26, title: 'Start Fresh', component: StartFreshSlide, duration: '2 min', icon: Zap },
  { id: 27, title: 'Component Migration', component: ComponentMigrationSlide, duration: '2 min', icon: Box },
  { id: 28, title: 'Working version', component: WorkingVersionSlide, duration: '2 min', icon: Play },
  { id: 29, title: 'Troubleshooting', component: TroubleshootingSlide, duration: '3 min', icon: AlertTriangle },
  { id: 30, title: 'Najważniejsze zasady', component: SummarySlide, duration: '5 min', icon: Trophy },
  { id: 31, title: 'Dziękuję', component: ThanksSlide, duration: '1 min', icon: Heart },
];

const arrowDownHandledSlides = new Set([
  PromptingExampleSlide,
  DesignSystemRulesSlide,
  ExtractTokensSlide,
  StartFreshSlide,
  ComponentMigrationSlide,
]);

export default function App() {
  const posthog = usePostHog();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isFullscreenAvailable, setIsFullscreenAvailable] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const [autoHideEnabled, setAutoHideEnabled] = useState(true);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isHoveringControls, setIsHoveringControls] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [showAllSlidesPopover, setShowAllSlidesPopover] = useState(false);

  // Get visible slides for sliding window navigation
  const getVisibleSlides = (current: number) => {
    const total = slides.length;
    const windowSize = 7;
    const halfWindow = Math.floor(windowSize / 2); // 3
    
    let visibleIndices: number[] = [];
    
    // Calculate range
    let start = Math.max(0, current - halfWindow);
    let end = Math.min(total - 1, current + halfWindow);
    
    // Adjust if we're near the edges
    if (current < halfWindow) {
      end = Math.min(total - 1, windowSize - 1);
    } else if (current > total - 1 - halfWindow) {
      start = Math.max(0, total - windowSize);
    }
    
    for (let i = start; i <= end; i++) {
      visibleIndices.push(i);
    }
    
    return {
      indices: visibleIndices,
      showLeftDots: start > 0,
      showRightDots: end < total - 1,
    };
  };

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  // Track slide views in PostHog
  useEffect(() => {
    if (posthog && slides[currentSlide]) {
      const slide = slides[currentSlide];
      // Track pageview for each slide
      posthog.capture('$pageview', {
        slide_id: slide.id,
        slide_title: slide.title,
        slide_index: currentSlide,
        total_slides: slides.length,
        progress_percent: Math.round(((currentSlide + 1) / slides.length) * 100),
      });
      
      // Also track custom slide_view event for better filtering
      posthog.capture('slide_viewed', {
        slide_id: slide.id,
        slide_title: slide.title,
        slide_index: currentSlide,
        total_slides: slides.length,
        progress_percent: Math.round(((currentSlide + 1) / slides.length) * 100),
      });
    }
  }, [currentSlide, posthog]);

  // Check if fullscreen is available
  useEffect(() => {
    // Check if fullscreen API is available and allowed
    const checkFullscreenAvailability = () => {
      if (!document.fullscreenEnabled) {
        setIsFullscreenAvailable(false);
        return;
      }
      
      // Try to detect if we're in an iframe with restrictions
      try {
        if (window.self !== window.top) {
          // We're in an iframe, fullscreen might be restricted
          setIsFullscreenAvailable(false);
        }
      } catch (e) {
        // Cross-origin iframe, assume restricted
        setIsFullscreenAvailable(false);
      }
    };

    checkFullscreenAvailability();
  }, []);

  // Fullscreen toggle
  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (error) {
      // If fullscreen fails, hide the button
      setIsFullscreenAvailable(false);
      console.warn('Fullscreen is not available in this environment');
    }
  };

  // Monitor fullscreen changes (e.g., when user presses ESC)
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Toggle auto-hide with 'H' key
      if (event.key === 'h' || event.key === 'H') {
        setAutoHideEnabled(prev => !prev);
        setShowControls(true); // Always show controls when toggling
        resetHideTimer();
        return;
      }

      if (event.key === 'ArrowDown' && arrowDownHandledSlides.has(slides[currentSlide].component)) {
        return;
      }
      
      if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]); // Re-attach listener when currentSlide changes

  useEffect(() => {
    const handleNextSlide = () => nextSlide();

    window.addEventListener('presentation:next-slide', handleNextSlide);
    return () => window.removeEventListener('presentation:next-slide', handleNextSlide);
  }, [currentSlide]);

  // Auto-hide timer management
  const resetHideTimer = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
    
    // Don't start timer if hovering over controls or auto-hide is disabled
    if (autoHideEnabled && !isHoveringControls) {
      const timeout = setTimeout(() => {
        setShowControls(false);
      }, 5000); // 5 seconds
      hideTimeoutRef.current = timeout;
    }
  };

  // Mouse move handler - show controls and reset timer
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!autoHideEnabled) {
        if (!showControls) {
          setShowControls(true);
        }
        return;
      }

      const viewportHeight = window.innerHeight;
      const mouseY = e.clientY;
      
      // Define hover zones (15% from top/bottom)
      const topZone = viewportHeight * 0.15;
      const bottomZone = viewportHeight * 0.85;
      
      if (mouseY < topZone || mouseY > bottomZone) {
        if (!showControls) {
          setShowControls(true);
        }
        resetHideTimer();
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, [autoHideEnabled, isHoveringControls, showControls]);

  // Initial auto-hide timer
  useEffect(() => {
    if (autoHideEnabled) {
      resetHideTimer();
    } else {
      setShowControls(true);
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    }
  }, [autoHideEnabled]);

  // Presentation timer
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (timerStarted) {
      interval = setInterval(() => {
        setElapsedSeconds(prev => prev + 1);
      }, 1000);
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [timerStarted]);

  // Toggle timer (start/reset)
  const toggleTimer = () => {
    if (timerStarted) {
      // Reset
      setTimerStarted(false);
      setElapsedSeconds(0);
    } else {
      // Start
      setTimerStarted(true);
    }
  };

  // Format elapsed time
  const formatElapsedTime = () => {
    if (!timerStarted) {
      return 'Start';
    }
    
    if (elapsedSeconds <= 60) {
      return `${elapsedSeconds} s`;
    }
    
    const minutes = Math.floor(elapsedSeconds / 60);
    return `${minutes} min`;
  };

  const CurrentSlideComponent = slides[currentSlide].component;
  const progress = ((currentSlide + 1) / slides.length) * 100;

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Skip to content link for keyboard navigation */}
      <a 
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#FEBE42] focus:text-black focus:rounded-lg"
        style={{ fontWeight: 600 }}
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('main-content')?.focus();
        }}
      >
        Przejdź do treści
      </a>

      {/* Screen reader announcements for slide changes */}
      <div 
        role="status" 
        aria-live="polite" 
        aria-atomic="true"
        className="sr-only"
      >
        Slajd {currentSlide + 1} z {slides.length}: {slides[currentSlide].title}
      </div>

      {/* Progress Bar - Always Visible */}
      <div 
        className="fixed top-0 left-0 right-0 z-50 w-full h-1 bg-gray-100"
        role="progressbar"
        aria-label="Postęp prezentacji"
        aria-valuenow={currentSlide + 1}
        aria-valuemin={1}
        aria-valuemax={slides.length}
        aria-valuetext={`Slajd ${currentSlide + 1} z ${slides.length}`}
      >
        <div 
          className="h-full bg-[#FEBE42] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Header - Auto-hide */}
      <AnimatePresence>
        {showControls && (
          <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-1 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-black/10 z-40 shadow-sm"
            onMouseEnter={() => {
              setIsHoveringControls(true);
              if (hideTimeoutRef.current) {
                clearTimeout(hideTimeoutRef.current);
              }
            }}
            onMouseLeave={() => {
              setIsHoveringControls(false);
              resetHideTimer();
            }}
          >
            <div className="container mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      <div className="w-2 h-6 bg-black transform skew-x-[-20deg]"></div>
                      <div className="w-2 h-6 bg-black transform skew-x-[-20deg]"></div>
                      <div className="w-2 h-6 bg-black transform skew-x-[-20deg]"></div>
                    </div>
                    <span className="text-xl" style={{ fontWeight: 800 }}>supercharge</span>
                  </div>
                </div>
                <div>
                  <h1 className="text-lg" style={{ fontWeight: 600 }}>Budowanie z AI bez pisania kodu</h1>
                </div>
                <div className="flex items-center gap-4">
                  <Badge 
                    variant="outline" 
                    className="border-black/20 text-black cursor-pointer hover:bg-[#FEBE42]/20 transition-colors w-[75px] flex items-center px-2 py-1"
                    onClick={toggleTimer}
                    title={timerStarted ? 'Kliknij aby zresetować timer' : 'Kliknij aby rozpocząć pomiar czasu'}
                    aria-label={timerStarted ? `Timer: ${formatElapsedTime()}. Kliknij aby zresetować` : 'Rozpocznij pomiar czasu prezentacji'}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleTimer();
                      }
                    }}
                  >
                    <Clock className="w-3 h-3 flex-shrink-0 mr-1.5" />
                    <span className="flex-1 text-center">{formatElapsedTime()}</span>
                  </Badge>
                  <span className="text-sm text-gray-600">
                    {currentSlide + 1} / {slides.length}
                  </span>
                  {isFullscreenAvailable && (
                    <button
                      type="button"
                      onClick={toggleFullscreen}
                      className="p-2 rounded-lg hover:bg-[#FEBE42]/20 transition-colors"
                      aria-label={isFullscreen ? 'Wyłącz pełny ekran' : 'Włącz pełny ekran'}
                      title={isFullscreen ? 'Wyłącz pełny ekran' : 'Włącz pełny ekran'}
                      style={{ cursor: 'pointer' }}
                    >
                      {isFullscreen ? (
                        <Minimize2 className="w-4 h-4 text-gray-600" />
                      ) : (
                        <Maximize2 className="w-4 h-4 text-gray-600" />
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pt-24 pb-20 px-6 container mx-auto" id="main-content">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="min-h-[calc(100vh-200px)] flex items-center justify-center"
        >
          <CurrentSlideComponent />
        </motion.div>
      </main>

      {/* Navigation - Auto-hide */}
      <AnimatePresence>
        {showControls && (
          <motion.nav
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-black/10 shadow-lg z-40"
            onMouseEnter={() => {
              setIsHoveringControls(true);
              if (hideTimeoutRef.current) {
                clearTimeout(hideTimeoutRef.current);
              }
            }}
            onMouseLeave={() => {
              setIsHoveringControls(false);
              resetHideTimer();
            }}
          >
            <div className="container mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <Button
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  variant="outline"
                  className="border-black/20 text-black hover:bg-[#FEBE42] hover:border-[#FEBE42] disabled:opacity-30"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Poprzedni
                </Button>

                <div className="flex gap-2 max-w-xl justify-center items-center">
                  {getVisibleSlides(currentSlide).showLeftDots && (
                    <Popover open={showAllSlidesPopover} onOpenChange={setShowAllSlidesPopover}>
                      <PopoverTrigger asChild>
                        <button
                          type="button"
                          className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-[#FEBE42]/30 transition-all"
                          aria-label="Pokaż wszystkie slajdy"
                          title="Pokaż wszystkie slajdy"
                        >
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="w-[600px] p-4" side="top">
                        <div className="space-y-3">
                          <h3 className="text-sm" style={{ fontWeight: 600 }}>Wszystkie slajdy</h3>
                          <div 
                            className="grid grid-cols-7 gap-2 max-h-[300px] overflow-y-auto"
                            role="group"
                            aria-label="Nawigacja po wszystkich slajdach"
                          >
                            {slides.map((slide, index) => {
                              const Icon = slide.icon;
                              return (
                                <button
                                  key={slide.id}
                                  type="button"
                                  onClick={() => {
                                    goToSlide(index);
                                    setShowAllSlidesPopover(false);
                                  }}
                                  className={`p-3 rounded-lg transition-all flex flex-col items-center gap-1 ${
                                    index === currentSlide
                                      ? 'bg-[#FEBE42] text-black shadow-md'
                                      : 'bg-gray-100 text-gray-600 hover:bg-[#FEBE42]/30'
                                  }`}
                                  aria-label={`Slajd ${index + 1}: ${slide.title}`}
                                  aria-current={index === currentSlide ? 'page' : undefined}
                                  title={slide.title}
                                >
                                  <Icon className="w-5 h-5" />
                                  <span className="text-xs">{index + 1}</span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
                  )}
                  
                  {getVisibleSlides(currentSlide).indices.map((index) => {
                    const slide = slides[index];
                    const Icon = slide.icon;
                    return (
                      <button
                        key={slide.id}
                        type="button"
                        onClick={() => goToSlide(index)}
                        className={`p-2 rounded-lg transition-all ${
                          index === currentSlide
                            ? 'bg-[#FEBE42] text-black scale-110 shadow-md'
                            : 'bg-gray-100 text-gray-600 hover:bg-[#FEBE42]/30'
                        }`}
                        aria-label={`Slajd ${index + 1}: ${slide.title}`}
                        aria-current={index === currentSlide ? 'page' : undefined}
                        title={slide.title}
                      >
                        <Icon className="w-4 h-4" />
                      </button>
                    );
                  })}
                  
                  {getVisibleSlides(currentSlide).showRightDots && (
                    <Popover open={showAllSlidesPopover} onOpenChange={setShowAllSlidesPopover}>
                      <PopoverTrigger asChild>
                        <button
                          type="button"
                          className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-[#FEBE42]/30 transition-all"
                          aria-label="Pokaż wszystkie slajdy"
                          title="Pokaż wszystkie slajdy"
                        >
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="w-[600px] p-4" side="top">
                        <div className="space-y-3">
                          <h3 className="text-sm" style={{ fontWeight: 600 }}>Wszystkie slajdy</h3>
                          <div 
                            className="grid grid-cols-7 gap-2 max-h-[300px] overflow-y-auto"
                            role="group"
                            aria-label="Nawigacja po wszystkich slajdach"
                          >
                            {slides.map((slide, index) => {
                              const Icon = slide.icon;
                              return (
                                <button
                                  key={slide.id}
                                  type="button"
                                  onClick={() => {
                                    goToSlide(index);
                                    setShowAllSlidesPopover(false);
                                  }}
                                  className={`p-3 rounded-lg transition-all flex flex-col items-center gap-1 ${
                                    index === currentSlide
                                      ? 'bg-[#FEBE42] text-black shadow-md'
                                      : 'bg-gray-100 text-gray-600 hover:bg-[#FEBE42]/30'
                                  }`}
                                  aria-label={`Slajd ${index + 1}: ${slide.title}`}
                                  aria-current={index === currentSlide ? 'page' : undefined}
                                  title={slide.title}
                                >
                                  <Icon className="w-5 h-5" />
                                  <span className="text-xs">{index + 1}</span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
                  )}
                </div>

                <Button
                  onClick={nextSlide}
                  disabled={currentSlide === slides.length - 1}
                  variant="outline"
                  className="border-black/20 text-black hover:bg-[#FEBE42] hover:border-[#FEBE42] disabled:opacity-30"
                >
                  Następny
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Auto-hide Status Indicator */}
      {!autoHideEnabled && (
        <div className="fixed bottom-20 right-6 z-50 bg-black/80 text-white px-3 py-2 rounded-lg text-sm">
          Auto-hide wyłączony (Naciśnij H)
        </div>
      )}

      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
}
