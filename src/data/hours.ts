// 通常の営業時間は 11:30〜22:00、定休日は木曜日（オーナー確認済み）。
// ただし営業時間は日によって変動するため、variable が true の間は営業中かどうかを自動判定せず、
// Instagram での確認を案内する。変動がなくなったら variable を false にすると、自動判定が働く。
export const hours = {
  confirmed: true,
  variable: true,
  weekly: {
    // 0=日 ... 6=土。null は定休日。値は [開店, 閉店]（24時間表記）
    0: ['11:30', '22:00'],
    1: ['11:30', '22:00'],
    2: ['11:30', '22:00'],
    3: ['11:30', '22:00'],
    4: null, // 木曜日: 定休日
    5: ['11:30', '22:00'],
    6: ['11:30', '22:00'],
  } as Record<number, [string, string] | null>,
  // 変則営業・臨時休業の例外日（'YYYY-MM-DD'）。値が null なら臨時休業
  exceptions: {} as Record<string, [string, string] | null>,
}
