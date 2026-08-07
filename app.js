
const ships=[
 {name:"MSC Seashore",cls:"Seaside EVO",year:2021,ducks:38},
 {name:"MSC World Europa",cls:"World Class",year:2022,ducks:42},
 {name:"MSC Grandiosa",cls:"Meraviglia Plus",year:2019,ducks:35},
 {name:"MSC Seaside",cls:"Seaside",year:2017,ducks:27}
];
const ducks=[
 {code:"C360-0042",name:"Sunny Seashore",author:"Nicola",date:"5 ottobre 2026",status:"Nascosta",place:"Vicino agli ascensori di poppa, ponte 8"},
 {code:"C360-0081",name:"Sea Captain",author:"Marco",date:"6 ottobre 2026",status:"Trovata",place:"Promenade"},
 {code:"C360-0093",name:"Yellow Explorer",author:"Anna",date:"7 ottobre 2026",status:"Nascosta",place:"Area lounge, ponte 6"}
];
let state={view:"home",ship:"MSC Seashore",duck:"C360-0042"};
const app=document.getElementById("app");

function shell(content,title="CRUISE360",nav=true){
 app.innerHTML=`<div class="app">
  <header class="topbar">
    <div class="brand"><img src="logo.jpeg" onerror="this.src='logo.svg'" alt="Cruise360"><strong>${title}</strong></div>
    <button class="icon-btn">☰</button>
  </header>
  <main>${content}</main>
  ${nav?navBar():""}
 </div>`;
 bind();
}
function navBar(){return `<nav class="navbar"><div class="navinner">
 ${nb("home","⌂","Home")}${nb("fleet","🚢","Flotta")}${nb("duckSearch","🦆","Duck")}${nb("profile","👤","Profilo")}${nb("badges","♡","Badge")}
 </div></nav>`}
function nb(v,i,l){return `<button class="navbtn ${state.view===v?"active":""}" data-go="${v}"><b>${i}</b>${l}</button>`}
function bind(){document.querySelectorAll("[data-go]").forEach(x=>x.addEventListener("click",()=>go(x.dataset.go)))}
function go(v){state.view=v;render();window.scrollTo({top:0,behavior:"smooth"})}
function render(){({home,fleet,ship,ducklist,duck,duckSearch,profile,badges,login,register,cruises}[state.view]||home)()}

function home(){
 shell(`
  <section class="hero">
    <img src="seashore.jpeg" alt="MSC Seashore">
    <div class="hero-copy"><h1>Benvenuto a bordo,<br>Nicola!</h1><p>La tua avventura inizia qui.</p></div>
  </section>
  <section class="section">
    <div class="section-head"><h2>Esplora Cruise360</h2></div>
    <div class="grid">
      <article class="card action-card" data-go="fleet"><div class="action-icon">🚢</div><div><h3>Flotta MSC</h3><p>Scopri tutte le navi.</p></div></article>
      <article class="card action-card" data-go="duckSearch"><div class="action-icon">🦆</div><div><h3>Le mie Duck</h3><p>Trova o registra una Duck.</p></div></article>
      <article class="card action-card" data-go="badges"><div class="action-icon">🏆</div><div><h3>I miei Badge</h3><p>Segui i tuoi traguardi.</p></div></article>
      <article class="card action-card" data-go="profile"><div class="action-icon">👤</div><div><h3>Il mio Profilo</h3><p>Crociere e statistiche.</p></div></article>
    </div>
  </section>
  <section class="section">
    <article class="card" style="display:flex;align-items:center;gap:14px">
      <img src="duck.svg" alt="Duck" style="width:84px">
      <div><h3 style="margin-top:0">Scansiona una Duck</h3><p>Apri subito la sua storia tramite QR o codice.</p><div style="height:10px"></div><button class="primary" data-go="duckSearch">Scansiona Duck</button></div>
    </article>
  </section>`,"CRUISE360");
}
function fleet(){
 shell(`
  <h1>FLOTTA MSC</h1>
  <input id="q" class="search" placeholder="Cerca una nave...">
  <div class="tabs" style="margin:12px 0"><button class="tab active">Tutte</button><button class="tab">Seaside</button><button class="tab">World</button><button class="tab">Meraviglia</button></div>
  <div class="grid">${ships.map(s=>`<article class="card ship-card" data-ship="${s.name}">
   <img src="seashore.jpeg" alt="${s.name}">
   <div class="ship-body"><h3>${s.name}</h3><div class="small">${s.cls}</div><div class="duck-count">🦆 ${s.ducks} Duck associate</div></div>
  </article>`).join("")}</div>`,"FLOTTA MSC");
 document.querySelectorAll("[data-ship]").forEach(el=>el.addEventListener("click",()=>{state.ship=el.dataset.ship;go("ship")}));
 document.getElementById("q").addEventListener("input",e=>{const q=e.target.value.toLowerCase();document.querySelectorAll("[data-ship]").forEach(el=>el.style.display=el.dataset.ship.toLowerCase().includes(q)?"":"none")})
}
function ship(){
 const s=ships.find(x=>x.name===state.ship)||ships[0];
 shell(`
  <button class="back" data-go="fleet">← Flotta</button>
  <img class="detail-image" src="seashore.jpeg" alt="${s.name}">
  <section class="section" style="margin-top:14px"><h1 style="margin-bottom:3px">${s.name}</h1><div class="small">${s.cls}</div></section>
  <section class="section"><div class="section-head"><h2>DATI TECNICI</h2></div>
    <article class="card table">${[
      ["Nome",s.name],["Classe",s.cls],["Anno",s.year],["Cantiere","Fincantieri"],["Lunghezza","339 m"],["Larghezza","41 m"],["Stazza","170.412 GT"],["Ponti","20"],["Passeggeri","5.632"],["Cabine","2.270"],["Velocità","22,9 nodi"]
    ].map(r=>`<div class="row"><span>${r[0]}</span><strong>${r[1]}</strong></div>`).join("")}</article>
  </section>
  <section class="section"><article class="card">
   <div class="section-head"><h2>🦆 DUCK ASSOCIATE</h2><span class="badge blue">${s.ducks}</span></div>
   <p>${s.ducks} Duck registrate su questa nave</p><div style="height:10px"></div>
   <button class="primary full" data-go="ducklist">Visualizza Duck</button>
  </article></section>
  <section class="section"><div class="section-head"><h2>CRONOLOGIA DUCK</h2></div>
   <div class="list"><div class="item"><div class="thumb"><img src="duck.svg"></div><div class="grow"><strong>C360-0042 nascosta</strong><div class="small">Ponte 16 · oggi</div></div></div>
   <div class="item"><div class="thumb"><img src="duck.svg"></div><div class="grow"><strong>C360-0081 trovata</strong><div class="small">Atrio, ponte 5 · ieri</div></div></div></div>
  </section>` , s.name);
}
function ducklist(){
 shell(`<button class="back" data-go="ship">← ${state.ship}</button><h1>Duck associate</h1>
  <div class="list">${ducks.map(d=>`<article class="item" data-duck="${d.code}"><div class="thumb"><img src="duck.svg"></div><div class="grow"><strong>${d.name}</strong><div class="small">${d.code}<br>${d.date} · ${d.author}</div></div><span class="badge ${d.status==="Nascosta"?"green":"blue"}">${d.status}</span></article>`).join("")}</div>`,"DUCK");
 document.querySelectorAll("[data-duck]").forEach(el=>el.addEventListener("click",()=>{state.duck=el.dataset.duck;go("duck")}))
}
function duckSearch(){
 shell(`<h1>Duck</h1><article class="card"><div class="form"><label>Codice Duck<input id="duckcode" class="field" placeholder="C360-0042"></label><button id="open" class="primary">Apri Duck</button></div></article><div class="notice" style="margin-top:12px">Per provare usa <strong>C360-0042</strong>.</div>`,"DUCK");
 document.getElementById("open").addEventListener("click",()=>{const v=document.getElementById("duckcode").value.trim().toUpperCase();if(ducks.some(d=>d.code===v)){state.duck=v;go("duck")}else alert("Duck non trovata")})
}
function duck(){
 const d=ducks.find(x=>x.code===state.duck)||ducks[0];
 shell(`
  <button class="back" data-go="ducklist">← Indietro</button>
  <div class="duckhero"><img src="duck.svg" alt="Duck"></div>
  <section class="section" style="margin-top:14px"><div class="section-head"><div><h1 style="margin:0">${d.name}</h1><div class="small">${d.code}</div></div><span class="badge green">In viaggio</span></div></section>
  <article class="card table">${[["Codice",d.code],["Creata da",d.author],["Data creazione",d.date],["Nave di partenza","MSC Seashore"],["Ultimo ritrovamento","8 ottobre 2026"],["Ultimo luogo",d.place],["Stato","Ancora in viaggio"]].map(r=>`<div class="row"><span>${r[0]}</span><strong>${r[1]}</strong></div>`).join("")}</article>
  <section class="section"><div class="actions"><button id="keep" class="success">♥ La tengo</button><button id="hide" class="primary">⌖ La nascondo di nuovo</button></div><div id="actionbox"></div></section>
  <section class="section"><div class="section-head"><h2>STATISTICHE DELLA DUCK</h2></div><div class="metrics">
   <div class="metric"><strong>12</strong><span>Giorni in viaggio</span></div><div class="metric"><strong>3</strong><span>Ritrovamenti</span></div><div class="metric"><strong>2</strong><span>Navi visitate</span></div><div class="metric"><strong>4</strong><span>Persone coinvolte</span></div>
  </div></section>
  <section class="section"><div class="section-head"><h2>CRONOLOGIA</h2></div><article class="card timeline">
    <div class="event"><strong>Creata</strong><span>5 ottobre 2026 · MSC Seashore</span></div>
    <div class="event"><strong>Nascosta</strong><span>${d.place}</span></div>
    <div class="event"><strong>Trovata</strong><span>8 ottobre 2026</span></div>
  </article></section>`,"DUCK "+d.code);
 document.getElementById("keep").addEventListener("click",()=>action("keep"));
 document.getElementById("hide").addEventListener("click",()=>action("hide"));
}
function action(type){
 document.getElementById("actionbox").innerHTML=`<article class="card" style="margin-top:12px"><h3>${type==="keep"?"La tengo":"La nascondo di nuovo"}</h3><div class="form">
 <label>Nome o nickname<input class="field" placeholder="Il tuo nome"></label>
 ${type==="hide"?`<label>Nave<select><option>MSC Seashore</option><option>MSC World Europa</option><option>MSC Grandiosa</option></select></label><label>Luogo<input class="field" placeholder="Scrivi liberamente dove la nascondi"></label>`:""}
 <label>Messaggio facoltativo<textarea rows="3" placeholder="Messaggio"></textarea></label><button class="primary">Conferma</button></div></article>`
}
function profile(){
 shell(`<div class="center"><img class="profile-avatar" src="logo.jpeg" onerror="this.src='logo.svg'"><h1>Nicola</h1><div class="small">@nicola360</div></div>
 <section class="section"><div class="profile-stats"><div class="metric"><strong>7</strong><span>Crociere</span></div><div class="metric"><strong>5</strong><span>Navi visitate</span></div><div class="metric"><strong>18</strong><span>Duck nascoste</span></div><div class="metric"><strong>12</strong><span>Duck trovate</span></div></div></section>
 <section class="section"><div class="grid"><button class="secondary" data-go="login">Login</button><button class="primary" data-go="register">Registrati</button></div></section>`,"PROFILO")
}
function badges(){
 shell(`<h1>I miei Badge</h1><div class="badges">${[
 ["🏅","Prima crociera",1],["🚢","3 crociere",1],["⭐","5 crociere",1],["🦆","Prima Duck",1],["🌊","Seaside Class",1],["🚢","5 navi",1],["🏆","10 crociere",0],["🦆","10 Duck",0],["👑","20 crociere",0]
 ].map(b=>`<div class="badgecard ${b[2]?"":"locked"}"><div class="ico">${b[0]}</div><strong>${b[1]}</strong><div class="small">${b[2]?"Ottenuto":"Da ottenere"}</div></div>`).join("")}</div>`,"BADGE")
}
function login(){
 shell(`<img class="loginlogo" src="logo.jpeg" onerror="this.src='logo.svg'"><div class="center"><h1>Bentornato a bordo</h1><p class="small">Accedi per gestire crociere, Duck e badge.</p></div><article class="card" style="margin-top:18px"><div class="form"><label>Email<input class="field" type="email"></label><label>Password<input class="field" type="password"></label><button class="primary" data-go="profile">Accedi</button><button class="secondary" data-go="register">Registrati gratuitamente</button></div></article>`,"LOGIN",false)
}
function register(){
 shell(`<img class="loginlogo" src="logo.jpeg" onerror="this.src='logo.svg'"><div class="center"><h1>Crea il tuo account</h1></div><article class="card" style="margin-top:18px"><div class="form"><label>Nome<input class="field"></label><label>Cognome<input class="field"></label><label>Nome utente<input class="field" placeholder="@nomeutente"></label><label>Email<input class="field" type="email"></label><label>Password<input class="field" type="password"></label><button class="primary" data-go="profile">Crea account</button><button class="secondary" data-go="login">Hai già un account? Accedi</button></div></article>`,"REGISTRAZIONE",false)
}
function cruises(){go("profile")}
render();
