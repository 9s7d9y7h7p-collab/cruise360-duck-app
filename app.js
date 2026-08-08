
const ships=[{"name": "MSC Armonia", "cls": "Lirica", "year": 2001, "ducks": 0}, {"name": "MSC Sinfonia", "cls": "Lirica", "year": 2002, "ducks": 0}, {"name": "MSC Opera", "cls": "Lirica", "year": 2004, "ducks": 0}, {"name": "MSC Lirica", "cls": "Lirica", "year": 2003, "ducks": 0}, {"name": "MSC Musica", "cls": "Musica", "year": 2006, "ducks": 0}, {"name": "MSC Orchestra", "cls": "Musica", "year": 2007, "ducks": 0}, {"name": "MSC Poesia", "cls": "Musica", "year": 2008, "ducks": 0}, {"name": "MSC Magnifica", "cls": "Musica", "year": 2010, "ducks": 0}, {"name": "MSC Fantasia", "cls": "Fantasia", "year": 2008, "ducks": 0}, {"name": "MSC Splendida", "cls": "Fantasia", "year": 2009, "ducks": 0}, {"name": "MSC Divina", "cls": "Fantasia", "year": 2012, "ducks": 0}, {"name": "MSC Preziosa", "cls": "Fantasia", "year": 2013, "ducks": 0}, {"name": "MSC Meraviglia", "cls": "Meraviglia", "year": 2017, "ducks": 0}, {"name": "MSC Bellissima", "cls": "Meraviglia", "year": 2019, "ducks": 0}, {"name": "MSC Grandiosa", "cls": "Meraviglia Plus", "year": 2019, "ducks": 0}, {"name": "MSC Virtuosa", "cls": "Meraviglia Plus", "year": 2021, "ducks": 0}, {"name": "MSC Euribia", "cls": "Meraviglia Plus", "year": 2023, "ducks": 0}, {"name": "MSC Seaside", "cls": "Seaside", "year": 2017, "ducks": 0}, {"name": "MSC Seaview", "cls": "Seaside", "year": 2018, "ducks": 0}, {"name": "MSC Seashore", "cls": "Seaside EVO", "year": 2021, "ducks": 0}, {"name": "MSC Seascape", "cls": "Seaside EVO", "year": 2022, "ducks": 0}, {"name": "MSC World Europa", "cls": "World Class", "year": 2022, "ducks": 0}, {"name": "MSC World America", "cls": "World Class", "year": 2025, "ducks": 0}];
let state={view:"home",ship:"MSC Seashore",filter:"Tutte"};
const app=document.getElementById("app");
const slug=n=>n.toLowerCase().replace("msc ","").replaceAll(" ","-");

function shell(content,title="CRUISE360"){
 app.innerHTML=`<div class="app">
  <header class="topbar">
   <div class="brand"><img src="logo.jpeg" alt="Cruise360"><strong>${title}</strong></div>
   <button class="icon-btn" aria-label="Menu">☰</button>
  </header>
  <main>${content}</main>${nav()}</div>`;bind();
}
function nav(){return `<nav class="navbar"><div class="navinner">${[
 ["home","⌂","Home"],["fleet","🚢","Flotta"],["duckSearch","🦆","Duck"],["profile","👤","Profilo"],["badges","♡","Badge"]
].map(x=>`<button class="navbtn ${state.view===x[0]?"active":""}" data-go="${x[0]}"><b>${x[1]}</b>${x[2]}</button>`).join("")}</div></nav>`}
function bind(){document.querySelectorAll("[data-go]").forEach(x=>x.onclick=()=>go(x.dataset.go))}
function go(v){state.view=v;render();window.scrollTo({top:0,behavior:"smooth"})}

function home(){
 shell(`<section class="hero"><img src="seashore.jpeg" alt="MSC Seashore"><div class="hero-copy"><h1>Benvenuto a bordo,<br>Nicola!</h1><p>La tua avventura inizia qui.</p></div></section>
 <section class="section"><div class="section-head"><h2>Esplora Cruise360</h2></div><div class="grid">
 <article class="card action-card" data-go="fleet"><div class="action-icon">🚢</div><div><h3>Flotta MSC</h3><p>23 navi nel catalogo.</p></div></article>
 <article class="card action-card"><div class="action-icon">🦆</div><div><h3>Le mie Duck</h3><p>Trova o registra una Duck.</p></div></article>
 <article class="card action-card"><div class="action-icon">🏆</div><div><h3>I miei Badge</h3><p>Segui i tuoi traguardi.</p></div></article>
 <article class="card action-card"><div class="action-icon">👤</div><div><h3>Il mio Profilo</h3><p>Crociere e statistiche.</p></div></article>
 </div></section>`,"CRUISE360");
}

function fleet(){
 const classes=["Tutte","Lirica","Musica","Fantasia","Meraviglia","Meraviglia Plus","Seaside","Seaside EVO","World Class"];
 shell(`<div class="fleet-heading"><h1>FLOTTA MSC</h1><p>Esplora tutte le 23 navi</p></div>
 <div class="search-wrap">⌕ <input id="q" class="search borderless" placeholder="Cerca una nave..."></div>
 <div class="tabs" style="margin:12px 0 14px">${classes.map(c=>`<button class="tab ${state.filter===c?"active":""}" data-class="${c}">${c}</button>`).join("")}</div>
 <div id="fleetGrid" class="grid fleet-grid"></div>`,"FLOTTA MSC");
 const draw=()=>{
   const q=document.getElementById("q").value.toLowerCase();
   const filtered=ships.filter(s=>(state.filter==="Tutte"||s.cls===state.filter)&&s.name.toLowerCase().includes(q));
   document.getElementById("fleetGrid").innerHTML=filtered.map(s=>`
   <article class="card ship-card" data-ship="${s.name}">
     <div class="ship-photo-wrap"><img src="${slug(s.name)}.jpeg" alt="${s.name}"></div>
     <div class="ship-body"><div class="ship-title-row"><h3>${s.name}</h3><span class="ship-chevron">›</span></div>
     <div class="small">${s.cls}</div><div class="duck-count">🦆 ${s.ducks} Duck associate</div></div>
   </article>`).join("");
   document.querySelectorAll("[data-ship]").forEach(el=>el.onclick=()=>{state.ship=el.dataset.ship;go("ship")});
 };
 draw();
 document.getElementById("q").oninput=draw;
 document.querySelectorAll("[data-class]").forEach(b=>b.onclick=()=>{state.filter=b.dataset.class;fleet()});
}

function ship(){
 const s=ships.find(x=>x.name===state.ship)||ships[0];
 shell(`<button class="back" data-go="fleet">← Flotta</button>
 <div class="ship-hero-card"><img class="detail-image" src="${slug(s.name)}.jpeg" alt="${s.name}">
 <div class="ship-overlay"><h1>${s.name}</h1><div>${s.cls}</div></div></div>
 <section class="section"><div class="detail-tabs"><button class="detail-tab active">Dettagli</button><button class="detail-tab">Duck associate</button><button class="detail-tab">Cronologia</button></div></section>
 <section class="section"><div class="section-head"><h2>DATI TECNICI</h2></div><article class="card table">${[
 ["Nome",s.name],["Classe",s.cls],["Anno",s.year],["Cantiere","In aggiornamento"],["Lunghezza","In aggiornamento"],["Larghezza","In aggiornamento"],["Stazza","In aggiornamento"],["Ponti","In aggiornamento"],["Passeggeri","In aggiornamento"],["Cabine","In aggiornamento"],["Velocità","In aggiornamento"]
 ].map(r=>`<div class="row"><span>${r[0]}</span><strong>${r[1]}</strong></div>`).join("")}</article></section>
 <section class="section"><article class="card"><div class="section-head"><h2>🦆 DUCK ASSOCIATE</h2><span class="badge blue">0</span></div><p>Le Duck registrate su questa nave appariranno qui.</p></article></section>`,s.name);
}

function placeholder(title){shell(`<div class="center" style="padding:40px 0"><h1>${title}</h1><p class="small">Questa sezione verrà collegata nella fase successiva.</p></div>`,title)}
function render(){
 if(state.view==="home")return home();
 if(state.view==="fleet")return fleet();
 if(state.view==="ship")return ship();
 if(state.view==="duckSearch")return placeholder("DUCK");
 if(state.view==="profile")return placeholder("PROFILO");
 if(state.view==="badges")return placeholder("BADGE");
 home();
}
render();
