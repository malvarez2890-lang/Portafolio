(function () {
  var P = window.PROJECTS, PR = window.PROFILE, C = window.CONTACT, B = window.BIM, S = window.SERVICE;
  var isSvc = function (p) { return p.group === "planimetria"; };
  var OWN = P.filter(function (p) { return !isSvc(p); }), SVC = P.filter(isSvc);
  var app = document.getElementById("app");
  var pad = function (n) { return String(n).padStart(2, "0"); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var src = function (p, i) { return "img/" + p.slug + "/" + pad(i) + ".jpg"; };
  var full = function (p, i) { return "img/" + p.slug + "/full/" + pad(i) + ".jpg"; };

  var soc = document.getElementById("social");
  soc.innerHTML = [["LinkedIn", C.linkedin], ["Instagram", C.instagram], ["WhatsApp", C.whatsapp]].filter(function (x) { return x[1]; })
    .map(function (x) { return '<a href="' + x[1] + '" target="_blank" rel="noopener">' + x[0] + "</a>"; }).join("");
  document.getElementById("year").textContent = new Date().getFullYear();

  function home() {
    document.title = "Matías Álvarez Cifuentes — Arquitecto";
    app.innerHTML =
      '<section class="hero"><h1>Arquitectura<br>vivienda, equipamiento<br>y espacio público.</h1>' +
      '<p>Matías Álvarez Cifuentes · Arquitecto BIM · Talca, Chile</p></section>' +
      '<section class="grid">' + OWN.map(function (p, i) { return card(p, i, i < 2); }).join("") + "</section>" +
      '<section class="teaser"><h2 class="sec">' + esc(S.title) + '</h2><p class="svc-lead">' + esc(S.lead) + '</p><div class="grid">' + SVC.map(function (p, i) { return card(p, i, false); }).join("") + "</div>" +
      '<a class="more" href="#/planimetria">Ver sección ' + esc(S.title) + ' →</a></section>' +
      '<section class="teaser"><h2 class="sec">BIM + IA</h2><div class="grid">' + [B.course.works[0], B.personal[0]].map(extCard).join("") + "</div>" +
      '<a class="more" href="#/bim">Ver sección BIM + IA →</a></section>';
  }

  function card(p, i, eager) {
    return '<a class="card" href="#/p/' + p.slug + '"><div class="ph"><img src="' + src(p, 1) + '" alt="' + esc(p.title) + '" loading="' + (eager ? "eager" : "lazy") + '"></div>' +
      '<div class="cap"><span class="num">' + pad(i + 1) + '</span><span class="ttl">' + esc(p.title) + '</span><span class="sub">' + esc(p.type.split(" · ")[0]) + '</span></div></a>';
  }

  function planimetria() {
    document.title = S.title + " — Matías Álvarez Cifuentes";
    app.innerHTML =
      '<section class="hero"><h1>' + esc(S.title) + '</h1><p>Servicio · Dibujo y modelación para otros arquitectos</p></section>' +
      '<section class="svc"><p class="lead">' + esc(S.lead) + '</p><ul class="svc-list">' + S.items.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + '</ul>' +
      '<a class="more" href="#/contacto">Cotizar un trabajo →</a></section>' +
      '<section class="grid">' + SVC.map(function (p, i) { return card(p, i, i < 2); }).join("") + "</section>";
  }

  function extCard(w) {
    return '<a class="card" href="' + w.url + '" target="_blank" rel="noopener"><div class="ph"><img src="' + w.img + '" alt="' + esc(w.title) + '" loading="lazy"></div>' +
      '<div class="cap"><span class="ttl">' + esc(w.title) + '</span><span class="sub">' + esc(w.sub) + " ↗</span></div></a>";
  }

  function extLink(w) {
    return '<a class="ext" href="' + w.url + '" target="_blank" rel="noopener"><span class="t">' + esc(w.title) + '</span><span class="s">' + esc(w.sub) + '</span><span class="arr">↗</span></a>';
  }

  function bim() {
    document.title = "BIM + IA — Matías Álvarez Cifuentes";
    var c = B.course;
    var work = function (w) {
      return '<a class="work" href="' + w.url + '" target="_blank" rel="noopener">' + (w.img ? '<div class="wph"><img src="' + w.img + '" alt="' + esc(w.title) + '" loading="lazy"></div>' : "") + '<div><b>' + esc(w.title) + '</b><span class="s">' + esc(w.sub) + "</span></div><p>" + esc(w.text) + '</p><span class="go">Abrir ↗</span></a>';
    };
    app.innerHTML =
      '<section class="page"><div><h1>BIM + IA</h1><p class="lead">' + esc(B.intro) + "</p></div><div>" +
      '<div class="block"><h2 class="sec">Curso</h2><div class="course"><b>' + esc(c.name) + '</b> <span class="org">· ' + esc(c.org) + '</span><p class="meta">' + esc(c.meta) + "</p><p>" + esc(c.text) + "</p></div>" +
      c.works.map(work).join("") + "</div>" +
      '<div class="block"><h2 class="sec">Trabajos personales</h2>' + B.personal.map(work).join("") + "</div></div></section>";
  }

  function project(slug) {
    var all = P.find(function (q) { return q.slug === slug; });
    if (!all) return home();
    var G = isSvc(all) ? SVC : OWN, i = G.indexOf(all);
    var p = all, prev = G[(i - 1 + G.length) % G.length], next = G[(i + 1) % G.length];
    document.title = p.title + " — Matías Álvarez Cifuentes";
    var meta = [p.type, p.place, p.year].filter(Boolean).map(function (m) { return "<span>" + esc(m) + "</span>"; }).join("");
    var figs = "";
    for (var k = 1; k <= p.n; k++) {
      figs += '<figure data-i="' + (k - 1) + '"' + (p.wide && p.wide.indexOf(k) >= 0 ? ' class="wide"' : "") + '><img src="' + src(p, k) + '" alt="' + esc(p.title) + " — imagen " + k + '" loading="' + (k < 3 ? "eager" : "lazy") + '"></figure>';
    }
    app.innerHTML =
      '<section class="proj-head"><div><a class="back" href="#/' + (isSvc(p) ? "planimetria" : "") + '">← ' + (isSvc(p) ? esc(S.title) : "Proyectos") + '</a><h1>' + esc(p.title) + "</h1></div>" +
      '<div><p class="meta">' + meta + "</p>" + (p.text ? '<div class="desc" style="margin-top:20px">' + p.text.map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("") + "</div>" : "") + "</div></section>" +
      '<section class="gallery">' + figs + "</section>" +
      '<nav class="pager"><a href="#/p/' + prev.slug + '">← Anterior<small>' + esc(prev.title) + '</small></a><a class="r" href="#/p/' + next.slug + '">Siguiente →<small>' + esc(next.title) + "</small></a></nav>";
    app.querySelectorAll("figure").forEach(function (f) {
      f.addEventListener("click", function () { openLb(p, +f.dataset.i); });
    });
  }

  function perfil() {
    document.title = "Perfil — Matías Álvarez Cifuentes";
    app.innerHTML =
      '<section class="page"><div><h1>Perfil</h1><p class="lead">' + esc(PR.intro) + "</p></div><div>" +
      '<div class="block"><h2 class="sec">Experiencia</h2>' + PR.experience.map(function (e) {
        return '<div class="row"><div class="when">' + esc(e[0]) + "</div><div><b>" + esc(e[1]) + '</b> <span class="org">· ' + esc(e[2]) + "</span><p>" + esc(e[3]) + "</p></div></div>";
      }).join("") + "</div>" +
      '<div class="block"><h2 class="sec">Formación</h2>' + PR.education.map(function (e) {
        return '<div class="row"><div class="when">' + esc(e[0]) + "</div><div><b>" + esc(e[1]) + '</b><p>' + esc(e[2]) + "</p></div></div>";
      }).join("") + "</div>" +
      '<div class="block"><h2 class="sec">Herramientas</h2><dl class="kv">' + PR.skills.map(function (s) {
        return "<dt>" + esc(s[0]) + "</dt><dd>" + esc(s[1]) + "</dd>";
      }).join("") + "<dt>Idiomas</dt><dd>" + esc(PR.languages) + '</dd></dl></div><div class="block"><h2 class="sec">BIM + IA</h2><p class="lead" style="margin:0 0 12px">' + esc(B.course.name) + " · " + esc(B.course.org) + ", 2026.</p>" + extLink(B.course.works[0]) + extLink(B.personal[0]) + "</div></div></section>";
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
    closeLb();
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

  /* Lightbox */
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
