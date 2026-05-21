import { motion } from 'motion/react';

const steps = [
  'Zawężenie opportunity',
  'Selekcja i grupowanie pytań',
  'Generowanie kierunków rozwiązań',
  'Ocena i wybór kierunków',
  'Projektowanie alternatywnych konceptów',
  'Wybór konceptu do prototypowania',
];

export default function AiDesignProcessSlide() {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h2 style={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 800,
          fontSize: 'clamp(18px, 2.6vw, 34px)',
          color: '#000000',
          lineHeight: 1.12,
        }}>
          AI w procesie projektowym
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Left: dwie wersje insightu */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="p-5">
              <p style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(9px, 0.85vw, 11px)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase' as const,
                color: '#9B9189',
                marginBottom: '10px',
              }}>
                Oryginalna wersja z OST
              </p>
              <p style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(11px, 1.2vw, 15px)',
                color: '#333233',
                lineHeight: 1.6,
              }}>
                Użytkownik chce sygnałów autentyczności miejsc: lokalnych klientów, naturalnej atmosfery i wiedzy właściciela, aby uniknąć pułapek turystycznych.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card
              className="border-0 shadow-none p-5"
              style={{ backgroundColor: '#EDE9E6', borderLeft: '4px solid #FEBE42' }}
            >
              <p style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(9px, 0.85vw, 11px)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase' as const,
                color: '#9B9189',
                marginBottom: '10px',
              }}>
                Wersja robocza do dalszej pracy
              </p>
              <p style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(11px, 1.2vw, 15px)',
                color: '#333233',
                lineHeight: 1.6,
              }}>
                Użytkownik potrzebuje konkretnych sygnałów, które pomagają mu ocenić, czy miejsce jest autentyczne i lokalne, a nie jest pułapką turystyczną.
              </p>
            </Card>
          </motion.div>
        </div>

        {/* Right: proces pracy z AI */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25 }}
        >
          <div className="p-5 h-full">
            <p style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(9px, 0.85vw, 11px)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase' as const,
              color: '#9B9189',
              marginBottom: '16px',
            }}>
              Proces pracy z AI
            </p>
            <div className="space-y-3">
              {steps.map((step, idx) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + idx * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <span style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 800,
                    fontSize: 'clamp(10px, 1vw, 13px)',
                    color: '#FEBE42',
                    flexShrink: 0,
                    minWidth: '18px',
                    lineHeight: 1.55,
                  }}>
                    {idx + 1}.
                  </span>
                  <p style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: 'clamp(11px, 1.2vw, 15px)',
                    color: '#333233',
                    lineHeight: 1.55,
                  }}>
                    {step}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
