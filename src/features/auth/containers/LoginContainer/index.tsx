import { useAuth } from '../../hooks/useAuth';
import { LoginButton } from '../../presentational/LoginButton';
import { UserProfile } from '../../presentational/UserProfile';

export const LoginContainer = () => {
  const { user, signInWithGoogle, signOut, loading } = useAuth();

  if (user) {
    return (
      <UserProfile 
        user={user}
        onSignOut={signOut}
        disabled={loading}
      />
    );
  }

  return (
    <LoginButton 
      onClick={signInWithGoogle}
      disabled={loading}
    />
  );
};
