'use client';

import { useEffect, useState } from 'react';
import figlet from 'figlet';
import { CopyButton } from './CopyButton';

interface FigletProps {
  text: string;
  font: string;
  fontSize: string;
  spacing: string;
}

async function loadFigletFont(font: string) {
  return new Promise<void>((resolve, reject) => {
    figlet.loadFont(`${font}`, function (err) {
      if (err) reject(err);
      else resolve();
    });
  });
}

export function Figlet({ text, font, fontSize, spacing }: FigletProps) {
  const [asciiArt, setAsciiArt] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    if (!text) {
      setAsciiArt('');
      setError(null);
      return;
    }
    setLoading(true);
    setError(null);
    loadFigletFont(font)
      .catch(() => {}) // 忽略字体加载错误，可能是 Standard
      .finally(() => {
        figlet.text(
          text,
          {
            font: font,
            horizontalLayout: spacing === 'compact' ? 'fitted' : 'default',
            verticalLayout: 'default',
          },
          (err, result) => {
            if (cancelled) return;
            setLoading(false);
            if (err) {
              setError('生成 ASCII 图失败');
              setAsciiArt('');
            } else {
              setAsciiArt(result || '');
            }
          }
        );
      });
    return () => {
      cancelled = true;
    };
  }, [text, font, spacing]);

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'small':
        return 'text-xs';
      case 'medium':
        return 'text-base';
      case 'large':
        return 'text-xl';
      default:
        return 'text-base';
    }
  };

  return (
    <div className="relative min-h-[120px]">
      {loading ? (
        <div className="text-gray-400">生成中...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <pre className={`font-mono whitespace-pre ${getFontSizeClass()} text-gray-800 dark:text-gray-200`}>
          {asciiArt || '请输入文字...'}
        </pre>
      )}
      {asciiArt && !loading && !error && (
        <div className="absolute top-2 right-2">
          <CopyButton text={asciiArt} />
        </div>
      )}
    </div>
  );
} 