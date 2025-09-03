import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { execSync } from 'child_process';

const TEST_ISSUE_IDS: number[] = [35701]; // ←ここを好きなIDに変更して使う

// ★APIキーをここに設定（必要に応じて環境変数等に変更可）
const API_KEY: string = process.env.REDMINE_API_KEY || 'a9c7a0f75c639e86597038a38b76bd82f8fb6ec7';

interface IssueDetail {
  id: number;
  subject: string;
  // 必要に応じて他のプロパティを追加
}

async function getIssueDetail(issueId: number): Promise<IssueDetail> {
  const url = `https://exgennetworks.cloudmine.jp/redmine/issues/${issueId}.json?include=journals`;
  const res = await axios.get(url, { params: { key: API_KEY } });
  return res.data.issue as IssueDetail;
}

async function main(): Promise<void> {
  for (const id of TEST_ISSUE_IDS) {
    try {
      const detail = await getIssueDetail(id);
      console.log(`ID ${id} の詳細取得成功: subject="${detail.subject}"`);

      // 一時ファイルに詳細情報を保存
      const tmpPath = path.join(__dirname, `copilot_detail_${id}.json`);
      fs.writeFileSync(tmpPath, JSON.stringify(detail, null, 2), 'utf8');
      console.log(`詳細情報を一時ファイルに保存: ${tmpPath}`);

      // Copilot CLIで要約を取得
      const prompt = 'Redmine issueの内容を要約してください。日本語で簡潔にまとめてください。';
      try {
        const copilotCmd = `gh copilot suggest -p "${prompt}" -f "${tmpPath}"`;
        console.log(`Copilot CLI実行: ${copilotCmd}`);
        const summary = execSync(copilotCmd, { encoding: 'utf8' });
        console.log('--- Copilot要約結果 ---');
        console.log(summary);
        console.log('--- ここまで ---');
      } catch (cliErr: any) {
        console.error('Copilot CLI実行エラー:', cliErr.message);
      }
    } catch (e: any) {
      console.error(`ID ${id} の詳細取得失敗:`, e.message);
    }
  }
}

// エントリポイント
if (require.main === module) {
  main();
}
