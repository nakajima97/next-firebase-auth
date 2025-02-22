import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../hooks/useAuth';
import { LoginButton } from '../../presentational/LoginButton';

export const LoginContainer = () => {
  const { user, signInWithGoogle, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);

  return <LoginButton onClick={signInWithGoogle} disabled={loading} />;
};
