// テスト予定・企業別テストマッピングデータ
// 手動管理 — 予定追加時はこのファイルを編集

const TEST_SCHEDULE = [
  {
    company: 'ベイカレント',
    date: '2026-03-24',
    type: 'WEBテスト',
    content: '種別未確認（オンライン）',
    venue: 'オンライン',
    confirmed: false
  },
  {
    company: 'ファーストリテイリング',
    date: '2026-03-24',
    type: 'テストセンター',
    content: '基礎能力検査 約35分（言語+非言語）',
    venue: 'テストセンター',
    confirmed: true,
    completed: true
  },
  {
    company: 'キーエンス',
    date: '2026-03-31',
    type: 'テストセンター',
    content: '性格 + 能力（言語・非言語）',
    venue: '御茶ノ水ソラシティ会場',
    confirmed: true
  },
  {
    company: '日本航空（JAL）',
    date: '2026-04-07',
    type: 'テストセンター',
    content: '性格 + 能力（言語・非言語）+ 英語',
    venue: '御茶ノ水ソラシティ会場',
    confirmed: true
  },
  {
    company: 'アビーム',
    date: '2026-04-20',
    type: 'テストセンター',
    content: '基礎能力35分 + 構造把握力20分',
    venue: '横浜KNビル',
    confirmed: true
  }
];

const COMPANY_TEST_MAP = [
  {
    company: 'アビーム',
    format: 'テストセンター',
    parts: { verbal: true, nonverbal: true, english: false, structure: true },
    confidence: 'confirmed'
  },
  {
    company: 'ベイカレント',
    format: 'WEBテスト',
    parts: { verbal: null, nonverbal: null, english: null, structure: null },
    confidence: 'unconfirmed'
  },
  {
    company: 'ファーストリテイリング',
    format: 'テストセンター',
    parts: { verbal: true, nonverbal: true, english: false, structure: false },
    confidence: 'confirmed'
  },
  {
    company: 'アクセンチュア',
    format: 'テストセンター',
    parts: { verbal: true, nonverbal: true, english: false, structure: false },
    confidence: 'estimated'
  },
  {
    company: '住友商事',
    format: 'テストセンター/オンライン',
    parts: { verbal: true, nonverbal: true, english: false, structure: false },
    confidence: 'estimated'
  },
  {
    company: '三井物産',
    format: '未確認',
    parts: { verbal: null, nonverbal: null, english: null, structure: null },
    confidence: 'unconfirmed'
  },
  {
    company: 'MUFG',
    format: 'テストセンター',
    parts: { verbal: true, nonverbal: true, english: false, structure: false },
    confidence: 'estimated'
  },
  {
    company: 'キーエンス',
    format: 'テストセンター',
    parts: { verbal: true, nonverbal: true, english: false, structure: false },
    confidence: 'confirmed'
  },
  {
    company: '日本航空（JAL）',
    format: 'テストセンター',
    parts: { verbal: true, nonverbal: true, english: true, structure: false },
    confidence: 'confirmed'
  }
];

const PART_TO_SETS = {
  verbal: ['set1', 'set4', 'set8', 'set9', 'set15'],
  nonverbal: ['set1', 'set2', 'set5', 'set7', 'set10', 'set15'],
  english: ['set6'],
  structure: ['set3']
};
