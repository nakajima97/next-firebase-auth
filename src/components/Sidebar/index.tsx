'use client';

import { useAuth } from '@/features/auth/hooks/useAuth';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Sidebar = () => {
  const { user, signOut, loading } = useAuth();
  const pathname = usePathname();

  if (!user) {
    return null;
  }

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-gray-800 text-white flex flex-col">
      <div className="flex-1 p-6">
        <nav className="h-full flex flex-col">
          <div className="pb-6 mb-6 border-b border-gray-700">
            <p className="text-sm text-gray-400">Logged in as:</p>
            <p className="text-sm font-medium truncate">{user.email}</p>
          </div>

          <ul className="space-y-2">
            <li>
              <Link
                href="/dashboard"
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  pathname === '/dashboard'
                    ? 'bg-gray-700 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/info"
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  pathname === '/info'
                    ? 'bg-gray-700 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                User Info
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="p-6 border-t border-gray-700">
        <button
          type="button"
          onClick={signOut}
          disabled={loading}
          className="w-full px-4 py-2 text-sm text-white bg-red-600 rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};
