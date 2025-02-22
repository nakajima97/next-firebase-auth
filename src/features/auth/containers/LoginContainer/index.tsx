import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { LoginButton } from '../../presentational/LoginButton';

export const LoginContainer = () => {
  const { user, signInWithGoogle, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push('/dashboard');
    }
  }, [user, loading, router]);

  if (loading || user) {
    return null;
  }

  return <LoginButton onClick={signInWithGoogle} disabled={loading} />;
};
