/* ===== 作品データ：ここだけ書き換えればスライダーと一覧の両方に反映されます =====
   img   : 画像ファイル（images/ フォルダに置く）
   video : 動画のURL（空文字なら「動画」ボタンは出ません）
   zip   : ZIPファイル（downloads/ フォルダに置く。空文字ならボタンは出ません） */
const WORKS = [
  { title: '作品タイトル1',  meta: 'C++ / DirectX 12 / 個人制作 / 3か月', desc: '作品の説明を書きます。', img: 'images/work01.jpg', video: 'https://www.youtube.com/', zip: 'downloads/work01.zip' },
  { title: '作品タイトル2',  meta: 'ジャンル / 人数 / 期間', desc: '作品の説明を書きます。', img: 'images/work02.jpg', video: 'https://www.youtube.com/', zip: 'downloads/work02.zip' },
  { title: '作品タイトル3',  meta: 'ジャンル / 人数 / 期間', desc: '作品の説明を書きます。', img: 'images/work03.jpg', video: 'https://www.youtube.com/', zip: '' },
  { title: '作品タイトル4',  meta: 'ジャンル / 人数 / 期間', desc: '作品の説明を書きます。', img: 'images/work04.jpg', video: 'https://www.youtube.com/', zip: '' },
  { title: '作品タイトル5',  meta: 'ジャンル / 人数 / 期間', desc: '作品の説明を書きます。', img: 'images/work05.jpg', video: 'https://www.youtube.com/', zip: '' },
  { title: '作品タイトル6',  meta: 'ジャンル / 人数 / 期間', desc: '作品の説明を書きます。', img: 'images/work06.jpg', video: 'https://www.youtube.com/', zip: '' },
  { title: '作品タイトル7',  meta: 'ジャンル / 人数 / 期間', desc: '作品の説明を書きます。', img: 'images/work07.jpg', video: 'https://www.youtube.com/', zip: '' },
  { title: '作品タイトル8',  meta: 'ジャンル / 人数 / 期間', desc: '作品の説明を書きます。', img: 'images/work08.jpg', video: 'https://www.youtube.com/', zip: '' },
  { title: '作品タイトル9',  meta: 'ジャンル / 人数 / 期間', desc: '作品の説明を書きます。', img: 'images/work09.jpg', video: 'https://www.youtube.com/', zip: '' },
  { title: '作品タイトル10', meta: 'ジャンル / 人数 / 期間', desc: '作品の説明を書きます。', img: 'images/work10.jpg', video: 'https://www.youtube.com/', zip: '' },
  { title: '作品タイトル11', meta: 'ジャンル / 人数 / 期間', desc: '作品の説明を書きます。', img: 'images/work11.jpg', video: 'https://www.youtube.com/', zip: '' },
  { title: '作品タイトル12', meta: 'ジャンル / 人数 / 期間', desc: '作品の説明を書きます。', img: 'images/work12.jpg', video: 'https://www.youtube.com/', zip: '' },
  { title: '作品タイトル13', meta: 'ジャンル / 人数 / 期間', desc: '作品の説明を書きます。', img: 'images/work13.jpg', video: 'https://www.youtube.com/', zip: '' }
];

const SLIDE_INTERVAL = 5000; // 自動送りの間隔(ミリ秒)

/* 画像が無いときは背景のグラデーションだけ表示する */
const imgTag = (src, alt) =>
  `<img src="${src}" alt="${alt}" loading="lazy" onerror="this.remove()">`;

/* ----- 作品一覧 ----- */
document.getElementById('grid').innerHTML = WORKS.map((w, i) => `
  <article class="card" id="work-${i + 1}">
    <div class="thumb">${imgTag(w.img, w.title + 'のスクリーンショット')}</div>
    <div class="body">
      <h3>${w.title}</h3>
      <p class="meta">${w.meta}</p>
      <p>${w.desc}</p>
      <div class="actions">
        ${w.video ? `<a class="btn" href="${w.video}" target="_blank" rel="noopener">動画を見る</a>` : ''}
        ${w.zip ? `<a class="btn sub" href="${w.zip}" download>ZIPをダウンロード</a>` : ''}
      </div>
    </div>
  </article>`).join('');

/* ----- スライダー ----- */
const track = document.getElementById('track');
const dotsBox = document.getElementById('dots');
const hero = document.getElementById('hero');
const N = WORKS.length;
let cur = 0, timer = null;

track.innerHTML = WORKS.map((w, i) => `
  <a class="slide" href="#work-${i + 1}" aria-label="${w.title}の紹介へ移動">
    ${imgTag(w.img, '')}
    <div class="cap"><strong>${w.title}</strong><span>${w.meta}</span></div>
  </a>`).join('');

dotsBox.innerHTML = WORKS.map((w, i) =>
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
