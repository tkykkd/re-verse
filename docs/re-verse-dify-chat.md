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

## インデックス作成が失敗するとき

1. **設定 → モデルプロバイダー** で Embedding（埋め込み）モデルを追加・有効化（例: OpenAI text-embedding-3-small または Dify 標準）
2. 失敗したドキュメントを削除し、**`docs/dify/re-verse-knowledge-plain.txt`** をアップロード（表なし・Markdown なしで通りやすい）
3. インデックス方式はまず **経済 / Economy** を試す（High Quality は Embedding 必須で失敗しやすい）
4. ファイルは **15MB 未満・UTF-8**

## 関連ファイル

- ナレッジ原稿: `docs/dify/re-verse-knowledge.md`
- システムプロンプト: `docs/dify/re-verse-system-prompt.md`
- 埋め込み: `src/components/DifyChatEmbed.tsx`
