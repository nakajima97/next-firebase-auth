'use client';

import { LoginContainer } from '@/features/auth/containers/LoginContainer';
import { Layout } from '@/components/Layout';
import { useAuth } from '@/features/auth/hooks/useAuth';

export default function Home() {
  const { loading } = useAuth();
  if (loading) {
    return null;
  }

  return (
    <Layout>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8">Welcome</h1>
        <LoginContainer />
      </div>
    </Layout>
  );
}
