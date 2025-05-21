'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import { Button } from './ui/button';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

type Theme = 'light' | 'dark' | 'system';

export function ThemeSwitcher({ userId }: { userId?: string }) {
  const [theme, setTheme] = useState<Theme>('system');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Prefer stored theme, else system
    let storedTheme = localStorage.getItem('theme') as Theme | null;
    if (storedTheme) {
      setTheme(storedTheme);
      applyTheme(storedTheme);
    } else if (userId) {
      // Try fetch from db
      supabase.from('user_settings').select('theme').eq('user_id', userId).single().then(({ data }) => {
        if (data?.theme) {
          setTheme(data.theme);
          localStorage.setItem('theme', data.theme);
          applyTheme(data.theme);
        }
      });
    }
  }, [userId]);

  // Apply theme to <html>
  function applyTheme(t: Theme) {
    if (typeof window === 'undefined') return;
    const html = document.documentElement;
    html.classList.remove('light', 'dark');
    if (t === 'system') {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        html.classList.add('dark');
      } else {
        html.classList.add('light');
      }
    } else {
      html.classList.add(t);
    }
  }

  function handleThemeChange(newTheme: Theme) {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
    if (userId) {
      // Persist to Supabase
      supabase.from('user_settings').upsert({ user_id: userId, theme: newTheme });
    }
  }

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-2 rounded-md bg-surface-light dark:bg-surface-dark px-2 py-1 shadow">
      <Button
        variant={theme === 'light' ? 'secondary' : 'ghost'}
        aria-label="Light theme"
        onClick={() => handleThemeChange('light')}
        className="rounded-full"
      >
        <Sun size={18} />
      </Button>
      <Button
        variant={theme === 'dark' ? 'secondary' : 'ghost'}
        aria-label="Dark theme"
        onClick={() => handleThemeChange('dark')}
        className="rounded-full"
      >
        <Moon size={18} />
      </Button>
      <Button
        variant={theme === 'system' ? 'secondary' : 'ghost'}
        aria-label="System theme"
        onClick={() => handleThemeChange('system')}
        className="rounded-full"
      >
        <Monitor size={18} />
      </Button>
      <span className="ml-2 text-xs font-medium text-gray-500 dark:text-gray-400">
        Theme
      </span>
    </div>
  );
}
