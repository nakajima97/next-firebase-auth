'use client';

import { useAuth } from '@/features/auth/hooks/useAuth';
import { LoginContainer } from '@/features/auth/containers/LoginContainer';

export default function Home() {
  const { user, signOut, loading } = useAuth();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      {user ? (
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            {user.photoURL && (
              <img src={user.photoURL} alt={user.name || ''} className="w-10 h-10 rounded-full" />
            )}
            <div>
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>
          </div>
          <button
            onClick={signOut}
            disabled={loading}
            className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700 disabled:bg-red-300"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <LoginContainer />
      )}
    </main>
  );
}
