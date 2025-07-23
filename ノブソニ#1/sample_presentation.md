---
marp: true
paginate: true
paginate-position: bottom-right
theme: default
title: VS Code＋GitHub Copilot に全部賭けろ
author: コパ会代表 大岡延至
date: 2025-07-11
style: |
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
  section {
    background: linear-gradient(135deg, #64748b 0%, #3b82f6 100%);
    color: #f1f5f9;
    font-family: 'Segoe UI', 'Hiragino Sans', 'Meiryo', sans-serif;
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
    color: #64748b;
    font-size: 0.9em;
    font-family: 'Hiragino Sans', 'Meiryo', sans-serif;
  }
  /* ページ番号の色を見出しと同じに */
  section > footer.marpit-pagination {
    color: #fbbf24 !important;
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
---






<!-- タイトルスライド -->
# VS Code＋GitHub Copilot に全部賭けろ

![casino chip](casino_chip.png)

---

## つかみ



このタイトルは Zenn の名記事「[CLINEに全部賭けろ](https://zenn.dev/mizchi/articles/all-in-on-cline)」を ~パクりました~ オマージュしています！


みなさんもぜひ原典も読んでみてください


- コーディング AI「Cline」に出会いその性能を体感
- 人が書くプログラミングの時代が終わると悟る
- エンジニアの役割が指示や評価などに変化
- AI にドライバー席を譲り主導権を完全に託す覚悟を決める


---


## 皆さんは、何に全部賭けていますか？

![casino dealer woman](casino_dealer_woman.png)

---



## 自己紹介

- 名前：大岡延至（おおおかのぶゆき）
- 所属：LDAP Manager 部
- ノブソニ主宰者、今日は「コパ会」代表として登壇！
- 最近は「娘」に "全部賭け" てます👧（Copilot よりも強い AI！？）

---

## コパ会とは？

コパ会とは、開発本部（主に LM 部と Extic 部）で GitHub Copilot を有効活用するための事務局的な役割を持ったバーチャル組織です (勝手に命名)

メンバーは各部長と GitHub チャンピョンを目指す人たちで構成されています

---

## VS Codeとは？

VS Code（Visual Studio Code）は、Microsoft が提供する無料の高機能コードエディターです
- 拡張機能が豊富
- 軽量かつ高速
- 多言語・多プラットフォーム対応
- Git などのバージョン管理も統合

---

## GitHub Copilotとは？

GitHub Copilot は、AI がコード補完や提案を行う開発支援ツールです
- コードの続きを AI がリアルタイムで提案してくれる
- コメントや関数名からコードを自動生成できる
- テストコードやドキュメントも自動生成できる
- アシスタント的な伴走だけでなくエージェントによる委託も可能

---



## VS Code＋GitHub Copilot でできること

伴走 (提案・補完): コード補完・提案、テストやドキュメント自動生成
伴走 (対話): AIとチャットしながら複数ファイルの編集、コマンド実行
委託 (エージェント): 指示だけで Issue から一連の作業を非同期で自動実行


---



## VS Code＋GitHub Copilot を使用する目的

- 日常のコーディング作業をAIがリアルタイムでサポートし、生産性を大幅アップ
- テストコードやドキュメントも自動生成し、アウトプットの質を高める
- バグ修正やリファクタリングのヒントで、保守性・品質向上
- チーム開発で知識共有やレビュー効率化、みんなでより良い開発体験を実現



---

## 非プログラマでも AI 付きメモ帳として業務に使える

- PdM：ロードマップや要求仕様書のドラフトを Markdown で作成するなど
- テスター：テスト観点の洗い出しやテストケースの自動生成など
- インフラ担当：terraform ファイル (HCL) の作成など

---

## VS Code で GitHub Copilot を使うには？
Windows (MacOS) に VScode アプリをインストールする

1. 拡張機能「GitHub Copilot」をインストール
2. GitHubアカウントでサインイン
3. gitクローンしなくてもローカルファイルですぐに利用可能

---


## まとめ

- VS Code と GitHub Copilot で開発の生産性・質・スピードが大幅アップ！
- AIの力で日々のコーディングがもっと楽しく、もっとクリエイティブに
- チームでも個人でも、学びと成長のサイクルが加速する
- “全部賭ける” くらい使い倒して、みんなで新しい開発体験を楽しもう！

---

## 告知・宣伝

ライセンス購入申請が承認され、8月1日から開発本部で GitHub Copilot のライセンスを付与できることになりました (別途 IntelliJ も AI オプション購入予定)

GitHub Copilot だけでなく、さまざまなコーディング AI を安全に活用するためのポリシーも策定予定で、運用開始までに展開できるよう準備を進めています

誰でも大まかな使い方がわかるようなガイドラインも、みなさんからのフィードバックをもとに一緒に作り上げていく予定です


### とくにお願いしたいこと

- 旧 AI 研究会メンバーの協力を期待してます！ (コパ会メンバーも募集中)
  - 一緒に “全部賭ける” 開発文化を盛り上げましょう！

---

## ちなみに… 1

「CLINEに全部賭けろ」と言っていた[@mizchi](https://x.com/mizchi)さんは、その後「Claude Code」に全部賭け、今は「Gemini CLI」に全部賭けているらしいです (多分今ごろ Kiro に賭けてる)

時代とともに “全部賭けるもの” も変わる！

---

## ちなみに… 2

あの [@t_wada](https://x.com/t_wada) さんは「[全部賭けるな、両にらみしろ](https://speakerdeck.com/twada/agentic-software-engineering-findy-2025-07-edition?slide=40)」と言っています

選択肢は 1つじゃなくていい！

---

## ちなみに… 3

ちなみに、このスライドも VS Code＋GitHub Copilot にて、ほぼ agent mode で指示しただけで作ってみました

どうやって作ってるか気になる人は懇親会で聞いてね！！

---


## 皆さんは、何に全部賭けますか？

![casino dealer woman](casino_dealer_woman.png)

---

## ご清聴ありがとうございました
