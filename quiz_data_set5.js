// テストセンター練習 ─ 第5セット 問題データ
const SET5_QUESTIONS = [
  {
    id: 246,
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
<p><strong>設問：</strong> 企業Cの2021年の新製品売上高と2016年の同売上高の平均はおよそいくらか。最も近いものを選べ。</p>`,
    choices: [
      { label: "A", text: "551億円" },
      { label: "B", text: "563億円" },
      { label: "C", text: "569億円" },
      { label: "D", text: "574億円" },
      { label: "E", text: "582億円" }
    ],
    answer: "A",
    explanation: `<p><strong>正答: A</strong></p><h4>解説</h4><p>企業Cの新製品売上高：2021年＝604億円、2016年＝497億円 平均＝(604 + 497) / 2 = 1,101 / 2 = 550.5億円 最も近い選択肢は551億円（A）。</p><h4>よくある計算ミス</h4><p>2021年の604を640と読み間違えると (640+497)/2=568.5 で選択肢外になる</p><div class="tip">時短テク: (600+500)/2=550 と概算すれば即Aに絞れる。</div>`
  },
  {
    id: 247,
    number: 2,
    category: "図表の読み取り",
    subcategory: "拡大する世界の資金需要",
    question: `<p><strong>データ：</strong> 表（単位：10億ドル）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th></th><th>2000</th><th>2001</th><th>2002</th><th>2003・1月</th><th>2003・4月</th></tr>
<tr><td>OECD地域</td><td>546.2</td><td>714.0</td><td>853.3</td><td>249.2</td><td>311.1</td></tr>
<tr><td>発展途上国</td><td>36.8</td><td>68.9</td><td>85.8</td><td>24.4</td><td>21.1</td></tr>
<tr><td>中・東欧諸国</td><td>1.5</td><td>6.4</td><td>3.8</td><td>0.6</td><td>1.1</td></tr>
<tr><td>その他</td><td>25.2</td><td>29.3</td><td>24.7</td><td>9.5</td><td>6.9</td></tr>
<tr><td>合計</td><td>609.7</td><td>818.6</td><td>967.6</td><td>283.7</td><td>340.2</td></tr>
</table></div>
<p><strong>設問：</strong> OECD地域の資金需要は、2000年から2001年の間におよそ何%増加したか。最も近いものを選べ。</p>`,
    choices: [
      { label: "A", text: "30.7%" },
      { label: "B", text: "39.1%" },
      { label: "C", text: "47.3%" },
      { label: "D", text: "56.2%" },
      { label: "E", text: "64.8%" }
    ],
    answer: "A",
    explanation: `<p><strong>正答: A</strong></p><h4>解説</h4><p>OECD地域の資金需要：2000年＝546.2（10億ドル）、2001年＝714.0（10億ドル） 増加率＝(714.0 − 546.2) / 546.2 = 167.8 / 546.2 = 0.3072... ≒ 30.7% 最も近い選択肢は30.7%（A）。</p><h4>よくある計算ミス</h4><p>分母を714.0（大きい方）にすると 167.8/714.0=23.5% で誤った選択肢を選んでしまう</p><div class="tip">時短テク: 増加量170、元の値550 → 170/550 ≒ 31% で即A。</div>`
  },
  {
    id: 248,
    number: 3,
    category: "図表の読み取り",
    subcategory: "事業部別従業員数",
    question: `<p><strong>データ：</strong> 積み上げ棒グラフ（人）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>年</th><th>アナリティクス</th><th>マーケティング</th><th>人材育成</th><th>その他</th><th>合計</th></tr>
<tr><td>2016</td><td>105</td><td>59</td><td>48</td><td>42</td><td>254</td></tr>
<tr><td>2017</td><td>103</td><td>74</td><td>77</td><td>43</td><td>297</td></tr>
<tr><td>2018</td><td>130</td><td>94</td><td>103</td><td>98</td><td>425</td></tr>
<tr><td>2019</td><td>127</td><td>88</td><td>80</td><td>120</td><td>415</td></tr>
<tr><td>2020</td><td>130</td><td>120</td><td>146</td><td>159</td><td>555</td></tr>
<tr><td>2021</td><td>167</td><td>152</td><td>102</td><td>149</td><td>570</td></tr>
</table></div>
<p><strong>設問：</strong> 2018年においてマーケティング事業部の従業員数が全体の従業員数に占める割合はおよそ何%か。最も近いものを選べ。</p>`,
    choices: [
      { label: "A", text: "19.7%" },
      { label: "B", text: "22.1%" },
      { label: "C", text: "23.2%" },
      { label: "D", text: "25.9%" },
      { label: "E", text: "28.4%" }
    ],
    answer: "B",
    explanation: `<p><strong>正答: B</strong></p><h4>解説</h4><p>2018年のマーケティング事業部の従業員数＝94人 2018年の全体の従業員数＝130 + 94 + 103 + 98 = 425人 割合＝94 / 425 = 0.2212... ≒ 22.1% 最も近い選択肢は22.1%（B）。</p><h4>よくある計算ミス</h4><p>全体を430人（合計の計算ミス）とすると 94/430=21.9% で近い選択肢を誤選する可能性がある</p><div class="tip">時短テク: 94/425 ≒ 94/400=23.5% と 94/450=20.9% の間 → 22%前後でBに絞れる。</div>`
  },
  {
    id: 249,
    number: 4,
    category: "図表の読み取り",
    subcategory: "婚姻件数、離婚件数",
    question: `<p><strong>データ：</strong> 折れ線グラフ（件）── 資料：厚生省「人口動態統計」</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>年</th><th>婚姻件数</th><th>離婚件数</th></tr>
<tr><td>1947</td><td>934,170</td><td>79,551</td></tr>
<tr><td>1950</td><td>715,081</td><td>83,689</td></tr>
<tr><td>1955</td><td>714,861</td><td>75,267</td></tr>
<tr><td>1960</td><td>868,115</td><td>69,410</td></tr>
<tr><td>1965</td><td>954,852</td><td>77,135</td></tr>
<tr><td>1970</td><td>1,029,405</td><td>95,937</td></tr>
<tr><td>1975</td><td>941,628</td><td>119,135</td></tr>
<tr><td>1980</td><td>774,702</td><td>141,889</td></tr>
<tr><td>1985</td><td>735,850</td><td>166,640</td></tr>
<tr><td>1988</td><td>722,138</td><td>157,808</td></tr>
<tr><td>1993</td><td>792,648</td><td>188,303</td></tr>
</table></div>
<p><strong>設問：</strong> 1947年〜1993年にかけて、離婚件数はおよそ何倍に増加したと考えられるか。最も近いものを選べ。</p>`,
    choices: [
      { label: "A", text: "2.0倍" },
      { label: "B", text: "2.2倍" },
      { label: "C", text: "2.4倍" },
      { label: "D", text: "2.6倍" },
      { label: "E", text: "2.8倍" }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C</strong></p><h4>解説</h4><p>離婚件数：1947年＝79,551件、1993年＝188,303件 倍率＝188,303 / 79,551 = 2.367...倍 最も近い選択肢は2.4倍（C）。</p><h4>よくある計算ミス</h4><p>婚姻件数と離婚件数を取り違えると全く異なる倍率になる</p><div class="tip">時短テク: 190,000/80,000 ≒ 2.4 と概算すれば即C。</div>`
  },
  {
    id: 250,
    number: 5,
    category: "図表の読み取り",
    subcategory: "短大・大学の学校数・教員数・学生数",
    question: `<p><strong>データ：</strong> 表 ── 資料：文部省大臣官房調査統計企画課「文部統計要覧」</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>年次</th><th>短大:学校数</th><th>短大:教員数</th><th>短大:学生数(千人)</th><th>短大:女子割合(%)</th><th>大学:学校数</th><th>大学:教員数</th><th>大学:学生数(千人)</th><th>大学:女子割合(%)</th></tr>
<tr><td>1970</td><td>479</td><td>15,320</td><td>263</td><td>82.9</td><td>382</td><td>76,275</td><td>1,407</td><td>18.0</td></tr>
<tr><td>1975</td><td>513</td><td>15,557</td><td>354</td><td>86.2</td><td>420</td><td>89,648</td><td>1,734</td><td>21.2</td></tr>
<tr><td>1980</td><td>517</td><td>16,372</td><td>371</td><td>88.9</td><td>446</td><td>102,989</td><td>1,835</td><td>22.1</td></tr>
<tr><td>1985</td><td>543</td><td>17,760</td><td>371</td><td>89.8</td><td>460</td><td>112,249</td><td>1,849</td><td>23.5</td></tr>
<tr><td>1990</td><td>593</td><td>20,489</td><td>479</td><td>91.4</td><td>507</td><td>123,838</td><td>2,133</td><td>27.4</td></tr>
<tr><td>1995</td><td>596</td><td>20,701</td><td>499</td><td>91.0</td><td>565</td><td>137,466</td><td>2,547</td><td>32.0</td></tr>
<tr><td>1998</td><td>588</td><td>19,040</td><td>417</td><td>90.1</td><td>604</td><td>144,310</td><td>2,668</td><td>34.9</td></tr>
<tr><td>1999</td><td>585</td><td>18,206</td><td>378</td><td>89.9</td><td>622</td><td>147,577</td><td>2,701</td><td>35.5</td></tr>
<tr><td>2000</td><td>572</td><td>16,752</td><td>328</td><td>89.6</td><td>649</td><td>150,645</td><td>2,740</td><td>36.2</td></tr>
</table></div>
<p><strong>設問：</strong> 2000年の短期大学の学生数は、1995年の同学生数と比べておよそ何%減少したか。最も近いものを選べ。</p>`,
    choices: [
      { label: "A", text: "24.7%" },
      { label: "B", text: "26.2%" },
      { label: "C", text: "30.8%" },
      { label: "D", text: "32.4%" },
      { label: "E", text: "34.3%" }
    ],
    answer: "E",
    explanation: `<p><strong>正答: E</strong></p><h4>解説</h4><p>短期大学の学生数：1995年＝499千人、2000年＝328千人 減少率＝(499 − 328) / 499 = 171 / 499 = 0.3427... ≒ 34.3% 最も近い選択肢は34.3%（E）。</p><h4>よくある計算ミス</h4><p>分母を328（減少後の値）にすると 171/328=52.1% で大きく外れる</p><div class="tip">時短テク: 減少量170、元の値500 → 170/500=34% で即E。</div>`
  },
  {
    id: 251,
    number: 6,
    category: "図表の読み取り",
    subcategory: "宅配便取扱個数の推移",
    question: `<p><strong>データ：</strong> 表（単位：千個、%）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>便名</th><th></th><th>平成16年</th><th>17年</th><th>18年</th><th>19年</th><th>20年</th></tr>
<tr><td>全宅配便</td><td>取扱個数</td><td>1,028,540</td><td>1,100,500</td><td>1,124,950</td><td>1,189,000</td><td>1,244,600</td></tr>
<tr><td></td><td>シェア</td><td>77.6</td><td>75.8</td><td>73.4</td><td>73.6</td><td>75.7</td></tr>
<tr><td>A便</td><td>取扱個数</td><td>415,560</td><td>451,810</td><td>478,770</td><td>515,200</td><td>547,850</td></tr>
<tr><td></td><td>シェア</td><td>31.3</td><td>31.1</td><td>31.2</td><td>31.9</td><td>33.3</td></tr>
<tr><td>B便</td><td>取扱個数</td><td>289,910</td><td>309,290</td><td>316,090</td><td>318,890</td><td>324,180</td></tr>
<tr><td></td><td>シェア</td><td>21.9</td><td>21.3</td><td>20.6</td><td>19.7</td><td>19.7</td></tr>
<tr><td>C便</td><td>取扱個数</td><td>94,770</td><td>105,970</td><td>106,740</td><td>107,660</td><td>108,180</td></tr>
<tr><td></td><td>シェア</td><td>7.1</td><td>7.3</td><td>7.0</td><td>6.7</td><td>6.6</td></tr>
<tr><td>D便</td><td>取扱個数</td><td>76,400</td><td>82,200</td><td>76,120</td><td>88,750</td><td>105,760</td></tr>
<tr><td></td><td>シェア</td><td>5.8</td><td>5.7</td><td>5.0</td><td>5.5</td><td>6.4</td></tr>
<tr><td>E便</td><td>取扱個数</td><td>49,020</td><td>52,570</td><td>58,670</td><td>67,360</td><td>73,380</td></tr>
<tr><td></td><td>シェア</td><td>3.7</td><td>3.6</td><td>3.8</td><td>4.2</td><td>4.5</td></tr>
</table></div>
<p>注）シェアは小包郵便物の取扱個数を含めた合計に対するもの。</p>
<p><strong>設問：</strong> 平成16年度のB便の取扱個数はA便と比べておよそ何%少ないか。最も近いものを選べ。</p>`,
    choices: [
      { label: "A", text: "9.4%" },
      { label: "B", text: "12.5%" },
      { label: "C", text: "28.2%" },
      { label: "D", text: "30.2%" },
      { label: "E", text: "36.3%" }
    ],
    answer: "D",
    explanation: `<p><strong>正答: D</strong></p><h4>解説</h4><p>平成16年度：A便＝415,560千個、B便＝289,910千個 B便がA便より少ない割合＝(415,560 − 289,910) / 415,560 = 125,650 / 415,560 = 0.3023... ≒ 30.2% 最も近い選択肢は30.2%（D）。</p><h4>よくある計算ミス</h4><p>分母をB便（289,910）にすると 125,650/289,910=43.3% で別の選択肢になる</p><div class="tip">時短テク: 差が約12.6万、A便が約41.6万 → 126/416 ≒ 30% で即D。</div>`
  },
  {
    id: 252,
    number: 7,
    category: "図表の読み取り",
    subcategory: "各社の総資産利益率推移",
    question: `<p><strong>データ：</strong> 折れ線グラフ（%）── X社（実線）とY社（破線）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>年</th><th>X社</th><th>Y社</th></tr>
<tr><td>2017</td><td>2.5</td><td>-0.8</td></tr>
<tr><td>2018</td><td>1.4</td><td>-0.9</td></tr>
<tr><td>2019</td><td>3.1</td><td>2.3</td></tr>
<tr><td>2020</td><td>4.6</td><td>3.9</td></tr>
<tr><td>2021</td><td>4.3</td><td>4.0</td></tr>
</table></div>
<p><strong>設問：</strong> Y社の2021年の総資産利益率は、2018年と比べておよそ何ポイント多いか。最も近いものを選べ。</p>`,
    choices: [
      { label: "A", text: "2.9ポイント" },
      { label: "B", text: "3.1ポイント" },
      { label: "C", text: "3.4ポイント" },
      { label: "D", text: "4.9ポイント" },
      { label: "E", text: "5.2ポイント" }
    ],
    answer: "D",
    explanation: `<p><strong>正答: D</strong></p><h4>解説</h4><p>Y社の総資産利益率：2021年＝4.0%、2018年＝−0.9% 差＝4.0 − (−0.9) = 4.9ポイント 最も近い選択肢は4.9ポイント（D）。</p><h4>よくある計算ミス</h4><p>マイナスの引き算で 4.0−0.9=3.1 としてしまう（符号処理ミス）</p><div class="tip">時短テク: マイナス値を引くときは絶対値を足す。4.0+0.9=4.9 で即D。</div>`
  },
  {
    id: 253,
    number: 8,
    category: "図表の読み取り",
    subcategory: "Z国の労働力人口推移",
    question: `<p><strong>データ：</strong> 表</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>年</th><th>労働力人口総数</th></tr>
<tr><td>2015</td><td>5,681</td></tr>
<tr><td>2016</td><td>5,720</td></tr>
<tr><td>2017</td><td>4,775</td></tr>
<tr><td>2018</td><td>5,197</td></tr>
<tr><td>2019</td><td>5,412</td></tr>
<tr><td>2020</td><td>3,036</td></tr>
</table></div>
<p><strong>設問：</strong> 2019年から2020年にかけて労働力人口総数はおよそ何%減少したか。最も近いものを選べ。</p>`,
    choices: [
      { label: "A", text: "56.7%" },
      { label: "B", text: "52.3%" },
      { label: "C", text: "49.2%" },
      { label: "D", text: "46.8%" },
      { label: "E", text: "43.9%" }
    ],
    answer: "E",
    explanation: `<p><strong>正答: E</strong></p><h4>解説</h4><p>労働力人口総数：2019年＝5,412、2020年＝3,036 減少率＝(5,412 − 3,036) / 5,412 = 2,376 / 5,412 = 0.4390... ≒ 43.9% 最も近い選択肢は43.9%（E）。</p><h4>よくある計算ミス</h4><p>分母を3,036にすると 2,376/3,036=78.3% で大幅に異なる値になる</p><div class="tip">時短テク: 2,400/5,400 ≒ 44% と概算すれば即E。</div>`
  },
  {
    id: 254,
    number: 9,
    category: "図表の読み取り",
    subcategory: "国内におけるパソコンとワープロの出荷台数",
    question: `<p><strong>データ：</strong> 棒グラフ（万台）── 白=ワード・プロセッサ／灰=パーソナル・コンピュータ</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>年</th><th>ワープロ</th><th>パソコン</th><th>合計</th></tr>
<tr><td>1987</td><td>216</td><td>122</td><td>338</td></tr>
<tr><td>1988</td><td>242(+12%)</td><td>128(+5%)</td><td>370(+9%)</td></tr>
<tr><td>1989</td><td>272(+12%)</td><td>158(+23%)</td><td>430(+16%)</td></tr>
<tr><td>1990</td><td>268(-1%)</td><td>196(+24%)</td><td>464(+8%)</td></tr>
<tr><td>1991</td><td>272(+1%)</td><td>196(±0%)</td><td>468(+1%)</td></tr>
</table></div>
<p>注）（ ）内の数値は前年比。1991年は見込み。</p>
<p><strong>設問：</strong> 1989年のパソコン・ワープロの出荷台数合計をxとすると、同年のワープロの出荷台数はおよそどのように表されるか。最も近いものを選べ。</p>`,
    choices: [
      { label: "A", text: "0.37x" },
      { label: "B", text: "0.54x" },
      { label: "C", text: "0.63x" },
      { label: "D", text: "1.58x" },
      { label: "E", text: "2.72x" }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C</strong></p><h4>解説</h4><p>1989年：ワープロ＝272万台、合計x＝272 + 158 = 430万台 ワープロの割合＝272 / 430 = 0.6326... ≒ 0.63x 最も近い選択肢は0.63x（C）。</p><h4>よくある計算ミス</h4><p>パソコン（158万台）を合計と勘違いし 272/158=1.72 としてしまう</p><div class="tip">時短テク: 270/430 ≒ 27/43 ≒ 0.63 で即C。</div>`
  },
  {
    id: 255,
    number: 10,
    category: "図表の読み取り",
    subcategory: "年齢別旅券発行数",
    question: `<p><strong>データ：</strong> 円グラフ（単位：千冊）</p>
<p><strong>2000年 計5,825千冊：</strong></p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>年齢層</th><th>発行数</th></tr>
<tr><td>19才以下</td><td>701</td></tr>
<tr><td>20〜29才</td><td>1,781</td></tr>
<tr><td>30〜39才</td><td>921</td></tr>
<tr><td>40〜49才</td><td>965</td></tr>
<tr><td>50〜59才</td><td>835</td></tr>
<tr><td>60〜69才</td><td>489</td></tr>
<tr><td>70才以上</td><td>133</td></tr>
</table></div>
<p><strong>2020年 計3,249千冊：</strong></p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>年齢層</th><th>発行数</th></tr>
<tr><td>19才以下</td><td>750</td></tr>
<tr><td>20〜29才</td><td>714</td></tr>
<tr><td>30〜39才</td><td>550</td></tr>
<tr><td>40〜49才</td><td>432</td></tr>
<tr><td>50〜59才</td><td>354</td></tr>
<tr><td>60〜69才</td><td>305</td></tr>
<tr><td>70才以上</td><td>144</td></tr>
</table></div>
<p><strong>設問：</strong> 2020年において年齢別旅券発行数合計をX、19才以下の発行数をYとおくと、XとYの関係はどのように表せるか。最も近いものを選べ。</p>`,
    choices: [
      { label: "A", text: "X/Y=0.23" },
      { label: "B", text: "4.3X=Y" },
      { label: "C", text: "0.23X=Y" },
      { label: "D", text: "X=0.43Y" },
      { label: "E", text: "0.23/Y=X" }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C</strong></p><h4>解説</h4><p>2020年：合計X＝3,249千冊、19才以下Y＝750千冊 各選択肢を検証：</p><ul><li>0.23X = 0.23 × 3,249 = 747.27 ≒ 750 = Y ✓</li></ul><p>よって 0.23X = Y が成り立つ。 最も近い選択肢はC。</p><h4>よくある計算ミス</h4><p>Yを他の年齢区分の数値と取り違えると全く異なる比率になる</p><div class="tip">時短テク: 750/3,250 ≒ 750/3,000=0.25 と 750/3,500=0.21 の間 → 0.23 で即C。</div>`
  },
  {
    id: 256,
    number: 11,
    category: "図表の読み取り",
    subcategory: "海外から帰国した子供たち",
    question: `<p><strong>データ：</strong> 積み上げ棒グラフ（千人）── 資料：文部省「学校基本調査」</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>年</th><th>小学校</th><th>中学校</th><th>高等学校</th><th>合計</th></tr>
<tr><td>1990</td><td>7,991</td><td>3,442</td><td>1,880</td><td>13,313</td></tr>
<tr><td>1991</td><td>7,787</td><td>3,338</td><td>2,318</td><td>13,443</td></tr>
<tr><td>1992</td><td>8,451</td><td>3,346</td><td>1,980</td><td>13,777</td></tr>
<tr><td>1993</td><td>8,107</td><td>3,249</td><td>2,052</td><td>13,408</td></tr>
<tr><td>1994</td><td>7,945</td><td>3,014</td><td>2,054</td><td>13,013</td></tr>
</table></div>
<p>注）終戦前からの外地居住者の数も含む。</p>
<p><strong>設問：</strong> 小学校の帰国子女数に対する高等学校の帰国子女数の割合が最も低いのは何年か。選べ。</p>`,
    choices: [
      { label: "A", text: "1990年" },
      { label: "B", text: "1991年" },
      { label: "C", text: "1992年" },
      { label: "D", text: "1993年" },
      { label: "E", text: "1994年" }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C</strong></p><h4>解説</h4><p>各年の「高等学校の帰国子女数 / 小学校の帰国子女数」を計算：</p><ul><li>1990年：1,880 / 7,991 = 0.2353</li><li>1991年：2,318 / 7,787 = 0.2977</li><li>1992年：1,980 / 8,451 = 0.2343 ← 最小</li><li>1993年：2,052 / 8,107 = 0.2531</li><li>1994年：2,054 / 7,945 = 0.2586</li></ul><p>割合が最も低いのは1992年（C）。</p><h4>よくある計算ミス</h4><p>1990年（0.2353）と1992年（0.2343）が僅差で、計算精度が低いと逆転する</p><div class="tip">時短テク: 分子が小さく分母が大きい年を先に見つける。1992年は分子1,980（低い）・分母8,451（最大）で即候補。</div>`
  },
  {
    id: 257,
    number: 12,
    category: "図表の読み取り",
    subcategory: "主要国・地域の全世界輸出入に占める割合",
    question: `<p><strong>データ：</strong> 円グラフ4つ ── 資料：IMF「DOT」、台湾「自由中国之工業」</p>
<p><strong>輸出1988年（2.7兆ドル）：</strong> EU 38%, アメリカ 12%, 日本 10%, NIES 8%, 中南米 4%, 中国 2%, ASEAN4 2%, その他 24%</p>
<p><strong>輸出1993年（3.7兆ドル）：</strong> EU 35%, アメリカ 13%, NIES 10%, 日本 10%, 中南米 4%, 中国 4%, ASEAN4 2%, その他 22%</p>
<p><strong>輸入1988年（2.8兆ドル）：</strong> EU 39%, アメリカ 16%, 日本 7%, NIES 7%, 中南米 3%, 中国 2%, ASEAN4 2%, その他 24%</p>
<p><strong>輸入1993年（3.8兆ドル）：</strong> EU 34%, アメリカ 16%, NIES 10%, 日本 6%, 中南米 5%, 中国 4%, ASEAN4 3%, その他 22%</p>
<p>注）ASEAN4とは、タイ、フィリピン、インドネシア、マレーシアをいう。</p>
<p><strong>設問：</strong> 1993年のアメリカの輸入額を100とおくと、輸入額全体はおよそいくらか。最も近いものを選べ。</p>`,
    choices: [
      { label: "A", text: "517" },
      { label: "B", text: "521" },
      { label: "C", text: "549" },
      { label: "D", text: "564" },
      { label: "E", text: "625" }
    ],
    answer: "E",
    explanation: `<p><strong>正答: E</strong></p><h4>解説</h4><p>1993年の輸入：全体＝3.8兆ドル、アメリカの割合＝16% アメリカの輸入額＝3.8 × 0.16 = 0.608兆ドル アメリカの輸入額を100とすると、全体＝3.8 / 0.608 × 100 = 625 最も近い選択肢は625（E）。</p><h4>よくある計算ミス</h4><p>割合16%を輸出の割合と取り違えると異なる基準値になる</p><div class="tip">時短テク: アメリカ=100 → 全体=100/16×100=625。1/0.16=6.25 と覚えれば即E。</div>`
  },
  {
    id: 258,
    number: 13,
    category: "図表の読み取り",
    subcategory: "Y社社員の月平均読書量",
    question: `<p><strong>データ：</strong> 横棒グラフ（%）── 管理職（灰）とその他社員（黒）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>読書量</th><th>管理職</th><th>その他社員</th></tr>
<tr><td>10冊以上</td><td>5.7%</td><td>1.9%</td></tr>
<tr><td>6冊以上10冊未満</td><td>11.4%</td><td>4.8%</td></tr>
<tr><td>2冊以上6冊未満</td><td>14.3%</td><td>11.0%</td></tr>
<tr><td>1冊以上2冊未満</td><td>22.9%</td><td>26.2%</td></tr>
<tr><td>1冊未満</td><td>45.7%</td><td>56.2%</td></tr>
</table></div>
<p><strong>設問：</strong> 月10冊以上本を読む管理職は、それ以外の管理職のおよそ何倍か。最も近いものを選べ。</p>`,
    choices: [
      { label: "A", text: "0.02倍" },
      { label: "B", text: "0.06倍" },
      { label: "C", text: "0.5倍" },
      { label: "D", text: "16.5倍" },
      { label: "E", text: "18.6倍" }
    ],
    answer: "B",
    explanation: `<p><strong>正答: B</strong></p><h4>解説</h4><p>管理職で月10冊以上読む人の割合＝5.7% それ以外の管理職の割合＝100% − 5.7% = 94.3% 倍率＝5.7 / 94.3 = 0.06044... ≒ 0.06倍 最も近い選択肢は0.06倍（B）。</p><h4>よくある計算ミス</h4><p>分母を100%にすると 5.7/100=0.057 で微妙に異なる値になる</p><div class="tip">時短テク: 5.7/94.3 ≒ 6/94 ≒ 0.06 で即B。</div>`
  },
  {
    id: 259,
    number: 14,
    category: "図表の読み取り",
    subcategory: "都市ガス事業の販売量と需要戸数",
    question: `<p><strong>データ：</strong> 表 ── 資料：日本ガス協会「ガス事業便覧」（2000年度版）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th></th><th>1990年</th><th>1996年</th><th>1997年</th><th>1998年</th><th>1999年</th></tr>
<tr><td>販売量(TJ)</td><td>628,449</td><td>904,173</td><td>923,915</td><td>947,002</td><td>983,575</td></tr>
<tr><td>家庭用(TJ)</td><td>320,019</td><td>386,229</td><td>376,404</td><td>376,933</td><td>384,035</td></tr>
<tr><td>工業用(TJ)</td><td>160,693</td><td>308,048</td><td>332,611</td><td>341,572</td><td>361,420</td></tr>
<tr><td>商業用(TJ)</td><td>105,733</td><td>145,719</td><td>148,756</td><td>156,120</td><td>159,650</td></tr>
<tr><td>その他(TJ)</td><td>42,004</td><td>64,178</td><td>66,145</td><td>72,378</td><td>78,471</td></tr>
<tr><td>需要家数(千個)</td><td>21,334</td><td>24,087</td><td>24,625</td><td>25,070</td><td>25,456</td></tr>
<tr><td>供給区域内普及率(%)</td><td>82.6</td><td>82.1</td><td>82.6</td><td>82.7</td><td>82.1</td></tr>
</table></div>
<p>注）TJ=テラ（10^12）ジュール。需要家数はメーター取付数。</p>
<p><strong>設問：</strong> 1999年の家庭用都市ガス事業の販売量は、1990年に比べておよそ何%増加したか。最も近いものを選べ。</p>`,
    choices: [
      { label: "A", text: "20.0%" },
      { label: "B", text: "29.2%" },
      { label: "C", text: "38.6%" },
      { label: "D", text: "47.5%" },
      { label: "E", text: "56.5%" }
    ],
    answer: "A",
    explanation: `<p><strong>正答: A</strong></p><h4>解説</h4><p>家庭用都市ガス販売量：1990年＝320,019 TJ、1999年＝384,035 TJ 増加率＝(384,035 − 320,019) / 320,019 = 64,016 / 320,019 = 0.20004... ≒ 20.0% 最も近い選択肢は20.0%（A）。</p><h4>よくある計算ミス</h4><p>工業用や商業用の数値を家庭用と取り違えると全く異なる増加率になる</p><div class="tip">時短テク: 64,000/320,000=0.20=20% でぴったりA。</div>`
  },
  {
    id: 260,
    number: 15,
    category: "図表の読み取り",
    subcategory: "我が国の主な農産物輸入相手国",
    question: `<p><strong>データ：</strong> 円グラフ＋表</p>
<p><strong>円グラフ：</strong> 輸入総額 5兆9,821億円</p>
<p>米国 32.5%、EU 12.8%、中国 9.3%、豪州 8%、カナダ 7.4%、その他 30%</p>
<p><strong>表：</strong> 主な農産物輸入品（単位：%）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>品目</th><th>金額</th><th>1位</th><th>2位</th><th>3位</th><th>4位</th></tr>
<tr><td>とうもろこし</td><td>5,776億円</td><td>米国 98.7</td><td>その他 1.3</td><td>-</td><td>-</td></tr>
<tr><td>大豆</td><td>2,448億円</td><td>米国 72.3</td><td>EU 15.2</td><td>カナダ 9.3</td><td>中国 3.2</td></tr>
<tr><td>小麦</td><td>3,393億円</td><td>米国 60.6</td><td>カナダ 23.7</td><td>豪州 15.5</td><td>中国 0.2</td></tr>
<tr><td>牛肉</td><td>2,225億円</td><td>豪州 76.3</td><td>米国 14.1</td><td>EU 6.1</td><td>カナダ 3.5</td></tr>
</table></div>
<p><strong>設問：</strong> 米国からの輸入額全体に占めるとうもろこしの割合はおよそいくらか。最も近いものを選べ。</p>`,
    choices: [
      { label: "A", text: "25.1%" },
      { label: "B", text: "29.3%" },
      { label: "C", text: "33.2%" },
      { label: "D", text: "38.6%" },
      { label: "E", text: "42.5%" }
    ],
    answer: "B",
    explanation: `<p><strong>正答: B</strong></p><h4>解説</h4><p>米国からの輸入額全体＝59,821億円 × 32.5% = 19,441.8億円 米国からのとうもろこし輸入額＝5,776億円 × 98.7% = 5,701.0億円 割合＝5,701.0 / 19,441.8 = 0.2933... ≒ 29.3% 最も近い選択肢は29.3%（B）。</p><h4>よくある計算ミス</h4><p>とうもろこし全体（5,776億円）を米国からの金額と勘違いし 5,776/19,442=29.7% で微妙にずれる</p><div class="tip">時短テク: 5,700/19,400 ≒ 57/194 ≒ 29% で即B。</div>`
  },
  {
    id: 261,
    number: 16,
    category: "図表の読み取り",
    subcategory: "電子計算機・同附属装置製造業の事業所数・従業者数・製造品出荷額",
    question: `<p><strong>データ：</strong> 表 ── 資料：通産省『工業統計表』産業編</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>年</th><th>事業所数(件)</th><th>従業者数(人)</th><th>製造品出荷額(百万円)</th></tr>
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
<p><strong>設問：</strong> 1987年の事業所数を1とすると、1991年の事業所数はおよそどのように表せるか。最も近いものを選べ。</p>`,
    choices: [
      { label: "A", text: "0.9" },
      { label: "B", text: "1.0" },
      { label: "C", text: "1.1" },
      { label: "D", text: "1.2" },
      { label: "E", text: "1.3" }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C</strong></p><h4>解説</h4><p>事業所数：1987年＝1,813件、1991年＝2,041件 1987年を1とすると、1991年＝2,041 / 1,813 = 1.1258... ≒ 1.1 最も近い選択肢は1.1（C）。</p><h4>よくある計算ミス</h4><p>年度を逆にして 1,813/2,041=0.89 としてしまう</p><div class="tip">時短テク: 2,041/1,813 ≒ 2,000/1,800 ≒ 1.11 で即C。</div>`
  },
  {
    id: 262,
    number: 17,
    category: "図表の読み取り",
    subcategory: "ベンチャー起業の動向",
    question: `<p><strong>データ：</strong> 棒グラフ（年間投資額/億円）＋折れ線グラフ（投資先社数）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>年</th><th>年間投資額(億円)</th><th>投資先社数</th></tr>
<tr><td>2007</td><td>2,790</td><td>2,774</td></tr>
<tr><td>2008</td><td>1,935</td><td>2,579</td></tr>
<tr><td>2009</td><td>1,366</td><td>1,294</td></tr>
<tr><td>2010</td><td>875</td><td>991</td></tr>
<tr><td>2011</td><td>1,132</td><td>915</td></tr>
<tr><td>2012</td><td>1,260</td><td>1,017</td></tr>
</table></div>
<p><strong>設問：</strong> 2011年の投資先1社当たりの年間投資額を1とおくと、2007年の同額はおよそいくつで表されるか。最も近いものを選べ。</p>`,
    choices: [
      { label: "A", text: "0.585" },
      { label: "B", text: "0.606" },
      { label: "C", text: "0.813" },
      { label: "D", text: "1.649" },
      { label: "E", text: "1.709" }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C</strong></p><h4>解説</h4><p>投資先1社当たりの年間投資額を計算：</p><ul><li>2011年：1,132億円 / 915社 = 1.2372億円/社</li><li>2007年：2,790億円 / 2,774社 = 1.0058億円/社</li></ul><p>2011年を1とすると、2007年＝1.0058 / 1.2372 = 0.8130... ≒ 0.813 最も近い選択肢は0.813（C）。</p><h4>よくある計算ミス</h4><p>分子分母を逆にして 1.2372/1.0058=1.23 としてしまう（どちらを1とするか注意）</p><div class="tip">時短テク: 1社当たりを先に概算（2011年≒1.2、2007年≒1.0）→ 1.0/1.2 ≒ 0.83 で即C。</div>`
  },
  {
    id: 263,
    number: 18,
    category: "図表の読み取り",
    subcategory: "ホテルXの利用者アンケート結果",
    question: `<p><strong>データ：</strong> レーダーチャート（5項目、5点満点）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>項目</th><th>2018年</th><th>2021年</th></tr>
<tr><td>部屋</td><td>4.1</td><td>4.4</td></tr>
<tr><td>食事</td><td>3.0</td><td>4.2</td></tr>
<tr><td>大浴場</td><td>3.5</td><td>3.8</td></tr>
<tr><td>接客</td><td>3.3</td><td>4.0</td></tr>
<tr><td>アクセス</td><td>4.0</td><td>4.2</td></tr>
</table></div>
<p><strong>設問：</strong> 2021年の接客と部屋の得点差と2018年の同差の平均は何点か。選べ。</p>`,
    choices: [
      { label: "A", text: "0.2点" },
      { label: "B", text: "0.4点" },
      { label: "C", text: "0.6点" },
      { label: "D", text: "0.8点" },
      { label: "E", text: "1.0点" }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C</strong></p><h4>解説</h4><p>接客と部屋の得点差を計算：</p><ul><li>2021年：|接客 − 部屋| = |4.0 − 4.4| = 0.4点</li><li>2018年：|接客 − 部屋| = |3.3 − 4.1| = 0.8点</li></ul><p>平均＝(0.4 + 0.8) / 2 = 1.2 / 2 = 0.6点 最も近い選択肢は0.6点（C）。</p><h4>よくある計算ミス</h4><p>絶対値を取らずに差をそのまま足すと (−0.4+(−0.8))/2=−0.6 で符号を間違える</p><div class="tip">時短テク: 差の絶対値を取ってから平均する。単純な数値なので暗算で0.6と即答可能。</div>`
  },
  {
    id: 264,
    number: 19,
    category: "図表の読み取り",
    subcategory: "G県の事業所数と年間商品販売額の推移",
    question: `<p><strong>データ：</strong> 棒グラフ（年間商品販売額/十億円）＋折れ線グラフ（事業所数）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>年</th><th>年間商品販売額(十億円)</th><th>事業所数</th></tr>
<tr><td>1999</td><td>3,954</td><td>9,918</td></tr>
<tr><td>2002</td><td>4,262</td><td>9,578</td></tr>
<tr><td>2005</td><td>4,291</td><td>9,697</td></tr>
<tr><td>2008</td><td>3,713</td><td>8,784</td></tr>
<tr><td>2011</td><td>3,675</td><td>8,240</td></tr>
<tr><td>2014</td><td>3,675</td><td>7,134</td></tr>
<tr><td>2017</td><td>3,161</td><td>5,814</td></tr>
<tr><td>2020</td><td>3,408</td><td>5,470</td></tr>
</table></div>
<p><strong>設問：</strong> 2005年から2017年にかけての年間商品販売額の減少額は、同期間に減少した1事業所当たりおよそいくらになるか。最も近いものを選べ。</p>`,
    choices: [
      { label: "A", text: "2.1億円" },
      { label: "B", text: "2.3億円" },
      { label: "C", text: "2.5億円" },
      { label: "D", text: "2.7億円" },
      { label: "E", text: "2.9億円" }
    ],
    answer: "E",
    explanation: `<p><strong>正答: E</strong></p><h4>解説</h4><p>2005年：販売額＝4,291十億円、事業所数＝9,697 2017年：販売額＝3,161十億円、事業所数＝5,814</p><ul><li>販売額の減少＝4,291 − 3,161 = 1,130十億円 = 11,300億円</li><li>事業所数の減少＝9,697 − 5,814 = 3,883</li></ul><p>1事業所当たりの減少額＝11,300 / 3,883 = 2.911...億円 ≒ 2.9億円 最も近い選択肢は2.9億円（E）。</p><h4>よくある計算ミス</h4><p>単位変換ミスで十億円を億円に変換し忘れると 1,130/3,883=0.29億円 としてしまう</p><div class="tip">時短テク: 先に単位を確認。十億円→億円は×10。11,300/3,900 ≒ 2.9 で即E。</div>`
  },
  {
    id: 265,
    number: 20,
    category: "図表の読み取り",
    subcategory: "地方公営企業の事業数の状況",
    question: `<p><strong>データ：</strong> 円グラフ ── 事業数 10,383事業（100%）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>分類</th><th>割合</th></tr>
<tr><td>水道（計）</td><td>35.3%</td></tr>
<tr><td>├ 上水道</td><td>19.1%</td></tr>
<tr><td>└ 簡易水道</td><td>16.2%</td></tr>
<tr><td>下水道</td><td>31.5%</td></tr>
<tr><td>病院</td><td>7.2%</td></tr>
<tr><td>観光施設</td><td>7.7%</td></tr>
<tr><td>宅地造成</td><td>6.8%</td></tr>
<tr><td>駐車場</td><td>2.3%</td></tr>
<tr><td>市場</td><td>1.9%</td></tr>
<tr><td>と畜場</td><td>1.7%</td></tr>
<tr><td>その他</td><td>5.6%</td></tr>
</table></div>
<p><strong>設問：</strong> と畜場の事業数をXとおくと、上水道以外の事業数はどのように表されるか。選べ。</p>`,
    choices: [
      { label: "A", text: "1.7X/(100-19.1)" },
      { label: "B", text: "100X-1.7X/19.1" },
      { label: "C", text: "19.1X/1.7" },
      { label: "D", text: "100X/1.7-19.1X" },
      { label: "E", text: "(100-19.1)X/1.7" }
    ],
    answer: "E",
    explanation: `<p><strong>正答: E</strong></p><h4>解説</h4><p>と畜場の割合＝1.7%、上水道の割合＝19.1% と畜場の事業数＝Xとすると、全体の事業数＝X / 0.017 = 100X / 1.7 上水道以外の事業数＝全体 × (100 − 19.1) / 100 = (100X / 1.7) × (80.9 / 100) = (100 − 19.1)X / 1.7 最も近い選択肢はE。</p><h4>よくある計算ミス</h4><p>上水道を含めた全体をそのまま使い、上水道「以外」の計算を忘れる</p><div class="tip">時短テク: まず全体をXで表し、次に上水道分を引く。2ステップの計算を順に行う。</div>`
  },
  {
    id: 266,
    number: 21,
    category: "図表の読み取り",
    subcategory: "主要航空会社の種類別輸送量",
    question: `<p><strong>データ：</strong> 円グラフ2つ</p>
<p><strong>旅客輸送量（百万人キロ）：</strong></p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>航空会社</th><th>旅客輸送量</th></tr>
<tr><td>P航空</td><td>25,039</td></tr>
<tr><td>Q航空</td><td>47,687</td></tr>
<tr><td>R航空</td><td>33,717</td></tr>
<tr><td>S航空</td><td>18,747</td></tr>
</table></div>
<p><strong>貨物輸送量（百万トンキロ）：</strong></p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>航空会社</th><th>貨物輸送量</th></tr>
<tr><td>P航空</td><td>2,313</td></tr>
<tr><td>Q航空</td><td>7,442</td></tr>
<tr><td>R航空</td><td>2,984</td></tr>
<tr><td>S航空</td><td>3,368</td></tr>
</table></div>
<p>注）輸送人キロ＝旅客数×輸送距離の合計。輸送トンキロ＝貨物重量×輸送距離の合計。</p>
<p><strong>設問：</strong> S航空による旅客の平均輸送距離が5,500kmとすると、のべ何人が輸送されたことになるか。最も近いものを選べ。</p>`,
    choices: [
      { label: "A", text: "3.4万人" },
      { label: "B", text: "341万人" },
      { label: "C", text: "612万人" },
      { label: "D", text: "3,408万人" },
      { label: "E", text: "6,124万人" }
    ],
    answer: "D",
    explanation: `<p><strong>正答: D</strong></p><h4>解説</h4><p>S航空の旅客輸送量＝18,747百万人キロ 平均輸送距離＝5,500km 旅客数＝18,747百万人キロ / 5,500km = 18,747,000,000 / 5,500 = 3,408,545人 ≒ 3,408万人 最も近い選択肢は3,408万人（D）。</p><h4>よくある計算ミス</h4><p>百万人キロの「百万」を落として 18,747/5,500=3.4 とし、単位を間違える</p><div class="tip">時短テク: 18,750/5,500 ≒ 19,000/5,500 ≒ 3,450 → Dの3,408に最も近い。</div>`
  },
  {
    id: 267,
    number: 22,
    category: "図表の読み取り",
    subcategory: "液晶生産金額の内訳",
    question: `<p><strong>データ：</strong> 円グラフ（2001年度・2002年度）</p>
<p><strong>2001年度：</strong> ノートPC 60.2%, 中小型 28.1%, 業務用テレビ 4.8%, ワープロ 3.2%, デスクトップPC 3.7%</p>
<p><strong>2002年度：</strong> ノートPC 49.9%, デスクトップPC 29.1%, 中小型 17.9%, 業務用 1.5%, 業務用テレビ 1.0%, ワープロ 0.6%</p>
<p><strong>設問：</strong> 2002年度のノートPCの生産金額は2001年度のおよそ何倍か。最も近いものを選べ。</p>`,
    choices: [
      { label: "A", text: "0.82倍" },
      { label: "B", text: "0.98倍" },
      { label: "C", text: "1.04倍" },
      { label: "D", text: "1.28倍" },
      { label: "E", text: "グラフからはわからない" }
    ],
    answer: "E",
    explanation: `<p><strong>正答: E</strong></p><h4>解説</h4><p>2001年度と2002年度の円グラフはそれぞれの構成比（%）のみが示されており、全体の生産金額（総額）が不明。 構成比だけでは各用途の実際の生産金額を算出できないため、ノートPCの生産金額が何倍になったかはグラフからはわからない。</p><h4>よくある計算ミス</h4><p>構成比の比率（例：30%→40%なら1.33倍）を生産金額の倍率と混同してしまう</p><div class="tip">時短テク: 円グラフで「総額」が示されていなければ、実数の比較は不可能。即E（判断不能）。</div>`
  },
  {
    id: 268,
    number: 23,
    category: "図表の読み取り",
    subcategory: "地域別半導体市場",
    question: `<p><strong>データ：</strong> 積み上げ棒グラフ（百万ドル）── 出典：経済産業省</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>年</th><th>米州</th><th>欧州</th><th>日本</th><th>アジア太平洋</th></tr>
<tr><td>96</td><td>42,679</td><td>27,562</td><td>34,175</td><td>27,550</td></tr>
<tr><td>97</td><td>45,851</td><td>23,089</td><td>32,079</td><td>30,184</td></tr>
<tr><td>98</td><td>41,432</td><td>29,406</td><td>25,921</td><td>28,853</td></tr>
<tr><td>99</td><td>47,478</td><td>31,882</td><td>37,184</td><td>51,264</td></tr>
<tr><td>00</td><td>64,071</td><td>42,309</td><td>46,749</td><td>-</td></tr>
<tr><td>01</td><td>35,778</td><td>30,216</td><td>33,148</td><td>39,820</td></tr>
<tr><td>02</td><td>31,275</td><td>27,788</td><td>30,494</td><td>51,158</td></tr>
<tr><td>03</td><td>32,310</td><td>32,310</td><td>38,942</td><td>62,843</td></tr>
<tr><td>04</td><td>39,065</td><td>39,424</td><td>45,757</td><td>88,781</td></tr>
</table></div>
<p><strong>設問：</strong> 96年から04年の間で、日本の半導体生産高が9年間の平均を上回った年は何回あるか。選べ。</p>`,
    choices: [
      { label: "A", text: "2回" },
      { label: "B", text: "3回" },
      { label: "C", text: "4回" },
      { label: "D", text: "5回" },
      { label: "E", text: "6回" }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C</strong></p><h4>解説</h4><p>96年〜04年の日本の半導体生産高（百万ドル）： 34,175 / 32,079 / 25,921 / 37,184 / 46,749 / 33,148 / 30,494 / 38,942 / 45,757</p><p>9年間の合計＝324,449　平均＝324,449 / 9 = 36,050</p><p>平均を上回った年：</p><ul><li>99年（37,184）✓</li><li>00年（46,749）✓</li><li>03年（38,942）✓</li><li>04年（45,757）✓</li></ul><p>合計4回。正答はC。</p><h4>よくある計算ミス</h4><p>平均の計算で合計を8で割ってしまうと平均が40,556になり、上回る年が2回に減る</p><div class="tip">時短テク: 概算で平均36,000と見積もり、明らかに37,000超の年を数えれば4回で即C。</div>`
  },
  {
    id: 269,
    number: 24,
    category: "図表の読み取り",
    subcategory: "A社の媒体別広告費構成比",
    question: `<p><strong>データ：</strong> ドーナツグラフ</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>大分類</th><th>中分類</th><th>割合</th></tr>
<tr><td>マスコミ（計45.5%）</td><td>テレビ</td><td>31.8%</td></tr>
<tr><td></td><td>ラジオ</td><td>6.8%</td></tr>
<tr><td></td><td>雑誌</td><td>4.5%</td></tr>
<tr><td></td><td>新聞</td><td>2.4%</td></tr>
<tr><td>インターネット（計44.3%）</td><td>動画広告</td><td>25.0%</td></tr>
<tr><td></td><td>ディスプレイ広告</td><td>10.2%</td></tr>
<tr><td></td><td>その他インターネット広告</td><td>9.1%</td></tr>
<tr><td>プロモーションメディア（計10.2%）</td><td>DM</td><td>3.6%</td></tr>
<tr><td></td><td>イベント・展示</td><td>6.6%</td></tr>
</table></div>
<p><strong>設問：</strong> テレビ広告費をXとおくと、テレビ以外の広告費はどのように表されるか。選べ。</p>`,
    choices: [
      { label: "A", text: "X/31.8" },
      { label: "B", text: "X/0.682" },
      { label: "C", text: "0.682X" },
      { label: "D", text: "X/0.318-X" },
      { label: "E", text: "100-31.8X" }
    ],
    answer: "D",
    explanation: `<p><strong>正答: D</strong></p><h4>解説</h4><p>テレビの構成比＝31.8%、テレビ広告費＝X 全体の広告費＝X / 0.318 テレビ以外の広告費＝全体 − X = X / 0.318 − X 最も近い選択肢はD。</p><h4>よくある計算ミス</h4><p>テレビ以外の構成比を 100−31.8=68.2% とし、X×68.2/31.8 と計算すべきところを X×68.2/100 としてしまう</p><div class="tip">時短テク: テレビ以外=全体−テレビ=X/0.318−X=X×(1/0.318−1)=X×(1−0.318)/0.318 で計算。</div>`
  },
  {
    id: 270,
    number: 25,
    category: "図表の読み取り",
    subcategory: "新築一戸建て発売戸数と契約率の推移（首都圏）",
    question: `<p><strong>データ：</strong> 積み上げ棒グラフ（戸）＋折れ線グラフ（契約率/首都圏平均）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>平成</th><th>合計</th><th>契約率(%)</th></tr>
<tr><td>16</td><td>6,749</td><td>83.3</td></tr>
<tr><td>17</td><td>8,583</td><td>85.4</td></tr>
<tr><td>18</td><td>10,447</td><td>-</td></tr>
<tr><td>19</td><td>8,330</td><td>78.5</td></tr>
<tr><td>20</td><td>9,887</td><td>83.1</td></tr>
<tr><td>21</td><td>11,107</td><td>75.1</td></tr>
<tr><td>22</td><td>8,712</td><td>71.2</td></tr>
<tr><td>23</td><td>8,903</td><td>79.0</td></tr>
<tr><td>24</td><td>9,571</td><td>78.1</td></tr>
<tr><td>25</td><td>11,611</td><td>75.4</td></tr>
</table></div>
<p><strong>設問：</strong> 次のうち、グラフを正しく説明しているものはいくつあるか。選べ。</p>
<p>1. 平成21年〜25年において首都圏全体の発売戸数が前年より増えた年は、東京都区部の発売戸数も増加している。<br>
2. 平成17年〜19年において、契約数が最も多いのは平成17年である。<br>
3. 平成16年〜25年において、首都圏全体の発売戸数の増加率は80%より大きい。<br>
4. 平成16年〜18年において、東京都区部の発売戸数の平均は2,400戸以上である。</p>`,
    choices: [
      { label: "A", text: "0" },
      { label: "B", text: "1つ" },
      { label: "C", text: "2つ" },
      { label: "D", text: "3つ" },
      { label: "E", text: "4つ" }
    ],
    answer: "A",
    explanation: `<p><strong>正答: A</strong></p><h4>解説</h4><p>各記述を検証する：</p><ol><li>東京都区部の個別データが提示されていないため、検証不可。</li><li>契約数＝発売戸数×契約率。H17：8,583×0.854＝7,330、H19：8,330×0.785＝6,539。H18の契約率が不明のため確定不可。</li><li>H16＝6,749戸、H25＝11,611戸。増加率＝(11,611−6,749)/6,749＝72.0%。80%より小さいので誤り。</li><li>東京都区部の個別データが提示されていないため、検証不可。</li></ol><p>「明らかに正しい」といえる記述は0個。正答はA。</p><h4>よくある計算ミス</h4><p>記述3の増加率計算で分母を11,611にすると (11,611−6,749)/11,611=41.9% と大きく異なる</p><div class="tip">時短テク: 「明らかに正しい」記述を探す問題では、検証できない記述は即スキップ。確実に検証できるものだけチェック。</div>`
  },
  {
    id: 271,
    number: 26,
    category: "図表の読み取り",
    subcategory: "主要国・地域の全世界輸出入に占める割合（2）",
    question: `<p><strong>データ：</strong> 円グラフ4つ ── 問12と同じデータ</p>
<p><strong>輸出1988年（2.7兆ドル）：</strong> EU 38%, アメリカ 12%, 日本 10%, NIES 8%, 中南米 4%, 中国 2%, ASEAN4 2%, その他 24%</p>
<p><strong>輸出1993年（3.7兆ドル）：</strong> EU 35%, アメリカ 13%, NIES 10%, 日本 10%, 中南米 4%, 中国 4%, ASEAN4 2%, その他 22%</p>
<p><strong>輸入1988年（2.8兆ドル）：</strong> EU 39%, アメリカ 16%, 日本 7%, NIES 7%, 中南米 3%, 中国 2%, ASEAN4 2%, その他 24%</p>
<p><strong>輸入1993年（3.8兆ドル）：</strong> EU 34%, アメリカ 16%, NIES 10%, 日本 6%, 中南米 5%, 中国 4%, ASEAN4 3%, その他 22%</p>
<p>注）ASEAN4とは、タイ、フィリピン、インドネシア、マレーシアをいう。</p>
<p><strong>設問：</strong> 次の記述のうち、グラフを正しく説明しているものはいくつあるか。選べ。</p>
<p>1. 輸出額、輸入額ともに全世界の中でEUの占める割合が最も大きい。<br>
2. 1988年のASEAN4の全世界の輸出額に占める割合は1993年の半分である。<br>
3. 1988年に比べ、1993年に全世界の輸入額に占める割合が減少している国は日本のみである。<br>
4. 中南米の1993年の輸出額は1988年と比べて400億ドル増えた。</p>`,
    choices: [
      { label: "A", text: "0" },
      { label: "B", text: "1つ" },
      { label: "C", text: "2つ" },
      { label: "D", text: "3つ" },
      { label: "E", text: "4つ" }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C</strong></p><h4>解説</h4><p>各記述を検証する（問12と同じデータを使用）：</p><ol><li>輸出1988年：EU 38%（最大）✓　輸出1993年：EU 35%（最大）✓　輸入1988年：EU 39%（最大）✓　輸入1993年：EU 34%（最大）✓ → 正しい。</li><li>ASEAN4の輸出割合：1988年＝2%、1993年＝2%。1993年の半分は1%であり、1988年の2%とは異なる → 誤り。</li><li>輸入割合の減少：EU（39%→34%）減少、アメリカ（16%→16%）同じ、日本（7%→6%）減少。日本のみではない（EUも減少） → 誤り。</li><li>中南米の輸出額：1988年＝2.7兆ドル×4%＝1,080億ドル、1993年＝3.7兆ドル×4%＝1,480億ドル。差＝400億ドル → 正しい。</li></ol><p>正しい記述は2つ（1と4）。正答はC。</p><h4>よくある計算ミス</h4><p>記述2で「1993年の半分」と「1988年の値」を比較する際、両年の総額の違いを無視してしまう</p><div class="tip">時短テク: 複数の記述を検証する問題では、明らかに正・誤の判断がつくものから処理する。</div>`
  },
  {
    id: 272,
    number: 27,
    category: "図表の読み取り",
    subcategory: "日米の情報産業の比較／コンピュータ機器（ハード）",
    question: `<p><strong>データ：</strong> 表2つ（単位：10億ドル、%）</p>
<p><strong>生産：</strong></p>
<div class="table-scroll"><table class="quiz-table">
<tr><th></th><th>日本 生産額</th><th>日本 対GDP比</th><th>米国 生産額</th><th>米国 対GDP比</th></tr>
<tr><td>86年</td><td>23.3</td><td>1.2</td><td>48.2</td><td>1.1</td></tr>
<tr><td>90年</td><td>40.2</td><td>1.4</td><td>50.8</td><td>0.9</td></tr>
<tr><td>91年</td><td>45.2</td><td>1.3</td><td>50.1</td><td>0.8</td></tr>
<tr><td>92年</td><td>42.8</td><td>1.2</td><td>51.9</td><td>0.8</td></tr>
<tr><td>93年</td><td>43.3</td><td>1.0</td><td>54.8</td><td>0.8</td></tr>
<tr><td>94年</td><td>50.1</td><td>1.1</td><td>59.3</td><td>0.9</td></tr>
<tr><td>95年</td><td>55.2</td><td>1.1</td><td>76.6</td><td>1.1</td></tr>
</table></div>
<p><strong>輸出入：</strong></p>
<div class="table-scroll"><table class="quiz-table">
<tr><th></th><th>日本 輸出</th><th>日本 輸入</th><th>日本 収支</th><th>米国 輸出</th><th>米国 輸入</th><th>米国 収支</th></tr>
<tr><td>86年</td><td>7.3</td><td>1.1</td><td>6.1</td><td>7.8</td><td>5.7</td><td>2.1</td></tr>
<tr><td>90年</td><td>12.2</td><td>2.9</td><td>9.2</td><td>15.7</td><td>15.8</td><td>△0.1</td></tr>
<tr><td>91年</td><td>13.4</td><td>3.1</td><td>10.4</td><td>16.5</td><td>18.4</td><td>△1.9</td></tr>
<tr><td>92年</td><td>15.8</td><td>3.2</td><td>12.6</td><td>17.6</td><td>22.9</td><td>△5.3</td></tr>
<tr><td>93年</td><td>16.9</td><td>4.0</td><td>12.9</td><td>18.0</td><td>26.9</td><td>△8.9</td></tr>
<tr><td>94年</td><td>16.0</td><td>5.5</td><td>10.5</td><td>20.4</td><td>30.6</td><td>△10.2</td></tr>
<tr><td>95年</td><td>17.2</td><td>10.4</td><td>6.7</td><td>23.1</td><td>35.4</td><td>△12.3</td></tr>
</table></div>
<p><strong>設問：</strong> 1991年から1994年において、米国のコンピュータ機器（ハード）輸出額の対前年比伸び率が最も低かったときの値はおよそどのくらいか。最も近いものを選べ。</p>`,
    choices: [
      { label: "A", text: "1.3%" },
      { label: "B", text: "2.3%" },
      { label: "C", text: "5.3%" },
      { label: "D", text: "9.3%" },
      { label: "E", text: "13.3%" }
    ],
    answer: "B",
    explanation: `<p><strong>正答: B</strong></p><h4>解説</h4><p>米国のコンピュータ機器（ハード）輸出額の対前年比伸び率を計算：</p><ul><li>1991年→1992年：(17.6 − 16.5) / 16.5 = 1.1 / 16.5 = 6.67%</li><li>1992年→1993年：(18.0 − 17.6) / 17.6 = 0.4 / 17.6 = 2.27%</li><li>1993年→1994年：(20.4 − 18.0) / 18.0 = 2.4 / 18.0 = 13.33%</li></ul><p>最も低いのは1992年→1993年の2.27% ≒ 2.3% 最も近い選択肢は2.3%（B）。</p><h4>よくある計算ミス</h4><p>差（0.4）は最小だが分母も確認が必要。差だけで判断すると正しいが、分母が極端に異なる場合は注意</p><div class="tip">時短テク: 差が最小の年（0.4）は分母も同程度なので、差が最小＝伸び率が最小と即判断可能。</div>`
  },
  {
    id: 273,
    number: 28,
    category: "図表の読み取り",
    subcategory: "業種別電力需要伸び率の推移",
    question: `<p><strong>データ：</strong> 折れ線グラフ（対前年同月伸び率/%）── 鉄鋼（破線）と非鉄（実線）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>月</th><th>鉄鋼(%)</th><th>非鉄(%)</th></tr>
<tr><td>4月</td><td>0</td><td>-10.1</td></tr>
<tr><td>5月</td><td>0</td><td>-10.4</td></tr>
<tr><td>6月</td><td>-0.2</td><td>-10.9</td></tr>
<tr><td>7月</td><td>0.7</td><td>-7.5</td></tr>
<tr><td>8月</td><td>1.1</td><td>-6.2</td></tr>
<tr><td>9月</td><td>2.5</td><td>-8.6</td></tr>
<tr><td>10月</td><td>4.8</td><td>-3.5</td></tr>
<tr><td>11月</td><td>7.9</td><td>-5.3</td></tr>
<tr><td>12月</td><td>8.0</td><td>-1.8</td></tr>
<tr><td>1月</td><td>6.3</td><td>-1.5</td></tr>
<tr><td>2月</td><td>5.7</td><td>-1.8</td></tr>
<tr><td>3月</td><td>3.6</td><td>1.7</td></tr>
</table></div>
<p><strong>設問：</strong> グラフから明らかに正しいといえるものはどれか。選べ。</p>
<p>A. 5月の鉄鋼の電力需要量は4月から3%増加している。<br>
B. 鉄鋼の年間電力需要量合計は、非鉄より多い。<br>
C. 非鉄の12月と2月の電力需要量は同じである。<br>
D. 各月で鉄鋼と非鉄の電力需要量が同じだとすると、前年の年間電力需要量合計は非鉄の方が多い。<br>
E. 前年の非鉄の9月の電力需要量は8月より低い。</p>`,
    choices: [
      { label: "A", text: "5月の鉄鋼の電力需要量は4月から3%増加している" },
      { label: "B", text: "鉄鋼の年間電力需要量合計は、非鉄より多い" },
      { label: "C", text: "非鉄の12月と2月の電力需要量は同じである" },
      { label: "D", text: "各月で鉄鋼と非鉄の電力需要量が同じだとすると、前年の年間電力需要量合計は非鉄の方が多い" },
      { label: "E", text: "前年の非鉄の9月の電力需要量は8月より低い" }
    ],
    answer: "D",
    explanation: `<p><strong>正答: D</strong></p><h4>解説</h4><p>各選択肢を検証する。データは「対前年同月伸び率」であり、絶対量は不明。</p><p>A. 対前年同月伸び率のデータからは月間の変化はわからない → 判断不可。 B. 絶対量が不明のため比較不可 → 判断不可。 C. 12月と2月の対前年伸び率が同じ（−1.8%）でも、前年の12月と2月の実需要量が異なれば今年の実需要量も異なる → 判断不可。 D. 各月で今年の鉄鋼と非鉄の電力需要量が同じと仮定すると、前年の需要量は「今年の値 / (1 + 伸び率)」で求まる。鉄鋼は伸び率がほぼ0以上→前年≦今年。非鉄は伸び率がほぼマイナス→前年＞今年。したがって前年の年間合計は非鉄の方が多い → 正しい。 E. 今年の8月と9月の需要量が同じ場合、前年8月＝今年/(1−0.062)、前年9月＝今年/(1−0.086)。分母が小さいほど値は大きくなるので、前年9月＞前年8月 → 誤り（「低い」ではなく「高い」）。</p><p>正答はD。</p><h4>よくある計算ミス</h4><p>選択肢Cで「同じ伸び率＝同じ需要量」と早合点してしまう</p><div class="tip">時短テク: 伸び率データのみの問題では「絶対量は不明」を常に念頭に。判断不可の選択肢を先に除外。</div>`
  },
  {
    id: 274,
    number: 29,
    category: "図表の読み取り",
    subcategory: "海面養殖業主要魚種別生産量及び生産額の推移",
    question: `<p><strong>データ：</strong> 表（数量：千トン／金額：億円）</p>
<p><strong>生産量：</strong></p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>魚種</th><th>昭和60年</th><th>平成3年</th><th>4年</th><th>5年</th><th>6年</th><th>7年</th></tr>
<tr><td>合計</td><td>1,088</td><td>1,262</td><td>1,306</td><td>1,274</td><td>1,344</td><td>1,315</td></tr>
<tr><td>ぶり類</td><td>151</td><td>161</td><td>149</td><td>142</td><td>148</td><td>170</td></tr>
<tr><td>まだい</td><td>28</td><td>60</td><td>66</td><td>73</td><td>77</td><td>72</td></tr>
<tr><td>ほたて貝</td><td>109</td><td>189</td><td>208</td><td>241</td><td>199</td><td>228</td></tr>
<tr><td>かき類</td><td>251</td><td>239</td><td>245</td><td>236</td><td>223</td><td>227</td></tr>
<tr><td>こんぶ類</td><td>54</td><td>43</td><td>73</td><td>60</td><td>58</td><td>55</td></tr>
<tr><td>わかめ類</td><td>112</td><td>99</td><td>112</td><td>90</td><td>88</td><td>100</td></tr>
<tr><td>のり類</td><td>352</td><td>403</td><td>383</td><td>363</td><td>483</td><td>407</td></tr>
<tr><td>その他</td><td>31</td><td>67</td><td>71</td><td>70</td><td>67</td><td>56</td></tr>
</table></div>
<p><strong>生産額（億円）：</strong></p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>魚種</th><th>昭和60年</th><th>平成3年</th><th>4年</th><th>5年</th><th>6年</th><th>7年</th></tr>
<tr><td>合計</td><td>5,225</td><td>6,407</td><td>6,126</td><td>6,069</td><td>6,270</td><td>5,739</td></tr>
<tr><td>ぶり類</td><td>1,427</td><td>1,405</td><td>1,309</td><td>1,372</td><td>1,264</td><td>1,187</td></tr>
<tr><td>まだい</td><td>488</td><td>723</td><td>667</td><td>656</td><td>783</td><td>755</td></tr>
<tr><td>ほたて貝</td><td>298</td><td>395</td><td>387</td><td>374</td><td>377</td><td>380</td></tr>
<tr><td>かき類</td><td>304</td><td>401</td><td>421</td><td>410</td><td>427</td><td>409</td></tr>
<tr><td>こんぶ類</td><td>80</td><td>135</td><td>134</td><td>145</td><td>119</td><td>92</td></tr>
<tr><td>わかめ類</td><td>143</td><td>182</td><td>158</td><td>136</td><td>159</td><td>164</td></tr>
<tr><td>のり類</td><td>1,236</td><td>1,173</td><td>1,100</td><td>1,084</td><td>1,336</td><td>1,020</td></tr>
<tr><td>その他</td><td>1,249</td><td>1,993</td><td>1,951</td><td>1,892</td><td>1,804</td><td>1,732</td></tr>
</table></div>
<p><strong>設問：</strong> 平成4年から平成5年にかけて、ほたて貝の千t当たりの価格はおよそ何%下落したか。最も近いものを選べ。</p>`,
    choices: [
      { label: "A", text: "12.1%" },
      { label: "B", text: "16.7%" },
      { label: "C", text: "21.3%" },
      { label: "D", text: "25.9%" },
      { label: "E", text: "32.8%" }
    ],
    answer: "B",
    explanation: `<p><strong>正答: B</strong></p><h4>解説</h4><p>ほたて貝の千t当たりの価格を計算：</p><ul><li>平成4年：生産量＝208千t、生産額＝387億円 → 387 / 208 = 1.8606億円/千t</li><li>平成5年：生産量＝241千t、生産額＝374億円 → 374 / 241 = 1.5519億円/千t</li></ul><p>下落率＝(1.8606 − 1.5519) / 1.8606 = 0.3087 / 1.8606 = 0.1659... ≒ 16.6% 最も近い選択肢は16.7%（B）。</p><h4>よくある計算ミス</h4><p>生産額の減少率(387→374で3.4%)と単価の下落率(16.6%)を混同してしまう</p><div class="tip">時短テク: 単価＝金額/量。量が増えて金額が減れば、単価は大幅に下落する。概算で1.86→1.55、差0.31/1.86 ≒ 17%。</div>`
  },
  {
    id: 275,
    number: 30,
    category: "図表の読み取り",
    subcategory: "紙・板紙の主要生産国における生産量推移",
    question: `<p><strong>データ：</strong> 棒グラフ2つ ── 出典：経済産業省</p>
<p><strong>主要国の生産量（万トン）：</strong></p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>国</th><th>2000年</th><th>2007年</th></tr>
<tr><td>米国</td><td>8,583</td><td>8,355</td></tr>
<tr><td>中国</td><td>3,090</td><td>7,350</td></tr>
<tr><td>日本</td><td>3,183</td><td>3,127</td></tr>
<tr><td>ドイツ</td><td>1,818</td><td>2,318</td></tr>
<tr><td>カナダ</td><td>2,077</td><td>1,737</td></tr>
</table></div>
<p><strong>世界の地域別需要（万トン）：</strong></p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>年</th><th>北米</th><th>欧州</th><th>アジア</th><th>その他</th><th>合計</th></tr>
<tr><td>1980</td><td>6,510</td><td>5,724</td><td>3,359</td><td>1,838</td><td>17,431</td></tr>
<tr><td>1985</td><td>7,276</td><td>6,177</td><td>4,233</td><td>1,838</td><td>19,524</td></tr>
<tr><td>1990</td><td>8,331</td><td>7,466</td><td>6,181</td><td>1,838</td><td>23,816</td></tr>
<tr><td>1995</td><td>9,308</td><td>7,410</td><td>8,609</td><td>2,278</td><td>27,605</td></tr>
<tr><td>2000</td><td>9,983</td><td>9,211</td><td>10,422</td><td>2,766</td><td>32,382</td></tr>
<tr><td>2007</td><td>9,434</td><td>10,181</td><td>15,890</td><td>3,675</td><td>39,180</td></tr>
</table></div>
<p><strong>設問：</strong> 2000年の紙・板紙の主要生産国5カ国の生産量の平均を100とすると、同年のドイツの生産量はおよそいくつで表せるか。最も近いものを選べ。</p>`,
    choices: [
      { label: "A", text: "10" },
      { label: "B", text: "24" },
      { label: "C", text: "32" },
      { label: "D", text: "40" },
      { label: "E", text: "48" }
    ],
    answer: "E",
    explanation: `<p><strong>正答: E</strong></p><h4>解説</h4><p>2000年の主要5カ国の生産量（万トン）： 米国8,583 + 中国3,090 + 日本3,183 + ドイツ1,818 + カナダ2,077 = 18,751</p><p>平均＝18,751 / 5 = 3,750.2万トン → これを100とおく ドイツ＝1,818 / 3,750.2 × 100 = 48.5 最も近い選択肢は48（E）。</p><h4>よくある計算ミス</h4><p>5カ国の合計を計算する際にカナダを含め忘れると平均が変わる</p><div class="tip">時短テク: 18,750/5=3,750。1,818/3,750 ≒ 1,800/3,750=0.48 → 48で即E。</div>`
  },
  {
    id: 276,
    number: 31,
    category: "図表の読み取り",
    subcategory: "首都圏の製造業の事業所数等",
    question: `<p><strong>データ：</strong> 表 ── 出典：経済産業省（従業員4人以上の事業所）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>地域</th><th>事業所数(件)</th><th>前年比(%)</th><th>従業者数(人)</th><th>前年比(%)</th><th>製造品出荷額等(百万円)</th><th>前年比(%)</th></tr>
<tr><td>全国</td><td>258,032</td><td>-0.2</td><td>8,494,793</td><td>3.3</td><td>335,854,210</td><td>6.7</td></tr>
<tr><td>首都圏合計</td><td>71,845</td><td>0.2</td><td>2,274,162</td><td>3.3</td><td>92,596,153</td><td>4.9</td></tr>
<tr><td>茨城</td><td>6,621</td><td>0.8</td><td>289,216</td><td>5.5</td><td>12,667,610</td><td>10.2</td></tr>
<tr><td>栃木</td><td>5,418</td><td>-0.3</td><td>218,656</td><td>4.5</td><td>9,245,343</td><td>5.9</td></tr>
<tr><td>群馬</td><td>6,276</td><td>-2.0</td><td>213,559</td><td>0.5</td><td>8,109,732</td><td>4.3</td></tr>
<tr><td>埼玉</td><td>15,107</td><td>0.9</td><td>435,302</td><td>2.5</td><td>14,730,186</td><td>3.5</td></tr>
<tr><td>千葉</td><td>6,545</td><td>3.6</td><td>231,851</td><td>5.3</td><td>14,314,261</td><td>10.4</td></tr>
<tr><td>東京</td><td>18,652</td><td>-2.0</td><td>369,723</td><td>0.7</td><td>10,612,138</td><td>2.4</td></tr>
<tr><td>神奈川</td><td>10,813</td><td>2.6</td><td>434,582</td><td>4.7</td><td>20,169,960</td><td>0.1</td></tr>
<tr><td>山梨</td><td>2,413</td><td>0.1</td><td>81,273</td><td>2.8</td><td>2,746,923</td><td>7.3</td></tr>
</table></div>
<p><strong>設問：</strong> 千葉の製造品出荷額等は、前年と比べておよそいくら増えたか。最も近いものを選べ。</p>`,
    choices: [
      { label: "A", text: "1兆200億円" },
      { label: "B", text: "1兆1,300億円" },
      { label: "C", text: "1兆3,500億円" },
      { label: "D", text: "1兆4,800億円" },
      { label: "E", text: "13兆5,000億円" }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C</strong></p><h4>解説</h4><p>千葉の製造品出荷額等＝14,314,261百万円、前年比＝10.4%増 前年の出荷額＝14,314,261 / 1.104 = 12,967,582百万円 増加額＝14,314,261 − 12,967,582 = 1,346,679百万円 ≒ 1兆3,467億円 最も近い選択肢は1兆3,500億円（C）。</p><h4>よくある計算ミス</h4><p>14,314,261×0.104=1,488,683 と計算してしまう（増加率を当年値に掛けるミス、正しくは前年値に掛ける）</p><div class="tip">時短テク: 増加額＝当年値×(増加率/(1+増加率))=14,314×(0.104/1.104) ≒ 14,314×0.094 ≒ 1,346。</div>`
  },
  {
    id: 277,
    number: 32,
    category: "図表の読み取り",
    subcategory: "パート採用理由",
    question: `<p><strong>データ：</strong> 表（複数回答／%）── 資料：雇用情報センター調査</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>採用理由</th><th>調査計</th><th>製造業</th><th>卸・小売業</th><th>サービス業</th></tr>
<tr><td>仕事の内容がパートで間に合う</td><td>77</td><td>80</td><td>64</td><td>80</td></tr>
<tr><td>人件費が割安</td><td>60</td><td>58</td><td>67</td><td>56</td></tr>
<tr><td>繁忙な時間帯に対応</td><td>44</td><td>29</td><td>71</td><td>76</td></tr>
<tr><td>雇用調整が容易</td><td>30</td><td>34</td><td>20</td><td>26</td></tr>
<tr><td>経験・能力を積極的に活用する</td><td>26</td><td>19</td><td>52</td><td>22</td></tr>
</table></div>
<p><strong>設問：</strong> 卸・小売業におけるパート採用理由で「人件費が割安」と答えた人数をXとおくと、卸・小売業の回答者全体はおよそどのように表されるか。最も近いものを選べ。</p>`,
    choices: [
      { label: "A", text: "0.65X" },
      { label: "B", text: "0.8X" },
      { label: "C", text: "1.1X" },
      { label: "D", text: "1.25X" },
      { label: "E", text: "1.5X" }
    ],
    answer: "E",
    explanation: `<p><strong>正答: E</strong></p><h4>解説</h4><p>卸・小売業で「人件費が割安」と回答した割合＝67%（複数回答） 「人件費が割安」と答えた人数＝Xとすると、卸・小売業の回答者全体はX / 0.67 X / 0.67 = 1.4925X ≒ 1.5X 最も近い選択肢は1.5X（E）。</p><h4>よくある計算ミス</h4><p>67%を「全体に占める割合」ではなく「他の理由との差」と読み間違える</p><div class="tip">時短テク: 1/0.67 ≒ 1.5 と即計算。</div>`
  },
  {
    id: 278,
    number: 33,
    category: "図表の読み取り",
    subcategory: "学校種別1年間の学習費総額",
    question: `<p><strong>データ：</strong> 積み上げ棒グラフ（円）── 学校教育費（灰）、学校給食費（白）、学校外活動費（黒）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>学校種別</th><th>学習費総額</th><th>学校外活動費の割合</th></tr>
<tr><td>幼稚園 公立</td><td>229,624</td><td>36.2%</td></tr>
<tr><td>幼稚園 私立</td><td>541,226</td><td>26.6%</td></tr>
<tr><td>小学校 公立</td><td>307,723</td><td>68.3%</td></tr>
<tr><td>小学校 私立</td><td>1,392,740</td><td>40.5%</td></tr>
<tr><td>中学校 公立</td><td>480,481</td><td>63.5%</td></tr>
<tr><td>中学校 私立</td><td>1,236,259</td><td>23.4%</td></tr>
<tr><td>高等学校 公立</td><td>516,186</td><td>30.9%</td></tr>
<tr><td>高等学校 私立</td><td>980,851</td><td>20.2%</td></tr>
</table></div>
<p><strong>設問：</strong> 1年間の学習費総額について、公立の幼稚園から小学校に対する増加率を1としたとき、公立の小学校から中学校に対する増加率はおよそどのように表せるか。最も近いものを選べ。</p>`,
    choices: [
      { label: "A", text: "0.95" },
      { label: "B", text: "1.04" },
      { label: "C", text: "1.17" },
      { label: "D", text: "1.92" },
      { label: "E", text: "2.08" }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C</strong></p><h4>解説</h4><p>公立の学習費総額：</p><ul><li>幼稚園：229,624円</li><li>小学校：307,723円</li><li>中学校：480,481円</li></ul><p>幼稚園→小学校の倍率＝307,723 / 229,624 = 1.3401 小学校→中学校の倍率＝480,481 / 307,723 = 1.5614</p><p>幼稚園→小学校の増加率を1としたとき、小学校→中学校の増加率＝1.5614 / 1.3401 = 1.165 ≒ 1.17 最も近い選択肢は1.17（C）。</p><h4>よくある計算ミス</h4><p>増加額の比（172,758/78,099=2.21）と増加率の比（1.17）を混同してしまう</p><div class="tip">時短テク: 倍率の比を求めるなら、先に各倍率を概算（1.34と1.56）→ 1.56/1.34 ≒ 1.16 で即C。</div>`
  },
  {
    id: 279,
    number: 34,
    category: "図表の読み取り",
    subcategory: "国別人口推移",
    question: `<p><strong>データ：</strong> 表（単位：百万人）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>国名</th><th>1990年</th><th>1995年</th><th>2000年</th></tr>
<tr><td>日本</td><td>123</td><td>125</td><td>128</td></tr>
<tr><td>アメリカ</td><td>249</td><td>258</td><td>266</td></tr>
<tr><td>中国</td><td>1,139</td><td>1,222</td><td>1,299</td></tr>
<tr><td>フランス</td><td>56</td><td>57</td><td>58</td></tr>
<tr><td>イギリス</td><td>57</td><td>57</td><td>58</td></tr>
</table></div>
<p><strong>設問：</strong> 1990〜1995年の5年間における人口増加率が2番目に低い国はどこか。選べ。</p>`,
    choices: [
      { label: "A", text: "日本" },
      { label: "B", text: "アメリカ" },
      { label: "C", text: "中国" },
      { label: "D", text: "フランス" },
      { label: "E", text: "イギリス" }
    ],
    answer: "A",
    explanation: `<p><strong>正答: A</strong></p><h4>解説</h4><p>1990年→1995年の人口増加率：</p><ul><li>日本：(125 − 123) / 123 = 1.63%</li><li>アメリカ：(258 − 249) / 249 = 3.61%</li><li>中国：(1,222 − 1,139) / 1,139 = 7.29%</li><li>フランス：(57 − 56) / 56 = 1.79%</li><li>イギリス：(57 − 57) / 57 = 0%</li></ul><p>低い順：イギリス(0%) → 日本(1.63%) → フランス(1.79%) → アメリカ(3.61%) → 中国(7.29%) 2番目に低いのは日本（A）。</p><h4>よくある計算ミス</h4><p>日本とフランスの増加率が近く（1.63% vs 1.79%）、計算が雑だと順位を取り違える</p><div class="tip">時短テク: 増加量で比較：日本2/123 ≒ 1.6%、フランス1/56 ≒ 1.8%。日本の方が低い。</div>`
  },
  {
    id: 280,
    number: 35,
    category: "図表の読み取り",
    subcategory: "運転免許保有者数の推移",
    question: `<p><strong>データ：</strong> 表</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>年</th><th>男性(千人)</th><th>女性(千人)</th><th>男性増減率(%)</th><th>女性増減率(%)</th><th>全体普及率(%)</th><th>男性普及率(%)</th><th>女性普及率(%)</th></tr>
<tr><td>平成21年</td><td>45,518</td><td>34,930</td><td>0.2</td><td>1.3</td><td>73.6</td><td>86.2</td><td>61.8</td></tr>
<tr><td>22</td><td>45,539</td><td>35,273</td><td>0</td><td>1.0</td><td>73.9</td><td>86.3</td><td>62.4</td></tr>
<tr><td>23</td><td>45,487</td><td>-</td><td>-0.1</td><td>0.7</td><td>73.7</td><td>85.8</td><td>62.5</td></tr>
<tr><td>24</td><td>45,448</td><td>35,767</td><td>-0.1</td><td>0.7</td><td>73.9</td><td>85.7</td><td>62.9</td></tr>
<tr><td>25</td><td>45,437</td><td>36,051</td><td>0</td><td>0.8</td><td>X</td><td>85.8</td><td>63.4</td></tr>
</table></div>
<p>注）単位未満は四捨五入しているため、全体と内訳が一致しないことがある。</p>
<p><strong>設問：</strong> 平成20年の運転免許保有者は男女合わせておよそ何人か。最も近いものを選べ。</p>`,
    choices: [
      { label: "A", text: "79,120千人" },
      { label: "B", text: "79,400千人" },
      { label: "C", text: "79,410千人" },
      { label: "D", text: "79,900千人" },
      { label: "E", text: "79,910千人" }
    ],
    answer: "E",
    explanation: `<p><strong>正答: E</strong></p><h4>解説</h4><p>平成21年のデータから平成20年の保有者数を逆算する。 平成21年：男性＝45,518千人（増減率＋0.2%）、女性＝34,930千人（増減率＋1.3%）</p><p>平成20年の男性＝45,518 / 1.002 = 45,427.1千人 平成20年の女性＝34,930 / 1.013 = 34,481.7千人 合計＝45,427.1 + 34,481.7 = 79,908.8 ≒ 79,910千人</p><p>最も近い選択肢は79,910千人（E）。</p><h4>よくある計算ミス</h4><p>増減率を引き算で逆算（45,518−45,518×0.002=45,427）とすると近似値は合うが、1.013で割るべきところを0.013を引くと誤差が出る</p><div class="tip">時短テク: 増減率が小さい（1%以下）場合は引き算で近似可能。男性 ≒ 45,518−91=45,427、女性 ≒ 34,930−454=34,476。</div>`
  },
  {
    id: 281,
    number: 36,
    category: "図表の読み取り",
    subcategory: "わが国の森林の成長量と伐採量",
    question: `<p><strong>データ：</strong> 棒グラフ（百万m³）＋折れ線グラフ（伐採量/成長量 %）</p>
<p>注）成長量＝伐採量＋蓄積の増加量</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>期間</th><th>成長量</th><th>伐採量</th><th>伐採量/成長量(%)</th></tr>
<tr><td>1951-55</td><td>74.8</td><td>-</td><td>-</td></tr>
<tr><td>56-60</td><td>76.0</td><td>-</td><td>72.6</td></tr>
<tr><td>61-65</td><td>-</td><td>-</td><td>91.8</td></tr>
<tr><td>66-70</td><td>-</td><td>38.4</td><td>68.2</td></tr>
<tr><td>71-75</td><td>69.7</td><td>21.4</td><td>49.2</td></tr>
<tr><td>76-80</td><td>-</td><td>41.7</td><td>42.6</td></tr>
<tr><td>81-85</td><td>-</td><td>34.9</td><td>40.8</td></tr>
<tr><td>86-89</td><td>-</td><td>35.0</td><td>-</td></tr>
</table></div>
<p><strong>設問：</strong> 1986年〜89年の成長量はおよそいくらか。最も近いものを選べ。</p>`,
    choices: [
      { label: "A", text: "102.2" },
      { label: "B", text: "104.5" },
      { label: "C", text: "106.2" },
      { label: "D", text: "108.5" },
      { label: "E", text: "110.2" }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C</strong></p><h4>解説</h4><p>1986〜89年の伐採量＝35.0（百万m3） 棒グラフから読み取ると、伐採量/成長量の比率はこの期間で約33%と推定される。 （81-85年の比率40.8%から引き続き低下傾向にある）</p><p>成長量＝伐採量 / 比率 = 35.0 / 0.33 ≒ 106.1（百万m3） 最も近い選択肢は106.2（C）。</p><h4>よくある計算ミス</h4><p>比率を40.8%（前期間）のまま使うと 35.0/0.408=85.8 で異なる選択肢になる</p><div class="tip">時短テク: グラフの傾向を読み取り、最新期間の比率を正確に推定することが重要。</div>`
  },
  {
    id: 282,
    number: 37,
    category: "図表の読み取り",
    subcategory: "目的別歳出純計決算額の状況",
    question: `<p><strong>データ：</strong> 表（億円）</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>費目</th><th>平成20年度 決算額</th><th>平成19年度 決算額</th><th>20年度 構成比(%)</th><th>19年度 構成比(%)</th><th>20年度 増減率(%)</th><th>19年度 増減率(%)</th></tr>
<tr><td>総務費</td><td>92,398</td><td>92,759</td><td>9.8</td><td>10.0</td><td>△0.4</td><td>△8.2</td></tr>
<tr><td>民生費</td><td>110,743</td><td>106,116</td><td>11.8</td><td>11.4</td><td>4.4</td><td>6.8</td></tr>
<tr><td>衛生費</td><td>63,528</td><td>62,675</td><td>[X]</td><td>6.7</td><td>1.4</td><td>11.6</td></tr>
<tr><td>労働費</td><td>5,370</td><td>5,570</td><td>0.6</td><td>0.6</td><td>△3.6</td><td>3.5</td></tr>
<tr><td>農林水産業費</td><td>64,062</td><td>62,131</td><td>6.8</td><td>6.7</td><td>3.1</td><td>9.5</td></tr>
<tr><td>商工費</td><td>53,288</td><td>50,471</td><td>5.7</td><td>5.4</td><td>5.6</td><td>13.5</td></tr>
<tr><td>土木費</td><td>216,906</td><td>226,162</td><td>23.1</td><td>24.3</td><td>△4.1</td><td>4.5</td></tr>
<tr><td>消防費</td><td>17,137</td><td>16,465</td><td>1.8</td><td>1.8</td><td>4.1</td><td>4.4</td></tr>
<tr><td>警察費</td><td>31,863</td><td>31,237</td><td>3.4</td><td>3.4</td><td>[Z]</td><td>5.2</td></tr>
<tr><td>教育費</td><td>185,702</td><td>185,304</td><td>[Y]</td><td>19.9</td><td>0.2</td><td>0.7</td></tr>
<tr><td>公債費</td><td>81,020</td><td>75,371</td><td>8.6</td><td>8.1</td><td>7.5</td><td>5.9</td></tr>
<tr><td>その他</td><td>16,161</td><td>16,503</td><td>1.8</td><td>1.7</td><td>△2.1</td><td>7.1</td></tr>
<tr><td>合計</td><td>938,178</td><td>930,764</td><td>100.0</td><td>100.0</td><td>0.8</td><td>3.9</td></tr>
</table></div>
<p><strong>設問：</strong> 表中の［Z］に入る数値はおよそいくつか。最も近いものを選べ。</p>`,
    choices: [
      { label: "A", text: "1.9" },
      { label: "B", text: "2.0" },
      { label: "C", text: "2.1" },
      { label: "D", text: "2.2" },
      { label: "E", text: "2.3" }
    ],
    answer: "B",
    explanation: `<p><strong>正答: B</strong></p><h4>解説</h4><p>警察費の増減率[Z]を計算： 平成20年度＝31,863億円、平成19年度＝31,237億円 増減率＝(31,863 − 31,237) / 31,237 = 626 / 31,237 = 0.02004... ≒ 2.0% 最も近い選択肢は2.0（B）。</p><h4>よくある計算ミス</h4><p>分母を平成20年度（31,863）にすると 626/31,863=1.96% で微妙にずれる</p><div class="tip">時短テク: 626/31,237 ≒ 630/31,000 ≒ 2.0% で即B。</div>`
  },
  {
    id: 283,
    number: 38,
    category: "図表の読み取り",
    subcategory: "世界各国の食品Pの消費量推移",
    question: `<p><strong>データ：</strong> 散布図 ── X軸：1980年(t)、Y軸：2013年(t)</p>
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
<p><strong>設問：</strong> 1980年〜2013年における食品Pの消費量増加率が3番目に大きいのはどの国か。選べ。</p>`,
    choices: [
      { label: "A", text: "フランス" },
      { label: "B", text: "英国" },
      { label: "C", text: "アメリカ" },
      { label: "D", text: "日本" },
      { label: "E", text: "イタリア" }
    ],
    answer: "E",
    explanation: `<p><strong>正答: E</strong></p><h4>解説</h4><p>1980年→2013年の消費量増加率（倍率）を計算：</p><ul><li>スペイン：31.2 / 3.9 = 8.00倍</li><li>フランス：52.6 / 11.4 = 4.61倍</li><li>イタリア：17.7 / 4.3 = 4.12倍</li><li>英国：44.7 / 11.5 = 3.89倍</li><li>日本：2.1 / 0.8 = 2.63倍</li><li>アメリカ：40.6 / 18.4 = 2.21倍</li><li>カナダ：27.3 / 12.8 = 2.13倍</li><li>ドイツ：34.2 / 18.9 = 1.81倍</li><li>デンマーク：46.2 / 33.2 = 1.39倍</li><li>スウェーデン：54.7 / 39.7 = 1.38倍</li></ul><p>増加率が3番目に大きいのはイタリア（E）。</p><h4>よくある計算ミス</h4><p>増加「量」（絶対値）と増加「率」（倍率）を混同すると、アメリカ（+22.2）が上位に来てしまう</p><div class="tip">時短テク: 倍率は「2013年値/1980年値」。分子が小さくても分母がさらに小さければ倍率は大きい。</div>`
  },
  {
    id: 284,
    number: 39,
    category: "図表の読み取り",
    subcategory: "主要国の国内総生産",
    question: `<p><strong>データ：</strong> 表</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th></th><th>O国 1999</th><th>O国 2009</th><th>P国 1999</th><th>P国 2009</th><th>Q国 1999</th><th>Q国 2009</th><th>R国 1999</th><th>R国 2009</th><th>S国 1999</th><th>S国 2009</th></tr>
<tr><td>GDP(億ドル)</td><td>1,217</td><td>6,940</td><td>7,963</td><td>18,872</td><td>1,112</td><td>2,468</td><td>1,238</td><td>5,141</td><td>1,157</td><td>3,821</td></tr>
<tr><td>第一次産業(%)</td><td>11.4</td><td>4.7</td><td>3.2</td><td>2.9</td><td>3.0</td><td>2.5</td><td>4.1</td><td>2.8</td><td>7.0</td><td>4.9</td></tr>
<tr><td>第二次産業(%)</td><td>36.5</td><td>35.4</td><td>35.9</td><td>33.1</td><td>41.8</td><td>39.1</td><td>50.9</td><td>47.4</td><td>44.9</td><td>39.6</td></tr>
<tr><td>第三次産業(%)</td><td>52.1</td><td>59.9</td><td>60.9</td><td>64.0</td><td>55.2</td><td>58.4</td><td>45.0</td><td>49.9</td><td>48.0</td><td>55.5</td></tr>
</table></div>
<p><strong>設問：</strong> 次のうち、表から明らかに正しいといえるものを選べ。</p>
<p>A. 第一次産業はすべての国で衰退の途にある。<br>
B. 国内総生産の伸び率が最も高いのはR国であるが、金額はP国が最も高い。<br>
C. 第三次産業の成長は、世界中で見られるサービス業の充実と深い関わりがある。<br>
D. 2009年度のO国の第三次産業による国内総生産は、10年前のP国の第三次産業による国内総生産より多い。<br>
E. O国は1999年〜2009年の国内総生産の伸び率でP国に勝っている。</p>`,
    choices: [
      { label: "A", text: "第一次産業はすべての国で衰退の途にある" },
      { label: "B", text: "国内総生産の伸び率が最も高いのはR国であるが、金額はP国が最も高い" },
      { label: "C", text: "第三次産業の成長は、世界中で見られるサービス業の充実と深い関わりがある" },
      { label: "D", text: "2009年度のO国の第三次産業による国内総生産は、10年前のP国の第三次産業による国内総生産より多い" },
      { label: "E", text: "O国は1999年〜2009年の国内総生産の伸び率でP国に勝っている" }
    ],
    answer: "E",
    explanation: `<p><strong>正答: E</strong></p><h4>解説</h4><p>各選択肢を検証する： A. 第一次産業の割合は全国で減少しているが、GDP自体が成長しているため金額では「衰退」とは限らない。表からは確定できない。 B. GDP伸び率：O国＝6,940/1,217＝5.70倍、R国＝5,141/1,238＝4.15倍。最も高いのはO国であり、R国ではない → 誤り。 C. サービス業の充実との因果関係は表からは読み取れない → 判断不可。 D. O国2009年の第三次産業＝6,940×0.599＝4,157億ドル、P国1999年の第三次産業＝7,963×0.609＝4,849億ドル。4,157 < 4,849 → 誤り。 E. 1999年→2009年のGDP伸び率：O国＝5.70倍、P国＝18,872/7,963＝2.37倍。O国 > P国 → 正しい。</p><p>正答はE。</p><h4>よくある計算ミス</h4><p>選択肢DでO国の2009年とP国の1999年を比較すべきところ、同じ年で比較してしまう</p><div class="tip">時短テク: 選択肢が多い場合、明らかに計算しやすいもの（倍率の比較など）から検証する。</div>`
  },
  {
    id: 285,
    number: 40,
    category: "図表の読み取り",
    subcategory: "新聞発行部数の比較",
    question: `<p><strong>データ：</strong> 表</p>
<div class="table-scroll"><table class="quiz-table">
<tr><th>国名</th><th>種類</th><th>発行部数(千部)</th><th>1,000人当たりの部数</th></tr>
<tr><td>A</td><td>131</td><td>57,820</td><td>468</td></tr>
<tr><td>B</td><td>647</td><td>84,950</td><td>547</td></tr>
<tr><td>C</td><td>1,781</td><td>62,510</td><td>312</td></tr>
<tr><td>D</td><td>1,093</td><td>19,700</td><td>31</td></tr>
<tr><td>E</td><td>492</td><td>12,000</td><td>297</td></tr>
</table></div>
<p><strong>設問：</strong> 表中で最も人口が多いと考えられる国はどこか。選べ。</p>`,
    choices: [
      { label: "A", text: "A国" },
      { label: "B", text: "B国" },
      { label: "C", text: "C国" },
      { label: "D", text: "D国" },
      { label: "E", text: "E国" }
    ],
    answer: "D",
    explanation: `<p><strong>正答: D</strong></p><h4>解説</h4><p>人口＝発行部数 / (1,000人当たりの部数) × 1,000 で推定できる：</p><ul><li>A国：57,820千部 / 468 × 1,000 = 123,547千人</li><li>B国：84,950千部 / 547 × 1,000 = 155,301千人</li><li>C国：62,510千部 / 312 × 1,000 = 200,353千人</li><li>D国：19,700千部 / 31 × 1,000 = 635,484千人</li><li>E国：12,000千部 / 297 × 1,000 = 40,404千人</li></ul><p>最も人口が多いのはD国（約6.35億人）。正答はD。</p><h4>よくある計算ミス</h4><p>発行部数だけで人口を推定し（B国が最多）、1,000人当たりの部数を考慮しない</p><div class="tip">時短テク: D国は1,000人当たり31部と極端に少ないので、人口=発行部数/31×1000 で圧倒的に多いと即判断可能。</div>`
  },
];
