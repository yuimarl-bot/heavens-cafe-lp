import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// 公開先がサブフォルダ（例: GitHub Pages の /リポジトリ名/）のときは、環境変数 VITE_BASE で指定する。
// 未指定ならルート（/）。ローカル開発や独自ドメインではそのまま動く。
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react()],
})
