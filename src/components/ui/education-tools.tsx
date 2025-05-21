'use client';

import * as React from 'react';
import { PencilRuler, Bug } from 'lucide-react';

export function EducationTools() {
  // Placeholder for live annotation/debugging features
  const [annotationMode, setAnnotationMode] = React.useState(false);

  return (
    <div className="flex flex-col items-center px-3 py-2 bg-surface-light dark:bg-surface-dark rounded-lg shadow transition-colors">
      <div className="flex items-center gap-1">
        <PencilRuler className="w-5 h-5 text-secondary-dark dark:text-secondary-light" />
        <span className="ml-1 text-sm font-medium">Live Annotation</span>
      </div>
      <button
        className={`mt-2 px-2 py-1 rounded-full text-xs font-bold transition bg-${annotationMode ? 'secondary-dark' : 'secondary-light'} text-white`}
        onClick={() => setAnnotationMode((m) => !m)}
      >
        {annotationMode ? 'Stop' : 'Start'} Annotate
      </button>
      <div className="flex items-center gap-1 mt-2">
        <Bug className="w-4 h-4 text-error" />
        <span className="text-xs">Debug Session</span>
      </div>
    </div>
  );
}
