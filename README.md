# Next.js テンプレート

このリポジトリは、Next.js プロジェクトのテンプレートです。  
App Routerを使っています。  
Page Routerは以下リポジトリを参照してください。  
https://github.com/nakajima97/next-template-page-router

## セットアップ

### 1. プロジェクトのセットアップ

1. リポジトリをクローンします。
2. 依存関係をインストールします: `yarn install`

### 2. Firebaseの設定

1. [Firebase Console](https://console.firebase.google.com/)で新しいプロジェクトを作成
2. Google認証を有効化:
   - Authentication > ログイン方法に移動
   - Googleログインプロバイダーを有効化
   - 必要に応じてOAuth同意画面を設定

3. Firebaseの設定を取得:
   - プロジェクト設定 > 全般に移動
   - 「マイアプリ」までスクロール
   - Webアイコン（</>）をクリック
   - アプリを登録して設定を取得

4. 環境変数の設定:
   - `.env.example`を`.env.local`にコピー
   - Firebaseの設定から取得した値を入力

## 開発

1. 開発サーバーを起動:
   ```bash
   yarn dev
   ```

2. ブラウザで[http://localhost:3000](http://localhost:3000)を開いて結果を確認

## テスト

`yarn test` を実行してテストを実行します。

## 技術スタック
最新の情報は`package.json`を参照してください。  
主な技術スタックとしては以下を使っています。  

* Next.js
* React
* Yarn
* Biome

## インストールオプション
NextJSインストール時のオプションは以下を選択しています。
```
✔ What is your project named? … next-template
✔ Would you like to use ESLint? … Yes
✔ Would you like to use Tailwind CSS? … No
✔ Would you like to use `src/` directory? … Yes
✔ Would you like to use App Router? (recommended) … Yes
✔ Would you like to customize the default import alias (@/*)? … Yes
✔ What import alias would you like configured? … @/*
