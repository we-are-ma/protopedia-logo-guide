# Nuxt.js プロジェクトセットアップガイド

このREADMEは、Node.jsやターミナル操作に慣れていない方向けに、Nuxt.jsプロジェクトのセットアップ手順を説明します。

## 必要な環境

- **Node.js**（最新のLTS版を推奨）
- **Git**

## 初回セットアップ

1. **リポジトリのクローン**

   ターミナルまたはコマンドプロンプトを開き、以下のコマンドでリポジトリをクローンしてください。

   ```bash
   git clone <リポジトリのURL>
   ```

2. **依存パッケージのインストール**

   リポジトリをクローンしたら、プロジェクトのディレクトリに移動して以下のコマンドを実行し、必要なパッケージをインストールします。

   ```bash
   cd プロジェクトのディレクトリ名
   npm install
   ```

## プロジェクトのアップデート

チーム全体で進捗があった場合は、最新の変更を取り込むために、定期的に以下のコマンドを実行してください。

```bash
git pull
```

## サーバーの起動と設定

- **ポート番号**  
  Nuxt.jsの開発サーバーは、`nuxt.config.ts`ファイルに設定されたポート番号で動作します。例として、ポート番号は`3003`に設定されています。

- **開発サーバーの起動**

  ```bash
  npm run dev
  ```

  ※ 起動後、ブラウザで `http://localhost:3003` にアクセスして動作確認をしてください。

## ビルドと納品物の生成

最終的な成果物は、`npm run generate`コマンドを実行することで生成され、`dist`ディレクトリ内に出力されます。この`dist`ディレクトリが納品物となります。

```bash
npm run generate
```

## まとめ

- **初回セットアップ**: `git clone` → `npm install`
- **更新**: チーム全体で進捗があった場合は `git pull`
- **開発サーバー**: `nuxt.config.ts`に記載のポート番号（3003）で起動 (`npm run dev`)
- **納品物生成**: `npm run generate`で`dist`ディレクトリが作成

以上が基本的なセットアップ手順です。不明な点があれば、チームリーダーまたは開発担当者にお問い合わせください

## ファイルの文言の修正方法

一般的なNuxt.js 3のディレクトリ構成に習います。
[Introduction · Get Started with Nuxt](https://nuxt.com/docs/getting-started/introduction)

文言は
`ma-logo-system/pages/index.vue`
にほぼ記載されています
その他の変更が必要な場合はNuxt.jsのディレクトリ構成を参考にしてください。
コンポーネントは
`ma-logo-system/components`
以下にあります。
