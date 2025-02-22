import { useAuth } from '../../hooks/useAuth';
import { LoginButton } from '../../presentational/LoginButton';

export const LoginContainer: React.FC = () => {
  const { signInWithGoogle, loading, error } = useAuth();

  return (
    <div className="flex flex-col items-center gap-4">
      <LoginButton onClick={signInWithGoogle} loading={loading} />
      {error && (
        <p className="text-red-500">{error.message}</p>
      )}
    </div>
  );
};
