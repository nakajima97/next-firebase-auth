import { useState, useEffect } from 'react';
import { 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut as firebaseSignOut,
  onAuthStateChanged
} from 'firebase/auth';
import { auth } from '@/lib/firebase';
import type { User, AuthState } from '../types';

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
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    loading: true,
    error: null,
  });

  /**
   * Firebase の認証状態の変更を監視します。
   * ユーザーのログイン状態が変更されるたびに実行され、
   * 状態を更新します。
   */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const formattedUser: User = {
          id: user.uid,
          email: user.email,
          name: user.displayName,
          photoURL: user.photoURL,
        };
        setAuthState({ user: formattedUser, loading: false, error: null });
      } else {
        setAuthState({ user: null, loading: false, error: null });
      }
    });

    // クリーンアップ関数：コンポーネントのアンマウント時に監視を解除
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
      setAuthState(prev => ({ ...prev, loading: true, error: null }));
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      setAuthState(prev => ({ 
        ...prev, 
        loading: false, 
        error: error instanceof Error ? error : new Error('Failed to sign in')
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
      setAuthState(prev => ({ ...prev, loading: true, error: null }));
      await firebaseSignOut(auth);
    } catch (error) {
      setAuthState(prev => ({ 
        ...prev, 
        loading: false, 
        error: error instanceof Error ? error : new Error('Failed to sign out')
      }));
    }
  };

  return {
    user: authState.user,
    loading: authState.loading,
    error: authState.error,
    signInWithGoogle,
    signOut,
  };
};
