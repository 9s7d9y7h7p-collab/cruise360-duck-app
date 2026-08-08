
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
