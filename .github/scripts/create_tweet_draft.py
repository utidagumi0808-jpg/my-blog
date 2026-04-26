import subprocess
import os
import re
import urllib.parse

result = subprocess.run(
    ['git', 'diff', '--name-only', '--diff-filter=A', 'HEAD~1', 'HEAD', '--', 'src/content/blog/'],
    capture_output=True, text=True
)
new_files = [f for f in result.stdout.strip().split('\n') if f.endswith('.mdx') and f]

if not new_files:
    print("新しい記事は見つかりませんでした（既存記事の更新のみ）")
    exit(0)

for filepath in new_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    title_match = re.search(r"^title:\s*['\"](.+)['\"]", content, re.MULTILINE)
    title = title_match.group(1) if title_match else "新しい記事"

    basename = os.path.basename(filepath).replace('.mdx', '')
    url = f"https://hitono-torisetu.com/blog/{basename}/"

    tweet_text = (
        f"新しい記事を公開しました📝\n\n"
        f"{title}\n\n"
        f"{url}\n\n"
        f"#生理人類学 #ヒトのトリセツ"
    )

    encoded_tweet = urllib.parse.quote(tweet_text)
    intent_url = f"https://twitter.com/intent/tweet?text={encoded_tweet}"

    bt = '```'
    issue_body = (
        f"## 新しい記事が公開されました\n\n"
        f"**記事タイトル:** {title}\n"
        f"**URL:** {url}\n\n"
        f"---\n\n"
        f"## ツイート文案\n\n"
        f"{bt}\n"
        f"{tweet_text}\n"
        f"{bt}\n\n"
        f"---\n\n"
        f"## ワンクリック投稿\n\n"
        f"### 👉 [クリックしてXに投稿する]({intent_url})\n\n"
        f"リンクをクリックするとブラウザでXが開き、上記のツイート文が入力された状態になります。"
        f"内容を確認して「投稿」ボタンをクリックしてください。\n\n"
        f"---\n"
        f"*このIssueはGitHub Actionsによって自動生成されました*"
    )

    subprocess.run([
        'gh', 'issue', 'create',
        '--title', f'📣 SNS投稿: {title}',
        '--body', issue_body,
    ], env={**os.environ})

    print(f"Issue作成完了: {title}")
