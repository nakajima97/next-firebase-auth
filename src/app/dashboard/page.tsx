'use client';

import { Layout } from '@/components/Layout';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardPage() {
  const { user, loading } = useAuth();
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
        <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
        <p className="text-xl text-gray-600">Welcome, {user.email}!</p>
      </div>
    </Layout>
  );
}
