// テストセンター練習 ─ 第6セット 問題データ

const SET6_QUESTIONS = [
  {
    id: 286,
    number: 1,
    category: "英文読解",
    subcategory: "Oil Cans",
    question: `<div class="q-blockquote">The can labelled "1" contains oil. The can labelled "2" contains water. You must only put oil in the can labelled "1". You must only put water in the can labelled "2". If you put oil or water in the wrong can, then you must tell your supervisor.</div><br><strong>Question:</strong> What must you do if you put oil in the wrong can?`,
    choices: [
      { label: "A", text: "Put water in the can" },
      { label: "B", text: "Change the label on the can" },
      { label: "C", text: "Put oil in the can marked \"2\"" },
      { label: "D", text: "Get a new can" },
      { label: "E", text: "Tell your supervisor" }
    ],
    answer: "E",
    explanation: `<p><strong>正答: E</strong></p><p><strong>該当英文:</strong> "If you put oil or water in the wrong can, then you must tell your supervisor."</p><h4>解法ステップ</h4><ol><li><strong>設問の把握：</strong> 油を間違った缶に入れた場合にすべきことを問われている</li><li><strong>該当箇所の特定：</strong> 最終文 "If you put oil or water in the wrong can, then you must tell your supervisor." が直接該当</li><li><strong>判定：</strong> "tell your supervisor" が指示されている → <strong>E</strong></li></ol><h4>解説</h4><p>油（oil）を間違った缶に入れた場合、監督者（supervisor）に報告しなければならないと明記されている。</p><h4>各選択肢の分析</h4><ul><li><strong>E「Tell your supervisor」→ ✓ 正解。</strong> 本文の "you must tell your supervisor" と完全に一致する</li><li>A「水を入れる」→ 間違いの修正方法として水を入れるとは書かれていない</li><li>B「ラベルを変える」→ 本文に記載なし</li><li>C「"2"の缶に油を入れる」→ これはむしろ間違った行為そのもの。"You must only put water in the can labelled '2'" と明示</li><li>D「新しい缶を取る」→ 本文に記載なし</li></ul><div class="tip">読解テク: 指示文では最後の文に例外・注意事項が来ることが多い。末尾の "If..." 構文を先にチェック。</div>`
  },
  {
    id: 287,
    number: 2,
    category: "英文読解",
    subcategory: "Hotel Concert",
    question: `<div class="q-blockquote">We are happy to inform you that on 12th February we will have a one-hour piano and cello concert in Room 1 on the second floor in our hotel, in commemoration of the 20th anniversary of our hotel's opening. The concert will start at 6:00 p.m. Everyone is welcome except for children under age five. We have only 50 seats, so if you are interested, we recommend you arrive early. Attendance is free of charge.<br><br>The performers will play some popular Japanese songs as well as some well-known classical music pieces. We are sure you will enjoy the performance and that it will provide a sense of peace.<br><br>After the concert, we recommend you have dinner at one of our superb restaurants. Each restaurant has a special menu for the anniversary at a very reasonable price.<br><br>We promise you a marvellous time. Why not reward yourself once in a while? For detailed information, please call us at 0120-xxxxxx or visit our website at www.xxx.xxx.</div><br><strong>Question:</strong> What will you listen to at the concert?`,
    choices: [
      { label: "A", text: "Original music written by the piano player" },
      { label: "B", text: "Theme music from a movie set in the hotel" },
      { label: "C", text: "Popular American songs" },
      { label: "D", text: "Famous classical music" },
      { label: "E", text: "Popular guitar music" }
    ],
    answer: "D",
    explanation: `<p><strong>正答: D</strong></p><p><strong>該当英文:</strong> "The performers will play some popular Japanese songs as well as some well-known classical music pieces."</p><h4>解法ステップ</h4><ol><li><strong>設問の把握：</strong> コンサートで何を聴けるかを問われている</li><li><strong>該当箇所の特定：</strong> 第2段落冒頭 "The performers will play..." に演奏内容が記載</li><li><strong>判定：</strong> "well-known classical music pieces" = "Famous classical music" → <strong>D</strong></li></ol><h4>解説</h4><p>コンサートでは「有名なクラシック音楽」が演奏される。</p><h4>各選択肢の分析</h4><ul><li><strong>D「Famous classical music」→ ✓ 正解。</strong> "well-known classical music pieces" の言い換えとして正確に対応する</li><li>A「ピアノ奏者が作曲したオリジナル音楽」→ 本文に記載なし</li><li>B「ホテルを舞台にした映画のテーマ曲」→ 本文に記載なし</li><li>C「アメリカの人気曲」→ "popular Japanese songs" であり国が異なる</li><li>E「人気のギター音楽」→ 楽器はピアノとチェロ（piano and cello）であり、ギターではない</li></ul><div class="tip">読解テク: "as well as" は「AだけでなくBも」の意味。両方の要素をチェックする。</div>`
  },
  {
    id: 288,
    number: 3,
    category: "英文読解",
    subcategory: "Hotel Concert",
    question: `<div class="q-blockquote">We are happy to inform you that on 12th February we will have a one-hour piano and cello concert in Room 1 on the second floor in our hotel, in commemoration of the 20th anniversary of our hotel's opening. The concert will start at 6:00 p.m. Everyone is welcome except for children under age five. We have only 50 seats, so if you are interested, we recommend you arrive early. Attendance is free of charge.<br><br>The performers will play some popular Japanese songs as well as some well-known classical music pieces. We are sure you will enjoy the performance and that it will provide a sense of peace.<br><br>After the concert, we recommend you have dinner at one of our superb restaurants. Each restaurant has a special menu for the anniversary at a very reasonable price.<br><br>We promise you a marvellous time. Why not reward yourself once in a while? For detailed information, please call us at 0120-xxxxxx or visit our website at www.xxx.xxx.</div><br><strong>Question:</strong> According to the passage, what can you do after the concert?`,
    choices: [
      { label: "A", text: "Sing some songs together" },
      { label: "B", text: "Attend a 20th anniversary party" },
      { label: "C", text: "Talk about peace" },
      { label: "D", text: "Get a piano or cello lesson" },
      { label: "E", text: "Eat dinner" }
    ],
    answer: "E",
    explanation: `<p><strong>正答: E</strong></p><p><strong>該当英文:</strong> "After the concert, we recommend you have dinner at one of our superb restaurants."</p><h4>解法ステップ</h4><ol><li><strong>設問の把握：</strong> コンサート後にできることを問われている</li><li><strong>該当箇所の特定：</strong> 第3段落冒頭 "After the concert, we recommend you have dinner..." が直接該当</li><li><strong>判定：</strong> "have dinner" = "Eat dinner" → <strong>E</strong></li></ol><h4>解説</h4><p>コンサート後にレストランでの夕食が推奨されている。</p><h4>各選択肢の分析</h4><ul><li><strong>E「Eat dinner」→ ✓ 正解。</strong> "we recommend you have dinner at one of our superb restaurants" と直接対応する</li><li>A「一緒に歌を歌う」→ 本文に記載なし</li><li>B「20周年パーティーに参加する」→ コンサート自体が20周年記念だが、別途パーティーがあるとは書かれていない</li><li>C「平和について語り合う」→ "a sense of peace" はコンサートの効果として言及されているだけで、語り合うとは書かれていない</li><li>D「ピアノやチェロのレッスンを受ける」→ 本文に記載なし</li></ul><div class="tip">読解テク: "After..." の後に何が推奨されているかを直接読み取る。推奨（recommend）の目的語に注目。</div>`
  },
  {
    id: 289,
    number: 4,
    category: "英文読解",
    subcategory: "Hotel Concert",
    question: `<div class="q-blockquote">We are happy to inform you that on 12th February we will have a one-hour piano and cello concert in Room 1 on the second floor in our hotel, in commemoration of the 20th anniversary of our hotel's opening. The concert will start at 6:00 p.m. Everyone is welcome except for children under age five. We have only 50 seats, so if you are interested, we recommend you arrive early. Attendance is free of charge.<br><br>The performers will play some popular Japanese songs as well as some well-known classical music pieces. We are sure you will enjoy the performance and that it will provide a sense of peace.<br><br>After the concert, we recommend you have dinner at one of our superb restaurants. Each restaurant has a special menu for the anniversary at a very reasonable price.<br><br>We promise you a marvellous time. Why not reward yourself once in a while? For detailed information, please call us at 0120-xxxxxx or visit our website at www.xxx.xxx.</div><br><strong>Question:</strong> Where will the concert be given?`,
    choices: [
      { label: "A", text: "The biggest room in the hotel" },
      { label: "B", text: "A concert hall near the hotel" },
      { label: "C", text: "A room with 50 seats" },
      { label: "D", text: "On the first floor" },
      { label: "E", text: "The lobby of the hotel" }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C</strong></p><p><strong>該当英文:</strong> "we will have a one-hour piano and cello concert in Room 1 on the second floor in our hotel" / "We have only 50 seats"</p><h4>解法ステップ</h4><ol><li><strong>設問の把握：</strong> コンサートの開催場所を問われている</li><li><strong>該当箇所の特定：</strong> 第1段落 "in Room 1 on the second floor" と "We have only 50 seats" の2箇所</li><li><strong>判定：</strong> Room 1は2階にあり50席の部屋 → 選択肢Cの "A room with 50 seats" が最も正確 → <strong>C</strong></li></ol><h4>解説</h4><p>コンサートはホテルの2階・Room 1で行われ、座席は50席。</p><h4>各選択肢の分析</h4><ul><li><strong>C「A room with 50 seats」→ ✓ 正解。</strong> "We have only 50 seats" と一致し、会場の特徴を正確に記述している</li><li>A「ホテルで最も大きい部屋」→ 最も大きい部屋とは書かれていない</li><li>B「ホテル近くのコンサートホール」→ ホテル内のRoom 1で開催</li><li>D「1階」→ "on the second floor"（2階）と明記</li><li>E「ホテルのロビー」→ Room 1で開催であり、ロビーではない</li></ul><div class="tip">読解テク: 場所に関する質問では "in/on/at" の前置詞句をスキャニングして特定する。</div>`
  },
  {
    id: 290,
    number: 5,
    category: "英文読解",
    subcategory: "Shinkansen",
    question: `<div class="q-blockquote">When a tourist visits Japan, one of the most fascinating things would be taking a ride on the Shinkansen. The Shinkansen has become so famous that even people overseas call it by its Japanese name. It is also known as "the bullet train." In fact, this name comes from the original project -- the "Bullet Train Project" proposed in 1939. The project was devised for the faster transportation of troops, arms, and food, particularly to Manchuria. After the initial project, when the demand for mass transport grew radically, it was further developed to construct the super-rapid express Shinkansen. Just in time for the Tokyo Olympics held in 1964, the project materialized and the first commercial Shinkansen operated, connecting Tokyo and Osaka in 4 hours. Thereafter, Shinkansen lines expanded around Japan.</div><br><strong>Question:</strong> When did the commercial Shinkansen begin operation?`,
    choices: [
      { label: "A", text: "After demand for Japanese tourism grew" },
      { label: "B", text: "Before the initial bullet train project" },
      { label: "C", text: "When the \"Bullet Train Project\" was proposed" },
      { label: "D", text: "When the Tokyo Olympics was held" },
      { label: "E", text: "Not mentioned in the passage" }
    ],
    answer: "D",
    explanation: `<p><strong>正答: D</strong></p><p><strong>該当英文:</strong> "Just in time for the Tokyo Olympics held in 1964, the project materialized and the first commercial Shinkansen operated"</p><h4>解法ステップ</h4><ol><li><strong>設問の把握：</strong> 商業用新幹線の運行開始時期を問われている</li><li><strong>該当箇所の特定：</strong> "Just in time for the Tokyo Olympics held in 1964, the project materialized and the first commercial Shinkansen operated"</li><li><strong>判定：</strong> 東京オリンピック（1964年）に間に合うように運行開始 → <strong>D</strong></li></ol><h4>解説</h4><p>商業用新幹線は1964年の東京オリンピック開催時に運行を開始した。</p><h4>各選択肢の分析</h4><ul><li><strong>D「When the Tokyo Olympics was held」→ ✓ 正解。</strong> "Just in time for the Tokyo Olympics held in 1964" と直接対応する</li><li>A「日本の観光需要が伸びた後」→ 大量輸送の需要（mass transport）が根拠だが観光需要とは異なる。直接的なタイミングはオリンピック</li><li>B「最初の弾丸列車プロジェクトの前」→ 時系列が逆。プロジェクトは1939年、商業運行は1964年</li><li>C「弾丸列車プロジェクトが提案されたとき」→ 提案は1939年だが商業運行は1964年</li><li>E「本文に記載なし」→ 明記されている</li></ul><div class="tip">読解テク: 年号が複数出る文章では、イベントと年号の対応表を頭の中で作ると混同を防げる。</div>`
  },
  {
    id: 291,
    number: 6,
    category: "英文読解",
    subcategory: "Shinkansen",
    question: `<div class="q-blockquote">When a tourist visits Japan, one of the most fascinating things would be taking a ride on the Shinkansen. The Shinkansen has become so famous that even people overseas call it by its Japanese name. It is also known as "the bullet train." In fact, this name comes from the original project -- the "Bullet Train Project" proposed in 1939. The project was devised for the faster transportation of troops, arms, and food, particularly to Manchuria. After the initial project, when the demand for mass transport grew radically, it was further developed to construct the super-rapid express Shinkansen. Just in time for the Tokyo Olympics held in 1964, the project materialized and the first commercial Shinkansen operated, connecting Tokyo and Osaka in 4 hours. Thereafter, Shinkansen lines expanded around Japan.</div><br><strong>Question:</strong> According to the passage, international tourists should look forward to...`,
    choices: [
      { label: "A", text: "watching the Shinkansen" },
      { label: "B", text: "travelling on the Shinkansen" },
      { label: "C", text: "visiting Shinkansen museums" },
      { label: "D", text: "learning about the bullet train project" },
      { label: "E", text: "operating the super-rapid express" }
    ],
    answer: "B",
    explanation: `<p><strong>正答: B</strong></p><p><strong>該当英文:</strong> "When a tourist visits Japan, one of the most fascinating things would be taking a ride on the Shinkansen."</p><h4>解法ステップ</h4><ol><li><strong>設問の把握：</strong> 外国人観光客が新幹線に関して楽しみにすべきことを問われている</li><li><strong>該当箇所の特定：</strong> 冒頭文 "one of the most fascinating things would be taking a ride on the Shinkansen"</li><li><strong>判定：</strong> "taking a ride" = 乗車する = "travelling on" → <strong>B</strong></li></ol><h4>解説</h4><p>外国人観光客にとって最も魅力的なことの一つは新幹線に「乗ること」（taking a ride）。</p><h4>各選択肢の分析</h4><ul><li><strong>B「travelling on the Shinkansen」→ ✓ 正解。</strong> "taking a ride on the Shinkansen" の言い換えとして正確に対応する</li><li>A「新幹線を見ること」→ "taking a ride"（乗ること）であり、見ることではない</li><li>C「新幹線博物館を訪れること」→ 本文に記載なし</li><li>D「弾丸列車プロジェクトについて学ぶこと」→ 本文の主題だが観光客へのおすすめとして挙げられているのは乗車体験</li><li>E「超高速列車を運転すること」→ 本文に記載なし</li></ul><div class="tip">読解テク: "taking a ride" = 乗車すること。"ride" の意味を正確に押さえる。see（見る）とは異なる。</div>`
  },
  {
    id: 292,
    number: 7,
    category: "英文読解",
    subcategory: "Shinkansen",
    question: `<div class="q-blockquote">When a tourist visits Japan, one of the most fascinating things would be taking a ride on the Shinkansen. The Shinkansen has become so famous that even people overseas call it by its Japanese name. It is also known as "the bullet train." In fact, this name comes from the original project -- the "Bullet Train Project" proposed in 1939. The project was devised for the faster transportation of troops, arms, and food, particularly to Manchuria. After the initial project, when the demand for mass transport grew radically, it was further developed to construct the super-rapid express Shinkansen. Just in time for the Tokyo Olympics held in 1964, the project materialized and the first commercial Shinkansen operated, connecting Tokyo and Osaka in 4 hours. Thereafter, Shinkansen lines expanded around Japan.</div><br><strong>Question:</strong> According to the passage, what happened to the Shinkansen after 1964?`,
    choices: [
      { label: "A", text: "It stopped operating." },
      { label: "B", text: "It caused a lot of traffic accidents." },
      { label: "C", text: "It transported troops, arms, and food to Manchuria." },
      { label: "D", text: "It was introduced in other parts of Japan." },
      { label: "E", text: "It was exported overseas." }
    ],
    answer: "D",
    explanation: `<p><strong>正答: D</strong></p><p><strong>該当英文:</strong> "Thereafter, Shinkansen lines expanded around Japan."</p><h4>解法ステップ</h4><ol><li><strong>設問の把握：</strong> 1964年以降に新幹線に何が起きたかを問われている</li><li><strong>該当箇所の特定：</strong> 最終文 "Thereafter, Shinkansen lines expanded around Japan."（"Thereafter" = 1964年以降）</li><li><strong>判定：</strong> "expanded around Japan" = 日本各地に導入された → <strong>D</strong></li></ol><h4>解説</h4><p>1964年以降、新幹線路線は日本各地に拡大した。</p><h4>各選択肢の分析</h4><ul><li><strong>D「It was introduced in other parts of Japan.」→ ✓ 正解。</strong> "Shinkansen lines expanded around Japan" の言い換えとして正確</li><li>A「運行を停止した」→ 逆。拡大した</li><li>B「多くの交通事故を引き起こした」→ 本文に記載なし</li><li>C「軍隊・武器・食料を満州に輸送した」→ これは1939年の当初のプロジェクトの目的であり、1964年以降の出来事ではない</li><li>E「海外に輸出された」→ 本文に記載なし</li></ul><div class="tip">読解テク: "Thereafter" は「その後」。直前のイベント（1964年運行開始）以降の話であることを確認。</div>`
  },
  {
    id: 293,
    number: 8,
    category: "英文読解",
    subcategory: "CEC International Dinner Night",
    question: `<div class="q-blockquote">The Cultural Exchange Club (CEC) of X College is hosting its International Dinner Night next month. The CEC, composed of students from 18 different countries, will serve buffet-style traditional dishes from 12 countries at our cafeteria. Particular dishes may run out fast because they will be prepared in limited quantities due to the difficulty in obtaining some ethnic ingredients. It is recommended that you buy tickets in advance and come early in order not to wait in line. Tickets are available at \$5.00 for students with a college ID and \$7.00 for others. Children under the age of 6 can enter free. Ethnic dresses, craft works, pictures of famous tourist spots, and several other exotic items will be on display. Recipes for some dishes will also be available for you to cook them at home. For more details, check the CEC website or call us at 234-XXXX.</div><br><strong>Question:</strong> How can you get more information if you do not have access to the Internet?`,
    choices: [
      { label: "A", text: "By reading the local newspaper" },
      { label: "B", text: "By sending an email to the CEC" },
      { label: "C", text: "By calling the CEC at the number given" },
      { label: "D", text: "By writing a letter requesting a leaflet for the event" },
      { label: "E", text: "By checking the bulletin board on campus" }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C</strong></p><p><strong>該当英文:</strong> "For more details, check the CEC website or call us at 234-XXXX."</p><h4>解法ステップ</h4><ol><li><strong>設問の把握：</strong> インターネットが使えない場合の情報入手方法を問われている</li><li><strong>該当箇所の特定：</strong> 最終文 "check the CEC website or call us at 234-XXXX" の2つの方法</li><li><strong>判定：</strong> ウェブサイトはインターネット不可なら使えない → 残る手段は電話 → <strong>C</strong></li></ol><h4>解説</h4><p>インターネットにアクセスできない場合、ウェブサイトは使えないので、電話（call us at 234-XXXX）が唯一の代替手段。</p><h4>各選択肢の分析</h4><ul><li><strong>C「By calling the CEC at the number given」→ ✓ 正解。</strong> "call us at 234-XXXX" と直接対応し、インターネット不要の手段</li><li>A「地方紙を読む」→ 本文に記載なし</li><li>B「CECにメールを送る」→ メールアドレスの記載はない</li><li>D「イベントのリーフレットを請求する手紙を書く」→ 本文に記載なし</li><li>E「キャンパスの掲示板を確認する」→ 本文に記載なし</li></ul><div class="tip">読解テク: "A or B" 形式で連絡方法が並ぶとき、一方が使えない場合はもう一方が答え。</div>`
  },
  {
    id: 294,
    number: 9,
    category: "英文読解",
    subcategory: "CEC International Dinner Night",
    question: `<div class="q-blockquote">The Cultural Exchange Club (CEC) of X College is hosting its International Dinner Night next month. The CEC, composed of students from 18 different countries, will serve buffet-style traditional dishes from 12 countries at our cafeteria. Particular dishes may run out fast because they will be prepared in limited quantities due to the difficulty in obtaining some ethnic ingredients. It is recommended that you buy tickets in advance and come early in order not to wait in line. Tickets are available at \$5.00 for students with a college ID and \$7.00 for others. Children under the age of 6 can enter free. Ethnic dresses, craft works, pictures of famous tourist spots, and several other exotic items will be on display. Recipes for some dishes will also be available for you to cook them at home. For more details, check the CEC website or call us at 234-XXXX.</div><br><strong>Question:</strong> What is available to take home if you are interested?`,
    choices: [
      { label: "A", text: "Ethnic ingredients" },
      { label: "B", text: "Ethnic dresses" },
      { label: "C", text: "Craft works" },
      { label: "D", text: "Pictures" },
      { label: "E", text: "Recipes" }
    ],
    answer: "E",
    explanation: `<p><strong>正答: E</strong></p><p><strong>該当英文:</strong> "Recipes for some dishes will also be available for you to cook them at home."</p><h4>解法ステップ</h4><ol><li><strong>設問の把握：</strong> 興味があれば持ち帰れるものは何かを問われている</li><li><strong>該当箇所の特定：</strong> "Recipes for some dishes will also be available for you to cook them at home" — "at home" が持ち帰りを示唆</li><li><strong>判定：</strong> 自宅で料理できるようにレシピが入手可能 → <strong>E</strong></li></ol><h4>解説</h4><p>レシピが持ち帰り用に提供される。</p><h4>各選択肢の分析</h4><ul><li><strong>E「Recipes」→ ✓ 正解。</strong> "available for you to cook them at home" から、自宅に持ち帰って活用できる唯一のアイテム</li><li>A「エスニック食材」→ 入手困難（"difficulty in obtaining some ethnic ingredients"）と言及されているが持ち帰れるとは書かれていない</li><li>B「エスニックドレス」→ 展示品（"on display"）であり持ち帰り用ではない</li><li>C「工芸品」→ 展示品であり持ち帰り用ではない</li><li>D「写真」→ 展示品であり持ち帰り用ではない</li></ul><div class="tip">読解テク: "available for you to..." は「あなたが...できるように入手可能」。持ち帰り可否は "available" の有無で判断。</div>`
  },
  {
    id: 295,
    number: 10,
    category: "英文読解",
    subcategory: "CEC International Dinner Night",
    question: `<div class="q-blockquote">The Cultural Exchange Club (CEC) of X College is hosting its International Dinner Night next month. The CEC, composed of students from 18 different countries, will serve buffet-style traditional dishes from 12 countries at our cafeteria. Particular dishes may run out fast because they will be prepared in limited quantities due to the difficulty in obtaining some ethnic ingredients. It is recommended that you buy tickets in advance and come early in order not to wait in line. Tickets are available at \$5.00 for students with a college ID and \$7.00 for others. Children under the age of 6 can enter free. Ethnic dresses, craft works, pictures of famous tourist spots, and several other exotic items will be on display. Recipes for some dishes will also be available for you to cook them at home. For more details, check the CEC website or call us at 234-XXXX.</div><br><strong>Question:</strong> Which of the following is NOT being exhibited at the International Dinner Night?`,
    choices: [
      { label: "A", text: "Ethnic dance shows" },
      { label: "B", text: "Craft works" },
      { label: "C", text: "Foreign items" },
      { label: "D", text: "Exotic dresses" },
      { label: "E", text: "Photographic display" }
    ],
    answer: "A",
    explanation: `<p><strong>正答: A</strong></p><p><strong>該当英文:</strong> "Ethnic dresses, craft works, pictures of famous tourist spots, and several other exotic items" が展示されるもの。</p><h4>解法ステップ</h4><ol><li><strong>設問の把握：</strong> 展示されないもの（NOT問題）を選ぶ</li><li><strong>該当箇所の特定：</strong> "Ethnic dresses, craft works, pictures of famous tourist spots, and several other exotic items will be on display" が展示物リスト</li><li><strong>判定：</strong> 選択肢を1つずつ照合 → "Ethnic dance shows" はリストに存在しない → <strong>A</strong></li></ol><h4>解説</h4><p>エスニックダンスショーは一切言及されていない。NOT問題で、展示されないものを選ぶ。</p><h4>各選択肢の分析</h4><ul><li><strong>A「Ethnic dance shows」→ ✓ 正解。</strong> 本文の展示物リストに「ダンスショー」は含まれていない。"Ethnic dresses" との混同に注意</li><li>B「工芸品」→ "craft works" として明記されている</li><li>C「外国のアイテム」→ "several other exotic items" として明記されている</li><li>D「エキゾチックなドレス」→ "Ethnic dresses" として明記されている</li><li>E「写真展示」→ "pictures of famous tourist spots" として明記されている</li></ul><div class="tip">読解テク: NOT問題では、本文のリストと選択肢を1つずつ照合する。リストにないものが正答。</div>`
  },
  {
    id: 296,
    number: 11,
    category: "英文読解",
    subcategory: "Gorin-no-sho / Musashi Miyamoto",
    question: `<div class="q-blockquote">Japanese literature is quite popular overseas, attracting many ardent fans who are very keen to understand not only the text itself but also the philosophical implications lying between the lines. Gorin-no-sho, written by a famous Japanese swordsman, Musashi Miyamoto, from 1643 to 1645 just before his death, is one such widely read work of Japanese literature. Musashi survived in life-or-death sword matches more than 60 times in his life, thanks to his strict self-discipline over mind and body literally to win and to live. The book is written in the form of a guidebook about the art of war and swordplay. However, a closer reading will lead you to a profound interpretation of the world and life, of which the focal message is that the best technique is not about the technique itself. That is, we should not rely on the techniques we have mastered; on the contrary, what we should master is "the spirit of keeping nothing" to make improvisation possible in life-threatening challenges.</div><br><strong>Question:</strong> What message did Musashi really want to leave in Gorin-no-sho?`,
    choices: [
      { label: "A", text: "He was an ardent fan of literature." },
      { label: "B", text: "He was thankful that he survived through the matches." },
      { label: "C", text: "He wanted other swordsmen to be disciplined." },
      { label: "D", text: "He mastered the techniques." },
      { label: "E", text: "He found something more reliable than the techniques." }
    ],
    answer: "E",
    explanation: `<p><strong>正答: E</strong></p><p><strong>該当英文:</strong> "the focal message is that the best technique is not about the technique itself" / "what we should master is 'the spirit of keeping nothing' to make improvisation possible"</p><h4>解法ステップ</h4><ol><li><strong>設問の把握：</strong> 武蔵が五輪書に残したかった真のメッセージを問われている</li><li><strong>該当箇所の特定：</strong> "the focal message is that the best technique is not about the technique itself" および "what we should master is 'the spirit of keeping nothing'"</li><li><strong>判定：</strong> 技術そのものではなく、技術を超えた「無の精神」という、より信頼すべきものを見出した → <strong>E</strong></li></ol><h4>解説</h4><p>武蔵が伝えたかったのは、技術そのものよりも重要な何か（「無の精神」）を見出したということ。</p><h4>各選択肢の分析</h4><ul><li><strong>E「He found something more reliable than the techniques.」→ ✓ 正解。</strong> "the spirit of keeping nothing" という技術を超えた境地を見出したことに対応する</li><li>A「彼は文学の熱烈なファンだった」→ 読者が熱烈なファン（ardent fans）であり武蔵のことではない</li><li>B「試合を生き延びたことに感謝していた」→ そのような記述はない</li><li>C「他の剣士に規律を求めた」→ 武蔵自身の自己鍛錬であり他者への要求ではない</li><li>D「技術を極めた」→ むしろ技術に頼るべきではないというメッセージ</li></ul><div class="tip">読解テク: "the focal message is that..." はメインメッセージの明示。この構文を見つければ正答の根拠に直結する。</div>`
  },
  {
    id: 297,
    number: 12,
    category: "英文読解",
    subcategory: "Gorin-no-sho / Musashi Miyamoto",
    question: `<div class="q-blockquote">Japanese literature is quite popular overseas, attracting many ardent fans who are very keen to understand not only the text itself but also the philosophical implications lying between the lines. Gorin-no-sho, written by a famous Japanese swordsman, Musashi Miyamoto, from 1643 to 1645 just before his death, is one such widely read work of Japanese literature. Musashi survived in life-or-death sword matches more than 60 times in his life, thanks to his strict self-discipline over mind and body literally to win and to live. The book is written in the form of a guidebook about the art of war and swordplay. However, a closer reading will lead you to a profound interpretation of the world and life, of which the focal message is that the best technique is not about the technique itself. That is, we should not rely on the techniques we have mastered; on the contrary, what we should master is "the spirit of keeping nothing" to make improvisation possible in life-threatening challenges.</div><br><strong>Question:</strong> Why was Musashi always able to come back alive from sword matches?`,
    choices: [
      { label: "A", text: "Because he was a famous swordsman." },
      { label: "B", text: "Because his swordsmanship was superb." },
      { label: "C", text: "Because he was well disciplined both mentally and physically." },
      { label: "D", text: "Because he had read the guidebook about swordplay." },
      { label: "E", text: "Because he relied on the techniques." }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C</strong></p><p><strong>該当英文:</strong> "thanks to his strict self-discipline over mind and body literally to win and to live"</p><h4>解法ステップ</h4><ol><li><strong>設問の把握：</strong> 武蔵が真剣勝負から常に生還できた理由を問われている</li><li><strong>該当箇所の特定：</strong> "thanks to his strict self-discipline over mind and body" — "thanks to" が理由を明示</li><li><strong>判定：</strong> "self-discipline over mind and body" = 心身の鍛錬 = "disciplined both mentally and physically" → <strong>C</strong></li></ol><h4>解説</h4><p>武蔵が60回以上の真剣勝負を生き延びたのは、心身両面にわたる厳格な自己鍛錬のおかげ。</p><h4>各選択肢の分析</h4><ul><li><strong>C「Because he was well disciplined both mentally and physically.」→ ✓ 正解。</strong> "strict self-discipline over mind and body" の言い換えとして正確に対応する</li><li>A「有名な剣士だったから」→ 有名であることは生存の理由ではない</li><li>B「剣術が卓越していたから」→ 本文が強調するのは自己鍛錬であり剣術の卓越性ではない</li><li>D「剣術のガイドブックを読んでいたから」→ 武蔵自身が書いたもの。読んだから生き延びたのではない</li><li>E「技術に頼っていたから」→ 本文のメッセージはむしろ技術に頼るべきではないということ</li></ul><div class="tip">読解テク: "thanks to..." は理由・原因を示す表現。直後の名詞句が答えの根拠。</div>`
  },
  {
    id: 298,
    number: 13,
    category: "英文読解",
    subcategory: "Gorin-no-sho / Musashi Miyamoto",
    question: `<div class="q-blockquote">Japanese literature is quite popular overseas, attracting many ardent fans who are very keen to understand not only the text itself but also the philosophical implications lying between the lines. Gorin-no-sho, written by a famous Japanese swordsman, Musashi Miyamoto, from 1643 to 1645 just before his death, is one such widely read work of Japanese literature. Musashi survived in life-or-death sword matches more than 60 times in his life, thanks to his strict self-discipline over mind and body literally to win and to live. The book is written in the form of a guidebook about the art of war and swordplay. However, a closer reading will lead you to a profound interpretation of the world and life, of which the focal message is that the best technique is not about the technique itself. That is, we should not rely on the techniques we have mastered; on the contrary, what we should master is "the spirit of keeping nothing" to make improvisation possible in life-threatening challenges.</div><br><strong>Question:</strong> Which of the following statements about Gorin-no-sho is correct?`,
    choices: [
      { label: "A", text: "It is about the world philosophy." },
      { label: "B", text: "Musashi wrote it in his later years." },
      { label: "C", text: "It is about survival techniques." },
      { label: "D", text: "Musashi wrote about the fine arts in it." },
      { label: "E", text: "It is the most famous work of Japanese literature overseas." }
    ],
    answer: "B",
    explanation: `<p><strong>正答: B</strong></p><p><strong>該当英文:</strong> "written by a famous Japanese swordsman, Musashi Miyamoto, from 1643 to 1645 just before his death"</p><h4>解法ステップ</h4><ol><li><strong>設問の把握：</strong> 五輪書について正しい記述を選ぶ問題</li><li><strong>該当箇所の特定：</strong> "from 1643 to 1645 just before his death" に注目</li><li><strong>判定：</strong> "just before his death"（死の直前）は晩年を意味し、選択肢Bの "in his later years" と一致 → <strong>B</strong></li></ol><h4>解説</h4><p>死の直前（晩年）に書かれた。</p><h4>各選択肢の分析</h4><ul><li><strong>B「武蔵は晩年にそれを書いた」→ ✓ 正解。</strong> "from 1643 to 1645 just before his death" から死の直前＝晩年に執筆したことが明確</li><li>A「世界哲学についての本である」→ "a profound interpretation of the world and life" とあるが世界哲学の本とは異なる。元来は剣術の指南書</li><li>C「サバイバル技術についての本である」→ 剣術の指南書であり「サバイバル技術」とは異なる</li><li>D「武蔵はその中で芸術について書いた」→ "the art of war" は「兵法」の意味であり美術ではない</li><li>E「海外で最も有名な日本文学作品である」→ "one such widely read work" であり「最も有名」とは言っていない</li></ul><div class="tip">読解テク: "just before his death" = 死の直前 = 晩年。時期を特定する表現を見逃さない。</div>`
  },
  {
    id: 299,
    number: 14,
    category: "英文読解",
    subcategory: "Wine in Ancient Times",
    question: `<div class="q-blockquote">Wine was an everyday drink in both ancient Greek and Roman cultures, and the way people drank wine at that time was very interesting. In ancient times, sanitation was poor and access to clean water was difficult. The people therefore added wine to water to make the dirty drinking water taste smooth and delicious. In addition, drinking undiluted* wine was considered barbaric and uncultured behaviour. They believed that weakening wine by adding water was a civilised and noble trait. It helped prevent the dangers of alcoholism and drunkenness, which were signs of barbarism and immorality.<br><br>*undiluted: not made weaker by having water added to it</div><br><strong>Question:</strong> Which is the statement that best summarises the passage?`,
    choices: [
      { label: "A", text: "Ancient ways of drinking wine" },
      { label: "B", text: "Ancient ways of drinking water" },
      { label: "C", text: "Modern ways of drinking wine" },
      { label: "D", text: "Modern ways of drinking water" },
      { label: "E", text: "Ancient Greek and Roman culture" }
    ],
    answer: "A",
    explanation: `<p><strong>正答: A</strong></p><p><strong>該当英文:</strong> 本文全体が古代のワインの飲み方（水で薄める習慣とその文化的背景）を扱っている。</p><h4>解法ステップ</h4><ol><li><strong>設問の把握：</strong> 本文を最もよく要約する記述を選ぶ問題</li><li><strong>該当箇所の特定：</strong> 冒頭文 "Wine was an everyday drink..." と本文全体の構成（水で薄める習慣・文化的背景）を確認</li><li><strong>判定：</strong> 本文全体が古代のワインの飲み方を扱っており、選択肢Aが最も的確 → <strong>A</strong></li></ol><h4>解説</h4><p>本文の主題は古代ギリシャ・ローマにおけるワインの飲み方。</p><h4>各選択肢の分析</h4><ul><li><strong>A「古代のワインの飲み方」→ ✓ 正解。</strong> 本文全体が古代におけるワインの飲み方（水で薄める習慣とその文化的意味）を扱っている</li><li>B「古代の水の飲み方」→ 水の話も出てくるが主題はワインの飲み方</li><li>C「現代のワインの飲み方」→ 本文は古代（ancient times）の話</li><li>D「現代の水の飲み方」→ 古代の話であり水が主題でもない</li><li>E「古代ギリシャ・ローマの文化」→ 範囲が広すぎる。ワインの飲み方に特化</li></ul><div class="tip">読解テク: 主題選択問題では「最も具体的かつ正確」な選択肢を選ぶ。広すぎるもの（E）や部分的なもの（B）は除外。</div>`
  },
  {
    id: 300,
    number: 15,
    category: "英文読解",
    subcategory: "Wine in Ancient Times",
    question: `<div class="q-blockquote">Wine was an everyday drink in both ancient Greek and Roman cultures, and the way people drank wine at that time was very interesting. In ancient times, sanitation was poor and access to clean water was difficult. The people therefore added wine to water to make the dirty drinking water taste smooth and delicious. In addition, drinking undiluted* wine was considered barbaric and uncultured behaviour. They believed that weakening wine by adding water was a civilised and noble trait. It helped prevent the dangers of alcoholism and drunkenness, which were signs of barbarism and immorality.<br><br>*undiluted: not made weaker by having water added to it</div><br><strong>Question:</strong> What did ancient people consider immoral?`,
    choices: [
      { label: "A", text: "Being poor" },
      { label: "B", text: "Drinking too much alcohol" },
      { label: "C", text: "Adding water to wine" },
      { label: "D", text: "Being unclean" },
      { label: "E", text: "Drinking pure water" }
    ],
    answer: "B",
    explanation: `<p><strong>正答: B</strong></p><p><strong>該当英文:</strong> "It helped prevent the dangers of alcoholism and drunkenness, which were signs of barbarism and immorality."</p><h4>解法ステップ</h4><ol><li><strong>設問の把握：</strong> 古代の人々が不道徳（immoral）と考えたものを問われている</li><li><strong>該当箇所の特定：</strong> "alcoholism and drunkenness, which were signs of barbarism and immorality" に注目</li><li><strong>判定：</strong> アルコール中毒・酩酊が不道徳の印とされていた → 選択肢Bの "Drinking too much alcohol" と一致 → <strong>B</strong></li></ol><h4>解説</h4><p>アルコール中毒や酩酊は野蛮さと不道徳の印とされていた。</p><h4>各選択肢の分析</h4><ul><li><strong>B「飲酒過多」→ ✓ 正解。</strong> "alcoholism and drunkenness, which were signs of barbarism and immorality" から飲み過ぎが不道徳の印とされていたことが明確</li><li>A「貧しいこと」→ 本文に記載なし</li><li>C「ワインに水を加えること」→ むしろ文明的な行為とされていた</li><li>D「不潔であること」→ 衛生状態の話は出てくるが不潔を不道徳とは述べていない</li><li>E「純粋な水を飲むこと」→ 本文に記載なし</li></ul><div class="tip">読解テク: "which were signs of..." の関係代名詞節が直前の名詞を説明している。先行詞を正確に特定する。</div>`
  },
  {
    id: 301,
    number: 16,
    category: "英文読解",
    subcategory: "Wine in Ancient Times",
    question: `<div class="q-blockquote">Wine was an everyday drink in both ancient Greek and Roman cultures, and the way people drank wine at that time was very interesting. In ancient times, sanitation was poor and access to clean water was difficult. The people therefore added wine to water to make the dirty drinking water taste smooth and delicious. In addition, drinking undiluted* wine was considered barbaric and uncultured behaviour. They believed that weakening wine by adding water was a civilised and noble trait. It helped prevent the dangers of alcoholism and drunkenness, which were signs of barbarism and immorality.<br><br>*undiluted: not made weaker by having water added to it</div><br><strong>Question:</strong> In ancient Greece, wine was...`,
    choices: [
      { label: "A", text: "a replacement for water" },
      { label: "B", text: "a sign of immorality" },
      { label: "C", text: "a common drink" },
      { label: "D", text: "a symbol of civilisation" },
      { label: "E", text: "a medicine" }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C</strong></p><p><strong>該当英文:</strong> "Wine was an everyday drink in both ancient Greek and Roman cultures"</p><h4>解法ステップ</h4><ol><li><strong>設問の把握：</strong> 古代ギリシャにおけるワインの位置づけを問われている</li><li><strong>該当箇所の特定：</strong> 冒頭文 "Wine was an everyday drink in both ancient Greek and Roman cultures" に注目</li><li><strong>判定：</strong> "everyday drink" = "common drink" であり選択肢Cと一致 → <strong>C</strong></li></ol><h4>解説</h4><p>ワインは日常的な飲み物（everyday drink = common drink）だった。</p><h4>各選択肢の分析</h4><ul><li><strong>C「一般的な飲み物」→ ✓ 正解。</strong> "Wine was an everyday drink" の "everyday" は "common" の同義語であり正確に対応する</li><li>A「水の代わり」→ ワインを水に加えていた（added wine to water）のであり水の代替品ではない</li><li>B「不道徳の印」→ 不道徳とされたのは「薄めずにワインを飲むこと」でありワインそのものではない</li><li>D「文明の象徴」→ 文明的とされたのは「ワインを水で薄めて飲むこと」でありワインそのものではない</li><li>E「薬」→ 本文に記載なし</li></ul><div class="tip">読解テク: "everyday drink" = "common drink"。形容詞の言い換えパターンを押さえておく。</div>`
  },
  {
    id: 302,
    number: 17,
    category: "英文読解",
    subcategory: "Edo Era Culture",
    question: `<div class="q-blockquote">In the Edo era, Japan closed its borders to foreign countries. Although cultural influence from the outside world was considerably limited by this move, the country enjoyed an era of peace that lasted for more than two centuries. Furthermore, Japanese culture flourished.<br><br>First, the quality of Japanese craft products was remarkably enhanced. One of the significant factors behind this was the promotion of the production of local specialties as an important source of income by each feudal domain. Ceramics, lacquerware, woven fabrics, dyed textiles, glass crafts, or dolls were produced around the country with local-specific designs and characteristics.<br><br>Another form of art which developed in this era was Ukiyo-e, or wood-block paintings depicting beautiful women, Kabuki actors, or symbolic landscapes, amongst other subjects. As a stage art, Kabuki became very popular in the 17th century, followed by Bunraku in the 18th century. Bunraku works are highly recognized as Japanese literature even in the modern world. These traditional arts brought forth by the isolation are currently known widely, receiving acclaim in other countries.</div><br><strong>Question:</strong> What happened in the Edo era according to the passage?`,
    choices: [
      { label: "A", text: "Interactions with foreign countries became active." },
      { label: "B", text: "The borders were opened to the outside world." },
      { label: "C", text: "Peace was often disrupted." },
      { label: "D", text: "Many types of domestic cultural practices developed." },
      { label: "E", text: "Foreign influence was considerable." }
    ],
    answer: "D",
    explanation: `<p><strong>正答: D</strong></p><p><strong>該当英文:</strong> "Japanese culture flourished" / 第2段落で工芸品、第3段落で浮世絵・歌舞伎・文楽の発展が記述。</p><h4>解法ステップ</h4><ol><li><strong>設問の把握：</strong> 江戸時代に何が起きたかを問われている</li><li><strong>該当箇所の特定：</strong> "Japanese culture flourished" と第2・第3段落の工芸品・浮世絵・歌舞伎・文楽の発展記述</li><li><strong>判定：</strong> 国内で多種多様な文化的実践が発展した → 選択肢Dと一致 → <strong>D</strong></li></ol><h4>解説</h4><p>鎖国下での日本文化の発展が本文のテーマ。国内で多様な文化が発展した。</p><h4>各選択肢の分析</h4><ul><li><strong>D「多種多様な国内の文化的実践が発展した」→ ✓ 正解。</strong> "Japanese culture flourished" に加え、工芸品（陶磁器・漆器等）、浮世絵、歌舞伎、文楽と多様な文化の発展が具体的に記述されている</li><li>A「外国との交流が活発になった」→ 鎖国（"closed its borders"）と明記。逆</li><li>B「国境が外部世界に開かれた」→ 鎖国であり逆</li><li>C「平和がしばしば乱された」→ "an era of peace that lasted for more than two centuries" と逆</li><li>E「外国の影響が大きかった」→ "cultural influence from the outside world was considerably limited" と逆</li></ul><div class="tip">読解テク: 選択肢が本文と「逆」のパターンを見抜く。"closed/limited" と "active/open" は正反対。</div>`
  },
  {
    id: 303,
    number: 18,
    category: "英文読解",
    subcategory: "Edo Era Culture",
    question: `<div class="q-blockquote">In the Edo era, Japan closed its borders to foreign countries. Although cultural influence from the outside world was considerably limited by this move, the country enjoyed an era of peace that lasted for more than two centuries. Furthermore, Japanese culture flourished.<br><br>First, the quality of Japanese craft products was remarkably enhanced. One of the significant factors behind this was the promotion of the production of local specialties as an important source of income by each feudal domain. Ceramics, lacquerware, woven fabrics, dyed textiles, glass crafts, or dolls were produced around the country with local-specific designs and characteristics.<br><br>Another form of art which developed in this era was Ukiyo-e, or wood-block paintings depicting beautiful women, Kabuki actors, or symbolic landscapes, amongst other subjects. As a stage art, Kabuki became very popular in the 17th century, followed by Bunraku in the 18th century. Bunraku works are highly recognized as Japanese literature even in the modern world. These traditional arts brought forth by the isolation are currently known widely, receiving acclaim in other countries.</div><br><strong>Question:</strong> Why did Japanese arts and crafts develop in the Edo era?`,
    choices: [
      { label: "A", text: "Because there were many great workmen from overseas." },
      { label: "B", text: "Because feudal lords promoted craftsmanship." },
      { label: "C", text: "Because they were useful for international trading." },
      { label: "D", text: "Because they were traditionally popular across the country." },
      { label: "E", text: "Because people wanted to sell them at a high price." }
    ],
    answer: "B",
    explanation: `<p><strong>正答: B</strong></p><p><strong>該当英文:</strong> "One of the significant factors behind this was the promotion of the production of local specialties as an important source of income by each feudal domain."</p><h4>解法ステップ</h4><ol><li><strong>設問の把握：</strong> 江戸時代に日本の芸術・工芸が発展した理由を問われている</li><li><strong>該当箇所の特定：</strong> "the promotion of the production of local specialties as an important source of income by each feudal domain" に注目</li><li><strong>判定：</strong> 各藩（feudal domain）が地場産品の生産を促進した → 選択肢Bの "feudal lords promoted craftsmanship" と一致 → <strong>B</strong></li></ol><h4>解説</h4><p>各藩が収入源として地場産品の生産を促進したことが重要な要因。</p><h4>各選択肢の分析</h4><ul><li><strong>B「封建領主が工芸を推進したから」→ ✓ 正解。</strong> "the promotion of the production of local specialties... by each feudal domain" から各藩が地場産品の生産を促進したことが明確</li><li>A「海外から優れた職人が多く来たから」→ 鎖国下であり海外からの職人は来ていない</li><li>C「国際貿易に有用だったから」→ 鎖国下で国際貿易は限定的。本文では国内の収入源としている</li><li>D「伝統的に全国で人気があったから」→ 元々人気だったとは書かれていない</li><li>E「高値で売りたかったから」→ 本文に記載なし</li></ul><div class="tip">読解テク: "the promotion of... by each feudal domain" → 各藩による推進。"by" の後の主体を見落とさない。</div>`
  },
  {
    id: 304,
    number: 19,
    category: "英文読解",
    subcategory: "Edo Era Culture",
    question: `<div class="q-blockquote">In the Edo era, Japan closed its borders to foreign countries. Although cultural influence from the outside world was considerably limited by this move, the country enjoyed an era of peace that lasted for more than two centuries. Furthermore, Japanese culture flourished.<br><br>First, the quality of Japanese craft products was remarkably enhanced. One of the significant factors behind this was the promotion of the production of local specialties as an important source of income by each feudal domain. Ceramics, lacquerware, woven fabrics, dyed textiles, glass crafts, or dolls were produced around the country with local-specific designs and characteristics.<br><br>Another form of art which developed in this era was Ukiyo-e, or wood-block paintings depicting beautiful women, Kabuki actors, or symbolic landscapes, amongst other subjects. As a stage art, Kabuki became very popular in the 17th century, followed by Bunraku in the 18th century. Bunraku works are highly recognized as Japanese literature even in the modern world. These traditional arts brought forth by the isolation are currently known widely, receiving acclaim in other countries.</div><br><strong>Question:</strong> What has become of the Japanese cultural practices which developed during the Edo isolation?`,
    choices: [
      { label: "A", text: "Mostly forgotten" },
      { label: "B", text: "Still isolated within the country" },
      { label: "C", text: "Struggling for recognition" },
      { label: "D", text: "Facing a lot of competition" },
      { label: "E", text: "Internationally admired" }
    ],
    answer: "E",
    explanation: `<p><strong>正答: E</strong></p><p><strong>該当英文:</strong> "These traditional arts brought forth by the isolation are currently known widely, receiving acclaim in other countries."</p><h4>解法ステップ</h4><ol><li><strong>設問の把握：</strong> 江戸時代の鎖国中に発展した日本文化が現在どうなっているかを問われている</li><li><strong>該当箇所の特定：</strong> 最終文 "These traditional arts... are currently known widely, receiving acclaim in other countries" に注目</li><li><strong>判定：</strong> "receiving acclaim in other countries" = 国際的に称賛されている → 選択肢Eと一致 → <strong>E</strong></li></ol><h4>解説</h4><p>鎖国時代に生まれた伝統芸術は現在、世界的に知られ、他国で称賛を受けている。</p><h4>各選択肢の分析</h4><ul><li><strong>E「国際的に称賛されている」→ ✓ 正解。</strong> "currently known widely, receiving acclaim in other countries" から世界的に知られ称賛を受けていることが明確</li><li>A「ほとんど忘れられている」→ 逆。広く知られている</li><li>B「国内にとどまっている」→ "receiving acclaim in other countries" と逆</li><li>C「認知を得るのに苦労している」→ すでに称賛を受けている</li><li>D「多くの競争に直面している」→ 本文に記載なし</li></ul><div class="tip">読解テク: "receiving acclaim" = 称賛を受けている。"acclaim" はポジティブな意味であることを押さえる。</div>`
  },
  {
    id: 305,
    number: 20,
    category: "英文読解",
    subcategory: "Japanese Inn Job Advertisement",
    question: `<div class="q-blockquote">Owing to an increasing number of guests and inquiries from China, a well-established Japanese-style inn at the foot of Mt. Fuji is urgently seeking friendly and dynamic individuals with native fluency in Chinese. Candidates must also possess adequate communication skills in Japanese.<br><br>Other qualifications include:<br>1. At least 3 years' experience in the hospitality industry<br>2. Computer skills: Word, Excel, and PowerPoint<br>3. Articulate and a proactive attitude<br>4. Valid driver's license and work permit (foreign nationals)<br>5. Some bookkeeping knowledge and skills are preferred.<br>6. Some experience living in China is preferred (for non-Chinese candidates).<br><br>Responsibilities are as follows: 1. to create and expand a new market in China by promoting our prize-winning customer service, excellent traditional Japanese cuisine, three kinds of hot springs, and a majestic view of Mt. Fuji; 2. to set up a Chinese-language website; 3. to create and implement a Chinese language and culture program for Japanese staff members.<br><br>Starting annual salary is JPY 3,800,000 with benefits, including healthcare insurance and paid holidays. If required, company housing can also be offered at low cost.<br><br>For details, please contact us by e-mail on the following e-mail address: mfinn@jp-inns.com</div><br><strong>Question:</strong> What is the new staff member NOT expected to do?`,
    choices: [
      { label: "A", text: "To cater to foreigners" },
      { label: "B", text: "To train Japanese staff members" },
      { label: "C", text: "To grow a Chinese market" },
      { label: "D", text: "To translate a website into Chinese" },
      { label: "E", text: "To find company housing at low cost" }
    ],
    answer: "E",
    explanation: `<p><strong>正答: E</strong></p><p><strong>該当英文:</strong> 職務内容（Responsibilities）は3つ記載。福利厚生として "If required, company housing can also be offered at low cost" とある。</p><h4>解法ステップ</h4><ol><li><strong>設問の把握：</strong> 新しいスタッフが求められていないこと（NOT expected）を選ぶ問題</li><li><strong>該当箇所の特定：</strong> Responsibilities（職務）セクションの3項目と、Benefits（福利厚生）セクションを区別して確認</li><li><strong>判定：</strong> 社宅の提供は "Benefits" に属し "Responsibilities" ではない → <strong>E</strong></li></ol><h4>解説</h4><p>選択肢Eの「低コストの社宅を見つけること」は職務ではなく、福利厚生として会社側が提供するもの。</p><h4>各選択肢の分析</h4><ul><li><strong>E「低コストの社宅を見つけること」→ ✓ 正解。</strong> "company housing can also be offered at low cost" は会社が提供する福利厚生であり、従業員の職務ではない</li><li>A「外国人をもてなすこと」→ 中国からの客への対応は職務に含まれる</li><li>B「日本人スタッフを研修すること」→ 職務3に該当</li><li>C「中国市場を成長させること」→ 職務1に該当</li><li>D「ウェブサイトを中国語に翻訳すること」→ 職務2に該当</li></ul><div class="tip">読解テク: 求人広告では "Responsibilities" と "Benefits" を区別する。会社が提供するもの（benefits）は職務ではない。</div>`
  },
  {
    id: 306,
    number: 21,
    category: "英文読解",
    subcategory: "Japanese Inn Job Advertisement",
    question: `<div class="q-blockquote">Owing to an increasing number of guests and inquiries from China, a well-established Japanese-style inn at the foot of Mt. Fuji is urgently seeking friendly and dynamic individuals with native fluency in Chinese. Candidates must also possess adequate communication skills in Japanese.<br><br>Other qualifications include:<br>1. At least 3 years' experience in the hospitality industry<br>2. Computer skills: Word, Excel, and PowerPoint<br>3. Articulate and a proactive attitude<br>4. Valid driver's license and work permit (foreign nationals)<br>5. Some bookkeeping knowledge and skills are preferred.<br>6. Some experience living in China is preferred (for non-Chinese candidates).<br><br>Responsibilities are as follows: 1. to create and expand a new market in China by promoting our prize-winning customer service, excellent traditional Japanese cuisine, three kinds of hot springs, and a majestic view of Mt. Fuji; 2. to set up a Chinese-language website; 3. to create and implement a Chinese language and culture program for Japanese staff members.<br><br>Starting annual salary is JPY 3,800,000 with benefits, including healthcare insurance and paid holidays. If required, company housing can also be offered at low cost.<br><br>For details, please contact us by e-mail on the following e-mail address: mfinn@jp-inns.com</div><br><strong>Question:</strong> According to the advertisement, which of the following is NOT true?`,
    choices: [
      { label: "A", text: "A fluent speaker of Chinese is being recruited." },
      { label: "B", text: "A person without work experience cannot apply for this job." },
      { label: "C", text: "A new employee can gain on-the-job training." },
      { label: "D", text: "A regular staff member is being recruited." },
      { label: "E", text: "The inn is ready to pay an annual salary of JPY 3,800,000." }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C</strong></p><p><strong>該当英文:</strong> 本文には研修（on-the-job training）に関する記述が一切ない。"At least 3 years' experience in the hospitality industry" が要件。</p><h4>解法ステップ</h4><ol><li><strong>設問の把握：</strong> 広告の内容と合致しない（NOT true）記述を選ぶ問題</li><li><strong>該当箇所の特定：</strong> 各選択肢を本文と照合。OJT（on-the-job training）に関する記述は本文に存在しない</li><li><strong>判定：</strong> 研修の記載はなく、3年以上の実務経験を要件としており即戦力を想定 → <strong>C</strong></li></ol><h4>解説</h4><p>OJT（実地研修）の記載はなく、即戦力を想定している。NOT問題で、本文に合致しない記述を選ぶ。</p><h4>各選択肢の分析</h4><ul><li><strong>C「新しい従業員はOJTを受けられる」→ ✓ 正解。</strong> 本文にOJTの記載は一切なく、"At least 3 years' experience" が要件であるため即戦力を前提としている</li><li>A「中国語に堪能な人を募集中」→ "native fluency in Chinese" と一致</li><li>B「実務経験のない人は応募できない」→ 3年以上の経験要件と一致</li><li>D「正社員を募集中」→ 年俸や福利厚生の提示から正社員募集と判断可能</li><li>E「旅館は年俸380万円を支払う用意がある」→ "Starting annual salary is JPY 3,800,000" と一致</li></ul><div class="tip">読解テク: NOT問題では「本文に書かれていること」を1つずつ消去。最後に残ったもの（本文にない情報）が正答。</div>`
  },
  {
    id: 307,
    number: 22,
    category: "英文読解",
    subcategory: "Japanese Inn Job Advertisement",
    question: `<div class="q-blockquote">Owing to an increasing number of guests and inquiries from China, a well-established Japanese-style inn at the foot of Mt. Fuji is urgently seeking friendly and dynamic individuals with native fluency in Chinese. Candidates must also possess adequate communication skills in Japanese.<br><br>Other qualifications include:<br>1. At least 3 years' experience in the hospitality industry<br>2. Computer skills: Word, Excel, and PowerPoint<br>3. Articulate and a proactive attitude<br>4. Valid driver's license and work permit (foreign nationals)<br>5. Some bookkeeping knowledge and skills are preferred.<br>6. Some experience living in China is preferred (for non-Chinese candidates).<br><br>Responsibilities are as follows: 1. to create and expand a new market in China by promoting our prize-winning customer service, excellent traditional Japanese cuisine, three kinds of hot springs, and a majestic view of Mt. Fuji; 2. to set up a Chinese-language website; 3. to create and implement a Chinese language and culture program for Japanese staff members.<br><br>Starting annual salary is JPY 3,800,000 with benefits, including healthcare insurance and paid holidays. If required, company housing can also be offered at low cost.<br><br>For details, please contact us by e-mail on the following e-mail address: mfinn@jp-inns.com</div><br><strong>Question:</strong> Japanese candidates do NOT need to have...`,
    choices: [
      { label: "A", text: "work experience in the hospitality industry" },
      { label: "B", text: "Chinese language skills" },
      { label: "C", text: "a work permit" },
      { label: "D", text: "a friendly and dynamic personality" },
      { label: "E", text: "computer skills" }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C</strong></p><p><strong>該当英文:</strong> "Valid driver's license and work permit (foreign nationals)"</p><h4>解法ステップ</h4><ol><li><strong>設問の把握：</strong> 日本人の候補者に不要な条件（NOT need）を選ぶ問題</li><li><strong>該当箇所の特定：</strong> 資格要件4 "Valid driver's license and work permit (foreign nationals)" の括弧書きに注目</li><li><strong>判定：</strong> "(foreign nationals)" は外国人のみに適用される条件 → 日本人にはwork permitは不要 → <strong>C</strong></li></ol><h4>解説</h4><p>就労許可（work permit）は括弧書きで "(foreign nationals)"（外国人）とあり、外国人のみに必要な条件。日本人には不要。</p><h4>各選択肢の分析</h4><ul><li><strong>C「就労許可」→ ✓ 正解。</strong> "work permit (foreign nationals)" と括弧書きで外国人限定の条件であることが明示されており、日本人候補者には不要</li><li>A「ホスピタリティ業界での実務経験」→ 全候補者に必要</li><li>B「中国語スキル」→ 全候補者に必要</li><li>D「友好的でダイナミックな性格」→ 全候補者に必要</li><li>E「コンピュータスキル」→ 全候補者に必要</li></ul><div class="tip">読解テク: 括弧書き "(foreign nationals)" は適用対象の限定を示す。括弧内の条件を見落とさないこと。</div>`
  },
  {
    id: 308,
    number: 23,
    category: "英文読解",
    subcategory: "Sense of Taste",
    question: `<div class="q-blockquote">Nobody would disagree that we feel happy when we eat something that tastes good. What do you consider necessary to create a delicious dish: a good cook, fresh food, or expensive ingredients? In addition to these, an essential factor to our enjoyment of food is our sense of taste.<br><br>For some Japanese, American cakes are too sweet, and Korean kimchi is too hot. This is not only an issue of national differences. Some Japanese pour a great deal of soy sauce on their food, while others desire no seasoning at all. Some might think a dish is delicious, whereas others think it is too salty. To each his own.<br><br>What reasons lie behind these differences? One reason might be the development of an acquired taste. Once we get used to the taste of a particular food item, we find it delicious. Some Americans may think cake tastes terrible unless it contains a great deal of sugar. Some Koreans might think kimchi is not tasty without hot spices to give it flavour. Some Japanese may think a dish is not good without enough soy sauce.<br><br>Tastes differ, and it is true that seasoning makes food taste better. We can eat whatever we want to. However, it may also be true that someone with a good sense of taste who can identify the delicate differences between foods may enjoy meals more than someone who cannot.<br><br>Baby food contains a hint of flavour in order to help develop our sense of taste. Mothers are advised to give babies food that is bland, rather than strongly seasoned. This holds true for adults. It may also be good for our health to enjoy the natural taste of the ingredients, using seasonings sparingly and experiencing five basic tastes: sweet, bitter, sour, salty, and umami. We can also increase the number of foods we think are delicious by challenging ourselves to try diverse foods.</div><br><strong>Question:</strong> According to the author, what is indispensable for making your meal a delightful experience?`,
    choices: [
      { label: "A", text: "A little seasoning" },
      { label: "B", text: "Various flavours" },
      { label: "C", text: "A mother's cooking" },
      { label: "D", text: "A sense of taste" },
      { label: "E", text: "A fresh taste" }
    ],
    answer: "D",
    explanation: `<p><strong>正答: D</strong></p><p><strong>該当英文:</strong> "an essential factor to our enjoyment of food is our sense of taste"</p><h4>解法ステップ</h4><ol><li><strong>設問の把握：</strong> 食事を楽しい体験にするために不可欠なものを問われている</li><li><strong>該当箇所の特定：</strong> 第1段落末尾 "an essential factor to our enjoyment of food is our sense of taste" に注目</li><li><strong>判定：</strong> "essential factor" = "indispensable"、"our sense of taste" が答え → 選択肢Dと一致 → <strong>D</strong></li></ol><h4>解説</h4><p>食事を楽しむために不可欠な要素は「味覚」（sense of taste）。</p><h4>各選択肢の分析</h4><ul><li><strong>D「味覚」→ ✓ 正解。</strong> "an essential factor to our enjoyment of food is our sense of taste" と明記されており、設問の "indispensable" は "essential" の同義語</li><li>A「少量の調味料」→ 調味料は控えめが良いと述べているが不可欠な要素としては挙げていない</li><li>B「様々な風味」→ 本文の主題ではない</li><li>C「母親の料理」→ 母親は赤ちゃんに薄味を与えるよう勧められているだけ</li><li>E「新鮮な味」→ 不可欠な要素として挙げられているのは味覚</li></ul><div class="tip">読解テク: "an essential factor... is..." の構文はそのまま答えになる。is の後の名詞句を選択肢から探す。</div>`
  },
  {
    id: 309,
    number: 24,
    category: "英文読解",
    subcategory: "Sense of Taste",
    question: `<div class="q-blockquote">Nobody would disagree that we feel happy when we eat something that tastes good. What do you consider necessary to create a delicious dish: a good cook, fresh food, or expensive ingredients? In addition to these, an essential factor to our enjoyment of food is our sense of taste.<br><br>For some Japanese, American cakes are too sweet, and Korean kimchi is too hot. This is not only an issue of national differences. Some Japanese pour a great deal of soy sauce on their food, while others desire no seasoning at all. Some might think a dish is delicious, whereas others think it is too salty. To each his own.<br><br>What reasons lie behind these differences? One reason might be the development of an acquired taste. Once we get used to the taste of a particular food item, we find it delicious. Some Americans may think cake tastes terrible unless it contains a great deal of sugar. Some Koreans might think kimchi is not tasty without hot spices to give it flavour. Some Japanese may think a dish is not good without enough soy sauce.<br><br>Tastes differ, and it is true that seasoning makes food taste better. We can eat whatever we want to. However, it may also be true that someone with a good sense of taste who can identify the delicate differences between foods may enjoy meals more than someone who cannot.<br><br>Baby food contains a hint of flavour in order to help develop our sense of taste. Mothers are advised to give babies food that is bland, rather than strongly seasoned. This holds true for adults. It may also be good for our health to enjoy the natural taste of the ingredients, using seasonings sparingly and experiencing five basic tastes: sweet, bitter, sour, salty, and umami. We can also increase the number of foods we think are delicious by challenging ourselves to try diverse foods.</div><br><strong>Question:</strong> According to the text, who do you think gets more joy from eating?`,
    choices: [
      { label: "A", text: "A person who is picky about food" },
      { label: "B", text: "A person who is conscious about food" },
      { label: "C", text: "A person who is sensitive to tastes" },
      { label: "D", text: "A person who acquires good eating habits" },
      { label: "E", text: "A person who is concerned about health" }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C</strong></p><p><strong>該当英文:</strong> "someone with a good sense of taste who can identify the delicate differences between foods may enjoy meals more than someone who cannot"</p><h4>解法ステップ</h4><ol><li><strong>設問の把握：</strong> 食事からより多くの喜びを得られる人を問われている</li><li><strong>該当箇所の特定：</strong> 第4段落 "someone with a good sense of taste who can identify the delicate differences between foods may enjoy meals more" に注目</li><li><strong>判定：</strong> "a good sense of taste" = 味に敏感な人 → 選択肢Cの "sensitive to tastes" と一致 → <strong>C</strong></li></ol><h4>解説</h4><p>食べ物の微妙な違いを識別できる人（味に敏感な人）がより食事を楽しめる。</p><h4>各選択肢の分析</h4><ul><li><strong>C「味に敏感な人」→ ✓ 正解。</strong> "someone with a good sense of taste who can identify the delicate differences" は味覚が鋭く微妙な違いを識別できる人であり、"sensitive to tastes" と正確に対応する</li><li>A「食べ物の好き嫌いが激しい人」→ 好き嫌いは食事の楽しみとは関係ない</li><li>B「食べ物に意識的な人」→ 意識的であることは触れられているが本文が直接述べているのは味覚の感度</li><li>D「良い食習慣を身につけた人」→ 食習慣は言及されているが食事の楽しみとの関連としては述べられていない</li><li>E「健康を気にする人」→ 健康は触れられているが食事の楽しみとの関連としては述べられていない</li></ul><div class="tip">読解テク: "a good sense of taste" = 味覚が鋭い = 味に敏感。キーフレーズの言い換えパターンを見抜く。</div>`
  },
];
