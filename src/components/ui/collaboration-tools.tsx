'use client';

import * as React from 'react';
import { Users, Activity } from 'lucide-react';

export function CollaborationTools() {
  // Placeholder for real-time presence, user list, edit indicators
  const [users, setUsers] = React.useState<{ id: string; name: string }[]>([
    { id: '1', name: 'Alice' }, { id: '2', name: 'Bob' }
  ]);
  const [active, setActive] = React.useState(true);

  // In real app, would use Supabase Realtime or websockets
  // For demo, show static users
  return (
    <div className="flex flex-col items-center px-3 py-2 bg-surface-light dark:bg-surface-dark rounded-lg shadow transition-colors">
      <div className="flex items-center gap-1">
        <Users className="w-5 h-5 text-primary-dark dark:text-primary-light" />
        <span className="ml-1 text-sm font-medium">{users.length} Online</span>
        {active && <Activity className="w-3 h-3 ml-2 text-success animate-pulse" />}
      </div>
      <ul className="mt-1 flex flex-row gap-2">
        {users.map(u => (
          <li key={u.id} className="text-xs px-2 py-1 bg-primary-light dark:bg-primary-dark text-white rounded-full font-semibold">{u.name}</li>
        ))}
      </ul>
    </div>
  );
}
