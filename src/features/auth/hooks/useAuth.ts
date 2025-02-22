import { auth } from '@/lib/firebase';
import {
  GoogleAuthProvider,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  signInWithPopup,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { AuthState, User } from '../types';

/**
 * カスタムフックで Firebase Authentication の状態を管理します。
 *
 * @returns {Object} 認証状態と認証関連の関数を含むオブジェクト
 * - user: 現在のユーザー情報（ログインしていない場合は null）
 * - loading: 認証処理の進行状態
 * - error: エラー情報（エラーが発生していない場合は null）
 * - signInWithGoogle: Google認証でサインインする関数
 * - signOut: サインアウトする関数
 */
export const useAuth = () => {
  const router = useRouter();
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          setAuthState({
            user: {
              id: user.uid,
              email: user.email,
              name: user.displayName,
              photoURL: user.photoURL,
            },
            loading: false,
            error: null,
          });
        } else {
          setAuthState({
            user: null,
            loading: false,
            error: null,
          });
        }
      },
      (error) => {
        setAuthState({
          user: null,
          loading: false,
          error: error instanceof Error ? error : new Error(error),
        });
      }
    );

    return () => unsubscribe();
  }, []);

  /**
   * Google認証を使用してユーザーをサインインさせます。
   * ポップアップウィンドウを表示してGoogle認証を実行します。
   *
   * @throws {Error} 認証に失敗した場合にエラーをスローします
   */
  const signInWithGoogle = async () => {
    try {
      setAuthState((prev) => ({ ...prev, loading: true, error: null }));
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push('/dashboard');
    } catch (error) {
      setAuthState((prev) => ({
        ...prev,
        error: error instanceof Error ? error : new Error('Failed to sign in'),
        loading: false,
      }));
    }
  };

  /**
   * 現在のユーザーをサインアウトさせます。
   *
   * @throws {Error} サインアウトに失敗した場合にエラーをスローします
   */
  const signOut = async () => {
    try {
      setAuthState((prev) => ({ ...prev, loading: true, error: null }));
      await firebaseSignOut(auth);
      router.push('/');
    } catch (error) {
      setAuthState((prev) => ({
        ...prev,
        error: error instanceof Error ? error : new Error('Failed to sign out'),
        loading: false,
      }));
    }
  };

  return {
    ...authState,
    signInWithGoogle,
    signOut,
  };
};
