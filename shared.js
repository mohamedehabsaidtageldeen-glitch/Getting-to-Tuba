(function () {
  /* ================= الصفحة عربي فقط (الترجمة هنضيفها في الآخر) ================= */
  var html = document.documentElement;
  html.lang = 'ar';
  html.dir = 'rtl';
  var L = function (a) { return a[0]; };

  var PAGES = [
    ['index', '🏠', ['الرئيسية', 'Home', 'Ana Sayfa']],
    ['day-management', '🌿', ['إدارة اليوم', 'Daily Planner', 'Günlük Plan']],
    ['focus', '⏱️', ['مؤقت التركيز', 'Focus Timer', 'Odak Zamanlayıcı']],
['study', '📚', ['المذاكرة', 'Study', 'Ders']],
    ['languages', '🌍', ['اللغات', 'Languages', 'Diller']],
    ['dream', '🚀', ['رحلة الحلم', 'Dream Journey', 'Hayal Yolculuğu']],
    ['goals', '🎯', ['الأهداف', 'Goals', 'Hedefler']],
    ['clients', '👥', ['العملاء', 'Clients', 'Müşteriler']],
    ['finance', '💰', ['المصاريف والدخل', 'Income & Expenses', 'Gelir ve Gider']],
    ['notes', '📝', ['الملاحظات', 'Notes', 'Notlar']],
    ['prayer-times', '🕌', ['مواعيد الصلاة', 'Prayer Times', 'Namaz Vakitleri']],
    ['plans', '💎', ['الخطط والحساب', 'Plans & Account', 'Planlar ve Hesap']]
  ];
  var NAV = ['index', 'day-management', 'focus', 'goals'];
  var NAVLBL = { index: ['الرئيسية', 'Home', 'Ana Sayfa'], 'day-management': ['اليوم', 'Today', 'Bugün'], focus: ['التركيز', 'Focus', 'Odak'], goals: ['الأهداف', 'Goals', 'Hedefler'] };
  var UI = {
    pages: ['الصفحات', 'Pages', 'Sayfalar'],
    language: ['اللغة', 'Language', 'Dil'],
    theme: ['الثيم', 'Theme', 'Tema'],
    backup: ['نسخة احتياطية لبياناتك', 'Back up your data', 'Verilerini yedekle'],
    ex: ['⬇️ تصدير', '⬇️ Export', '⬇️ Dışa aktar'],
    im: ['⬆️ استيراد', '⬆️ Import', '⬆️ İçe aktar'],
    msg: ['صدّر نسخة كل فترة عشان بياناتك مش تضيع لو اتمسح المتصفح', 'Export a backup now and then so you never lose your data', 'Verilerin kaybolmasın diye ara sıra yedek al'],
    exok: ['تم تصدير النسخة الاحتياطية ✅', 'Backup exported ✅', 'Yedek dışa aktarıldı ✅'],
    imok: ['تم الاستيراد، جاري إعادة التحميل...', 'Imported, reloading...', 'İçe aktarıldı, yenileniyor...'],
    bad: ['الملف غير صالح', 'Invalid file', 'Geçersiz dosya'],
    more: ['المزيد', 'More', 'Daha fazla'],
    menu: ['القائمة', 'Menu', 'Menü']
  };

  /* ================= الثيمات ================= */
  var THEMES = {
    green:    { n: ['أخضر', 'Green', 'Yeşil'], bg: '#F6F4EE', surface: '#FFFFFF', ink: '#22301F', soft: '#5C6B57', line: '#DCE0D2', accent: '#3F6B4A', as: '#E4EDDE' },
    minimal:  { n: ['مينيمال', 'Minimal', 'Minimal'], bg: '#FBFBFA', surface: '#FFFFFF', ink: '#37352F', soft: '#787774', line: '#E9E9E7', accent: '#2383E2', as: '#E7F3FC' },
    ocean:    { n: ['محيط', 'Ocean', 'Okyanus'], bg: '#EEF4F8', surface: '#FFFFFF', ink: '#14293A', soft: '#4E6A80', line: '#D3E0EA', accent: '#1F6FA8', as: '#DCEBF6' },
    turkey:   { n: ['تركي', 'Turkish', 'Türk'], bg: '#FAF3F0', surface: '#FFFFFF', ink: '#3A1F1F', soft: '#7A5A5A', line: '#EBD9D4', accent: '#C8102E', as: '#F8E1E4' },
    royal:    { n: ['ملكي', 'Royal', 'Kraliyet'], bg: '#F5F1FA', surface: '#FFFFFF', ink: '#2B1F3D', soft: '#6B5A85', line: '#DDD3EA', accent: '#6B3FA0', as: '#E9DFF5' },
    sunset:   { n: ['غروب', 'Sunset', 'Gün batımı'], bg: '#FFF6EE', surface: '#FFFFFF', ink: '#3B2312', soft: '#8A6244', line: '#F1DCC8', accent: '#E8590C', as: '#FDE6D3' },
    rose:     { n: ['وردي', 'Rose', 'Pembe'], bg: '#FFF1F5', surface: '#FFFFFF', ink: '#3D1B28', soft: '#8A5568', line: '#F3D3DE', accent: '#D6336C', as: '#FBDDE8' },
    night:    { n: ['ليلي', 'Night', 'Gece'], bg: '#12161C', surface: '#1B212A', ink: '#E8ECEF', soft: '#9AA5B1', line: '#2A323D', accent: '#5DBB8A', as: '#20332B', d: 1 },
    stream:   { n: ['ستريمنج', 'Streaming', 'Streaming'], bg: '#0F0F0F', surface: '#181818', ink: '#F2F2F2', soft: '#A3A3A3', line: '#2C2C2C', accent: '#1DB954', as: '#16301F', d: 1 },
    midnight: { n: ['منتصف الليل', 'Midnight', 'Gece yarısı'], bg: '#0B1220', surface: '#121B2E', ink: '#E6ECF7', soft: '#93A3BF', line: '#1F2C45', accent: '#4C8DFF', as: '#16264A', d: 1 },
    gold:     { n: ['ذهبي', 'Gold', 'Altın'], bg: '#14110B', surface: '#1E1A11', ink: '#F3EBD6', soft: '#B7A87F', line: '#33291A', accent: '#D4A72C', as: '#33290F', d: 1 }
  };
  var TKEY = 'app-theme';
  function getTheme() { try { return localStorage.getItem(TKEY) || 'green'; } catch (e) { return 'green'; } }
  var themeStyle = document.createElement('style');
  var pn;
  function applyTheme(k) {
    var t = THEMES[k] || THEMES.green;
    var css = ':root{--bg:' + t.bg + ';--surface:' + t.surface + ';--ink:' + t.ink + ';--ink-soft:' + t.soft +
      ';--line:' + t.line + ';--accent:' + t.accent + ';--accent-soft:' + t.as + ';color-scheme:' + (t.d ? 'dark' : 'light') + '}';
    if (t.d) {
      css += '.note.pinned{background:' + t.as + '!important}.client.soon{background:#2E2819!important}' +
        '.client.overdue{background:#2E1D19!important}.habit.done{background:#2A2618!important}' +
        '.sums div,.mini div{background:var(--surface)!important}';
    }
    themeStyle.textContent = css;
    try { localStorage.setItem(TKEY, k); } catch (e) {}
    if (pn) pn.querySelectorAll('[data-t]').forEach(function (b) { b.style.outline = b.dataset.t === k ? '3px solid ' + t.accent : 'none'; });
  }
  document.head.appendChild(themeStyle);

  /* ================= الشكل الجديد ================= */
  var css = document.createElement('style');
  css.textContent =
    'body{transition:background .25s,color .25s;-webkit-font-smoothing:antialiased;padding-bottom:110px!important}' +
    '@keyframes mmIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}' +
    '.page{animation:mmIn .35s ease}' +
    'h1{letter-spacing:-.01em}' +
    '.card,.client,.note,.goal,.lvl,.txn,.habit,.task,.box,.form,.time-row,.sum-card,.location,.reminder,.pool .card,.panel,.st,.quick a{border-radius:18px!important;box-shadow:0 1px 2px rgba(0,0,0,.04),0 6px 18px rgba(0,0,0,.05);transition:transform .15s,box-shadow .15s,border-color .15s}' +
    '.card:hover,.client:hover,.goal:hover,.quick a:hover{box-shadow:0 8px 26px rgba(0,0,0,.11);transform:translateY(-1px)}' +
    '.hero,.balance,.next-card,.motto{background:linear-gradient(135deg,var(--accent),color-mix(in srgb,var(--accent) 55%,#000))!important;border-radius:22px!important;box-shadow:0 10px 30px color-mix(in srgb,var(--accent) 35%,transparent)}' +
    'input,select,textarea,button{transition:border-color .15s,background .15s,opacity .15s,transform .1s}' +
    'button:active{transform:scale(.97)}' +
    'input:focus,textarea:focus,select:focus{outline:2px solid var(--accent)!important;outline-offset:1px}' +
    '#mm-nav{position:fixed;bottom:12px;left:50%;transform:translateX(-50%);width:calc(100% - 24px);max-width:496px;z-index:50;display:flex;gap:2px;padding:6px;border-radius:22px;background:color-mix(in srgb,var(--surface) 86%,transparent);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border:1px solid var(--line);box-shadow:0 10px 34px rgba(0,0,0,.18)}' +
    '#mm-nav a,#mm-nav button{flex:1;display:flex;flex-direction:column;align-items:center;gap:2px;padding:8px 2px;border:none;border-radius:16px;background:none;color:var(--ink-soft);text-decoration:none;font-family:inherit;font-size:11px;font-weight:700;cursor:pointer}' +
    '#mm-nav span{font-size:20px;line-height:1}' +
    '#mm-nav .cur{background:var(--accent-soft);color:var(--accent)}' +
    '#mm-ov{position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:60;display:none;backdrop-filter:blur(2px)}' +
    '#mm-pn{position:fixed;bottom:0;left:0;right:0;z-index:61;background:var(--surface);color:var(--ink);border-radius:24px 24px 0 0;padding:18px 16px 26px;max-height:85vh;overflow:auto;display:none;font-family:inherit;max-width:520px;margin:0 auto;box-shadow:0 -8px 30px rgba(0,0,0,.25)}' +
    '#mm-pn h4{margin:16px 0 8px;font-size:13px;color:var(--ink-soft)}' +
    '#mm-pn .g{display:grid;grid-template-columns:1fr 1fr;gap:8px}' +
    '#mm-pn a,#mm-pn button.b{display:block;padding:11px;border:1px solid var(--line);border-radius:14px;background:var(--bg);color:var(--ink);text-decoration:none;font-family:inherit;font-size:14px;font-weight:700;text-align:center;cursor:pointer}' +
    '#mm-pn a.cur,#mm-pn button.b.cur{background:var(--accent-soft);border-color:var(--accent);color:var(--accent)}' +
    '#mm-pn .l3{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}' +
    '#mm-pn .th{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}#mm-pn .th button{padding:11px 4px;border-radius:14px;border:2px solid var(--line);font-family:inherit;font-size:13px;font-weight:700;cursor:pointer}' +
    '#mm-pn .msg{font-size:12.5px;color:var(--ink-soft);margin-top:8px}';
  document.head.appendChild(css);

  /* ================= القايمة والتنقل ================= */
  var cur = (location.pathname.split('/').pop() || 'index.html').replace('.html', '') || 'index';
  var ov = document.createElement('div'); ov.id = 'mm-ov'; ov.setAttribute('data-nt', '1');
  pn = document.createElement('div'); pn.id = 'mm-pn'; pn.setAttribute('data-nt', '1');
  var h = '<h4 style="margin-top:0">' + L(UI.pages) + '</h4><div class="g">';
  PAGES.forEach(function (p) { h += '<a href="' + p[0] + '.html"' + (p[0] === cur ? ' class="cur"' : '') + '>' + p[1] + ' ' + L(p[2]) + '</a>'; });
  h += '</div><h4>' + L(UI.theme) + '</h4><div class="th">';
  Object.keys(THEMES).forEach(function (k) {
    var t = THEMES[k];
    h += '<button data-t="' + k + '" style="background:' + t.bg + ';color:' + t.ink + ';border-color:' + t.accent + '">' + L(t.n) + '</button>';
  });
  h += '</div><h4>' + L(UI.backup) + '</h4><div class="g"><button class="b" id="mm-ex">' + L(UI.ex) + '</button><button class="b" id="mm-im">' + L(UI.im) + '</button></div>' +
    '<div class="msg" id="mm-msg">' + L(UI.msg) + '</div><input type="file" id="mm-file" accept=".json" style="display:none">';
  pn.innerHTML = h;

  var nav = document.createElement('nav'); nav.id = 'mm-nav'; nav.setAttribute('data-nt', '1');
  var nh = '';
  NAV.forEach(function (k) {
    var p = PAGES.filter(function (x) { return x[0] === k; })[0];
    nh += '<a href="' + k + '.html"' + (k === cur ? ' class="cur"' : '') + '><span>' + p[1] + '</span>' + L(NAVLBL[k]) + '</a>';
  });
  nh += '<button id="mm-more" aria-label="' + L(UI.menu) + '"><span>☰</span>' + L(UI.more) + '</button>';
  nav.innerHTML = nh;

  var SKIP = ['app-users', 'app-session', 'owner-pin', 'app-bk-snooze'];
  try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist(); } catch (e) {}
  function rdNum(k) { try { return parseInt(localStorage.getItem(k), 10) || 0; } catch (e) { return 0; } }
  function backupBanner() {
    var day = 864e5, hasData = false;
    try { hasData = localStorage.length > 4; } catch (e) {}
    if (!hasData || Date.now() - rdNum('app-last-backup') < 7 * day || Date.now() - rdNum('app-bk-snooze') < day) return;
    var b = document.createElement('div');
    b.style.cssText = 'position:fixed;left:12px;right:12px;bottom:92px;max-width:496px;margin:0 auto;z-index:49;background:var(--surface);color:var(--ink);border:1px solid var(--accent);border-radius:16px;padding:12px 14px;box-shadow:0 8px 24px rgba(0,0,0,.18);display:flex;gap:8px;align-items:center;font-family:inherit;font-size:13px';
    b.innerHTML = '<span style="flex:1">🛟 عدّى أكتر من أسبوع من آخر نسخة احتياطية لبياناتك</span>' +
      '<button id="bk-now" style="background:var(--accent);color:#fff;border:none;border-radius:10px;padding:8px 12px;font-family:inherit;font-weight:700;cursor:pointer">خد نسخة</button>' +
      '<button id="bk-later" style="background:none;border:none;color:var(--ink-soft);font-size:16px;cursor:pointer">✕</button>';
    document.body.appendChild(b);
    b.querySelector('#bk-now').onclick = function () { b.remove(); pn.querySelector('#mm-ex').click(); };
    b.querySelector('#bk-later').onclick = function () { try { localStorage.setItem('app-bk-snooze', String(Date.now())); } catch (e) {} b.remove(); };
  }

  function toggle(open) { ov.style.display = pn.style.display = open ? 'block' : 'none'; }
  ov.onclick = function () { toggle(false); };
  applyTheme(getTheme());

  window.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(ov); document.body.appendChild(pn); document.body.appendChild(nav);
    document.getElementById('mm-more').onclick = function () { toggle(true); };
    applyTheme(getTheme());
    setTimeout(backupBanner, 1200);
    pn.querySelectorAll('[data-t]').forEach(function (b) { b.onclick = function () { applyTheme(b.dataset.t); }; });
    var msg = pn.querySelector('#mm-msg');
    pn.querySelector('#mm-ex').onclick = function () {
      var o = {};
      try { localStorage.setItem('app-last-backup', String(Date.now())); } catch (e) {}
      try { for (var i = 0; i < localStorage.length; i++) { var k = localStorage.key(i); if (SKIP.indexOf(k) === -1) o[k] = localStorage.getItem(k); } } catch (e) {}
      var a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([JSON.stringify(o)], { type: 'application/json' }));
      a.download = 'backup-' + new Date().toISOString().slice(0, 10) + '.json';
      a.click(); msg.textContent = L(UI.exok);
    };
    var f = pn.querySelector('#mm-file');
    pn.querySelector('#mm-im').onclick = function () { f.click(); };
    f.onchange = function () {
      var r = new FileReader();
      r.onload = function () {
        try {
          var o = JSON.parse(r.result);
          Object.keys(o).forEach(function (k) { localStorage.setItem(k, o[k]); });
          msg.textContent = L(UI.imok); setTimeout(function () { location.reload(); }, 800);
        } catch (e) { msg.textContent = L(UI.bad); }
      };
      r.readAsText(f.files[0]);
    };
  });
})();