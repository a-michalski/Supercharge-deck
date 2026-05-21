import { motion } from 'motion/react';

const LAYERS = [
  {
    label: 'Interfejs użytkownika',
    annotation: '< Przestrzeń robocza, widgety, interakcje',
  },
  {
    label: 'Uprząż (Harness)',
    annotation: '< „Prompt systemowy" – instrukcje\n   zachowania i wbudowane umiejętności',
  },
  {
    label: 'Model AI',
    bold: true,
    annotation: '< np. LLM typu Gemini 3.1 Pro, Claude Opus 4.7',
  },
  {
    label: 'Kontekst (wiedza)\nod użytkownika',
    annotation: '< Załączniki, assety, .MD, RAG',
  },
  {
    label: 'Integracje z zewnętrznymi usługami',
    annotation: '< API/MCP/CLI etc.',
  },
];

// bg1 theme color = #EDE9E6 (warm cream), tx1 = #000000
const BOX_BG = '#EDE9E6';
const BOX_GAP = 6; // px between boxes

export default function AIArchitectureSlide() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full"
      style={{ maxWidth: '960px', margin: '0 auto', background: '#ffffff' }}
    >
      {/* Title */}
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{
          fontSize: 'clamp(18px, 2.6vw, 34px)',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 700,
          color: '#000000',
          lineHeight: 1.2,
          margin: 0,
        }}>
          Jak działają narzędzia oparte o AI{' '}
          <span style={{ color: '#9B9189', fontWeight: 600 }}>(w uproszczeniu)</span>
        </h2>
      </div>

      {/* Two-column layout */}
      <div style={{ display: 'flex', gap: '5%', alignItems: 'flex-start' }}>

        {/* LEFT — frame with boxes + ink splatter below */}
        <div style={{ width: '50%', position: 'relative' }}>

          {/* Black-bordered frame */}
          <div style={{
            border: '2.5px solid #000000',
            background: '#ffffff',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            gap: `${BOX_GAP}px`,
            position: 'relative',
            zIndex: 1,
          }}>
            {LAYERS.map((layer, i) => (
              <motion.div
                key={layer.label}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + i * 0.07 }}
                style={{
                  background: BOX_BG,
                  padding: '18px 16px',
                  textAlign: 'center',
                  fontFamily: 'Lora, Georgia, "Times New Roman", serif',
                  fontSize: 'clamp(11px, 1.4vw, 18px)',
                  fontWeight: layer.bold ? 700 : 400,
                  color: '#000000',
                  lineHeight: 1.35,
                  whiteSpace: 'pre-line',
                }}
              >
                {layer.label}
              </motion.div>
            ))}
          </div>

          {/* Ink splatter — uses bottom portion of original frame image */}
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

        {/* RIGHT — annotations aligned per box */}
        <div style={{ width: '45%', display: 'flex', flexDirection: 'column', gap: `${BOX_GAP}px`, paddingTop: '10px' }}>
          {LAYERS.map((layer, i) => (
            <motion.div
              key={`ann-${i}`}
              initial={{ opacity: 0, x: 6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.15 + i * 0.07 }}
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(9px, 1.1vw, 14px)',
                color: '#000000',
                lineHeight: 1.45,
                whiteSpace: 'pre-line',
                // Match the height of corresponding box so annotations center with it
                padding: '18px 0',
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
