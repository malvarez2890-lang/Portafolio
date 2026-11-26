(function () {
  var P = window.PROJECTS, PR = window.PROFILE, C = window.CONTACT, B = window.BIM, S = window.SERVICE;
  var isSvc = function (p) { return p.group === "planimetria"; };
  var OWN = P.filter(function (p) { return !isSvc(p); }), SVC = P.filter(isSvc);
  var app = document.getElementById("app");
  var pad = function (n) { return String(n).padStart(2, "0"); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var V = "?v=" + (window.SITE_VERSION || "1");
  var src = function (p, i) { return "img/" + p.slug + "/" + pad(i) + ".jpg" + V; };
  var full = function (p, i) { return "img/" + p.slug + "/full/" + pad(i) + ".jpg" + V; };
  var view = "img";

  var soc = document.getElementById("social");
  soc.innerHTML = [["LinkedIn", C.linkedin], ["Instagram", C.instagram], ["WhatsApp", C.whatsapp]].filter(function (x) { return x[1]; })
    .map(function (x) { return '<a href="' + x[1] + '" target="_blank" rel="noopener">' + x[0] + "</a>"; }).join("");
  document.getElementById("year").textContent = new Date().getFullYear();

  /* ───── Listados ───── */
  var meta = function (p) { return [p.place, p.year].filter(Boolean).join(", ") || (p.type.split(" · ")[1] || ""); };
  var lar = function (p) { var a = (p.ar && p.ar[1]) || 1.5; return Math.max(1.2, Math.min(a, 1.9)).toFixed(3); };

  // Numeración descendente (el más reciente arriba), como un índice de obras.
  function projectList(list, mode, eager) {
    var tot = list.length;
    if (mode === "list") {
      return '<div class="ilist">' + list.map(function (p, i) {
        return '<a class="ir" href="#/p/' + p.slug + '" data-img="' + src(p, 1) + '"><span class="n">' + pad(tot - i) + '</span><span class="t">' + esc(p.title) +
          '</span><span class="k">' + esc(p.type.split(" · ")[1] || p.type) + '</span><span class="l">' + esc(p.place || "") + '</span><span class="y">' + esc(p.year || "") + "</span></a>";
      }).join("") + "</div>";
    }
    return '<div class="jgrid">' + list.map(function (p, i) {
      return '<a class="jc" href="#/p/' + p.slug + '" style="--lar:' + lar(p) + '"><div class="ph"><img src="' + src(p, 1) + '" alt="' + esc(p.title) + '" loading="' + (eager && i < 3 ? "eager" : "lazy") + '"></div>' +
        '<div class="cap"><span class="n">' + pad(tot - i) + '</span><span class="t">' + esc(p.title) + '</span><span class="s">' + esc(meta(p)) + "</span></div></a>";
    }).join("") + "</div>";
  }

  function extCard(w) {
    return '<a class="jc" href="' + w.url + '" target="_blank" rel="noopener" style="--lar:1.778"><div class="ph"><img src="' + w.img + V + '" alt="' + esc(w.title) + '" loading="lazy"></div>' +
      '<div class="cap"><span class="t">' + esc(w.title) + '</span><span class="s">' + esc(w.sub) + " ↗</span></div></a>";
  }
  function extLink(w) {
    return '<a class="ext" href="' + w.url + '" target="_blank" rel="noopener"><span class="t">' + esc(w.title) + '</span><span class="s">' + esc(w.sub) + '</span><span class="arr">↗</span></a>';
  }

  function home() {
    document.title = "Matías Álvarez Cifuentes — Arquitecto";
    app.innerHTML =
      '<section class="intro"><p class="big">Arquitectura de vivienda y modelación BIM.</p><p class="small">Matías Álvarez Cifuentes · Arquitecto BIM · Talca, Chile</p></section>' +
      '<section><div class="bar"><h2>Proyectos (' + OWN.length + ')</h2><div class="views"><button data-v="img">Imágenes</button><button data-v="list">Índice</button></div></div><div id="plist"></div></section>' +
      '<section class="sec"><div class="bar"><h2>' + esc(S.title) + '</h2><a href="#/planimetria">Ver todo →</a></div><p class="sl">' + esc(S.lead) + "</p>" + projectList(SVC, "img", false) + "</section>" +
      '<section class="sec"><div class="bar"><h2>BIM + IA</h2><a href="#/bim">Ver todo →</a></div><div class="jgrid">' + [B.course.works[0]].concat(B.personal).map(extCard).join("") + "</div></section>";
    var pl = document.getElementById("plist");
    var draw = function () {
      pl.innerHTML = projectList(OWN, view, true);
      app.querySelectorAll(".views button").forEach(function (b) { b.classList.toggle("on", b.dataset.v === view); });
    };
    app.querySelectorAll(".views button").forEach(function (b) { b.onclick = function () { view = b.dataset.v; draw(); }; });
    draw();
  }

  function planimetria() {
    document.title = S.title + " — Matías Álvarez Cifuentes";
    app.innerHTML =
      '<section class="intro"><h1>' + esc(S.title) + '</h1><p class="lead">' + esc(S.lead) + "</p></section>" +
      '<section class="svc-wrap"><h2 class="hd" style="grid-column:1/-1">Servicios</h2><div><a class="more" href="#/contacto" style="font-weight:500">Cotizar un trabajo →</a></div><ul class="svc-list">' + S.items.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul></section>" +
      '<section><div class="bar"><h2>Trabajos (' + SVC.length + ')</h2></div>' + projectList(SVC, "img", true) + "</section>";
  }

  function bim() {
    document.title = "BIM + IA — Matías Álvarez Cifuentes";
    var c = B.course;
    var work = function (w) {
      return '<a class="work" href="' + w.url + '" target="_blank" rel="noopener">' + (w.img ? '<div class="wph"><img src="' + w.img + V + '" alt="' + esc(w.title) + '" loading="lazy"></div>' : "") + '<div><b>' + esc(w.title) + '</b><span class="s">' + esc(w.sub) + "</span></div><p>" + esc(w.text) + '</p><span class="go">Abrir ↗</span></a>';
    };
    app.innerHTML =
      '<section class="page"><div><h1>BIM + IA</h1><p class="lead">' + esc(B.intro) + "</p></div><div>" +
      '<div class="block"><h2 class="hd">Curso</h2><div class="course"><b>' + esc(c.name) + '</b> <span class="org">· ' + esc(c.org) + '</span><p class="meta">' + esc(c.meta) + "</p><p>" + esc(c.text) + "</p></div>" +
      c.works.map(work).join("") + "</div>" +
      '<div class="block"><h2 class="hd">Trabajos personales</h2>' + B.personal.map(work).join("") + "</div></div></section>";
  }

  /* ───── Proyecto ───── */
  function project(slug) {
    var all = P.find(function (q) { return q.slug === slug; });
    if (!all) return home();
    var G = isSvc(all) ? SVC : OWN, i = G.indexOf(all);
    var p = all, prev = G[(i - 1 + G.length) % G.length], next = G[(i + 1) % G.length];
    document.title = p.title + " — Matías Álvarez Cifuentes";
    var f = p.ficha || {};
    var rows = [["Tipo", p.type.replace(" · ", " — ")], ["Lugar", p.place], ["Año", p.year], ["Estructura", f.struct], ["Estado", f.estado], ["Con", f.colab], ["Autoría", f.autor], ["Contexto", f.contexto], ["Mi rol", f.rol]]
      .filter(function (r) { return r[1]; });
    var fig = function (k, big) {
      var ar = p.ar && p.ar[k];
      // Las imágenes que ocupan todo el ancho (láminas y planos) cargan la versión grande, para que no se vean pixeladas.
      return '<figure data-i="' + (k - 1) + '"' + (ar ? ' style="--ar:' + ar + '"' : "") + '><img src="' + (big ? full(p, k) : src(p, k)) + '" alt="' + esc(p.title) + " — imagen " + k + '" loading="' + (k < 3 ? "eager" : "lazy") + '"></figure>';
    };
    var figs = "", k;
    if (p.rows) p.rows.forEach(function (r) { figs += '<div class="jrow' + (r.length === 1 ? " one" : "") + '">' + r.map(function (k) { return fig(k, r.length === 1); }).join("") + "</div>"; });
    else for (k = 1; k <= p.n; k++) figs += fig(k);
    app.innerHTML =
      '<section class="pj"><div><a class="back" href="#/' + (isSvc(p) ? "planimetria" : "") + '">← ' + (isSvc(p) ? esc(S.title) : "Proyectos") + '</a><h1>' + esc(p.title) + "</h1>" +
      '<dl class="ficha">' + rows.map(function (r) { return "<dt>" + r[0] + "</dt><dd>" + esc(r[1]) + "</dd>"; }).join("") + "</dl></div>" +
      '<div class="desc">' + (p.text || []).map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("") + "</div></section>" +
      '<section class="gallery">' + figs + "</section>" +
      '<nav class="pager"><a href="#/p/' + prev.slug + '">← Anterior<small>' + esc(prev.title) + '</small></a><a class="r" href="#/p/' + next.slug + '">Siguiente →<small>' + esc(next.title) + "</small></a></nav>";
    app.querySelectorAll("figure").forEach(function (fg) { fg.addEventListener("click", function () { openLb(p, +fg.dataset.i); }); });
  }

  function perfil() {
    document.title = "Perfil — Matías Álvarez Cifuentes";
    app.innerHTML =
      '<section class="page"><div><h1>Perfil</h1><p class="lead">' + esc(PR.intro) + "</p></div><div>" +
      '<div class="block"><h2 class="hd">Experiencia</h2>' + PR.experience.map(function (e) {
        return '<div class="row"><div class="when">' + esc(e[0]) + "</div><div><b>" + esc(e[1]) + '</b> <span class="org">· ' + esc(e[2]) + "</span><p>" + esc(e[3]) + "</p></div></div>";
      }).join("") + "</div>" +
      '<div class="block"><h2 class="hd">Formación</h2>' + PR.education.map(function (e) {
        return '<div class="row"><div class="when">' + esc(e[0]) + "</div><div><b>" + esc(e[1]) + '</b><p>' + esc(e[2]) + "</p></div></div>";
      }).join("") + "</div>" +
      '<div class="block"><h2 class="hd">Herramientas</h2><dl class="kv">' + PR.skills.map(function (s) {
        return "<dt>" + esc(s[0]) + "</dt><dd>" + esc(s[1]) + "</dd>";
      }).join("") + "<dt>Idiomas</dt><dd>" + esc(PR.languages) + '</dd></dl></div><div class="block"><h2 class="hd">BIM + IA</h2>' + extLink(B.course.works[0]) + B.personal.map(extLink).join("") + "</div></div></section>";
  }

  function contacto() {
    document.title = "Contacto — Matías Álvarez Cifuentes";
    app.innerHTML =
      '<section class="page"><div><h1>Contacto</h1><p class="lead">' + esc(C.location) + '.<br>Disponible para proyectos de arquitectura, modelado BIM y regularizaciones.</p></div>' +
      '<div class="contact"><a class="big" href="mailto:' + C.email + '"><small>Correo</small>' + esc(C.email) + "</a>" +
      '<a class="big" href="tel:' + C.phoneHref + '"><small>Teléfono</small>' + esc(C.phone) + "</a>" +
      '<a class="big" href="' + C.linkedin + '" target="_blank" rel="noopener"><small>LinkedIn</small>matias-alvarez-arq</a>' +
      (C.instagram ? '<a class="big" href="' + C.instagram + '" target="_blank" rel="noopener"><small>Instagram</small>' + esc(C.instagram.replace(/^https?:\/\/(www\.)?instagram\.com\//, "@").replace(/\/$/, "")) + "</a>" : "") +
      '<a class="big" href="' + C.whatsapp + '" target="_blank" rel="noopener"><small>WhatsApp</small>Escribir un mensaje</a></div></section>';
  }

  function route() {
    var h = location.hash.replace(/^#\/?/, ""), parts = h.split("/");
    closeLb(); hidePv();
    if (parts[0] === "p" && parts[1]) project(parts[1]);
    else if (parts[0] === "planimetria") planimetria();
    else if (parts[0] === "bim") bim();
    else if (parts[0] === "perfil") perfil();
    else if (parts[0] === "contacto") contacto();
    else home();
    var cp = parts[0] === "p" && P.find(function (q) { return q.slug === parts[1]; });
    var on = ["perfil", "contacto", "bim", "planimetria"].indexOf(parts[0]) >= 0 ? parts[0] : (cp && isSvc(cp) ? "planimetria" : "proyectos");
    document.querySelectorAll("[data-nav]").forEach(function (a) { a.classList.toggle("on", a.dataset.nav === on); });
    window.scrollTo(0, 0);
  }

  /* ───── Vista previa al pasar el mouse por el índice ───── */
  var pv = document.getElementById("pv"), pvImg = pv.querySelector("img");
  function hidePv() { pv.classList.remove("on"); }
  document.addEventListener("mouseover", function (e) {
    var r = e.target.closest && e.target.closest(".ir");
    if (!r) return hidePv();
    if (pvImg.getAttribute("src") !== r.dataset.img) pvImg.src = r.dataset.img;
    pv.classList.add("on");
  });
  document.addEventListener("mousemove", function (e) {
    if (!pv.classList.contains("on")) return;
    var x = Math.min(e.clientX + 24, window.innerWidth - 330), y = Math.min(Math.max(e.clientY - 80, 70), window.innerHeight - 260);
    pv.style.left = x + "px"; pv.style.top = y + "px";
  });

  /* ───── Visor ───── */
  var lb = document.getElementById("lb"), lbImg = lb.querySelector("img"), lbCount = lb.querySelector(".lb-count"), cur = null, idx = 0;
  function show() { lbImg.src = full(cur, idx + 1); lbCount.textContent = pad(idx + 1) + " / " + pad(cur.n); }
  function openLb(p, i) { cur = p; idx = i; show(); lb.hidden = false; document.body.style.overflow = "hidden"; }
  function closeLb() { lb.hidden = true; document.body.style.overflow = ""; }
  function step(d) { idx = (idx + d + cur.n) % cur.n; show(); }
  lb.querySelector(".lb-close").onclick = closeLb;
  lb.querySelector(".lb-prev").onclick = function () { step(-1); };
  lb.querySelector(".lb-next").onclick = function () { step(1); };
  lb.addEventListener("click", function (e) { if (e.target === lb) closeLb(); });
  document.addEventListener("keydown", function (e) {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLb();
    else if (e.key === "ArrowRight") step(1);
    else if (e.key === "ArrowLeft") step(-1);
  });

  // Al recargar la página, volver siempre al inicio (los enlaces directos siguen funcionando).
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  var nav = performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
  if (nav && nav.type === "reload" && location.hash) history.replaceState(null, "", location.pathname + location.search);

  window.addEventListener("hashchange", route);
  route();
})();
