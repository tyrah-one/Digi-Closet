/* Renders the site from SITE and PROJECTS in projects.js.
   You shouldn't need to edit this file to add content. */

(function () {
  const $ = (sel) => document.querySelector(sel);
  const pad = (n) => String(n).padStart(2, "0");

  function esc(str) {
    return String(str ?? "").replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    })[c]);
  }

  // Image, or an editorial placeholder in the project's tone when no image is set.
  function visual(src, alt, tone, label) {
    if (src) return `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" />`;
    return `<div class="placeholder" style="--tone:${esc(tone || "#b9a99d")}">
      <span>${esc(label || alt)}</span></div>`;
  }

  function projectUrl(p) {
    return `project.html?id=${encodeURIComponent(p.id)}`;
  }

  // ---- Shared chrome -------------------------------------------------------
  function renderShared() {
    document.querySelectorAll("[data-site]").forEach((el) => {
      el.textContent = SITE[el.dataset.site] ?? "";
    });
    const email = $("#email");
    if (email) {
      email.textContent = SITE.email;
      email.href = `mailto:${SITE.email}`;
    }
    const links = $("#links");
    if (links) {
      links.innerHTML = (SITE.links || [])
        .map((l) => `<li><a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a></li>`)
        .join("");
    }
    const year = $("#year");
    if (year) year.textContent = new Date().getFullYear();
    const today = $("#today");
    if (today) {
      today.textContent = new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" });
    }
  }

  // ---- Home ----------------------------------------------------------------
  function renderHome() {
    document.title = `${SITE.name} — ${SITE.title}`;
    const feature = PROJECTS.find((p) => p.featured) || PROJECTS[0];

    $("#cover").innerHTML = `
      <div class="cover__text">
        <span class="kicker">${esc(SITE.title)}</span>
        <h1 class="cover__headline">${esc(SITE.tagline)}</h1>
        <p class="cover__intro">${esc(SITE.intro)}</p>
        ${feature ? `
        <a class="cover__story" href="${projectUrl(feature)}">
          <span class="kicker kicker--accent">Cover Story</span>
          <span class="cover__story-title">${esc(feature.title)}</span>
          <span class="cover__story-dek">${esc(feature.dek)}</span>
          <span class="read-more">Read the case study →</span>
        </a>` : ""}
      </div>
      ${feature ? `
      <a class="cover__image" href="${projectUrl(feature)}">
        ${visual(feature.cover, feature.title, feature.tone, feature.title)}
        <span class="cover__tag">${esc(feature.category)} · ${esc(feature.year)}</span>
      </a>` : ""}`;

    $("#toc").innerHTML = PROJECTS.map((p, i) => `
      <li><a href="${projectUrl(p)}">
        <span class="toc__num">${pad(i + 1)}</span>
        <span class="toc__title">${esc(p.title)}</span>
        <span class="toc__cat">${esc(p.category)}</span>
      </a></li>`).join("");

    $("#grid").innerHTML = PROJECTS.map((p, i) => `
      <article class="card ${i % 3 === 0 ? "card--wide" : ""}">
        <a href="${projectUrl(p)}" class="card__image">
          ${visual(p.cover, p.title, p.tone, p.title)}
        </a>
        <div class="card__body">
          <span class="kicker">${pad(i + 1)} — ${esc(p.category)}</span>
          <h3 class="card__title"><a href="${projectUrl(p)}">${esc(p.title)}</a></h3>
          <p class="card__dek">${esc(p.dek)}</p>
          <p class="card__blurb">${esc(p.blurb)}</p>
          <a class="read-more" href="${projectUrl(p)}">Read more →</a>
        </div>
      </article>`).join("");
  }

  // ---- Project / article ---------------------------------------------------
  function renderProject() {
    const id = new URLSearchParams(location.search).get("id");
    const index = PROJECTS.findIndex((p) => p.id === id);
    const p = PROJECTS[index];
    const main = $("#article");

    if (!p) {
      main.innerHTML = `<section class="notfound"><h1>Story not found</h1>
        <p><a class="read-more" href="index.html#work">Back to all work →</a></p></section>`;
      return;
    }
    document.title = `${p.title} — ${SITE.name}`;

    let firstPara = true;
    const story = (p.story || []).map((block) => {
      if (block && typeof block === "object" && block.heading) {
        return `<h2 class="article__h">${esc(block.heading)}</h2>`;
      }
      const cls = firstPara ? ' class="dropcap"' : "";
      firstPara = false;
      return `<p${cls}>${esc(block)}</p>`;
    });

    // Drop the pull quote in after the second story block.
    if (p.pullQuote) {
      story.splice(Math.min(2, story.length), 0,
        `<blockquote class="pullquote">“${esc(p.pullQuote)}”</blockquote>`);
    }

    const gallery = (p.gallery || []).map((g) => `
      <figure class="gallery__item">
        ${visual(g.src, g.caption, p.tone, "Image")}
        ${g.caption ? `<figcaption>${esc(g.caption)}</figcaption>` : ""}
      </figure>`).join("");

    const links = (p.links || []).map((l) =>
      `<a class="button" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} →</a>`).join("");

    const next = PROJECTS[(index + 1) % PROJECTS.length];

    main.innerHTML = `
      <article class="article">
        <header class="article__header">
          <span class="kicker kicker--accent">${esc(p.category)} · ${esc(p.year)}</span>
          <h1 class="article__title">${esc(p.title)}</h1>
          <p class="article__dek">${esc(p.dek)}</p>
        </header>

        <div class="article__hero">${visual(p.cover, p.title, p.tone, p.title)}</div>

        <div class="article__layout">
          <aside class="credits">
            <dl>
              <dt>Role</dt><dd>${esc(p.role)}</dd>
              <dt>Client</dt><dd>${esc(p.client)}</dd>
              <dt>Year</dt><dd>${esc(p.year)}</dd>
              ${p.tools && p.tools.length ? `<dt>Tools</dt><dd>${p.tools.map(esc).join(", ")}</dd>` : ""}
            </dl>
            ${links ? `<div class="credits__links">${links}</div>` : ""}
          </aside>
          <div class="article__body">
            <p class="article__lede">${esc(p.blurb)}</p>
            ${story.join("")}
          </div>
        </div>

        ${gallery ? `<section class="gallery">${gallery}</section>` : ""}

        ${next && next !== p ? `
        <a class="next" href="${projectUrl(next)}">
          <span class="kicker">Next story</span>
          <span class="next__title">${esc(next.title)}</span>
          <span class="next__dek">${esc(next.dek)}</span>
        </a>` : ""}
      </article>`;
  }

  renderShared();
  if (document.body.dataset.page === "home") renderHome();
  if (document.body.dataset.page === "project") renderProject();
})();
