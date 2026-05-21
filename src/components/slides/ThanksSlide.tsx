import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Linkedin, Globe, BookOpen, Github, Heart, ExternalLink } from 'lucide-react';

export default function ThanksSlide() {
  const links = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/amichalski1/',
      color: '#31BFC7'
    },
    {
      icon: Globe,
      label: 'Strona',
      url: 'https://adammichalski.com/',
      color: '#445469'
    },
    {
      icon: BookOpen,
      label: 'Blog',
      url: 'https://uxairforce.pl/',
      color: '#EA148C'
    },
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/a-michalski',
      color: '#000000'
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-6xl text-black" style={{ fontWeight: 800 }}>
            Dziękuję za uwagę!
          </h1>
          <p className="text-2xl text-gray-600" style={{ fontWeight: 600 }}>
            Pozostańmy w kontakcie
          </p>
        </motion.div>

        {/* Contact Links Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {links.map((link, idx) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card 
                  className="p-6 h-full hover:shadow-2xl transition-all cursor-pointer group border-2"
                  style={{ borderColor: `${link.color}30` }}
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center transition-transform group-hover:rotate-12"
                      style={{ backgroundColor: `${link.color}15` }}
                    >
                      <Icon className="w-8 h-8" style={{ color: link.color }} />
                    </div>
                    <h3 className="text-lg text-black" style={{ fontWeight: 700 }}>
                      {link.label}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Card>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Heart Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 text-gray-500">
            <span>Made with</span>
            <Heart className="w-5 h-5 text-[#EA148C] fill-[#EA148C]" />
            <span>by Adam Michalski</span>
          </div>
        </motion.div>
    </div>
  );
}
