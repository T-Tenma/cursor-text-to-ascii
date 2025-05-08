'use client';

import { useState } from 'react';
import { ClipboardDocumentIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';

interface CopyButtonProps {
  text: string;
}

export function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
      title="Copy to clipboard"
    >
      {copied ? (
        <ClipboardDocumentCheckIcon className="w-5 h-5 text-green-500" />
      ) : (
        <ClipboardDocumentIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
      )}
    </button>
  );
} 