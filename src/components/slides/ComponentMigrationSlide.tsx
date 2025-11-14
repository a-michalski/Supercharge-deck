import ContentToDocumentSlide from './shared/ContentToDocumentSlide';
const buttonsImage = '/assets/331c168a9f19ba6f8ced1256a4deb2fe2a72ed09.png';
import { Lightbulb } from 'lucide-react';

export default function ComponentMigrationSlide() {
  // Left content - Figma components menu
  const leftContent = (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-cyan-500/20">
          <svg
            className="w-6 h-6 text-cyan-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.981zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"/>
          </svg>
        </div>
        <div>
          <h3 className="text-white" style={{ fontWeight: 700 }}>Figma Components</h3>
          <p className="text-white/60 text-sm">Design system components</p>
        </div>
      </div>

      {/* Figma components menu preview */}
      <div className="bg-white rounded-lg p-4 border border-white/10">
        <img 
          src={buttonsImage} 
          alt="Figma components menu showing Buttons, Cards, Dialog, Inputs, Menu, Navigation, Notification" 
          className="w-full h-auto rounded"
        />
      </div>

      <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
        <div className="flex items-center gap-2">
          <Lightbulb className="w-4 h-4 text-cyan-500" />
          <p className="text-white/90 text-sm">
            <span style={{ fontWeight: 700 }}>Strategy:</span> Systematyczna analiza 
            istniejących komponentów przed dodaniem nowych. Maksymalizuj reużywalność!
          </p>
        </div>
      </div>
    </div>
  );

  // Document content - Component Analysis Prompt
  const documentContent = {
    preview: `Zaimplementuj wszystkie komponenty z designu Figma na podstawie linku do strony i zastąp istniejące użycia w projekcie.

WYMAGANIA TECHNICZNE:
- Automatycznie wykryj wszystkie komponenty na stronie
- Używaj istniejących wzorców stylowania z projektu
- Implementuj wszystkie warianty z designu
- Zachowaj responsywność`,
    full: `Zaimplementuj wszystkie komponenty z designu Figma na podstawie linku do strony i zastąp istniejące użycia w projekcie.

WYMAGANIA TECHNICZNE:
- Automatycznie wykryj wszystkie komponenty na stronie
- Używaj istniejących wzorców stylowania z projektu
- Implementuj wszystkie warianty z designu
- Zachowaj responsywność

ZASADY:
- Exact values z Figma
- Jeden komponent = jedna edycja pliku
- Complete config przed komponentami
- No placeholder content
- Final implementation od pierwszego razu

FIGMA_URL: [Twój link do buttonów]`,
  };

  return (
    <ContentToDocumentSlide
      sectionBadge="CZĘŚĆ 5: Vibe Coding"
      badgeColor="#F69E2C"
      title="Component Migration"
      subtitle="Zamień na komponenty reużywalne"
      leftContent={leftContent}
      documentTitle="ComponentAnalysisPrompt.md"
      documentContent={documentContent}
      hints={{
        step1: 'Naciśnij ↓ aby zobaczyć prompt analizy komponentów',
        step2: 'Naciśnij ↓ aby rozwinąć pełny prompt',
        step3: 'Naciśnij ↓ aby wrócić do początku',
      }}
    />
  );
}