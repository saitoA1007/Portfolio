/* ===== 作品データ：ここだけ書き換えればスライダーと一覧の両方に反映されます =====
   img   : 画像ファイル（images/ フォルダに置く）
   video : 動画のURL（空文字なら「動画」ボタンは出ません）
   role  : 担当箇所を短い言葉の配列で（無ければ省略）
   awards: 受賞や順位のバッジ（画像の左上に表示。無ければ省略）
   zip   : GoogleドライブのZIPの共有リンクをそのまま貼る（空文字ならボタンは出ません）
           例: 'https://drive.google.com/file/d/ファイルID/view?usp=sharing' */
const WORKS = [
  { title: 'vs大氷怪鳥ジークアイス', meta: '3Dアクションゲーム / 2年生 / チーム制作(3人) / 1ヶ月',
     desc: 'キレイな氷の見た目を表現することに取り組みました。初めてグラフィックに力を入れた、思い入れの深い作品です。',
      role: ['ボスの挙動', 'グラフィック全般', 'エフェクト全般'], img: 'images/Works/ジークアイス.jpg', video: 'https://www.youtube.com/watch?v=pxE_MU9rpAY', zip: '', awards: ['3Dアート部門 受賞', '校内投票 3位 / 82', '東京ゲームショウ 出展'] },

  { title: '折り画面', meta: '2Dパズルアクション / 2年生 / チーム制作(3人) / 10日',
     desc: '初めての自作エンジンで作った、紙を折って進むパズルです。企業展示会でも好評でした。',
      role: ['紙を折る処理', 'エフェクト全般', 'プレイヤーの挙動'], img: 'images/Works/折り画面.jpg', video: 'https://www.youtube.com/watch?v=_KOU_OpdeaQ', zip: '', awards: ['ゲームデザイン賞', '3Dエンジニア部門 受賞', '校内投票 3位'] },

  { title: 'うつろな形', meta: '2Dパズルアクション / 1年生 / チーム制作(3人) / 1ヶ月',
     desc: '締め切りの1週間前に企画を作り直して完成させました。プレイヤーのエフェクトと、ネオン感のある演出にこだわりました。',
      role: ['プレイヤー挙動', '当たり判定', 'エフェクト', 'ステージ作成'], img: 'images/Works/うつろなカタチ.jpg', video: 'https://www.youtube.com/watch?v=xWKcn-s5kL8', zip: '' },

  { title: 'フグの海中冒険', meta: '2Dアクションゲーム / 1年生 / 個人制作 / 1ヶ月',
     desc: '初めて作ったゲームです。sin波を使った敵の動きや、複数種類の敵を用意しました。',
      role: ['すべて'], img: 'images/Works/フグの海中冒険.jpg', video: 'https://www.youtube.com/watch?v=_KOU_OpdeaQ', zip: '' },

  { title: 'ドパミン',  meta: '3Dタワーディフェンス / 3年生 / チーム制作(4人) / 10日',
     desc: '自作エンジンで制作しました。主にエフェクトを担当し、宇宙感を表現するために頑張りました。',
      role: ['エンジン', 'エフェクト全般'], img: 'images/Works/ドパミン.png', video: 'https://www.youtube.com/', zip: '' },

  { title: 'Ore',  meta: '3Dストラテジー / 2年生 / チーム制作(3人) / 1ヶ月',
     desc: '主にアプリケーションを担当しました。ユニットの管理や経路探索アルゴリズムを実装しました。',
      role: ['アプリケーション', 'ユニット管理', 'エフェクト全般'], img: 'images/Works/Ore.png', video: 'https://www.youtube.com/', zip: '' },

  { title: 'チョットバック',  meta: '3D横スクロールアクション / 2年生 / チーム制作(3人) / 1ヶ月',
     desc: '学ぶことが多いチーム制作でした。アプリケーションでステージや敵などレベルデザインをしやすいように気を使いながら制作しました。',
      role: ['敵の処理','リザルト全般','シーンの管理', 'ステージ全般','エフェクト'], img: 'images/Works/チョットバック.png', video: 'https://www.youtube.com/', zip: '' },

  { title: '落とし合い',  meta: '3Dアクションゲーム / 3年生 / チーム制作(3人) / 4ヶ月',
     desc: 'UIを汎用性高く扱えるようにすることを意識しながら制作しました。また、敵の種類を増せるように拡張性を意識した設計を考えました。',
      role: ['敵の処理','リソース全般','タイトル全般','ポーズ全般','リザルト全般'], img: 'images/Works/落とし合い.png', video: 'https://www.youtube.com/', zip: '' },

  { title: 'びょーん',  meta: '2Dパズルゲーム / 1年生 / チーム制作(3人) / 10日',
     desc: '初めてのチーム制作でした。慣れないことだらけの中、チームですり合わせながら頑張りました。',
      role: ['プレイヤーの挙動','ギミック処理','当たり判定'], img: 'images/Works/びょーん.png', video: 'https://www.youtube.com/', zip: '' },

  { title: '奪取の魔導士', meta: '2Dアクションゲーム / 1年生 / チーム制作(3人) / 1ヶ月',
     desc: '主にリソースやレベルデザインなどプランナーよりの立ち回りをしました。',
      role: ['リソース全般','レベルデザイン'], img: 'images/Works/奪取の魔導士.png', video: 'https://www.youtube.com/', zip: '' },

  { title: 'おはじきのきせき', meta: '2Dパズルアクションゲーム / 1年生 / チーム制作(3人) / 1ヶ月',
     desc: '主にサブプログラマー兼デザイナー的な立ち回りをしました。',
      role: ['ステージ作成','プレイヤー撃破時の演出','遷移演出','リソース全般'], img: 'images/Works/おはじきのきせき.png', video: 'https://www.youtube.com/', zip: '' },

  { title: '磁石があれば脱出できる', meta: '2Dパズルアクション / 1年生 / 個人制作 / 1ヶ月',
     desc: '作品の説明',
      role: ['すべて'], img: 'images/Works/work12.jpg', video: 'https://www.youtube.com/', zip: '' },

  { title: '虚空を駆けて', meta: '3Dレールシューティング / 1年生 / 個人制作 / 1ヶ月',
     desc: '作品の説明',
      role: ['すべて'], img: 'images/Works/work13.jpg', video: 'https://www.youtube.com/', zip: '' }
];

/* ===== 使用ツール：icon に画像のパスかURLを書く。空欄や読み込み失敗のときは頭文字のタイルになります ===== */
const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/';
const TOOLS = [
  { name: 'Visual Studio', icon: DEVICON + 'visualstudio/visualstudio-plain.svg' },
  { name: 'GitHub',        icon: DEVICON + 'github/github-original.svg' },
  { name: 'Blender',       icon: DEVICON + 'blender/blender-original.svg' },
  { name: 'CLIP STUDIO',   icon: 'images/Icons/clipstudio.png' },
  { name: 'Aseprite',      icon: 'images/Icons/aseprite.png' }
];

/* プログラム説明資料のURL：ここ1か所を書き換えれば、ページ内のすべてのリンクに反映されます */
const PROGRAM_DOC_URL = 'https://docs.google.com/presentation/d/1bv6QTca7DwNOV_pxqJWjwCZ1r6IPg8g1wqeTy5jWIbM/edit?usp=sharing';
document.querySelectorAll('a[data-doc]').forEach(a => { a.href = PROGRAM_DOC_URL; });

const SLIDE_INTERVAL = 5000; // 自動送りの間隔(ミリ秒)
const FEATURED = [1, 2, 3]; // 作品紹介で最初から表示する作品の番号（それ以外は「もっと見る」で展開）
const PICKUP = [1, 2, 3, 4]; // 上段に表示する作品の番号(上の WORKS の並び順。1始まり)

/* Googleドライブの共有リンクを、直接ダウンロードできるURLに変換する（他のURLはそのまま） */
function zipUrl(url) {
  const m = url.match(/drive\.google\.com\/file\/d\/([\w-]+)/) || url.match(/drive\.google\.com\/.*[?&]id=([\w-]+)/);
  return m ? `https://drive.google.com/uc?export=download&id=${m[1]}` : url;
}

/* 画像が無いときは背景のグラデーションだけ表示する */
const imgTag = (src, alt) =>
  `<img src="${src}" alt="${alt}" loading="lazy" onerror="this.remove()">`;

/* ----- 作品一覧 ----- */
document.getElementById('grid').innerHTML = WORKS.map((w, i) => `
  <article class="card${FEATURED.includes(i + 1) ? '' : ' extra'}" id="work-${i + 1}">
    <div class="thumb">${imgTag(w.img, w.title + 'のスクリーンショット')}${w.awards && w.awards.length ? `<ul class="badges">${w.awards.map(a => `<li>${a}</li>`).join('')}</ul>` : ''}</div>
    <div class="body">
      <h3>${w.title}</h3>
      <p class="meta">${w.meta}</p>
      <p class="desc">${w.desc}</p>
      ${w.role && w.role.length ? `<dl class="role"><dt>担当</dt><dd>${w.role.join(' / ')}</dd></dl>` : ''}
      <div class="actions">
        ${w.video ? `<a class="btn" href="${w.video}" target="_blank" rel="noopener">動画を見る</a>` : ''}
        ${w.zip ? `<a class="btn sub" href="${zipUrl(w.zip)}" target="_blank" rel="noopener">ZIPをダウンロード</a>` : ''}
      </div>
    </div>
  </article>`).join('');

/* ----- スライダー ----- */
const track = document.getElementById('track');
const dotsBox = document.getElementById('dots');
const hero = document.getElementById('hero');
const SLIDES = PICKUP.map(n => ({ w: WORKS[n - 1], n })).filter(s => s.w);
const N = SLIDES.length;
let cur = 0, timer = null;

track.innerHTML = SLIDES.map(({ w, n }) => `
  <a class="slide" href="#work-${n}" aria-label="${w.title}の紹介へ移動">
    ${imgTag(w.img, '')}
    <div class="cap"><strong>${w.title}</strong><span>${w.meta}</span></div>
  </a>`).join('');

dotsBox.innerHTML = SLIDES.map((s, i) =>
  `<button type="button" aria-label="${i + 1}枚目を表示"></button>`).join('');
const dots = [...dotsBox.children];
dots.forEach((d, i) => d.addEventListener('click', () => { go(i); restart(); }));

function go(n) {
  cur = (n + N) % N;
  track.style.transform = `translateX(${-cur * 100}%)`;
  dots.forEach((d, i) => d.setAttribute('aria-current', i === cur));
}
function stop() { clearInterval(timer); timer = null; }
function start() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  stop();
  timer = setInterval(() => go(cur + 1), SLIDE_INTERVAL);
}
function restart() { start(); }

document.getElementById('prev').addEventListener('click', () => { go(cur - 1); restart(); });
document.getElementById('next').addEventListener('click', () => { go(cur + 1); restart(); });
hero.addEventListener('mouseenter', stop);
hero.addEventListener('mouseleave', start);
hero.addEventListener('focusin', stop);
hero.addEventListener('focusout', start);

/* スマホ用：左右スワイプ */
let x0 = null;
hero.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
hero.addEventListener('touchend', e => {
  if (x0 === null) return;
  const dx = e.changedTouches[0].clientX - x0;
  if (Math.abs(dx) > 40) { go(cur + (dx < 0 ? 1 : -1)); restart(); }
  x0 = null;
});

go(0);
start();

/* ----- 現在見ているセクションをメニューで強調表示 ----- */
const navLinks = [...document.querySelectorAll('.site-header nav a[href^="#"]')];
const navTargets = navLinks.map(a => document.querySelector(a.getAttribute('href')));
let navTick = false;

function updateNav() {
  navTick = false;
  const line = 120; // ヘッダーの下あたりを基準線にする
  let idx = 0;
  navTargets.forEach((el, i) => {
    if (el && el.getBoundingClientRect().top <= line) idx = i;
  });
  // ページの一番下まで来たら最後の項目を強調
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
    idx = navLinks.length - 1;
  }
  navLinks.forEach((a, i) => a.setAttribute('aria-current', i === idx));
}
function onScroll() {
  if (!navTick) { navTick = true; requestAnimationFrame(updateNav); }
}
window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onScroll);
updateNav();


/* ----- 使用ツールのアイコン ----- */
document.getElementById('tools').innerHTML = TOOLS.map(t => `
  <li title="${t.name}">
    <span class="ico">${t.icon ? `<img src="${t.icon}" alt="" onerror="this.parentNode.textContent='${t.name.slice(0, 2)}'">` : t.name.slice(0, 2)}</span>
    <span class="name">${t.name}</span>
  </li>`).join('');


/* ----- 「もっと見る」で作品を展開 ----- */
const grid = document.getElementById('grid');
const moreBtn = document.getElementById('more');
const extraCount = grid.querySelectorAll('.card.extra').length;

function setOpen(open) {
  grid.classList.toggle('open', open);
  moreBtn.setAttribute('aria-expanded', open);
  moreBtn.textContent = open ? '閉じる' : `もっと見る（残り${extraCount}作品）`;
}
moreBtn.addEventListener('click', () => {
  const open = !grid.classList.contains('open');
  setOpen(open);
  if (!open) document.getElementById('works').scrollIntoView({ behavior: 'smooth' });
});
moreBtn.hidden = extraCount === 0;
setOpen(false);

/* 上段のスライダーから、まだ隠れている作品へ飛ぶときは先に展開する */
track.addEventListener('click', e => {
  const a = e.target.closest('a.slide');
  if (!a) return;
  const card = document.querySelector(a.getAttribute('href'));
  if (card && card.classList.contains('extra') && !grid.classList.contains('open')) {
    e.preventDefault();
    setOpen(true);
    card.scrollIntoView({ behavior: 'smooth' });
  }
});
