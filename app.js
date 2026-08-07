
const A=window.C360_ASSETS;
const ships=[
 {name:"MSC Seashore",cls:"Seaside EVO",year:2021,ducks:12,desc:"Nave pensata per valorizzare gli spazi esterni e il rapporto con il mare."},
 {name:"MSC World Europa",cls:"World Class",year:2022,ducks:8,desc:"Grande nave di nuova generazione con impostazione moderna e numerosi spazi pubblici."},
 {name:"MSC Grandiosa",cls:"Meraviglia Plus",year:2019,ducks:6,desc:"Nave di grandi dimensioni con ampie aree interne e numerose attività a bordo."},
 {name:"MSC Seaside",cls:"Seaside",year:2017,ducks:4,desc:"Nave caratterizzata da promenade esterne e spazi vicini al mare."}
];
const ducks=[
 {code:"C360-0042",name:"Sunny Seashore",author:"Nicola",date:"5 ottobre 2026",status:"Nascosta",place:"Vicino agli ascensori di poppa, ponte 8"},
 {code:"C360-0081",name:"Sea Captain",author:"Marco",date:"6 ottobre 2026",status:"Trovata",place:"Promenade"},
 {code:"C360-0093",name:"Yellow Explorer",author:"Anna",date:"7 ottobre 2026",status:"Nascosta",place:"Area lounge, ponte 6"}
];

let state={view:"home",ship:"MSC Seashore",duck:"C360-0042",logged:false};
const app=document.getElementById("app");

function shell(content,title="Cruise360",nav=true){
 app.innerHTML=`<div class="shell">
  <header class="topbar">
   <div class="brand"><img src="${A.logo}" alt="Cruise360"><strong>${title}</strong></div>
   <button class="menu" aria-label="Menu">☰</button>
  </header>
  <main>${content}</main>
  ${nav?bottom():""}
 </div>`;
 bind();
}
function bottom(){
 return `<nav class="bottom"><div class="inner">
  ${n("home","⌂","Home")}${n("fleet","🚢","Flotta")}${n("duckSearch","🦆","Duck")}${n("badges","🏆","Badge")}${n("profile","👤","Profilo")}
 </div></nav>`;
}
function n(v,i,l){return `<button class="nav ${state.view===v?"active":""}" data-go="${v}"><b>${i}</b>${l}</button>`}
function bind(){document.querySelectorAll("[data-go]").forEach(x=>x.addEventListener("click",()=>go(x.dataset.go)))}
function go(v){state.view=v;render();window.scrollTo({top:0,behavior:"smooth"})}
function render(){
 ({home,fleet,ship,ducklist,duck,duckSearch,profile,badges,login,register,cruises,addCruise,verifyCruise}[state.view]||home)()
}
function home(){
 shell(`
  <section class="hero"><h1>Benvenuto a bordo</h1><p>Registra le tue crociere MSC, esplora la flotta e segui il viaggio delle Cruise360 Duck.</p></section>
  <section class="section">
   <div class="section-head"><h2>Esplora Cruise360</h2></div>
   <div class="grid">
    <article class="card action" data-go="fleet"><div class="icon">🚢</div><div><h3>Flotta MSC</h3><p>Schede uniformi per tutta la flotta.</p></div></article>
    <article class="card action" data-go="duckSearch"><div class="icon">📷</div><div><h3>Scansiona Duck</h3><p>Apri la pagina tramite QR o codice.</p></div></article>
    <article class="card action" data-go="cruises"><div class="icon">🧭</div><div><h3>Le mie crociere</h3><p>Registra e verifica le crociere passate.</p></div></article>
    <article class="card action" data-go="badges"><div class="icon">🏆</div><div><h3>Badge</h3><p>Traguardi basati sui dati verificati.</p></div></article>
   </div>
  </section>
  <section class="section"><div class="section-head"><h2>Prossima crociera</h2></div>
   <article class="card"><h3>MSC Seashore</h3><p>4–11 ottobre 2026 · Caraibi</p><div style="height:12px"></div><button class="primary full" data-go="ship">Apri nave</button></article>
  </section>`);
}
function fleet(){
 shell(`
  <h1>Flotta MSC</h1>
  <input id="shipSearch" class="field" placeholder="Cerca una nave...">
  <div class="tabs" style="margin:12px 0"><button class="tab active">Tutte</button><button class="tab">Seaside</button><button class="tab">World</button><button class="tab">Meraviglia</button></div>
  <div class="grid" id="shipGrid">
   ${ships.map(s=>`<article class="card ship-card" data-ship="${s.name}">
    ${A.seashore?`<img class="ship-img" src="${A.seashore}" alt="${s.name}">`:`<div class="ship-img"></div>`}
    <div class="ship-body"><h3>${s.name}</h3><div class="small">${s.cls}</div><div class="ducks">🦆 ${s.ducks} Duck associate</div></div>
   </article>`).join("")}
  </div>`,"Flotta MSC");
 document.querySelectorAll("[data-ship]").forEach(el=>el.addEventListener("click",()=>{state.ship=el.dataset.ship;go("ship")}));
 document.getElementById("shipSearch").addEventListener("input",e=>{
  const q=e.target.value.toLowerCase();
  document.querySelectorAll("[data-ship]").forEach(el=>el.style.display=el.dataset.ship.toLowerCase().includes(q)?"":"none")
 });
}
function ship(){
 const s=ships.find(x=>x.name===state.ship)||ships[0];
 shell(`
  <button class="back" data-go="fleet">← Flotta</button>
  ${A.seashore?`<img src="${A.seashore}" alt="${s.name}" style="width:100%;height:245px;object-fit:cover;border-radius:24px">`:""}
  <section class="section" style="margin-top:15px"><h1 style="margin-bottom:4px">${s.name}</h1><div class="small">${s.cls}</div><p class="small" style="line-height:1.5">${s.desc}</p></section>
  <section class="section"><div class="section-head"><h2>Scheda tecnica</h2></div>
   <article class="card table">
    ${[["Nome",s.name],["Classe",s.cls],["Anno",s.year],["Cantiere","Fincantieri"],["Lunghezza","339 m"],["Larghezza","41 m"],["Stazza","170.412 GT"],["Ponti","20"],["Passeggeri","5.632"],["Cabine","2.270"],["Velocità","22,9 nodi"]].map(r=>`<div class="row"><span>${r[0]}</span><strong>${r[1]}</strong></div>`).join("")}
   </article>
  </section>
  <section class="section"><article class="card"><div class="section-head"><h2>🦆 Duck associate</h2><span class="status blue">${s.ducks}</span></div><p>Le Duck sono mostrate in una pagina separata.</p><div style="height:12px"></div><button class="primary full" data-go="ducklist">Visualizza Duck</button></article></section>
  <section class="section"><div class="section-head"><h2>Cronologia Duck</h2></div><div class="list">
   <div class="item"><div class="thumb">🦆</div><div class="grow"><strong>C360-0042 nascosta</strong><p class="small">Ponte 8 · oggi</p></div></div>
   <div class="item"><div class="thumb">🦆</div><div class="grow"><strong>C360-0081 trovata</strong><p class="small">Promenade · ieri</p></div></div>
  </div></section>` , s.name);
}
function ducklist(){
 shell(`
  <button class="back" data-go="ship">← ${state.ship}</button><h1>Duck associate</h1>
  <input id="duckFilter" class="field" placeholder="Cerca per nome o codice...">
  <div class="list" style="margin-top:14px">${ducks.map(d=>drow(d)).join("")}</div>`,"Duck associate");
 document.querySelectorAll("[data-duck]").forEach(el=>el.addEventListener("click",()=>{state.duck=el.dataset.duck;go("duck")}));
}
function drow(d){return `<article class="item" data-duck="${d.code}"><div class="thumb">🦆</div><div class="grow"><strong>${d.name}</strong><p class="small">${d.code}<br>${d.date} · ${d.author}</p></div><span class="status ${d.status==="Nascosta"?"green":"blue"}">${d.status}</span></article>`}
function duckSearch(){
 shell(`<h1>Trova una Duck</h1><article class="card"><div class="form"><label>Codice Duck<input id="duckCode" class="field" placeholder="C360-0042"></label><button id="openDuck" class="primary">Apri Duck</button></div></article><div class="notice">Per provare la beta usa <strong>C360-0042</strong>. Il QR reale verrà collegato al backend.</div>`,"Duck");
 document.getElementById("openDuck").addEventListener("click",()=>{const v=document.getElementById("duckCode").value.trim().toUpperCase();if(ducks.some(d=>d.code===v)){state.duck=v;go("duck")}else alert("Codice non presente nella beta.")})
}
function duck(){
 const d=ducks.find(x=>x.code===state.duck)||ducks[0];
 shell(`
  <button class="back" data-go="ducklist">← Indietro</button>
  <div class="duck-hero">🦆</div>
  <section class="section" style="margin-top:14px"><div class="section-head"><div><h1 style="margin:0">${d.name}</h1><div class="small">${d.code}</div></div><span class="status green">In viaggio</span></div></section>
  <article class="card table">${[["Creata da",d.author],["Data",d.date],["Nave attuale","MSC Seashore"],["Ultimo luogo",d.place],["Stato","Ancora in viaggio"]].map(r=>`<div class="row"><span>${r[0]}</span><strong>${r[1]}</strong></div>`).join("")}</article>
  <section class="section"><div class="section-head"><h2>Hai trovato questa Duck?</h2></div><div class="actions"><button id="keep" class="success">La tengo</button><button id="rehide" class="primary">La nascondo di nuovo</button></div><div id="duckAction"></div></section>
  <section class="section"><div class="section-head"><h2>Statistiche della Duck</h2></div><div class="metrics">
   <div class="metric"><strong>12</strong><span>Giorni in viaggio</span></div><div class="metric"><strong>3</strong><span>Ritrovamenti</span></div><div class="metric"><strong>2</strong><span>Navi visitate</span></div><div class="metric"><strong>4</strong><span>Persone coinvolte</span></div>
  </div></section>
  <section class="section"><div class="section-head"><h2>Cronologia</h2></div><div class="list">
   <div class="item"><div class="thumb">✓</div><div class="grow"><strong>Creata</strong><p class="small">5 ottobre 2026 · MSC Seashore</p></div></div>
   <div class="item"><div class="thumb">⌖</div><div class="grow"><strong>Nascosta</strong><p class="small">${d.place}</p></div></div>
   <div class="item"><div class="thumb">🦆</div><div class="grow"><strong>Trovata</strong><p class="small">7 ottobre 2026</p></div></div>
  </div></section>`,"Duck");
 document.getElementById("keep").addEventListener("click",()=>action("keep"));
 document.getElementById("rehide").addEventListener("click",()=>action("hide"));
}
function action(type){
 document.getElementById("duckAction").innerHTML=`<article class="card" style="margin-top:12px"><h3>${type==="keep"?"La tengo":"La nascondo di nuovo"}</h3><div class="form">
  <label>Nome o nickname<input class="field" placeholder="Il tuo nome"></label>
  ${type==="hide"?`<label>Nave<select><option>MSC Seashore</option><option>MSC World Europa</option><option>MSC Grandiosa</option></select></label><label>Luogo<input class="field" placeholder="Scrivi liberamente dove la nascondi"></label>`:""}
  <label>Messaggio facoltativo<textarea rows="3" placeholder="Messaggio"></textarea></label><button class="primary">Conferma</button></div></article>`
}
function cruises(){
 shell(`<h1>Le mie crociere</h1><button class="primary full" data-go="addCruise">+ Aggiungi crociera</button><div class="section"><div class="list">
  <article class="item"><div class="grow"><strong>MSC Seashore</strong><p class="small">4–11 ottobre 2026 · Caraibi</p></div><span class="status green">Verificata</span></article>
  <article class="item"><div class="grow"><strong>MSC World Europa</strong><p class="small">2025 · Mediterraneo</p></div><span class="status orange">In revisione</span></article>
  <article class="item"><div class="grow"><strong>MSC Grandiosa</strong><p class="small">2024 · Mediterraneo</p></div><span class="status blue">Non verificata</span></article>
 </div></div>`,"Le mie crociere");
}
function addCruise(){
 shell(`<button class="back" data-go="cruises">← Le mie crociere</button><h1>Aggiungi crociera</h1><article class="card"><div class="form">
  <label>Nave<select><option>MSC Seashore</option><option>MSC World Europa</option><option>MSC Grandiosa</option><option>MSC Seaside</option></select></label>
  <label>Data di partenza<input class="field" type="date"></label>
  <label>Data di ritorno<input class="field" type="date"></label>
  <label>Itinerario / area<input class="field" placeholder="Caraibi, Mediterraneo..."></label>
  <button class="primary" data-go="verifyCruise">Continua alla verifica</button>
 </div></article>`,"Aggiungi crociera");
}
function verifyCruise(){
 shell(`<button class="back" data-go="addCruise">← Indietro</button><h1>Verifica crociera</h1><div class="notice">Nella versione reale potrai caricare una prova. I documenti saranno privati e visibili solo a te e agli amministratori.</div><section class="section"><article class="card"><div class="form">
  <label>Tipo di prova<select><option>Cruise Card</option><option>Conferma di prenotazione</option><option>Carta d'imbarco</option></select></label>
  <label>File dimostrativo<input class="field" type="file"></label>
  <button class="primary">Invia per revisione</button>
 </div></article></section>`,"Verifica");
}
function profile(){
 shell(`<div class="profile"><img src="${A.logo}" alt="Cruise360"><h1>Nicola</h1><div class="small">@nicola360</div></div>
 <section class="section"><div class="metrics"><div class="metric"><strong>7</strong><span>Crociere</span></div><div class="metric"><strong>5</strong><span>Navi visitate</span></div><div class="metric"><strong>18</strong><span>Duck nascoste</span></div><div class="metric"><strong>12</strong><span>Duck trovate</span></div></div></section>
 <section class="section"><div class="section-head"><h2>Account</h2></div><div class="grid"><button class="secondary" data-go="login">Login demo</button><button class="primary" data-go="register">Registrazione</button></div></section>`,"Profilo");
}
function badges(){
 shell(`<h1>Badge</h1><p class="small">Le crociere non verificate non contribuiscono ai badge numerici.</p><div class="badges">
 ${[["🏅","Prima crociera",1],["🚢","3 crociere",1],["⭐","5 crociere",1],["🦆","Prima Duck",1],["🌊","Seaside Class",1],["🚢","5 navi",1],["🏆","10 crociere",0],["🦆","10 Duck",0],["👑","20 crociere",0]].map(b=>`<article class="badge ${b[2]?"":"locked"}"><div class="ico">${b[0]}</div><strong>${b[1]}</strong><p class="small">${b[2]?"Ottenuto":"Da ottenere"}</p></article>`).join("")}
 </div>`,"Badge");
}
function login(){
 shell(`<div class="profile"><img src="${A.logo}" alt="Cruise360"><h1>Bentornato a bordo</h1></div><article class="card" style="margin-top:18px"><div class="form"><label>Email<input class="field" type="email" placeholder="nome@email.it"></label><label>Password<input class="field" type="password" placeholder="••••••••"></label><button class="primary" data-go="profile">Accedi</button><button class="secondary" data-go="register">Registrati gratuitamente</button></div></article>`,"Login",false)
}
function register(){
 shell(`<div class="profile"><img src="${A.logo}" alt="Cruise360"><h1>Crea il tuo account</h1></div><article class="card" style="margin-top:18px"><div class="form"><label>Nome<input class="field"></label><label>Cognome<input class="field"></label><label>Nome utente<input class="field" placeholder="@nomeutente"></label><label>Email<input class="field" type="email"></label><label>Password<input class="field" type="password"></label><button class="primary" data-go="profile">Crea account</button><button class="secondary" data-go="login">Hai già un account? Accedi</button></div></article>`,"Registrazione",false)
}
render();
