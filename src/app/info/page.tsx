'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { UserProfile } from '@/features/auth/presentational/UserProfile';
import { Layout } from '@/components/Layout';

export default function InfoPage() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/');
    }
  }, [user, loading, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-4">User Information</h1>
        <UserProfile user={user} onSignOut={signOut} disabled={loading} />
      </div>
    </Layout>
  );
}
