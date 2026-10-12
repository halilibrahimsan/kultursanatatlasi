(function () {
  "use strict";

  var K = window.KATEGORILER, D = window.DONEMLER, M = window.MEKANLAR, R = window.ROTALAR;
  var byId = {};
  M.forEach(function (m) { byId[m.id] = m; });

  // ---- durum ----
  var state = {
    query: "",
    cats: new Set(Object.keys(K)),
    era: "",
    activeId: null,
    routeId: null,
    favs: new Set(load("ieh-favs", []))
  };

  function load(key, fallback) {
    try { var v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
    catch (e) { return fallback; }
  }
  function save(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) { /* yok say */ }
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function norm(s) {
    return String(s).toLocaleLowerCase("tr").normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/ı/g, "i");
  }
  var $ = function (id) { return document.getElementById(id); };

  // ---- tema ----
  var root = document.documentElement;
  var savedTheme = load("ieh-theme", null);
  if (savedTheme) root.setAttribute("data-theme", savedTheme);
  function isDark() {
    var t = root.getAttribute("data-theme");
    if (t) return t === "dark";
    return window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches;
  }

  // ---- harita ----
  var map = L.map("map", { zoomControl: false }).setView([41.03, 29.0], 12);
  L.control.zoom({ position: "bottomright" }).addTo(map);
  var tiles;
  function setTiles() {
    if (tiles) map.removeLayer(tiles);
    var style = isDark() ? "dark_all" : "light_all";
    tiles = L.tileLayer("https://{s}.basemaps.cartocdn.com/" + style + "/{z}/{x}/{y}{r}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
      subdomains: "abcd", maxZoom: 19
    }).addTo(map);
  }
  setTiles();
  if (window.matchMedia) {
    var mq = matchMedia("(prefers-color-scheme: dark)");
    var onScheme = function () { if (!root.getAttribute("data-theme")) setTiles(); };
    if (mq.addEventListener) mq.addEventListener("change", onScheme); else if (mq.addListener) mq.addListener(onScheme);
  }
  $("theme-toggle").addEventListener("click", function () {
    var next = isDark() ? "light" : "dark";
    root.setAttribute("data-theme", next);
    save("ieh-theme", next);
    setTiles();
  });

  var markers = {};
  M.forEach(function (m) {
    var icon = L.divIcon({
      className: "",
      html: '<div class="pin' + (m.temsili ? " temsili" : "") + '" style="background:' + K[m.kategori].renk + '"></div>',
      iconSize: [18, 18], iconAnchor: [9, 9]
    });
    var mk = L.marker(m.konum, { icon: icon, title: m.ad, keyboard: true })
      .bindTooltip(esc(m.ad) + "<br><small>" + esc(m.yazar) + "</small>", { direction: "top", offset: [0, -8] })
      .on("click", function () { select(m.id, false); });
    markers[m.id] = mk;
  });

  var routeLayer = L.layerGroup().addTo(map);

  // ---- filtreler ----
  var chipsEl = $("cat-chips");
  Object.keys(K).forEach(function (k) {
    var b = document.createElement("button");
    b.className = "chip"; b.type = "button";
    b.setAttribute("aria-pressed", "true");
    b.innerHTML = '<span class="dot" style="background:' + K[k].renk + '"></span>' + esc(K[k].ad);
    b.addEventListener("click", function () {
      // tek kategori açıksa ona tıklamak hepsini geri açar
      if (state.cats.has(k) && state.cats.size === 1) {
        state.cats = new Set(Object.keys(K));
      } else if (state.cats.size === Object.keys(K).length) {
        state.cats = new Set([k]);
      } else if (state.cats.has(k)) {
        state.cats.delete(k);
      } else {
        state.cats.add(k);
      }
      renderChips(); render();
    });
    b.dataset.cat = k;
    chipsEl.appendChild(b);
  });
  function renderChips() {
    chipsEl.querySelectorAll(".chip").forEach(function (b) {
      b.setAttribute("aria-pressed", state.cats.has(b.dataset.cat) ? "true" : "false");
    });
  }

  var eraSel = $("era");
  Object.keys(D).forEach(function (k) {
    var o = document.createElement("option"); o.value = k; o.textContent = D[k]; eraSel.appendChild(o);
  });
  eraSel.addEventListener("change", function () { state.era = eraSel.value; render(); });
  $("search").addEventListener("input", function (e) { state.query = norm(e.target.value.trim()); render(); });

  function matches(m) {
    if (!state.cats.has(m.kategori)) return false;
    if (state.era && m.donem !== state.era) return false;
    if (state.query) {
      var hay = norm([m.ad, m.yazar, m.eser, m.semt, m.aciklama, m.alinti || ""].join(" "));
      if (hay.indexOf(state.query) === -1) return false;
    }
    return true;
  }

  function itemHTML(m) {
    return '<li class="item' + (m.id === state.activeId ? " active" : "") + '" data-id="' + m.id + '" tabindex="0">' +
      '<span class="dot" style="background:' + K[m.kategori].renk + '"></span>' +
      "<div><h3>" + esc(m.ad) + "</h3><p>" + esc(m.yazar) + " · " + esc(m.semt) + "</p></div></li>";
  }
  function bindList(ul) {
    ul.querySelectorAll(".item").forEach(function (li) {
      var go = function () { select(li.dataset.id, true); };
      li.addEventListener("click", go);
      li.addEventListener("keydown", function (e) { if (e.key === "Enter") go(); });
    });
  }

  function render() {
    var visible = M.filter(matches);
    var ids = new Set(visible.map(function (m) { return m.id; }));
    M.forEach(function (m) {
      var mk = markers[m.id];
      var show = ids.has(m.id) || inRoute(m.id) || m.id === state.activeId;
      if (show && !map.hasLayer(mk)) {
        mk.addTo(map);
        if (m.id === state.activeId) setPinActive(m.id, true);
      }
      if (!show && map.hasLayer(mk)) map.removeLayer(mk);
    });
    $("result-count").textContent = visible.length + " mekân";
    var ul = $("list");
    ul.innerHTML = visible.map(itemHTML).join("") ||
      '<li class="hint">Sonuç bulunamadı.</li>';
    bindList(ul);
    renderFavs();
  }

  function renderFavs() {
    var favs = M.filter(function (m) { return state.favs.has(m.id); });
    $("fav-count").textContent = favs.length;
    $("fav-empty").classList.toggle("hidden", favs.length > 0);
    var ul = $("fav-list");
    ul.innerHTML = favs.map(itemHTML).join("");
    bindList(ul);
  }

  // ---- detay ----
  function select(id, fly) {
    var m = byId[id];
    if (!m) return;
    if (state.activeId && markers[state.activeId]) setPinActive(state.activeId, false);
    state.activeId = id;
    setPinActive(id, true);
    var mk = markers[id];
    if (!map.hasLayer(mk)) mk.addTo(map);
    if (fly) map.flyTo(m.konum, Math.max(map.getZoom(), 15), { duration: .8 });
    showDetail(m);
    document.querySelectorAll(".item").forEach(function (li) {
      var on = li.dataset.id === id;
      li.classList.toggle("active", on);
      if (on && !fly && li.offsetParent) li.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
    if (location.hash !== "#" + id) history.replaceState(null, "", "#" + id);
  }
  function setPinActive(id, on) {
    var el = markers[id] && markers[id].getElement();
    if (el && el.firstChild) el.firstChild.classList.toggle("active", on);
  }

  function showDetail(m) {
    var el = $("detail");
    var fav = state.favs.has(m.id);
    var gmaps = "https://www.google.com/maps/search/?api=1&query=" + m.konum[0] + "," + m.konum[1];
    el.innerHTML =
      '<div class="actions">' +
        '<button class="icon-btn' + (fav ? " on" : "") + '" id="fav-btn" title="Favorilere ekle" aria-pressed="' + fav + '">' + (fav ? "★" : "☆") + "</button>" +
        '<button class="icon-btn" id="close-btn" title="Kapat" aria-label="Kapat">×</button>' +
      "</div>" +
      '<div class="meta"><span class="tag" style="background:' + K[m.kategori].renk + '">' + esc(K[m.kategori].ad) + "</span>" +
      '<span class="tag era">' + esc(D[m.donem]) + "</span></div>" +
      "<h2>" + esc(m.ad) + "</h2>" +
      '<p class="who"><b>' + esc(m.yazar) + "</b><br>" + esc(m.eser) + "<br>" + esc(m.semt) + "</p>" +
      (m.alinti ? "<blockquote>“" + esc(m.alinti) + "”</blockquote>" : "") +
      "<p>" + esc(m.aciklama) + "</p>" +
      (m.uyarlama ? '<p class="note">🎬 Uyarlama: ' + esc(m.uyarlama) + "</p>" : "") +
      (m.temsili ? '<p class="note">◌ Kurmaca ya da genel bir bölgeyi işaret eden temsili konum.</p>' : "") +
      '<div class="links"><a href="' + gmaps + '" target="_blank" rel="noopener">Yol tarifi ↗</a>' +
      '<button type="button" id="share-btn">Bağlantıyı kopyala</button></div>';
    el.classList.remove("hidden");
    $("close-btn").onclick = closeDetail;
    $("fav-btn").onclick = function () {
      if (state.favs.has(m.id)) state.favs.delete(m.id); else state.favs.add(m.id);
      save("ieh-favs", Array.from(state.favs));
      showDetail(m); renderFavs();
    };
    $("share-btn").onclick = function (e) {
      var url = location.href.split("#")[0] + "#" + m.id;
      var btn = e.currentTarget;
      var done = function () { btn.textContent = "Kopyalandı ✓"; };
      if (navigator.clipboard) navigator.clipboard.writeText(url).then(done, function () { prompt("Bağlantı:", url); });
      else prompt("Bağlantı:", url);
    };
  }
  function closeDetail() {
    if ($("detail").classList.contains("hidden")) return;
    $("detail").classList.add("hidden");
    if (state.activeId) setPinActive(state.activeId, false);
    state.activeId = null;
    document.querySelectorAll(".item.active").forEach(function (li) { li.classList.remove("active"); });
    history.replaceState(null, "", location.pathname + location.search);
  }
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeDetail(); });

  // ---- rotalar ----
  function inRoute(id) {
    if (!state.routeId) return false;
    var r = R.filter(function (x) { return x.id === state.routeId; })[0];
    return r && r.duraklar.indexOf(id) !== -1;
  }
  var routesEl = $("routes");
  routesEl.innerHTML = R.map(function (r) {
    return '<li class="route" data-id="' + r.id + '"><h3>' + esc(r.ad) + "</h3><small>" + esc(r.sure) +
      " · " + r.duraklar.length + " durak</small><ol>" +
      r.duraklar.map(function (d) { return '<li data-stop="' + d + '">' + esc(byId[d].ad) + "</li>"; }).join("") +
      "</ol></li>";
  }).join("");
  routesEl.querySelectorAll(".route").forEach(function (el) {
    el.addEventListener("click", function (e) {
      var stop = e.target.closest("[data-stop]");
      if (state.routeId !== el.dataset.id) showRoute(el.dataset.id);
      if (stop) select(stop.dataset.stop, true);
    });
  });
  function showRoute(id) {
    state.routeId = id;
    routeLayer.clearLayers();
    var r = R.filter(function (x) { return x.id === id; })[0];
    var pts = r.duraklar.map(function (d) { return byId[d].konum; });
    L.polyline(pts, { className: "route-line", weight: 4, opacity: .8, dashArray: "8 8" }).addTo(routeLayer);
    pts.forEach(function (p, i) {
      L.marker(p, {
        icon: L.divIcon({ className: "", html: '<div class="route-num">' + (i + 1) + "</div>", iconSize: [22, 22], iconAnchor: [11, 34] }),
        interactive: false, zIndexOffset: 1000
      }).addTo(routeLayer);
    });
    routesEl.querySelectorAll(".route").forEach(function (el) { el.classList.toggle("active", el.dataset.id === id); });
    map.flyToBounds(L.latLngBounds(pts).pad(.25), { duration: .8, maxZoom: 16 });
    render();
  }

  // ---- sekmeler ----
  document.querySelectorAll(".tab").forEach(function (t) {
    t.addEventListener("click", function () {
      document.querySelectorAll(".tab").forEach(function (x) {
        x.classList.toggle("active", x === t); x.setAttribute("aria-selected", x === t);
      });
      ["kesfet", "rotalar", "favoriler"].forEach(function (n) {
        $("tab-" + n).classList.toggle("hidden", n !== t.dataset.tab);
      });
      if (t.dataset.tab !== "rotalar" && state.routeId) {
        state.routeId = null; routeLayer.clearLayers();
        routesEl.querySelectorAll(".route").forEach(function (el) { el.classList.remove("active"); });
        render();
      }
    });
  });

  // ---- başlat ----
  render();
  var all = L.latLngBounds(M.map(function (m) { return m.konum; }));
  map.fitBounds(all.pad(.05));
  var initial = decodeURIComponent(location.hash.slice(1));
  if (byId[initial]) setTimeout(function () { select(initial, true); }, 300);
  window.addEventListener("hashchange", function () {
    var h = decodeURIComponent(location.hash.slice(1));
    if (byId[h] && h !== state.activeId) select(h, true);
  });
})();
