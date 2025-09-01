## Redmine要約プログラム用プロンプト例

1. スクリプト（redmine_list.js）を起動し、Redmineから指定IDの詳細情報（subject, description, journalsなど）を取得してください。
2. 取得したレスポンス（詳細情報）をそのままCopilotに渡してください。
3. Copilotに「このRedmine issueの内容を要約してください」と依頼してください。
4. Copilotが要約した内容をMarkdown形式で `redmine` フォルダ配下のファイル（例: `redmine/redmine_summary.md`）に追記してください。
