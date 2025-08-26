
# Marp PDF 変換プロンプト

## 使い方
変換したい Markdown ファイルのパスを `{input}`、出力 PDF のパスを `{output}` に置き換えて使う。

```sh
npx @marp-team/marp-cli {input} --pdf --allow-local-files --output {output}
```

---

### サンプル

```sh
npx @marp-team/marp-cli ノブソニ#1/sample_presentation.md --pdf --allow-local-files --output ノブソニ#1/sample_presentation.pdf
```
