
const ships=[{"name":"MSC Armonia","cls":"Lirica","year":2001,"shipyard":"Chantiers de l’Atlantique","length":"274,9 m","width":"32 m","tonnage":"65.542 GT","decks":"13","passengers":"2.620","cabins":"976","speed":"20,1 nodi","ducks":0},{"name":"MSC Sinfonia","cls":"Lirica","year":2002,"shipyard":"Chantiers de l’Atlantique","length":"274,9 m","width":"28,8 m","tonnage":"65.591 GT","decks":"13","passengers":"2.646","cabins":"976","speed":"21,7 nodi","ducks":0},{"name":"MSC Opera","cls":"Lirica","year":2004,"shipyard":"Chantiers de l’Atlantique","length":"274,9 m","width":"28,8 m","tonnage":"65.591 GT","decks":"13","passengers":"2.658","cabins":"1.070","speed":"20,3 nodi","ducks":0},{"name":"MSC Lirica","cls":"Lirica","year":2003,"shipyard":"Chantiers de l’Atlantique","length":"274,9 m","width":"28,8 m","tonnage":"65.591 GT","decks":"13","passengers":"2.648","cabins":"988","speed":"21,7 nodi","ducks":0},{"name":"MSC Musica","cls":"Musica","year":2006,"shipyard":"Aker Yards France","length":"293,8 m","width":"32,2 m","tonnage":"92.409 GT","decks":"16","passengers":"3.223","cabins":"1.275","speed":"22 nodi","ducks":0},{"name":"MSC Orchestra","cls":"Musica","year":2007,"shipyard":"Aker Yards France","length":"293,8 m","width":"32,2 m","tonnage":"92.409 GT","decks":"16","passengers":"3.223","cabins":"1.233","speed":"22,9 nodi","ducks":0},{"name":"MSC Poesia","cls":"Musica","year":2008,"shipyard":"Aker Yards France","length":"293,8 m","width":"32,2 m","tonnage":"92.627 GT","decks":"16","passengers":"3.223","cabins":"1.223","speed":"23 nodi","ducks":0},{"name":"MSC Magnifica","cls":"Musica","year":2010,"shipyard":"STX Europe","length":"293,8 m","width":"32,2 m","tonnage":"95.128 GT","decks":"16","passengers":"3.223","cabins":"1.259","speed":"22,9 nodi","ducks":0},{"name":"MSC Fantasia","cls":"Fantasia","year":2008,"shipyard":"STX Europe","length":"333,3 m","width":"37,92 m","tonnage":"137.936 GT","decks":"18","passengers":"4.363","cabins":"1.636","speed":"22,87 nodi","ducks":0},{"name":"MSC Splendida","cls":"Fantasia","year":2009,"shipyard":"STX Europe","length":"333,3 m","width":"37,92 m","tonnage":"137.936 GT","decks":"18","passengers":"4.363","cabins":"1.637","speed":"22,87 nodi","ducks":0},{"name":"MSC Divina","cls":"Fantasia","year":2012,"shipyard":"STX France","length":"333,3 m","width":"37,92 m","tonnage":"139.072 GT","decks":"18","passengers":"4.345","cabins":"1.751","speed":"23,75 nodi","ducks":0},{"name":"MSC Preziosa","cls":"Fantasia","year":2013,"shipyard":"STX France","length":"333,3 m","width":"37,92 m","tonnage":"139.072 GT","decks":"18","passengers":"4.345","cabins":"1.751","speed":"24,21 nodi","ducks":0},{"name":"MSC Meraviglia","cls":"Meraviglia","year":2017,"shipyard":"STX France","length":"315,83 m","width":"43 m","tonnage":"171.598 GT","decks":"19","passengers":"5.642","cabins":"2.214","speed":"22,89 nodi","ducks":0},{"name":"MSC Bellissima","cls":"Meraviglia","year":2019,"shipyard":"Chantiers de l’Atlantique","length":"315,83 m","width":"43 m","tonnage":"171.598 GT","decks":"19","passengers":"5.654","cabins":"2.217","speed":"23,15 nodi","ducks":0},{"name":"MSC Grandiosa","cls":"Meraviglia Plus","year":2019,"shipyard":"Chantiers de l’Atlantique","length":"331,43 m","width":"43 m","tonnage":"181.541 GT","decks":"19","passengers":"6.334","cabins":"2.421","speed":"20,1 nodi","ducks":0},{"name":"MSC Virtuosa","cls":"Meraviglia Plus","year":2021,"shipyard":"Chantiers de l’Atlantique","length":"331 m","width":"43 m","tonnage":"181.541 GT","decks":"19","passengers":"6.334","cabins":"2.421","speed":"22,2 nodi","ducks":0},{"name":"MSC Euribia","cls":"Meraviglia Plus","year":2023,"shipyard":"Chantiers de l’Atlantique","length":"331 m","width":"43 m","tonnage":"184.011 GT","decks":"19","passengers":"6.327","cabins":"2.419","speed":"22,3 nodi","ducks":0},{"name":"MSC Seaside","cls":"Seaside","year":2017,"shipyard":"Fincantieri","length":"323 m","width":"41 m","tonnage":"153.516 GT","decks":"20","passengers":"5.084","cabins":"2.026","speed":"22,95 nodi","ducks":0},{"name":"MSC Seaview","cls":"Seaside","year":2018,"shipyard":"Fincantieri","length":"323 m","width":"41 m","tonnage":"153.516 GT","decks":"20","passengers":"5.079","cabins":"2.026","speed":"22,98 nodi","ducks":0},{"name":"MSC Seashore","cls":"Seaside EVO","year":2021,"shipyard":"Fincantieri","length":"339 m","width":"41 m","tonnage":"170.412 GT","decks":"20","passengers":"5.877","cabins":"2.270","speed":"21,8 nodi","ducks":0},{"name":"MSC Seascape","cls":"Seaside EVO","year":2022,"shipyard":"Fincantieri","length":"339 m","width":"41 m","tonnage":"169.400 GT","decks":"20","passengers":"5.877","cabins":"2.270","speed":"21,8 nodi","ducks":0},{"name":"MSC World Europa","cls":"World Class","year":2022,"shipyard":"Chantiers de l’Atlantique","length":"333,3 m","width":"47 m","tonnage":"215.863 GT","decks":"22","passengers":"6.762","cabins":"2.626","speed":"22,7 nodi","ducks":0},{"name":"MSC World America","cls":"World Class","year":2025,"shipyard":"Chantiers de l’Atlantique","length":"333 m","width":"47 m","tonnage":"216.638 GT","decks":"22","passengers":"6.764","cabins":"2.614","speed":"22,7 nodi","ducks":0}];
let state={view:"home",ship:"MSC Seashore",filter:"Tutte",shipTab:"details"};
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
function go(v){state.view=v;const initialDuck=new URLSearchParams(location.search).get("duck");
if(initialDuck){duckDetail(initialDuck);}else{render();}window.scrollTo({top:0,behavior:"smooth"})}

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
     <div class="ship-photo-wrap"><img class="ship-list-${slug(s.name)}" src="${slug(s.name)}.jpeg" alt="${s.name}"></div>
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
 const tab=state.shipTab||"details";
 let panel="";
 if(tab==="details"){
   panel=`<section class="section"><div class="section-head"><h2>DATI TECNICI</h2></div><article class="card table">${
     [["Nome",s.name],["Classe",s.cls],["Anno",s.year],["Cantiere",s.shipyard],["Lunghezza",s.length],["Larghezza",s.width],["Stazza",s.tonnage],["Ponti",s.decks],["Passeggeri",s.passengers],["Cabine",s.cabins],["Velocità",s.speed]]
     .map(r=>`<div class="row"><span>${r[0]}</span><strong>${r[1]}</strong></div>`).join("")
   }</article></section>
   <section class="section"><article class="card"><div class="section-head"><h2>🦆 DUCK ASSOCIATE</h2><span class="badge blue">${s.ducks}</span></div><p>Le Duck registrate su questa nave appariranno qui.</p><div style="height:10px"></div><button class="primary full" data-shiptab="ducks">Visualizza Duck</button></article></section>`;
 } else if(tab==="ducks"){
   panel=`<section class="section"><div class="section-head"><h2>DUCK ASSOCIATE</h2><span class="badge blue">${s.ducks}</span></div>
    <article class="card empty-panel"><img src="duck.svg" alt="Duck"><h3>Nessuna Duck registrata</h3><p>Quando una Cruise Duck verrà nascosta su ${s.name}, comparirà qui con codice, data e autore.</p></article></section>`;
 } else {
   panel=`<section class="section"><div class="section-head"><h2>CRONOLOGIA</h2></div>
    <article class="card empty-panel"><div class="history-icon">◷</div><h3>Nessuna attività ancora</h3><p>Nascondimenti e ritrovamenti relativi a ${s.name} saranno mostrati in ordine cronologico.</p></article></section>`;
 }
 shell(`<button class="back" data-go="fleet">← Flotta</button>
 <div class="ship-hero-card"><img class="detail-image ship-detail-${slug(s.name)}" src="${slug(s.name)}.jpeg" alt="${s.name}">
 <div class="ship-overlay"><h1>${s.name}</h1><div>${s.cls}</div></div></div>
 <section class="section"><div class="detail-tabs">
   <button class="detail-tab ${tab==="details"?"active":""}" data-shiptab="details">Dettagli</button>
   <button class="detail-tab ${tab==="ducks"?"active":""}" data-shiptab="ducks">Duck associate</button>
   <button class="detail-tab ${tab==="history"?"active":""}" data-shiptab="history">Cronologia</button>
 </div></section>${panel}`,s.name);
 document.querySelectorAll("[data-shiptab]").forEach(b=>b.onclick=()=>{state.shipTab=b.dataset.shiptab;ship()});
}

function loadDucks(){
  try { return JSON.parse(localStorage.getItem("cruise360_ducks") || "[]"); }
  catch(e){ return []; }
}
function saveDucks(list){
  localStorage.setItem("cruise360_ducks", JSON.stringify(list));
}
function newDuckCode(){
  const chars="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let out="C360-";
  for(let i=0;i<6;i++) out+=chars[Math.floor(Math.random()*chars.length)];
  return out;
}
function escapeHtml(v){
  return String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m]));
}
function duckUrl(code){
  return location.origin + location.pathname + "?duck=" + encodeURIComponent(code);
}
function qrImageUrl(text){
  return "https://api.qrserver.com/v1/create-qr-code/?size=420x420&margin=18&data=" + encodeURIComponent(text);
}
function duckSection(){
 const saved=loadDucks();
 shell(`
   <div class="section-head">
     <div><h1 style="margin-bottom:4px">DUCK</h1><p class="small">Registra, genera il QR e segui ogni Cruise Duck.</p></div>
   </div>

   <div class="duck-actions-grid">
     <article class="card duck-action" data-duckaction="create">
       <div class="duck-action-icon">＋</div>
       <div><h3>Crea una nuova Duck</h3><p>Inserisci i dati e genera il QR univoco.</p></div>
     </article>
     <article class="card duck-action" data-duckaction="find">
       <div class="duck-action-icon">⌕</div>
       <div><h3>Trova una Duck</h3><p>Apri una Duck tramite il suo codice.</p></div>
     </article>
   </div>

   <section class="section">
     <div class="section-head"><h2>LE MIE DUCK</h2><span class="badge blue">${saved.length}</span></div>
     <div class="duck-saved-list">
       ${saved.length ? saved.map(d=>`
         <article class="card saved-duck" data-openduck="${escapeHtml(d.code)}">
           <img src="duck.svg" alt="Duck">
           <div class="grow">
             <strong>${escapeHtml(d.name || d.code)}</strong>
             <div class="small">${escapeHtml(d.code)} · ${escapeHtml(d.ship)}</div>
           </div>
           <span class="ship-chevron">›</span>
         </article>`).join("") :
         `<article class="card empty-panel"><img src="duck.svg" alt="Duck"><h3>Nessuna Duck creata</h3><p>Crea la prima Duck e genera il suo QR code.</p></article>`}
     </div>
   </section>
 `,"DUCK");
 document.querySelectorAll("[data-duckaction]").forEach(b=>b.onclick=()=> {
   if(b.dataset.duckaction==="create") duckCreate();
   else duckFind();
 });
 document.querySelectorAll("[data-openduck]").forEach(b=>b.onclick=()=>duckDetail(b.dataset.openduck));
}
function duckCreate(){
 const shipOptions=ships.map(s=>`<option value="${escapeHtml(s.name)}">${escapeHtml(s.name)}</option>`).join("");
 shell(`
   <button class="back" id="backDuck">← Duck</button>
   <div class="section-head"><div><h1>NUOVA DUCK</h1><p class="small">Il QR conterrà un link univoco alla scheda della Duck.</p></div></div>
   <article class="card">
     <div class="form">
       <label>Nome della Duck<input id="dName" class="field" placeholder="Es. Sunny Explorer"></label>
       <label>Nave<select id="dShip" class="field">${shipOptions}</select></label>
       <label>Autore<input id="dAuthor" class="field" placeholder="Nome o username"></label>
       <label>Data<input id="dDate" class="field" type="date"></label>
       <label>Luogo iniziale<input id="dPlace" class="field" placeholder="Es. Ponte 8, vicino agli ascensori"></label>
       <label>Nota<textarea id="dNote" class="field" rows="3" placeholder="Facoltativa"></textarea></label>
       <button id="generateDuck" class="primary full">Genera Duck e QR code</button>
     </div>
   </article>
   <div class="notice" style="margin-top:12px"><strong>Perché il QR contiene solo il link?</strong><br>Così puoi aggiornare nave, luogo, stato e cronologia senza dover ristampare il QR.</div>
 `,"NUOVA DUCK");
 document.getElementById("backDuck").onclick=duckSection;
 const dateInput=document.getElementById("dDate");
 dateInput.value=new Date().toISOString().slice(0,10);
 document.getElementById("generateDuck").onclick=()=>{
   const name=document.getElementById("dName").value.trim();
   const ship=document.getElementById("dShip").value;
   const author=document.getElementById("dAuthor").value.trim();
   const date=document.getElementById("dDate").value;
   const place=document.getElementById("dPlace").value.trim();
   const note=document.getElementById("dNote").value.trim();
   if(!name || !author || !place){ alert("Compila almeno nome Duck, autore e luogo."); return; }
   const code=newDuckCode();
   const duck={code,name,ship,author,date,place,note,status:"Nascosta",history:[{type:"Creata e nascosta",date,place,ship,by:author}]};
   const list=loadDucks(); list.unshift(duck); saveDucks(list);
   duckQR(duck);
 };
}
function duckQR(duck){
 const url=duckUrl(duck.code);
 shell(`
   <button class="back" id="backToDuck">← Duck</button>
   <div class="qr-page">
     <div class="section-head"><div><h1>QR CODE CREATO</h1><p class="small">${escapeHtml(duck.name)}</p></div><span class="badge green">Pronto</span></div>
     <article class="card qr-card">
       <img class="qr-image" src="${qrImageUrl(url)}" alt="QR ${escapeHtml(duck.code)}">
       <div class="qr-code-label">${escapeHtml(duck.code)}</div>
       <p>Scansionando questo QR si apre direttamente la scheda della Duck.</p>
       <button id="openDuckNow" class="primary full">Apri scheda Duck</button>
     </article>
     <article class="card table" style="margin-top:12px">
       ${[["Nome",duck.name],["Codice",duck.code],["Nave",duck.ship],["Autore",duck.author],["Data",duck.date],["Luogo",duck.place],["Stato",duck.status]].map(r=>`<div class="row"><span>${escapeHtml(r[0])}</span><strong>${escapeHtml(r[1])}</strong></div>`).join("")}
     </article>
   </div>
 `,"QR DUCK");
 document.getElementById("backToDuck").onclick=duckSection;
 document.getElementById("openDuckNow").onclick=()=>duckDetail(duck.code);
}
function duckFind(){
 shell(`
   <button class="back" id="backDuck">← Duck</button>
   <h1>TROVA DUCK</h1>
   <article class="card"><div class="form">
     <label>Codice Duck<input id="findCode" class="field" placeholder="C360-XXXXXX"></label>
     <button id="findDuckBtn" class="primary full">Apri Duck</button>
   </div></article>
 `,"TROVA DUCK");
 document.getElementById("backDuck").onclick=duckSection;
 document.getElementById("findDuckBtn").onclick=()=>{
   const code=document.getElementById("findCode").value.trim().toUpperCase();
   const d=loadDucks().find(x=>x.code===code);
   if(!d){ alert("Duck non trovata su questo dispositivo."); return; }
   duckDetail(code);
 };
}
function duckDetail(code){
 const duck=loadDucks().find(x=>x.code===code);
 if(!duck){ duckNotFound(code); return; }
 shell(`
   <button class="back" id="backDuckList">← Duck</button>
   <div class="duck-detail-hero">
     <img src="duck.svg" alt="Duck">
     <div><span class="badge green">${escapeHtml(duck.status)}</span><h1>${escapeHtml(duck.name)}</h1><div class="small">${escapeHtml(duck.code)}</div></div>
   </div>

   <article class="card table">
     ${[["Codice",duck.code],["Creata da",duck.author],["Data creazione",duck.date],["Nave",duck.ship],["Ultimo luogo",duck.place],["Stato",duck.status]].map(r=>`<div class="row"><span>${escapeHtml(r[0])}</span><strong>${escapeHtml(r[1])}</strong></div>`).join("")}
   </article>

   <div class="duck-choice-grid">
     <button id="keepDuck" class="duck-choice keep">♥ La tengo</button>
     <button id="hideDuck" class="duck-choice hide">⌖ La nascondo di nuovo</button>
   </div>

   <section class="section">
     <div class="section-head"><h2>QR CODE</h2></div>
     <article class="card mini-qr-card">
       <img src="${qrImageUrl(duckUrl(duck.code))}" alt="QR ${escapeHtml(duck.code)}">
       <div><strong>${escapeHtml(duck.code)}</strong><p class="small">QR permanente collegato a questa Duck.</p></div>
     </article>
   </section>

   <section class="section">
     <div class="section-head"><h2>CRONOLOGIA</h2></div>
     <div class="history-list">
       ${(duck.history||[]).slice().reverse().map(h=>`<article class="card history-row"><div class="history-dot">•</div><div><strong>${escapeHtml(h.type)}</strong><div class="small">${escapeHtml(h.date)} · ${escapeHtml(h.ship)} · ${escapeHtml(h.place)}</div></div></article>`).join("")}
     </div>
   </section>
 `,"DUCK "+duck.code);
 document.getElementById("backDuckList").onclick=duckSection;
 document.getElementById("keepDuck").onclick=()=>{
   updateDuckAction(duck.code,"Tenuta","La tengo",duck.place);
 };
 document.getElementById("hideDuck").onclick=()=>duckRehide(duck.code);
}
function duckRehide(code){
 const duck=loadDucks().find(x=>x.code===code);
 shell(`
   <button class="back" id="backDetail">← Duck</button>
   <h1>NASCONDI DI NUOVO</h1>
   <article class="card"><div class="form">
     <label>Nave<select id="rehideShip" class="field">${ships.map(s=>`<option ${s.name===duck.ship?"selected":""}>${escapeHtml(s.name)}</option>`).join("")}</select></label>
     <label>Nuovo luogo<input id="rehidePlace" class="field" placeholder="Scrivi il luogo manualmente"></label>
     <button id="saveRehide" class="primary full">Conferma nascondimento</button>
   </div></article>
 `,"NASCONDI DUCK");
 document.getElementById("backDetail").onclick=()=>duckDetail(code);
 document.getElementById("saveRehide").onclick=()=>{
   const place=document.getElementById("rehidePlace").value.trim();
   const ship=document.getElementById("rehideShip").value;
   if(!place){alert("Inserisci il nuovo luogo.");return;}
   updateDuckAction(code,"Nascosta","Nascosta di nuovo",place,ship);
 };
}
function updateDuckAction(code,status,type,place,ship){
 const list=loadDucks();
 const idx=list.findIndex(x=>x.code===code);
 if(idx<0)return;
 const today=new Date().toISOString().slice(0,10);
 list[idx].status=status;
 if(place) list[idx].place=place;
 if(ship) list[idx].ship=ship;
 list[idx].history=list[idx].history||[];
 list[idx].history.push({type,date:today,place:list[idx].place,ship:list[idx].ship,by:"Utente"});
 saveDucks(list);
 duckDetail(code);
}
function duckNotFound(code){
 shell(`<div class="center" style="padding:40px 0"><img src="duck.svg" style="width:100px"><h1>Duck non trovata</h1><p class="small">${escapeHtml(code||"")}</p><div style="height:14px"></div><button class="secondary" id="goHomeDuck">Vai alla sezione Duck</button></div>`,"DUCK");
 document.getElementById("goHomeDuck").onclick=duckSection;
}

function placeholder(title){shell(`<div class="center" style="padding:40px 0"><h1>${title}</h1><p class="small">Questa sezione verrà collegata nella fase successiva.</p></div>`,title)}
function render(){
 if(state.view==="home")return home();
 if(state.view==="fleet")return fleet();
 if(state.view==="ship")return ship();
 if(state.view==="duckSearch")return duckSection();
 if(state.view==="profile")return placeholder("PROFILO");
 if(state.view==="badges")return placeholder("BADGE");
 home();
}
render();
