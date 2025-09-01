// redmine_summary.js
// Redmine APIから「LM pending 保留」担当のissue一覧を取得し、今後の要約処理にも使えるサンプル
// 事前に `npm install axios` を実行してください

const axios = require('axios');

const REDMINE_URL = 'https://exgennetworks.cloudmine.jp/redmine/projects/ldapmanager/issues.json';
const API_KEY = 'a9c7a0f75c639e86597038a38b76bd82f8fb6ec7';

async function getAllIssues() {
  let allIssues = [];
  let offset = 0;
  const limit = 100;
  while (true) {
    const res = await axios.get(REDMINE_URL, {
      params: {
        key: API_KEY,
        assigned_to: 'LM pending 保留',
        limit,
        offset
      }
    });
    const issues = res.data.issues || [];
    allIssues = allIssues.concat(issues);
    if (issues.length < limit) break;
    offset += limit;
  }
  return allIssues;
}

async function main() {
  try {
    const allIssues = await getAllIssues();
    console.log(`取得件数: ${allIssues.length}`);
    // 必要なら内容も表示
    // console.log(allIssues);
  } catch (err) {
    console.error('エラー:', err.message);
  }
}

main();
