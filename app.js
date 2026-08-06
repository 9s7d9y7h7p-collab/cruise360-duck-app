const STORAGE_KEY = "cruise360_ducks_v1";

const demoData = [
  {
    code: "C360-0001",
    name: "Seashore Explorer",
    createdAt: "2026-10-04",
    startShip: "MSC Seashore",
    startPort: "Miami",
    message: "Keep or hide, you decide!",
    findings: [
      {
        date: "2026-10-04",
        ship: "MSC Seashore",
        port: "Miami",
        finder: "Cruise360Travel",
        action: "Nascosta",
        note: "Il viaggio comincia!"
      },
      {
        date: "2026-10-07",
        ship: "MSC Seashore",
        port: "Nassau",
        finder: "Anna",
        action: "Nascosta di nuovo",
        note: "Trovata vicino alla promenade."
      }
    ]
  }
];

function loadDucks() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(demoData));
    return structuredClone(demoData);
  }
  return JSON.parse(saved);
}

let ducks = loadDucks();

function saveDucks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ducks));
}

function codeNumber() {
  const numbers = ducks
    .map(d => Number(d.code.split("-")[1]))
    .filter(Number.isFinite);
  return String((Math.max(0, ...numbers) + 1)).padStart(4, "0");
}

function showView(id) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  document.querySelectorAll(".tab").forEach(t => t.classList.toggle("active", t.dataset.view === id));
  document.getElementById(id).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (id === "collection") renderDuckList();
  if (id === "home") renderDashboard();
}

document.querySelectorAll("[data-view]").forEach(btn => {
  btn.addEventListener("click", () => showView(btn.dataset.view));
});
document.querySelectorAll("[data-go]").forEach(el => {
  el.addEventListener("click", () => showView(el.dataset.go));
});

function renderDashboard() {
  const allFinds = ducks.flatMap(d => d.findings.map(f => ({...f, duckName: d.name, code: d.code})));
  document.getElementById("totalFinds").textContent = allFinds.length;
  document.getElementById("shipCount").textContent = new Set(allFinds.map(f => f.ship).filter(Boolean)).size;

  const recent = [...allFinds].sort((a,b) => b.date.localeCompare(a.date)).slice(0, 6);
  const container = document.getElementById("recentTimeline");
  container.innerHTML = recent.length ? recent.map(item => `
    <div class="timeline-item">
      <strong>${escapeHtml(item.duckName)} • ${escapeHtml(item.port || "Porto non indicato")}</strong>
      <span>${formatDate(item.date)} · ${escapeHtml(item.ship || "Nave non indicata")} · ${escapeHtml(item.action)}</span>
    </div>
  `).join("") : "<p>Nessun ritrovamento registrato.</p>";
}

function renderDuckList() {
  const list = document.getElementById("duckList");
  list.innerHTML = "";
  if (!ducks.length) {
    list.innerHTML = "<p>Non hai ancora creato nessuna duck.</p>";
    return;
  }
  const tpl = document.getElementById("duckCardTemplate");
  ducks.forEach(duck => {
    const node = tpl.content.cloneNode(true);
    node.querySelector(".code").textContent = duck.code;
    node.querySelector(".name").textContent = duck.name;
    node.querySelector(".meta").textContent = `${duck.findings.length} tappe · ultima: ${duck.findings.at(-1)?.port || duck.startPort || "—"}`;
    node.querySelector(".open-duck").addEventListener("click", () => openDuck(duck.code));
    list.appendChild(node);
  });
}

document.getElementById("findForm").addEventListener("submit", e => {
  e.preventDefault();
  const code = document.getElementById("findCode").value.trim().toUpperCase();
  const duck = ducks.find(d => d.code === code);
  const result = document.getElementById("duckResult");
  if (!duck) {
    result.innerHTML = `<article class="card"><h3>Duck non trovata</h3><p>Controlla il codice e riprova.</p></article>`;
    return;
  }
  openDuck(code);
});

document.getElementById("duckForm").addEventListener("submit", e => {
  e.preventDefault();
  const code = `C360-${codeNumber()}`;
  const duck = {
    code,
    name: document.getElementById("duckName").value.trim(),
    createdAt: new Date().toISOString().slice(0,10),
    startShip: document.getElementById("startShip").value.trim(),
    startPort: document.getElementById("startPort").value.trim(),
    message: document.getElementById("duckMessage").value.trim() || "Keep or hide, you decide!",
    findings: []
  };
  if (duck.startShip || duck.startPort) {
    duck.findings.push({
      date: duck.createdAt,
      ship: duck.startShip,
      port: duck.startPort,
      finder: "Cruise360Travel",
      action: "Creata",
      note: duck.message
    });
  }
  ducks.push(duck);
  saveDucks();
  e.target.reset();
  document.getElementById("createdDuck").innerHTML = `
    <article class="card">
      <span class="status-pill">Duck creata</span>
      <h3>${escapeHtml(duck.name)}</h3>
      <p>Codice univoco:</p>
      <div class="code-box">${duck.code}</div>
      <p>URL futuro del QR:</p>
      <div class="code-box">https://app.cruise360travel.it/duck/${duck.code}</div>
      <button class="primary" id="openCreated">Apri scheda</button>
    </article>`;
  document.getElementById("openCreated").addEventListener("click", () => openDuck(code));
});

function openDuck(code) {
  const duck = ducks.find(d => d.code === code);
  if (!duck) return;
  const content = document.getElementById("duckDetailContent");
  const last = duck.findings.at(-1);
  content.innerHTML = `
    <article class="card">
      <div class="detail-hero">
        <div class="detail-duck">🦆</div>
        <div>
          <span class="eyebrow">${duck.code}</span>
          <h2>${escapeHtml(duck.name)}</h2>
          <p>${escapeHtml(duck.message || "")}</p>
        </div>
      </div>
      <div class="stats">
        <div class="stat"><strong>${duck.findings.length}</strong><span>Tappe</span></div>
        <div class="stat"><strong>${new Set(duck.findings.map(f => f.port).filter(Boolean)).size}</strong><span>Porti</span></div>
        <div class="stat"><strong>${new Set(duck.findings.map(f => f.ship).filter(Boolean)).size}</strong><span>Navi</span></div>
      </div>
    </article>

    <article class="card">
      <span class="eyebrow">ULTIMA POSIZIONE</span>
      <h3>${escapeHtml(last?.port || duck.startPort || "Non ancora registrata")}</h3>
      <p>${escapeHtml(last?.ship || duck.startShip || "")}${last?.date ? " · " + formatDate(last.date) : ""}</p>
    </article>

    <article class="card">
      <span class="eyebrow">REGISTRA RITROVAMENTO</span>
      <h3>Ho trovato questa duck</h3>
      <form id="findingForm" class="stack finding-form">
        <label>Il tuo nome<input id="finder" required placeholder="Nome o nickname" /></label>
        <label>Data<input id="findingDate" type="date" required value="${new Date().toISOString().slice(0,10)}" /></label>
        <label>Nave<input id="findingShip" placeholder="MSC Seashore" /></label>
        <label>Porto / luogo<input id="findingPort" required placeholder="Nassau" /></label>
        <label>Cosa farai?
          <select id="findingAction">
            <option>La tengo</option>
            <option selected>La nascondo di nuovo</option>
          </select>
        </label>
        <label>Messaggio<textarea id="findingNote" rows="3" placeholder="Dove l'hai trovata?"></textarea></label>
        <button class="primary" type="submit">Salva ritrovamento</button>
      </form>
    </article>

    <article class="card">
      <span class="eyebrow">DIARIO DI VIAGGIO</span>
      <h3>Tutte le tappe</h3>
      <div class="timeline">
        ${[...duck.findings].reverse().map(f => `
          <div class="timeline-item">
            <strong>${escapeHtml(f.port || "Luogo non indicato")} · ${escapeHtml(f.action)}</strong>
            <span>${formatDate(f.date)} · ${escapeHtml(f.ship || "Nave non indicata")} · ${escapeHtml(f.finder || "")}</span>
            ${f.note ? `<p>${escapeHtml(f.note)}</p>` : ""}
          </div>`).join("") || "<p>Nessuna tappa registrata.</p>"}
      </div>
    </article>
  `;
  showView("duckDetail");
  document.getElementById("findingForm").addEventListener("submit", e => {
    e.preventDefault();
    duck.findings.push({
      finder: document.getElementById("finder").value.trim(),
      date: document.getElementById("findingDate").value,
      ship: document.getElementById("findingShip").value.trim(),
      port: document.getElementById("findingPort").value.trim(),
      action: document.getElementById("findingAction").value,
      note: document.getElementById("findingNote").value.trim()
    });
    saveDucks();
    openDuck(duck.code);
  });
}

document.getElementById("resetDemo").addEventListener("click", () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(demoData));
  ducks = loadDucks();
  renderDuckList();
  renderDashboard();
});

function formatDate(date) {
  if (!date) return "";
  return new Intl.DateTimeFormat("it-IT", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(date + "T12:00:00"));
}
function escapeHtml(value = "") {
  return value.replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch]));
}

renderDashboard();
renderDuckList();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
}
