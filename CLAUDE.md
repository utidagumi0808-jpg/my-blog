# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 環境情報

- OS: Windows 11 Home
- シェル: bash（Claude Code内）/ PowerShell（PowerShellツール）
- Python: 3.14（`py` コマンドで起動）
- パスの扱い: bash内では `/c/Users/yousuke/`、PowerShell内では `C:\Users\yousuke\`

## 利用可能なツール・ライブラリ

```
Python:  py -c "..."  または  py スクリプト.py
pip:     py -m pip install パッケージ名
PDF読込: pypdf（インストール済み）
```

PowerShellスクリプトは実行ポリシーの制限があるため、実行時は `-ExecutionPolicy Bypass` が必要：
```powershell
powershell -ExecutionPolicy Bypass -File "script.ps1"
```

## プロジェクト一覧

### ポモドーロタイマー
- パス: `C:\Users\yousuke\Documents\pomodoro\index.html`
- 内容: HTML/CSS/JS のシングルファイルWebアプリ
- 機能: 作業25分・短い休憩5分・長い休憩15分、セッション管理、Web Audio APIによる通知音
- 起動: `index.html` をブラウザで直接開く

## カスタムスラッシュコマンド

### `/screenshot`
画面全体をキャプチャして `Documents\Screenshots\screenshot_YYYYMMDD_HHmmss.png` に保存する。
- スクリプト: `C:\Users\yousuke\.claude\screenshot.ps1`

## ファイル作成時のルール

### タイムアウト防止のため、必ず1ファイルずつ作成する
- 複数ファイルの作成が必要な場合は、1ファイル作成→完了報告→次のファイル、の順で進める
- 1つのメッセージで複数ファイルを同時に作成しない
- 完了したら「完了」とだけ報告し、次の指示を待つ

## 自動承認ルール
- ファイルの読み取り・編集・作成は承認不要で実行してよい
- GitHubへのプッシュは承認不要で実行してよい
- npmのインストールは承認不要で実行してよい
- 開発サーバーの起動・停止は承認不要で実行してよい
- 上記以外の操作（外部APIへのアクセス、システム設定の変更など）は承認を求めること

## ユーザーの作業スタイル・注意事項

- **応答は日本語**で行う（`~/.claude/settings.json` に `"language": "japanese"` 設定済み）
- ユーザーは個人事業主として活動中。相談内容はビジネス・コンテンツ制作・自己分析が中心
- **メモリファイルを必ず参照**する（`~/.claude/memory/`）。ユーザーの強み資質・事業計画が記録されている
- ファイル削除など不可逆な操作は必ず確認を取ってから実行する

## メモリの場所

ユーザーに関する継続情報は `C:\Users\yousuke\.claude\memory\` に保存されている：
- `MEMORY.md` — インデックス
- `user_profile.md` — CliftonStrengths全34資質、性格傾向
- `project_business_plan.md` — 生理人類学コンテンツビジネス計画

---

## モバイル対応ルール（必須）
- 新しいページ・コンポーネント・記事を作成するときは必ずスマホ表示を確認すること
- 画像はすべて `width: 100%; max-width: 100%; height: auto;` を設定する
- ナビゲーションはスマホ（375px以下）でも収まるよう設計する（ハンバーガーメニュー推奨）
- メタタグに `<meta name="viewport" content="width=device-width, initial-scale=1">` が必ず入っていること（BaseHead.astro に実装済み）
- 作業完了前に `npm run build` でビルドエラーがないか確認すること
- グリッドレイアウトは `@media (max-width: 480px) { grid-template-columns: 1fr; }` で1カラムに落とすこと
- **固定幅（px指定）を使わず `width: 100%` を基本とする**：`width: 800px` のような固定幅はCSSグリッド・フレックス内でオーバーフローを引き起こす原因になる
- **`max-width` で最大幅を制限する場合は必ず `width: 100%` と併用する**：`max-width` 単独または `width: 固定px + max-width: %` の組み合わせはグリッド内で%計算が循環依存になり崩れる。正しい書き方：`width: 100%; max-width: 800px;`
- **`html` に `overflow-x: hidden` を設定する**：横スクロール発生を防ぐ安全網として `global.css` の `html` に追加済み。`body` への設定は `position: sticky` を壊すので避ける
- **グリッド・フレックス内の要素に `min-width: 0` を設定する**：グリッドアイテムのデフォルトは `min-width: auto`（＝min-content）のためコンテンツ幅でトラックが広がることがある。`min-width: 0` で防ぐ
- **スマホ375px幅で崩れていないか確認してからプッシュする**：ブラウザのDevToolsでiPhone SE（375px）相当に切り替えて目視確認すること

---

## 🌟 ブログ制作の使命

**「読者のベネフィットを第一に」が、このブログのすべての判断基準。**

記事を書くとき、デザインを決めるとき、テーマを選ぶときは、
常に以下の問いを自分に投げかけること：

- この記事を読んだ読者の、何が変わるか？
- 読者は「読んでよかった」と思えるか？
- 自分が書きたいことではなく、読者が知りたいことを書けているか？

知識を「届ける」のではなく、読者の人生に「役立てる」ために書く。
それがヒトのトリセツの存在意義。

---

# ブログ「ヒトのトリセツ」記事作成ルール

## ブログ概要
- ブログ名：ヒトのトリセツ
- テーマ：生理人類学をやさしく届ける
- 参照テキスト：「生理人類学—人の理解と日常の課題発見のために—」（安河内朗・岩永光一編著、理工図書、2020年）
- 出力形式：単一のHTMLファイル（CSS・JSをすべて1ファイルに内包）

## デザイン仕様
- フォント：M PLUS Rounded 1c（Google Fonts）
- メインカラー：#1e2a4a（ネイビー）
- アクセントカラー：#f07b3f（オレンジ）
- レスポンシブ対応必須（スマホでも読める）

## 記事に必ず含める6つのコンポーネント
1. 冒頭「🤔 こんな悩みありませんか？」ボックス
2. 「📌 この記事でわかること」ボックス
3. 吹き出し対話（最低4か所。読者🙋とキャラクター🧑‍🔬の掛け合い）
4. 「🔧 それは仕様です。あなたのせいじゃない。」ボックス（記事終盤に挿入。詳細は下記「仕様ボックス」参照）
5. 末尾「📋 行動チェックリスト」（チェックボックス付き・クリックで✓できること）
6. 「📝 まとめ」ボックス（ネイビー背景・白文字）

## 仕様ボックス（必須コンポーネント）

記事終盤（行動チェックリストの直前あたり）に必ず以下のボックスを挿入すること。

### タイトル
🔧 それは仕様です。あなたのせいじゃない。

### 本文テンプレート（各記事のテーマに合わせて自然に調整すること）
今まで知らなかったのは、あなたが怠けていたからじゃありません。
誰も「人体のトリセツ」を教えてくれなかっただけです。

不具合は、仕様です。しょうがない。

でも、このページを読み終えたあなたは、もうアップデート済みです。
これからは、自分を主体的に整えられます。

### HTML実装例
```html
<div style="background:#fff8f0; border-left:4px solid #f07b3f; border-radius:8px; padding:20px 24px; margin:32px 0;">
  <p style="font-weight:700; font-size:1.1em; color:#f07b3f; margin:0 0 12px;">🔧 それは仕様です。あなたのせいじゃない。</p>
  <p style="margin:0; line-height:1.8;">
    今まで知らなかったのは、あなたが怠けていたからじゃありません。誰も「〇〇のトリセツ」を教えてくれなかっただけです。<br/><br/>
    不具合は、仕様です。しょうがない。<br/><br/>
    でも、このページを読み終えたあなたは、もうアップデート済みです。これからは、〇〇を知って、自分を主体的に整えられます。
  </p>
</div>
```

### 注意
- 「〇〇のトリセツ」「〇〇を知って」の部分は記事テーマに合わせて書き換える
- デザイン（background・border・border-radius・padding）は変更しない

---

## 記事作成のルール：図解について
- 記事を作成するときは、必ずSVG図解を1つ以上含めること
- 図解はSVGで直接描画する（外部画像ファイルは使わない）
- `width="100%" viewBox="0 0 680 [高さ]"` で設定しスマホでも見やすくする
- 図解の内容は記事のメインテーマを視覚化したもの（サイクル図・フロー図・比較図など）
- 挿入位置は記事冒頭または最初の本文セクションの直前
- ブログのカラー（ネイビー #1e2a4a・オレンジ #f07b3f）を基調とした配色にする

## 文体ルール
- 小学生にも分かる言葉づかい
- 結論を先に書き、理由を後述する
- ユーモアを適度に入れる（笑いを取れるところでは取る）
- 「それは仕様です。あなたのせいじゃない。」フレームで読者を責めない
- 科学的根拠が不明な情報は「確認が必要」と明示する
- 必ず出典を記載する（論文名・著者・年・雑誌名）

## コンテンツ方針
- 不確かな情報は書かない。書く場合は「確認が必要」と明示
- 科学的に再現性のある情報を優先する
- わからないことは「わからない」と正直に書く

## 出力ファイル
- ファイル名：テーマを表す英語のケバブケース（例：fairness-article.mdx、sleep-article.mdx）
- 保存場所：`C:\Users\yousuke\Documents\my-blog\src\content\blog\`
- ファイル形式：**.mdx**（HTMLファイルは使わない）
- 記事作成後は必ず `git add && git commit && git push` でGitHubにプッシュする
- GitHubにプッシュするまでサイト（hitono-torisetu.com）には反映されない

## MDX記述の禁止事項・注意事項
- **`<script>` タグをMDXファイル内に書いてはいけない**：MDXは `{}` をJavaScript式として解析するためビルドエラーになる
- JavaScriptが必要な場合は `src/layouts/BlogPost.astro` の `</html>` 直前に `<script>` を追加する
- チェックリストのクリック動作などは BlogPost.astro に既に実装済み（`.chk` クラスで動作）
- **記事を書いたら必ず `npm run build` でビルドエラーがないか確認してからプッシュする**
- **`git push` 後は3〜5分待ってからWebFetchで `https://hitono-torisetu.com/blog/` を確認する**：Netlifyのビルド中は前のデプロイ版が配信されるため、プッシュ直後に確認しても反映前の状態が表示される。サムネイルや記事が正しく表示されるまで確認を完了としない

## 参考文献のAmazonアソシエイトリンクルール
- アソシエイトID：`hitonotoriset-22`
- 参考文献に**書籍**が含まれる場合、書名をAmazonアソシエイトリンクにする
- リンク形式：`[書名](https://www.amazon.co.jp/s?k=書名&tag=hitonotoriset-22)`（書名はURLエンコード不要のまま記述）
- **論文（Journal・PNAS・Science等）はリンク不要**。書籍のみ対象
- 例：`安河内朗・岩永光一（編著）（2020）『[生理人類学——人の理解と日常の課題発見のために——](https://www.amazon.co.jp/s?k=生理人類学&tag=hitonotoriset-22)』理工図書.`

---

## 既存HTMLファイルをMDX記事として実装する手順

作成済みのHTMLファイル（例：complex-article.html）を渡されたら以下の手順で実装すること。

1. HTMLファイルの内容を読み込む
2. MDX形式に変換する（`<script>`タグは BlogPost.astro に移動）
3. ファイル名はテーマを表す英語ケバブケース（例：`complex-article.mdx`）
4. 保存場所：`C:\Users\yousuke\Documents\my-blog\src\content\blog\`
5. `npm run build` でビルドエラーがないか確認する
6. `git add && git commit && git push` でプッシュする
7. 3〜5分後に `https://hitono-torisetu.com/blog/` で反映を確認する

### 実装時の注意
- **日付（pubDate）はヒトミに確認してから記入する。自動入力しない**
- 不明点は実装前にまとめて1回だけ確認する（途中で止めない）
- スマホ375px表示で崩れていないか確認してからプッシュする

---

## 参考文献・テーマ別要点集
詳細は `~/.claude/memory/blog_references.md` を参照すること。

---

## デザイン実装済み設定（2025-05-10 更新）

### カラーパレット（CSS変数）
- `--color-main: #1e2a4a`（ネイビー）
- `--color-accent: #f07b3f`（オレンジ）
- `--color-accent-dark: #c05c20`（オレンジ暗め）
- `--color-accent-light: #fff0e8`（オレンジ薄め）

### フォント
- 全体：M PLUS Rounded 1c（Google Fonts）
- Noto Sans JP・Noto Serif JP・Atkinsonは廃止済み

### 実装済みデザイン
- ヘッダー：ネイビー背景・白文字・下部オレンジライン
- フッター：ネイビー背景・白文字
- ヒーローセクション：ネイビー背景
- h2見出し：オレンジ左ボーダー4px・padding-left 0.75rem
- h3見出し：ネイビー左ボーダー3px・padding-left 0.6rem
- .box：白背景・border-radius 12px・薄いbox-shadow・オレンジ左ボーダー
- .excuse：オレンジ薄め背景(#fff8f3)・オレンジ左ボーダー・border-radius 12px
- .voice-reader/.voice-author：border-radius 18px・薄いbox-shadow

### 変更ファイル一覧
- src/styles/global.css
- src/components/Header.astro
- src/components/Footer.astro
- src/pages/index.astro
- astro.config.mjs
- src/components/BaseHead.astro

---

## 記事作成前の必須確認

新しい記事MDXを作成する前に、必ず以下を実行すること：

1. ls src/content/blog/ で既存ファイル一覧を確認する
2. 同じテーマ・内容の記事が既に存在しないか確認する
3. 既存ファイルがある場合は作成せず、ファイル名を報告して指示を仰ぐ
4. 新規作成する場合はファイル名を英語スラッグに統一する
   例：何度も失敗をくり返す理由 → foolproof-article.mdx

---

## デプロイ手順
**記事の作成・修正・MDXファイルの変更が終わったら、最後に必ず `npm run deploy` を実行してCloudflareに反映すること。git push だけでは公開されない。**

記事の追加・更新後は必ず以下のコマンドでCloudflareにデプロイすること。
GitHubへのpushだけでは本番に反映されない。

```powershell
$env:CLOUDFLARE_API_TOKEN = [System.Environment]::GetEnvironmentVariable("CLOUDFLARE_API_TOKEN", "User")
cd "C:\Users\yousuke\Documents\my-blog"
npm run deploy
```

- APIトークンはユーザー環境変数 `CLOUDFLARE_API_TOKEN` に保存済み
- デプロイ後は `https://hitono-torisetu.com/blog/` で反映を確認すること
