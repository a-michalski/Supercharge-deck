import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Copy, Check } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import BottomHint from './BottomHint';

interface ContentToDocumentSlideProps {
  // Header
  sectionBadge: string;
  badgeColor: string;
  title: string;
  subtitle: string;

  // Left content (Step 1 & 2)
  leftContent: React.ReactNode;

  // Document panel
  documentTitle: string;
  documentContent: {
    preview: string;
    full: string;
  };

  // Optional customization
  hints?: {
    step1?: string;
    step2?: string;
    step3?: string;
  };
}

export default function ContentToDocumentSlide({
  sectionBadge,
  badgeColor,
  title,
  subtitle,
  leftContent,
  documentTitle,
  documentContent,
  hints,
}: ContentToDocumentSlideProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [copied, setCopied] = useState(false);

  // Default hints
  const defaultHints = {
    step1: 'Naciśnij ↓ aby zobaczyć dokument',
    step2: 'Naciśnij ↓ aby rozwinąć',
    step3: 'Naciśnij ↓ aby wrócić do początku',
  };

  const finalHints = { ...defaultHints, ...hints };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        if (step === 1) {
          setStep(2);
        } else if (step === 2) {
          setStep(3);
        } else if (step === 3) {
          setStep(1); // Reset
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [step]);

  // Copy to clipboard
  const handleCopy = async () => {
    try {
      // Use fallback method (works in iframes and when Clipboard API is blocked)
      const textArea = document.createElement('textarea');
      textArea.value = documentContent.full;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      
      if (successful) {
        setCopied(true);
        toast.success('Prompt skopiowany do schowka!');
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      } else {
        toast.error('Nie udało się skopiować');
      }
    } catch (err) {
      console.error('Copy error:', err);
      toast.error('Nie udało się skopiować');
    }
  };

  // Left Content Panel Component
  const LeftContentPanel = () => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#1A1A3D] border border-white/10 rounded-lg p-6 overflow-hidden"
    >
      {leftContent}
    </motion.div>
  );

  // Document Panel Component
  const DocumentPanel = ({ content, scrollable = false }: { content: string; scrollable?: boolean }) => {
    const lines = content.split('\n');

    return (
      <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-lg">
        {/* Header with dots and copy button */}
        <div className="bg-[#2D2D30] px-4 py-3 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-3 h-3 rounded-full bg-[#28CA42]"></div>
            <span className="ml-2 text-white/70 text-sm">{documentTitle}</span>
          </div>

          {/* Copy button - only visible in step 3 */}
          {step === 3 && (
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded text-white/90 text-xs transition-colors"
              title="Kopiuj do schowka"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Skopiowano!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Kopiuj</span>
                </>
              )}
            </button>
          )}
        </div>

        {/* Document content */}
        <div
          className="bg-[#1E1E1E] p-6 font-mono text-sm overflow-hidden"
          style={{
            maxHeight: scrollable ? '500px' : undefined,
            height: scrollable ? 'auto' : '500px',
            overflowY: scrollable ? 'auto' : 'hidden',
          }}
        >
          <div className="flex gap-4">
            {/* Line numbers */}
            <div className="text-white/30 text-right select-none flex-shrink-0 pr-4">
              {lines.map((_, idx) => (
                <div key={idx}>{idx + 1}</div>
              ))}
            </div>

            {/* Content with syntax highlighting */}
            <div className="flex-1">
              {lines.map((line, idx) => {
                let color = '#E8E8E8'; // Default white/90

                // Mock syntax highlighting
                if (line.startsWith('##')) {
                  color = '#4EC9B0'; // Cyan for headers
                } else if (line.startsWith('✅')) {
                  color = '#28CA42'; // Green for checkmarks
                } else if (line.startsWith('-') || /^\d+\./.test(line)) {
                  color = '#D4D4D4'; // Light gray for lists
                } else if (line.includes('IF ') || line.includes('BEFORE')) {
                  color = '#C586C0'; // Purple for keywords
                }

                return (
                  <div
                    key={idx}
                    style={{
                      color,
                      whiteSpace: 'pre-wrap',
                      minHeight: '1.5em',
                    }}
                  >
                    {line || '\u00A0'}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full min-h-screen bg-white py-12 px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl text-black mb-2" style={{ fontWeight: 800 }}>
          {title}
        </h2>
        <p className="text-lg text-gray-600" style={{ fontWeight: 600 }}>
          {subtitle}
        </p>
      </motion.div>

      {/* Step 1: Left content only */}
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-[#1A1A3D] border border-white/10 rounded-lg p-6 overflow-hidden">
              {leftContent}
            </div>
            <BottomHint text={finalHints.step1} />
          </motion.div>
        )}

        {/* Step 2: Left content + Document side-by-side */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-7xl mx-auto"
          >
            <div className="grid grid-cols-2 gap-6">
              {/* Left content */}
              <LeftContentPanel />

              {/* Document preview (slide in from right) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <DocumentPanel content={documentContent.preview} scrollable={false} />
              </motion.div>
            </div>
            <BottomHint text={finalHints.step2} />
          </motion.div>
        )}

        {/* Step 3: Document only (full width) */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <DocumentPanel content={documentContent.full} scrollable={true} />
            <BottomHint text={finalHints.step3} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sub-slide navigation indicator */}
      <div className="fixed bottom-8 right-8 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg p-3 shadow-lg">
        <div className="text-sm text-gray-600" style={{ fontWeight: 600 }}>
          {step}/3
        </div>
      </div>
    </div>
  );
}
