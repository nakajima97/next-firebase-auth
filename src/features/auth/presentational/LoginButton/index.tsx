interface LoginButtonProps {
  onClick: () => void;
  loading?: boolean;
}

export const LoginButton: React.FC<LoginButtonProps> = ({ onClick, loading = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="flex items-center justify-center gap-2 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 disabled:bg-blue-300"
    >
      {loading ? (
        <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin" />
      ) : (
        <>
          <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
          Sign in with Google
        </>
      )}
    </button>
  );
};
