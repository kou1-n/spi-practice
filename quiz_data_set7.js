// テストセンター練習 ─ 第7セット 問題データ

const SET7_QUESTIONS = [
  {
    id: 33,
    number: 1,
    category: "図表の読み取り",
    subcategory: "工場数の産業中分類別構成比",
    question: `<p><strong>データ：</strong> 円グラフ ── 工場数の産業中分類別構成比（総数：5万1,340工場、100.0%）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>産業分類</th><th>構成比（%）</th></tr>
<tr><td>出版・印刷</td><td>22.8</td></tr>
<tr><td>金属製品</td><td>13.0</td></tr>
<tr><td>一般機械</td><td>11.3</td></tr>
<tr><td>電気機械</td><td>9.4</td></tr>
<tr><td>その他の製品</td><td>5.1</td></tr>
<tr><td>衣服・その他の製品</td><td>5.0</td></tr>
<tr><td>プラスチック</td><td>4.9</td></tr>
<tr><td>食料品</td><td>4.6</td></tr>
<tr><td>その他15産業</td><td>23.9</td></tr>
</table></div>
<p><strong>設問：</strong> 金属製品の工場数はおよそいくつか。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "3,996" },
      { label: "B", text: "4,528" },
      { label: "C", text: "5,817" },
      { label: "D", text: "6,674" },
      { label: "E", text: "7,082" }
    ],
    answer: "D",
    explanation: `<p><strong>正答: D</strong></p><h4>解説</h4><p>金属製品の構成比は13.0%。総工場数は51,340。 51,340 × 0.130 = 6,674.2 最も近いのは6,674。</p><h4>よくある計算ミス</h4><p>構成比を23.9%（その他15産業）と取り違えると 51,340 × 0.239 ≒ 12,270 で選択肢外になる</p><div class="tip">時短テク: 5万×13%＝6,500と概算すれば、Dに即決できる。</div>`
  },
  {
    id: 34,
    number: 2,
    category: "図表の読み取り",
    subcategory: "漁業生産量",
    question: `<p><strong>データ：</strong> 表（単位：千トン）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>年次</th><th>遠洋</th><th>沖合い</th><th>沿岸</th><th>小計</th><th>養殖</th><th>計</th></tr>
<tr><td>1970</td><td>3,429</td><td>3,279</td><td>1,889</td><td>8,598</td><td>549</td><td>9,147</td></tr>
<tr><td>1975</td><td>3,168</td><td>4,468</td><td>1,935</td><td>9,573</td><td>773</td><td>10,346</td></tr>
<tr><td>1980</td><td>2,167</td><td>5,705</td><td>2,037</td><td>9,909</td><td>992</td><td>10,900</td></tr>
<tr><td>1985</td><td>2,111</td><td>6,498</td><td>2,268</td><td>10,877</td><td>1,088</td><td>11,965</td></tr>
<tr><td>1990</td><td>1,496</td><td>6,081</td><td>1,992</td><td>9,570</td><td>1,273</td><td>10,843</td></tr>
<tr><td>1993</td><td>1,121</td><td>4,191</td><td>1,912</td><td>7,224</td><td>1,266</td><td>8,489</td></tr>
<tr><td>1994</td><td>1,063</td><td>3,626</td><td>1,810</td><td>6,500</td><td>1,333</td><td>7,833</td></tr>
</table></div>
<p><strong>設問：</strong> 1990年の遠洋漁業の生産量は、漁業生産量全体のおよそ何%か。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "13.6%" },
      { label: "B", text: "13.8%" },
      { label: "C", text: "15.6%" },
      { label: "D", text: "15.8%" },
      { label: "E", text: "29.6%" }
    ],
    answer: "B",
    explanation: `<p><strong>正答: B</strong></p><h4>解説</h4><p>1990年の遠洋漁業の生産量：1,496千トン 1990年の漁業生産量全体（計）：10,843千トン 割合：1,496 / 10,843 = 0.13798... ≒ 13.8%</p><h4>よくある計算ミス</h4><p>分母を遠洋漁業以外の合計にすると 1,496/(10,843-1,496)=16.0% で異なる値になる</p><div class="tip">時短テク: 1,500/10,800 ≒ 14% と概算すればBに絞れる。</div>`
  },
  {
    id: 35,
    number: 3,
    category: "図表の読み取り",
    subcategory: "イギリスにおける職業別パートタイム労働者数の推移",
    question: `<p><strong>データ：</strong> 表（単位：千人）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>年</th><th>職業計</th><th>管理職</th><th>専門職</th><th>専門・技術職</th><th>事務職</th><th>技能職</th><th>警備</th><th>販売</th><th>工場機械</th><th>その他</th></tr>
<tr><td>1991</td><td>5,777</td><td>261</td><td>341</td><td>456</td><td>1,104</td><td>199</td><td>973</td><td>970</td><td>226</td><td>1,108</td></tr>
<tr><td>1992</td><td>5,932</td><td>315</td><td>361</td><td>417</td><td>1,114</td><td>191</td><td>1,051</td><td>1,013</td><td>200</td><td>1,126</td></tr>
<tr><td>1993</td><td>6,004</td><td>344</td><td>354</td><td>436</td><td>1,125</td><td>207</td><td>1,103</td><td>1,018</td><td>199</td><td>1,091</td></tr>
<tr><td>1994</td><td>6,152</td><td>338</td><td>389</td><td>475</td><td>1,131</td><td>199</td><td>1,129</td><td>1,047</td><td>204</td><td>1,122</td></tr>
<tr><td>1995</td><td>6,183</td><td>376</td><td>427</td><td>463</td><td>1,112</td><td>185</td><td>1,125</td><td>1,057</td><td>229</td><td>1,116</td></tr>
<tr><td>1996</td><td>6,410</td><td>359</td><td>424</td><td>509</td><td>1,167</td><td>177</td><td>1,224</td><td>1,125</td><td>228</td><td>1,101</td></tr>
<tr><td>1997</td><td>6,554</td><td>351</td><td>438</td><td>569</td><td>1,179</td><td>188</td><td>1,269</td><td>1,177</td><td>232</td><td>1,091</td></tr>
<tr><td>　男</td><td>1,302</td><td>97</td><td>123</td><td>102</td><td>96</td><td>103</td><td>164</td><td>216</td><td>103</td><td>258</td></tr>
<tr><td>　女</td><td>5,252</td><td>254</td><td>315</td><td>467</td><td>1,083</td><td>85</td><td>1,105</td><td>961</td><td>129</td><td>833</td></tr>
<tr><td>増加率 1991-97</td><td>13.4%</td><td>34.5%</td><td>28.4%</td><td>24.8%</td><td>(X)</td><td>-5.5%</td><td>30.4%</td><td>21.3%</td><td>2.7%</td><td>-1.5%</td></tr>
</table></div>
<p>資料：国家統計局「LFS Historical Supplement-1997」</p>
<p><strong>設問：</strong> 1997年において、管理職パートタイムの労働者数を1とすると、警備はおよそいくつで表せるか。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "0.29" },
      { label: "B", text: "1.75" },
      { label: "C", text: "2.41" },
      { label: "D", text: "3.36" },
      { label: "E", text: "3.62" }
    ],
    answer: "E",
    explanation: `<p><strong>正答: E</strong></p><h4>解説</h4><p>1997年の管理職：351千人 1997年の警備：1,269千人 1,269 / 351 = 3.615... ≒ 3.62</p><h4>よくある計算ミス</h4><p>分子分母を逆にすると 351/1,269=0.277 で全く異なる値になる</p><div class="tip">時短テク: 1,260/350=3.6 と概算すれば即E。</div>`
  },
  {
    id: 36,
    number: 4,
    category: "図表の読み取り",
    subcategory: "百貨店、総合スーパーの商品別年間販売額の構成比",
    question: `<p><strong>データ：</strong> 円グラフ（2つ）</p>
<p><strong>百貨店</strong>（年間販売額：106,702億円）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>商品分類</th><th>構成比（%）</th></tr>
<tr><td>紳士服・洋品</td><td>9.1</td></tr>
<tr><td>婦人・子供服・洋品</td><td>25.9</td></tr>
<tr><td>飲食料品</td><td>23.5</td></tr>
<tr><td>その他の衣料品、身の回り品</td><td>14.6</td></tr>
<tr><td>家具、家電、家庭用品</td><td>9.3</td></tr>
<tr><td>その他の商品</td><td>15.2</td></tr>
<tr><td>食堂、喫茶</td><td>2.5</td></tr>
</table></div>
<p><strong>総合スーパー</strong>（年間販売額：99,567億円）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>商品分類</th><th>構成比（%）</th></tr>
<tr><td>紳士服・洋品</td><td>6.0</td></tr>
<tr><td>婦人・子供服・洋品</td><td>14.2</td></tr>
<tr><td>飲食料品</td><td>45.3</td></tr>
<tr><td>その他の衣料品、身の回り品</td><td>8.6</td></tr>
<tr><td>家具、家電、家庭用品</td><td>11.2</td></tr>
<tr><td>その他の商品</td><td>14.0</td></tr>
<tr><td>食堂、喫茶</td><td>0.6</td></tr>
</table></div>
<p>出典：通商産業大臣官房調査統計部商業統計課「平成9年商業統計表」</p>
<p><strong>設問：</strong> 百貨店の「紳士服・洋品」の年間販売額はおよそ何億円か。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "9,670億円" },
      { label: "B", text: "9,680億円" },
      { label: "C", text: "9,690億円" },
      { label: "D", text: "9,700億円" },
      { label: "E", text: "9,710億円" }
    ],
    answer: "E",
    explanation: `<p><strong>正答: E</strong></p><h4>解説</h4><p>百貨店の年間販売額：106,702億円 紳士服・洋品の構成比：9.1% 106,702 × 0.091 = 9,709.9億円 最も近い選択肢は9,710億円（E）。</p><h4>よくある計算ミス</h4><p>総合スーパーの販売額（146,949億円）を使うと 146,949×0.091=13,372 で別の値になる</p><div class="tip">時短テク: 先に「百貨店」か「総合スーパー」かを確認してから計算。107,000×9%=9,630 で概算可能。</div>`
  },
  {
    id: 37,
    number: 5,
    category: "図表の読み取り",
    subcategory: "1997年のナショナル・リーグの入場者数",
    question: `<p><strong>データ：</strong> 表（単位：人）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>チーム</th><th>ホームゲーム</th><th>ロードゲーム</th></tr>
<tr><td>コロラド</td><td>3,888,453</td><td>2,238,993</td></tr>
<tr><td>アトランタ</td><td>3,464,488</td><td>2,353,270</td></tr>
<tr><td>ロサンゼルス</td><td>3,319,504</td><td>2,579,741</td></tr>
<tr><td>セントルイス</td><td>2,634,014</td><td>2,184,564</td></tr>
<tr><td>フロリダ</td><td>2,364,387</td><td>2,169,072</td></tr>
<tr><td>シカゴ</td><td>2,190,308</td><td>2,374,366</td></tr>
<tr><td>サンディエゴ</td><td>2,089,333</td><td>2,201,113</td></tr>
<tr><td>ヒューストン</td><td>2,046,781</td><td>2,115,796</td></tr>
<tr><td>シンシナティ</td><td>1,785,788</td><td>2,203,678</td></tr>
<tr><td>ニューヨーク</td><td>1,766,174</td><td>2,382,838</td></tr>
<tr><td>サンフランシスコ</td><td>1,690,869</td><td>2,425,975</td></tr>
<tr><td>ピッツバーグ</td><td>1,657,022</td><td>2,132,337</td></tr>
<tr><td>モントリオール</td><td>1,497,609</td><td>2,341,013</td></tr>
<tr><td>フィラデルフィア</td><td>1,490,638</td><td>2,170,872</td></tr>
<tr><td>合計</td><td>31,885,368</td><td>31,873,628</td></tr>
</table></div>
<p><strong>設問：</strong> ホームゲームが1チームにつき81回開催されたとすると、フロリダのホームゲームでの1試合当たりの入場者数はおよそ何人か。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "18,400人" },
      { label: "B", text: "24,700人" },
      { label: "C", text: "26,300人" },
      { label: "D", text: "29,200人" },
      { label: "E", text: "30,800人" }
    ],
    answer: "D",
    explanation: `<p><strong>正答: D</strong></p><h4>解説</h4><p>フロリダのホームゲーム入場者数：2,364,387人 1チーム81試合なので、1試合当たり： 2,364,387 / 81 = 29,189.96... ≒ 29,200人</p><h4>よくある計算ミス</h4><p>試合数を82や80にすると 2,364,387/80=29,555 で異なる値になる</p><div class="tip">時短テク: 2,400,000/81 ≒ 2,400,000/80=30,000 → 29,000台でDに絞れる。</div>`
  },
  {
    id: 38,
    number: 6,
    category: "図表の読み取り",
    subcategory: "わが国の部門別特許出願件数",
    question: `<p><strong>データ：</strong> 表</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>部門</th><th>出願件数</th><th>構成比（%）</th><th>うち外国人</th><th>比率（%）</th></tr>
<tr><td>生活用品</td><td>30,875</td><td>8.7</td><td>3,144</td><td>10.2</td></tr>
<tr><td>処理・操作・輸送</td><td>69,971</td><td>19.7</td><td>4,898</td><td>7.0</td></tr>
<tr><td>化学・冶金・繊維</td><td>(X)</td><td>12.7</td><td>7,030</td><td>15.6</td></tr>
<tr><td>建設</td><td>18,425</td><td>5.2</td><td>367</td><td>2.0</td></tr>
<tr><td>機械工学</td><td>30,836</td><td>8.7</td><td>2,265</td><td>7.3</td></tr>
<tr><td>物理</td><td>82,618</td><td>23.3</td><td>5,822</td><td>7.0</td></tr>
<tr><td>電気</td><td>76,997</td><td>21.7</td><td>5,750</td><td>7.5</td></tr>
<tr><td>合計</td><td>354,665</td><td>100.0</td><td>29,276</td><td>(Y)</td></tr>
</table></div>
<p><strong>設問：</strong> 外国人による全特許出願件数のうち、外国人による物理、電気を合計した特許出願件数の占める割合はおよそ何%か。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "28%" },
      { label: "B", text: "31%" },
      { label: "C", text: "34%" },
      { label: "D", text: "37%" },
      { label: "E", text: "40%" }
    ],
    answer: "E",
    explanation: `<p><strong>正答: E</strong></p><h4>解説</h4><p>外国人による物理の出願件数：5,822 外国人による電気の出願件数：5,750 合計：5,822 + 5,750 = 11,572</p><p>外国人による全特許出願件数：29,276 割合：11,572 / 29,276 = 0.3952... ≒ 39.5% ≒ 40%</p><h4>よくある計算ミス</h4><p>外国人全体ではなく全体（日本人＋外国人）を分母にすると割合が大幅に下がる</p><div class="tip">時短テク: 11,600/29,300 ≒ 12,000/30,000=40% で即E。</div>`
  },
  {
    id: 39,
    number: 7,
    category: "図表の読み取り",
    subcategory: "生産から調理・食事までの各過程での知識",
    question: `<p><strong>データ：</strong> 表</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th></th><th></th><th>総数（人）</th><th>(a) 十分に知っている(%)</th><th>(b) ある程度知っている(%)</th><th>(a+b) 知っている(小計)(%)</th><th>(c) あまり知らない(%)</th><th>(d) ほとんど知らない(%)</th><th>(c+d) 知らない(小計)(%)</th></tr>
<tr><td>地域の産物、旬の食材</td><td></td><td>2,215</td><td>19.7</td><td>59.2</td><td>78.9</td><td>18.5</td><td>2.6</td><td>21.1</td></tr>
<tr><td></td><td>男性</td><td>1,124</td><td>18.1</td><td>55.6</td><td>73.7</td><td>21.8</td><td>4.5</td><td>26.3</td></tr>
<tr><td></td><td>女性</td><td>1,091</td><td>20.9</td><td>62.1</td><td>83.0</td><td>15.8</td><td>1.2</td><td>17.0</td></tr>
<tr><td>食品の表示の見方</td><td></td><td>1,984</td><td>20.1</td><td>53.9</td><td>74.0</td><td>20.1</td><td>6.0</td><td>26.0</td></tr>
<tr><td></td><td>男性</td><td>920</td><td>16.7</td><td>46.7</td><td>63.4</td><td>25.8</td><td>10.8</td><td>36.6</td></tr>
<tr><td></td><td>女性</td><td>1,064</td><td>22.8</td><td>59.6</td><td>82.4</td><td>15.5</td><td>2.1</td><td>17.6</td></tr>
<tr><td>食品の保存の仕方</td><td></td><td>1,862</td><td>18.0</td><td>60.2</td><td>78.1</td><td>18.1</td><td>3.8</td><td>21.9</td></tr>
<tr><td></td><td>男性</td><td>825</td><td>14.2</td><td>51.2</td><td>65.3</td><td>27.0</td><td>7.6</td><td>34.7</td></tr>
<tr><td></td><td>女性</td><td>1,037</td><td>21.0</td><td>67.3</td><td>88.3</td><td>11.0</td><td>0.7</td><td>11.7</td></tr>
<tr><td>調理の仕方</td><td></td><td>1,862</td><td>29.5</td><td>45.4</td><td>75.0</td><td>17.3</td><td>7.7</td><td>25.0</td></tr>
<tr><td></td><td>男性</td><td>825</td><td>13.3</td><td>39.0</td><td>52.4</td><td>31.3</td><td>16.4</td><td>47.6</td></tr>
<tr><td></td><td>女性</td><td>1,037</td><td>42.4</td><td>50.5</td><td>93.0</td><td>6.2</td><td>0.9</td><td>7.0</td></tr>
<tr><td>なにをどれだけ食べたらよいか</td><td></td><td>2,097</td><td>12.5</td><td>49.2</td><td>61.8</td><td>30.5</td><td>7.7</td><td>38.2</td></tr>
<tr><td></td><td>男性</td><td>927</td><td>8.0</td><td>39.4</td><td>47.4</td><td>38.8</td><td>13.8</td><td>52.6</td></tr>
<tr><td></td><td>女性</td><td>1,170</td><td>16.1</td><td>57.1</td><td>73.2</td><td>23.9</td><td>2.9</td><td>26.8</td></tr>
</table></div>
<p><strong>設問：</strong> 調理の仕方を「知っている」と答えた女性と「知らない」と答えた女性の差は何人か。以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "926人" },
      { label: "B", text: "892人" },
      { label: "C", text: "684人" },
      { label: "D", text: "538人" },
      { label: "E", text: "460人" }
    ],
    answer: "B",
    explanation: `<p><strong>正答: B</strong></p><h4>解説</h4><p>調理の仕方の女性：総数1,037人 「知っている」（小計）＝93.0% → 1,037 × 0.930 = 964.41人 「知らない」（小計）＝7.0% → 1,037 × 0.070 = 72.59人 差：964.41 - 72.59 = 891.82 ≒ 892人</p><h4>よくある計算ミス</h4><p>「十分に知っている」だけの割合と「知らない」を比較してしまう（小計ではなく内訳を使うミス）</p><div class="tip">時短テク: 差 = 総数 ×（93.0% − 7.0%）= 1,037 × 0.86 = 891.8 で一発計算。</div>`
  },
  {
    id: 40,
    number: 8,
    category: "図表の読み取り",
    subcategory: "情報サービス業における事業所数及び企業数",
    question: `<p><strong>データ：</strong> 表</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>年</th><th>事業所数（所）</th><th>企業数（社）</th></tr>
<tr><td>1987</td><td>3,692</td><td>2,903</td></tr>
<tr><td>1988</td><td>5,627</td><td>4,336</td></tr>
<tr><td>1989</td><td>5,587</td><td>4,262</td></tr>
<tr><td>1990</td><td>7,042</td><td>5,250</td></tr>
<tr><td>1991</td><td>7,096</td><td>5,264</td></tr>
<tr><td>1992</td><td>6,977</td><td>5,088</td></tr>
</table></div>
<p><strong>設問：</strong> 1987年において、情報サービス業の企業数に対する事業所数の割合はおよそいくらか。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "0.8" },
      { label: "B", text: "1.1" },
      { label: "C", text: "1.3" },
      { label: "D", text: "1.6" },
      { label: "E", text: "1.9" }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C</strong></p><h4>解説</h4><p>1987年の事業所数：3,692 1987年の企業数：2,903 割合：3,692 / 2,903 = 1.2718... ≒ 1.3</p><h4>よくある計算ミス</h4><p>分子分母を逆にすると 2,903/3,692=0.786 で全く異なる値になる</p><div class="tip">時短テク: 3,700/2,900 ≒ 1.28 → 1.3で即C。</div>`
  },
  {
    id: 41,
    number: 9,
    category: "図表の読み取り",
    subcategory: "世界のライ麦・大麦・えん麦生産量",
    question: `<p><strong>データ：</strong> 帯グラフ（横棒・100%積み上げ）── 出典：FAO資料により作成</p>
<p><strong>ライ麦</strong>（1,997万t）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>国</th><th>構成比（%）</th></tr>
<tr><td>ポーランド</td><td>25.9</td></tr>
<tr><td>ロシア</td><td>23.9</td></tr>
<tr><td>ドイツ</td><td>21.7</td></tr>
<tr><td>ベラルーシ</td><td>4.7</td></tr>
<tr><td>ウクライナ</td><td>4.6</td></tr>
<tr><td>その他</td><td>19.2</td></tr>
</table></div>
<p><strong>大麦</strong>（1億2,718万t）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>国</th><th>構成比（%）</th></tr>
<tr><td>ドイツ</td><td>10.5</td></tr>
<tr><td>カナダ</td><td>10.4</td></tr>
<tr><td>ロシア</td><td>8.3</td></tr>
<tr><td>フランス</td><td>7.5</td></tr>
<tr><td>スペイン</td><td>5.8</td></tr>
<tr><td>トルコ</td><td>5.3</td></tr>
<tr><td>イギリス</td><td>5.1</td></tr>
<tr><td>ウクライナ</td><td>5.1</td></tr>
<tr><td>その他</td><td>42.0</td></tr>
</table></div>
<p><strong>えん麦</strong>（2,451万t）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>国</th><th>構成比（%）</th></tr>
<tr><td>ロシア</td><td>17.9</td></tr>
<tr><td>カナダ</td><td>14.9</td></tr>
<tr><td>オーストラリア</td><td>8.7</td></tr>
<tr><td>アメリカ合衆国</td><td>6.0</td></tr>
<tr><td>ポーランド</td><td>5.9</td></tr>
<tr><td>ドイツ</td><td>5.5</td></tr>
<tr><td>その他</td><td>41.1</td></tr>
</table></div>
<p><strong>設問：</strong> ロシアのえん麦の生産量を1とすると、同国の大麦の生産量はおよそいくつで表されるか。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "1.7" },
      { label: "B", text: "2.1" },
      { label: "C", text: "2.4" },
      { label: "D", text: "2.8" },
      { label: "E", text: "3.1" }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C</strong></p><h4>解説</h4><p>ロシアのえん麦の生産量：2,451万t × 17.9% = 438.729万t ロシアの大麦の生産量：12,718万t × 8.3% = 1,055.594万t 比：1,055.594 / 438.729 = 2.406... ≒ 2.4</p><h4>よくある計算ミス</h4><p>全世界の生産量とロシアの生産量を取り違える（構成比を掛け忘れる）</p><div class="tip">時短テク: 先に構成比の比を概算：(12,718×8.3)/(2,451×17.9) ≒ (12,700×8)/(2,450×18) ≒ 101,600/44,100 ≒ 2.3。</div>`
  },
  {
    id: 42,
    number: 10,
    category: "図表の読み取り",
    subcategory: "人口構成割合の変化",
    question: `<p><strong>データ：</strong> 円グラフ（3つ）</p>
<p><strong>1950年</strong>（総人口：84,115千人）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>区分</th><th>割合（%）</th></tr>
<tr><td>年少人口（0歳〜14歳）</td><td>35.4</td></tr>
<tr><td>生産年齢人口（15歳〜39歳）</td><td>39.4</td></tr>
<tr><td>生産年齢人口（40歳〜64歳）</td><td>20.3</td></tr>
<tr><td>老年人口（65歳以上）</td><td>4.9</td></tr>
</table></div>
<p><strong>1980年</strong>（総人口：117,060千人）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>区分</th><th>割合（%）</th></tr>
<tr><td>年少人口（0歳〜14歳）</td><td>23.5</td></tr>
<tr><td>生産年齢人口（15歳〜39歳）</td><td>38.6</td></tr>
<tr><td>生産年齢人口（40歳〜64歳）</td><td>28.8</td></tr>
<tr><td>老年人口（65歳以上）</td><td>9.1</td></tr>
</table></div>
<p><strong>2012年</strong>（総人口：127,515千人）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>区分</th><th>割合（%）</th></tr>
<tr><td>年少人口（0歳〜14歳）</td><td>13.0</td></tr>
<tr><td>生産年齢人口（15歳〜39歳）</td><td>28.7</td></tr>
<tr><td>生産年齢人口（40歳〜64歳）</td><td>34.2</td></tr>
<tr><td>老年人口（65歳以上）</td><td>24.1</td></tr>
</table></div>
<p><strong>設問：</strong> 1950年の年少人口数をXとおくと、2012年の同人口数はおよそどのように表されるか。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "0.29X" },
      { label: "B", text: "0.37X" },
      { label: "C", text: "0.56X" },
      { label: "D", text: "1.81X" },
      { label: "E", text: "2.72X" }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C</strong></p><h4>解説</h4><p>1950年の年少人口：84,115千人 × 35.4% = 29,776.71千人 = X 2012年の年少人口：127,515千人 × 13.0% = 16,576.95千人 比：16,576.95 / 29,776.71 = 0.5568... ≒ 0.56X</p><h4>よくある計算ミス</h4><p>総人口の比（127,515/84,115=1.52）と年少人口の比（0.56）を混同してしまう</p><div class="tip">時短テク: (127,500×13)/(84,100×35.4) ≒ (127×13)/(84×35) ≒ 1,651/2,940 ≒ 0.56 で即C。</div>`
  },
  {
    id: 43,
    number: 11,
    category: "図表の読み取り",
    subcategory: "香港の対日貿易額の推移",
    question: `<p><strong>データ：</strong> 表（単位：100万香港ドル）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th></th><th>1989年</th><th>90</th><th>91</th><th>92</th><th>93</th></tr>
<tr><td>輸出</td><td>35,295</td><td>36,455</td><td>41,240</td><td>48,462</td><td>53,833</td></tr>
<tr><td>　地場輸出</td><td>13,026</td><td>12,079</td><td>11,666</td><td>10,997</td><td>9,677</td></tr>
<tr><td>　再輸出</td><td>22,269</td><td>24,376</td><td>29,574</td><td>37,465</td><td>44,156</td></tr>
<tr><td>輸入</td><td>93,202</td><td>103,362</td><td>127,402</td><td>166,191</td><td>178,034</td></tr>
<tr><td>貿易収入</td><td>▲57,907</td><td>▲66,907</td><td>▲86,162</td><td>▲117,729</td><td>▲124,201</td></tr>
</table></div>
<p><strong>設問：</strong> 1993年における香港の対日輸入額は、前年と比較しておよそ何%増加したか。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "7.1%" },
      { label: "B", text: "7.9%" },
      { label: "C", text: "10.7%" },
      { label: "D", text: "10.9%" },
      { label: "E", text: "19.7%" }
    ],
    answer: "A",
    explanation: `<p><strong>正答: A</strong></p><h4>解説</h4><p>1993年の輸入額：178,034（100万香港ドル） 1992年の輸入額：166,191（100万香港ドル） 増加率：(178,034 - 166,191) / 166,191 = 11,843 / 166,191 = 0.07126... ≒ 7.1%</p><h4>よくある計算ミス</h4><p>分母を当年（178,034）にすると 11,843/178,034=6.7% で異なる値になる</p><div class="tip">時短テク: 12,000/166,000 ≒ 7.2% と概算すればAに即決可能。</div>`
  },
  {
    id: 44,
    number: 12,
    category: "図表の読み取り",
    subcategory: "主要国・地域の全世界輸出入に占める割合",
    question: `<p><strong>データ：</strong> 円グラフ（4つ）</p>
<p><strong>輸出 1988年</strong>（2.7兆ドル）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>地域</th><th>割合（%）</th></tr>
<tr><td>NIES</td><td>10</td></tr>
<tr><td>中国</td><td>2</td></tr>
<tr><td>日本</td><td>12</td></tr>
<tr><td>EU</td><td>38</td></tr>
<tr><td>ASEAN4</td><td>4</td></tr>
<tr><td>中南米</td><td>4</td></tr>
<tr><td>アメリカ</td><td>16</td></tr>
<tr><td>その他</td><td>24</td></tr>
</table></div>
<p><strong>輸出 1993年</strong>（3.7兆ドル）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>地域</th><th>割合（%）</th></tr>
<tr><td>NIES</td><td>10</td></tr>
<tr><td>中国</td><td>4</td></tr>
<tr><td>日本</td><td>10</td></tr>
<tr><td>EU</td><td>35</td></tr>
<tr><td>ASEAN4</td><td>4</td></tr>
<tr><td>中南米</td><td>2</td></tr>
<tr><td>アメリカ</td><td>13</td></tr>
<tr><td>その他</td><td>22</td></tr>
</table></div>
<p><strong>輸入 1988年</strong>（2.8兆ドル）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>地域</th><th>割合（%）</th></tr>
<tr><td>NIES</td><td>7</td></tr>
<tr><td>中国</td><td>2</td></tr>
<tr><td>日本</td><td>7</td></tr>
<tr><td>EU</td><td>39</td></tr>
<tr><td>ASEAN4</td><td>3</td></tr>
<tr><td>中南米</td><td>2</td></tr>
<tr><td>アメリカ</td><td>16</td></tr>
<tr><td>その他</td><td>24</td></tr>
</table></div>
<p><strong>輸入 1993年</strong>（3.8兆ドル）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>地域</th><th>割合（%）</th></tr>
<tr><td>NIES</td><td>6</td></tr>
<tr><td>中国</td><td>4</td></tr>
<tr><td>日本</td><td>10</td></tr>
<tr><td>EU</td><td>34</td></tr>
<tr><td>ASEAN4</td><td>5</td></tr>
<tr><td>中南米</td><td>3</td></tr>
<tr><td>アメリカ</td><td>16</td></tr>
<tr><td>その他</td><td>22</td></tr>
</table></div>
<p>注1）世界の輸出総額と輸入総額は統計の取り方が異なるため数値は一致しない。<br>
注2）ASEAN4とは、タイ、フィリピン、インドネシア、マレーシアをいう。<br>
資料：IMF「DOT」、台湾「自由中国之工業」</p>
<p><strong>設問：</strong> 1993年のアメリカの輸入額を100とおくと、輸入額全体はおよそいくらか。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "517" },
      { label: "B", text: "521" },
      { label: "C", text: "549" },
      { label: "D", text: "564" },
      { label: "E", text: "625" }
    ],
    answer: "E",
    explanation: `<p><strong>正答: E</strong></p><h4>解説</h4><p>1993年の輸入総額：3.8兆ドル 1993年のアメリカの輸入割合：16% アメリカの輸入額：3.8兆 × 0.16 = 0.608兆ドル アメリカを100とすると：輸入額全体 = 3.8 / 0.608 × 100 = 625</p><h4>よくある計算ミス</h4><p>輸出と輸入の割合を取り違えると基準値が変わる</p><div class="tip">時短テク: 100/16×100=625。1/0.16=6.25 と覚えれば即E。</div>`
  },
  {
    id: 45,
    number: 13,
    category: "図表の読み取り",
    subcategory: "パソコン総出荷金額の推移（周辺機器含む）",
    question: `<p><strong>データ：</strong> 表（単位：億円）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>年度</th><th>総出荷金額</th><th>国内出荷金額</th><th>輸出金額</th></tr>
<tr><td>1987</td><td>7,381</td><td>5,263</td><td>2,118</td></tr>
<tr><td>1988</td><td>8,677</td><td>6,490</td><td>2,187</td></tr>
<tr><td>1989</td><td>10,771</td><td>7,881</td><td>2,891</td></tr>
<tr><td>1990</td><td>12,627</td><td>9,248</td><td>3,379</td></tr>
<tr><td>1991</td><td>11,729</td><td>8,975</td><td>2,754</td></tr>
<tr><td>1992</td><td>10,569</td><td>7,848</td><td>2,721</td></tr>
<tr><td>1993</td><td>13,673</td><td>10,356</td><td>3,317</td></tr>
<tr><td>1994</td><td>16,443</td><td>12,651</td><td>3,792</td></tr>
<tr><td>1995</td><td>22,238</td><td>18,115</td><td>4,122</td></tr>
<tr><td>1996</td><td>28,314</td><td>21,781</td><td>6,533</td></tr>
</table></div>
<p><strong>設問：</strong> 総出荷金額に対して占める国内出荷金額の割合において、1995年度は1987年度のおよそ何倍か。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "0.8倍" },
      { label: "B", text: "0.9倍" },
      { label: "C", text: "1.0倍" },
      { label: "D", text: "1.1倍" },
      { label: "E", text: "1.2倍" }
    ],
    answer: "D",
    explanation: `<p><strong>正答: D</strong></p><h4>解説</h4><p>1987年度の国内/総出荷比率：5,263 / 7,381 = 0.7131 1995年度の国内/総出荷比率：18,115 / 22,238 = 0.8145 倍率：0.8145 / 0.7131 = 1.1422... ≒ 1.1倍</p><h4>よくある計算ミス</h4><p>国内出荷金額の倍率（18,115/5,263=3.44）を答えてしまう（比率の倍率が問われている）</p><div class="tip">時短テク: 比率を先に概算（71%→81%）→ 81/71 ≒ 1.14 で即D。</div>`
  },
  {
    id: 46,
    number: 14,
    category: "図表の読み取り",
    subcategory: "生産から調理・食事までの各過程での知識（2）",
    question: `<p><strong>データ：</strong> ※問7と同じデータ</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th></th><th></th><th>総数（人）</th><th>(a) 十分に知っている(%)</th><th>(b) ある程度知っている(%)</th><th>(a+b) 知っている(小計)(%)</th><th>(c) あまり知らない(%)</th><th>(d) ほとんど知らない(%)</th><th>(c+d) 知らない(小計)(%)</th></tr>
<tr><td>地域の産物、旬の食材</td><td></td><td>2,215</td><td>19.7</td><td>59.2</td><td>78.9</td><td>18.5</td><td>2.6</td><td>21.1</td></tr>
<tr><td></td><td>男性</td><td>1,124</td><td>18.1</td><td>55.6</td><td>73.7</td><td>21.8</td><td>4.5</td><td>26.3</td></tr>
<tr><td></td><td>女性</td><td>1,091</td><td>20.9</td><td>62.1</td><td>83.0</td><td>15.8</td><td>1.2</td><td>17.0</td></tr>
<tr><td>食品の表示の見方</td><td></td><td>1,984</td><td>20.1</td><td>53.9</td><td>74.0</td><td>20.1</td><td>6.0</td><td>26.0</td></tr>
<tr><td></td><td>男性</td><td>920</td><td>16.7</td><td>46.7</td><td>63.4</td><td>25.8</td><td>10.8</td><td>36.6</td></tr>
<tr><td></td><td>女性</td><td>1,064</td><td>22.8</td><td>59.6</td><td>82.4</td><td>15.5</td><td>2.1</td><td>17.6</td></tr>
<tr><td>食品の保存の仕方</td><td></td><td>1,862</td><td>18.0</td><td>60.2</td><td>78.1</td><td>18.1</td><td>3.8</td><td>21.9</td></tr>
<tr><td></td><td>男性</td><td>825</td><td>14.2</td><td>51.2</td><td>65.3</td><td>27.0</td><td>7.6</td><td>34.7</td></tr>
<tr><td></td><td>女性</td><td>1,037</td><td>21.0</td><td>67.3</td><td>88.3</td><td>11.0</td><td>0.7</td><td>11.7</td></tr>
<tr><td>調理の仕方</td><td></td><td>1,862</td><td>29.5</td><td>45.4</td><td>75.0</td><td>17.3</td><td>7.7</td><td>25.0</td></tr>
<tr><td></td><td>男性</td><td>825</td><td>13.3</td><td>39.0</td><td>52.4</td><td>31.3</td><td>16.4</td><td>47.6</td></tr>
<tr><td></td><td>女性</td><td>1,037</td><td>42.4</td><td>50.5</td><td>93.0</td><td>6.2</td><td>0.9</td><td>7.0</td></tr>
<tr><td>なにをどれだけ食べたらよいか</td><td></td><td>2,097</td><td>12.5</td><td>49.2</td><td>61.8</td><td>30.5</td><td>7.7</td><td>38.2</td></tr>
<tr><td></td><td>男性</td><td>927</td><td>8.0</td><td>39.4</td><td>47.4</td><td>38.8</td><td>13.8</td><td>52.6</td></tr>
<tr><td></td><td>女性</td><td>1,170</td><td>16.1</td><td>57.1</td><td>73.2</td><td>23.9</td><td>2.9</td><td>26.8</td></tr>
</table></div>
<p><strong>設問：</strong> 男性について、「十分に知っている」と答えた人数と「ほとんど知らない」と答えた人数の差が最も小さい項目はどれか。以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "地域の産物、旬の食材" },
      { label: "B", text: "食品の表示の見方" },
      { label: "C", text: "食品の保存の仕方" },
      { label: "D", text: "調理の仕方" },
      { label: "E", text: "なにをどれだけ食べたらよいか" }
    ],
    answer: "D",
    explanation: `<p><strong>正答: D</strong></p><h4>解説</h4><p>各項目の男性について、「十分に知っている」人数と「ほとんど知らない」人数の差（絶対値）を計算：</p><ul><li>地域の産物：十分 = 1,124 × 18.1% = 203.4人、ほとんど = 1,124 × 4.5% = 50.6人、差 = 152.8人</li><li>食品の表示：十分 = 920 × 16.7% = 153.6人、ほとんど = 920 × 10.8% = 99.4人、差 = 54.3人</li><li>食品の保存：十分 = 825 × 14.2% = 117.2人、ほとんど = 825 × 7.6% = 62.7人、差 = 54.5人</li><li>調理の仕方：十分 = 825 × 13.3% = 109.7人、ほとんど = 825 × 16.4% = 135.3人、差 = 25.6人</li><li>なにをどれだけ：十分 = 927 × 8.0% = 74.2人、ほとんど = 927 × 13.8% = 127.9人、差 = 53.7人</li></ul><p>差が最も小さいのは「調理の仕方」（25.6人）。</p><h4>よくある計算ミス</h4><p>割合の差（%同士の引き算）だけで判断すると、母数の違いにより実際の人数差と順位が変わる場合がある</p><div class="tip">時短テク: 割合の差が小さく、かつ「十分」<「ほとんど」の項目は差が小さくなりやすい。調理の仕方は差が−3.1%で絶対値最小。</div>`
  },
  {
    id: 47,
    number: 15,
    category: "図表の読み取り",
    subcategory: "主要国の国内総生産",
    question: `<p><strong>データ：</strong> 表</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>国名</th><th></th><th>O国</th><th>P国</th><th>Q国</th><th>R国</th><th>S国</th></tr>
<tr><td>年度</td><td></td><td>1999 / 2009</td><td>1999 / 2009</td><td>1999 / 2009</td><td>1999 / 2009</td><td>1999 / 2009</td></tr>
<tr><td>国内総生産（億ドル）</td><td></td><td>1,217 / 6,940</td><td>7,963 / 18,872</td><td>1,112 / 2,468</td><td>1,238 / 5,141</td><td>1,157 / 3,821</td></tr>
<tr><td>経済活動別</td><td>第一次産業</td><td>11.4 / 4.7</td><td>3.2 / 2.9</td><td>3.0 / 2.5</td><td>4.1 / 2.8</td><td>7.0 / 4.9</td></tr>
<tr><td>国内総生産</td><td>第二次産業</td><td>36.5 / 35.4</td><td>35.9 / 33.1</td><td>41.8 / 39.1</td><td>50.9 / 47.4</td><td>44.9 / 39.6</td></tr>
<tr><td>構成比（%）</td><td>第三次産業</td><td>52.1 / 59.9</td><td>60.9 / 64.0</td><td>55.2 / 58.4</td><td>45.0 / 49.9</td><td>48.0 / 55.5</td></tr>
</table></div>
<p><strong>設問：</strong> 1999〜2009年度の10年間で、国内総生産の成長率が最も大きいのはどこの国か。以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "O国" },
      { label: "B", text: "P国" },
      { label: "C", text: "Q国" },
      { label: "D", text: "R国" },
      { label: "E", text: "S国" }
    ],
    answer: "A",
    explanation: `<p><strong>正答: A</strong></p><h4>解説</h4><p>各国の成長率（2009年GDP / 1999年GDP）：</p><ul><li>O国：6,940 / 1,217 = 5.70倍（470%増）</li><li>P国：18,872 / 7,963 = 2.37倍（137%増）</li><li>Q国：2,468 / 1,112 = 2.22倍（122%増）</li><li>R国：5,141 / 1,238 = 4.15倍（315%増）</li><li>S国：3,821 / 1,157 = 3.30倍（230%増）</li></ul><p>最も成長率が大きいのはO国（5.70倍）。</p><h4>よくある計算ミス</h4><p>GDP額が最大のP国（18,872）を最も成長したと勘違いしてしまう（額と成長率は別）</p><div class="tip">時短テク: 分子/分母の比をざっと見る。O国は約7,000/1,200 ≒ 5.8倍で圧倒的。</div>`
  },
  {
    id: 48,
    number: 16,
    category: "図表の読み取り",
    subcategory: "世界の資金需要",
    question: `<p><strong>データ：</strong> 表（単位：10億ドル）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th></th><th>1992</th><th>1993</th><th>1994</th><th>1994・1月</th><th>1995・4月</th></tr>
<tr><td>OECD地域</td><td>546.2</td><td>714.0</td><td>853.3</td><td>249.2</td><td>311.1</td></tr>
<tr><td>発展途上国</td><td>36.8</td><td>68.9</td><td>85.8</td><td>24.4</td><td>21.1</td></tr>
<tr><td>中・東欧諸国</td><td>1.5</td><td>6.4</td><td>3.8</td><td>0.6</td><td>1.1</td></tr>
<tr><td>その他</td><td>25.2</td><td>29.3</td><td>24.7</td><td>9.5</td><td>6.9</td></tr>
<tr><td>合計</td><td>609.7</td><td>818.6</td><td>967.6</td><td>283.7</td><td>340.2</td></tr>
</table></div>
<p>資料：OECD「Financial Markets Trends」</p>
<p><strong>設問：</strong> 1992年の発展途上国の資金需要は翌年およそ何%増加したか。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "46.6%" },
      { label: "B", text: "53.4%" },
      { label: "C", text: "65.9%" },
      { label: "D", text: "78.1%" },
      { label: "E", text: "87.2%" }
    ],
    answer: "E",
    explanation: `<p><strong>正答: E</strong></p><h4>解説</h4><p>1992年の発展途上国：36.8（10億ドル） 1993年の発展途上国：68.9（10億ドル） 増加率：(68.9 - 36.8) / 36.8 = 32.1 / 36.8 = 0.8723... ≒ 87.2%</p><h4>よくある計算ミス</h4><p>分母を68.9にすると 32.1/68.9=46.6% で大きく異なる</p><div class="tip">時短テク: 32/37 ≒ 86% と概算すればEに即決可能。</div>`
  },
  {
    id: 49,
    number: 17,
    category: "図表の読み取り",
    subcategory: "年齢別海外在住邦人数",
    question: `<p><strong>データ：</strong> 横棒グラフ（積み上げ：男性＋女性）（単位：千人）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>年齢</th><th>男性</th><th>女性</th><th>合計</th></tr>
<tr><td>20歳未満</td><td>151</td><td>147</td><td>298</td></tr>
<tr><td>20歳代</td><td>66</td><td>88</td><td>154</td></tr>
<tr><td>30歳代</td><td>103</td><td>145</td><td>248</td></tr>
<tr><td>40歳代</td><td>122</td><td>155</td><td>277</td></tr>
<tr><td>50歳代</td><td>92</td><td>74</td><td>166</td></tr>
<tr><td>60歳以上</td><td>101</td><td>76</td><td>177</td></tr>
</table></div>
<p><strong>設問：</strong> 50歳代以上の海外在住邦人全体に占める女性の割合はおよそいくらか。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "40.3%" },
      { label: "B", text: "41.8%" },
      { label: "C", text: "42.9%" },
      { label: "D", text: "43.7%" },
      { label: "E", text: "44.6%" }
    ],
    answer: "D",
    explanation: `<p><strong>正答: D</strong></p><h4>解説</h4><p>50歳代以上の合計：166 + 177 = 343千人 50歳代以上の女性：74 + 76 = 150千人 50歳代以上の中での女性の割合：150 / 343 = 0.4373... ≒ 43.7%</p><h4>よくある計算ミス</h4><p>50歳代のみ（60歳以上を含めない）で計算すると 74/166=44.6% で微妙にずれる</p><div class="tip">時短テク: 150/343 ≒ 150/350=42.9% → 43%台でDに絞れる。</div>`
  },
  {
    id: 50,
    number: 18,
    category: "図表の読み取り",
    subcategory: "Q市の気温の推移",
    question: `<p><strong>データ：</strong> 折れ線グラフ（2本）── 最高気温（点線）と最低気温（実線）（単位：℃）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>月</th><th>最高気温</th><th>最低気温</th></tr>
<tr><td>1月</td><td>9.5</td><td>0.5</td></tr>
<tr><td>2月</td><td>10.0</td><td>1.2</td></tr>
<tr><td>3月</td><td>13.0</td><td>4.2</td></tr>
<tr><td>4月</td><td>18.4</td><td>9.8</td></tr>
<tr><td>5月</td><td>22.7</td><td>14.5</td></tr>
<tr><td>6月</td><td>25.3</td><td>18.4</td></tr>
<tr><td>7月</td><td>28.9</td><td>22.2</td></tr>
<tr><td>8月</td><td>30.8</td><td>23.6</td></tr>
<tr><td>9月</td><td>26.7</td><td>19.9</td></tr>
<tr><td>10月</td><td>21.2</td><td>13.9</td></tr>
<tr><td>11月</td><td>16.6</td><td>8.4</td></tr>
<tr><td>12月</td><td>12.1</td><td>3.3</td></tr>
</table></div>
<p><strong>設問：</strong> 最高気温が5月の最低気温を下回る月のうち、最低気温が3℃以上の月はいくつあるか。以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "1ヶ月" },
      { label: "B", text: "2ヶ月" },
      { label: "C", text: "3ヶ月" },
      { label: "D", text: "4ヶ月" },
      { label: "E", text: "5ヶ月" }
    ],
    answer: "B",
    explanation: `<p><strong>正答: B</strong></p><h4>解説</h4><p>5月の最低気温 = 14.5℃ 最高気温が14.5℃を下回る月を探す：</p><ul><li>1月：9.5 < 14.5 → 該当　最低気温0.5 < 3 → 不該当</li><li>2月：10.0 < 14.5 → 該当　最低気温1.2 < 3 → 不該当</li><li>3月：13.0 < 14.5 → 該当　最低気温4.2 ≥ 3 → 該当</li><li>4月：18.4 > 14.5 → 不該当</li><li>11月：16.6 > 14.5 → 不該当</li><li>12月：12.1 < 14.5 → 該当　最低気温3.3 ≥ 3 → 該当</li></ul><p>両方の条件を満たす月：3月と12月の2ヶ月</p><h4>よくある計算ミス</h4><p>「最高気温が14.5未満」の条件だけで判定し、最低気温の条件を忘れると1月・2月も含めて4ヶ月になる</p><div class="tip">時短テク: 2つの条件を順に適用。まず最高気温で絞り（1,2,3,12月）、次に最低気温で絞る（3,12月）。</div>`
  },
  {
    id: 51,
    number: 19,
    category: "図表の読み取り",
    subcategory: "各社の総資産利益率推移",
    question: `<p><strong>データ：</strong> 折れ線グラフ（2本）── X社（実線）とY社（点線）（単位：%）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>年</th><th>X社</th><th>Y社</th></tr>
<tr><td>2017</td><td>-0.8</td><td>2.5</td></tr>
<tr><td>2018</td><td>1.4</td><td>-0.9</td></tr>
<tr><td>2019</td><td>2.3</td><td>3.1</td></tr>
<tr><td>2020</td><td>4.6</td><td>3.9</td></tr>
<tr><td>2021</td><td>4.0</td><td>4.3</td></tr>
</table></div>
<p><strong>設問：</strong> 2017年から2021年のうち、X社とY社の総資産利益率の平均が1%を超えている年はいくつあるか。以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "1年" },
      { label: "B", text: "2年" },
      { label: "C", text: "3年" },
      { label: "D", text: "4年" },
      { label: "E", text: "5年" }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C</strong></p><h4>解説</h4><p>X社とY社の平均：</p><ul><li>2017年：(-0.8 + 2.5) / 2 = 0.85% → 1%以下</li><li>2018年：(1.4 + (-0.9)) / 2 = 0.25% → 1%以下</li><li>2019年：(2.3 + 3.1) / 2 = 2.70% → 1%超</li><li>2020年：(4.6 + 3.9) / 2 = 4.25% → 1%超</li><li>2021年：(4.0 + 4.3) / 2 = 4.15% → 1%超</li></ul><p>1%を超えている年は3年（2019、2020、2021）。</p><h4>よくある計算ミス</h4><p>マイナス値の平均計算で符号を間違え、2018年を (1.4+0.9)/2=1.15% としてしまう</p><div class="tip">時短テク: マイナス値がある年は平均が下がる。各年の合計が2以上なら平均1%超。</div>`
  },
  {
    id: 52,
    number: 20,
    category: "図表の読み取り",
    subcategory: "職種別実態調査の対象事業所数",
    question: `<p><strong>データ：</strong> 表（単位：所）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>産業</th><th>規模計</th><th>3,000人以上</th><th>3,000人未満 1,000人以上</th><th>1,000人未満 500人以上</th><th>500人未満 100人以上</th><th>100人未満 50人以上</th></tr>
<tr><td>産業計</td><td>9,971</td><td>1,537</td><td>1,235</td><td>1,193</td><td>4,240</td><td>1,766</td></tr>
<tr><td>漁業</td><td>6</td><td>0</td><td>0</td><td>0</td><td>5</td><td>1</td></tr>
<tr><td>建設業</td><td>806</td><td>140</td><td>111</td><td>109</td><td>230</td><td>216</td></tr>
<tr><td>製造業</td><td>4,702</td><td>526</td><td>561</td><td>575</td><td>2,085</td><td>955</td></tr>
<tr><td>情報通信業</td><td>1,914</td><td>455</td><td>255</td><td>204</td><td>686</td><td>314</td></tr>
<tr><td>卸売業、小売業</td><td>1,084</td><td>132</td><td>132</td><td>148</td><td>510</td><td>162</td></tr>
<tr><td>金融業</td><td>534</td><td>183</td><td>86</td><td>60</td><td>176</td><td>29</td></tr>
<tr><td>医療、福祉業</td><td>925</td><td>101</td><td>90</td><td>97</td><td>548</td><td>89</td></tr>
</table></div>
<p><strong>設問：</strong> 次のうち、表から明らかに正しいといえるものはどれか。以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "どの産業区分でも、100人以上500人未満規模の事業所数が最も多い。" },
      { label: "B", text: "調査対象事業所数において、金融業は製造業のおよそ8.8倍である。" },
      { label: "C", text: "建設業のうち、調査対象事業所数が一番少ないのは1,000人以上3,000人未満規模である。" },
      { label: "D", text: "製造業規模計に占める100人以上500人未満事業所数の割合は、卸売業、小売業に占める同規模の割合より高い。" },
      { label: "E", text: "規模計に占める3,000人以上規模の割合が17%に最も近いのは、建設業である。" }
    ],
    answer: "E",
    explanation: `<p><strong>正答: E</strong></p><h4>解説</h4><p>各選択肢を検証：</p><p>A. 「どの産業区分でも100人以上500人未満が最多」→ 金融業では500人未満100人以上は176だが、3,000人以上は183で183 > 176。不正。</p><p>B. 「金融業は製造業のおよそ8.8倍」→ 534 / 4,702 = 0.114。逆（製造業が金融業の8.8倍）なら4,702/534=8.81。ただし問題は「金融業は製造業の8.8倍」と言っているので不正。</p><p>C. 「建設業で最も少ないのは1,000人以上3,000人未満」→ 建設業：3,000人以上=140、1,000〜3,000=111、500〜1,000=109、100〜500=230、50〜100=216。最少は109（500〜1,000）で111（1,000〜3,000）ではない。不正。</p><p>D. 「製造業の100〜500の割合 vs 卸売業小売業の同割合」→ 製造業：2,085/4,702=44.3%、卸売業小売業：510/1,084=47.0%。製造業の方が低い。不正。</p><p>E. 「3,000人以上の割合が17%に最も近いのは建設業」→ 建設業：140/806=17.4%。他の産業：製造業526/4,702=11.2%、情報通信455/1,914=23.8%、卸売132/1,084=12.2%、金融183/534=34.3%、医療101/925=10.9%。17%に最も近いのは建設業（17.4%）。正。</p><h4>よくある計算ミス</h4><p>選択肢Cで最少を探す際、近い値（109と111）を見間違えてしまう</p><div class="tip">時短テク: 正誤判定問題では、計算が簡単な選択肢から検証する。Eは140/806 ≒ 17.4% で即計算可能。</div>`
  },
  {
    id: 53,
    number: 21,
    category: "図表の読み取り",
    subcategory: "X月の製材用素材状況",
    question: `<p><strong>データ：</strong> 表（単位：千m\u00B3）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>全国・都道府県</th><th>入荷量 当月値</th><th>入荷量 対前月差</th><th>消費量 当月値</th><th>消費量 対前月差</th><th>在庫量 当月値</th><th>在庫量 対前月差</th></tr>
<tr><td>全国</td><td>2,069</td><td>162</td><td>2,076</td><td>182</td><td>4,793</td><td>△7</td></tr>
<tr><td>北海道</td><td>204</td><td>7</td><td>240</td><td>36</td><td>810</td><td>△36</td></tr>
<tr><td>宮城</td><td>25</td><td>4</td><td>22</td><td>0</td><td>207</td><td>3</td></tr>
<tr><td>東京</td><td>79</td><td>4</td><td>68</td><td>7</td><td>152</td><td>11</td></tr>
<tr><td>愛知</td><td>26</td><td>3</td><td>31</td><td>3</td><td>66</td><td>△5</td></tr>
<tr><td>大阪</td><td>74</td><td>7</td><td>66</td><td>7</td><td>137</td><td>8</td></tr>
<tr><td>福岡</td><td>25</td><td>3</td><td>22</td><td>1</td><td>44</td><td>3</td></tr>
<tr><td>沖縄</td><td>84</td><td>20</td><td>90</td><td>7</td><td>255</td><td>△6</td></tr>
</table></div>
<p>注：今月の在庫量＝前月の在庫量＋今月の入荷量−今月の消費量 とする</p>
<p><strong>設問：</strong> 在庫量がX月同様の数量で変化すると仮定した場合、宮城と沖縄の在庫量が初めて逆転するのは何ヶ月後か。正しいものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "2ヶ月後" },
      { label: "B", text: "3ヶ月後" },
      { label: "C", text: "4ヶ月後" },
      { label: "D", text: "5ヶ月後" },
      { label: "E", text: "6ヶ月後" }
    ],
    answer: "E",
    explanation: `<p><strong>正答: E</strong></p><h4>解説</h4><p>宮城の在庫量：当月207、対前月差+3（毎月3ずつ増加） 沖縄の在庫量：当月255、対前月差-6（毎月6ずつ減少）</p><p>差は毎月 3 + 6 = 9 ずつ縮まる。 当月の差：255 - 207 = 48 逆転に必要な月数：48 / 9 = 5.33... 5ヶ月後：宮城 = 207 + 3×5 = 222、沖縄 = 255 - 6×5 = 225（まだ逆転していない） 6ヶ月後：宮城 = 207 + 3×6 = 225、沖縄 = 255 - 6×6 = 219（宮城 > 沖縄、逆転）</p><p>初めて逆転するのは6ヶ月後。</p><h4>よくある計算ミス</h4><p>48/9=5.33を切り捨てて5ヶ月後と答えてしまう（5ヶ月後はまだ逆転していない）</p><div class="tip">時短テク: 割り算の商が割り切れないときは切り上げ。5.33→6ヶ月後で即E。</div>`
  },
  {
    id: 54,
    number: 22,
    category: "図表の読み取り",
    subcategory: "携帯電話各グループの加入台数シェア",
    question: `<p><strong>データ：</strong> 表（単位：千台、%）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th></th><th>携帯電話合計</th><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th><th>F</th></tr>
<tr><td>全国</td><td>18,168.4</td><td>9,145.0</td><td>3,196.4</td><td>1,702.9</td><td>1,745.8</td><td>1,845.9</td><td>532.4</td></tr>
<tr><td>シェア</td><td>100.0</td><td>50.3</td><td>17.6</td><td>9.4</td><td>9.6</td><td>10.2</td><td>2.9</td></tr>
<tr><td>北海道</td><td>747.2</td><td>501.0</td><td>211.2</td><td>-</td><td>-</td><td>-</td><td>35.0</td></tr>
<tr><td>シェア</td><td>100.0</td><td>67.1</td><td>28.3</td><td>-</td><td>-</td><td>-</td><td>4.7</td></tr>
<tr><td>東北</td><td>764.3</td><td>404.0</td><td>296.0</td><td>-</td><td>-</td><td>-</td><td>64.3</td></tr>
<tr><td>シェア</td><td>100.0</td><td>52.9</td><td>38.7</td><td>-</td><td>-</td><td>-</td><td>8.4</td></tr>
<tr><td>首都圏</td><td>6,413.0</td><td>3,801.0</td><td>-</td><td>1,113.9</td><td>670.8</td><td>827.3</td><td>-</td></tr>
<tr><td>シェア</td><td>100.0</td><td>59.3</td><td>-</td><td>17.4</td><td>10.5</td><td>12.9</td><td>-</td></tr>
<tr><td>北陸</td><td>347.2</td><td>188.0</td><td>159.2</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>シェア</td><td>100.0</td><td>54.1</td><td>45.9</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>東海</td><td>2,636.3</td><td>1,026.0</td><td>-</td><td>589.0</td><td>479.3</td><td>542.0</td><td>-</td></tr>
<tr><td>シェア</td><td>100.0</td><td>38.9</td><td>-</td><td>22.3</td><td>18.2</td><td>20.6</td><td>-</td></tr>
<tr><td>関西</td><td>4,120.2</td><td>1,682.0</td><td>1,365.9</td><td>-</td><td>595.7</td><td>476.6</td><td>-</td></tr>
<tr><td>シェア</td><td>100.0</td><td>40.8</td><td>33.2</td><td>-</td><td>14.5</td><td>11.6</td><td>-</td></tr>
<tr><td>中国</td><td>832.6</td><td>364.0</td><td>326.0</td><td>-</td><td>-</td><td>-</td><td>142.6</td></tr>
<tr><td>シェア</td><td>100.0</td><td>43.7</td><td>39.2</td><td>-</td><td>-</td><td>-</td><td>17.1</td></tr>
<tr><td>四国</td><td>453.5</td><td>296.0</td><td>157.5</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>シェア</td><td>100.0</td><td>65.3</td><td>34.7</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>九州</td><td>1,853.0</td><td>882.0</td><td>680.5</td><td>-</td><td>-</td><td>-</td><td>290.5</td></tr>
<tr><td>シェア</td><td>100.0</td><td>47.6</td><td>36.7</td><td>-</td><td>-</td><td>-</td><td>15.7</td></tr>
</table></div>
<p>資料：「モバイルメディアマガジン」1997.3</p>
<p><strong>設問：</strong> A社にとって次のうち一番加入台数をあげている地域はどこか。以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "北海道" },
      { label: "B", text: "東北" },
      { label: "C", text: "北陸" },
      { label: "D", text: "四国" },
      { label: "E", text: "表からはわからない" }
    ],
    answer: "A",
    explanation: `<p><strong>正答: A</strong></p><h4>解説</h4><p>選択肢の4地域のA社加入台数：</p><ul><li>北海道：501.0千台</li><li>東北：404.0千台</li><li>北陸：188.0千台</li><li>四国：296.0千台</li></ul><p>「次のうち」と聞いているので、選択肢A〜Dの4地域から選ぶ。表にA社の各地域データが全て記載されているため、4地域の中で北海道（501.0千台）が最多と判断できる。</p><h4>よくある計算ミス</h4><p>シェア（%）と台数を混同し、シェアが高い地域を選んでしまう</p><div class="tip">時短テク: 台数の大小比較だけなら計算不要。表から直接読み取ればよい。</div>`
  },
  {
    id: 55,
    number: 23,
    category: "図表の読み取り",
    subcategory: "輸出入額の推移",
    question: `<p><strong>データ：</strong> 棒グラフ（単位：千億円）── 輸出額（灰色）と輸入額（黒）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>年</th><th>輸出額</th><th>輸入額</th></tr>
<tr><td>1985</td><td>294</td><td>320</td></tr>
<tr><td>1990</td><td>420</td><td>311</td></tr>
<tr><td>1995</td><td>415</td><td>339</td></tr>
<tr><td>2000</td><td>415</td><td>315</td></tr>
<tr><td>2005</td><td>517</td><td>409</td></tr>
<tr><td>2010</td><td>657</td><td>569</td></tr>
<tr><td>2015</td><td>674</td><td>608</td></tr>
<tr><td>2020</td><td>756</td><td>784</td></tr>
</table></div>
<p><strong>設問：</strong> 2020年から2025年にかけて輸出額が10%増加し、輸入額が5%増加したとすると、2025年の輸入額は輸出額よりおよそいくら多くなるか。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "84千億円" },
      { label: "B", text: "8.4千億円" },
      { label: "C", text: "0.84千億円" },
      { label: "D", text: "-8.4千億円" },
      { label: "E", text: "-84千億円" }
    ],
    answer: "D",
    explanation: `<p><strong>正答: D</strong></p><h4>解説</h4><p>2020年の輸出額：756千億円、輸入額：784千億円</p><p>2025年の輸出額：756 × 1.10 = 831.6千億円 2025年の輸入額：784 × 1.05 = 823.2千億円</p><p>輸入額 - 輸出額 = 823.2 - 831.6 = -8.4千億円 （マイナスなので実際には輸出額が輸入額より8.4千億円多い）</p><h4>よくある計算ミス</h4><p>輸出と輸入の伸び率を逆に適用すると 756×1.05=793.8、784×1.10=862.4 で差が大きく変わる</p><div class="tip">時短テク: 先に結果の大小を判断。756×1.10=831>784×1.05=823 → 輸出超過（逆転）→ 差は約8千億円。</div>`
  },
  {
    id: 56,
    number: 24,
    category: "図表の読み取り",
    subcategory: "Z社社員の月平均読書量",
    question: `<p><strong>データ：</strong> 横棒グラフ ── 管理職（灰色）とその他社員（黒）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>読書量</th><th>管理職（%）</th><th>その他社員（%）</th></tr>
<tr><td>10冊以上</td><td>5.0</td><td>1.9</td></tr>
<tr><td>6冊以上10冊未満</td><td>11.4</td><td>4.8</td></tr>
<tr><td>2冊以上6冊未満</td><td>15.0</td><td>11.0</td></tr>
<tr><td>1冊以上2冊未満</td><td>22.9</td><td>26.2</td></tr>
<tr><td>1冊未満</td><td>45.7</td><td>56.2</td></tr>
</table></div>
<p><strong>設問：</strong> その他社員の全体人数が管理職全体人数の6倍だったとする。管理職全体人数をXとおくと、月10冊以上本を読む管理職とその他社員の合計人数はおよそどのように表されるか。以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "100X/16.4" },
      { label: "B", text: "6.9X/100" },
      { label: "C", text: "0.164/X" },
      { label: "D", text: "100X/6.9" },
      { label: "E", text: "16.4X/100" }
    ],
    answer: "E",
    explanation: `<p><strong>正答: E</strong></p><h4>解説</h4><p>管理職全体人数：X その他社員全体人数：6X</p><p>月10冊以上読む管理職：X × 5.0% = 0.05X 月10冊以上読むその他社員：6X × 1.9% = 0.114X 合計：0.05X + 0.114X = 0.164X = 16.4X / 100</p><h4>よくある計算ミス</h4><p>人数比（1:6）を忘れて割合だけで計算すると 5.0+1.9=6.9% としてしまう</p><div class="tip">時短テク: 人数比が異なるときは必ず実数に換算。Xで置くと式が整理しやすい。</div>`
  },
  {
    id: 57,
    number: 25,
    category: "図表の読み取り",
    subcategory: "X月の製材用素材状況（2）",
    question: `<p><strong>データ：</strong> ※問21と同じデータ</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>全国・都道府県</th><th>入荷量 当月値</th><th>入荷量 対前月差</th><th>消費量 当月値</th><th>消費量 対前月差</th><th>在庫量 当月値</th><th>在庫量 対前月差</th></tr>
<tr><td>全国</td><td>2,069</td><td>162</td><td>2,076</td><td>182</td><td>4,793</td><td>△7</td></tr>
<tr><td>北海道</td><td>204</td><td>7</td><td>240</td><td>36</td><td>810</td><td>△36</td></tr>
<tr><td>宮城</td><td>25</td><td>4</td><td>22</td><td>0</td><td>207</td><td>3</td></tr>
<tr><td>東京</td><td>79</td><td>4</td><td>68</td><td>7</td><td>152</td><td>11</td></tr>
<tr><td>愛知</td><td>26</td><td>3</td><td>31</td><td>3</td><td>66</td><td>△5</td></tr>
<tr><td>大阪</td><td>74</td><td>7</td><td>66</td><td>7</td><td>137</td><td>8</td></tr>
<tr><td>福岡</td><td>25</td><td>3</td><td>22</td><td>1</td><td>44</td><td>3</td></tr>
<tr><td>沖縄</td><td>84</td><td>20</td><td>90</td><td>7</td><td>255</td><td>△6</td></tr>
</table></div>
<p>注：今月の在庫量＝前月の在庫量＋今月の入荷量−今月の消費量 とする</p>
<p><strong>設問：</strong> 前月の大阪の入荷量と消費量の差は、前月の東京の同差のおよそ何倍か。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "0.57倍" },
      { label: "B", text: "0.73倍" },
      { label: "C", text: "1.24倍" },
      { label: "D", text: "1.38倍" },
      { label: "E", text: "1.75倍" }
    ],
    answer: "A",
    explanation: `<p><strong>正答: A</strong></p><h4>解説</h4><p>前月のデータを求める。対前月差 = 当月値 - 前月値 なので、前月値 = 当月値 - 対前月差。</p><p>大阪：</p><ul><li>前月の入荷量 = 74 - 7 = 67</li><li>前月の消費量 = 66 - 7 = 59</li><li>前月の入荷量と消費量の差 = 67 - 59 = 8</li></ul><p>東京：</p><ul><li>前月の入荷量 = 79 - 4 = 75</li><li>前月の消費量 = 68 - 7 = 61</li><li>前月の入荷量と消費量の差 = 75 - 61 = 14</li></ul><p>倍率 = 8 / 14 = 0.571 ≒ 0.57倍</p><h4>よくある計算ミス</h4><p>対前月差を足す（当月値+差）のか引く（当月値-差）のかを間違えると前月値が逆になる</p><div class="tip">時短テク: 「対前月差＝当月−前月」→「前月＝当月−差」。符号を丁寧に処理する。</div>`
  },
  {
    id: 58,
    number: 26,
    category: "図表の読み取り",
    subcategory: "N社の売上高推移（対前年比）",
    question: `<p><strong>データ：</strong> 棒グラフ ── 対前年比（%）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>年</th><th>対前年比（%）</th></tr>
<tr><td>2016</td><td>+16.0</td></tr>
<tr><td>2017</td><td>+6.0</td></tr>
<tr><td>2018</td><td>+4.0</td></tr>
<tr><td>2019</td><td>-2.0</td></tr>
<tr><td>2020</td><td>-10.0</td></tr>
<tr><td>2021</td><td>+5.0</td></tr>
<tr><td>2022</td><td>+21.0</td></tr>
</table></div>
<p><strong>設問：</strong> 2017年と2018年の売上高の差が800万円だったとすると、2018年の売上高はおよそいくらになるか。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "1億200万円" },
      { label: "B", text: "2億100万円" },
      { label: "C", text: "2億800万円" },
      { label: "D", text: "4億円" },
      { label: "E", text: "4億800万円" }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C</strong></p><h4>解説</h4><p>2018年は対前年比+4.0%なので、2018年の売上高 = 2017年の売上高 × 1.04。 差 = 2017年 × 0.04 = 800万円 2017年 = 800 / 0.04 = 20,000万円 = 2億円 2018年 = 20,000 × 1.04 = 20,800万円 = 2億800万円</p><h4>よくある計算ミス</h4><p>差800万円を2018年の4%と考えると 800/0.04=20,000 で同じだが、「差が対前年比4%分」という点を見落とすと計算の立式自体を間違える</p><div class="tip">時短テク: 差＝前年×増加率 → 前年＝差/増加率。800/0.04=20,000 で即算出。</div>`
  },
  {
    id: 59,
    number: 27,
    category: "図表の読み取り",
    subcategory: "地域別半導体市場",
    question: `<p><strong>データ：</strong> 積み上げ棒グラフ（4地域）── 生産高（百万ドル）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>年</th><th>米州</th><th>欧州</th><th>日本</th><th>アジア・太平洋</th></tr>
<tr><td>96</td><td>42,679</td><td>34,175</td><td>27,562</td><td>30,184</td></tr>
<tr><td>97</td><td>45,851</td><td>32,079</td><td>29,089</td><td>28,853</td></tr>
<tr><td>98</td><td>41,432</td><td>25,921</td><td>32,835</td><td>37,184</td></tr>
<tr><td>99</td><td>64,071</td><td>47,478</td><td>42,309</td><td>48,749</td></tr>
<tr><td>00</td><td>51,264</td><td>39,820</td><td>33,148</td><td>51,156</td></tr>
<tr><td>01</td><td>30,216</td><td>35,778</td><td>30,494</td><td>27,788</td></tr>
<tr><td>02</td><td>32,310</td><td>31,275</td><td>32,331</td><td>62,843</td></tr>
<tr><td>03</td><td>39,424</td><td>39,275</td><td>45,757</td><td>88,781</td></tr>
<tr><td>04</td><td>44,082</td><td>40,736</td><td>39,065</td><td>103,391</td></tr>
<tr><td>05</td><td>39,904</td><td>44,912</td><td>46,418</td><td>116,482</td></tr>
<tr><td>06</td><td>40,971</td><td>42,336</td><td>48,854</td><td>123,492</td></tr>
</table></div>
<p>出典：経済産業省</p>
<p><strong>設問：</strong> グラフの4つの地域のうち、96年〜06年の期間における生産高の変化率が45%を超える地域はいくつあるか。以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "0" },
      { label: "B", text: "1つ" },
      { label: "C", text: "2つ" },
      { label: "D", text: "3つ" },
      { label: "E", text: "4つ" }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C</strong></p><h4>解説</h4><p>96年から06年の変化率を各地域で計算：</p><ul><li>米州：96年 42,679 → 06年 40,971、変化率 = (40,971-42,679)/42,679 = -4.0%（45%未満）</li><li>欧州：96年 34,175 → 06年 42,336、変化率 = (42,336-34,175)/34,175 = 23.9%（45%未満）</li><li>日本：96年 27,562 → 06年 48,854、変化率 = (48,854-27,562)/27,562 = 77.2%（45%超）</li><li>アジア・太平洋：96年 30,184 → 06年 123,492、変化率 = (123,492-30,184)/30,184 = 309.1%（45%超）</li></ul><p>45%を超える地域は2つ（日本、アジア・太平洋）。</p><h4>よくある計算ミス</h4><p>米州の変化率がマイナスであることを見落とし、絶対値4.0%で「45%未満」と正しく判定するが、計算で符号を間違える</p><div class="tip">時短テク: 06年値が96年値の1.45倍を超えているか確認。日本：48,854/27,562 ≒ 1.77 > 1.45。アジア：123,492/30,184 ≒ 4.09 > 1.45。</div>`
  },
  {
    id: 60,
    number: 28,
    category: "図表の読み取り",
    subcategory: "研究者1人当たりの研究支援者数",
    question: `<p><strong>データ：</strong> 棒グラフ＋折れ線グラフ</p>
<p>棒グラフ（左軸：万人）── 研究者（濃色）と研究支援者（薄色）<br>
折れ線グラフ（右軸：人）── 研究者1人当たりの研究支援者数</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>国</th><th>研究者（万人）</th><th>研究支援者（万人）</th><th>1人当たり支援者数</th></tr>
<tr><td>日本</td><td>82.7</td><td>22.8</td><td>0.28</td></tr>
<tr><td>ドイツ</td><td>28.6</td><td>21.2</td><td>0.74</td></tr>
<tr><td>フランス</td><td>21.1</td><td>15.3</td><td>0.72</td></tr>
<tr><td>英国</td><td>18.4</td><td>15.1</td><td>0.82</td></tr>
<tr><td>米国</td><td>117.3</td><td>86.4</td><td>0.74</td></tr>
<tr><td>EU</td><td>134.2</td><td>93.9</td><td>0.70</td></tr>
<tr><td>中国</td><td>122.4</td><td>27.9</td><td>0.23</td></tr>
<tr><td>韓国</td><td>20.0</td><td>3.8</td><td>0.19</td></tr>
</table></div>
<p><strong>設問：</strong> 日本とドイツの研究者の対前年比増加率がそれぞれ5%、10%であったとすると、前年度の日本とドイツの研究者数の合計はおよそ何人になるか。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "100.2万人" },
      { label: "B", text: "101.2万人" },
      { label: "C", text: "104.3万人" },
      { label: "D", text: "104.6万人" },
      { label: "E", text: "104.8万人" }
    ],
    answer: "E",
    explanation: `<p><strong>正答: E</strong></p><h4>解説</h4><p>日本の研究者：82.7万人（対前年比+5%増加後の値） 前年の日本の研究者：82.7 / 1.05 = 78.76万人</p><p>ドイツの研究者：28.6万人（対前年比+10%増加後の値） 前年のドイツの研究者：28.6 / 1.10 = 26.0万人</p><p>前年の合計：78.76 + 26.0 = 104.76 ≒ 104.8万人</p><h4>よくある計算ミス</h4><p>増加率を引き算で処理（82.7×0.95=78.6、82.7−4.1=78.6）とすると近似値は合うが、厳密には 82.7/1.05≠82.7×0.95</p><div class="tip">時短テク: 増加率が5%・10%程度なら、引き算による近似（82.7−4.1、28.6−2.9）で概算可能。</div>`
  },
  {
    id: 61,
    number: 29,
    category: "図表の読み取り",
    subcategory: "日本の1世帯当たりの年間食料品購入数量（全国）",
    question: `<p><strong>データ：</strong> 表</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>品目</th><th>単位</th><th>1980年</th><th>1990</th><th>2000</th><th>2002</th><th>2003</th></tr>
<tr><td>うるち米</td><td>1 kg</td><td>251</td><td>172</td><td>124</td><td>120</td><td>106</td></tr>
<tr><td>パン</td><td>100 g</td><td>368</td><td>422</td><td>392</td><td>402</td><td>405</td></tr>
<tr><td>生鮮魚介</td><td>100 g</td><td>602</td><td>559</td><td>473</td><td>499</td><td>475</td></tr>
<tr><td>塩干魚介</td><td>100 g</td><td>111</td><td>140</td><td>142</td><td>137</td><td>130</td></tr>
<tr><td>牛肉</td><td>100 g</td><td>68</td><td>92</td><td>108</td><td>118</td><td>122</td></tr>
<tr><td>豚肉</td><td>100 g</td><td>140</td><td>209</td><td>173</td><td>165</td><td>160</td></tr>
<tr><td>鶏肉</td><td>100 g</td><td>87</td><td>145</td><td>130</td><td>126</td><td>123</td></tr>
<tr><td>牛乳</td><td>1\u2113</td><td>88</td><td>95</td><td>113</td><td>112</td><td>118</td></tr>
<tr><td>バター</td><td>100 g</td><td>8.8</td><td>5.5</td><td>4.9</td><td>5.3</td><td>5.4</td></tr>
<tr><td>チーズ</td><td>100 g</td><td>10.6</td><td>14.6</td><td>17.1</td><td>20.9</td><td>21.3</td></tr>
<tr><td>鶏卵</td><td>100 g</td><td>449</td><td>418</td><td>386</td><td>388</td><td>372</td></tr>
</table></div>
<p>注）全世帯。ただし、農家、林家、漁家、単身世帯、料理・飲食店、旅館、下宿屋、4人以上の住み込み雇用者がいる世帯、世帯主が長期間不在の世帯、外国人世帯を除く。</p>
<p><strong>設問：</strong> 1980〜2003年の間に、1世帯当たりの1日に消費する生鮮魚介はおよそどれだけ減少したか。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "17g" },
      { label: "B", text: "25g" },
      { label: "C", text: "35g" },
      { label: "D", text: "127g" },
      { label: "E", text: "175g" }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C</strong></p><h4>解説</h4><p>生鮮魚介の年間購入数量（100g単位）： 1980年：602 → 60,200g/年 2003年：475 → 47,500g/年</p><p>年間減少量：60,200 - 47,500 = 12,700g/年 1日当たりの減少量：12,700 / 365 = 34.8g ≒ 35g</p><h4>よくある計算ミス</h4><p>100g単位であることを忘れ、602−475=127gの減少とし、127/365=0.35gとしてしまう</p><div class="tip">時短テク: 先に単位を確認。100g単位→gへの換算（×100）を忘れないこと。</div>`
  },
  {
    id: 62,
    number: 30,
    category: "図表の読み取り",
    subcategory: "ベンチャー起業の動向",
    question: `<p><strong>データ：</strong> 棒グラフ＋折れ線グラフ</p>
<p>棒グラフ（左軸：億円）── 年間投資額<br>
折れ線グラフ ── 投資先社数</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>年</th><th>年間投資額（億円）</th><th>投資先社数（社）</th></tr>
<tr><td>2007</td><td>2,790</td><td>2,774</td></tr>
<tr><td>2008</td><td>1,935</td><td>2,579</td></tr>
<tr><td>2009</td><td>1,366</td><td>1,294</td></tr>
<tr><td>2010</td><td>991</td><td>875</td></tr>
<tr><td>2011</td><td>915</td><td>1,132</td></tr>
<tr><td>2012</td><td>1,017</td><td>1,260</td></tr>
</table></div>
<p><strong>設問：</strong> 2007年から2008年の年間投資額の減少率は、2009年から2012年の減少率のおよそ何倍か。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "0.75倍" },
      { label: "B", text: "0.85倍" },
      { label: "C", text: "1.33倍" },
      { label: "D", text: "2.72倍" },
      { label: "E", text: "3.95倍" }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C</strong></p><h4>解説</h4><p>2007→2008の年間投資額の減少率： (2,790 - 1,935) / 2,790 = 855 / 2,790 = 30.6%</p><p>2009→2012の年間投資額の減少率： (1,366 - 1,017) / 1,366 = 349 / 1,366 = 25.6%</p><p>倍率 = 30.6% / 25.6% = 1.20</p><p>最も近い選択肢は1.33倍（C）。</p><h4>よくある計算ミス</h4><p>減少額の比（855/349=2.45）と減少率の比（1.20）を混同してしまう</p><div class="tip">時短テク: 減少率の比を求めるなら、先に各減少率を概算（31%と26%）→ 31/26 ≒ 1.19。</div>`
  },
  {
    id: 63,
    number: 31,
    category: "図表の読み取り",
    subcategory: "首都圏の製造業の事業所数等",
    question: `<p><strong>データ：</strong> 表</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th></th><th>事業所数 実数（件）</th><th>前年比(%)</th><th>従業者数 実数（人）</th><th>前年比(%)</th><th>製造品出荷額等 金額（百万円）</th><th>前年比(%)</th></tr>
<tr><td>全国</td><td>258,032</td><td>-0.2</td><td>8,494,793</td><td>3.3</td><td>335,854,210</td><td>6.7</td></tr>
<tr><td>首都圏合計</td><td>71,845</td><td>0.2</td><td>2,274,162</td><td>3.3</td><td>92,596,153</td><td>4.9</td></tr>
<tr><td>茨城</td><td>6,621</td><td>0.8</td><td>289,216</td><td>5.5</td><td>12,667,610</td><td>10.2</td></tr>
<tr><td>栃木</td><td>5,418</td><td>-0.3</td><td>218,856</td><td>4.5</td><td>9,245,343</td><td>5.9</td></tr>
<tr><td>群馬</td><td>6,276</td><td>-2.0</td><td>213,559</td><td>0.5</td><td>8,109,732</td><td>4.3</td></tr>
<tr><td>埼玉</td><td>15,107</td><td>0.9</td><td>435,302</td><td>2.5</td><td>14,730,186</td><td>3.5</td></tr>
<tr><td>千葉</td><td>6,545</td><td>3.6</td><td>231,851</td><td>5.3</td><td>14,314,261</td><td>10.4</td></tr>
<tr><td>東京</td><td>18,652</td><td>-2.0</td><td>369,723</td><td>0.7</td><td>10,612,138</td><td>3.3</td></tr>
<tr><td>神奈川</td><td>10,813</td><td>2.6</td><td>434,582</td><td>4.7</td><td>20,169,960</td><td>0.1</td></tr>
<tr><td>山梨</td><td>2,413</td><td>0.1</td><td>81,273</td><td>2.8</td><td>2,746,923</td><td>7.3</td></tr>
</table></div>
<p>注：従業員が4人以上の事業所　　出典：経済産業省</p>
<p><strong>設問：</strong> 千葉の製造品出荷額等は、前年と比べておよそいくら増えたか。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "1兆200億円" },
      { label: "B", text: "1兆1,300億円" },
      { label: "C", text: "1兆3,500億円" },
      { label: "D", text: "1兆4,800億円" },
      { label: "E", text: "13兆5,000億円" }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C</strong></p><h4>解説</h4><p>千葉の製造品出荷額等：14,314,261百万円 = 14兆3,142.61億円 前年比 +10.4%</p><p>前年の製造品出荷額等 = 14,314,261 / 1.104 = 12,967,582百万円 増加額 = 14,314,261 - 12,967,582 = 1,346,679百万円 ≒ 1兆3,467億円</p><p>最も近いのは1兆3,500億円。</p><h4>よくある計算ミス</h4><p>当年値×10.4%=1,488,683 と計算してしまう（前年値ではなく当年値に増加率を掛けるミス）</p><div class="tip">時短テク: 増加額＝当年値×(r/(1+r))。r=0.104 → 0.104/1.104 ≒ 0.094。14,314×0.094 ≒ 1,346。</div>`
  },
  {
    id: 64,
    number: 32,
    category: "図表の読み取り",
    subcategory: "ある月の野菜の卸売数量と価格",
    question: `<p><strong>データ：</strong> 表</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>品目</th><th>卸売数量（千トン）</th><th>卸売総額（百万円）</th><th>卸売価格（円/kg）</th><th>対前年同月比 数量(%)</th><th>対前年同月比 価格(%)</th><th>対前月比 数量(%)</th><th>対前月比 価格(%)</th></tr>
<tr><td>だいこん</td><td>69.7</td><td>5,854.8</td><td>84</td><td>103</td><td>105</td><td>95</td><td>97</td></tr>
<tr><td>たけのこ</td><td>0.1</td><td>101.8</td><td>1,018</td><td>92</td><td>131</td><td>576</td><td>93</td></tr>
<tr><td>しゅんぎく</td><td>2.2</td><td>1,544.4</td><td>702</td><td>106</td><td>87</td><td>150</td><td>104</td></tr>
<tr><td>パセリ</td><td>0.4</td><td>748.8</td><td>1,872</td><td>103</td><td>81</td><td>129</td><td>193</td></tr>
<tr><td>かぼちゃ</td><td>14.2</td><td>3,053</td><td>215</td><td>76</td><td>181</td><td>95</td><td>130</td></tr>
<tr><td>さやえんどう</td><td>0.8</td><td>1,065.6</td><td>1,332</td><td>85</td><td>113</td><td>204</td><td>109</td></tr>
<tr><td>たまねぎ</td><td>69.2</td><td>8,857.6</td><td>128</td><td>87</td><td>175</td><td>97</td><td>110</td></tr>
</table></div>
<p>注）卸売総額＝卸売数量×卸売価格</p>
<p><strong>設問：</strong> 前月のかぼちゃと前月のパセリの卸売数量の差はおよそ何千トンか。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "13.2千トン" },
      { label: "B", text: "14.6千トン" },
      { label: "C", text: "15.3千トン" },
      { label: "D", text: "16.1千トン" },
      { label: "E", text: "16.7千トン" }
    ],
    answer: "B",
    explanation: `<p><strong>正答: B</strong></p><h4>解説</h4><p>前月の卸売数量を求める。対前月比は「当月 / 前月 × 100」を意味する。 前月の卸売数量 = 当月の卸売数量 / (対前月比/100)</p><p>かぼちゃ：前月 = 14.2 / (95/100) = 14.2 / 0.95 = 14.947千トン パセリ：前月 = 0.4 / (129/100) = 0.4 / 1.29 = 0.310千トン</p><p>差 = 14.947 - 0.310 = 14.637千トン ≒ 14.6千トン</p><h4>よくある計算ミス</h4><p>対前月比を「差」と勘違いし、当月値から差を引いて前月値を求めてしまう</p><div class="tip">時短テク: 対前月比が100に近い（95%）ならほぼ変化なし。かぼちゃの前月 ≒ 14.2/0.95 ≒ 14.9。</div>`
  },
  {
    id: 65,
    number: 33,
    category: "図表の読み取り",
    subcategory: "運転免許保有者数の推移",
    question: `<p><strong>データ：</strong> 表</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>年</th><th>保有者数 男性（千人）</th><th>保有者数 女性（千人）</th><th>対前年増減率 男性(%)</th><th>対前年増減率 女性(%)</th><th>人口に対する割合 全体(%)</th><th>男性(%)</th><th>女性(%)</th></tr>
<tr><td>平成21年</td><td>45,518</td><td>34,930</td><td>0.2</td><td>1.3</td><td>73.6</td><td>86.2</td><td>61.8</td></tr>
<tr><td>22</td><td>45,539</td><td>35,273</td><td>0</td><td>1</td><td>73.9</td><td>86.3</td><td>62.4</td></tr>
<tr><td>23</td><td>45,487</td><td>-</td><td>-0.1</td><td>0.7</td><td>73.7</td><td>85.8</td><td>62.5</td></tr>
<tr><td>24</td><td>45,448</td><td>35,767</td><td>-0.1</td><td>0.7</td><td>73.9</td><td>85.7</td><td>62.9</td></tr>
<tr><td>25</td><td>45,437</td><td>36,051</td><td>0</td><td>0.8</td><td>X</td><td>85.8</td><td>63.4</td></tr>
</table></div>
<p>注：単位未満は四捨五入しているため、全体と内訳が一致しないことがある。</p>
<p><strong>設問：</strong> 平成20年の運転免許保有者は男女合わせておよそ何人か。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "79,120千人" },
      { label: "B", text: "79,400千人" },
      { label: "C", text: "79,410千人" },
      { label: "D", text: "79,900千人" },
      { label: "E", text: "79,910千人" }
    ],
    answer: "E",
    explanation: `<p><strong>正答: E</strong></p><h4>解説</h4><p>平成21年の男性：45,518千人、対前年増減率 +0.2% 平成20年の男性 = 45,518 / 1.002 = 45,427千人</p><p>平成21年の女性：34,930千人、対前年増減率 +1.3% 平成20年の女性 = 34,930 / 1.013 = 34,482千人</p><p>合計 = 45,427 + 34,482 = 79,909千人 ≒ 79,910千人</p><h4>よくある計算ミス</h4><p>増減率の計算で男女の増減率を入れ替えてしまう（男性+1.3%、女性+0.2%とする）</p><div class="tip">時短テク: 増減率が小さい（1%前後）ので近似が使える。男性 ≒ 45,518−91、女性 ≒ 34,930−454。</div>`
  },
  {
    id: 66,
    number: 34,
    category: "図表の読み取り",
    subcategory: "世界各国の食品Pの消費量推移",
    question: `<p><strong>データ：</strong> 散布図（横軸：1980年、縦軸：2013年、単位：t）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>国</th><th>1980年</th><th>2013年</th></tr>
<tr><td>フランス</td><td>11.4</td><td>52.6</td></tr>
<tr><td>英国</td><td>11.5</td><td>44.7</td></tr>
<tr><td>アメリカ</td><td>18.4</td><td>40.6</td></tr>
<tr><td>ドイツ</td><td>18.9</td><td>34.2</td></tr>
<tr><td>スペイン</td><td>3.9</td><td>31.2</td></tr>
<tr><td>カナダ</td><td>12.8</td><td>27.3</td></tr>
<tr><td>イタリア</td><td>4.3</td><td>17.7</td></tr>
<tr><td>日本</td><td>0.8</td><td>2.1</td></tr>
<tr><td>スウェーデン</td><td>39.7</td><td>54.7</td></tr>
<tr><td>デンマーク</td><td>33.2</td><td>46.2</td></tr>
</table></div>
<p><strong>設問：</strong> 1980年〜2013年のアメリカの食品Pの消費増加量は、カナダの同増加量のおよそ何倍か。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "1.31倍" },
      { label: "B", text: "1.49倍" },
      { label: "C", text: "1.53倍" },
      { label: "D", text: "1.67倍" },
      { label: "E", text: "1.88倍" }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C</strong></p><h4>解説</h4><p>アメリカの消費増加量：40.6 - 18.4 = 22.2 カナダの消費増加量：27.3 - 12.8 = 14.5 倍率：22.2 / 14.5 = 1.531... ≒ 1.53倍</p><h4>よくある計算ミス</h4><p>増加「率」（倍率）と増加「量」の倍率を混同。増加率はアメリカ2.21倍、カナダ2.13倍で比は1.04倍</p><div class="tip">時短テク: 22/14.5 ≒ 22/15=1.47 → 1.5前後でCに絞れる。</div>`
  },
  {
    id: 67,
    number: 35,
    category: "図表の読み取り",
    subcategory: "大型貨物自動車に対する道路交通法違反取締り状況",
    question: `<p><strong>データ：</strong> 円グラフ（運転者の違反：105,797件、100%）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>違反種別</th><th>構成比（%）</th></tr>
<tr><td>最高速度違反</td><td>31.7</td></tr>
<tr><td>信号無視</td><td>19.1</td></tr>
<tr><td>積載・重量違反</td><td>14.3</td></tr>
<tr><td>その他</td><td>14.8</td></tr>
<tr><td>整備不良車両運転</td><td>7.7</td></tr>
<tr><td>通行区分・追越し違反</td><td>7.7</td></tr>
<tr><td>通行禁止違反</td><td>2.8</td></tr>
<tr><td>一時停止違反</td><td>2.4</td></tr>
<tr><td>転落防止措置義務違反</td><td>0.6</td></tr>
</table></div>
<p><strong>設問：</strong> 次の記述のうち、グラフから明らかに正しいといえるものはどれか。以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "信号無視件数は、一時停止違反件数のおよそ7.3倍である。" },
      { label: "B", text: "毎年最も多い違反は、最高速度違反である。" },
      { label: "C", text: "運転者の違反が対前年比で+7.2%のとき、前年の運転者の違反はおよそ98,421件である。" },
      { label: "D", text: "全大型貨物自動車中、整備不良車両はおよそ7.7%である。" },
      { label: "E", text: "違反上位3件とそれ以外の比は、およそ13：7である。" }
    ],
    answer: "E",
    explanation: `<p><strong>正答: E</strong></p><h4>解説</h4><p>各選択肢を検証：</p><p>A. 信号無視：105,797 × 19.1% = 20,207件 一時停止違反：105,797 × 2.4% = 2,539件 20,207 / 2,539 = 7.96倍 → 7.3倍ではない。不正。</p><p>B. 「毎年」の情報はグラフからは読み取れない（ある年のデータのみ）。不正。</p><p>C. 対前年比+7.2%のとき前年 = 105,797 / 1.072 = 98,691件 → 98,421ではない。不正。</p><p>D. 「全大型貨物自動車中」の台数は不明（違反件数の比率であって車両の比率ではない）。不正。</p><p>E. 上位3件：最高速度31.7% + 信号無視19.1% + 積載・重量14.3% = 65.1% それ以外：100% - 65.1% = 34.9% 比 = 65.1 : 34.9 ≒ 13 : 7（65/5=13、35/5=7）</p><p>正しい。</p><h4>よくある計算ミス</h4><p>上位3件の構成比合計を計算する際に、4番目の項目を含めてしまう</p><div class="tip">時短テク: 65:35 ≒ 13:7。5で割れば即比率が出る。</div>`
  },
  {
    id: 68,
    number: 36,
    category: "図表の読み取り",
    subcategory: "ある年の主要国の自動車使用台数",
    question: `<p><strong>データ：</strong> 表</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>国名</th><th>乗用車（万台）</th><th>商業車（万台）</th><th>100人当たりの台数（台）</th><th>1km\u00B2当たりの台数（台）</th></tr>
<tr><td>日本</td><td>384</td><td>621</td><td>3.8</td><td>27.2</td></tr>
<tr><td>合衆国</td><td>8,006</td><td>1,552</td><td>40.2</td><td>10.2</td></tr>
<tr><td>イギリス</td><td>1,043</td><td>177</td><td>18.9</td><td>50.0</td></tr>
<tr><td>ドイツ</td><td>1,076</td><td>89</td><td>18.6</td><td>47.0</td></tr>
<tr><td>ロシア</td><td>100</td><td>372</td><td>0.4</td><td>0.2</td></tr>
<tr><td>フランス</td><td>1,150</td><td>268</td><td>23.1</td><td>25.9</td></tr>
<tr><td>イタリア</td><td>731</td><td>73</td><td>14.0</td><td>26.7</td></tr>
<tr><td>カナダ</td><td>577</td><td>151</td><td>28.2</td><td>0.7</td></tr>
</table></div>
<p><strong>設問：</strong> 次の5つの主要国のうち、100人当たりの商業車の台数が最も少ないのはどの国か。以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "日本" },
      { label: "B", text: "合衆国" },
      { label: "C", text: "イギリス" },
      { label: "D", text: "イタリア" },
      { label: "E", text: "フランス" }
    ],
    answer: "D",
    explanation: `<p><strong>正答: D</strong></p><h4>解説</h4><p>100人当たりの台数は表にあるが、これは乗用車＋商業車の合計台数に基づくもの。 各国の100人当たりの商業車台数を求める。</p><p>人口 = （乗用車＋商業車）/ (100人当たり台数/100)</p><p>各国の人口（万人）：</p><ul><li>日本：(384+621)/0.038 = 1,005/0.038 = 26,447万人</li><li>合衆国：(8,006+1,552)/0.402 = 9,558/0.402 = 23,776万人</li><li>イギリス：(1,043+177)/0.189 = 1,220/0.189 = 6,455万人</li><li>イタリア：(731+73)/0.140 = 804/0.140 = 5,743万人</li><li>フランス：(1,150+268)/0.231 = 1,418/0.231 = 6,139万人</li></ul><p>100人当たり商業車台数（万台/万人×100）：</p><ul><li>日本：621/26,447×100 = 2.35台</li><li>合衆国：1,552/23,776×100 = 6.53台</li><li>イギリス：177/6,455×100 = 2.74台</li><li>イタリア：73/5,743×100 = 1.27台</li><li>フランス：268/6,139×100 = 4.37台</li></ul><p>最も少ないのはイタリア（1.27台/100人）。</p><h4>よくある計算ミス</h4><p>商業車の台数だけで比較し（イタリア73万台が最少）、人口当たりの計算を省略してしまう。ただし本問では結果は同じ</p><div class="tip">時短テク: 商業車台数/全台数×100人当たり台数 でも計算可能。イタリアは73/804×14.0=1.27。</div>`
  },
  {
    id: 69,
    number: 37,
    category: "図表の読み取り",
    subcategory: "宅配便取扱個数の推移",
    question: `<p><strong>データ：</strong> 表（単位：千個、%）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>便名（事業者名）</th><th></th><th>平成16</th><th>17</th><th>18</th><th>19</th><th>20</th></tr>
<tr><td>全宅配便</td><td>取扱個数</td><td>1,028,540(12.9%)</td><td>1,100,500</td><td>1,124,950</td><td>1,189,000</td><td>1,244,600</td></tr>
<tr><td></td><td>シェア</td><td>77.6</td><td>75.8</td><td>73.4</td><td>73.6</td><td>75.7</td></tr>
<tr><td>A便</td><td>取扱個数</td><td>415,560(17.8%)</td><td>451,810</td><td>478,770</td><td>515,200</td><td>547,850</td></tr>
<tr><td></td><td>シェア</td><td>31.3</td><td>31.1</td><td>31.2</td><td>31.9</td><td>33.3</td></tr>
<tr><td>B便</td><td>取扱個数</td><td>289,910(10.3%)</td><td>309,290</td><td>316,090</td><td>318,890</td><td>324,180</td></tr>
<tr><td></td><td>シェア</td><td>21.9</td><td>21.3</td><td>20.6</td><td>19.7</td><td>19.7</td></tr>
<tr><td>C便</td><td>取扱個数</td><td>94,770(12.0%)</td><td>105,970</td><td>106,740</td><td>107,660</td><td>108,180</td></tr>
<tr><td></td><td>シェア</td><td>7.1</td><td>7.3</td><td>7.0</td><td>6.7</td><td>6.6</td></tr>
<tr><td>D便</td><td>取扱個数</td><td>76,400(8.7%)</td><td>82,200</td><td>76,120</td><td>88,750</td><td>105,760</td></tr>
<tr><td></td><td>シェア</td><td>5.8</td><td>5.7</td><td>5.0</td><td>5.5</td><td>6.4</td></tr>
<tr><td>E便</td><td>取扱個数</td><td>49,020(8.2%)</td><td>52,570</td><td>58,670</td><td>67,380</td><td>73,380</td></tr>
<tr><td></td><td>シェア</td><td>3.7</td><td>3.6</td><td>3.8</td><td>4.2</td><td>4.5</td></tr>
</table></div>
<p>注）取扱個数の単位は千個、シェアは%。（ ）内の数値は前年比増減率。シェアは小包郵便物の取扱個数を含めた合計に対するものである。</p>
<p><strong>設問：</strong> 全宅配便取扱個数の対前年比増加率が2番目に高かったのは何年度か。以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "平成16年度" },
      { label: "B", text: "平成17年度" },
      { label: "C", text: "平成18年度" },
      { label: "D", text: "平成19年度" },
      { label: "E", text: "平成20年度" }
    ],
    answer: "B",
    explanation: `<p><strong>正答: B</strong></p><h4>解説</h4><p>全宅配便の対前年比増加率を各年度で計算：</p><ul><li>平成16年度：12.9%（括弧内に記載）</li><li>平成17年度：(1,100,500 - 1,028,540) / 1,028,540 = 71,960 / 1,028,540 = 7.0%</li><li>平成18年度：(1,124,950 - 1,100,500) / 1,100,500 = 24,450 / 1,100,500 = 2.2%</li><li>平成19年度：(1,189,000 - 1,124,950) / 1,124,950 = 64,050 / 1,124,950 = 5.7%</li><li>平成20年度：(1,244,600 - 1,189,000) / 1,189,000 = 55,600 / 1,189,000 = 4.7%</li></ul><p>降順：12.9%（H16）> 7.0%（H17）> 5.7%（H19）> 4.7%（H20）> 2.2%（H18）</p><p>2番目に高いのは平成17年度（7.0%）。</p><h4>よくある計算ミス</h4><p>増加量（絶対値）で比較すると H16が最大だがH17とH19の順位が入れ替わる可能性がある</p><div class="tip">時短テク: H16の12.9%は突出しているので除外。残りの中でH17の差（72,000）が最大→2番目と即判断。</div>`
  },
  {
    id: 70,
    number: 38,
    category: "図表の読み取り",
    subcategory: "LSI産業の生産金額と投資額",
    question: `<p><strong>データ：</strong> 棒グラフ（2つ）</p>
<p><strong>生産金額の対前年比（%）</strong></p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>地域</th><th>1998年</th><th>1999年</th></tr>
<tr><td>台湾</td><td>+12</td><td>+20</td></tr>
<tr><td>欧州</td><td>+5</td><td>+10</td></tr>
<tr><td>米国</td><td>+1</td><td>+10</td></tr>
<tr><td>韓国</td><td>+1</td><td>+5</td></tr>
<tr><td>日本</td><td>-7.5</td><td>+10</td></tr>
</table></div>
<p><strong>投資額の対前年比（%）</strong></p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>地域</th><th>1998年</th><th>1999年</th></tr>
<tr><td>台湾</td><td>-30</td><td>0</td></tr>
<tr><td>欧州</td><td>+2</td><td>0</td></tr>
<tr><td>米国</td><td>+10</td><td>-30</td></tr>
<tr><td>韓国</td><td>-75</td><td>+18</td></tr>
<tr><td>日本</td><td>-30</td><td>-15</td></tr>
</table></div>
<p><strong>設問：</strong> 韓国の1998年のLSIの投資額をXとおくと、1999年の投資額はおよそどのように表されるか。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "18X" },
      { label: "B", text: "1.18X" },
      { label: "C", text: "1.1X" },
      { label: "D", text: "18＋X" },
      { label: "E", text: "X−57" }
    ],
    answer: "B",
    explanation: `<p><strong>正答: B</strong></p><h4>解説</h4><p>韓国の1998年のLSI投資額をXとする。 1998年の投資額の対前年比は-75%。つまり1998年の投資額は前年より75%減少。 1999年の投資額の対前年比は+18%。つまり1999年は1998年より18%増加。</p><p>1999年の投資額 = X × (1 + 0.18) = 1.18X</p><h4>よくある計算ミス</h4><p>前年比-75%と+18%を合算して-57%としてしまう（掛け算が正しい）</p><div class="tip">時短テク: 問われているのは1999年のXに対する倍率のみ。1998年をXとおけば即1.18X。</div>`
  },
  {
    id: 71,
    number: 39,
    category: "図表の読み取り",
    subcategory: "輸出入総額",
    question: `<p><strong>データ：</strong> 表</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>年次</th><th>円建（億円） 輸出</th><th>円建 輸入</th><th>円建 入(-)出超</th><th>ドル建（100万ドル） 輸出</th><th>ドル建 輸入</th><th>ドル建 入(-)出超</th></tr>
<tr><td>昭和50年</td><td>165,453</td><td>171,700</td><td>-6,247</td><td>55,753</td><td>57,863</td><td>-2,110</td></tr>
<tr><td>55</td><td>293,825</td><td>319,953</td><td>-26,129</td><td>129,807</td><td>140,528</td><td>-10,721</td></tr>
<tr><td>60</td><td>419,557</td><td>310,849</td><td>108,707</td><td>175,638</td><td>129,539</td><td>46,099</td></tr>
<tr><td>63</td><td>339,392</td><td>240,063</td><td>99,329</td><td>264,917</td><td>187,354</td><td>77,563</td></tr>
<tr><td>平成元年</td><td>378,225</td><td>289,786</td><td>88,440</td><td>275,175</td><td>210,847</td><td>64,328</td></tr>
<tr><td>2</td><td>414,569</td><td>338,552</td><td>76,017</td><td>286,948</td><td>234,799</td><td>52,149</td></tr>
<tr><td>3</td><td>423,599</td><td>319,002</td><td>104,597</td><td>314,525</td><td>236,737</td><td>77,789</td></tr>
<tr><td>4</td><td>430,123</td><td>295,274</td><td>134,849</td><td>339,650</td><td>233,021</td><td>106,628</td></tr>
<tr><td>5</td><td>402,024</td><td>268,264</td><td>133,761</td><td>360,911</td><td>240,670</td><td>120,241</td></tr>
<tr><td>6</td><td>404,976</td><td>281,043</td><td>123,932</td><td>395,600</td><td>274,742</td><td>120,858</td></tr>
</table></div>
<p>注）価格は、輸出は本船渡価格（F.O.B.価格）、輸入は運賃・保険料込み渡し価格（C.I.F.価格）による。<br>
資料：日本関税協会「外国貿易概況」</p>
<p><strong>設問：</strong> 昭和63〜平成4年において、最も円安であった年はいつか。以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "昭和63年" },
      { label: "B", text: "平成元年" },
      { label: "C", text: "平成2年" },
      { label: "D", text: "平成3年" },
      { label: "E", text: "平成4年" }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C</strong></p><h4>解説</h4><p>円安＝1ドルあたりの円が多い。為替レートは円建金額/ドル建金額で概算できる。 輸出データで計算（億円 / 100万ドル = 円/ドル の100倍）：</p><ul><li>昭和63年：339,392億円 / 264,917百万ドル = 1.281 → 約128円/ドル</li><li>平成元年：378,225 / 275,175 = 1.375 → 約138円/ドル</li><li>平成2年：414,569 / 286,948 = 1.445 → 約145円/ドル</li><li>平成3年：423,599 / 314,525 = 1.347 → 約135円/ドル</li><li>平成4年：430,123 / 339,650 = 1.266 → 約127円/ドル</li></ul><p>最も円安（1ドルあたりの円が最も多い）のは平成2年（約145円/ドル）。</p><h4>よくある計算ミス</h4><p>円安の定義を逆に覚え、最も円高の年を選んでしまう</p><div class="tip">時短テク: 円安＝円/ドルが大きい。各年の比率をざっと計算し、最大値を探す。</div>`
  },
  {
    id: 72,
    number: 40,
    category: "図表の読み取り",
    subcategory: "年齢別海外在住邦人数（2）",
    question: `<p><strong>データ：</strong> ※問17と同じデータ</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>年齢</th><th>男性</th><th>女性</th><th>合計</th></tr>
<tr><td>20歳未満</td><td>151</td><td>147</td><td>298</td></tr>
<tr><td>20歳代</td><td>66</td><td>88</td><td>154</td></tr>
<tr><td>30歳代</td><td>103</td><td>145</td><td>248</td></tr>
<tr><td>40歳代</td><td>122</td><td>155</td><td>277</td></tr>
<tr><td>50歳代</td><td>92</td><td>74</td><td>166</td></tr>
<tr><td>60歳以上</td><td>101</td><td>76</td><td>177</td></tr>
</table></div>
<p><strong>設問：</strong> 60歳以上の海外在住邦人全体に占める男性の割合は、20歳代に占める同割合のおよそ何倍か。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "0.65倍" },
      { label: "B", text: "0.75倍" },
      { label: "C", text: "1.33倍" },
      { label: "D", text: "1.43倍" },
      { label: "E", text: "1.53倍" }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C</strong></p><h4>解説</h4><p>「60歳以上の中での男性割合」と「20歳代の中での男性割合」の比を求める。</p><p>60歳以上の男性割合：101 / 177 = 57.1% 20歳代の男性割合：66 / 154 = 42.9%</p><p>倍率：57.1 / 42.9 = 1.331 ≒ 1.33倍</p><h4>よくある計算ミス</h4><p>男性人数の比（101/66=1.53倍）と男性割合の比（1.33倍）を混同してしまう</p><div class="tip">時短テク: 57/43 ≒ 4/3 ≒ 1.33 で即C。</div>`
  }
];
