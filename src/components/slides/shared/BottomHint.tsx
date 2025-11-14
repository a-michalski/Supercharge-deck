import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface BottomHintProps {
  text: string;
  delay?: number;
}

/**
 * Shared bottom hint component for slide navigation
 * Displays as an inline element at the end of slide content
 * Uses light styling to be subtle and non-intrusive
 */
export default function BottomHint({ text, delay = 0.5 }: BottomHintProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="mt-8 flex justify-center"
    >
      <div className="bg-gray-100 px-4 py-2 rounded-full flex items-center gap-2 border border-gray-200">
        <span className="text-gray-500 text-sm">{text}</span>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </div>
    </motion.div>
  );
}