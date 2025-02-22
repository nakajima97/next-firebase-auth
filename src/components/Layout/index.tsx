'use client';

import { useAuth } from '@/features/auth/hooks/useAuth';
import type { ReactNode } from 'react';
import { Sidebar } from '../Sidebar';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      <main className={`${user ? 'ml-64' : ''} min-h-screen bg-gray-100`}>
        {children}
      </main>
    </div>
  );
};
