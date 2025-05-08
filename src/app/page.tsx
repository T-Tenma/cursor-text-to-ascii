'use client';

import { useState } from 'react';
import { Figlet } from '@/components/Figlet';
import { ControlPanel } from '@/components/ControlPanel';

export default function Home() {
  const [text, setText] = useState('');
  const [font, setFont] = useState('Standard');
  const [fontSize, setFontSize] = useState('medium');
  const [spacing, setSpacing] = useState('normal');

  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          文字转 ASCII 图
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <ControlPanel
              text={text}
              setText={setText}
              font={font}
              setFont={setFont}
              fontSize={fontSize}
              setFontSize={setFontSize}
              spacing={spacing}
              setSpacing={setSpacing}
            />
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <Figlet
              text={text}
              font={font}
              fontSize={fontSize}
              spacing={spacing}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
