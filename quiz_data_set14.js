// テストセンター練習 ─ 第14セット 問題データ（みずほWebテスト 英文読解ABC）

const SET14_QUESTIONS = [
  {
    id: 373,
    number: 1,
    category: "英文読解ABC",
    subcategory: "コテージ予約サイト",
    question: `<div class="q-blockquote">Thank you for visiting our booking website. In the description of each cottage, you will find details of its location and the number of people who can stay. There is a limit to the number of adults and children who can stay in a cottage; children up to age 10 count as children, and babies under age 1 can stay free of charge. The availability of baby cots is also indicated. Please note that cots are available at no extra charge, but only to children under 2 years old.</div><br><strong>設問：</strong> Guests of all age groups will be charged for accommodation.`,
    choices: [
      { label: "A", text: "The statement is patently TRUE or follows logically, given the information or opinions contained in the passage." },
      { label: "B", text: "The statement is patently UNTRUE or the opposite follows logically, given the information or opinions contained in the passage." },
      { label: "C", text: "You CANNOT SAY whether the statement is true or untrue, or follows logically, without further information." }
    ],
    answer: "B",
    explanation: `<p><strong>正答: B</strong></p><h4>解法ステップ</h4><ol><li>キーワード: 「all age groups will be charged」（全年齢層に宿泊料がかかる）</li><li>本文該当: 「babies under age 1 can stay free of charge」（1歳未満の赤ちゃんは無料で宿泊可能）</li><li>判定: 1歳未満は無料 → 「全員に課金」は明らかに誤り → <strong>B</strong></li></ol><h4>解説</h4><p>本文には「babies under age 1 can stay free of charge」と明記されており、1歳未満の赤ちゃんは宿泊料が無料である。したがって「全年齢層に宿泊料がかかる」という設問は明らかに間違いである。</p><h4>各選択肢の分析</h4><ul><li>A（正しい）→ 本文に1歳未満は無料と明記されており、「全年齢層に課金」とは矛盾するためAには該当しない。</li><li><strong>B（間違い）→ ✓ 正解。</strong> 「babies under age 1 can stay free of charge」により、全年齢層に課金されるわけではないことが明確。</li><li>C（判断不能）→ 本文に明確な記述があるためCには該当しない。</li></ul><div class="tip">時短テク: 「all」「every」「always」などの全称表現は、例外が1つでもあればBになりやすい。</div>`
  },
  {
    id: 374,
    number: 2,
    category: "英文読解ABC",
    subcategory: "コテージ予約サイト",
    question: `<div class="q-blockquote">Thank you for visiting our booking website. In the description of each cottage, you will find details of its location and the number of people who can stay. There is a limit to the number of adults and children who can stay in a cottage; children up to age 10 count as children, and babies under age 1 can stay free of charge. The availability of baby cots is also indicated. Please note that cots are available at no extra charge, but only to children under 2 years old.</div><br><strong>設問：</strong> Cottage locations are given with the description.`,
    choices: [
      { label: "A", text: "The statement is patently TRUE or follows logically, given the information or opinions contained in the passage." },
      { label: "B", text: "The statement is patently UNTRUE or the opposite follows logically, given the information or opinions contained in the passage." },
      { label: "C", text: "You CANNOT SAY whether the statement is true or untrue, or follows logically, without further information." }
    ],
    answer: "A",
    explanation: `<p><strong>正答: A</strong></p><h4>解法ステップ</h4><ol><li>キーワード: 「Cottage locations are given with the description」（コテージの場所は説明に記載されている）</li><li>本文該当: 「In the description of each cottage, you will find details of its location and the number of people who can stay.」</li><li>判定: 設問と本文が一致 → <strong>A</strong></li></ol><h4>解説</h4><p>本文に「In the description of each cottage, you will find details of its location」と明記されており、各コテージの説明にその場所（location）の詳細が記載されていることがわかる。設問の内容と一致する。</p><h4>各選択肢の分析</h4><ul><li><strong>A（正しい）→ ✓ 正解。</strong> 本文の「you will find details of its location」は設問の「Cottage locations are given with the description」の言い換えであり、明らかに正しい。</li><li>B（間違い）→ 本文と設問が一致しているため、間違いとはならずBには該当しない。</li><li>C（判断不能）→ 本文に明確な記述があるためCには該当しない。</li></ul><div class="tip">時短テク: 設問が本文の言い換えに見えたら、まずAを疑い矛盾がないか確認。</div>`
  },
  {
    id: 375,
    number: 3,
    category: "英文読解ABC",
    subcategory: "コテージ予約サイト",
    question: `<div class="q-blockquote">Thank you for visiting our booking website. In the description of each cottage, you will find details of its location and the number of people who can stay. There is a limit to the number of adults and children who can stay in a cottage; children up to age 10 count as children, and babies under age 1 can stay free of charge. The availability of baby cots is also indicated. Please note that cots are available at no extra charge, but only to children under 2 years old.</div><br><strong>設問：</strong> All cottages can accommodate at least four people.`,
    choices: [
      { label: "A", text: "The statement is patently TRUE or follows logically, given the information or opinions contained in the passage." },
      { label: "B", text: "The statement is patently UNTRUE or the opposite follows logically, given the information or opinions contained in the passage." },
      { label: "C", text: "You CANNOT SAY whether the statement is true or untrue, or follows logically, without further information." }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C</strong></p><h4>解法ステップ</h4><ol><li>キーワード: 「All cottages can accommodate at least four people」（全コテージが少なくとも4人収容可能）</li><li>本文該当: 「the number of people who can stay」（宿泊可能人数）について言及はあるが、具体的な最低人数は記載されていない</li><li>判定: 具体的人数の情報なし → <strong>C</strong></li></ol><h4>解説</h4><p>本文では各コテージの説明に「the number of people who can stay」が記載されると述べているが、全コテージが最低4人を収容できるかどうかについては言及がない。コテージごとに異なる収容人数が設定されている可能性はあるが、最低人数については情報がない。</p><h4>各選択肢の分析</h4><ul><li>A（正しい）→ 本文に最低収容人数の記述がないため、4人以上とは断定できずAには該当しない。</li><li>B（間違い）→ 4人未満のコテージがあるとも明記されていないため、明確に否定もできずBには該当しない。</li><li><strong>C（判断不能）→ ✓ 正解。</strong> 本文は宿泊人数に制限があると述べているだけで、具体的な最低人数には触れていないため、判断不能。</li></ul><div class="tip">時短テク: 具体的な数字が本文に記載されていない場合、数字を含む設問はCの可能性が高い。</div>`
  },
  {
    id: 376,
    number: 4,
    category: "英文読解ABC",
    subcategory: "プレートテクトニクス理論",
    question: `<div class="q-blockquote">The theory of plate tectonics is one of the most revolutionary geological discoveries of the 20th century. It has led to fairly accurate knowledge of the formation and constant movement of the Earth, and serves as the foundation upon which we are able to discover the cause of earthquakes and volcanic activities. The theory emerged when Alfred Wegener, a German meteorologist, first proposed and developed the hypothesis of continental drift, explaining the movement of the continents. Like every scientific theory, the plate tectonics theory was initially controversial due to a lack of detailed evidence. It took a long time of both observation and evidence accumulation by many scientists for the theory to be recognised. For many decades before the theory had been proposed and reshaped people's understanding of the Earth, it was widely accepted the surface of our planet was permanent and motionless.</div><br><strong>設問：</strong> Evidence accumulation of a scientific theory is a short-term process.`,
    choices: [
      { label: "A", text: "The statement is patently TRUE or follows logically, given the information or opinions contained in the passage." },
      { label: "B", text: "The statement is patently UNTRUE or the opposite follows logically, given the information or opinions contained in the passage." },
      { label: "C", text: "You CANNOT SAY whether the statement is true or untrue, or follows logically, without further information." }
    ],
    answer: "B",
    explanation: `<p><strong>正答: B</strong></p><h4>解法ステップ</h4><ol><li>キーワード: 「a short-term process」（短期間のプロセス）</li><li>本文該当: 「It took a long time of both observation and evidence accumulation by many scientists for the theory to be recognised.」（理論が認められるまでに、多くの科学者による長い観察と証拠の蓄積が必要だった）</li><li>判定: 「a long time」と「short-term」は正反対 → <strong>B</strong></li></ol><h4>解説</h4><p>本文には「It took a long time of both observation and evidence accumulation」と明記されており、証拠の蓄積には長い時間がかかったことが示されている。設問の「short-term process」（短期間のプロセス）はこれと正反対である。</p><h4>各選択肢の分析</h4><ul><li>A（正しい）→ 本文は「a long time」と述べており、「short-term」とは矛盾するためAには該当しない。</li><li><strong>B（間違い）→ ✓ 正解。</strong> 「a long time」と「short-term」は明確に対立しており、設問は明らかに間違い。</li><li>C（判断不能）→ 本文に「a long time」と明記されているため判断可能であり、Cには該当しない。</li></ul><div class="tip">時短テク: 「long time」と「short-term」のような対義表現は即座にBと判定できる。</div>`
  },
  {
    id: 377,
    number: 5,
    category: "英文読解ABC",
    subcategory: "プレートテクトニクス理論",
    question: `<div class="q-blockquote">The theory of plate tectonics is one of the most revolutionary geological discoveries of the 20th century. It has led to fairly accurate knowledge of the formation and constant movement of the Earth, and serves as the foundation upon which we are able to discover the cause of earthquakes and volcanic activities. The theory emerged when Alfred Wegener, a German meteorologist, first proposed and developed the hypothesis of continental drift, explaining the movement of the continents. Like every scientific theory, the plate tectonics theory was initially controversial due to a lack of detailed evidence. It took a long time of both observation and evidence accumulation by many scientists for the theory to be recognised. For many decades before the theory had been proposed and reshaped people's understanding of the Earth, it was widely accepted the surface of our planet was permanent and motionless.</div><br><strong>設問：</strong> The plate tectonics theory contributes to the explanation of why earthquakes occur.`,
    choices: [
      { label: "A", text: "The statement is patently TRUE or follows logically, given the information or opinions contained in the passage." },
      { label: "B", text: "The statement is patently UNTRUE or the opposite follows logically, given the information or opinions contained in the passage." },
      { label: "C", text: "You CANNOT SAY whether the statement is true or untrue, or follows logically, without further information." }
    ],
    answer: "A",
    explanation: `<p><strong>正答: A</strong></p><h4>解法ステップ</h4><ol><li>キーワード: 「contributes to the explanation of why earthquakes occur」（地震が起こる理由の説明に貢献する）</li><li>本文該当: 「serves as the foundation upon which we are able to discover the cause of earthquakes and volcanic activities」（地震や火山活動の原因を発見するための基盤となる）</li><li>判定: 設問と本文が一致 → <strong>A</strong></li></ol><h4>解説</h4><p>本文に「serves as the foundation upon which we are able to discover the cause of earthquakes」と明記されており、プレートテクトニクス理論が地震の原因を解明するための基盤であることが示されている。設問の「contributes to the explanation of why earthquakes occur」はその言い換えである。</p><h4>各選択肢の分析</h4><ul><li><strong>A（正しい）→ ✓ 正解。</strong> 「the foundation upon which we are able to discover the cause of earthquakes」は「contributes to the explanation of why earthquakes occur」と同義であり、明らかに正しい。</li><li>B（間違い）→ 本文と設問が一致しているためBには該当しない。</li><li>C（判断不能）→ 本文に明確な記述があるためCには該当しない。</li></ul><div class="tip">時短テク: 「foundation for discovering the cause」≒「contributes to the explanation」と読み替えられる。</div>`
  },
  {
    id: 378,
    number: 6,
    category: "英文読解ABC",
    subcategory: "プレートテクトニクス理論",
    question: `<div class="q-blockquote">The theory of plate tectonics is one of the most revolutionary geological discoveries of the 20th century. It has led to fairly accurate knowledge of the formation and constant movement of the Earth, and serves as the foundation upon which we are able to discover the cause of earthquakes and volcanic activities. The theory emerged when Alfred Wegener, a German meteorologist, first proposed and developed the hypothesis of continental drift, explaining the movement of the continents. Like every scientific theory, the plate tectonics theory was initially controversial due to a lack of detailed evidence. It took a long time of both observation and evidence accumulation by many scientists for the theory to be recognised. For many decades before the theory had been proposed and reshaped people's understanding of the Earth, it was widely accepted the surface of our planet was permanent and motionless.</div><br><strong>設問：</strong> People's knowledge of the Earth was largely changed by the theory.`,
    choices: [
      { label: "A", text: "The statement is patently TRUE or follows logically, given the information or opinions contained in the passage." },
      { label: "B", text: "The statement is patently UNTRUE or the opposite follows logically, given the information or opinions contained in the passage." },
      { label: "C", text: "You CANNOT SAY whether the statement is true or untrue, or follows logically, without further information." }
    ],
    answer: "A",
    explanation: `<p><strong>正答: A</strong></p><h4>解法ステップ</h4><ol><li>キーワード: 「People's knowledge of the Earth was largely changed」（人々の地球に関する知識は大きく変わった）</li><li>本文該当: 「the theory had been proposed and reshaped people's understanding of the Earth」（理論が提唱され、人々の地球に対する理解を再形成した）+ 以前は「the surface of our planet was permanent and motionless」と広く信じられていた</li><li>判定: 「reshaped people's understanding」＝「largely changed」→ <strong>A</strong></li></ol><h4>解説</h4><p>本文には「reshaped people's understanding of the Earth」と明記されており、プレートテクトニクス理論が人々の地球に対する理解を一新したことが示されている。以前は地表が「permanent and motionless」（不変で動かない）と信じられていたが、理論により「constant movement」（常に動いている）という知識に変わった。設問の「largely changed」は「reshaped」の言い換えである。</p><h4>各選択肢の分析</h4><ul><li><strong>A（正しい）→ ✓ 正解。</strong> 「reshaped people's understanding」は「largely changed people's knowledge」と同義であり、本文から論理的に導ける。</li><li>B（間違い）→ 本文の内容と一致しているためBには該当しない。</li><li>C（判断不能）→ 「reshaped」の記述が明確にあるためCには該当しない。</li></ul><div class="tip">時短テク: 「reshape」は「大きく変える」の意味。「largely changed」との対応を見抜く。</div>`
  },
  {
    id: 379,
    number: 7,
    category: "英文読解ABC",
    subcategory: "調味料と料理の個性",
    question: `<div class="q-blockquote">Seasoning is just like a magic medicine that dramatically changes the taste of dishes. Even if two people make the same dish, the use of seasoning is individual, resulting in a change in taste. Personal preferences and home-made dishes that we have eaten since childhood affect our individuality in cooking. Seasoning has unlimited potential.<br><br>However, I think that many people have the notion that the combinations of ingredients and seasoning are fixed. Actually, this is incorrect. For example, most people take it for granted that pepper is almost exclusively used in frying. However, hot drinks like cocoa or hot milk become more delicious by adding pepper.<br><br>To broaden your culinary repertoire, you need to change your way of thinking. By reviewing your use of seasoning, you will surely find unexpected combinations of ingredients and seasoning, and cooking will become more fun.</div><br><strong>設問：</strong> Pepper has limited use.`,
    choices: [
      { label: "A", text: "The statement is patently TRUE or follows logically, given the information or opinions contained in the passage." },
      { label: "B", text: "The statement is patently UNTRUE or the opposite follows logically, given the information or opinions contained in the passage." },
      { label: "C", text: "You CANNOT SAY whether the statement is true or untrue, or follows logically, without further information." }
    ],
    answer: "B",
    explanation: `<p><strong>正答: B</strong></p><h4>解法ステップ</h4><ol><li>キーワード: 「Pepper has limited use」（コショウは使い道が限られている）</li><li>本文該当: 「most people take it for granted that pepper is almost exclusively used in frying. However, hot drinks like cocoa or hot milk become more delicious by adding pepper.」（多くの人はコショウは炒め物にしか使わないと思い込んでいるが、実際にはココアやホットミルクにも合う）</li><li>判定: 筆者はコショウの用途が限られているという考えは「incorrect」（間違い）だと主張 → <strong>B</strong></li></ol><h4>解説</h4><p>本文では「many people have the notion that the combinations of ingredients and seasoning are fixed. Actually, this is incorrect.」と述べ、調味料の組み合わせが固定されているという考えを否定している。コショウの例では、炒め物だけでなくホットドリンクにも使えると具体例を示しており、コショウの用途は限られていないことを主張している。</p><h4>各選択肢の分析</h4><ul><li>A（正しい）→ 本文はコショウの用途が限られているという考えを「incorrect」と否定しており、Aには該当しない。</li><li><strong>B（間違い）→ ✓ 正解。</strong> 筆者はコショウが炒め物以外にもホットドリンクに使えると述べ、用途が限られているという考えを明確に否定している。</li><li>C（判断不能）→ 本文に具体的な反例が示されているため判断可能であり、Cには該当しない。</li></ul><div class="tip">時短テク: 筆者が「incorrect」と否定している内容と同じ主張の設問は即B。</div>`
  },
  {
    id: 380,
    number: 8,
    category: "英文読解ABC",
    subcategory: "調味料と料理の個性",
    question: `<div class="q-blockquote">Seasoning is just like a magic medicine that dramatically changes the taste of dishes. Even if two people make the same dish, the use of seasoning is individual, resulting in a change in taste. Personal preferences and home-made dishes that we have eaten since childhood affect our individuality in cooking. Seasoning has unlimited potential.<br><br>However, I think that many people have the notion that the combinations of ingredients and seasoning are fixed. Actually, this is incorrect. For example, most people take it for granted that pepper is almost exclusively used in frying. However, hot drinks like cocoa or hot milk become more delicious by adding pepper.<br><br>To broaden your culinary repertoire, you need to change your way of thinking. By reviewing your use of seasoning, you will surely find unexpected combinations of ingredients and seasoning, and cooking will become more fun.</div><br><strong>設問：</strong> Many good recipes call for special seasoning.`,
    choices: [
      { label: "A", text: "The statement is patently TRUE or follows logically, given the information or opinions contained in the passage." },
      { label: "B", text: "The statement is patently UNTRUE or the opposite follows logically, given the information or opinions contained in the passage." },
      { label: "C", text: "You CANNOT SAY whether the statement is true or untrue, or follows logically, without further information." }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C</strong></p><h4>解法ステップ</h4><ol><li>キーワード: 「Many good recipes call for special seasoning」（多くの良いレシピは特別な調味料を必要とする）</li><li>本文該当: 調味料の重要性や個性について述べているが、「良いレシピには特別な調味料が必要」という直接的な言及はない</li><li>判定: 本文から論理的に導けない → <strong>C</strong></li></ol><h4>解説</h4><p>本文は調味料が料理の味を劇的に変えること、調味料の使い方には個性があること、固定観念を打破すべきことを述べているが、「良いレシピには特別な調味料が必要」という主張は含まれていない。本文は調味料の「使い方」の個性や可能性を論じているのであり、特定のレシピと特別な調味料の関係には言及していない。</p><h4>各選択肢の分析</h4><ul><li>A（正しい）→ 本文は調味料の重要性を述べているが、「良いレシピ」と「特別な調味料」の関係は述べておらずAには該当しない。</li><li>B（間違い）→ 本文は設問を否定する内容も含んでいないためBには該当しない。</li><li><strong>C（判断不能）→ ✓ 正解。</strong> 「良いレシピに特別な調味料が必要か」については本文で言及がなく、判断不能。</li></ul><div class="tip">時短テク: 本文のテーマと関連しそうだが直接言及がない場合はCを選ぶ。常識で判断しない。</div>`
  },
  {
    id: 381,
    number: 9,
    category: "英文読解ABC",
    subcategory: "調味料と料理の個性",
    question: `<div class="q-blockquote">Seasoning is just like a magic medicine that dramatically changes the taste of dishes. Even if two people make the same dish, the use of seasoning is individual, resulting in a change in taste. Personal preferences and home-made dishes that we have eaten since childhood affect our individuality in cooking. Seasoning has unlimited potential.<br><br>However, I think that many people have the notion that the combinations of ingredients and seasoning are fixed. Actually, this is incorrect. For example, most people take it for granted that pepper is almost exclusively used in frying. However, hot drinks like cocoa or hot milk become more delicious by adding pepper.<br><br>To broaden your culinary repertoire, you need to change your way of thinking. By reviewing your use of seasoning, you will surely find unexpected combinations of ingredients and seasoning, and cooking will become more fun.</div><br><strong>設問：</strong> Your eating habits have nothing to do with the taste of your own cooking.`,
    choices: [
      { label: "A", text: "The statement is patently TRUE or follows logically, given the information or opinions contained in the passage." },
      { label: "B", text: "The statement is patently UNTRUE or the opposite follows logically, given the information or opinions contained in the passage." },
      { label: "C", text: "You CANNOT SAY whether the statement is true or untrue, or follows logically, without further information." }
    ],
    answer: "B",
    explanation: `<p><strong>正答: B</strong></p><h4>解法ステップ</h4><ol><li>キーワード: 「eating habits have nothing to do with the taste of your own cooking」（食習慣は自分の料理の味と無関係）</li><li>本文該当: 「Personal preferences and home-made dishes that we have eaten since childhood affect our individuality in cooking.」（個人の好みや子供の頃から食べてきた家庭料理が、料理の個性に影響する）</li><li>判定: 食習慣が料理に「影響する」と明記 → 「無関係」は正反対 → <strong>B</strong></li></ol><h4>解説</h4><p>本文には「Personal preferences and home-made dishes that we have eaten since childhood affect our individuality in cooking」と明記されており、子供の頃からの食の経験（＝食習慣）が料理の個性（＝味）に影響すると述べている。設問の「nothing to do with」（無関係）はこれと正反対である。</p><h4>各選択肢の分析</h4><ul><li>A（正しい）→ 本文は食習慣が料理に影響すると述べており、「無関係」とは矛盾するためAには該当しない。</li><li><strong>B（間違い）→ ✓ 正解。</strong> 「affect our individuality in cooking」（料理の個性に影響する）と「nothing to do with」（無関係）は明確に対立。</li><li>C（判断不能）→ 本文に「affect」と明記されているため判断可能であり、Cには該当しない。</li></ul><div class="tip">時短テク: 「nothing to do with」は強い否定。本文に「affect」（影響する）とあれば即B。</div>`
  },
  {
    id: 382,
    number: 10,
    category: "英文読解ABC",
    subcategory: "AI技術と幸福",
    question: `<div class="q-blockquote">Artificial Intelligence (AI) is a machine that is precisely programmed as if it were a real creature. In addition to doing tasks such as reading, writing, listening, and talking, they can react and reply to your behaviour. An amazing advance in technology, it behaves as if it were a living animal.<br><br>In old movies, AI threatened human life and was eventually seen as something dangerous trying to dominate humans. However, in the real world, AI offers ways to help improve people's lives. I have seen a television program where an AI-equipped doll is communicating with the elderly in a nursing home. When the doll gazes with its big eyes, blinks occasionally, and presents a crying reaction, a smile can be seen on the faces of the elderly. I have also seen a child has a conversation with a robot equipped with AI at a store and smiles. In the real world, I see that AI makes people happy.<br><br>Of course, if we make mistake in using AI, it could become something that dominates humans and could be a threat. The important thing for using it safely is that the people involved with AI should seek how AI technology can be used to advance human happiness, and they have to be free from their own interests. If someone were to seek their own interests, he or she would abuse the technology. It would expose human society to the danger of being dominated by AI. We must also keep thinking and observing about how AI is used. If you continue holding that thought, AI will become a useful technology for our long-term happiness.</div><br><strong>設問：</strong> AI technology can only work for elderly people.`,
    choices: [
      { label: "A", text: "The statement is patently TRUE or follows logically, given the information or opinions contained in the passage." },
      { label: "B", text: "The statement is patently UNTRUE or the opposite follows logically, given the information or opinions contained in the passage." },
      { label: "C", text: "You CANNOT SAY whether the statement is true or untrue, or follows logically, without further information." }
    ],
    answer: "B",
    explanation: `<p><strong>正答: B</strong></p><h4>解法ステップ</h4><ol><li>キーワード: 「can only work for elderly people」（高齢者にしか役立たない）</li><li>本文該当: 高齢者の例に加えて「I have also seen a child has a conversation with a robot equipped with AI at a store and smiles」（店でAIロボットと会話して笑っている子供も見た）</li><li>判定: 高齢者だけでなく子供の例もある → 「only」は誤り → <strong>B</strong></li></ol><h4>解説</h4><p>本文では高齢者施設でのAI搭載人形の例だけでなく、店舗でAIロボットと会話する子供の例も挙げられている。さらに「AI offers ways to help improve people's lives」と述べており、高齢者に限定していない。「only work for elderly people」は明らかに間違い。</p><h4>各選択肢の分析</h4><ul><li>A（正しい）→ 本文は子供の例も含めており、「only elderly people」とは矛盾するためAには該当しない。</li><li><strong>B（間違い）→ ✓ 正解。</strong> 高齢者だけでなく子供の例もあり、また「people's lives」と広く述べていることから、「only elderly people」は明らかに誤り。</li><li>C（判断不能）→ 本文に複数の対象者の例が明示されているためCには該当しない。</li></ul><div class="tip">時短テク: 「only」は限定表現。本文に他の例があれば即B。</div>`
  },
  {
    id: 383,
    number: 11,
    category: "英文読解ABC",
    subcategory: "AI技術と幸福",
    question: `<div class="q-blockquote">Artificial Intelligence (AI) is a machine that is precisely programmed as if it were a real creature. In addition to doing tasks such as reading, writing, listening, and talking, they can react and reply to your behaviour. An amazing advance in technology, it behaves as if it were a living animal.<br><br>In old movies, AI threatened human life and was eventually seen as something dangerous trying to dominate humans. However, in the real world, AI offers ways to help improve people's lives. I have seen a television program where an AI-equipped doll is communicating with the elderly in a nursing home. When the doll gazes with its big eyes, blinks occasionally, and presents a crying reaction, a smile can be seen on the faces of the elderly. I have also seen a child has a conversation with a robot equipped with AI at a store and smiles. In the real world, I see that AI makes people happy.<br><br>Of course, if we make mistake in using AI, it could become something that dominates humans and could be a threat. The important thing for using it safely is that the people involved with AI should seek how AI technology can be used to advance human happiness, and they have to be free from their own interests. If someone were to seek their own interests, he or she would abuse the technology. It would expose human society to the danger of being dominated by AI. We must also keep thinking and observing about how AI is used. If you continue holding that thought, AI will become a useful technology for our long-term happiness.</div><br><strong>設問：</strong> If you ensure that you never make mistake in using the technology, AI could be used for human happiness.`,
    choices: [
      { label: "A", text: "The statement is patently TRUE or follows logically, given the information or opinions contained in the passage." },
      { label: "B", text: "The statement is patently UNTRUE or the opposite follows logically, given the information or opinions contained in the passage." },
      { label: "C", text: "You CANNOT SAY whether the statement is true or untrue, or follows logically, without further information." }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C</strong></p><h4>解法ステップ</h4><ol><li>キーワード: 「If you ensure that you never make mistake...AI could be used for human happiness」（ミスをしないことを保証すれば…AIは人類の幸福に使える）</li><li>本文該当: 「if we make mistake in using AI, it could become something that dominates humans」（AIの使用を誤れば人類を支配するものになりうる）+ 「the people involved with AI should seek how AI technology can be used to advance human happiness, and they have to be free from their own interests」</li><li>判定: 本文はミスを避けるだけでなく、私利私欲から離れること、継続的な観察も必要と述べている。「ミスをしなければOK」とは単純化しすぎ → <strong>C</strong></li></ol><h4>解説</h4><p>本文ではAIを人類の幸福に役立てるための条件として、(1)ミスを避ける、(2)関係者が私利私欲から離れる、(3)AIの使われ方を継続的に考え観察する、という複数の要素を挙げている。設問は「ミスをしなければ」という単一条件のみを述べており、本文の主張を正確に反映していない。しかし、ミスをしなければという条件だけでAIが幸福に使えるかどうかは本文からは明確に肯定も否定もできない。</p><h4>各選択肢の分析</h4><ul><li>A（正しい）→ 本文はミスを避けるだけでなく複数の条件を挙げており、「ミスをしなければOK」とは述べていないためAには該当しない。</li><li>B（間違い）→ ミスを避けることが条件の一つであることは本文と矛盾しないため、明確に否定もできずBには該当しない。</li><li><strong>C（判断不能）→ ✓ 正解。</strong> 設問は条件を一つに限定しているが、本文は複数の条件を挙げている。その一つだけで十分かどうかは本文からは判断できない。</li></ul><div class="tip">時短テク: 本文に複数条件があるのに設問が一条件だけに言及する場合、その条件だけで十分かは判断不能→C。</div>`
  },
  {
    id: 384,
    number: 12,
    category: "英文読解ABC",
    subcategory: "AI技術と幸福",
    question: `<div class="q-blockquote">Artificial Intelligence (AI) is a machine that is precisely programmed as if it were a real creature. In addition to doing tasks such as reading, writing, listening, and talking, they can react and reply to your behaviour. An amazing advance in technology, it behaves as if it were a living animal.<br><br>In old movies, AI threatened human life and was eventually seen as something dangerous trying to dominate humans. However, in the real world, AI offers ways to help improve people's lives. I have seen a television program where an AI-equipped doll is communicating with the elderly in a nursing home. When the doll gazes with its big eyes, blinks occasionally, and presents a crying reaction, a smile can be seen on the faces of the elderly. I have also seen a child has a conversation with a robot equipped with AI at a store and smiles. In the real world, I see that AI makes people happy.<br><br>Of course, if we make mistake in using AI, it could become something that dominates humans and could be a threat. The important thing for using it safely is that the people involved with AI should seek how AI technology can be used to advance human happiness, and they have to be free from their own interests. If someone were to seek their own interests, he or she would abuse the technology. It would expose human society to the danger of being dominated by AI. We must also keep thinking and observing about how AI is used. If you continue holding that thought, AI will become a useful technology for our long-term happiness.</div><br><strong>設問：</strong> The safety of AI is represented in recent movies.`,
    choices: [
      { label: "A", text: "The statement is patently TRUE or follows logically, given the information or opinions contained in the passage." },
      { label: "B", text: "The statement is patently UNTRUE or the opposite follows logically, given the information or opinions contained in the passage." },
      { label: "C", text: "You CANNOT SAY whether the statement is true or untrue, or follows logically, without further information." }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C</strong></p><h4>解法ステップ</h4><ol><li>キーワード: 「The safety of AI is represented in recent movies」（AIの安全性は最近の映画で描かれている）</li><li>本文該当: 「In old movies, AI threatened human life and was eventually seen as something dangerous trying to dominate humans.」（昔の映画ではAIは危険なものとして描かれた）</li><li>判定: 本文は「old movies」について述べており、「recent movies」については言及なし → <strong>C</strong></li></ol><h4>解説</h4><p>本文では「old movies」（昔の映画）でAIが人類を脅かす危険なものとして描かれていたと述べているが、「recent movies」（最近の映画）については何も言及していない。最近の映画でAIの安全性がどう描かれているかは本文からは判断できない。</p><h4>各選択肢の分析</h4><ul><li>A（正しい）→ 本文は「old movies」にしか言及しておらず、「recent movies」の内容は不明のためAには該当しない。</li><li>B（間違い）→ 「recent movies」について否定する情報もないためBには該当しない。</li><li><strong>C（判断不能）→ ✓ 正解。</strong> 本文は「old movies」のみに言及しており、「recent movies」については情報がなく判断不能。</li></ul><div class="tip">時短テク: 本文の「old」と設問の「recent」のズレに注目。異なる時期・対象への言及はCの可能性大。</div>`
  },
  {
    id: 385,
    number: 13,
    category: "英文読解ABC",
    subcategory: "モンテスキューと三権分立",
    question: `<div class="q-blockquote">In the U.S., federal power is divided into three different branches of government—the legislative branch, executive branch and judicial branch. The fact that the intellectual root of the American political system goes back to Montesquieu's idea of the separation of powers is widely known. Montesquieu, a French political philosopher, argued in his treatise 'The Spirit of Law' that the corruption of the government can be best prevented by dividing the political power into different bodies which act independently but are all bound by the rule of law. Montesquieu's political theories have influenced many American political thinkers and lawmakers of the Enlightenment. In Montesquieu's view, understanding the law and system of government is important because these provide great insights into the irrationality and drawbacks of the law. Therefore, legal reform aiming to create more humane and liberal laws can be accomplished more successfully.</div><br><strong>設問：</strong> Montesquieu's theories are the intellectual sources for the constitution of the United States.`,
    choices: [
      { label: "A", text: "The statement is patently TRUE or follows logically, given the information or opinions contained in the passage." },
      { label: "B", text: "The statement is patently UNTRUE or the opposite follows logically, given the information or opinions contained in the passage." },
      { label: "C", text: "You CANNOT SAY whether the statement is true or untrue, or follows logically, without further information." }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C</strong></p><h4>解法ステップ</h4><ol><li>キーワード: 「the intellectual sources for the constitution of the United States」（合衆国憲法の知的源泉）</li><li>本文該当: 「the intellectual root of the American political system goes back to Montesquieu's idea」+ 「influenced many American political thinkers and lawmakers」</li><li>判定: 本文は「political system」（政治システム）の知的ルーツと述べているが、「constitution」（憲法）の知的源泉とは直接述べていない → <strong>C</strong></li></ol><h4>解説</h4><p>本文ではモンテスキューの思想がアメリカの「political system」の知的ルーツであり、「political thinkers and lawmakers」に影響を与えたと述べています。しかし設問は「the constitution of the United States」（合衆国憲法）の知的源泉であると述べており、「political system」と「constitution」は関連するが厳密には異なる概念です。本文は「constitution」という語を使っておらず、政治システムへの影響から憲法への影響を断定するには追加の前提知識が必要です。</p><h4>各選択肢の分析</h4><ul><li>A（正しい）→ 本文は「political system」の知的ルーツとは述べているが、「constitution」の知的源泉とは直接述べていないためAには該当しない。</li><li>B（間違い）→ モンテスキューが政治思想家や立法者に影響を与えたことは事実であり、憲法との関連を否定する情報もないためBには該当しない。</li><li><strong>C（判断不能）→ ✓ 正解。</strong> 「political system」と「constitution」は厳密には異なる概念であり、本文から憲法の知的源泉であると断定するには追加情報が必要。</li></ul><div class="tip">時短テク: 本文のキーワード（political system）と設問のキーワード（constitution）にズレがあればCを疑う。</div>`
  },
  {
    id: 386,
    number: 14,
    category: "英文読解ABC",
    subcategory: "モンテスキューと三権分立",
    question: `<div class="q-blockquote">In the U.S., federal power is divided into three different branches of government—the legislative branch, executive branch and judicial branch. The fact that the intellectual root of the American political system goes back to Montesquieu's idea of the separation of powers is widely known. Montesquieu, a French political philosopher, argued in his treatise 'The Spirit of Law' that the corruption of the government can be best prevented by dividing the political power into different bodies which act independently but are all bound by the rule of law. Montesquieu's political theories have influenced many American political thinkers and lawmakers of the Enlightenment. In Montesquieu's view, understanding the law and system of government is important because these provide great insights into the irrationality and drawbacks of the law. Therefore, legal reform aiming to create more humane and liberal laws can be accomplished more successfully.</div><br><strong>設問：</strong> Montesquieu believed that there is no possibility to preserve the government from corruption.`,
    choices: [
      { label: "A", text: "The statement is patently TRUE or follows logically, given the information or opinions contained in the passage." },
      { label: "B", text: "The statement is patently UNTRUE or the opposite follows logically, given the information or opinions contained in the passage." },
      { label: "C", text: "You CANNOT SAY whether the statement is true or untrue, or follows logically, without further information." }
    ],
    answer: "B",
    explanation: `<p><strong>正答: B</strong></p><h4>解法ステップ</h4><ol><li>キーワード: 「no possibility to preserve the government from corruption」（政府の腐敗を防ぐ方法はない）</li><li>本文該当: 「the corruption of the government can be best prevented by dividing the political power into different bodies」（政治権力を分割することで政府の腐敗を最もよく防ぐことができる）</li><li>判定: モンテスキューは腐敗を「防げる」と主張 → 「防ぐ方法はない」は正反対 → <strong>B</strong></li></ol><h4>解説</h4><p>本文ではモンテスキューが「the corruption of the government can be best prevented by dividing the political power」と主張したと述べている。つまり、権力分立によって政府の腐敗は防げるという立場であり、「防ぐ方法はない」という設問は正反対である。</p><h4>各選択肢の分析</h4><ul><li>A（正しい）→ モンテスキューは腐敗防止策（権力分立）を提案しており、「防ぐ方法はない」とは矛盾するためAには該当しない。</li><li><strong>B（間違い）→ ✓ 正解。</strong> 「can be best prevented」は防止可能性を示しており、「no possibility」と明確に対立。</li><li>C（判断不能）→ 本文にモンテスキューの具体的な主張が明記されているためCには該当しない。</li></ul><div class="tip">時短テク: 「can be prevented」と「no possibility to preserve」は正反対。</div>`
  },
  {
    id: 387,
    number: 15,
    category: "英文読解ABC",
    subcategory: "モンテスキューと三権分立",
    question: `<div class="q-blockquote">In the U.S., federal power is divided into three different branches of government—the legislative branch, executive branch and judicial branch. The fact that the intellectual root of the American political system goes back to Montesquieu's idea of the separation of powers is widely known. Montesquieu, a French political philosopher, argued in his treatise 'The Spirit of Law' that the corruption of the government can be best prevented by dividing the political power into different bodies which act independently but are all bound by the rule of law. Montesquieu's political theories have influenced many American political thinkers and lawmakers of the Enlightenment. In Montesquieu's view, understanding the law and system of government is important because these provide great insights into the irrationality and drawbacks of the law. Therefore, legal reform aiming to create more humane and liberal laws can be accomplished more successfully.</div><br><strong>設問：</strong> The goal of law reform is to make a law that treats people with consideration.`,
    choices: [
      { label: "A", text: "The statement is patently TRUE or follows logically, given the information or opinions contained in the passage." },
      { label: "B", text: "The statement is patently UNTRUE or the opposite follows logically, given the information or opinions contained in the passage." },
      { label: "C", text: "You CANNOT SAY whether the statement is true or untrue, or follows logically, without further information." }
    ],
    answer: "A",
    explanation: `<p><strong>正答: A</strong></p><h4>解法ステップ</h4><ol><li>キーワード: 「make a law that treats people with consideration」（人々を思いやりをもって扱う法律を作る）</li><li>本文該当: 「legal reform aiming to create more humane and liberal laws」（より人道的で自由な法律を作ることを目指す法改革）</li><li>判定: 「humane」（人道的）≒「treats people with consideration」（思いやりをもって扱う）→ <strong>A</strong></li></ol><h4>解説</h4><p>本文では「legal reform aiming to create more humane and liberal laws can be accomplished more successfully」と述べており、法改革の目的が「より人道的で自由な法律を作ること」であることが示されている。設問の「treats people with consideration」は「humane」（人道的な）の言い換えと解釈でき、内容が一致する。</p><h4>各選択肢の分析</h4><ul><li><strong>A（正しい）→ ✓ 正解。</strong> 「more humane laws」は「laws that treat people with consideration」と同義であり、法改革の目的として本文から導ける。</li><li>B（間違い）→ 本文の内容と一致しているためBには該当しない。</li><li>C（判断不能）→ 「humane」の意味から十分に導けるためCには該当しない。</li></ul><div class="tip">時短テク: 「humane」＝「人道的な」＝「treats people with consideration」と読み替え可能。</div>`
  },
  {
    id: 388,
    number: 16,
    category: "英文読解ABC",
    subcategory: "ポンペイ遺跡",
    question: `<div class="q-blockquote">Pompeii, an ancient Roman city, is famous for its total destruction caused by the intense eruption of Mount Vesuvius, an active volcano in southern Italy, in 79 AD. Pompeii was quickly and completely buried by ash and pumice after the volcano's sudden and violent awakening. Although there was an earthquake before the eruption in 62 AD, the citizens of Pompeii failed to perceive it as a warning of the coming catastrophe. The site was not discovered until 1748, and the excavation by archaeologists is still being carried out even today. The discovery of Pompeii provides a unique and precious view of ordinary lives in ancient Rome, and offers great value for archaeological studies, as the city was well preserved beneath the ash.</div><br><strong>設問：</strong> The site was discovered by an Italian archaeologist.`,
    choices: [
      { label: "A", text: "The statement is patently TRUE or follows logically, given the information or opinions contained in the passage." },
      { label: "B", text: "The statement is patently UNTRUE or the opposite follows logically, given the information or opinions contained in the passage." },
      { label: "C", text: "You CANNOT SAY whether the statement is true or untrue, or follows logically, without further information." }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C</strong></p><h4>解法ステップ</h4><ol><li>キーワード: 「discovered by an Italian archaeologist」（イタリア人の考古学者によって発見された）</li><li>本文該当: 「The site was not discovered until 1748」（1748年まで発見されなかった）</li><li>判定: 発見者の国籍や職業についての言及なし → <strong>C</strong></li></ol><h4>解説</h4><p>本文では「The site was not discovered until 1748」と発見時期のみを述べており、発見者がイタリア人であるか、考古学者であるかについての情報は含まれていない。ポンペイがイタリアにあるからといってイタリア人が発見したとは限らない。</p><h4>各選択肢の分析</h4><ul><li>A（正しい）→ 発見者の国籍や職業について本文に記述がないためAには該当しない。</li><li>B（間違い）→ イタリア人ではないと否定する情報もないためBには該当しない。</li><li><strong>C（判断不能）→ ✓ 正解。</strong> 本文は発見時期のみを述べており、発見者に関する情報がなく判断不能。</li></ul><div class="tip">時短テク: 本文に「who discovered」の情報がなければ、発見者に関する設問はC。場所から国籍を推測しない。</div>`
  },
  {
    id: 389,
    number: 17,
    category: "英文読解ABC",
    subcategory: "ポンペイ遺跡",
    question: `<div class="q-blockquote">Pompeii, an ancient Roman city, is famous for its total destruction caused by the intense eruption of Mount Vesuvius, an active volcano in southern Italy, in 79 AD. Pompeii was quickly and completely buried by ash and pumice after the volcano's sudden and violent awakening. Although there was an earthquake before the eruption in 62 AD, the citizens of Pompeii failed to perceive it as a warning of the coming catastrophe. The site was not discovered until 1748, and the excavation by archaeologists is still being carried out even today. The discovery of Pompeii provides a unique and precious view of ordinary lives in ancient Rome, and offers great value for archaeological studies, as the city was well preserved beneath the ash.</div><br><strong>設問：</strong> Pompeii has a high archaeological value because of its good state of preservation.`,
    choices: [
      { label: "A", text: "The statement is patently TRUE or follows logically, given the information or opinions contained in the passage." },
      { label: "B", text: "The statement is patently UNTRUE or the opposite follows logically, given the information or opinions contained in the passage." },
      { label: "C", text: "You CANNOT SAY whether the statement is true or untrue, or follows logically, without further information." }
    ],
    answer: "A",
    explanation: `<p><strong>正答: A</strong></p><h4>解法ステップ</h4><ol><li>キーワード: 「high archaeological value because of its good state of preservation」（保存状態が良いため考古学的価値が高い）</li><li>本文該当: 「offers great value for archaeological studies, as the city was well preserved beneath the ash」（灰の下で都市がよく保存されていたため、考古学研究に大きな価値を提供する）</li><li>判定: 設問と本文が一致 → <strong>A</strong></li></ol><h4>解説</h4><p>本文には「offers great value for archaeological studies, as the city was well preserved beneath the ash」と明記されており、ポンペイが灰の下でよく保存されていたため考古学的に大きな価値があると述べている。設問の「high archaeological value because of its good state of preservation」はこの記述の言い換えである。</p><h4>各選択肢の分析</h4><ul><li><strong>A（正しい）→ ✓ 正解。</strong> 「great value for archaeological studies」＝「high archaeological value」、「well preserved」＝「good state of preservation」と対応し、因果関係も一致。</li><li>B（間違い）→ 本文と完全に一致しているためBには該当しない。</li><li>C（判断不能）→ 本文に明確な記述があるためCには該当しない。</li></ul><div class="tip">時短テク: 因果関係（because of/as）が本文と設問で一致しているかを確認。</div>`
  },
  {
    id: 390,
    number: 18,
    category: "英文読解ABC",
    subcategory: "ポンペイ遺跡",
    question: `<div class="q-blockquote">Pompeii, an ancient Roman city, is famous for its total destruction caused by the intense eruption of Mount Vesuvius, an active volcano in southern Italy, in 79 AD. Pompeii was quickly and completely buried by ash and pumice after the volcano's sudden and violent awakening. Although there was an earthquake before the eruption in 62 AD, the citizens of Pompeii failed to perceive it as a warning of the coming catastrophe. The site was not discovered until 1748, and the excavation by archaeologists is still being carried out even today. The discovery of Pompeii provides a unique and precious view of ordinary lives in ancient Rome, and offers great value for archaeological studies, as the city was well preserved beneath the ash.</div><br><strong>設問：</strong> The earthquake helped raise the people of Pompeii's crisis awareness of the eruption.`,
    choices: [
      { label: "A", text: "The statement is patently TRUE or follows logically, given the information or opinions contained in the passage." },
      { label: "B", text: "The statement is patently UNTRUE or the opposite follows logically, given the information or opinions contained in the passage." },
      { label: "C", text: "You CANNOT SAY whether the statement is true or untrue, or follows logically, without further information." }
    ],
    answer: "B",
    explanation: `<p><strong>正答: B</strong></p><h4>解法ステップ</h4><ol><li>キーワード: 「The earthquake helped raise...crisis awareness」（地震が危機意識を高めるのに役立った）</li><li>本文該当: 「Although there was an earthquake before the eruption in 62 AD, the citizens of Pompeii failed to perceive it as a warning of the coming catastrophe.」（62年に地震があったが、市民はそれを噴火の警告として認識できなかった）</li><li>判定: 市民は地震を警告と認識できなかった → 危機意識は高まらなかった → <strong>B</strong></li></ol><h4>解説</h4><p>本文には「the citizens of Pompeii failed to perceive it as a warning of the coming catastrophe」と明記されており、ポンペイ市民は地震を来たるべき大災害の警告として認識できなかった。つまり地震は危機意識の向上に役立たなかった。設問の「helped raise crisis awareness」は本文と正反対である。</p><h4>各選択肢の分析</h4><ul><li>A（正しい）→ 本文は「failed to perceive」（認識できなかった）と述べており、危機意識が高まったとは言えないためAには該当しない。</li><li><strong>B（間違い）→ ✓ 正解。</strong> 「failed to perceive it as a warning」は「helped raise crisis awareness」と正反対であり、明らかに間違い。</li><li>C（判断不能）→ 本文に明確な記述があるためCには該当しない。</li></ul><div class="tip">時短テク: 「failed to perceive」（認識に失敗）と「helped raise awareness」（意識を高めた）は明確に対立→B。</div>`
  },
  {
    id: 391,
    number: 19,
    category: "英文読解ABC",
    subcategory: "幸福と多様性・自己肯定感",
    question: `<div class="q-blockquote">People's happiness can never be measured numerically or visually. To put it in extreme terms, for example, a millionaire is not always happy, nor on the other hand are poor people always unhappy. Similarly, it is not always true that the president of a large company is happy and the employees are unhappy. A person's happiness can only be determined by himself or herself, and it is never possible for others to determine one's happiness.<br><br>Recently, we have often seen the word 'diversification'. The subjects of diversification include lifestyles, love affairs, occupations, academic backgrounds, marital status, family composition, and so on. When you look at these things, you can see that no one is the same as another person. Admitting that 'other people are different from yourself' would also lead to accepting yourself as you are. This is called self-affirmation. Self-affirmation is the essence of human beings, and I think that it is the root of happiness in human society. If children do not gain sufficient self-affirmation at a young age, this may lead to them becoming adults who hurt themselves and others. If that happens, the results will be far from happy.<br><br>I think that cultivating academic abilities and physical abilities are also an important role of schools, but I deeply hope that education that fully develops self-affirmation will make people happier.</div><br><strong>設問：</strong> Diversification is to recognize that everyone is different from everyone else.`,
    choices: [
      { label: "A", text: "The statement is patently TRUE or follows logically, given the information or opinions contained in the passage." },
      { label: "B", text: "The statement is patently UNTRUE or the opposite follows logically, given the information or opinions contained in the passage." },
      { label: "C", text: "You CANNOT SAY whether the statement is true or untrue, or follows logically, without further information." }
    ],
    answer: "A",
    explanation: `<p><strong>正答: A</strong></p><h4>解法ステップ</h4><ol><li>キーワード: 「Diversification is to recognize that everyone is different from everyone else」（多様化とは、全員が互いに異なることを認識すること）</li><li>本文該当: 多様化の対象を列挙した後、「you can see that no one is the same as another person」（誰一人として同じ人はいないことがわかる）と述べている</li><li>判定: 設問と本文が一致 → <strong>A</strong></li></ol><h4>解説</h4><p>本文ではdiversificationの対象（lifestyles, love affairs, occupations等）を列挙し、「When you look at these things, you can see that no one is the same as another person」と述べている。これは設問の「everyone is different from everyone else」と同義であり、多様化の本質が「誰もが異なること」を認識することであると示している。</p><h4>各選択肢の分析</h4><ul><li><strong>A（正しい）→ ✓ 正解。</strong> 「no one is the same as another person」は「everyone is different from everyone else」の言い換えであり、本文の多様化の説明と一致する。</li><li>B（間違い）→ 本文と設問が一致しているためBには該当しない。</li><li>C（判断不能）→ 本文に明確な記述があるためCには該当しない。</li></ul><div class="tip">時短テク: 「no one is the same as another」≒「everyone is different from everyone else」と対応させる。</div>`
  },
  {
    id: 392,
    number: 20,
    category: "英文読解ABC",
    subcategory: "幸福と多様性・自己肯定感",
    question: `<div class="q-blockquote">People's happiness can never be measured numerically or visually. To put it in extreme terms, for example, a millionaire is not always happy, nor on the other hand are poor people always unhappy. Similarly, it is not always true that the president of a large company is happy and the employees are unhappy. A person's happiness can only be determined by himself or herself, and it is never possible for others to determine one's happiness.<br><br>Recently, we have often seen the word 'diversification'. The subjects of diversification include lifestyles, love affairs, occupations, academic backgrounds, marital status, family composition, and so on. When you look at these things, you can see that no one is the same as another person. Admitting that 'other people are different from yourself' would also lead to accepting yourself as you are. This is called self-affirmation. Self-affirmation is the essence of human beings, and I think that it is the root of happiness in human society. If children do not gain sufficient self-affirmation at a young age, this may lead to them becoming adults who hurt themselves and others. If that happens, the results will be far from happy.<br><br>I think that cultivating academic abilities and physical abilities are also an important role of schools, but I deeply hope that education that fully develops self-affirmation will make people happier.</div><br><strong>設問：</strong> It is difficult for us to admit that other people are different from ourselves unless education to develop self-affirmation is given.`,
    choices: [
      { label: "A", text: "The statement is patently TRUE or follows logically, given the information or opinions contained in the passage." },
      { label: "B", text: "The statement is patently UNTRUE or the opposite follows logically, given the information or opinions contained in the passage." },
      { label: "C", text: "You CANNOT SAY whether the statement is true or untrue, or follows logically, without further information." }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C</strong></p><h4>解法ステップ</h4><ol><li>キーワード: 「difficult...unless education to develop self-affirmation is given」（自己肯定感を育む教育がなければ、他者との違いを認めるのは難しい）</li><li>本文該当: 本文は「Admitting that 'other people are different from yourself' would also lead to accepting yourself as you are」（他者の違いを認めることが自己肯定につながる）と述べ、教育の重要性にも触れているが、因果関係の方向が異なる</li><li>判定: 本文は「違いを認める→自己肯定」の順序だが、設問は「自己肯定教育がないと→違いを認められない」という逆の因果関係 → 本文から導けない → <strong>C</strong></li></ol><h4>解説</h4><p>本文では「他者が自分と違うことを認めること」→「自己肯定感につながる」という因果関係が示されている。一方、設問は「自己肯定感を育む教育がなければ、他者の違いを認めるのが難しい」という逆の因果関係を主張している。また、本文は教育について「education that fully develops self-affirmation will make people happier」と希望を述べているだけで、教育がなければ他者の違いを認められないとは述べていない。</p><h4>各選択肢の分析</h4><ul><li>A（正しい）→ 本文の因果関係は「違いを認める→自己肯定」であり、設問の「自己肯定教育がなければ→認められない」という逆方向は導けないためAには該当しない。</li><li>B（間違い）→ 設問を明確に否定する情報もないためBには該当しない。</li><li><strong>C（判断不能）→ ✓ 正解。</strong> 因果関係の方向が異なり、教育の有無と「他者の違いを認める能力」の関係は本文から判断できない。</li></ul><div class="tip">時短テク: 因果関係の方向（A→BなのかB→Aなのか）に注目。逆転していたらCの可能性大。</div>`
  },
  {
    id: 393,
    number: 21,
    category: "英文読解ABC",
    subcategory: "幸福と多様性・自己肯定感",
    question: `<div class="q-blockquote">People's happiness can never be measured numerically or visually. To put it in extreme terms, for example, a millionaire is not always happy, nor on the other hand are poor people always unhappy. Similarly, it is not always true that the president of a large company is happy and the employees are unhappy. A person's happiness can only be determined by himself or herself, and it is never possible for others to determine one's happiness.<br><br>Recently, we have often seen the word 'diversification'. The subjects of diversification include lifestyles, love affairs, occupations, academic backgrounds, marital status, family composition, and so on. When you look at these things, you can see that no one is the same as another person. Admitting that 'other people are different from yourself' would also lead to accepting yourself as you are. This is called self-affirmation. Self-affirmation is the essence of human beings, and I think that it is the root of happiness in human society. If children do not gain sufficient self-affirmation at a young age, this may lead to them becoming adults who hurt themselves and others. If that happens, the results will be far from happy.<br><br>I think that cultivating academic abilities and physical abilities are also an important role of schools, but I deeply hope that education that fully develops self-affirmation will make people happier.</div><br><strong>設問：</strong> Children's happiness can be determined by their parents.`,
    choices: [
      { label: "A", text: "The statement is patently TRUE or follows logically, given the information or opinions contained in the passage." },
      { label: "B", text: "The statement is patently UNTRUE or the opposite follows logically, given the information or opinions contained in the passage." },
      { label: "C", text: "You CANNOT SAY whether the statement is true or untrue, or follows logically, without further information." }
    ],
    answer: "B",
    explanation: `<p><strong>正答: B</strong></p><h4>解法ステップ</h4><ol><li>キーワード: 「Children's happiness can be determined by their parents」（子供の幸福は親が決められる）</li><li>本文該当: 「A person's happiness can only be determined by himself or herself, and it is never possible for others to determine one's happiness.」（人の幸福はその人自身にしか決められず、他人が決めることは絶対にできない）</li><li>判定: 「A person's happiness」は子供も含む。親は「others」に該当 → 「never possible for others」と矛盾 → <strong>B</strong></li></ol><h4>解説</h4><p>本文では「A person's happiness can only be determined by himself or herself, and it is never possible for others to determine one's happiness」と明記されており、誰の幸福であれその人自身にしか決められないと述べている。子供も「a person」に含まれ、親は「others」に該当するため、親が子供の幸福を決められるという設問は本文に明確に反する。</p><h4>各選択肢の分析</h4><ul><li>A（正しい）→ 本文は「only by himself or herself」「never possible for others」と断言しており、親が決められるという設問と矛盾するためAには該当しない。</li><li><strong>B（間違い）→ ✓ 正解。</strong> 「it is never possible for others to determine one's happiness」と「can be determined by their parents」は明確に対立。</li><li>C（判断不能）→ 本文に「never possible for others」と明記されているため判断可能であり、Cには該当しない。</li></ul><div class="tip">時短テク: 「only by himself/herself」「never possible for others」は他者による判定を完全否定→親もothersに含まれる。</div>`
  },
  {
    id: 394,
    number: 22,
    category: "英文読解ABC",
    subcategory: "ジャイアントパンダの保全",
    question: `<div class="q-blockquote">Habitat loss caused by excessive human activities is driving many species to extinction. The giant panda is no exception. As the panda's natural habitat is disappearing and becoming fragmented, they are separated into small, isolated populations, unable to meet and breed with each other, and more susceptible to climate change and natural disasters. The giant panda is an excellent example of an umbrella species, thereby, the conservation strategies designed for the giant panda are expected to benefit other species sharing the same habitat. The concept of umbrella species is usually used as a shortcut for conservation projects due to limited knowledge, as well as a lack of sufficient time and funding. The Chinese government is dedicated to building ecological corridors aiming to connect the habitats of panda subgroups and reunite them, which serves to increase both the genetic diversity of the giant panda and the biodiversity of the ecological community.</div><br><strong>設問：</strong> The division of the pandas into small groups helps them resist natural disasters.`,
    choices: [
      { label: "A", text: "The statement is patently TRUE or follows logically, given the information or opinions contained in the passage." },
      { label: "B", text: "The statement is patently UNTRUE or the opposite follows logically, given the information or opinions contained in the passage." },
      { label: "C", text: "You CANNOT SAY whether the statement is true or untrue, or follows logically, without further information." }
    ],
    answer: "B",
    explanation: `<p><strong>正答: B</strong></p><h4>解法ステップ</h4><ol><li>キーワード: 「division into small groups helps them resist natural disasters」（小集団への分割が自然災害への耐性を高める）</li><li>本文該当: 「they are separated into small, isolated populations, unable to meet and breed with each other, and more susceptible to climate change and natural disasters」（小さく孤立した集団に分断され、互いに出会って繁殖できず、気候変動や自然災害に対してより脆弱になる）</li><li>判定: 「more susceptible」（より脆弱）≠「helps resist」（耐性を高める）→ 正反対 → <strong>B</strong></li></ol><h4>解説</h4><p>本文では、パンダが小さく孤立した集団に分断されることで「more susceptible to climate change and natural disasters」（気候変動や自然災害に対してより脆弱になる）と述べている。設問の「helps them resist natural disasters」（自然災害への耐性を高める）はこれと正反対である。</p><h4>各選択肢の分析</h4><ul><li>A（正しい）→ 本文は「more susceptible」（より脆弱）と述べており、「helps resist」（耐性を高める）とは矛盾するためAには該当しない。</li><li><strong>B（間違い）→ ✓ 正解。</strong> 「more susceptible to natural disasters」と「helps them resist natural disasters」は明確に対立。</li><li>C（判断不能）→ 本文に「more susceptible」と明記されているため判断可能であり、Cには該当しない。</li></ul><div class="tip">時短テク: 「susceptible」（脆弱）と「resist」（抵抗）は対義語→即B。</div>`
  },
  {
    id: 395,
    number: 23,
    category: "英文読解ABC",
    subcategory: "ジャイアントパンダの保全",
    question: `<div class="q-blockquote">Habitat loss caused by excessive human activities is driving many species to extinction. The giant panda is no exception. As the panda's natural habitat is disappearing and becoming fragmented, they are separated into small, isolated populations, unable to meet and breed with each other, and more susceptible to climate change and natural disasters. The giant panda is an excellent example of an umbrella species, thereby, the conservation strategies designed for the giant panda are expected to benefit other species sharing the same habitat. The concept of umbrella species is usually used as a shortcut for conservation projects due to limited knowledge, as well as a lack of sufficient time and funding. The Chinese government is dedicated to building ecological corridors aiming to connect the habitats of panda subgroups and reunite them, which serves to increase both the genetic diversity of the giant panda and the biodiversity of the ecological community.</div><br><strong>設問：</strong> Habitat fragmentation can hinder pandas' breeding.`,
    choices: [
      { label: "A", text: "The statement is patently TRUE or follows logically, given the information or opinions contained in the passage." },
      { label: "B", text: "The statement is patently UNTRUE or the opposite follows logically, given the information or opinions contained in the passage." },
      { label: "C", text: "You CANNOT SAY whether the statement is true or untrue, or follows logically, without further information." }
    ],
    answer: "A",
    explanation: `<p><strong>正答: A</strong></p><h4>解法ステップ</h4><ol><li>キーワード: 「Habitat fragmentation can hinder pandas' breeding」（生息地の断片化がパンダの繁殖を妨げうる）</li><li>本文該当: 「As the panda's natural habitat is disappearing and becoming fragmented, they are separated into small, isolated populations, unable to meet and breed with each other」（生息地が断片化し、孤立した小集団に分断され、互いに出会って繁殖できなくなる）</li><li>判定: 断片化→繁殖不能という因果関係が明記 → <strong>A</strong></li></ol><h4>解説</h4><p>本文には生息地が「becoming fragmented」（断片化している）ことにより、パンダが「unable to meet and breed with each other」（互いに出会って繁殖できない）状態になると明記されている。設問の「Habitat fragmentation can hinder pandas' breeding」はこの内容の言い換えであり、論理的に正しい。</p><h4>各選択肢の分析</h4><ul><li><strong>A（正しい）→ ✓ 正解。</strong> 「becoming fragmented」→「unable to breed」という因果関係は「fragmentation can hinder breeding」と同義。</li><li>B（間違い）→ 本文の内容と一致しているためBには該当しない。</li><li>C（判断不能）→ 本文に明確な因果関係が示されているためCには該当しない。</li></ul><div class="tip">時短テク: 「becoming fragmented」→「unable to breed」の因果関係が設問と一致→A。</div>`
  },
  {
    id: 396,
    number: 24,
    category: "英文読解ABC",
    subcategory: "ジャイアントパンダの保全",
    question: `<div class="q-blockquote">Habitat loss caused by excessive human activities is driving many species to extinction. The giant panda is no exception. As the panda's natural habitat is disappearing and becoming fragmented, they are separated into small, isolated populations, unable to meet and breed with each other, and more susceptible to climate change and natural disasters. The giant panda is an excellent example of an umbrella species, thereby, the conservation strategies designed for the giant panda are expected to benefit other species sharing the same habitat. The concept of umbrella species is usually used as a shortcut for conservation projects due to limited knowledge, as well as a lack of sufficient time and funding. The Chinese government is dedicated to building ecological corridors aiming to connect the habitats of panda subgroups and reunite them, which serves to increase both the genetic diversity of the giant panda and the biodiversity of the ecological community.</div><br><strong>設問：</strong> Species extinction can be prevented by increasing the biodiversity of the ecological community.`,
    choices: [
      { label: "A", text: "The statement is patently TRUE or follows logically, given the information or opinions contained in the passage." },
      { label: "B", text: "The statement is patently UNTRUE or the opposite follows logically, given the information or opinions contained in the passage." },
      { label: "C", text: "You CANNOT SAY whether the statement is true or untrue, or follows logically, without further information." }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C</strong></p><h4>解法ステップ</h4><ol><li>キーワード: 「Species extinction can be prevented by increasing the biodiversity」（生物多様性を高めることで種の絶滅を防げる）</li><li>本文該当: 中国政府の取り組みが「serves to increase both the genetic diversity of the giant panda and the biodiversity of the ecological community」（パンダの遺伝的多様性と生態系の生物多様性を高める）と述べているが、これが種の絶滅を「防げる」とは直接述べていない</li><li>判定: 生物多様性の向上が種の絶滅防止に直結するとは明記されていない → <strong>C</strong></li></ol><h4>解説</h4><p>本文では、エコロジカル・コリドーの建設が生物多様性を高めることに寄与すると述べているが、「生物多様性を高めることで種の絶滅を防げる」という因果関係は直接述べていない。本文の論理は「生息地をつなぐ→遺伝的多様性と生物多様性が向上する」であり、「生物多様性の向上→絶滅防止」という飛躍した因果関係は本文からは導けない。</p><h4>各選択肢の分析</h4><ul><li>A（正しい）→ 本文は生物多様性の向上を述べているが、それが直接的に種の絶滅を防ぐとは述べていないためAには該当しない。</li><li>B（間違い）→ 生物多様性の向上が絶滅防止に無関係であるとも述べていないためBには該当しない。</li><li><strong>C（判断不能）→ ✓ 正解。</strong> 本文は生物多様性の向上を目的の一つとして述べているが、それが種の絶滅防止に十分かどうかは本文からは判断できない。</li></ul><div class="tip">時短テク: 本文が述べる因果関係（コリドー→多様性向上）と設問の因果関係（多様性向上→絶滅防止）が異なる場合はC。</div>`
  }
];
