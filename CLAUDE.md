# CLAUDE.md — ヒトのトリセツ 作業ルール

あなたはブログ「ヒトのトリセツ」（hitono-torisetu.com / Astro + Cloudflare Workers）の実装担当です。
記事の執筆・推敲は主にチャット側（Claude.ai）で行います。あなたの仕事は実装・デプロイ・保守です。

## 🚨 絶対ルール（違反厳禁）

1. **デプロイは必ず `npm run deploy`**。GitHubへのプッシュだけでは本番に反映されない。
2. **大きな変更の前に必ず git commit**（ロールバック用の安全網）。
3. **記事の日付（pubDate含む）は自動入力禁止**。必ずヒトミさんに確認してから記入する。
4. フレーズ「💛 悪いのはあなたじゃない」は使用禁止。代わりに「これは仕様です」の枠組みを使う。
5. 既存記事のコンポーネント構造・CSSクラス名を勝手に変更しない。

## 🚀 デプロイ手順

記事の追加・更新後は必ず以下のコマンドでCloudflareにデプロイすること。
git push だけでは本番に反映されない。

```powershell
$env:CLOUDFLARE_API_TOKEN = [System.Environment]::GetEnvironmentVariable("CLOUDFLARE_API_TOKEN", "User")
cd "C:\Users\yousuke\Documents\my-blog"
npm run deploy
```

- APIトークンはユーザー環境変数 `CLOUDFLARE_API_TOKEN` に保存済み
- デプロイ後は `https://hitono-torisetu.com/blog/` で反映を確認すること

## 📄 記事実装手順（HTML → MDX）

チャットからダウンロードしたHTMLファイルをMDX記事にする手順：

1. ファイル名は**英語スラッグ**にする（例：`multitasking-truth.mdx`）。日本語ファイル名は禁止。
2. 記事の配置先：`src/content/blog/`
3. frontmatterに必要な項目：`title` / `description` / `pubDate` / `heroImage`
   - pubDateのフォーマット：`'Jun 05 2026'`（英語月・2桁日・4桁年）
   - pubDateはヒトミさんに確認してから記入（絶対ルール3）。
   - heroImageはサムネイル画像のパス（例：`/sleep-thumbnail.png`）。
4. HTML内のコンポーネント（悩みボックス・学びボックス・吹き出し・チェックリスト・まとめボックス・出典）を既存記事と同じクラス名・構造で実装する。
   - 先生キャラの🧬絵文字はCSSの `::before`（`av-sensei`クラス）で表示される。本文に絵文字を直書きしない。
5. 既存記事のURLを変更した場合は `src/middleware.ts` に301リダイレクトを追加する。
6. 実装後にローカルで表示確認 → git commit → `npm run deploy`。
7. MDX記述の禁止事項・モバイル対応CSS・仕様ボックス実装例・文体ルールは `docs/reference/article-guidelines.md` を参照すること。

## 📋 記事作成前の必須確認

新しい記事MDXを作成する前に、必ず以下を実行すること：

1. `ls src/content/blog/` で既存ファイル一覧を確認する
2. 同じテーマ・内容の記事が既に存在しないか確認する
3. 既存ファイルがある場合は作成せず、ファイル名を報告して指示を仰ぐ
4. 新規作成する場合はファイル名を英語スラッグに統一する
   例：何度も失敗をくり返す理由 → foolproof-article.mdx

## 🎨 デザイントークン

- メイン：`#1e2a4a`（ネイビー）
- アクセント：`#f07b3f`（オレンジ）
- フォント：M PLUS Rounded 1c

## 💰 アフィリエイト

- Amazon アソシエイトID：`hitonotoriset-22`
- リンク形式：`[書名](https://www.amazon.co.jp/s?k=書名&tag=hitonotoriset-22)`（論文はリンク不要）
- 詳細は `docs/reference/article-guidelines.md` を参照すること。

## 📚 知識ファイル（必要なときだけ読む）

記事の内容に関わる作業で参考知識が必要な場合のみ、以下を読むこと。
通常の技術作業（デプロイ・CSS修正など）では読まない。

- 動物行動学（長谷川眞理子『動物の行動と生態』）：`docs/knowledge/animal-behavior.md`
- （新しい本を読んだら `docs/knowledge/` にファイルを追加し、この一覧に1行追記する）

## ⚙️ コスト・運用

- `.claudeignore` を維持し、不要なファイルを読み込まない。
- 科学的根拠が不明な情報は「確認が必要」と明示する。
- 動物の事例を人間に当てはめるときは慎重に。安易な断定をしない。
