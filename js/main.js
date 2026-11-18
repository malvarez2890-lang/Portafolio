(function () {
  var P = window.PROJECTS, PR = window.PROFILE, C = window.CONTACT;
  var app = document.getElementById("app");
  var pad = function (n) { return String(n).padStart(2, "0"); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var src = function (p, i) { return "img/" + p.slug + "/" + pad(i) + ".jpg"; };

  document.getElementById("year").textContent = new Date().getFullYear();

  function home() {
    document.title = "Matías Álvarez Cifuentes — Arquitecto";
    app.innerHTML =
      '<section class="hero"><h1>Arquitectura<br>vivienda, equipamiento<br>y espacio público.</h1>' +
      '<p>Matías Álvarez Cifuentes · Arquitecto BIM · Talca, Chile</p></section>' +
      '<section class="grid">' + P.map(function (p, i) {
        return '<a class="card" href="#/p/' + p.slug + '"><div class="ph"><img src="' + src(p, 1) + '" alt="' + esc(p.title) + '" loading="' + (i < 2 ? "eager" : "lazy") + '"></div>' +
          '<div class="cap"><span class="num">' + pad(i + 1) + '</span><span class="ttl">' + esc(p.title) + '</span><span class="sub">' + esc(p.type.split(" · ")[0]) + '</span></div></a>';
      }).join("") + "</section>";
  }

  function project(slug) {
    var i = P.findIndex(function (p) { return p.slug === slug; });
    if (i < 0) return home();
    var p = P[i], prev = P[(i - 1 + P.length) % P.length], next = P[(i + 1) % P.length];
    document.title = p.title + " — Matías Álvarez Cifuentes";
    var meta = [p.type, p.place, p.year].filter(Boolean).map(function (m) { return "<span>" + esc(m) + "</span>"; }).join("");
    var figs = "";
    for (var k = 1; k <= p.n; k++) {
      figs += '<figure data-i="' + (k - 1) + '"><img src="' + src(p, k) + '" alt="' + esc(p.title) + " — imagen " + k + '" loading="' + (k < 3 ? "eager" : "lazy") + '"></figure>';
    }
    app.innerHTML =
      '<section class="proj-head"><div><a class="back" href="#/">← Proyectos</a><h1>' + esc(p.title) + "</h1></div>" +
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
      }).join("") + "<dt>Idiomas</dt><dd>" + esc(PR.languages) + "</dd></dl></div></div></section>";
  }

  function contacto() {
    document.title = "Contacto — Matías Álvarez Cifuentes";
    app.innerHTML =
      '<section class="page"><div><h1>Contacto</h1><p class="lead">' + esc(C.location) + '.<br>Disponible para proyectos de arquitectura, modelado BIM y regularizaciones.</p></div>' +
      '<div class="contact"><a class="big" href="mailto:' + C.email + '"><small>Correo</small>' + esc(C.email) + "</a>" +
      '<a class="big" href="tel:' + C.phoneHref + '"><small>Teléfono</small>' + esc(C.phone) + "</a>" +
      '<a class="big" href="' + C.linkedin + '" target="_blank" rel="noopener"><small>LinkedIn</small>matias-alvarez-arq</a></div></section>';
  }

  function route() {
    var h = location.hash.replace(/^#\/?/, ""), parts = h.split("/");
    closeLb();
    if (parts[0] === "p" && parts[1]) project(parts[1]);
    else if (parts[0] === "perfil") perfil();
    else if (parts[0] === "contacto") contacto();
    else home();
    var on = parts[0] === "perfil" ? "perfil" : parts[0] === "contacto" ? "contacto" : "proyectos";
    document.querySelectorAll("[data-nav]").forEach(function (a) { a.classList.toggle("on", a.dataset.nav === on); });
    window.scrollTo(0, 0);
  }

  /* Lightbox */
  var lb = document.getElementById("lb"), lbImg = lb.querySelector("img"), lbCount = lb.querySelector(".lb-count"), cur = null, idx = 0;
  function show() { lbImg.src = src(cur, idx + 1); lbCount.textContent = pad(idx + 1) + " / " + pad(cur.n); }
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

  window.addEventListener("hashchange", route);
  route();
})();
