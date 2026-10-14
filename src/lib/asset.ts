// public/ にある画像のパスを、公開先のベースパス（vite.config.ts の base）付きにする。
// 例: asset('/images/a.jpg') → '/リポジトリ名/images/a.jpg'（ルート公開なら '/images/a.jpg'）
export const asset = (path: string) => import.meta.env.BASE_URL + path.replace(/^\//, '')
