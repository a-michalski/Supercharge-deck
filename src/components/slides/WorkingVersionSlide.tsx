import { ExternalLink, FolderOpen, FileCode, Layout } from 'lucide-react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

export default function WorkingVersionSlide() {
  const resources = [
    {
      title: 'Medium Article: Figma to Code with AI & MCP',
      url: 'https://medium.com/@MichalskiAdam/how-to-convert-figma-designs-to-react-code-using-ai-and-mcp-f92185c70c28',
      icon: FileCode,
      color: '#31BFC7'
    },
    {
      title: 'Figma MCP Server Guide',
      url: 'https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server',
      icon: Layout,
      color: '#46BAD8'
    },
    {
      title: 'Figma: Simple Design System (Practice)',
      url: 'https://www.figma.com/community/file/1380235722331273046/simple-design-system',
      icon: FolderOpen,
      color: '#FF438B'
    }
  ];

  const projectStructure = [
    { name: 'src', level: 0, expanded: true },
    { name: 'components', level: 1, expanded: true },
    { name: 'buttons', level: 2, expanded: false },
    { name: 'cards', level: 2, expanded: false },
    { name: 'layouts', level: 2, expanded: false },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <Badge className="bg-[#FEBE42] text-black border-[#FEBE42]">
          DEMO
        </Badge>
        <h2 className="text-5xl text-black" style={{ fontWeight: 800 }}>
          Działająca wersja
        </h2>
        <p className="text-xl text-gray-600" style={{ fontWeight: 600 }}>
          Przykład działającego projektu + zasoby do nauki
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Project Structure */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 p-6 h-full">
            <div className="mb-4">
              <h3 className="text-2xl text-[#F69E2C] mb-2" style={{ fontWeight: 800 }}>
                Struktura projektu
              </h3>
              <p className="text-gray-400 text-sm">
                Organizacja komponentów w projekcie
              </p>
            </div>

            <div className="bg-black/40 rounded-lg p-4 font-mono text-sm">
              {projectStructure.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="flex items-center gap-2 py-1"
                  style={{ paddingLeft: `${item.level * 20}px` }}
                >
                  <span className="text-gray-500">
                    {item.expanded ? '▼' : '▶'}
                  </span>
                  <FolderOpen className="w-4 h-4 text-[#FEBE42]" />
                  <span className="text-gray-300">{item.name}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 p-3 bg-[#FEBE42]/10 border border-[#FEBE42]/30 rounded-lg">
              <p className="text-gray-300 text-sm">
                <span style={{ fontWeight: 700 }}>Tip:</span> Konsekwentna struktura folderów = łatwiejsza nawigacja
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Reference Links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="bg-gradient-to-br from-[#FEBE42]/10 to-[#F69E2C]/10 border-[#FEBE42] p-6 h-full">
            <div className="mb-4">
              <h3 className="text-2xl text-black mb-2" style={{ fontWeight: 800 }}>
                Przydatne linki
              </h3>
              <p className="text-gray-600 text-sm">
                Przydatne zasoby do dalszej nauki
              </p>
            </div>

            <div className="space-y-3">
              {resources.map((resource, idx) => (
                <motion.a
                  key={idx}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                >
                  <Card 
                    className="p-4 hover:shadow-lg transition-all cursor-pointer group border-2"
                    style={{ borderColor: `${resource.color}40` }}
                  >
                    <div className="flex items-start gap-3">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${resource.color}20` }}
                      >
                        <resource.icon className="w-5 h-5" style={{ color: resource.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-black group-hover:underline" style={{ fontWeight: 600 }}>
                            {resource.title}
                          </p>
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors flex-shrink-0" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.a>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Demo Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-2xl text-black mb-1" style={{ fontWeight: 800 }}>
                Demo w akcji
              </h3>
              <p className="text-gray-600 text-sm">
                Zobacz jak AI przekształca design w działający kod
              </p>
            </div>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 border-2 border-gray-200">
            <div className="text-center space-y-6">
              <div>
                <h4 className="text-4xl text-black mb-2" style={{ fontWeight: 800 }}>
                  Tytuł
                </h4>
                <p className="text-gray-500">Podtytuł</p>
              </div>
              
              <div className="flex gap-3 justify-center">
                <Button variant="outline" className="border-gray-300">
                  Bazowy
                </Button>
                <Button className="bg-black text-white hover:bg-gray-800">
                  Główny
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mt-8">
                <div className="aspect-video bg-gray-100 rounded-lg"></div>
                <div className="aspect-video bg-gray-100 rounded-lg"></div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Card className="bg-gradient-to-r from-[#31BFC7] to-[#46BAD8] border-none p-6 text-center">
          <p className="text-white text-xl" style={{ fontWeight: 700 }}>
            Przećwicz na Simple Design System z Figma Community
          </p>
        </Card>
      </motion.div>
    </div>
  );
}