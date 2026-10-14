# ヘブンズカフェ 公式サイト

沖縄県名護市「ヘブンズカフェ（Heavens CAFE & BAR）」の公式サイト（1ページ）。
Vite + React + TypeScript + Tailwind CSS で作っています。

## 開発

```bash
npm install     # 初回のみ
npm run dev     # 開発サーバー（http://localhost:5173）
npm run build   # 公開用ビルド（dist/ に出力）
npm run lint    # コードのチェック
```

## 内容の更新場所

| 変えたいこと | ファイル |
|---|---|
| 店名・住所・電話・Instagram・Googleマップ | `src/data/shop.ts` |
| 営業時間・定休日 | `src/data/hours.ts` |
| メニュー・価格・写真 | `src/data/menu.ts` |
| 見出し・本文などの文面 | `src/data/copy.ts` |
| 画像 | `public/images/` |

## 公開

`main` ブランチに push すると、GitHub Actions がビルドして GitHub Pages に公開します（`.github/workflows/deploy.yml`）。
公開先がサブフォルダのときは、環境変数 `VITE_BASE`（例: `/リポジトリ名/`）でベースパスを指定します。
