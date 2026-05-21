import React from 'react';
import {
  AlertTriangle,
  ArrowRight,
  Blocks,
  Bot,
  Box,
  CheckCircle2,
  ClipboardCheck,
  Code,
  Figma,
  FileCheck2,
  GitBranch,
  Layers,
  Layout,
  Palette,
  Plug,
  RefreshCw,
  Ruler,
  ScrollText,
  SearchCheck,
  Sparkles,
  Terminal,
  Type,
  User,
  Wrench,
  XCircle,
} from 'lucide-react';
import { motion } from 'motion/react';
import type { CSSProperties, ReactNode } from 'react';
import { Card } from '../ui/card';

const accentYellow = '#FEBE42';
const accentCyan = '#31BFC7';
const accentPink = '#EA148C';
const accentBlue = '#445469';
const accentOrange = '#FEBE42';
const cream = '#EDE9E6';
const black = '#000000';
const headingStyle: CSSProperties = {
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 800,
  fontSize: 'clamp(18px, 2.6vw, 34px)',
  lineHeight: 1.12,
  color: black,
};
const mutedHeadingStyle: CSSProperties = {
  color: '#9B9189',
  fontWeight: 600,
};
const subtitleStyle: CSSProperties = {
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 600,
  fontSize: 'clamp(11px, 1.5vw, 19px)',
  lineHeight: 1.45,
  color: '#333233',
};
const bodyStyle: CSSProperties = {
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 400,
  fontSize: 'clamp(10px, 1.3vw, 17px)',
  lineHeight: 1.45,
  color: '#333233',
};
const cardTitleStyle: CSSProperties = {
  fontFamily: 'Lora, Georgia, serif',
  fontWeight: 700,
  fontSize: 'clamp(12px, 1.6vw, 20px)',
  lineHeight: 1.25,
  color: black,
};
const slideFrameClass = 'w-full max-w-5xl mx-auto space-y-8';
const creamCardClass = 'border-black/15 shadow-sm p-6 h-full';
const creamCardStyle: CSSProperties = { backgroundColor: cream };

function IconBadge({ icon: Icon, color }: { icon: React.ComponentType<{ className?: string; style?: CSSProperties }>; color: string }) {
  return (
    <div className="p-3 rounded-xl w-fit mb-4" style={{ backgroundColor: `${color}18` }}>
      <Icon className="w-7 h-7" style={{ color }} />
    </div>
  );
}

function SlideHeader({
  badge,
  title,
  subtitle,
  color = accentYellow,
}: {
  badge: string;
  title: string;
  subtitle?: string;
  color?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-left flex flex-col gap-10"
    >
      <h2 style={headingStyle}>
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-4xl" style={subtitleStyle}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

function HighlightCard({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="text-left"
    >
      {children}
    </motion.div>
  );
}

export function WorkshopWelcomeSlide() {
  const agenda = [
    'Jak efektywnie pracować z AI w praktyce',
    'Schemat pracy z agentem: planowanie, realizacja, ocena',
    'Konfiguracja Figma MCP i praca z design systemem',
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={slideFrameClass}
    >
      <SlideHeader
        badge="SPOTKANIE SUPERCHARGE"
        title="Witajcie na kolejnym spotkaniu Supercharge"
        subtitle="Dzisiaj skupiamy się na praktyce: jak prowadzić pracę z AI tak, żeby wynik był przewidywalny, sprawdzalny i spójny z design systemem."
      />

      <div className="grid md:grid-cols-3 gap-6">
        {agenda.map((item, idx) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.1 }}
          >
            <Card className={creamCardClass} style={creamCardStyle}>
              <p className="flex items-baseline gap-3" style={cardTitleStyle}>
                <span style={cardTitleStyle}>0{idx + 1}</span>
                {item}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>

      <HighlightCard>
        <p style={{ ...subtitleStyle, color: black, fontWeight: 400 }}>
          Cel: mniej zgadywania, więcej kontroli nad procesem.
        </p>
      </HighlightCard>
    </motion.div>
  );
}

export function AIMindsetSlide() {
  const points = [
    {
      icon: User,
      title: 'Człowiek aktywnie dopytuje',
      text: 'Stara się zrozumieć Twoją intencję, kontekst i ukryte założenia.',
      color: accentCyan,
    },
    {
      icon: Bot,
      title: 'AI szacuje odpowiedź',
      text: 'Dobiera najbardziej prawdopodobną kontynuację na podstawie całego kontekstu rozmowy.',
      color: accentPink,
    },
    {
      icon: AlertTriangle,
      title: 'Błędy dalej się zdarzają',
      text: 'Nawet przy idealnym prompcie część przypadków może zostać źle zrozumiana.',
      color: accentOrange,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={slideFrameClass}
    >
      <SlideHeader
        badge="RAMKA NASTAWIENIA"
        title="AI nie rozumie. AI szacuje."
        subtitle="Największa zmiana mentalna: traktuj model jak system probabilistyczny, a nie rozmówcę, który naprawdę wie, co masz na myśli."
        color={accentPink}
      />

      <div className="grid md:grid-cols-3 gap-6">
        {points.map((point, idx) => {
          const Icon = point.icon;
          return (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + idx * 0.12 }}
          >
              <Card className={creamCardClass} style={creamCardStyle}>
                <h3 className="mb-3 flex items-center gap-3" style={cardTitleStyle}>
                  <Icon className="w-5 h-5 flex-shrink-0" style={{ color: black }} />
                  <span>{point.title}</span>
                </h3>
                <p style={bodyStyle}>{point.text}</p>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <HighlightCard>
        <p style={{ ...subtitleStyle, color: black, fontWeight: 400 }}>
          Małe niezrozumienie na początku rozmowy może sprawić, że cała praca będzie wymagała poprawek.
        </p>
      </HighlightCard>
    </motion.div>
  );
}

export function ModelContextPackageSlide() {
  const contextLayers = [
    {
      label: 'System prompt',
      annotation: '< Zasady działania modelu ustawione przez dostawcę.',
    },
    {
      label: 'MCP, narzędzia i skille',
      annotation: '< Dostępne integracje, komendy, workflow\n   i wyspecjalizowane instrukcje agenta.',
    },
    {
      label: 'Prompt projektu',
      annotation: '< Wytyczne specyficzne dla tego repozytorium,\n   produktu lub zadania.',
    },
    {
      label: 'Prompt użytkownika',
      annotation: '< Twój ogólny profil, preferencje komunikacji\n   i stałe instrukcje.',
      bold: true,
    },
    {
      label: 'Historia rozmowy',
      annotation: '< Wszystko, co napisano w tym wątku od początku.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={slideFrameClass}
    >
      <SlideHeader
        badge="KONTEKST"
        title={<>Co tak naprawdę trafia do modelu? <span style={mutedHeadingStyle}>(w uproszczeniu)</span></>}
        subtitle="Za każdym razem AI otrzymuje pakiet instrukcji i historii. Odpowiedź jest wynikiem pracy na całym pakiecie, nie tylko na ostatnim zdaniu."
        color={accentCyan}
      />

      <div style={{ display: 'flex', gap: '5%', alignItems: 'flex-start' }}>
        <div style={{ width: '50%', position: 'relative' }}>
          <div style={{
            border: '2.5px solid #000000',
            background: '#FFFFFF',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            position: 'relative',
            zIndex: 1,
          }}>
            {contextLayers.map((layer, idx) => (
              <motion.div
                key={layer.label}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.15 + idx * 0.08 }}
                style={{
                  background: cream,
                  padding: '20px 16px',
                  textAlign: 'center',
                  fontFamily: 'Lora, Georgia, serif',
                  fontSize: 'clamp(12px, 1.6vw, 20px)',
                  fontWeight: layer.bold ? 700 : 400,
                  color: black,
                  lineHeight: 1.3,
                }}
              >
                {layer.label}
              </motion.div>
            ))}
          </div>

          <div style={{
            position: 'absolute',
            bottom: '-55px',
            left: '-15px',
            width: 'calc(100% + 30px)',
            height: '80px',
            backgroundImage: 'url(/ai-architecture-frame.png)',
            backgroundSize: '100% 550px',
            backgroundPosition: 'center bottom',
            backgroundRepeat: 'no-repeat',
            zIndex: 0,
          }} />
        </div>

        <div style={{ width: '45%', display: 'flex', flexDirection: 'column', gap: '6px', paddingTop: '10px' }}>
          {contextLayers.map((layer, idx) => (
            <motion.div
              key={`context-ann-${layer.label}`}
              initial={{ opacity: 0, x: 6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + idx * 0.08 }}
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(9px, 1.1vw, 14px)',
                fontWeight: 400,
                color: black,
                lineHeight: 1.45,
                whiteSpace: 'pre-line',
                padding: '20px 0',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {layer.annotation}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function ContextManagementSlide() {
  const issues = [
    {
      title: 'Loss in the middle',
      text: 'Informacje ze środka rozmowy są łatwiej gubione przez model.',
    },
    {
      title: 'Gnicie kontekstu',
      text: 'Im dłużej trwa wątek, tym więcej AI miesza, upraszcza albo powiela wcześniejsze błędy.',
    },
    {
      title: 'Nowy temat = nowa rozmowa',
      text: 'Nie doklejaj dużej zmiany do długiej rozmowy o czymś innym.',
    },
    {
      title: 'Kiedy rozmowa się zaciąga',
      text: 'Poproś AI o kompaktowe podsumowanie przed kolejnym dużym pytaniem.',
    },
    {
      title: 'Jeśli nic nie działa',
      text: 'Zacznij od nowa bez bagażu poprzednich błędów.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={slideFrameClass}
    >
      <SlideHeader
        badge="KONTEKST"
        title="Jak zarządzać kontekstem?"
        subtitle="Długie rozmowy się psują. W praktyce trzeba świadomie decydować, kiedy kontynuować, kiedy kompaktować, a kiedy zacząć od zera."
        color={accentCyan}
      />

      <div className="grid md:grid-cols-5 gap-4">
        {issues.map((issue, idx) => (
          <motion.div
            key={issue.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + idx * 0.08 }}
          >
            <Card className="border-black/15 shadow-sm p-5 h-full" style={creamCardStyle}>
              <h3 className="mb-3" style={{ ...cardTitleStyle, fontSize: 'clamp(11px, 1.4vw, 18px)' }}>
                <span className="flex items-baseline gap-2">
                  <span>{idx + 1}</span>
                  <span>{issue.title}</span>
                </span>
              </h3>
              <p style={{ ...bodyStyle, fontSize: 'clamp(9px, 1.0vw, 13px)' }}>{issue.text}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      <HighlightCard>
        <p style={{ ...subtitleStyle, color: black, fontWeight: 400 }}>
          Zasada operacyjna: im większa stawka zadania, tym czystszy i krótszy powinien być kontekst startowy.
        </p>
      </HighlightCard>
    </motion.div>
  );
}

export function AgentWorkflowSlide() {
  const steps = [
    {
      icon: ScrollText,
      number: '01',
      title: 'Planowanie',
      text: 'Tryb plan albo plik TODO w Markdown. Agent rozpisuje kroki zanim zacznie działać.',
      color: '#FEBE42', // Yellow
      onColor: '#000000',
    },
    {
      icon: Wrench,
      number: '02',
      title: 'Realizacja',
      text: 'Agent wykonuje krok po kroku ustalony plan i tworzy artefakty po drodze.',
      color: '#31BFC7', // Teal
      onColor: '#FFFFFF',
    },
    {
      icon: ClipboardCheck,
      number: '03',
      title: 'Ocena',
      text: 'Subagent bez kontekstu rozmowy analizuje wynik według checklisty sukcesu.',
      color: '#445469', // Slate Blue
      onColor: '#FFFFFF',
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="mb-24">
        <SlideHeader
          badge="SCHEMAT PRACY"
          title="Podstawowy trójkrok z agentem"
          subtitle="Najbezpieczniejszy proces to oddzielenie myślenia, wykonania i oceny. Każdy etap ma inną rolę."
        />
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {steps.map((step, idx) => {
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="h-full"
            >
              <Card 
                className="border-black/10 shadow-sm h-full flex flex-col gap-0 overflow-hidden" 
                style={{ padding: 0, borderRadius: '12px', backgroundColor: '#EDE9E6' }}
              >
                {/* Header: number + title */}
                <div
                  className="px-6 py-6 flex items-center gap-4"
                  style={{ backgroundColor: step.color }}
                >
                  <span style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 800,
                    fontSize: 'clamp(22px, 2.8vw, 36px)',
                    color: step.onColor,
                    lineHeight: 1,
                    flexShrink: 0,
                  }}>
                    {step.number}
                  </span>
                  <h3 style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(15px, 1.7vw, 22px)',
                    lineHeight: 1.2,
                    color: step.onColor,
                  }}>
                    {step.title}
                  </h3>
                </div>

                {/* Content: description only */}
                <div className="px-6 py-8 flex-grow">
                  <p style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(10px, 1.2vw, 15px)',
                    color: '#333233',
                    lineHeight: 1.55,
                  }}>
                    {step.text}
                  </p>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        style={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 400,
          fontSize: 'clamp(11px, 1.5vw, 19px)', // 18pt
          color: '#000000',
          textAlign: 'center',
          maxWidth: '850px',
          margin: '0 auto',
          lineHeight: 1.6,
        }}
      >
        Subagent dostaje tylko to, co musi mieć. Oszczędza tokeny i daje bardziej krytyczny feedback.
      </motion.p>
    </div>
  );
}

export function DeterministicVerificationSlide() {
  const modes = [
    {
      icon: Sparkles,
      title: 'LLM jako generator',
      text: 'AI generuje odpowiedzi, treści i kod. Wyniki są probabilistyczne.',
      color: accentPink,
    },
    {
      icon: SearchCheck,
      title: 'LLM jako weryfikator',
      text: 'AI pisze skrypt, który deterministycznie sprawdza wyniki i wykrywa anomalie.',
      color: accentCyan,
    },
  ];

  const examples = [
    'Przy transkryptach: skrypt sprawdza, czy cytaty faktycznie występują w tekście.',
    'Przy kodowaniu: hook sprawdza, czy pliki nie zostały przypadkowo zmodyfikowane.',
    'Przy UI: AI z przeglądarką porównuje widok w Figmie z efektem w projekcie.',
  ];

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      <SlideHeader
        badge="WERYFIKACJA"
        title="Dwa tryby użycia AI"
        subtitle="Generowanie i weryfikacja to różne zadania. Najlepsze procesy używają AI do obu, ale nie mieszają ich w jednym kroku."
        color={accentBlue}
      />

      <div className="grid md:grid-cols-2 gap-6">
        {modes.map((mode, idx) => {
          const Icon = mode.icon;
          return (
            <motion.div
              key={mode.title}
              initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + idx * 0.12 }}
            >
              <Card className="bg-[#EDE9E6] border-0 shadow-none p-7 h-full">
                <div className="flex items-start gap-4">
                  <IconBadge icon={Icon} color={mode.color} />
                  <div>
                    <h3 className="text-2xl text-black mb-3" style={{ fontWeight: 700 }}>
                      {mode.title}
                    </h3>
                    <p className="text-gray-700">{mode.text}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <Card className="bg-gray-50 border-gray-200 p-6">
        <h3 className="text-xl text-black mb-4" style={{ fontWeight: 800 }}>
          Przykłady
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {examples.map((example, idx) => (
            <motion.div
              key={example}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 + idx * 0.1 }}
              className="bg-white border border-gray-200 rounded-lg p-4"
            >
              <FileCheck2 className="w-5 h-5 mb-3" style={{ color: accentBlue }} />
              <p className="text-sm text-gray-700">{example}</p>
            </motion.div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export function FigmaMcpIntroSlide() {
  const features = [
    'MCP to język komunikacji, który upraszcza interakcje agentów z zewnętrznymi narzędziami i redukuje liczbę tokenów.',
    'Figma MCP pozwala pracować bezpośrednio na materiałach Figma: komponentach, wariantach, stylach i wytycznych.',
    'Możesz generować alternatywy w Figmie i ściągać je do projektu jako punkt startowy dla implementacji.',
    'Jedna komenda instaluje plugin. Za chwilę konfigurujemy to razem.',
  ];

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      <SlideHeader
        badge="NARZĘDZIE"
        title="Figma MCP - co to jest i po co?"
        subtitle="Most między Claude Code i Figmą: agent może czytać design, tworzyć warianty i działać bliżej Twojego design systemu."
        color={accentPink}
      />

      <div className="grid lg:grid-cols-[360px_1fr] gap-8 items-stretch">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Card className="bg-gradient-to-br from-[#EA148C]/10 to-[#EDE9E6] border-[#EA148C]/30 shadow-md p-8 h-full flex flex-col justify-center items-center text-center">
            <div className="p-6 rounded-2xl mb-5" style={{ backgroundColor: `${accentPink}18` }}>
              <Figma className="w-20 h-20" style={{ color: accentPink }} />
            </div>
            <h3 className="text-3xl text-black" style={{ fontWeight: 800 }}>
              Claude Code + Figma
            </h3>
            <p className="text-gray-600 mt-3">Połączenie przez Model Context Protocol</p>
          </Card>
        </motion.div>

        <div className="space-y-4">
          {features.map((feature, idx) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
            >
              <Card className="bg-[#EDE9E6] border-black/15 shadow-sm p-5">
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: accentPink }} />
                  <p className="text-gray-700">{feature}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FigmaMcpInstallSlide() {
  const requirements = ['Claude Code zainstalowany w terminalu', 'Konto Figma: Dev lub Full seat', 'Konto Claude Pro lub Max'];
  const steps = [
    'Zainstaluj plugin jedną komendą.',
    'Zrestartuj Claude Code, jeśli był uruchomiony podczas instalacji.',
    'Wpisz /plugin w Claude Code i przejdź do zakładki Installed.',
    'Znajdź Figma Remote MCP i uwierzytelnij konto Figma w przeglądarce.',
  ];

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      <SlideHeader
        badge="KONFIGURACJA"
        title="Instalacja Figma MCP w Claude Code"
        subtitle="Po połączeniu możesz odwoływać się do plików Figma bezpośrednio w promptach: przez zaznaczony element albo link do pliku."
        color={accentYellow}
      />

      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Card className="bg-[#EDE9E6] border-black/15 shadow-sm p-6 h-full">
            <div className="flex items-center gap-3 mb-5">
              <IconBadge icon={ClipboardCheck} color={accentCyan} />
              <h3 className="text-2xl text-black" style={{ fontWeight: 700 }}>
                Wymagania wstępne
              </h3>
            </div>
            <div className="space-y-3">
              {requirements.map((item) => (
                <div key={item} className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-lg p-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: accentCyan }} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }}>
          <Card className="bg-[#EDE9E6] border-black/15 shadow-sm p-6 h-full">
            <div className="flex items-center gap-3 mb-5">
              <IconBadge icon={Terminal} color={accentYellow} />
              <h3 className="text-2xl text-black" style={{ fontWeight: 700 }}>
                Kroki
              </h3>
            </div>

            <div className="rounded-lg p-4 mb-5" style={{ backgroundColor: '#1E1E1E' }}>
              <p className="font-mono text-sm" style={{ color: '#F5C57C' }}>claude plugin install figma@claude-plugins-official</p>
            </div>

            <div className="space-y-3">
              {steps.map((step, idx) => (
                <div key={step} className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FEBE42] flex items-center justify-center flex-shrink-0 text-black" style={{ fontWeight: 800 }}>
                    {idx + 1}
                  </div>
                  <p className="text-gray-700 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>

      <Card className="bg-[#EA148C]/10 border-[#EA148C]/30 p-5">
        <div className="flex gap-3">
          <AlertTriangle className="w-6 h-6 flex-shrink-0" style={{ color: accentPink }} />
          <p className="text-gray-800">
            <strong style={{ fontWeight: 800 }}>Uwaga:</strong> darmowe konto Figma ma ograniczony dostęp, około 6 użyć miesięcznie. Do pełnego użycia potrzebny jest Dev albo Full seat.
          </p>
        </div>
      </Card>
    </div>
  );
}

export function FigmaMcpToolsSlide() {
  const groups = [
    {
      title: 'Figma → Kod',
      icon: Code,
      color: accentCyan,
      tools: [
        ['figma-implement-design', 'generowanie kodu z zaznaczonego elementu Figma'],
        ['figma-code-connect', 'mapowanie komponentów Figma na komponenty w kodzie'],
        ['get_screenshot', 'zrzut ekranu do wizualnej weryfikacji'],
        ['get_metadata', 'XML z właściwościami warstw przy dużych designach'],
      ],
    },
    {
      title: 'Kod / web → Figma',
      icon: Figma,
      color: accentPink,
      tools: [
        ['figma-generate-design', 'konwersja aplikacji webowej do warstw designu'],
        ['figma-generate-library', 'budowanie design systemu z istniejącego kodu'],
        ['figma-use', 'bezpośrednia edycja ramek, komponentów, zmiennych i stylów'],
      ],
    },
    {
      title: 'FigJam',
      icon: GitBranch,
      color: accentOrange,
      tools: [
        ['figma-generate-diagram', 'diagramy z opisu naturalnego'],
        ['figma-use-figjam', 'odczyt metadanych i zrzuty ekranu węzłów FigJam'],
      ],
    },
    {
      title: 'Pomocnicze',
      icon: Plug,
      color: accentYellow,
      tools: [
        ['figma-create-design-system-rules', 'reguły kodowania zgodnego z design systemem'],
        ['search_design_system', 'wyszukiwanie bibliotek designu i reużycie komponentów'],
      ],
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-6 space-y-8">
      <SlideHeader
        badge="PRZEGLĄD NARZĘDZI"
        title="Co oferuje Figma MCP?"
        subtitle="Narzędzia są pogrupowane według kierunku przepływu: design do kodu, kod do designu, FigJam oraz pomocnicze reguły."
        color={accentPink}
      />

      <div className="grid md:grid-cols-2 gap-6">
        {groups.map((group, idx) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + idx * 0.08 }}
            >
              <Card className="bg-[#EDE9E6] border-black/15 shadow-sm p-6 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <IconBadge icon={Icon} color={group.color} />
                  <h3 className="text-2xl text-black" style={{ fontWeight: 800 }}>
                    {group.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {group.tools.map(([name, description]) => (
                    <div key={name} className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                      <div className="font-mono text-sm text-black mb-1" style={{ fontWeight: 800 }}>
                        {name}
                      </div>
                      <p className="text-sm text-gray-700">{description}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export function FoundationsPainSlide() {
  const foundations = [
    ['Kolory', 'primary, secondary, semantic: error, success, warning, info', Palette, accentPink],
    ['Typografia', 'fonty, rozmiary, wagi, line-height, letter-spacing', Type, accentCyan],
    ['Spacing', 'skala odstępów: 4, 8, 12, 16, 24, 32, 48...', Ruler, accentYellow],
    ['Border radius', 'sm, md, lg, full', Box, accentBlue],
    ['Ikony', 'biblioteka ikon, rozmiary, styl outline albo filled', Blocks, accentOrange],
    ['Siatka i breakpointy', 'mobile, tablet, desktop, kolumny, guttery', Layout, accentCyan],
    ['Cienie', 'poziomy wyniesienia: sm, md, lg', Layers, accentPink],
    ['Animacje', 'czas trwania, easing, rodzaje przejść', RefreshCw, accentYellow],
  ] as const;

  return (
    <div className="w-full max-w-5xl mx-auto py-6 space-y-8">
      <SlideHeader
        badge="PAIN: FOUNDATIONS"
        title="AI zmienia kolor przycisku. Ale tylko w jednym miejscu."
        subtitle="Bez foundations każdy agent generuje wartości od nowa i robi to inaczej za każdym razem."
        color={accentYellow}
      />

      <Card className="bg-[#EA148C]/10 border-[#EA148C]/30 p-6">
        <div className="flex gap-4">
          <XCircle className="w-7 h-7 flex-shrink-0" style={{ color: accentPink }} />
          <p className="text-lg text-gray-800">
            Chcesz zmienić primary color w całej aplikacji. Agent zmienia go w trzech miejscach na <strong style={{ fontWeight: 800 }}>#2563EB</strong>, w dwóch na <strong style={{ fontWeight: 800 }}>blue-600</strong>, a w jednym zostawia stary. Nie ma jednego źródła prawdy, więc nie ma spójności.
          </p>
        </div>
      </Card>

      <div>
        <h3 className="text-2xl text-black mb-5" style={{ fontWeight: 800 }}>
          Foundations = jedno źródło prawdy dla całej aplikacji
        </h3>
        <div className="grid md:grid-cols-4 gap-4">
          {foundations.map(([title, text, Icon, color], idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.05 }}
            >
              <Card className="bg-[#EDE9E6] border-black/15 shadow-sm p-4 h-full">
                <Icon className="w-6 h-6 mb-3" style={{ color }} />
                <h4 className="text-black mb-2" style={{ fontWeight: 800 }}>
                  {title}
                </h4>
                <p className="text-sm text-gray-700">{text}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function AtomicDesignPainSlide() {
  const levels = [
    ['Atomy', 'Button, Input, Label, Icon, Badge, Avatar, Checkbox, Toggle', accentYellow],
    ['Molekuły', 'FormField, SearchBar, MenuItem', accentCyan],
    ['Organizmy', 'Navigation, LoginForm, ProductCard, DataTable, Modal', accentPink],
    ['Szablony', 'układ strony: header, sidebar, content, footer', accentBlue],
    ['Strony', 'konkretne widoki: Dashboard, Settings, Checkout', accentOrange],
  ] as const;

  return (
    <div className="w-full max-w-5xl mx-auto py-6 space-y-8">
      <SlideHeader
        badge="PAIN: ATOMIC DESIGN"
        title="Agent buduje ten sam przycisk po raz piąty. Trochę inaczej."
        subtitle="Bez komponentyzacji AI tworzy od nowa to, co już istnieje, i za każdym razem z drobną różnicą."
        color={accentCyan}
      />

      <Card className="bg-[#EA148C]/10 border-[#EA148C]/30 p-6">
        <div className="flex gap-4">
          <AlertTriangle className="w-7 h-7 flex-shrink-0" style={{ color: accentPink }} />
          <p className="text-lg text-gray-800">
            Prosisz o nowy formularz. Agent tworzy nowy input, nowy label i nowy komunikat błędu. Nie wie, że masz już <strong style={{ fontWeight: 800 }}>FormField</strong> jako molekułę. Wynik: cztery wersje tego samego elementu w jednej aplikacji.
          </p>
        </div>
      </Card>

      <div className="space-y-4">
        <h3 className="text-2xl text-black" style={{ fontWeight: 800 }}>
          Atomic Design = hierarchia komponentów
        </h3>
        {levels.map(([level, examples, color], idx) => (
          <motion.div
            key={level}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + idx * 0.08 }}
          >
            <Card className="bg-[#EDE9E6] border-black/15 shadow-sm p-4">
              <div className="grid md:grid-cols-[160px_1fr] gap-4 items-center">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${color}25` }}>
                    <span className="text-black" style={{ fontWeight: 800 }}>{idx + 1}</span>
                  </div>
                  <h4 className="text-xl text-black" style={{ fontWeight: 800 }}>
                    {level}
                  </h4>
                </div>
                <p className="text-gray-700">{examples}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <HighlightCard>
        <p className="text-lg text-black" style={{ fontWeight: 400 }}>
          Jeśli atomy i molekuły są dobrze zdefiniowane, LLM buduje większe elementy przez łączenie gotowych klocków. Nie zgaduje, jak wygląda przycisk. Po prostu go reużywa.
        </p>
      </HighlightCard>
    </div>
  );
}
