---
marp: true
paginate: true
paginate-position: bottom-right
style: |
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
  section {
    background: linear-gradient(135deg, #64748b 0%, #3b82f6 100%);
    color: #f1f5f9;
    font-family: 'Segoe UI', 'Hiragino Sans', 'Meiryo', sans-serif;
  }
  blockquote {
    color: #38bdf8;
    font-weight: bold;
    background: rgba(0,0,0,0.15);
    border-left: 4px solid #38bdf8;
    padding: 0.5em 1em;
    border-radius: 6px;
  }
  h1, h2, h3 {
    color: #fbbf24;
    letter-spacing: 0.05em;
    font-family: 'Hiragino Sans', 'Meiryo', sans-serif;
  }
  .slide strong {
    color: #f59e42;
    font-family: 'Segoe UI', 'Hiragino Sans', 'Meiryo', sans-serif;
  }
  header, footer {
    font-size: 0.9em;
    font-family: 'Hiragino Sans', 'Meiryo', sans-serif;
  }
  /* ページ番号の色を見出しと同じに */
  .marpit-pagination,
  .marpit-pagination span,
  .marpit-pagination * {
    color: #fbbf24 !important;
    font-size: 1.3em !important;
  }
  ul, ol {
    background: none;
    border-radius: 0;
    padding: 0 1em;
    font-family: 'Hiragino Sans', 'Meiryo', sans-serif;
  }
  /* タイトルスライドだけ8ビットフォント */
  section:first-of-type h1 {
    font-size: 2.5em;
    color: #fbbf24;
    text-shadow: 2px 2px 8px #0f172a;
    font-family: 'Press Start 2P', 'Segoe UI', 'Hiragino Sans', 'Meiryo', sans-serif;
  }
title: VSCode＋GitHub Copilot に全部賭けろ
author: コパ会代表 大岡延至
date: 2025-07-11
---







<!-- タイトルスライド -->
# VSCode＋GitHub Copilot に全部賭けろ

![casino chip](casino_chip.png)

---

## つかみ

このタイトルはZennの名記事「[CLINEに全部賭けろ](https://zenn.dev/mizchi/articles/all-in-on-cline)」を ~パクりました~ オマージュしています！
みなさんもぜひ原典も読んでみてください

---


## 皆さんは、何に全部賭けていますか？

![casino dealer woman](casino_dealer_woman.png)

---



## 自己紹介

- 名前：大岡延至（おおおかのぶゆき）
- 所属：LDAP Manager部
- 「ノブソニ」主宰者、今日は**コパ会**代表として登壇！
- 最近は「娘」に全部賭けてます👧（Copilot よりも強い AI!?）

---

## コパ会とは？

コパ会とは、開発本部（主にLM部とExtic部）でGitHub Copilotを有効活用するための事務局的な役割を持ったバーチャル組織です

メンバーは各部長と GitHub のエヴァンジェリストを目指す人で構成されています

---

## VS Codeとは？

VS Code（Visual Studio Code）は、Microsoftが提供する無料の高機能コードエディターです
- 軽量かつ高速
- 拡張機能が豊富
- 多言語・多プラットフォーム対応
- Gitなどのバージョン管理も統合

---

## GitHub Copilotとは？

GitHub Copilotは、AIがコード補完や提案を行う開発支援ツールです
- コードの自動生成
- コメントから関数やクラスを提案
- 複数言語・フレームワーク対応
---

## VS Code＋GitHub Copilotでできること
- 複数言語・フレームワークに対応
- チーム開発でも活用可能

---

## 目的

- 生産性を向上し、成果を最大化する
- 空いた時間でさらに学び・成長できる
---
## VS CodeでGitHub Copilotを使うには？

1. 拡張機能「GitHub Copilot」をインストール
---
## デモ

---

## まとめ

- VS CodeとGitHub Copilotで開発の生産性・質・スピードが大幅アップ！
- AIの力を借りて、空いた時間でさらに成長＆挑戦できる
- “全部賭ける”くらい使い倒して、みんなで新しい開発体験を楽しもう！

---

## 告知・宣伝

- まもなく開発本部でGitHub Copilotライセンスを付与します！
- 新たにCopilot利用ポリシーを策定したので、説明会を開催予定
- ガイドラインはこれからみんなで作り上げたい！
- 特に旧AI研究会メンバーやCopilot検証担当だった方はご協力を！
- 一緒に“全部賭ける”開発文化を盛り上げましょう！

---

## ちなみに…


「CLINEに全部賭けろ」と言っていた[@mizchi](https://x.com/mizchi)さんは、その後「Claude Code」に全部賭け、今は「Gemini CLI」に全部賭けているらしいです。


時代とともに“全部賭けるもの”も変わる！

---



## ちなみに…



あの [@t_wada](https://x.com/t_wada) さんは「[全部賭けるな、両にらみしろ](https://speakerdeck.com/twada/agentic-software-engineering-findy-2025-07-edition?slide=40)」と言っています。



選択肢は一つじゃなくていい！

---

## ちなみに…

ちなみに、このスライドも VSCode＋GitHub Copilot でほぼ agent mode で指示しただけで作ってみました。


どうやって作ってるか気になる人は懇親会で聞いてね！！

---

## ご清聴ありがとうございました！