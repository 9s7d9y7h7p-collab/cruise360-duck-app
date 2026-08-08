
const SUPABASE_URL = "https://xopszyaotcmztxcgvykn.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_Cz3tMMb-mkgfrXb04Zl8cg_GLXWtyc0";
const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

let ships = [{"name": "MSC Armonia", "cls": "Lirica", "year": 2001, "shipyard": "Chantiers de l’Atlantique", "length": "274,9 m", "width": "32 m", "tonnage": "65.542 GT", "decks": "13", "passengers": "2.620", "cabins": "976", "speed": "20,1 nodi", "ducks": 0}, {"name": "MSC Sinfonia", "cls": "Lirica", "year": 2002, "shipyard": "Chantiers de l’Atlantique", "length": "274,9 m", "width": "28,8 m", "tonnage": "65.591 GT", "decks": "13", "passengers": "2.646", "cabins": "976", "speed": "21,7 nodi", "ducks": 0}, {"name": "MSC Opera", "cls": "Lirica", "year": 2004, "shipyard": "Chantiers de l’Atlantique", "length": "274,9 m", "width": "28,8 m", "tonnage": "65.591 GT", "decks": "13", "passengers": "2.658", "cabins": "1.070", "speed": "20,3 nodi", "ducks": 0}, {"name": "MSC Lirica", "cls": "Lirica", "year": 2003, "shipyard": "Chantiers de l’Atlantique", "length": "274,9 m", "width": "28,8 m", "tonnage": "65.591 GT", "decks": "13", "passengers": "2.648", "cabins": "988", "speed": "21,7 nodi", "ducks": 0}, {"name": "MSC Musica", "cls": "Musica", "year": 2006, "shipyard": "Aker Yards France", "length": "293,8 m", "width": "32,2 m", "tonnage": "92.409 GT", "decks": "16", "passengers": "3.223", "cabins": "1.275", "speed": "22 nodi", "ducks": 0}, {"name": "MSC Orchestra", "cls": "Musica", "year": 2007, "shipyard": "Aker Yards France", "length": "293,8 m", "width": "32,2 m", "tonnage": "92.409 GT", "decks": "16", "passengers": "3.223", "cabins": "1.233", "speed": "22,9 nodi", "ducks": 0}, {"name": "MSC Poesia", "cls": "Musica", "year": 2008, "shipyard": "Aker Yards France", "length": "293,8 m", "width": "32,2 m", "tonnage": "92.627 GT", "decks": "16", "passengers": "3.223", "cabins": "1.223", "speed": "23 nodi", "ducks": 0}, {"name": "MSC Magnifica", "cls": "Musica", "year": 2010, "shipyard": "STX Europe", "length": "293,8 m", "width": "32,2 m", "tonnage": "95.128 GT", "decks": "16", "passengers": "3.223", "cabins": "1.259", "speed": "22,9 nodi", "ducks": 0}, {"name": "MSC Fantasia", "cls": "Fantasia", "year": 2008, "shipyard": "STX Europe", "length": "333,3 m", "width": "37,92 m", "tonnage": "137.936 GT", "decks": "18", "passengers": "4.363", "cabins": "1.636", "speed": "22,87 nodi", "ducks": 0}, {"name": "MSC Splendida", "cls": "Fantasia", "year": 2009, "shipyard": "STX Europe", "length": "333,3 m", "width": "37,92 m", "tonnage": "137.936 GT", "decks": "18", "passengers": "4.363", "cabins": "1.637", "speed": "22,87 nodi", "ducks": 0}, {"name": "MSC Divina", "cls": "Fantasia", "year": 2012, "shipyard": "STX France", "length": "333,3 m", "width": "37,92 m", "tonnage": "139.072 GT", "decks": "18", "passengers": "4.345", "cabins": "1.751", "speed": "23,75 nodi", "ducks": 0}, {"name": "MSC Preziosa", "cls": "Fantasia", "year": 2013, "shipyard": "STX France", "length": "333,3 m", "width": "37,92 m", "tonnage": "139.072 GT", "decks": "18", "passengers": "4.345", "cabins": "1.751", "speed": "24,21 nodi", "ducks": 0}, {"name": "MSC Meraviglia", "cls": "Meraviglia", "year": 2017, "shipyard": "STX France", "length": "315,83 m", "width": "43 m", "tonnage": "171.598 GT", "decks": "19", "passengers": "5.642", "cabins": "2.214", "speed": "22,89 nodi", "ducks": 0}, {"name": "MSC Bellissima", "cls": "Meraviglia", "year": 2019, "shipyard": "Chantiers de l’Atlantique", "length": "315,83 m", "width": "43 m", "tonnage": "171.598 GT", "decks": "19", "passengers": "5.654", "cabins": "2.217", "speed": "23,15 nodi", "ducks": 0}, {"name": "MSC Grandiosa", "cls": "Meraviglia Plus", "year": 2019, "shipyard": "Chantiers de l’Atlantique", "length": "331,43 m", "width": "43 m", "tonnage": "181.541 GT", "decks": "19", "passengers": "6.334", "cabins": "2.421", "speed": "20,1 nodi", "ducks": 0}, {"name": "MSC Virtuosa", "cls": "Meraviglia Plus", "year": 2021, "shipyard": "Chantiers de l’Atlantique", "length": "331 m", "width": "43 m", "tonnage": "181.541 GT", "decks": "19", "passengers": "6.334", "cabins": "2.421", "speed": "22,2 nodi", "ducks": 0}, {"name": "MSC Euribia", "cls": "Meraviglia Plus", "year": 2023, "shipyard": "Chantiers de l’Atlantique", "length": "331 m", "width": "43 m", "tonnage": "184.011 GT", "decks": "19", "passengers": "6.327", "cabins": "2.419", "speed": "22,3 nodi", "ducks": 0}, {"name": "MSC Seaside", "cls": "Seaside", "year": 2017, "shipyard": "Fincantieri", "length": "323 m", "width": "41 m", "tonnage": "153.516 GT", "decks": "20", "passengers": "5.084", "cabins": "2.026", "speed": "22,95 nodi", "ducks": 0}, {"name": "MSC Seaview", "cls": "Seaside", "year": 2018, "shipyard": "Fincantieri", "length": "323 m", "width": "41 m", "tonnage": "153.516 GT", "decks": "20", "passengers": "5.079", "cabins": "2.026", "speed": "22,98 nodi", "ducks": 0}, {"name": "MSC Seashore", "cls": "Seaside EVO", "year": 2021, "shipyard": "Fincantieri", "length": "339 m", "width": "41 m", "tonnage": "170.412 GT", "decks": "20", "passengers": "5.877", "cabins": "2.270", "speed": "21,8 nodi", "ducks": 0}, {"name": "MSC Seascape", "cls": "Seaside EVO", "year": 2022, "shipyard": "Fincantieri", "length": "339 m", "width": "41 m", "tonnage": "169.400 GT", "decks": "20", "passengers": "5.877", "cabins": "2.270", "speed": "21,8 nodi", "ducks": 0}, {"name": "MSC World Europa", "cls": "World Class", "year": 2022, "shipyard": "Chantiers de l’Atlantique", "length": "333,3 m", "width": "47 m", "tonnage": "215.863 GT", "decks": "22", "passengers": "6.762", "cabins": "2.626", "speed": "22,7 nodi", "ducks": 0}, {"name": "MSC World America", "cls": "World Class", "year": 2025, "shipyard": "Chantiers de l’Atlantique", "length": "333 m", "width": "47 m", "tonnage": "216.638 GT", "decks": "22", "passengers": "6.764", "cabins": "2.614", "speed": "22,7 nodi", "ducks": 0}];
let currentUser = null;
let state = {view:"home", ship:"MSC Seashore", filter:"Tutte", shipTab:"details"};
const app = document.getElementById("app");
const slug = n => n.toLowerCase().replace("msc ","").replaceAll(" ","-");

function escapeHtml(v){
  return String(v ?? "").replace(/[&<>"']/g, m => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m]));
}
function fmtDate(v){
  if(!v) return "—";
  try { return new Date(v).toLocaleDateString("it-IT"); } catch { return v; }
}
function statusLabel(v){
  return ({hidden:"Nascosta", found:"Trovata", kept:"Tenuta"})[v] || v || "—";
}
function actorMeta(e){
  const bits=[];
  if(e?.actor_name) bits.push(e.actor_name);
  if(e?.actor_country) bits.push(e.actor_country);
  return bits.join(" · ");
}
function dbShipToUi(s){
  return {
    name:s.name, cls:s.class_name, year:s.year, shipyard:s.shipyard,
    length:s.length_m != null ? String(s.length_m).replace(".",",")+" m" : "—",
    width:s.width_m != null ? String(s.width_m).replace(".",",")+" m" : "—",
    tonnage:s.tonnage_gt != null ? Number(s.tonnage_gt).toLocaleString("it-IT")+" GT" : "—",
    decks:s.decks ?? "—", passengers:s.passengers != null ? Number(s.passengers).toLocaleString("it-IT") : "—",
    cabins:s.cabins != null ? Number(s.cabins).toLocaleString("it-IT") : "—",
    speed:s.speed_knots != null ? String(s.speed_knots).replace(".",",")+" nodi" : "—",
    ducks:0, dbslug:s.slug
  };
}
async function loadShips(){
  const {data,error} = await db.from("ships").select("*").order("name");
  if(!error && data?.length) ships = data.map(dbShipToUi);
}
async function refreshDuckCounts(){
  const {data,error} = await db.from("ducks").select("current_ship_slug");
  if(error || !data) return;
  const counts = {};
  for(const d of data) if(d.current_ship_slug) counts[d.current_ship_slug]=(counts[d.current_ship_slug]||0)+1;
  ships.forEach(s => s.ducks = counts[s.dbslug || slug(s.name)] || 0);
}
async function refreshSession(){
  const {data:{session}} = await db.auth.getSession();
  currentUser = session?.user || null;
}
function shell(content,title="CRUISE360"){
 app.innerHTML=`<div class="app">
  <header class="topbar">
   <div class="brand"><img src="logo.jpeg" alt="Cruise360"><strong>${escapeHtml(title)}</strong></div>
   <button class="icon-btn" aria-label="Menu">☰</button>
  </header>
  <main>${content}</main>${nav()}</div>`;
 bind();
}
function nav(){return `<nav class="navbar"><div class="navinner">${[
 ["home","⌂","Home"],["fleet","🚢","Flotta"],["duckSearch","🦆","Duck"],["profile","👤","Profilo"],["badges","♡","Badge"]
].map(x=>`<button class="navbtn ${state.view===x[0]?"active":""}" data-go="${x[0]}"><b>${x[1]}</b>${x[2]}</button>`).join("")}</div></nav>`}
function bind(){document.querySelectorAll("[data-go]").forEach(x=>x.onclick=()=>go(x.dataset.go))}
function go(v){
 state.view=v;
 history.replaceState({}, "", location.pathname);
 render();
 window.scrollTo({top:0,behavior:"smooth"});
}

function home(){
 shell(`<section class="hero"><img src="seashore.jpeg" alt="MSC Seashore"><div class="hero-copy"><h1>Benvenuto a bordo!</h1><p>La tua avventura inizia qui.</p></div></section>
 <section class="section"><div class="section-head"><h2>Esplora Cruise360</h2></div><div class="grid">
 <article class="card action-card" data-go="fleet"><div class="action-icon">🚢</div><div><h3>Flotta MSC</h3><p>${ships.length} navi nel catalogo.</p></div></article>
 <article class="card action-card" data-go="duckSearch"><div class="action-icon">🦆</div><div><h3>Le mie Duck</h3><p>Trova o registra una Duck.</p></div></article>
 <article class="card action-card" data-go="badges"><div class="action-icon">🏆</div><div><h3>I miei Badge</h3><p>Segui i tuoi traguardi.</p></div></article>
 <article class="card action-card" data-go="profile"><div class="action-icon">👤</div><div><h3>Il mio Profilo</h3><p>${currentUser ? "Account collegato." : "Accedi o registrati."}</p></div></article>
 </div></section>`,"CRUISE360");
}

function fleet(){
 const classes=["Tutte",...Array.from(new Set(ships.map(s=>s.cls)))];
 shell(`<div class="fleet-heading"><h1>FLOTTA MSC</h1><p>Esplora tutte le ${ships.length} navi</p></div>
 <div class="search-wrap">⌕ <input id="q" class="search borderless" placeholder="Cerca una nave..."></div>
 <div class="tabs" style="margin:12px 0 14px">${classes.map(c=>`<button class="tab ${state.filter===c?"active":""}" data-class="${escapeHtml(c)}">${escapeHtml(c)}</button>`).join("")}</div>
 <div id="fleetGrid" class="grid fleet-grid"></div>`,"FLOTTA MSC");
 const draw=()=>{
   const q=document.getElementById("q").value.toLowerCase();
   const filtered=ships.filter(s=>(state.filter==="Tutte"||s.cls===state.filter)&&s.name.toLowerCase().includes(q));
   document.getElementById("fleetGrid").innerHTML=filtered.map(s=>`
   <article class="card ship-card" data-ship="${escapeHtml(s.name)}">
     <div class="ship-photo-wrap"><img class="ship-list-${slug(s.name)}" src="${slug(s.name)}.jpeg" alt="${escapeHtml(s.name)}"></div>
     <div class="ship-body"><div class="ship-title-row"><h3>${escapeHtml(s.name)}</h3><span class="ship-chevron">›</span></div>
     <div class="small">${escapeHtml(s.cls)}</div><div class="duck-count">🦆 ${s.ducks||0} Duck associate</div></div>
   </article>`).join("");
   document.querySelectorAll("[data-ship]").forEach(el=>el.onclick=()=>{state.ship=el.dataset.ship;state.shipTab="details";go("ship")});
 };
 draw();
 document.getElementById("q").oninput=draw;
 document.querySelectorAll("[data-class]").forEach(b=>b.onclick=()=>{state.filter=b.dataset.class;fleet()});
}

async function ship(){
 const s=ships.find(x=>x.name===state.ship)||ships[0];
 const shipSlug=s.dbslug||slug(s.name);
 const tab=state.shipTab||"details";
 let panel="";
 if(tab==="details"){
   panel=`<section class="section"><div class="section-head"><h2>DATI TECNICI</h2></div><article class="card table">${
     [["Nome",s.name],["Classe",s.cls],["Anno",s.year],["Cantiere",s.shipyard],["Lunghezza",s.length],["Larghezza",s.width],["Stazza",s.tonnage],["Ponti",s.decks],["Passeggeri",s.passengers],["Cabine",s.cabins],["Velocità",s.speed]]
     .map(r=>`<div class="row"><span>${escapeHtml(r[0])}</span><strong>${escapeHtml(r[1])}</strong></div>`).join("")
   }</article></section>
   <section class="section"><article class="card"><div class="section-head"><h2>🦆 DUCK ASSOCIATE</h2><span class="badge blue">${s.ducks||0}</span></div><p>Duck attualmente associate a questa nave.</p><div style="height:10px"></div><button class="primary full" data-shiptab="ducks">Visualizza Duck</button></article></section>`;
 } else if(tab==="ducks"){
   panel=`<section class="section"><div class="section-head"><h2>DUCK ASSOCIATE</h2></div><div id="shipDuckList"><article class="card empty-panel"><h3>Caricamento...</h3></article></div></section>`;
 } else {
   panel=`<section class="section"><div class="section-head"><h2>CRONOLOGIA</h2></div><div id="shipHistory"><article class="card empty-panel"><h3>Caricamento...</h3></article></div></section>`;
 }
 shell(`<button class="back" data-go="fleet">← Flotta</button>
 <div class="ship-hero-card"><img class="detail-image ship-detail-${slug(s.name)}" src="${slug(s.name)}.jpeg" alt="${escapeHtml(s.name)}">
 <div class="ship-overlay"><h1>${escapeHtml(s.name)}</h1><div>${escapeHtml(s.cls)}</div></div></div>
 <section class="section"><div class="detail-tabs">
   <button class="detail-tab ${tab==="details"?"active":""}" data-shiptab="details">Dettagli</button>
   <button class="detail-tab ${tab==="ducks"?"active":""}" data-shiptab="ducks">Duck associate</button>
   <button class="detail-tab ${tab==="history"?"active":""}" data-shiptab="history">Cronologia</button>
 </div></section>${panel}`,s.name);
 document.querySelectorAll("[data-shiptab]").forEach(b=>b.onclick=()=>{state.shipTab=b.dataset.shiptab;ship()});
 if(tab==="ducks"){
   const {data,error}=await db.from("ducks").select("code,name,status,current_place,updated_at").eq("current_ship_slug",shipSlug).order("updated_at",{ascending:false});
   const box=document.getElementById("shipDuckList");
   if(error) box.innerHTML=`<div class="notice">Errore nel caricamento.</div>`;
   else if(!data?.length) box.innerHTML=`<article class="card empty-panel"><img src="duck.svg"><h3>Nessuna Duck registrata</h3><p>Quando una Cruise Duck sarà associata a ${escapeHtml(s.name)}, comparirà qui.</p></article>`;
   else box.innerHTML=data.map(d=>`<article class="card saved-duck" data-openduck="${escapeHtml(d.code)}"><img src="duck.svg"><div class="grow"><strong>${escapeHtml(d.name)}</strong><div class="small">${escapeHtml(d.code)} · ${statusLabel(d.status)} · ${escapeHtml(d.current_place||"")}</div></div><span class="ship-chevron">›</span></article>`).join("");
   box.querySelectorAll("[data-openduck]").forEach(x=>x.onclick=()=>duckDetail(x.dataset.openduck));
 }
 if(tab==="history"){
   const {data,error}=await db.from("duck_events").select("event_type,place,created_at,ducks(code,name)").eq("ship_slug",shipSlug).order("created_at",{ascending:false}).limit(50);
   const box=document.getElementById("shipHistory");
   if(error) box.innerHTML=`<div class="notice">Errore nel caricamento.</div>`;
   else if(!data?.length) box.innerHTML=`<article class="card empty-panel"><div class="history-icon">◷</div><h3>Nessuna attività ancora</h3><p>Nascondimenti e ritrovamenti relativi a questa nave compariranno qui.</p></article>`;
   else box.innerHTML=data.map(e=>`<article class="card history-row"><div class="history-dot">•</div><div><strong>${escapeHtml(e.ducks?.name||e.ducks?.code||"Duck")} · ${escapeHtml(statusLabel(e.event_type))}</strong><div class="small">${fmtDate(e.created_at)} · ${escapeHtml(e.place||"")}</div></div></article>`).join("");
 }
}

function newDuckCode(){
 const chars="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
 let out="C360-";
 for(let i=0;i<6;i++) out+=chars[Math.floor(Math.random()*chars.length)];
 return out;
}
const PUBLIC_APP_URL = "https://cruise360-duck-app.vercel.app";
function duckUrl(code){
 return PUBLIC_APP_URL + "/?duck=" + encodeURIComponent(code);
}
function qrImageUrl(text){
 return "https://api.qrserver.com/v1/create-qr-code/?size=420x420&margin=18&data=" + encodeURIComponent(text);
}

async function duckSection(){
 let saved=[];
 if(currentUser){
   const {data}=await db.from("ducks").select("code,name,status,current_ship_slug,current_place,created_at").eq("created_by",currentUser.id).order("created_at",{ascending:false});
   saved=data||[];
 }
 shell(`
   <div class="section-head"><div><h1 style="margin-bottom:4px">DUCK</h1><p class="small">Registra, genera il QR e segui ogni Cruise Duck.</p></div></div>
   <div class="duck-actions-grid">
     <article class="card duck-action" id="createDuckAction"><div class="duck-action-icon">＋</div><div><h3>Crea una nuova Duck</h3><p>${currentUser?"Genera un QR collegato al database.":"Accedi per creare una Duck."}</p></div></article>
     <article class="card duck-action" id="findDuckAction"><div class="duck-action-icon">⌕</div><div><h3>Trova una Duck</h3><p>Apri una Duck tramite il suo codice.</p></div></article>
   </div>
   <section class="section">
     <div class="section-head"><h2>LE MIE DUCK</h2><span class="badge blue">${saved.length}</span></div>
     ${!currentUser ? `<div class="notice">Accedi dal Profilo per vedere e creare le tue Duck.</div>` :
       saved.length ? saved.map(d=>`<article class="card saved-duck" data-openduck="${escapeHtml(d.code)}"><img src="duck.svg"><div class="grow"><strong>${escapeHtml(d.name)}</strong><div class="small">${escapeHtml(d.code)} · ${statusLabel(d.status)}</div></div><span class="ship-chevron">›</span></article>`).join("") :
       `<article class="card empty-panel"><img src="duck.svg"><h3>Nessuna Duck creata</h3><p>Crea la prima Duck e genera il suo QR code.</p></article>`}
   </section>
 `,"DUCK");
 document.getElementById("createDuckAction").onclick=()=> currentUser ? duckCreate() : profile();
 document.getElementById("findDuckAction").onclick=duckFind;
 document.querySelectorAll("[data-openduck]").forEach(x=>x.onclick=()=>duckDetail(x.dataset.openduck));
}

function duckCreate(){
 const opts=ships.map(s=>`<option value="${escapeHtml(s.dbslug||slug(s.name))}">${escapeHtml(s.name)}</option>`).join("");
 shell(`<button class="back" id="backDuck">← Duck</button><div class="section-head"><div><h1>NUOVA DUCK</h1><p class="small">Il QR aprirà sempre la scheda online aggiornata.</p></div></div>
 <article class="card"><div class="form">
 <label>Nome della Duck<input id="dName" class="field" placeholder="Es. Sunny Explorer"></label>
 <label>Nave<select id="dShip" class="field">${opts}</select></label>
 <label>Luogo iniziale<input id="dPlace" class="field" placeholder="Es. Ponte 8, vicino agli ascensori"></label>
 <label>Nota<textarea id="dNote" class="field" rows="3" placeholder="Facoltativa"></textarea></label>
 <button id="generateDuck" class="primary full">Crea Duck e genera QR</button>
 </div></article>`,"NUOVA DUCK");
 document.getElementById("backDuck").onclick=duckSection;
 document.getElementById("generateDuck").onclick=async()=>{
   const name=document.getElementById("dName").value.trim();
   const ship=document.getElementById("dShip").value;
   const place=document.getElementById("dPlace").value.trim();
   const note=document.getElementById("dNote").value.trim();
   if(!name||!place){alert("Compila nome Duck e luogo.");return;}
   let code,created,error;
   for(let i=0;i<5;i++){
     code=newDuckCode();
     ({data:created,error}=await db.from("ducks").insert({code,name,created_by:currentUser.id,current_ship_slug:ship,current_place:place,status:"hidden",note}).select().single());
     if(!error) break;
   }
   if(error){alert("Errore nella creazione della Duck: "+error.message);return;}
   await db.from("duck_events").insert({duck_id:created.id,event_type:"created",ship_slug:ship,place,actor_id:currentUser.id});
   await refreshDuckCounts();
   duckQR(created);
 };
}

function duckQR(duck){
 const url=duckUrl(duck.code);
 const ship=ships.find(s=>(s.dbslug||slug(s.name))===duck.current_ship_slug)?.name||duck.current_ship_slug;
 shell(`<button class="back" id="backDuck">← Duck</button>
 <div class="qr-page"><div class="section-head"><div><h1>QR CODE CREATO</h1><p class="small">${escapeHtml(duck.name)}</p></div><span class="badge green">Online</span></div>
 <article class="card qr-card"><img class="qr-image" src="${qrImageUrl(url)}"><div class="qr-code-label">${escapeHtml(duck.code)}</div><p>Questo QR apre la scheda online della Duck da qualsiasi telefono.</p><button id="openDuck" class="primary full">Apri scheda Duck</button></article>
 <article class="card table" style="margin-top:12px">${[["Nome",duck.name],["Codice",duck.code],["Nave",ship],["Luogo",duck.current_place],["Stato",statusLabel(duck.status)]].map(r=>`<div class="row"><span>${escapeHtml(r[0])}</span><strong>${escapeHtml(r[1])}</strong></div>`).join("")}</article></div>`,"QR DUCK");
 document.getElementById("backDuck").onclick=duckSection;
 document.getElementById("openDuck").onclick=()=>duckDetail(duck.code);
}

function duckFind(){
 shell(`<button class="back" id="backDuck">← Duck</button><h1>TROVA DUCK</h1><article class="card"><div class="form"><label>Codice Duck<input id="findCode" class="field" placeholder="C360-XXXXXX"></label><button id="findDuckBtn" class="primary full">Apri Duck</button></div></article>`,"TROVA DUCK");
 document.getElementById("backDuck").onclick=duckSection;
 document.getElementById("findDuckBtn").onclick=()=>duckDetail(document.getElementById("findCode").value.trim().toUpperCase());
}

async function duckDetail(code){
 history.replaceState({}, "", location.pathname+"?duck="+encodeURIComponent(code));
 const {data:duck,error}=await db.from("ducks").select("*").eq("code",code).maybeSingle();
 if(error||!duck){duckNotFound(code);return;}
 const {data:events}=await db.from("duck_events").select("*").eq("duck_id",duck.id).order("created_at",{ascending:false});
 const ship=ships.find(s=>(s.dbslug||slug(s.name))===duck.current_ship_slug)?.name||duck.current_ship_slug||"—";
 const latestKept=(events||[]).find(e=>e.event_type==="kept");

 const holderLine = duck.status==="kept" && latestKept?.actor_name
   ? `<div class="row"><span>Tenuta da</span><strong>${escapeHtml(latestKept.actor_name)}${latestKept.actor_country?` · ${escapeHtml(latestKept.actor_country)}`:""}</strong></div>`
   : "";

 shell(`<button class="back" id="backDuckList">← Duck</button>
 <div class="duck-detail-hero"><img src="duck.svg"><div><span class="badge green">${escapeHtml(statusLabel(duck.status))}</span><h1>${escapeHtml(duck.name)}</h1><div class="small">${escapeHtml(duck.code)}</div></div></div>
 <article class="card table">
 ${[["Codice",duck.code],["Nave",ship],["Ultimo luogo",duck.current_place||"—"],["Stato",statusLabel(duck.status)],["Creata",fmtDate(duck.created_at)]]
   .map(r=>`<div class="row"><span>${escapeHtml(r[0])}</span><strong>${escapeHtml(r[1])}</strong></div>`).join("")}
 ${holderLine}
 </article>

 <div class="duck-choice-grid">
   <button id="keepDuck" class="duck-choice keep" ${duck.status==="kept"?"disabled":""}>
     ♥ ${duck.status==="kept"?"Duck già tenuta":"La tengo"}
   </button>
   <button id="hideDuck" class="duck-choice hide">⌖ La nascondo di nuovo</button>
 </div>

 ${!currentUser ? `
 <section class="section guest-invite-section">
   <article class="card guest-invite-card">
     <div class="guest-invite-icon">👤+</div>
     <div class="guest-invite-copy">
       <h3>Vuoi entrare in Cruise360?</h3>
       <p>Puoi partecipare anche senza account. Registrandoti gratuitamente avrai un profilo personale e potrai continuare a far parte della community Cruise360.</p>
     </div>
     <button id="guestSignup" class="primary full">Crea un account gratuito</button>
     <button id="guestLater" class="secondary full">Continua senza account</button>
   </article>
 </section>` : ""}

 <section class="section"><div class="section-head"><h2>QR CODE</h2></div>
 <article class="card mini-qr-card"><img src="${qrImageUrl(duckUrl(duck.code))}">
 <div><strong>${escapeHtml(duck.code)}</strong><p class="small">QR permanente collegato alla scheda online.</p></div></article></section>

 <section class="section"><div class="section-head"><h2>CRONOLOGIA</h2></div>
 ${events?.length ? events.map(e=>`
   <article class="card history-row">
     <div class="history-dot">•</div>
     <div>
       <strong>${escapeHtml(statusLabel(e.event_type))}${e.actor_name?` · ${escapeHtml(e.actor_name)}`:""}</strong>
       <div class="small">${fmtDate(e.created_at)} · ${escapeHtml(e.place||"")}${e.actor_country?` · ${escapeHtml(e.actor_country)}`:""}</div>
       ${e.event_note?`<div class="event-note">${escapeHtml(e.event_note)}</div>`:""}
     </div>
   </article>`).join("")
 : `<article class="card empty-panel"><h3>Nessuna attività</h3></article>`}
 </section>`,"DUCK "+duck.code);

 document.getElementById("backDuckList").onclick=()=>{history.replaceState({},"",location.pathname);duckSection()};
 const keepBtn=document.getElementById("keepDuck");
 if(keepBtn && duck.status!=="kept") keepBtn.onclick=()=>duckKeepConfirm(duck);
 document.getElementById("hideDuck").onclick=()=>duckRehide(duck.code,duck.current_ship_slug);
 const guestSignup=document.getElementById("guestSignup");
 if(guestSignup) guestSignup.onclick=()=>openGuestSignup(duck.code);
 const guestLater=document.getElementById("guestLater");
 if(guestLater) guestLater.onclick=()=>document.querySelector(".guest-invite-section")?.remove();
}

function duckKeepConfirm(duck){
 shell(`<button class="back" id="backDetail">← Duck</button>
 <div class="section-head"><div><h1>LA TENGO</h1><p class="small">Conferma che vuoi tenere ${escapeHtml(duck.name)}.</p></div></div>

 <article class="card">
   <div class="confirm-banner">
     <img src="duck.svg">
     <div><strong>${escapeHtml(duck.name)}</strong><div class="small">${escapeHtml(duck.code)}</div></div>
   </div>

   <div class="form">
     <label>Nome o nickname <span class="required">*</span>
       <input id="keepName" class="field" maxlength="40" placeholder="Es. Marco">
     </label>
     <label>Città / Paese <span class="optional">facoltativo</span>
       <input id="keepCountry" class="field" maxlength="60" placeholder="Es. Brescia, Italia">
     </label>
     <label>Nota <span class="optional">facoltativa</span>
       <textarea id="keepNote" class="field" rows="3" maxlength="180" placeholder="Es. La porterò sulla prossima crociera"></textarea>
     </label>

     <div class="privacy-note">Queste informazioni saranno visibili nella cronologia pubblica della Duck. Non inserire email, telefono o altri dati sensibili.</div>
     <button id="confirmKeep" class="duck-choice keep full">♥ Sì, tengo questa Duck</button>
   </div>
 </article>`,"CONFERMA DUCK");

 document.getElementById("backDetail").onclick=()=>duckDetail(duck.code);

 document.getElementById("confirmKeep").onclick=async()=>{
   const btn=document.getElementById("confirmKeep");
   const name=document.getElementById("keepName").value.trim();
   const country=document.getElementById("keepCountry").value.trim();
   const note=document.getElementById("keepNote").value.trim();

   if(!name){alert("Inserisci almeno un nome o nickname.");return;}

   btn.disabled=true;
   btn.textContent="Salvataggio...";

   const ok=await duckAction(
     duck.code,
     "kept",
     duck.current_ship_slug,
     duck.current_place,
     name,
     country,
     note
   );

   if(!ok){
     btn.disabled=false;
     btn.textContent="♥ Sì, tengo questa Duck";
   }
 };
}

async function duckAction(code,eventType,shipSlug,place,actorName="",actorCountry="",eventNote=""){
 const {error}=await db.rpc("record_duck_action",{
   p_code:code,
   p_event_type:eventType,
   p_ship_slug:shipSlug,
   p_place:place,
   p_actor_name:actorName || null,
   p_actor_country:actorCountry || null,
   p_event_note:eventNote || null
 });

 if(error){
   const msg=(error.message||"").toLowerCase();
   if(msg.includes("già") || msg.includes("already")){
     alert("Questa azione è già stata registrata.");
     await duckDetail(code);
     return false;
   }
   alert("Operazione non disponibile: "+error.message);
   return false;
 }

 await refreshDuckCounts();
 if(!currentUser && (eventType==="kept" || eventType==="hidden")){
   guestActionSuccess(code,eventType);
 } else {
   await duckDetail(code);
 }
 return true;
}

function duckRehide(code,currentShip){
 const opts=ships.map(s=>`<option value="${escapeHtml(s.dbslug||slug(s.name))}" ${(s.dbslug||slug(s.name))===currentShip?"selected":""}>${escapeHtml(s.name)}</option>`).join("");

 shell(`<button class="back" id="backDetail">← Duck</button>
 <h1>NASCONDI DI NUOVO</h1>

 <article class="card"><div class="form">
   <label>Nave
     <select id="rehideShip" class="field">${opts}</select>
   </label>

   <label>Nuovo nascondiglio <span class="required">*</span>
     <input id="rehidePlace" class="field" placeholder="Es. Ponte 8, vicino agli ascensori">
   </label>

   <label>Nome o nickname <span class="required">*</span>
     <input id="rehideName" class="field" maxlength="40" placeholder="Es. Marco">
   </label>

   <label>Città / Paese <span class="optional">facoltativo</span>
     <input id="rehideCountry" class="field" maxlength="60" placeholder="Es. Brescia, Italia">
   </label>

   <label>Nota <span class="optional">facoltativa</span>
     <textarea id="rehideNote" class="field" rows="3" maxlength="180" placeholder="Es. Nascosta vicino alla libreria"></textarea>
   </label>

   <div class="privacy-note">Nome/nickname, città/Paese e nota saranno visibili nella cronologia pubblica della Duck.</div>
   <button id="saveRehide" class="primary full">Conferma nascondiglio</button>
 </div></article>`,"NASCONDI DUCK");

 document.getElementById("backDetail").onclick=()=>duckDetail(code);

 document.getElementById("saveRehide").onclick=async()=>{
   const btn=document.getElementById("saveRehide");
   const place=document.getElementById("rehidePlace").value.trim();
   const name=document.getElementById("rehideName").value.trim();
   const country=document.getElementById("rehideCountry").value.trim();
   const note=document.getElementById("rehideNote").value.trim();

   if(!place){alert("Inserisci il nuovo nascondiglio.");return;}
   if(!name){alert("Inserisci almeno un nome o nickname.");return;}

   btn.disabled=true;
   btn.textContent="Salvataggio...";

   const ok=await duckAction(
     code,
     "hidden",
     document.getElementById("rehideShip").value,
     place,
     name,
     country,
     note
   );

   if(!ok){
     btn.disabled=false;
     btn.textContent="Conferma nascondiglio";
   }
 };
}
function openGuestSignup(code){
 state.inviteDuckCode=code;
 profile();
}

function guestActionSuccess(code,eventType){
 const actionText=eventType==="kept"
   ? "Hai scelto di tenere questa Duck."
   : "Hai registrato il nuovo nascondiglio.";

 shell(`<button class="back" id="guestBackDuck">← Duck</button>
 <div class="guest-success">
   <div class="guest-success-icon">✓</div>
   <h1>Fatto!</h1>
   <p>${escapeHtml(actionText)}</p>

   <article class="card guest-invite-card guest-invite-after">
     <div class="guest-invite-icon">👤+</div>
     <div class="guest-invite-copy">
       <h3>Vuoi creare il tuo profilo?</h3>
       <p>Registrati gratuitamente a Cruise360 oppure continua senza account.</p>
     </div>
     <button id="afterSignup" class="primary full">Crea il mio account</button>
     <button id="afterContinue" class="secondary full">Continua senza account</button>
   </article>
 </div>`,"CRUISE360");

 document.getElementById("guestBackDuck").onclick=()=>duckDetail(code);
 document.getElementById("afterSignup").onclick=()=>openGuestSignup(code);
 document.getElementById("afterContinue").onclick=()=>duckDetail(code);
}

function duckNotFound(code){
 shell(`<div class="center" style="padding:40px 0"><img src="duck.svg" style="width:100px"><h1>Duck non trovata</h1><p class="small">${escapeHtml(code||"")}</p><div style="height:14px"></div><button class="secondary" id="goDuck">Vai alla sezione Duck</button></div>`,"DUCK");
 document.getElementById("goDuck").onclick=()=>{history.replaceState({},"",location.pathname);duckSection()};
}

async function profile(){
 if(!currentUser){
   const inviteCode=state.inviteDuckCode||"";
   shell(`${inviteCode?`
   <button class="back" id="backToInvitedDuck">← Torna alla Duck</button>
   <div class="invite-profile-banner">
     <strong>Hai trovato una Cruise Duck 🎉</strong>
     <p>Registrati gratuitamente per entrare nella community Cruise360.</p>
   </div>`:""}
   <div class="center"><img class="profile-avatar" src="logo.jpeg"><h1>${inviteCode?"Crea il tuo account":"Profilo Cruise360"}</h1><p class="small">${inviteCode?"Bastano email e password.":"Accedi per creare Duck e sincronizzare i dati."}</p></div>
   <section class="section"><article class="card"><div class="form">
    <label>Email<input id="authEmail" class="field" type="email" autocomplete="email"></label>
    <label>Password<input id="authPassword" class="field" type="password" autocomplete="current-password"></label>
    <button id="loginBtn" class="primary full">Accedi</button>
    <button id="signupBtn" class="secondary full">${inviteCode?"Registrati gratis":"Crea account"}</button>
   </div></article></section>`,"PROFILO");
   const backInvite=document.getElementById("backToInvitedDuck");
   if(backInvite) backInvite.onclick=()=>{const c=state.inviteDuckCode;state.inviteDuckCode=null;duckDetail(c)};
   document.getElementById("loginBtn").onclick=async()=>{
     const email=document.getElementById("authEmail").value.trim(), password=document.getElementById("authPassword").value;
     const {error}=await db.auth.signInWithPassword({email,password});
     if(error){alert(error.message);return;}
     await refreshSession();
     if(state.inviteDuckCode){
       const c=state.inviteDuckCode;
       state.inviteDuckCode=null;
       duckDetail(c);
     } else {
       profile();
     }
   };
   document.getElementById("signupBtn").onclick=async()=>{
     const email=document.getElementById("authEmail").value.trim(), password=document.getElementById("authPassword").value;
     if(password.length<6){alert("Usa una password di almeno 6 caratteri.");return;}
     const {error}=await db.auth.signUp({email,password});
     if(error){alert(error.message);return;}
     if(state.inviteDuckCode){
       alert("Account creato! Controlla l'email per confermare la registrazione. Poi torna su Cruise360 e accedi.");
     } else {
       alert("Account creato. Se Supabase richiede la conferma email, apri il messaggio ricevuto e conferma.");
     }
   };
   return;
 }
 shell(`<div class="center"><img class="profile-avatar" src="logo.jpeg"><h1>Profilo</h1><div class="small">${escapeHtml(currentUser.email||"")}</div></div>
 <section class="section"><article class="card"><div class="form"><button id="logoutBtn" class="secondary full">Esci dall'account</button></div></article></section>`,"PROFILO");
 document.getElementById("logoutBtn").onclick=async()=>{await db.auth.signOut();currentUser=null;profile()};
}
function badges(){
 shell(`<h1>I miei Badge</h1><div class="notice">I badge verranno collegati alle crociere verificate nella fase successiva.</div>`,"BADGE");
}

function render(){
 if(state.view==="home") return home();
 if(state.view==="fleet") return fleet();
 if(state.view==="ship") return ship();
 if(state.view==="duckSearch") return duckSection();
 if(state.view==="profile") return profile();
 if(state.view==="badges") return badges();
 home();
}
async function init(){
 await refreshSession();
 await loadShips();
 await refreshDuckCounts();
 db.auth.onAuthStateChange((_event,session)=>{currentUser=session?.user||null;});
 const code=new URLSearchParams(location.search).get("duck");
 if(code) await duckDetail(code); else render();
}
init();
