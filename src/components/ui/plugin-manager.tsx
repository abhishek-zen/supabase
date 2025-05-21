'use client';

import * as React from 'react';
import { Puzzle, DownloadCloud } from 'lucide-react';

const availablePlugins = [
  { id: 'python', name: 'Python Support', installed: false },
  { id: 'lint', name: 'Code Linter', installed: true },
  { id: 'chat', name: 'Chat Assistant', installed: false }
];

export function PluginManager() {
  const [plugins, setPlugins] = React.useState(availablePlugins);

  function toggleInstall(id: string) {
    setPlugins(p =>
      p.map(pl =>
        pl.id === id ? { ...pl, installed: !pl.installed } : pl
      )
    );
  }

  return (
    <div className="flex flex-col items-center px-3 py-2 bg-surface-light dark:bg-surface-dark rounded-lg shadow transition-colors">
      <div className="flex items-center gap-1">
        <Puzzle className="w-5 h-5 text-accent-dark dark:text-accent-light" />
        <span className="ml-1 text-sm font-medium">Plugins</span>
      </div>
      <ul className="mt-1 flex flex-col gap-2">
        {plugins.map(pl => (
          <li key={pl.id} className="flex items-center gap-2 text-xs">
            <span className={`font-semibold ${pl.installed ? 'text-success' : 'text-gray-400 dark:text-gray-600'}`}>{pl.name}</span>
            <button
              onClick={() => toggleInstall(pl.id)}
              className={`ml-2 px-2 py-1 rounded-full font-bold transition ${pl.installed ? 'bg-error text-white' : 'bg-success text-white'}`}
            >
              {pl.installed ? 'Uninstall' : 'Install'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
