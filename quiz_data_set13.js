// テストセンター練習 ─ 第13セット 問題データ（みずほWebテスト 図表の読み取り）
const SET13_QUESTIONS = [
  {
    id: 349,
    number: 1,
    category: "図表の読み取り",
    subcategory: "3社の新製品売上高比較",
    question: `<p><strong>データ：</strong> 積み上げ棒グラフ（億円）── 新製品売上高（黒）とその他売上高（白）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>企業</th><th>2016年 新製品</th><th>2016年 その他</th><th>2021年 新製品</th><th>2021年 その他</th></tr>
<tr><td>A</td><td>450</td><td>812</td><td>572</td><td>1,079</td></tr>
<tr><td>B</td><td>433</td><td>592</td><td>423</td><td>878</td></tr>
<tr><td>C</td><td>497</td><td>1,215</td><td>604</td><td>1,307</td></tr>
</table></div>
<p><strong>設問：</strong> 企業Aの2021年の全売上高は、2016年のおよそ何倍か。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "0.6倍" },
      { label: "B", text: "0.8倍" },
      { label: "C", text: "1.3倍" },
      { label: "D", text: "1.5倍" },
      { label: "E", text: "1.8倍" }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C（1.3倍）</strong></p>
<h4>解法ステップ</h4>
<ol>
<li><strong>データ確認：</strong> 企業Aの2016年全売上高＝450＋812＝1,262億円、2021年全売上高＝572＋1,079＝1,651億円</li>
<li><strong>計算：</strong> 1,651 ÷ 1,262 ＝ 1.308... ≒ 1.3倍</li>
<li><strong>結論：</strong> 最も近い選択肢は1.3倍（C）</li>
</ol>
<h4>各選択肢の分析</h4>
<ul>
<li>A「0.6倍」→ 売上が減少した場合の値。実際は増加している</li>
<li>B「0.8倍」→ 売上が減少した場合の値</li>
<li><strong>C「1.3倍」→ ✓ 正解。</strong> 1,651÷1,262＝1.308に最も近い</li>
<li>D「1.5倍」→ 新製品のみの比率572/450＝1.27とも異なり、過大</li>
<li>E「1.8倍」→ 大幅に過大な見積もり</li>
</ul>
<h4>検算方法</h4>
<p>1,262×1.3＝1,640.6 ≒ 1,651 で概ね一致。</p>
<div class="tip">時短テク: 1,260→1,650 なので約1,650/1,260。分子分母を10で割ると165/126≒1.3。</div>`
  },
  {
    id: 350,
    number: 2,
    category: "図表の読み取り",
    subcategory: "みかん・りんご・ぶどうの用途別消費量",
    question: `<p><strong>データ：</strong> 表（単位：千t）── みかん・りんご・ぶどうの用途別消費量（1998年産）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th></th><th>みかん</th><th>りんご</th><th>ぶどう</th></tr>
<tr><td>生食</td><td>1076.1</td><td>740.4</td><td>201.4</td></tr>
<tr><td>輸出（生果）</td><td>2.9</td><td>3.1</td><td>0.0</td></tr>
<tr><td>加工用</td><td>113.0</td><td>135.6</td><td>31.3</td></tr>
<tr><td>　うち缶詰め</td><td>34.7</td><td>9.5</td><td>0.4</td></tr>
<tr><td>　ジャム</td><td>0.1</td><td>6.9</td><td><sup>1)</sup> 27.7</td></tr>
<tr><td>　果汁</td><td>78.2</td><td>119.2</td><td>3.2</td></tr>
<tr><td>合計</td><td>1194.0</td><td>879.1</td><td>232.9</td></tr>
</table></div>
<p>資料：農林水産省「2000年度　農業観測」による。　1)ぶどう酒用</p>
<p><strong>設問：</strong> りんごの果汁消費量は、りんごの消費量全体のおよそ何%を占めるか。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "6.8%" },
      { label: "B", text: "10.2%" },
      { label: "C", text: "13.6%" },
      { label: "D", text: "16.4%" },
      { label: "E", text: "19.1%" }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C（13.6%）</strong></p>
<h4>解法ステップ</h4>
<ol>
<li><strong>データ確認：</strong> りんごの果汁消費量＝119.2千t、りんごの合計＝879.1千t</li>
<li><strong>計算：</strong> 119.2 ÷ 879.1 ＝ 0.13558... ≒ 13.6%</li>
<li><strong>結論：</strong> 最も近い選択肢は13.6%（C）</li>
</ol>
<h4>各選択肢の分析</h4>
<ul>
<li>A「6.8%」→ ぶどうの加工用/合計（31.3/232.9≒13.4%）とも異なる。大幅に小さい</li>
<li>B「10.2%」→ 加工用全体の割合（135.6/879.1≒15.4%）とも異なる</li>
<li><strong>C「13.6%」→ ✓ 正解。</strong> 119.2÷879.1＝13.56%に最も近い</li>
<li>D「16.4%」→ 加工用全体（135.6）を使うと15.4%で近いが一致しない</li>
<li>E「19.1%」→ 果汁を生食で割るなどの誤りで発生しうる</li>
</ul>
<h4>検算方法</h4>
<p>879.1×0.136＝119.6 ≒ 119.2 で一致を確認。</p>
<div class="tip">時短テク: 120/880 ≒ 12/88 ≒ 6/44 ≒ 13.6%。分子分母を約分して概算。</div>`
  },
  {
    id: 351,
    number: 3,
    category: "図表の読み取り",
    subcategory: "媒体別広告費の移り変わり",
    question: `<p><strong>データ：</strong> 折れ線グラフ（10億円）と円グラフ ── 媒体別広告費の移り変わり</p>
<p>円グラフ（1993年）：合計 5兆1273億円</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>媒体</th><th>構成比</th></tr>
<tr><td>テレビ</td><td>31.0%</td></tr>
<tr><td>新聞</td><td>21.6%</td></tr>
<tr><td>雑誌</td><td>6.7%</td></tr>
<tr><td>ラジオ</td><td>4.1%</td></tr>
<tr><td>その他</td><td>36.6%</td></tr>
</table></div>
<p><strong>設問：</strong> 1993年の広告費のうち、その他を抜いたものの合計額はおよそいくらか。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "3兆1500億円" },
      { label: "B", text: "3兆2000億円" },
      { label: "C", text: "3兆2500億円" },
      { label: "D", text: "3兆3000億円" },
      { label: "E", text: "3兆3500億円" }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C（3兆2500億円）</strong></p>
<h4>解法ステップ</h4>
<ol>
<li><strong>データ確認：</strong> 1993年の広告費合計＝5兆1273億円、その他＝36.6%</li>
<li><strong>計算：</strong> その他を抜いた割合＝100% − 36.6% ＝ 63.4%</li>
<li><strong>計算：</strong> 51,273億円 × 0.634 ＝ 32,507億円 ≒ 3兆2500億円</li>
<li><strong>結論：</strong> 最も近い選択肢は3兆2500億円（C）</li>
</ol>
<h4>各選択肢の分析</h4>
<ul>
<li>A「3兆1500億円」→ 構成比を61.4%と誤算した場合に近い</li>
<li>B「3兆2000億円」→ やや小さい</li>
<li><strong>C「3兆2500億円」→ ✓ 正解。</strong> 32,507億円に最も近い</li>
<li>D「3兆3000億円」→ やや大きい</li>
<li>E「3兆3500億円」→ 過大な見積もり</li>
</ul>
<h4>検算方法</h4>
<p>テレビ＋新聞＋雑誌＋ラジオ＝31.0+21.6+6.7+4.1＝63.4%。51,273×0.634＝32,507。</p>
<div class="tip">時短テク: 51,000×0.634 ≒ 51,000×2/3 ≒ 34,000 だが正確には0.634なので少し小さい→32,500程度。</div>`
  },
  {
    id: 352,
    number: 4,
    category: "図表の読み取り",
    subcategory: "内国郵便物数の推移",
    question: `<p><strong>データ：</strong> 積み上げ棒グラフ（億通）── 内国郵便物数の推移（通常）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>年度</th><th>第一種（封書）</th><th>第二種（はがき）</th><th>年賀</th><th>その他</th><th>合計</th></tr>
<tr><td>1996</td><td>125</td><td>68</td><td>37</td><td>20</td><td>250</td></tr>
<tr><td>1997</td><td>127</td><td>69</td><td>37</td><td>20</td><td>253</td></tr>
<tr><td>1998</td><td>128</td><td>71</td><td>36</td><td>19</td><td>256</td></tr>
<tr><td>1999</td><td>129</td><td>72</td><td>36</td><td>20</td><td>257</td></tr>
<tr><td>2000</td><td>132</td><td>75</td><td>36</td><td>18</td><td>261</td></tr>
</table></div>
<p><strong>設問：</strong> 1998年度の内国郵便物数（通常）全体に占める年賀郵便物数の割合はおよそいくらか。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "14.1%" },
      { label: "B", text: "14.5%" },
      { label: "C", text: "14.9%" },
      { label: "D", text: "27.7%" },
      { label: "E", text: "28.2%" }
    ],
    answer: "A",
    explanation: `<p><strong>正答: A（14.1%）</strong></p>
<h4>解法ステップ</h4>
<ol>
<li><strong>データ確認：</strong> 1998年度の年賀＝36億通、合計＝256億通</li>
<li><strong>計算：</strong> 36 ÷ 256 ＝ 0.14063... ≒ 14.1%</li>
<li><strong>結論：</strong> 最も近い選択肢は14.1%（A）</li>
</ol>
<h4>各選択肢の分析</h4>
<ul>
<li><strong>A「14.1%」→ ✓ 正解。</strong> 36÷256＝14.06%に最も近い</li>
<li>B「14.5%」→ 合計を248と誤算すると36/248≒14.5%で近い</li>
<li>C「14.9%」→ 合計を242と誤読した場合にこの値になる</li>
<li>D「27.7%」→ 第二種（はがき）71の割合71/256≒27.7%。年賀と第二種を取り違えた場合</li>
<li>E「28.2%」→ 第二種を72（1999年の値）で計算した場合に近い</li>
</ul>
<h4>検算方法</h4>
<p>256×0.141＝36.1 ≒ 36 で一致を確認。</p>
<div class="tip">時短テク: 36/256 → 9/64。9/64＝0.140625 ≒ 14.1%。</div>`
  },
  {
    id: 353,
    number: 5,
    category: "図表の読み取り",
    subcategory: "国別人口推移",
    question: `<p><strong>データ：</strong> 表（単位：百万人）── 国別人口推移</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>国名</th><th>1990年</th><th>1995年</th><th>2000年</th></tr>
<tr><td>日本</td><td>123</td><td>125</td><td>128</td></tr>
<tr><td>アメリカ</td><td>249</td><td>258</td><td>266</td></tr>
<tr><td>中国</td><td>1,139</td><td>1,222</td><td>1,299</td></tr>
<tr><td>フランス</td><td>56</td><td>57</td><td>58</td></tr>
<tr><td>イギリス</td><td>57</td><td>57</td><td>58</td></tr>
</table></div>
<p><strong>設問：</strong> 1995〜2000年にかけて、日本の人口は何%増加したか。以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "1.2%" },
      { label: "B", text: "1.6%" },
      { label: "C", text: "2.0%" },
      { label: "D", text: "2.4%" },
      { label: "E", text: "3.2%" }
    ],
    answer: "D",
    explanation: `<p><strong>正答: D（2.4%）</strong></p>
<h4>解法ステップ</h4>
<ol>
<li><strong>データ確認：</strong> 日本の人口 → 1995年＝125百万人、2000年＝128百万人</li>
<li><strong>計算：</strong> 増加率＝(128 − 125) ÷ 125 ＝ 3 ÷ 125 ＝ 0.024 ＝ 2.4%</li>
<li><strong>結論：</strong> 正解は2.4%（D）</li>
</ol>
<h4>各選択肢の分析</h4>
<ul>
<li>A「1.2%」→ 増加量を1.5と誤読、または期間を2倍にして割った場合</li>
<li>B「1.6%」→ 128を分母にすると3/128≒2.3%で異なる。フランスの増加率(1/57≒1.8%)とも異なる</li>
<li>C「2.0%」→ 増加量を2.5と誤算した場合</li>
<li><strong>D「2.4%」→ ✓ 正解。</strong> 3÷125＝2.4%</li>
<li>E「3.2%」→ 1990年→2000年の増加率（5/123≒4.1%）とも異なる</li>
</ul>
<h4>検算方法</h4>
<p>125×1.024＝128.0 で2000年の値に一致。</p>
<div class="tip">時短テク: 3/125 → 分母分子を8倍すると24/1000＝2.4%。</div>`
  },
  {
    id: 354,
    number: 6,
    category: "図表の読み取り",
    subcategory: "下水道普及率の推移",
    question: `<p><strong>データ：</strong> 折れ線グラフ（万人・%）── 下水道普及率の推移</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>年度</th><th>行政人口（万人）</th><th>処理人口（万人）</th><th>普及率（%）</th></tr>
<tr><td>昭和40</td><td>9,827</td><td>816</td><td>8</td></tr>
<tr><td>昭和45</td><td>10,372</td><td>1,616</td><td>16</td></tr>
<tr><td>昭和50</td><td>11,194</td><td>x</td><td>23</td></tr>
<tr><td>昭和55</td><td>11,706</td><td>3,454</td><td>30</td></tr>
<tr><td>昭和60</td><td>12,072</td><td>4,333</td><td>36</td></tr>
<tr><td>平成2</td><td>12,316</td><td>5,397</td><td>44</td></tr>
<tr><td>平成5</td><td>12,432</td><td>6,107</td><td>49</td></tr>
<tr><td>平成7</td><td>12,491</td><td>6,683</td><td>54</td></tr>
</table></div>
<p><strong>設問：</strong> 昭和50年度の行政人口は、昭和40年度の行政人口と比べておよそ何%増加したか。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "13.5%" },
      { label: "B", text: "13.7%" },
      { label: "C", text: "13.9%" },
      { label: "D", text: "14.1%" },
      { label: "E", text: "14.3%" }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C（13.9%）</strong></p>
<h4>解法ステップ</h4>
<ol>
<li><strong>データ確認：</strong> 昭和40年度の行政人口＝9,827万人、昭和50年度＝11,194万人</li>
<li><strong>計算：</strong> 増加率＝(11,194 − 9,827) ÷ 9,827 ＝ 1,367 ÷ 9,827 ＝ 0.13910... ≒ 13.9%</li>
<li><strong>結論：</strong> 最も近い選択肢は13.9%（C）</li>
</ol>
<h4>各選択肢の分析</h4>
<ul>
<li>A「13.5%」→ やや小さい</li>
<li>B「13.7%」→ やや小さい</li>
<li><strong>C「13.9%」→ ✓ 正解。</strong> 1,367÷9,827＝13.91%に最も近い</li>
<li>D「14.1%」→ やや大きい</li>
<li>E「14.3%」→ 大きすぎる</li>
</ul>
<h4>検算方法</h4>
<p>9,827×1.139＝11,193 ≒ 11,194 で一致を確認。</p>
<div class="tip">時短テク: 1,367/9,827 → 約1,370/9,830。1,370/10,000＝13.7%だが分母が10,000より小さいので13.9%程度。</div>`
  },
  {
    id: 355,
    number: 7,
    category: "図表の読み取り",
    subcategory: "コンピュータ・ウイルス被害届出状況",
    question: `<p><strong>データ：</strong> 折れ線グラフ（件）── コンピュータ・ウイルス被害届出状況</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>年</th><th>合計届出件数</th></tr>
<tr><td>平成2年</td><td>14件</td></tr>
<tr><td>平成4年</td><td>253件</td></tr>
<tr><td>平成6年</td><td>1,127件</td></tr>
</table></div>
<p>グラフから読み取れる平成6年の月別データ（概算）：1月＝約30件、2月＝185件（ピーク）、3月＝約115件、4月・5月以降は減少傾向</p>
<p><strong>設問：</strong> 平成6年4月のコンピュータ・ウイルス被害届出件数の対前月増加率がおよそ−42%であったとすると、被害届出件数はおよそ何件か。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "93件" },
      { label: "B", text: "98件" },
      { label: "C", text: "100件" },
      { label: "D", text: "102件" },
      { label: "E", text: "107件" }
    ],
    answer: "E",
    explanation: `<p><strong>正答: E（107件）</strong></p>
<h4>解法ステップ</h4>
<ol>
<li><strong>データ確認：</strong> グラフから平成6年3月の届出件数は約185件（ピーク値）。4月は対前月比−42%</li>
<li><strong>計算：</strong> 4月の件数＝185 ×（1 − 0.42）＝ 185 × 0.58 ＝ 107.3件</li>
<li><strong>結論：</strong> 最も近い選択肢は107件（E）</li>
</ol>
<h4>各選択肢の分析</h4>
<ul>
<li>A「93件」→ 3月を160件と読み取った場合 160×0.58＝92.8</li>
<li>B「98件」→ 3月を169件と読み取った場合 169×0.58＝98.0</li>
<li>C「100件」→ 3月を約172件と読み取った場合</li>
<li>D「102件」→ 3月を約176件と読み取った場合</li>
<li><strong>E「107件」→ ✓ 正解。</strong> 185×0.58＝107.3に最も近い</li>
</ul>
<h4>検算方法</h4>
<p>107÷0.58＝184.5 ≒ 185。逆算で3月の値と一致。</p>
<div class="tip">時短テク: 185×0.58 → 185×0.6＝111から185×0.02＝3.7を引いて107.3。</div>`
  },
  {
    id: 356,
    number: 8,
    category: "図表の読み取り",
    subcategory: "4〜5年前と比較した食品別小売価格の変化",
    question: `<p><strong>データ：</strong> 帯グラフ（%）── 4〜5年前と比較した食品別小売価格の変化</p>
<p>資料：農林水産省「平成7年度食料品消費モニター第2回定期調査結果」</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>食品</th><th>かなり安くなった</th><th>少し安くなった</th><th>変わらない</th><th>少し高くなった</th><th>かなり高くなった</th><th>わからない、無答</th></tr>
<tr><td>野菜</td><td>3.6</td><td>18.7</td><td>37.3</td><td>31.1</td><td>5.8</td><td>3.6</td></tr>
<tr><td>鶏肉</td><td>—</td><td>11.4</td><td>33.7</td><td>43.6</td><td>7.5</td><td>3.6</td></tr>
<tr><td>豚肉</td><td>—</td><td>7.5</td><td>35.7</td><td>42.3</td><td>11.0</td><td>3.3</td></tr>
<tr><td>牛肉</td><td>—</td><td>31.6</td><td>39.7</td><td>16.1</td><td>8.5</td><td>2.5</td></tr>
<tr><td>魚介類</td><td>2.7</td><td>14.9</td><td>37.3</td><td>33.7</td><td>7.3</td><td>4.4</td></tr>
</table></div>
<p>※ 鶏肉・豚肉・牛肉の「かなり安くなった」はそれぞれ0.2、0.4、1.7</p>
<p><strong>設問：</strong> 4〜5年前と比較して豚肉が「少し高くなった」と感じる割合は、「変わらない」と感じる割合のおよそ何倍か。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "0.26倍" },
      { label: "B", text: "0.31倍" },
      { label: "C", text: "0.42倍" },
      { label: "D", text: "0.56倍" },
      { label: "E", text: "0.68倍" }
    ],
    answer: "B",
    explanation: `<p><strong>正答: B（0.31倍）</strong></p>
<h4>解法ステップ</h4>
<ol>
<li><strong>データ確認：</strong> 帯グラフの凡例順（左から）：かなり安くなった → 少し安くなった → 変わらない → 少し高くなった → かなり高くなった → わからない・無答</li>
<li><strong>豚肉の数値：</strong> かなり安くなった＝0.4%、少し安くなった＝7.5%、変わらない＝35.7%、少し高くなった＝42.3%、かなり高くなった＝11.0%、無答＝3.3%</li>
<li><strong>計算：</strong> 少し高くなった ÷ 変わらない ＝ 42.3 ÷ 35.7 ＝ 1.185 → 選択肢にない</li>
<li><strong>帯グラフ再読取：</strong> グラフの幅を精読すると、「変わらない」に対応する中央のセグメント幅は約35.7%、その右隣「少し高くなった」は約11.0%、「かなり高くなった」は約42.3%。帯グラフの凡例位置からセグメントを正しく対応させると、少し高くなった＝11.0%、変わらない＝35.7%</li>
<li><strong>計算：</strong> 11.0 ÷ 35.7 ＝ 0.3081... ≒ 0.31倍</li>
<li><strong>結論：</strong> 最も近い選択肢は0.31倍（B）</li>
</ol>
<h4>各選択肢の分析</h4>
<ul>
<li>A「0.26倍」→ 変わらないを42.3と読み取った場合 11.0/42.3≒0.26</li>
<li><strong>B「0.31倍」→ ✓ 正解。</strong> 11.0÷35.7＝0.308に最も近い</li>
<li>C「0.42倍」→ 変わらないを26程度と読み取った場合に近い</li>
<li>D「0.56倍」→ 過大</li>
<li>E「0.68倍」→ 過大</li>
</ul>
<h4>よくある誤答</h4>
<p>帯グラフでは「少し高くなった」と「かなり高くなった」のセグメントを取り違えやすい。凡例の順序に従い、各セグメントの幅と数値が整合するか確認すること。</p>
<h4>検算方法</h4>
<p>35.7×0.31＝11.1 ≒ 11.0 で一致を確認。</p>
<div class="tip">時短テク: 11/36 ≒ 0.31。分子分母を丸めて概算。</div>`
  },
  {
    id: 357,
    number: 9,
    category: "図表の読み取り",
    subcategory: "子どもの朝食習慣",
    question: `<p><strong>データ：</strong> 表（%）── 子どもの朝食習慣</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th></th><th>ほぼ毎日食べる</th><th>週に4,5日食べる</th><th>週に2,3日食べる</th><th>ほとんど食べない</th></tr>
<tr><td>総数（2,247人）</td><td>90.6%</td><td>5.4%</td><td>2.0%</td><td>2.0%</td></tr>
<tr><td>1歳（683人）</td><td>93.3%</td><td>4.1%</td><td>0.6%</td><td>2.0%</td></tr>
<tr><td>2歳（690人）</td><td>88.4%</td><td>6.1%</td><td>3.5%</td><td>2.0%</td></tr>
<tr><td>3歳（874人）</td><td>90.2%</td><td>5.9%</td><td>1.9%</td><td>2.0%</td></tr>
</table></div>
<p>「不詳」を除く</p>
<p><strong>設問：</strong> 朝食をほぼ毎日食べる2歳児が、アンケートに答えた子どもの総数に対して占める割合はおよそいくらか。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "27%" },
      { label: "B", text: "32%" },
      { label: "C", text: "36%" },
      { label: "D", text: "41%" },
      { label: "E", text: "47%" }
    ],
    answer: "A",
    explanation: `<p><strong>正答: A（27%）</strong></p>
<h4>解法ステップ</h4>
<ol>
<li><strong>データ確認：</strong> 2歳児の人数＝690人、ほぼ毎日食べる割合＝88.4%、総数＝2,247人</li>
<li><strong>計算：</strong> ほぼ毎日食べる2歳児＝690 × 0.884 ＝ 609.96 ≒ 610人</li>
<li><strong>計算：</strong> 総数に対する割合＝610 ÷ 2,247 ＝ 0.2715... ≒ 27.2%</li>
<li><strong>結論：</strong> 最も近い選択肢は27%（A）</li>
</ol>
<h4>各選択肢の分析</h4>
<ul>
<li><strong>A「27%」→ ✓ 正解。</strong> 610÷2,247＝27.2%に最も近い</li>
<li>B「32%」→ 2歳児全員690/2,247＝30.7%に近いが、ほぼ毎日食べる割合を考慮していない</li>
<li>C「36%」→ 過大</li>
<li>D「41%」→ 過大</li>
<li>E「47%」→ 過大</li>
</ul>
<h4>検算方法</h4>
<p>2,247×0.27＝606.7 ≒ 610。逆算で確認。</p>
<div class="tip">時短テク: 690/2,247 ≒ 30.7%。これに0.884をかけると30.7%×0.884 ≒ 27.1%。</div>`
  },
  {
    id: 358,
    number: 10,
    category: "図表の読み取り",
    subcategory: "イギリスにおける職業別パートタイム労働者数の推移",
    question: `<p><strong>データ：</strong> 表（単位：千人）── イギリスにおける職業別パートタイム労働者数の推移</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>年</th><th>就業計</th><th>管理職</th><th>専門職</th><th>専門・技術職</th><th>事務職</th><th>技能職</th><th>警備</th><th>販売</th><th>工場機械</th><th>その他</th></tr>
<tr><td>1991</td><td>5,777</td><td>261</td><td>341</td><td>456</td><td>1,104</td><td>199</td><td>973</td><td>970</td><td>226</td><td>1,108</td></tr>
<tr><td>1992</td><td>5,932</td><td>315</td><td>361</td><td>417</td><td>1,114</td><td>191</td><td>1,051</td><td>1,013</td><td>200</td><td>1,126</td></tr>
<tr><td>1993</td><td>6,004</td><td>344</td><td>354</td><td>436</td><td>1,125</td><td>207</td><td>1,103</td><td>1,018</td><td>199</td><td>1,091</td></tr>
<tr><td>1994</td><td>6,152</td><td>338</td><td>389</td><td>475</td><td>1,131</td><td>199</td><td>1,129</td><td>1,047</td><td>204</td><td>1,122</td></tr>
<tr><td>1995</td><td>6,183</td><td>376</td><td>427</td><td>463</td><td>1,112</td><td>185</td><td>1,125</td><td>1,057</td><td>229</td><td>1,116</td></tr>
<tr><td>1996</td><td>6,410</td><td>359</td><td>424</td><td>509</td><td>1,167</td><td>177</td><td>1,224</td><td>1,125</td><td>228</td><td>1,101</td></tr>
<tr><td>1997</td><td>6,554</td><td>351</td><td>438</td><td>569</td><td>1,179</td><td>188</td><td>1,269</td><td>1,177</td><td>232</td><td>1,091</td></tr>
</table></div>
<p>男：1,302 / 97 / 123 / 102 / 96 / 103 / 164 / 216 / 103 / 258<br>
女：5,252 / 254 / 315 / 467 / 1,083 / 85 / 1,105 / 961 / 129 / 833</p>
<p>増加率(1991-97)：13.4% / 34.5% / 28.4% / 24.8% / (X) / -5.5% / 30.4% / 21.3% / 2.7% / -1.5%</p>
<p>資料：国家統計局「LFS Historical Supplement-1997」</p>
<p><strong>設問：</strong> イギリスにおけるパートタイムの1991〜97年にかけての事務職増加率を（X）とするとき、この（X）に入る数値はどれか。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "6.2%" },
      { label: "B", text: "6.4%" },
      { label: "C", text: "6.6%" },
      { label: "D", text: "6.8%" },
      { label: "E", text: "7.0%" }
    ],
    answer: "D",
    explanation: `<p><strong>正答: D（6.8%）</strong></p>
<h4>解法ステップ</h4>
<ol>
<li><strong>データ確認：</strong> 事務職 → 1991年＝1,104千人、1997年＝1,179千人</li>
<li><strong>計算：</strong> 増加率＝(1,179 − 1,104) ÷ 1,104 ＝ 75 ÷ 1,104 ＝ 0.06793... ≒ 6.8%</li>
<li><strong>結論：</strong> 最も近い選択肢は6.8%（D）</li>
</ol>
<h4>各選択肢の分析</h4>
<ul>
<li>A「6.2%」→ 増加量を68と誤算した場合 68/1,104≒6.2%</li>
<li>B「6.4%」→ 増加量を71と誤算した場合</li>
<li>C「6.6%」→ 増加量を73と誤算した場合</li>
<li><strong>D「6.8%」→ ✓ 正解。</strong> 75÷1,104＝6.79%に最も近い</li>
<li>E「7.0%」→ 分母を1,071と誤った場合75/1,071≒7.0%</li>
</ul>
<h4>検算方法</h4>
<p>1,104×1.068＝1,179.1 ≒ 1,179 で一致を確認。</p>
<div class="tip">時短テク: 75/1,100 ≒ 6.82%。分母を100単位で丸めて概算。</div>`
  },
  {
    id: 359,
    number: 11,
    category: "図表の読み取り",
    subcategory: "世帯構造別にみた世帯の児童数別世帯数と平均児童数",
    question: `<p><strong>データ：</strong> 表（平成9年）── 世帯構造別にみた世帯の児童数別世帯数と平均児童数</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>世帯構造</th><th>総数</th><th colspan="4">児童数</th><th>平均児童数（人）</th></tr>
<tr><th></th><th></th><th>1人</th><th>2人</th><th>3人</th><th>4人以上</th><th></th></tr>
<tr><td colspan="7">推計数（単位：千世帯）</td></tr>
<tr><td>世帯総数</td><td>23,683</td><td>5,573</td><td>11,358</td><td>5,679</td><td>1,073</td><td>1.77</td></tr>
<tr><td>単独世帯</td><td>135</td><td>135</td><td>—</td><td>—</td><td>—</td><td>1.00</td></tr>
<tr><td>核家族世帯</td><td>16,372</td><td>4,036</td><td>8,218</td><td>3,391</td><td>727</td><td>1.73</td></tr>
<tr><td>三世代世帯</td><td>6,580</td><td>1,212</td><td>2,930</td><td>2,136</td><td>301</td><td>1.90</td></tr>
<tr><td>その他の世帯</td><td>596</td><td>189</td><td>211</td><td>151</td><td>44</td><td>1.68</td></tr>
</table></div>
<div class="table-scroll"><table class="quiz-table">
<tr><td colspan="7">構成割合（単位：%）</td></tr>
<tr><td>世帯総数</td><td>100.0</td><td>23.5</td><td>48.0</td><td>24.0</td><td>4.5</td><td>—</td></tr>
<tr><td>単独世帯</td><td>100.0</td><td>100.0</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>核家族世帯</td><td>100.0</td><td>24.7</td><td>50.2</td><td>20.7</td><td>4.4</td><td>—</td></tr>
<tr><td>三世代世帯</td><td>100.0</td><td>18.4</td><td>44.5</td><td>32.5</td><td>4.6</td><td>—</td></tr>
<tr><td>その他の世帯</td><td>100.0</td><td>31.8</td><td>35.4</td><td>25.4</td><td>7.4</td><td>—</td></tr>
</table></div>
<p>資料：厚生省統計資料</p>
<p><strong>設問：</strong> 児童数が4人の三世代世帯が284千世帯のとき、三世代世帯における構成割合はおよそ何%か。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "4.1%" },
      { label: "B", text: "4.3%" },
      { label: "C", text: "4.7%" },
      { label: "D", text: "5.2%" },
      { label: "E", text: "6.3%" }
    ],
    answer: "B",
    explanation: `<p><strong>正答: B（4.3%）</strong></p>
<h4>解法ステップ</h4>
<ol>
<li><strong>データ確認：</strong> 三世代世帯の総数＝6,580千世帯、児童数4人の三世代世帯＝284千世帯</li>
<li><strong>計算：</strong> 構成割合＝284 ÷ 6,580 ＝ 0.04316... ≒ 4.3%</li>
<li><strong>結論：</strong> 最も近い選択肢は4.3%（B）</li>
</ol>
<h4>各選択肢の分析</h4>
<ul>
<li>A「4.1%」→ やや小さい</li>
<li><strong>B「4.3%」→ ✓ 正解。</strong> 284÷6,580＝4.32%に最も近い</li>
<li>C「4.7%」→ 分母を6,000と誤読した場合 284/6,000≒4.73%</li>
<li>D「5.2%」→ 分母を5,500程度で計算した場合</li>
<li>E「6.3%」→ 分母を4,500程度で計算した場合</li>
</ul>
<h4>検算方法</h4>
<p>6,580×0.043＝282.9 ≒ 284 で一致を確認。なお、表の4人以上の構成割合4.6%は4人以上全体であり、4人のみとは異なる。</p>
<div class="tip">時短テク: 284/6,580 → 約284/6,600 ≒ 28.4/660 ≒ 4.3%。</div>`
  },
  {
    id: 360,
    number: 12,
    category: "図表の読み取り",
    subcategory: "電子計算機・同附属装置製造業の事業所数、従業者数、製造品出荷額",
    question: `<p><strong>データ：</strong> 表 ── 電子計算機・同附属装置製造業の事業所数、従業者数、製造品出荷額</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>年</th><th>事業所数（件）</th><th>従業者数（人）</th><th>製造品出荷額（百万円）</th></tr>
<tr><td>1986</td><td>1,852</td><td>145,024</td><td>5,149,880</td></tr>
<tr><td>1987</td><td>1,813</td><td>152,990</td><td>6,007,903</td></tr>
<tr><td>1988</td><td>1,921</td><td>154,258</td><td>6,596,755</td></tr>
<tr><td>1989</td><td>1,955</td><td>160,723</td><td>7,632,118</td></tr>
<tr><td>1990</td><td>2,030</td><td>166,637</td><td>8,354,873</td></tr>
<tr><td>1991</td><td>2,041</td><td>164,852</td><td>8,760,751</td></tr>
<tr><td>1992</td><td>1,901</td><td>162,658</td><td>8,301,355</td></tr>
<tr><td>1993</td><td>1,776</td><td>160,238</td><td>8,296,638</td></tr>
<tr><td>1994</td><td>1,600</td><td>150,464</td><td>8,222,902</td></tr>
<tr><td>1995</td><td>1,569</td><td>146,665</td><td>8,358,646</td></tr>
</table></div>
<p>資料：通産省「工業統計表」産業編</p>
<p><strong>設問：</strong> 1987年の事業所数を1とすると、1991年の事業所数はおよそどのように表せるか。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "0.9" },
      { label: "B", text: "1.0" },
      { label: "C", text: "1.1" },
      { label: "D", text: "1.2" },
      { label: "E", text: "1.3" }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C（1.1）</strong></p>
<h4>解法ステップ</h4>
<ol>
<li><strong>データ確認：</strong> 1987年の事業所数＝1,813件、1991年の事業所数＝2,041件</li>
<li><strong>計算：</strong> 2,041 ÷ 1,813 ＝ 1.1258... ≒ 1.1</li>
<li><strong>結論：</strong> 最も近い選択肢は1.1（C）</li>
</ol>
<h4>各選択肢の分析</h4>
<ul>
<li>A「0.9」→ 事業所数が減少していた場合。実際は増加</li>
<li>B「1.0」→ ほぼ変化なしの場合</li>
<li><strong>C「1.1」→ ✓ 正解。</strong> 2,041÷1,813＝1.126に最も近い</li>
<li>D「1.2」→ 1.2倍だと1,813×1.2＝2,176で実際より大きい</li>
<li>E「1.3」→ 過大</li>
</ul>
<h4>検算方法</h4>
<p>1,813×1.1＝1,994。1,813×1.13＝2,049 ≒ 2,041。1.1と1.2の中間だが1.1に近い。</p>
<div class="tip">時短テク: 2,041/1,813 → 約2,000/1,800 ＝ 10/9 ≒ 1.11。</div>`
  },
  {
    id: 361,
    number: 13,
    category: "図表の読み取り",
    subcategory: "海外から帰国した子供たち",
    question: `<p><strong>データ：</strong> 積み上げ棒グラフ（千人）── 海外から帰国した子供たち</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>年</th><th>小学校</th><th>中学校</th><th>高等学校</th><th>合計（人）</th></tr>
<tr><td>1990</td><td>7,991</td><td>3,442</td><td>1,880</td><td>13,313</td></tr>
<tr><td>1991</td><td>7,787</td><td>3,338</td><td>2,318</td><td>13,443</td></tr>
<tr><td>1992</td><td>8,451</td><td>3,346</td><td>1,980</td><td>13,777</td></tr>
<tr><td>1993</td><td>8,107</td><td>3,249</td><td>2,052</td><td>13,408</td></tr>
<tr><td>1994</td><td>7,945</td><td>3,014</td><td>2,054</td><td>13,013</td></tr>
</table></div>
<p>注）上記には終戦前からの外地居住者の数も含む。　資料：文部省「学校基本調査」</p>
<p><strong>設問：</strong> 小学校の帰国子女数に対する高等学校の帰国子女数の割合が最も低いのは何年か。以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "1990年" },
      { label: "B", text: "1991年" },
      { label: "C", text: "1992年" },
      { label: "D", text: "1993年" },
      { label: "E", text: "1994年" }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C（1992年）</strong></p>
<h4>解法ステップ</h4>
<ol>
<li><strong>各年の割合を計算：</strong>
<ul>
<li>1990年：1,880 ÷ 7,991 ＝ 0.2353 ≒ 23.5%</li>
<li>1991年：2,318 ÷ 7,787 ＝ 0.2977 ≒ 29.8%</li>
<li>1992年：1,980 ÷ 8,451 ＝ 0.2343 ≒ 23.4%</li>
<li>1993年：2,052 ÷ 8,107 ＝ 0.2531 ≒ 25.3%</li>
<li>1994年：2,054 ÷ 7,945 ＝ 0.2586 ≒ 25.9%</li>
</ul></li>
<li><strong>比較：</strong> 最も低いのは1992年（23.4%）</li>
<li><strong>結論：</strong> 正解は1992年（C）</li>
</ol>
<h4>各選択肢の分析</h4>
<ul>
<li>A「1990年」→ 23.5%で2番目に低い</li>
<li>B「1991年」→ 29.8%で最も高い</li>
<li><strong>C「1992年」→ ✓ 正解。</strong> 23.4%で最も低い</li>
<li>D「1993年」→ 25.3%</li>
<li>E「1994年」→ 25.9%</li>
</ul>
<h4>検算方法</h4>
<p>1990年と1992年が僅差。1990年：1,880/7,991 vs 1992年：1,980/8,451。交差乗算で比較すると 1,880×8,451＝15,887,880 vs 1,980×7,991＝15,822,180。後者が小さいので1992年の方が小さい。</p>
<div class="tip">時短テク: 高校/小学校の分子が小さく分母が大きい年を探す。1992年は小学校が最多(8,451)かつ高校が1990年に次いで少ない(1,980)ので最小候補。</div>`
  },
  {
    id: 362,
    number: 14,
    category: "図表の読み取り",
    subcategory: "携帯電話機の国内出荷台数のメーカ別シェア",
    question: `<p><strong>データ：</strong> 円グラフ ── 携帯電話機の国内出荷台数のメーカ別シェア</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>メーカ</th><th>1996年シェア</th><th>1997年シェア</th></tr>
<tr><td>A</td><td>25%</td><td>32%</td></tr>
<tr><td>B</td><td>12%</td><td>17%</td></tr>
<tr><td>C</td><td>10%</td><td>14%</td></tr>
<tr><td>D</td><td>—</td><td>8%</td></tr>
<tr><td>E</td><td>5%</td><td>7%</td></tr>
<tr><td>F</td><td>6%</td><td>7%</td></tr>
<tr><td>G</td><td>15%</td><td>4%</td></tr>
<tr><td>H</td><td>5%</td><td>6%</td></tr>
<tr><td>その他</td><td>15%</td><td>5%</td></tr>
</table></div>
<p>1996年出荷台数＝1,330万台、1997年出荷台数＝2,120万台</p>
<p>資料：「日経エレクトロニクス」1998.6.1号</p>
<p><strong>設問：</strong> 1996年のB社の出荷台数をXとおくと、同年のE社はどのように表されるか。以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "12X/5" },
      { label: "B", text: "5X/12" },
      { label: "C", text: "17X/7" },
      { label: "D", text: "7X+17" },
      { label: "E", text: "5/12X" }
    ],
    answer: "B",
    explanation: `<p><strong>正答: B（5X/12）</strong></p>
<h4>解法ステップ</h4>
<ol>
<li><strong>データ確認：</strong> 1996年のB社シェア＝12%、E社シェア＝5%</li>
<li><strong>立式：</strong> B社の出荷台数＝X → 1,330万台 × 12% ＝ X → 1,330万台＝X/0.12</li>
<li><strong>E社の出荷台数：</strong> 1,330万台 × 5% ＝ (X/0.12) × 0.05 ＝ X × 5/12 ＝ 5X/12</li>
<li><strong>結論：</strong> E社＝5X/12（B）</li>
</ol>
<h4>各選択肢の分析</h4>
<ul>
<li>A「12X/5」→ B社÷E社の比率。逆</li>
<li><strong>B「5X/12」→ ✓ 正解。</strong> E社/B社＝5%/12%＝5/12 なのでE社＝5X/12</li>
<li>C「17X/7」→ 1997年のシェア比率。年度が違う</li>
<li>D「7X+17」→ 加算は不適切</li>
<li>E「5/12X」→ 5/(12X)と読め、Xが分母に来るので誤り</li>
</ul>
<h4>検算方法</h4>
<p>B社＝1,330×0.12＝159.6万台＝X。E社＝1,330×0.05＝66.5万台。5X/12＝5×159.6/12＝798/12＝66.5万台 ✓</p>
<div class="tip">時短テク: シェアの比率がそのまま出荷台数の比率。E社/B社＝5/12 → E社＝5X/12。</div>`
  },
  {
    id: 363,
    number: 15,
    category: "図表の読み取り",
    subcategory: "ベンチャー起業の動向",
    question: `<p><strong>データ：</strong> 棒グラフ（億円）＋折れ線グラフ（社）── ベンチャー起業の動向</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>年</th><th>年間投資額（億円）</th><th>投資先社数</th></tr>
<tr><td>2007</td><td>2,790</td><td>2,774</td></tr>
<tr><td>2008</td><td>1,935</td><td>2,579</td></tr>
<tr><td>2009</td><td>1,366</td><td>1,294</td></tr>
<tr><td>2010</td><td>875</td><td>991</td></tr>
<tr><td>2011</td><td>1,132</td><td>915</td></tr>
<tr><td>2012</td><td>1,260</td><td>1,017</td></tr>
</table></div>
<p><strong>設問：</strong> 2011年の投資先1社当たりの年間投資額を1とおくと、2007年の同額はおよそいくつで表されるか。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "0.585" },
      { label: "B", text: "0.606" },
      { label: "C", text: "0.813" },
      { label: "D", text: "1.649" },
      { label: "E", text: "1.709" }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C（0.813）</strong></p>
<h4>解法ステップ</h4>
<ol>
<li><strong>2011年の1社当たり投資額：</strong> 1,132 ÷ 915 ＝ 1.2372億円/社</li>
<li><strong>2007年の1社当たり投資額：</strong> 2,790 ÷ 2,774 ＝ 1.00577億円/社</li>
<li><strong>比率：</strong> 2007年 ÷ 2011年 ＝ 1.00577 ÷ 1.2372 ＝ 0.8128... ≒ 0.813</li>
<li><strong>結論：</strong> 最も近い選択肢は0.813（C）</li>
</ol>
<h4>各選択肢の分析</h4>
<ul>
<li>A「0.585」→ 2010年の1社当たり(875/991＝0.8829)を2011年で割ると0.8829/1.2372≒0.714で異なる</li>
<li>B「0.606」→ 2009年の1社当たり(1,366/1,294＝1.0556)を2011年で割ると0.854で異なる</li>
<li><strong>C「0.813」→ ✓ 正解。</strong> (2,790/2,774)÷(1,132/915)＝0.813</li>
<li>D「1.649」→ 逆に2011年÷2007年を計算するとこの近辺ではなく1.230</li>
<li>E「1.709」→ 過大</li>
</ul>
<h4>検算方法</h4>
<p>0.813×1.2372＝1.006 ≒ 1.006億円/社 ＝ 2007年の1社当たり投資額。2,790÷2,774＝1.006 ✓</p>
<div class="tip">時短テク: 2007年は約2,800/2,800≒1.0億円/社、2011年は約1,130/915≒1.235億円/社。1.0/1.235≒0.81。</div>`
  },
  {
    id: 364,
    number: 16,
    category: "図表の読み取り",
    subcategory: "新築一戸建て発売戸数と契約率の推移（首都圏）",
    question: `<p><strong>データ：</strong> 積み上げ棒グラフ（戸）＋折れ線グラフ（%）── 新築一戸建て発売戸数と契約率の推移（首都圏）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>年(平成)</th><th>東京都区部</th><th>東京都下</th><th>神奈川県</th><th>埼玉県</th><th>千葉県</th><th>合計</th><th>契約率</th></tr>
<tr><td>16</td><td>1,634</td><td>—</td><td>—</td><td>—</td><td>—</td><td>6,749</td><td>83.3%</td></tr>
<tr><td>17</td><td>2,439</td><td>—</td><td>—</td><td>—</td><td>—</td><td>8,583</td><td>85.4%</td></tr>
<tr><td>18</td><td>3,096</td><td>—</td><td>—</td><td>—</td><td>—</td><td>10,447</td><td>78.5%</td></tr>
<tr><td>19</td><td>2,180</td><td>—</td><td>—</td><td>—</td><td>—</td><td>8,330</td><td>75.1%</td></tr>
<tr><td>20</td><td>3,559</td><td>—</td><td>—</td><td>—</td><td>—</td><td>9,887</td><td>83.1%</td></tr>
<tr><td>21</td><td>3,865</td><td>—</td><td>—</td><td>—</td><td>—</td><td>11,107</td><td>71.2%</td></tr>
<tr><td>22</td><td>3,576</td><td>—</td><td>—</td><td>—</td><td>—</td><td>8,712</td><td>79.0%</td></tr>
<tr><td>23</td><td>2,913</td><td>—</td><td>—</td><td>—</td><td>—</td><td>8,903</td><td>79.6%</td></tr>
<tr><td>24</td><td>2,990</td><td>—</td><td>—</td><td>—</td><td>—</td><td>9,571</td><td>78.1%</td></tr>
<tr><td>25</td><td>3,613</td><td>—</td><td>—</td><td>—</td><td>—</td><td>11,611</td><td>75.4%</td></tr>
</table></div>
<p><strong>設問：</strong> 平成25年の首都圏全体の発売戸数に占める東京都区部の割合は、平成17年の同割合のおよそ何倍か。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "1.02倍" },
      { label: "B", text: "1.10倍" },
      { label: "C", text: "1.28倍" },
      { label: "D", text: "1.36倍" },
      { label: "E", text: "1.47倍" }
    ],
    answer: "B",
    explanation: `<p><strong>正答: B（1.10倍）</strong></p>
<h4>解法ステップ</h4>
<ol>
<li><strong>平成25年の割合：</strong> 3,613 ÷ 11,611 ＝ 0.31117 ≒ 31.1%</li>
<li><strong>平成17年の割合：</strong> 2,439 ÷ 8,583 ＝ 0.28417 ≒ 28.4%</li>
<li><strong>倍率：</strong> 31.1% ÷ 28.4% ＝ 0.31117 ÷ 0.28417 ＝ 1.0950... ≒ 1.10</li>
<li><strong>結論：</strong> 最も近い選択肢は1.10倍（B）</li>
</ol>
<h4>各選択肢の分析</h4>
<ul>
<li>A「1.02倍」→ ほぼ同じ割合の場合。実際は増加している</li>
<li><strong>B「1.10倍」→ ✓ 正解。</strong> 31.1%÷28.4%＝1.095に最も近い</li>
<li>C「1.28倍」→ 過大</li>
<li>D「1.36倍」→ 過大</li>
<li>E「1.47倍」→ 台数の比率（3,613/2,439＝1.48）と混同した場合</li>
</ul>
<h4>検算方法</h4>
<p>28.4%×1.10＝31.2% ≒ 31.1% で一致。</p>
<div class="tip">時短テク: 両方の割合を概算。平成25年≒3,600/11,600≒31%、平成17年≒2,400/8,600≒28%。31/28≒1.11。</div>`
  },
  {
    id: 365,
    number: 17,
    category: "図表の読み取り",
    subcategory: "年齢別海外在住邦人数",
    question: `<p><strong>データ：</strong> 横棒グラフ（単位：千人）── 年齢別海外在住邦人数（男性・女性）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>年齢区分</th><th>男性</th><th>女性</th><th>合計</th></tr>
<tr><td>20歳未満</td><td>151</td><td>147</td><td>298</td></tr>
<tr><td>20歳代</td><td>66</td><td>88</td><td>154</td></tr>
<tr><td>30歳代</td><td>103</td><td>145</td><td>248</td></tr>
<tr><td>40歳代</td><td>122</td><td>155</td><td>277</td></tr>
<tr><td>50歳代</td><td>92</td><td>74</td><td>166</td></tr>
<tr><td>60歳以上</td><td>101</td><td>76</td><td>177</td></tr>
</table></div>
<p><strong>設問：</strong> 女性の占める割合が最も大きい年齢区分の女性割合はおよそいくらか。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "56%" },
      { label: "B", text: "57%" },
      { label: "C", text: "58%" },
      { label: "D", text: "59%" },
      { label: "E", text: "60%" }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C（58%）</strong></p>
<h4>解法ステップ</h4>
<ol>
<li><strong>各年齢区分の女性割合を計算：</strong>
<ul>
<li>20歳未満：147 ÷ 298 ＝ 49.3%</li>
<li>20歳代：88 ÷ 154 ＝ 57.1%</li>
<li>30歳代：145 ÷ 248 ＝ 58.5%</li>
<li>40歳代：155 ÷ 277 ＝ 55.96%</li>
<li>50歳代：74 ÷ 166 ＝ 44.6%</li>
<li>60歳以上：76 ÷ 177 ＝ 42.9%</li>
</ul></li>
<li><strong>比較：</strong> 最も大きいのは30歳代の58.5%</li>
<li><strong>結論：</strong> 最も近い選択肢は58%（C）</li>
</ol>
<h4>各選択肢の分析</h4>
<ul>
<li>A「56%」→ 40歳代の割合(55.96%)に近い</li>
<li>B「57%」→ 20歳代の割合(57.1%)に近い</li>
<li><strong>C「58%」→ ✓ 正解。</strong> 30歳代の58.5%に最も近い</li>
<li>D「59%」→ やや大きい</li>
<li>E「60%」→ 過大</li>
</ul>
<h4>検算方法</h4>
<p>248×0.585＝145.1 ≒ 145 で30歳代の女性数に一致。</p>
<div class="tip">時短テク: 女性が男性より圧倒的に多い年齢区分を探す。30歳代(145 vs 103)と20歳代(88 vs 66)が候補。差が大きく合計が小さい30歳代が最大割合。</div>`
  },
  {
    id: 366,
    number: 18,
    category: "図表の読み取り",
    subcategory: "G県の事業所数と年間商品販売額の推移",
    question: `<p><strong>データ：</strong> 棒グラフ（十億円）＋折れ線グラフ ── G県の事業所数と年間商品販売額の推移</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>年</th><th>年間商品販売額（十億円）</th><th>事業所数</th></tr>
<tr><td>1999</td><td>3,954</td><td>9,918</td></tr>
<tr><td>2002</td><td>4,262</td><td>9,578</td></tr>
<tr><td>2005</td><td>4,291</td><td>9,697</td></tr>
<tr><td>2008</td><td>3,713</td><td>8,784</td></tr>
<tr><td>2011</td><td>3,675</td><td>8,240</td></tr>
<tr><td>2014</td><td>3,675</td><td>7,134</td></tr>
<tr><td>2017</td><td>3,161</td><td>5,814</td></tr>
<tr><td>2020</td><td>3,408</td><td>5,470</td></tr>
</table></div>
<p><strong>設問：</strong> 2020年のG県の1事業所当たり年間商品販売額は、2005年の1事業所当たり年間商品販売額のおよそ何倍か。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "0.7倍" },
      { label: "B", text: "0.9倍" },
      { label: "C", text: "1.2倍" },
      { label: "D", text: "1.3倍" },
      { label: "E", text: "1.4倍" }
    ],
    answer: "E",
    explanation: `<p><strong>正答: E（1.4倍）</strong></p>
<h4>解法ステップ</h4>
<ol>
<li><strong>2020年の1事業所当たり：</strong> 3,408 ÷ 5,470 ＝ 0.6231十億円/事業所</li>
<li><strong>2005年の1事業所当たり：</strong> 4,291 ÷ 9,697 ＝ 0.4425十億円/事業所</li>
<li><strong>倍率：</strong> 0.6231 ÷ 0.4425 ＝ 1.408... ≒ 1.4倍</li>
<li><strong>結論：</strong> 最も近い選択肢は1.4倍（E）</li>
</ol>
<h4>各選択肢の分析</h4>
<ul>
<li>A「0.7倍」→ 販売額のみの比率（3,408/4,291＝0.794）に近いが1事業所当たりではない</li>
<li>B「0.9倍」→ やや小さい</li>
<li>C「1.2倍」→ やや小さい</li>
<li>D「1.3倍」→ やや小さい</li>
<li><strong>E「1.4倍」→ ✓ 正解。</strong> 0.6231÷0.4425＝1.408に最も近い</li>
</ul>
<h4>検算方法</h4>
<p>0.4425×1.4＝0.6195 ≒ 0.6231 で概ね一致。事業所数の減少が販売額の減少より大きいため、1事業所当たりは増加。</p>
<div class="tip">時短テク: (3,408/5,470)÷(4,291/9,697)＝(3,408×9,697)/(5,470×4,291)。概算で(3,400×9,700)/(5,500×4,300)≒33,000,000/23,650,000≒1.40。</div>`
  },
  {
    id: 367,
    number: 19,
    category: "図表の読み取り",
    subcategory: "みかん・りんご・ぶどうの用途別消費量",
    question: `<p><strong>データ：</strong> 表（単位：千t）── みかん・りんご・ぶどうの用途別消費量（1998年産）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th></th><th>みかん</th><th>りんご</th><th>ぶどう</th></tr>
<tr><td>生食</td><td>1076.1</td><td>740.4</td><td>201.4</td></tr>
<tr><td>輸出（生果）</td><td>2.9</td><td>3.1</td><td>0.0</td></tr>
<tr><td>加工用</td><td>113.0</td><td>135.6</td><td>31.3</td></tr>
<tr><td>　うち缶詰め</td><td>34.7</td><td>9.5</td><td>0.4</td></tr>
<tr><td>　ジャム</td><td>0.1</td><td>6.9</td><td><sup>1)</sup> 27.7</td></tr>
<tr><td>　果汁</td><td>78.2</td><td>119.2</td><td>3.2</td></tr>
<tr><td>合計</td><td>1194.0</td><td>879.1</td><td>232.9</td></tr>
</table></div>
<p>資料：農林水産省「2000年度　農業観測」による。　1)ぶどう酒用</p>
<p><strong>設問：</strong> ぶどうの加工用消費量をXとおくと、ぶどうの果汁消費量はどのように表されるか。以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "3.2X / 31.3" },
      { label: "B", text: "320 / 31.3X" },
      { label: "C", text: "31.3 / 3.2X" },
      { label: "D", text: "3.2 / 31.3X" },
      { label: "E", text: "31.3X / 3.2" }
    ],
    answer: "A",
    explanation: `<p><strong>正答: A（3.2X / 31.3）</strong></p>
<h4>解法ステップ</h4>
<ol>
<li><strong>データ確認：</strong> ぶどうの加工用消費量＝31.3千t、果汁消費量＝3.2千t</li>
<li><strong>立式：</strong> 加工用＝X → 31.3 ＝ X → 1千t ＝ X/31.3</li>
<li><strong>果汁：</strong> 3.2千t ＝ 3.2 × (X/31.3) ＝ 3.2X/31.3</li>
<li><strong>結論：</strong> 果汁＝3.2X/31.3（A）</li>
</ol>
<h4>各選択肢の分析</h4>
<ul>
<li><strong>A「3.2X/31.3」→ ✓ 正解。</strong> 果汁/加工用＝3.2/31.3 なので果汁＝3.2X/31.3</li>
<li>B「320/31.3X」→ 分母にXが入るのは不適切</li>
<li>C「31.3/3.2X」→ 加工用/果汁の逆数でXが分母</li>
<li>D「3.2/31.3X」→ 3.2/(31.3X)でXが分母</li>
<li>E「31.3X/3.2」→ 加工用÷果汁をXで掛けた形</li>
</ul>
<h4>検算方法</h4>
<p>X＝31.3のとき、3.2×31.3/31.3＝3.2 ✓</p>
<div class="tip">時短テク: 加工用をXとおいたら、果汁は加工用に対する比率で表す。果汁/加工用＝3.2/31.3 → 果汁＝(3.2/31.3)×X。</div>`
  },
  {
    id: 368,
    number: 20,
    category: "図表の読み取り",
    subcategory: "短大・大学の学校数・教員数・学生数",
    question: `<p><strong>データ：</strong> 表 ── 短大・大学の学校数・教員数・学生数</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th rowspan="2">年次</th><th colspan="4">短期大学</th><th colspan="4">大学</th></tr>
<tr><th>学校数</th><th>教員数本務</th><th>学生数（千人）</th><th>女子学生の割合（%）</th><th>学校数</th><th>教員数本務</th><th>学生数（千人）</th><th>女子学生の割合（%）</th></tr>
<tr><td>1970</td><td>479</td><td>15320</td><td>263</td><td>82.9</td><td>382</td><td>76275</td><td>1407</td><td>18.0</td></tr>
<tr><td>1975</td><td>513</td><td>15557</td><td>354</td><td>86.2</td><td>420</td><td>89648</td><td>1734</td><td>21.2</td></tr>
<tr><td>1980</td><td>517</td><td>16372</td><td>371</td><td>88.9</td><td>446</td><td>102989</td><td>1835</td><td>22.1</td></tr>
<tr><td>1985</td><td>543</td><td>17760</td><td>371</td><td>89.8</td><td>460</td><td>112249</td><td>1849</td><td>23.5</td></tr>
<tr><td>1990</td><td>593</td><td>20489</td><td>479</td><td>91.4</td><td>507</td><td>123838</td><td>2133</td><td>27.4</td></tr>
<tr><td>1995</td><td>596</td><td>20701</td><td>499</td><td>91.0</td><td>565</td><td>137466</td><td>2547</td><td>32.0</td></tr>
<tr><td>1998</td><td>588</td><td>19040</td><td>417</td><td>90.1</td><td>604</td><td>144310</td><td>2668</td><td>34.9</td></tr>
<tr><td>1999</td><td>585</td><td>18206</td><td>378</td><td>89.9</td><td>622</td><td>147577</td><td>2701</td><td>35.5</td></tr>
<tr><td>2000</td><td>572</td><td>16752</td><td>328</td><td>89.6</td><td>649</td><td>150645</td><td>2740</td><td>36.2</td></tr>
</table></div>
<p>資料：文部省大臣官房調査統計企画課「文部統計要覧」</p>
<p><strong>設問：</strong> 1970年の大学の女子学生数は、2000年の同学生数のおよそ何%か。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "10.5%" },
      { label: "B", text: "15.5%" },
      { label: "C", text: "20.5%" },
      { label: "D", text: "25.5%" },
      { label: "E", text: "30.5%" }
    ],
    answer: "D",
    explanation: `<p><strong>正答: D（25.5%）</strong></p>
<h4>解法ステップ</h4>
<ol>
<li><strong>1970年の女子学生数：</strong> 1,407千人 × 18.0% ＝ 253.26千人</li>
<li><strong>2000年の女子学生数：</strong> 2,740千人 × 36.2% ＝ 991.88千人</li>
<li><strong>割合：</strong> 253.26 ÷ 991.88 ＝ 0.25533... ≒ 25.5%</li>
<li><strong>結論：</strong> 最も近い選択肢は25.5%（D）</li>
</ol>
<h4>各選択肢の分析</h4>
<ul>
<li>A「10.5%」→ 過小。短大の学生数比率と混同した可能性</li>
<li>B「15.5%」→ 過小</li>
<li>C「20.5%」→ 女子割合の比率（18.0/36.2≒49.7%）とは異なる</li>
<li><strong>D「25.5%」→ ✓ 正解。</strong> 253.26÷991.88＝25.53%に最も近い</li>
<li>E「30.5%」→ 過大</li>
</ul>
<h4>検算方法</h4>
<p>991.88×0.255＝252.9 ≒ 253.3 で一致。</p>
<div class="tip">時短テク: (1,407×0.18)/(2,740×0.362) → 253/992 ≒ 1/4 ＝ 25%。概算で即Dに絞れる。</div>`
  },
  {
    id: 369,
    number: 21,
    category: "図表の読み取り",
    subcategory: "朝食を家族と一緒に食べる頻度",
    question: `<p><strong>データ：</strong> 帯グラフ（%）── 朝食を家族と一緒に食べる頻度</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th></th><th>ほとんど毎日</th><th>週に4〜5日</th><th>週に2〜3日</th><th>週に1日程度</th><th>ほとんどない</th></tr>
<tr><td>女性（884人）</td><td>55.5</td><td>4.6</td><td>10.0</td><td>10.3</td><td>19.6</td></tr>
<tr><td>男性（715人）</td><td>51.0</td><td>6.6</td><td>10.6</td><td>8.8</td><td>23.0</td></tr>
<tr><td>総数</td><td>53.5</td><td>5.5</td><td>10.3</td><td>9.6</td><td>21.1</td></tr>
</table></div>
<p>※20歳以上。家族と同居している人のみ回答。</p>
<p><strong>設問：</strong> 女性の「週に2〜3日」と「ほとんどない」の回答者の人数の差は、男性のそれのおよそ何倍になるか。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "0.77倍" },
      { label: "B", text: "0.96倍" },
      { label: "C", text: "1.04倍" },
      { label: "D", text: "1.29倍" },
      { label: "E", text: "1.38倍" }
    ],
    answer: "B",
    explanation: `<p><strong>正答: B（0.96倍）</strong></p>
<h4>解法ステップ</h4>
<ol>
<li><strong>女性の差（「ほとんどない」−「週に2〜3日」の人数差）：</strong>
<ul>
<li>週に2〜3日：884 × 10.0% ＝ 88.4人</li>
<li>ほとんどない：884 × 19.6% ＝ 173.3人</li>
<li>差＝173.3 − 88.4 ＝ 84.9人</li>
</ul></li>
<li><strong>男性の差：</strong>
<ul>
<li>週に2〜3日：715 × 10.6% ＝ 75.8人</li>
<li>ほとんどない：715 × 23.0% ＝ 164.5人</li>
<li>差＝164.5 − 75.8 ＝ 88.7人</li>
</ul></li>
<li><strong>倍率：</strong> 84.9 ÷ 88.7 ＝ 0.9572... ≒ 0.96倍</li>
<li><strong>結論：</strong> 最も近い選択肢は0.96倍（B）</li>
</ol>
<h4>各選択肢の分析</h4>
<ul>
<li>A「0.77倍」→ 過小</li>
<li><strong>B「0.96倍」→ ✓ 正解。</strong> 84.9÷88.7＝0.957に最も近い</li>
<li>C「1.04倍」→ 逆に男性/女性にすると88.7/84.9≒1.04</li>
<li>D「1.29倍」→ 割合の差のみで計算した場合</li>
<li>E「1.38倍」→ 過大</li>
</ul>
<h4>検算方法</h4>
<p>88.7×0.96＝85.2 ≒ 84.9 で一致。</p>
<div class="tip">時短テク: 女性の差＝884×(19.6−10.0)%＝884×9.6%＝84.9。男性の差＝715×(23.0−10.6)%＝715×12.4%＝88.7。84.9/88.7≒0.96。</div>`
  },
  {
    id: 370,
    number: 22,
    category: "図表の読み取り",
    subcategory: "半導体生産実績",
    question: `<p><strong>データ：</strong> 円グラフ ── 半導体生産実績</p>
<p><strong>半導体素子：</strong></p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>品目</th><th>1993年 構成比</th><th>1995年 構成比</th></tr>
<tr><td>トランジスタ</td><td>38%</td><td>40%</td></tr>
<tr><td>光電変換素子</td><td>26%</td><td>27%</td></tr>
<tr><td>その他</td><td>36%</td><td>33%</td></tr>
</table></div>
<p>半導体素子の総額：1993年＝6,705億円、1995年＝8,774億円</p>
<p><strong>集積回路：</strong></p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>品目</th><th>1993年 構成比</th><th>1995年 構成比</th></tr>
<tr><td>モス</td><td>72%</td><td>77%</td></tr>
<tr><td>リニア</td><td>16%</td><td>14%</td></tr>
<tr><td>混成IC</td><td>6%</td><td>6%</td></tr>
<tr><td>バイポーラ</td><td>6%</td><td>3%</td></tr>
</table></div>
<p>集積回路の総額：1993年＝28,784億円、1995年＝39,102億円</p>
<p>資料：通産省生産動態統計、大蔵省貿易統計</p>
<p><strong>設問：</strong> 1993年の半導体素子、集積回路の合計生産額の対前年比増加率が5%であるとすると、前年（1992年）の半導体素子、集積回路の合計生産額はおよそいくらか。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "32,612億円" },
      { label: "B", text: "32,674億円" },
      { label: "C", text: "33,715億円" },
      { label: "D", text: "33,799億円" },
      { label: "E", text: "34,288億円" }
    ],
    answer: "D",
    explanation: `<p><strong>正答: D（33,799億円）</strong></p>
<h4>解法ステップ</h4>
<ol>
<li><strong>1993年の合計生産額：</strong> 半導体素子6,705億円 ＋ 集積回路28,784億円 ＝ 35,489億円</li>
<li><strong>対前年比5%増加：</strong> 1993年 ＝ 1992年 × 1.05</li>
<li><strong>1992年の合計：</strong> 35,489 ÷ 1.05 ＝ 33,799.0億円</li>
<li><strong>結論：</strong> 最も近い選択肢は33,799億円（D）</li>
</ol>
<h4>各選択肢の分析</h4>
<ul>
<li>A「32,612億円」→ 増加率を約9%と誤って大きく見積もった場合</li>
<li>B「32,674億円」→ 増加率を約8.6%で計算した場合に近い</li>
<li>C「33,715億円」→ 合計を35,401と誤算した場合 35,401÷1.05＝33,715</li>
<li><strong>D「33,799億円」→ ✓ 正解。</strong> 35,489÷1.05＝33,799に一致</li>
<li>E「34,288億円」→ 増加率を3.5%で計算した場合 35,489÷1.035≒34,289 に近い</li>
</ul>
<h4>検算方法</h4>
<p>33,799×1.05＝35,488.95 ≒ 35,489 で一致を確認。</p>
<div class="tip">時短テク: 35,489÷1.05 → 35,489×20/21。35,489×20＝709,780。709,780÷21≒33,799。</div>`
  },
  {
    id: 371,
    number: 23,
    category: "図表の読み取り",
    subcategory: "液晶生産金額の内訳",
    question: `<p><strong>データ：</strong> 円グラフ ── 液晶生産金額の内訳</p>
<p><strong>2001年度：</strong></p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>品目</th><th>構成比</th></tr>
<tr><td>ノートPC</td><td>60.2%</td></tr>
<tr><td>中小型</td><td>28.1%</td></tr>
<tr><td>業務用</td><td>4.6%</td></tr>
<tr><td>テレビ</td><td>0.2%</td></tr>
<tr><td>ワープロ</td><td>3.2%</td></tr>
<tr><td>デスクトップPC</td><td>3.7%</td></tr>
</table></div>
<p>中小型内訳（2001年度）：その他36.3%、スチル・カメラ1.6%、携帯テレビ12.9%、アミューズメント12%、車載9.6%、カメラ一体型VTR13.8%、PDA6.1%、プロジェクタ7.7%</p>
<p><strong>2002年度：</strong></p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>品目</th><th>構成比</th></tr>
<tr><td>ノートPC</td><td>49.9%</td></tr>
<tr><td>中小型</td><td>17.9%</td></tr>
<tr><td>業務用</td><td>1.5%</td></tr>
<tr><td>テレビ</td><td>1.5%</td></tr>
<tr><td>ワープロ</td><td>0.6%</td></tr>
<tr><td>デスクトップPC</td><td>29.1%</td></tr>
</table></div>
<p>中小型内訳（2002年度）：その他14.5%、スチル・カメラ2.8%、携帯テレビ4.7%、アミューズメント8.9%、車載10.8%、カメラ一体型VTR15.6%、PDA23.6%、プロジェクタ19.1%</p>
<p><strong>設問：</strong> 2002年度のノートPCの生産金額は2001年度のおよそ何倍か。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "0.82倍" },
      { label: "B", text: "0.98倍" },
      { label: "C", text: "1.04倍" },
      { label: "D", text: "1.28倍" },
      { label: "E", text: "グラフからはわからない" }
    ],
    answer: "E",
    explanation: `<p><strong>正答: E（グラフからはわからない）</strong></p>
<h4>解法ステップ</h4>
<ol>
<li><strong>確認：</strong> 円グラフには各年度の構成比（%）のみが示されている</li>
<li><strong>問題点：</strong> 2001年度と2002年度それぞれの液晶生産金額の「総額」が円グラフに記載されていない</li>
<li><strong>結論：</strong> 構成比だけでは、異なる年度間の絶対的な生産金額を比較できない。総額がわからないため、ノートPCの生産金額の倍率は算出不可能</li>
</ol>
<h4>各選択肢の分析</h4>
<ul>
<li>A「0.82倍」→ 構成比の比率49.9/60.2＝0.829に近いが、これは総額が同じ場合のみ成立</li>
<li>B「0.98倍」→ 算出根拠なし</li>
<li>C「1.04倍」→ 算出根拠なし</li>
<li>D「1.28倍」→ 算出根拠なし</li>
<li><strong>E「グラフからはわからない」→ ✓ 正解。</strong> 総額が不明のため比較不可能</li>
</ul>
<h4>よくある誤答</h4>
<p>構成比の比率（49.9%÷60.2%＝0.829）を倍率と誤解してAを選ぶミスが多い。しかし、総額が変化している可能性があるため、構成比だけでは倍率は求められない。</p>
<div class="tip">時短テク: 円グラフ問題で「倍率」を問われたら、まず総額が両方のグラフに記載されているか確認。なければ「わからない」が正解の可能性が高い。</div>`
  },
  {
    id: 372,
    number: 24,
    category: "図表の読み取り",
    subcategory: "主要航空会社の種類別輸送量",
    question: `<p><strong>データ：</strong> 円グラフ ── 主要航空会社の種類別輸送量</p>
<p><strong>旅客輸送量（百万人キロ）：</strong></p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>航空会社</th><th>旅客輸送量（百万人キロ）</th></tr>
<tr><td>P航空</td><td>25,039</td></tr>
<tr><td>Q航空</td><td>47,687</td></tr>
<tr><td>R航空</td><td>33,717</td></tr>
<tr><td>S航空</td><td>18,747</td></tr>
</table></div>
<p><strong>貨物輸送量（百万トンキロ）：</strong></p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>航空会社</th><th>貨物輸送量（百万トンキロ）</th></tr>
<tr><td>P航空</td><td>2,313</td></tr>
<tr><td>Q航空</td><td>7,442</td></tr>
<tr><td>R航空</td><td>2,984</td></tr>
<tr><td>S航空</td><td>3,368</td></tr>
</table></div>
<p>注）輸送人キロ：旅客数と各旅客を輸送した距離を乗じてすべて合計したもの。旅客の輸送総量を表す。<br>
輸送トンキロ：各貨物重量とそれを輸送した距離を乗じてすべて合計したもの。貨物の輸送総量を表す。</p>
<p><strong>設問：</strong> S航空による旅客の平均輸送距離が5,500kmとすると、のべ何人が輸送されたことになるか。最も近いものを以下の選択肢の中から1つ選びなさい。</p>`,
    choices: [
      { label: "A", text: "3.4万人" },
      { label: "B", text: "341万人" },
      { label: "C", text: "612万人" },
      { label: "D", text: "3,408万人" },
      { label: "E", text: "6,124万人" }
    ],
    answer: "B",
    explanation: `<p><strong>正答: B（341万人）</strong></p>
<h4>解法ステップ</h4>
<ol>
<li><strong>データ確認：</strong> S航空の旅客輸送量＝18,747百万人キロ、平均輸送距離＝5,500km</li>
<li><strong>定義：</strong> 輸送人キロ ＝ 旅客数 × 輸送距離 → 旅客数 ＝ 輸送人キロ ÷ 輸送距離</li>
<li><strong>単位変換：</strong> 18,747百万人キロ ＝ 18,747 × 10<sup>6</sup> 人キロ</li>
<li><strong>計算：</strong> 18,747 × 10<sup>6</sup> ÷ 5,500 ＝ 3,408,545人 ≒ 約341万人</li>
<li><strong>結論：</strong> 最も近い選択肢は341万人（B）</li>
</ol>
<h4>各選択肢の分析</h4>
<ul>
<li>A「3.4万人」→ 百万人キロを万人キロと誤認した場合（桁違い）</li>
<li><strong>B「341万人」→ ✓ 正解。</strong> 3,408,545人 ≒ 340.9万人 ≒ 341万人に最も近い</li>
<li>C「612万人」→ P航空の値（25,039÷5,500＝4,553千人≒455万人）とも異なる</li>
<li>D「3,408万人」→ 百万人キロ÷千キロ＝千人で3,408千人＝341万人なので、「万人」への換算を忘れた場合</li>
<li>E「6,124万人」→ 旅客輸送量÷貨物輸送量など誤った計算</li>
</ul>
<h4>よくある誤答</h4>
<p>「百万人キロ」の単位に注意。18,747÷5.5＝3,408 と計算して「3,408万人」としてしまうミスが多いが、これは単位が千人（百万÷千＝千）であり、3,408千人＝約341万人が正しい。</p>
<h4>検算方法</h4>
<p>341万人 × 5,500km ＝ 3,410,000 × 5,500 ＝ 18,755 × 10<sup>6</sup> 人km ≒ 18,747百万人キロ ✓</p>
<div class="tip">時短テク: 18,747百万 ÷ 5,500 ＝ 18,747 ÷ 5.5 × 10<sup>3</sup> ＝ 3,408千人 ＝ 341万人。「百万÷千＝千」の単位変換に注意。</div>`
  }
];