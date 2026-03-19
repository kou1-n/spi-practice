// テストセンター練習 ─ 第11セット 問題データ（Docker／コンテナ技術）
const SET11_QUESTIONS = [
  {
    id: 194,
    number: 1,
    category: "Docker／コンテナ",
    subcategory: "コンテナ型仮想化",
    question: `コンテナ型仮想化(OS-level virtualization)について、最も<strong>不適切な</strong>選択肢を選んでください。`,
    choices: [
      { label: "A", text: "カーネルの機能によって分離したユーザ空間を割り当て、その上でアプリケーションを実行することができる。" },
      { label: "B", text: "開発者ごとの環境やテストサーバーの環境に依存せず、標準化された環境で開発からテスト、本番環境へのデプロイまでができる。" },
      { label: "C", text: "ホストマシンの上で動作するため、ホストと共有しているリソースであるシステム時刻等を分離することは難しい。" },
      { label: "D", text: "複数の異なるOSを同時に動作させてホストのハードウェアリソースを共有することができる。" }
    ],
    answer: "D",
    explanation: `<p><strong>正答: D</strong></p>
<h4>解説</h4>
<p>コンテナ型仮想化は<strong>ホストOSのカーネルを共有</strong>して動作します。そのため、ホストと根本的に異なるOS（例：LinuxホストでWindowsコンテナ）を動作させることは原則できません。</p>
<p>複数の異なるOSを同時に動作させるのは<strong>ハイパーバイザ型仮想化</strong>（VMware, Hyper-V等）の特徴です。</p>
<h4>各選択肢の分析</h4>
<ul>
<li>A → ✓ 正しい。namespace等のカーネル機能でユーザ空間を分離する。</li>
<li>B → ✓ 正しい。環境の標準化はコンテナの大きなメリット。</li>
<li>C → ✓ 正しい。カーネル共有のため、システム時刻等の完全分離は難しい。</li>
<li><strong>D → ✗ 不適切。</strong>カーネル共有のため、異なるOSの同時実行は不可。</li>
</ul>
<div class="tip">コンテナ vs VM：コンテナはカーネル共有→軽量・高速だが同一OS系統に限定。VMはカーネル別→重いが異なるOS実行可能。</div>`
  },
  {
    id: 195,
    number: 2,
    category: "Docker／コンテナ",
    subcategory: "Docker関連技術",
    question: `Dockerの関連技術について、最も<strong>不適切な</strong>選択肢を選んでください。`,
    choices: [
      { label: "A", text: "Docker CLIは、コンテナを実行する際にDockerデーモンに処理要求を送る。" },
      { label: "B", text: "Dockerデーモンは、コンテナの実行に必要なImage, Container, Network, Volumeオブジェクトを管理する。" },
      { label: "C", text: "Dockerデーモンは、コンテナを実行する際にcontainerdと呼ばれるランタイムを呼び出す。" },
      { label: "D", text: "containerdは、コンテナを実行する際にOCI Image Specに準拠した、runCを始めとするランタイムを呼び出す。" }
    ],
    answer: "D",
    explanation: `<p><strong>正答: D</strong></p>
<h4>解説</h4>
<p>containerd/runCが準拠するのは<strong>OCI Runtime Spec</strong>（コンテナの実行仕様）であり、OCI Image Spec（イメージのフォーマット仕様）ではありません。</p>
<h4>Docker実行の流れ</h4>
<ol>
<li><strong>Docker CLI</strong> → Dockerデーモンに処理要求（REST API）</li>
<li><strong>Dockerデーモン</strong> → Image/Container/Network/Volume管理</li>
<li><strong>containerd</strong> → コンテナランタイムの管理</li>
<li><strong>runC</strong> → OCI <strong>Runtime</strong> Specに準拠してコンテナを実際に起動</li>
</ol>
<h4>各選択肢の分析</h4>
<ul>
<li>A → ✓ 正しい。CLIはデーモンへREST APIで処理を要求する。</li>
<li>B → ✓ 正しい。デーモンがこれらのオブジェクトを管理する。</li>
<li>C → ✓ 正しい。containerdはコンテナランタイム。</li>
<li><strong>D → ✗ 不適切。</strong>OCI Image SpecではなくOCI Runtime Spec。</li>
</ul>
<div class="tip">OCI (Open Container Initiative) の2つの仕様：<strong>Runtime Spec</strong>=コンテナの実行方法、<strong>Image Spec</strong>=イメージのフォーマット。runCはRuntime Specに準拠。</div>`
  },
  {
    id: 196,
    number: 3,
    category: "Docker／コンテナ",
    subcategory: "Docker Image",
    question: `Docker Imageについて、最も<strong>不適切な</strong>選択肢を選んでください。`,
    choices: [
      { label: "A", text: "Docker Imageは、コンテナを作成するためのコマンドを含むテンプレートであり、これを共有することで異なる環境でもアプリケーションを同じ動作にすることができる。" },
      { label: "B", text: "既存のDocker Imageをベースにしてアプリケーションや設定を加え、新しいDocker Imageを作成することができる。" },
      { label: "C", text: "Docker Imageは、生成時に付与されるリポジトリ＋タグ、またはImage ID（SHA256ハッシュ）で識別可能。ソースとなるDockerfileの内容が同一であればImage IDは同じになる。" },
      { label: "D", text: "Docker Imageを作成するには、Dockerfileを作成し、それを元に新しいDocker Imageを生成する。各ステップはキャッシュされるため、Dockerfile変更時のリビルドは高速。" }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C</strong></p>
<h4>解説</h4>
<p>Image ID（SHA256ハッシュ）は、Dockerfileの内容だけでなく、<strong>ビルドコンテキスト、ベースイメージのレイヤー、タイムスタンプ</strong>等にも依存します。同一のDockerfileでも<strong>ビルド環境やタイミングが異なればImage IDは変わる</strong>可能性があります。</p>
<h4>各選択肢の分析</h4>
<ul>
<li>A → ✓ 正しい。Imageは不変のテンプレートとして環境間で共有可能。</li>
<li>B → ✓ 正しい。レイヤー構造により既存イメージの上に追加できる。</li>
<li><strong>C → ✗ 不適切。</strong>同一Dockerfileでも同一Image IDになるとは限らない。</li>
<li>D → ✓ 正しい。レイヤーキャッシュにより変更部分のみリビルドされる。</li>
</ul>
<div class="tip">Docker Imageのレイヤー構造：各Dockerfile命令が1つのレイヤーを形成。変更がなければキャッシュされるが、Image IDはすべてのレイヤーの内容から算出されるため、再現性はビルド環境に依存する。</div>`
  },
  {
    id: 197,
    number: 4,
    category: "Docker／コンテナ",
    subcategory: "Docker CLIとコンテナライフサイクル",
    question: `Docker CLIのコマンドとコンテナのライフサイクルについて、最も<strong>不適切な</strong>選択肢を選んでください。`,
    choices: [
      { label: "A", text: "docker buildコマンドで新しいコンテナがcreated状態で作成される。このコンテナはdocker startで起動できる。" },
      { label: "B", text: "docker runコマンドで新しいコンテナが作成・起動され、running状態になる。" },
      { label: "C", text: "docker pause / docker unpauseで、実行中のコンテナをpaused状態にしたり復帰させたりできる。" },
      { label: "D", text: "コンテナが異常終了した場合やdocker stopを使用した場合、実行中のコンテナはexited状態になる。" }
    ],
    answer: "A",
    explanation: `<p><strong>正答: A</strong></p>
<h4>解説</h4>
<p><code>docker build</code>は<strong>イメージをビルド</strong>するコマンドであり、コンテナを作成するコマンドではありません。コンテナをcreated状態で作成するのは<code>docker create</code>です。</p>
<h4>コンテナライフサイクル</h4>
<ol>
<li><code>docker create</code> → <strong>created</strong>状態</li>
<li><code>docker start</code> / <code>docker run</code> → <strong>running</strong>状態</li>
<li><code>docker pause</code> → <strong>paused</strong>状態</li>
<li><code>docker stop</code> / 異常終了 → <strong>exited</strong>状態</li>
</ol>
<h4>各選択肢の分析</h4>
<ul>
<li><strong>A → ✗ 不適切。</strong>docker buildはイメージのビルド。コンテナ作成はdocker create。</li>
<li>B → ✓ 正しい。docker run = create + start。</li>
<li>C → ✓ 正しい。pause/unpauseでプロセスの一時停止・再開が可能。</li>
<li>D → ✓ 正しい。停止・異常終了でexited状態になる。</li>
</ul>
<div class="tip">docker build vs docker create：buildは「Dockerfileからイメージを構築」、createは「イメージからコンテナを作成（起動はしない）」。runはcreate+startの一括実行。</div>`
  },
  {
    id: 198,
    number: 5,
    category: "Docker／コンテナ",
    subcategory: "データ共有方式",
    question: `Dockerのデータ共有方式（volume, bind mount, tmpfs mount, named pipe）のうち、<strong>volume</strong>の説明として最も<strong>適切な</strong>選択肢を選んでください。`,
    choices: [
      { label: "A", text: "プロセス間通信を利用して、ホスト−コンテナ間やコンテナ−コンテナ間でデータを受け渡す。" },
      { label: "B", text: "ホストのファイルやディレクトリをコンテナ内に直接マウントし、コンテナ内からホストのシステムファイルを自由に書き換えることができる。" },
      { label: "C", text: "Dockerが管理するホストディレクトリ上に生成され、コンテナに自由にマウントできる。Docker管理下のためコンテナ数が増えてもバックアップが安全に行える。" },
      { label: "D", text: "コンテナが書き込んだファイルをホストのメモリ上に保存し、機密情報の一時保存に適する。コンテナ停止時に削除される。" }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C</strong></p>
<h4>解説</h4>
<p>Docker volumeはDockerが管理する専用ディレクトリ（通常 <code>/var/lib/docker/volumes/</code>）にデータを保存します。コンテナから独立しており、複数コンテナでの共有やバックアップが容易です。</p>
<h4>4つのデータ共有方式</h4>
<table>
<tr><th>方式</th><th>説明</th><th>対応選択肢</th></tr>
<tr><td><strong>volume</strong></td><td>Docker管理のストレージ。永続化・共有・バックアップに最適</td><td>C ✓</td></tr>
<tr><td><strong>bind mount</strong></td><td>ホストのファイル/ディレクトリを直接マウント</td><td>B</td></tr>
<tr><td><strong>tmpfs mount</strong></td><td>メモリ上に一時保存。コンテナ停止で消失</td><td>D</td></tr>
<tr><td><strong>named pipe</strong></td><td>プロセス間通信でデータ受け渡し</td><td>A</td></tr>
</table>
<div class="tip">Docker公式はvolumeを推奨。bind mountはホスト依存が強く移植性が低い。tmpfsは機密情報の一時保存に有効。</div>`
  },
  {
    id: 199,
    number: 6,
    category: "Docker／コンテナ",
    subcategory: "Dockerネットワーク",
    question: `IP 192.0.2.1を持つホストで、Dockerを使ってポート1194でVPNサーバーを公開したい。ホストには内部IP 198.51.100.2もあるが、そのネットワークからのアクセスは想定しない。ホスト側・コンテナ側のポート番号は同一とする。最も適切なネットワークドライバとポートフォワーディング設定を選んでください。`,
    choices: [
      { label: "A", text: "ネットワークドライバ: host, ポートフォワーディング: 1194:1194" },
      { label: "B", text: "ネットワークドライバ: host, ポートフォワーディング: 192.0.2.1::1194" },
      { label: "C", text: "ネットワークドライバ: bridge, ポートフォワーディング: 1194:1194" },
      { label: "D", text: "ネットワークドライバ: bridge, ポートフォワーディング: 192.0.2.1::1194" }
    ],
    answer: "D",
    explanation: `<p><strong>正答: D</strong></p>
<h4>解説</h4>
<p>要件は「特定IP（192.0.2.1）のみでポートを公開し、内部IP（198.51.100.2）からのアクセスは受け付けない」ことです。</p>
<ul>
<li><strong>bridgeドライバ</strong>：コンテナをホストから分離したネットワークに配置し、ポートフォワーディングで外部公開。セキュリティ上推奨。</li>
<li><strong>IP指定のポートフォワーディング</strong>（<code>192.0.2.1::1194</code>）：特定IPのみでリッスンし、内部ネットワークからのアクセスを防ぐ。</li>
</ul>
<h4>各選択肢の分析</h4>
<ul>
<li>A → ✗ hostドライバはポートフォワーディングが不要（すべてのポートが直接公開）。IP制限もできない。</li>
<li>B → ✗ hostドライバではポートフォワーディング設定自体が意味をなさない。</li>
<li>C → △ bridgeは正しいが、IP指定なし（1194:1194）だと全IPでリッスンしてしまう。</li>
<li><strong>D → ✓ 正解。</strong>bridge + IP指定で要件を満たす。</li>
</ul>
<div class="tip">Dockerのポート公開：<code>-p 1194:1194</code> = 全IPでリッスン、<code>-p 192.0.2.1:1194:1194</code> = 特定IPのみ。セキュリティ要件に応じて使い分ける。</div>`
  },
  {
    id: 200,
    number: 7,
    category: "Docker／コンテナ",
    subcategory: "Dockerfileの文法",
    question: `以下のDockerfileには文法上の誤りがあります。誤りの指摘として最も<strong>不適切な</strong>（実際には誤りでない）選択肢を選んでください。ビルドオプション: <code>--build-arg ENV={release|debug}</code>
<pre><code>ARG ENV
COPY . /app
FROM alpine:latest AS build_base
RUN apk update && apk add cargo
FROM build_base AS build_debug
RUN cargo build
FROM build_base AS build_release
RUN cargo build --release
FROM build_\${ENV}
ENV BUILD_ENV $ENV
CMD ./target/\${BUILD_ENV}/firmware</code></pre>`,
    choices: [
      { label: "A", text: "ARGコマンドがグローバルに定義されているが、build_${ENV}イメージ内でも再定義が必要。" },
      { label: "B", text: "CMDコマンド内ではARGやENVは展開されないため、BUILD_ENVは使用できない。" },
      { label: "C", text: "複数行コメントにバックスラッシュが使用されている。" },
      { label: "D", text: "COPYコマンドがFROMコマンドの前に記述されている。" }
    ],
    answer: "B",
    explanation: `<p><strong>正答: B</strong></p>
<h4>解説</h4>
<p>CMDコマンドの<strong>shell形式</strong>（文字列形式）では、<strong>ENV変数は展開されます</strong>。したがって「CMDでENVが使えない」という指摘は誤りです。</p>
<p>ARG変数はCMDでは展開されませんが、ENVに代入すればCMDで利用可能です。</p>
<h4>実際の文法エラー</h4>
<ul>
<li><strong>A（本当のエラー）</strong>：ARGはFROMの前（グローバル）と後（ビルドステージ内）で別スコープ。ステージ内で使うには再定義が必要。</li>
<li><strong>C（本当のエラー）</strong>：Dockerfileのコメントは<code>#</code>。バックスラッシュは行継続であり、コメントではない。</li>
<li><strong>D（本当のエラー）</strong>：COPYはビルドステージ（FROM以降）で使うべきコマンド。FROMの前にCOPYがあるのは不正。</li>
</ul>
<h4>各選択肢の分析</h4>
<ul>
<li>A → ✓ 正しい指摘（実際のエラー）。</li>
<li><strong>B → ✗ 不適切な指摘。</strong>ENV変数はCMDのshell形式で展開される。</li>
<li>C → ✓ 正しい指摘（実際のエラー）。</li>
<li>D → ✓ 正しい指摘（実際のエラー）。</li>
</ul>
<div class="tip">Dockerfile変数スコープ：ARGはビルド時のみ・ステージ内スコープ。ENVはビルド時＋実行時に有効。CMDでビルド引数を使いたい場合は<code>ENV var=$ARG</code>で橋渡しする。</div>`
  },
  {
    id: 201,
    number: 8,
    category: "Docker／コンテナ",
    subcategory: "CMD vs ENTRYPOINT",
    question: `以下のDocker Imageと実現したいコマンドに対して、CMDとENTRYPOINTのどちらを使うべきか、最も適切な組み合わせを選んでください。
<br><br><strong>A:</strong> Postgresイメージ — コンテナ起動時にDBの起動スクリプトを実行したい。
<br><strong>B:</strong> Pythonイメージ — デフォルトで対話シェルを起動するが、<code>/bin/bash</code>も実行できるようにしたい。`,
    choices: [
      { label: "A", text: "A: CMD / B: CMD" },
      { label: "B", text: "A: CMD / B: ENTRYPOINT" },
      { label: "C", text: "A: ENTRYPOINT / B: CMD" },
      { label: "D", text: "A: ENTRYPOINT / B: ENTRYPOINT" }
    ],
    answer: "C",
    explanation: `<p><strong>正答: C</strong></p>
<h4>解説</h4>
<ul>
<li><strong>A（Postgres）→ ENTRYPOINT</strong>：DB起動スクリプトは<strong>必ず実行される必要がある</strong>ため、ユーザーが簡単にオーバーライドできないENTRYPOINTが適切。</li>
<li><strong>B（Python）→ CMD</strong>：デフォルトの対話シェルを提供しつつ、<code>docker run image /bin/bash</code>で<strong>簡単にオーバーライドできる</strong>CMDが適切。</li>
</ul>
<h4>CMD vs ENTRYPOINT</h4>
<table>
<tr><th></th><th>CMD</th><th>ENTRYPOINT</th></tr>
<tr><td>用途</td><td>デフォルトコマンド（上書き可）</td><td>固定コマンド（上書き困難）</td></tr>
<tr><td>オーバーライド</td><td><code>docker run</code>の引数で簡単に変更</td><td><code>--entrypoint</code>フラグが必要</td></tr>
<tr><td>適するケース</td><td>ユーザーが柔軟に使えるイメージ</td><td>特定のアプリケーション実行が必須</td></tr>
</table>
<div class="tip">公式イメージの実例：PostgresやMySQL等のDBイメージはENTRYPOINTで初期化スクリプトを実行。python, node等の汎用イメージはCMDで対話シェルを起動。</div>`
  },
  {
    id: 202,
    number: 9,
    category: "Docker／コンテナ",
    subcategory: "Docker Compose",
    question: `Docker Composeの機能について、最も<strong>不適切な</strong>選択肢を選んでください。`,
    choices: [
      { label: "A", text: "プロジェクト名を使用して、単一ホスト上で複数の環境を分離できる（例：CIサーバーのビルドが互いに干渉しない）。" },
      { label: "B", text: "アプリケーションの水平オートスケーリングが可能で、CPU使用率のメトリクスに基づいてインスタンス数を自動で増減できる。" },
      { label: "C", text: "コンテナ生成時に設定をキャッシュし、再起動時には設定が変更されたコンテナのみ再生成、変更のないものは再利用することで環境変更を高速化する。" },
      { label: "D", text: "設定に変数を使用でき、コンテナ間で設定を共有したり、実行環境ごとに値を変更したりできる。" }
    ],
    answer: "B",
    explanation: `<p><strong>正答: B</strong></p>
<h4>解説</h4>
<p>Docker Composeは<code>docker compose up --scale</code>でサービスのインスタンス数を指定できますが、<strong>CPU使用率に基づく自動スケーリング機能はありません</strong>。自動スケーリングはKubernetesやDocker Swarm＋外部ツールの機能です。</p>
<h4>Docker Composeの主な機能</h4>
<ul>
<li>✓ プロジェクト名による環境分離</li>
<li>✓ コンフィグキャッシュによる高速再起動</li>
<li>✓ 変数による設定の柔軟化（<code>.env</code>ファイル等）</li>
<li>✓ 手動スケーリング（<code>--scale</code>）</li>
<li>✗ CPU/メモリ等のメトリクスベースの<strong>自動</strong>スケーリング</li>
</ul>
<div class="tip">スケーリングの階層：Docker Compose = 手動スケール、Docker Swarm = 定数レプリカの自動維持、Kubernetes = メトリクスベースのオートスケーリング（HPA）。</div>`
  },
  {
    id: 203,
    number: 10,
    category: "Docker／コンテナ",
    subcategory: "docker-compose.yml",
    question: `docker-compose.ymlで3つのコンテナ（DockerfileからビルドするWebサーバー、PostgreSQL DB、セッション用Redis）を定義しています。WebはDBとRedisに依存し、RedisはWebからのみアクセスされます。空欄（ア）（イ）（ウ）に入る最も適切な組み合わせを選んでください。
<pre><code>services:
  web:
    build: .
    depends_on:
      - (ア)
      - (イ)
  pg:
    image: postgres
  redis:
    image: redis
    network_mode: (ウ)</code></pre>`,
    choices: [
      { label: "A", text: "ア: pg, イ: redis, ウ: bridge" },
      { label: "B", text: "ア: pg, イ: redis, ウ: service:web" },
      { label: "C", text: "ア: 1, イ: 2, ウ: bridge" },
      { label: "D", text: "ア: 1, イ: 2, ウ: service:web" }
    ],
    answer: "B",
    explanation: `<p><strong>正答: B</strong></p>
<h4>解説</h4>
<ul>
<li><strong>（ア）pg, （イ）redis</strong>：<code>depends_on</code>にはサービス名を指定する。数値ではない。</li>
<li><strong>（ウ）service:web</strong>：<code>network_mode: service:web</code>とすることで、RedisはWebサービスのネットワーク名前空間を共有する。これにより外部からRedisに直接アクセスできなくなり、Webのみがlocalhostとしてアクセス可能。</li>
</ul>
<h4>各選択肢の分析</h4>
<ul>
<li>A → ✗ bridgeは通常のネットワークドライバ。Redisが他のサービスからもアクセス可能になる。</li>
<li><strong>B → ✓ 正解。</strong>depends_onにサービス名、network_modeでWebのネットワークを共有。</li>
<li>C → ✗ depends_onに数値は使えない。</li>
<li>D → ✗ depends_onに数値は使えない（network_modeは正しい）。</li>
</ul>
<div class="tip">network_mode: service:&lt;name&gt; は、あるサービスのネットワークスタックを別のサービスと共有する設定。サイドカーパターンでよく使われる。</div>`
  },
  {
    id: 204,
    number: 11,
    category: "Docker／コンテナ",
    subcategory: "Imageセキュリティ",
    question: `CIでDocker Imageをビルドし、Docker Hubにプッシュする際、GitHubのアクセストークンやSSH鍵等のシークレットがイメージに残らないようにする方法として、最も<strong>不適切な</strong>ものを選んでください。`,
    choices: [
      { label: "A", text: "DockerfileでCOPYを使うとシークレットがイメージに残るリスクがある。docker buildのbuild-arg引数を使えば、Docker Imageに情報を残さずビルドできる。" },
      { label: "B", text: "イメージ作成時にシークレットを渡さず、実行時にVolumeとしてマウントする。" },
      { label: "C", text: "Docker Imageの作成時にBuildKitを有効にする。" },
      { label: "D", text: "マルチステージビルドを使い、シークレットは中間ステージでのみ扱う。" }
    ],
    answer: "A",
    explanation: `<p><strong>正答: A</strong></p>
<h4>解説</h4>
<p><code>build-arg</code>で渡した値は<strong>イメージの履歴（docker history）に記録されます</strong>。したがって「build-argを使えばイメージに情報が残らない」というのは誤りです。</p>
<h4>シークレットを安全に扱う方法</h4>
<ul>
<li><strong>BuildKitのsecretマウント</strong>（<code>--mount=type=secret</code>）：ビルド時のみ一時的にマウントし、レイヤーに残らない。</li>
<li><strong>マルチステージビルド</strong>：中間ステージでシークレットを使用し、最終ステージにはコピーしない。</li>
<li><strong>ランタイムVolumeマウント</strong>：ビルド時にシークレットを扱わない。</li>
</ul>
<h4>各選択肢の分析</h4>
<ul>
<li><strong>A → ✗ 不適切。</strong>build-argの値はdocker historyで確認可能。安全ではない。</li>
<li>B → ✓ 適切。実行時マウントならイメージに含まれない。</li>
<li>C → ✓ 適切。BuildKitには--mount=type=secret等のセキュリティ機能がある。</li>
<li>D → ✓ 適切。最終イメージに中間ステージの内容は含まれない。</li>
</ul>
<div class="tip">シークレット管理の鉄則：build-argやENVでシークレットを渡さない。BuildKitの<code>--mount=type=secret</code>が最も安全。</div>`
  },
  {
    id: 205,
    number: 12,
    category: "Docker／コンテナ",
    subcategory: "CIビルド高速化",
    question: `CIでのコンテナビルド速度を改善する要因として、最も<strong>不適切な</strong>ものを選んでください。`,
    choices: [
      { label: "A", text: ".dockerignoreを使って不要なファイルやディレクトリをビルドコンテキストから除外する。" },
      { label: "B", text: "複数のコマンドを実行する場合、それぞれを別のRUNコマンドに分離して依存関係を減らし、キャッシュ効率を上げる。" },
      { label: "C", text: "適切なベースイメージを選択し、軽量なイメージを使い、不要なビルドコマンドを避ける。" },
      { label: "D", text: "ビルドキャッシュを可能な限り利用し、前回と同じ結果を生成するレイヤーのビルドをスキップする。" }
    ],
    answer: "B",
    explanation: `<p><strong>正答: B</strong></p>
<h4>解説</h4>
<p>各コマンドを別のRUNに分離すると<strong>レイヤー数が増加しイメージサイズが大きくなります</strong>。ベストプラクティスは関連するコマンドを<code>&&</code>で結合して<strong>1つのRUNにまとめる</strong>ことです。</p>
<p>「キャッシュ効率が上がる」は一部のケースで正しいですが、CIビルドの高速化全体として「それぞれを別のRUNに分離」を推奨するのは不適切です。</p>
<h4>ビルド高速化のベストプラクティス</h4>
<ul>
<li>✓ <code>.dockerignore</code>でビルドコンテキストを最小化</li>
<li>✓ 軽量ベースイメージ（alpine等）の使用</li>
<li>✓ ビルドキャッシュの活用（変更頻度の低い命令を上に配置）</li>
<li>✓ 関連するRUNコマンドを<code>&&</code>で結合してレイヤー削減</li>
<li>✗ RUNを分離してレイヤーを増やすこと</li>
</ul>
<div class="tip">RUNの分離 vs 結合：分離するとキャッシュの粒度は細かくなるが、レイヤー数が増え、中間ファイルも残りやすい。CIでは<code>apt-get update && apt-get install -y ... && rm -rf /var/lib/apt/lists/*</code>のように1つのRUNにまとめるのが定石。</div>`
  },
  {
    id: 206,
    number: 13,
    category: "Docker／コンテナ",
    subcategory: "Docker Registry",
    question: `Docker Registryについて、最も<strong>不適切な</strong>選択肢を選んでください。`,
    choices: [
      { label: "A", text: "公式のDocker Hub以外にも、個人や組織がプライベートレジストリをセットアップできる。" },
      { label: "B", text: "Docker CLIはdocker pullおよびdocker deployコマンドを使用して、Docker Registryとやり取りしイメージを取得する。" },
      { label: "C", text: "Docker Registryは認証・認可やTLS接続によるセキュリティをサポートする。" },
      { label: "D", text: "Docker RegistryはWebhook通知をサポートする。" }
    ],
    answer: "B",
    explanation: `<p><strong>正答: B</strong></p>
<h4>解説</h4>
<p><code>docker deploy</code>というコマンドは、レジストリからイメージを取得するための標準的なDocker CLIコマンドではありません。正しくは<code>docker pull</code>（取得）と<code>docker push</code>（アップロード）です。</p>
<h4>Docker Registryの主要操作</h4>
<ul>
<li><code>docker pull</code> — レジストリからイメージを取得</li>
<li><code>docker push</code> — レジストリにイメージをアップロード</li>
<li><code>docker search</code> — Docker Hubでイメージを検索</li>
<li><code>docker login</code> / <code>docker logout</code> — レジストリへの認証</li>
</ul>
<h4>各選択肢の分析</h4>
<ul>
<li>A → ✓ 正しい。Docker Registry（OSS）やHarbor等でプライベートレジストリ構築可能。</li>
<li><strong>B → ✗ 不適切。</strong>docker deployはレジストリ操作のコマンドではない。正しくはdocker push。</li>
<li>C → ✓ 正しい。TLS、Basic認証、トークン認証等をサポート。</li>
<li>D → ✓ 正しい。push/pull等のイベントでWebhookを発火可能。</li>
</ul>
<div class="tip">Docker Registryの基本コマンド：pull（取得）、push（送信）、login（認証）。deployはDocker Swarm/Stack関連のコマンドであり、レジストリ操作ではない。</div>`
  },
  {
    id: 207,
    number: 14,
    category: "Docker／コンテナ",
    subcategory: "Docker Swarm",
    question: `Dockerのオーケストレーションツール「Docker Swarm」について、最も<strong>不適切な</strong>選択肢を選んでください。`,
    choices: [
      { label: "A", text: "複数のDockerホストがSwarmモードで起動し、マネージャーノードまたはワーカーノードとしてクラスタを構成する。" },
      { label: "B", text: "クラスタの状態を監視し、定義された状態から逸脱した場合（例：レプリカのインスタンスがクラッシュ）、自動的に新しいコンテナを作成して置き換える。" },
      { label: "C", text: "外部ロードバランサ向けにポートを公開（Ingressロードバランシング）し、内部DNSによるサービス間リクエスト分配（Internalロードバランシング）が可能。" },
      { label: "D", text: "CPU使用率を監視し、負荷が高い場合はレプリカ数を増加させ、負荷が低い場合はレプリカ数を減少させる（オートスケーリング）。" }
    ],
    answer: "D",
    explanation: `<p><strong>正答: D</strong></p>
<h4>解説</h4>
<p>Docker Swarmは定義されたレプリカ数を維持する機能はありますが、<strong>CPUメトリクスに基づくオートスケーリング機能はネイティブで備えていません</strong>。メトリクスベースのオートスケーリングはKubernetes（HPA）や外部ツールの機能です。</p>
<h4>Docker Swarmの主な機能</h4>
<ul>
<li>✓ マネージャー/ワーカーのクラスタ構成</li>
<li>✓ Desired State（定義された状態）の自動維持</li>
<li>✓ Ingress / Internalロードバランシング</li>
<li>✓ ローリングアップデート</li>
<li>✗ CPUベースのオートスケーリング</li>
</ul>
<div class="tip">Docker Swarm vs Kubernetes：Swarmはシンプルで導入が容易だが、オートスケーリングやカスタムリソース等の高度な機能はKubernetesの領域。</div>`
  },
  {
    id: 208,
    number: 15,
    category: "Docker／コンテナ",
    subcategory: "Imageの軽量化",
    question: `Docker Imageを軽量に保つためのアドバイスとして、最も<strong>不適切な</strong>ものを選んでください。`,
    choices: [
      { label: "A", text: "本番用イメージは軽量に保ち、デバッグツールが必要な開発用には開発イメージをベースにして本番イメージを作成する。" },
      { label: "B", text: "適切なベースイメージを選択し、問題がなければalpineなどの軽量イメージが有効。" },
      { label: "C", text: "ライブラリが異なる複数の類似イメージを作成する場合、マルチステージビルドで共通部分を統合する。" },
      { label: "D", text: "Dockerfileで複数のRUNコマンドを&&で連結し、実行が分断されないようにする。" }
    ],
    answer: "A",
    explanation: `<p><strong>正答: A</strong></p>
<h4>解説</h4>
<p>「開発イメージをベースにして本番イメージを作成する」と、デバッグツール等の不要なものが本番イメージに含まれ、<strong>イメージが肥大化</strong>します。正しくは<strong>軽量な本番イメージをベースとし、開発用にはデバッグツールを追加する</strong>べきです。</p>
<h4>Imageを軽量に保つベストプラクティス</h4>
<ul>
<li>✓ <strong>軽量ベースイメージ</strong>（alpine, distroless等）を使用</li>
<li>✓ <strong>マルチステージビルド</strong>で共通部分を効率化、ビルド依存を最終イメージに含めない</li>
<li>✓ <strong>RUNを&&で結合</strong>してレイヤー数を削減し、中間ファイルも同じレイヤー内で削除</li>
<li>✗ 開発イメージをベースに本番イメージを作成（デバッグツールが残る）</li>
</ul>
<h4>各選択肢の分析</h4>
<ul>
<li><strong>A → ✗ 不適切。</strong>開発→本番の順だとイメージが肥大化する。本番→開発の順が正しい。</li>
<li>B → ✓ 適切。alpineは約5MBと非常に軽量。</li>
<li>C → ✓ 適切。共通のビルドステージを再利用してイメージを効率化。</li>
<li>D → ✓ 適切。RUNの結合でレイヤー数と中間ファイルを削減。</li>
</ul>
<div class="tip">イメージの親子関係：本番用（最小限）→ 開発用（本番+デバッグツール）が正しい方向。逆にすると本番に不要なものが混入する。</div>`
  }
];
