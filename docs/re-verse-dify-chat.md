# RE-VERSE × Dify チャット埋め込み

## Dify アプリ名（推奨）

`RE-VERSE Site Guide`（TAKA AI とは別アプリで作成）

## サイト側の設定

1. Dify でアプリ公開後、Embed の **token** をコピー
2. リポジトリ直下に `.env` を作成（`.env.example` を参照）

```env
VITE_DIFY_EMBED_TOKEN=your-embed-token-here
VITE_DIFY_BASE_URL=https://udify.app
```

3. GitHub Pages 本番用: リポジトリ Settings → Secrets → `VITE_DIFY_EMBED_TOKEN` を登録（任意で `VITE_DIFY_BASE_URL`）
4. `main` に push すると Actions がビルド・デプロイ

## ナレッジ更新手順

1. `docs/dify/re-verse-knowledge.md` を編集
2. Dify ナレッジベースでファイルを差し替え／再同期
3. 必要ならアプリを再 Publish

## 関連ファイル

- ナレッジ原稿: `docs/dify/re-verse-knowledge.md`
- システムプロンプト: `docs/dify/re-verse-system-prompt.md`
- 埋め込み: `src/components/DifyChatEmbed.tsx`
