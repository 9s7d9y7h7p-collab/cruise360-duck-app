
const SUPABASE_URL = "https://xopszyaotcmztxcgvykn.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_Cz3tMMb-mkgfrXb04Zl8cg_GLXWtyc0";
const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

let ships = [{"name": "MSC Armonia", "cls": "Lirica", "year": 2001, "shipyard": "Chantiers de l’Atlantique", "length": "274,9 m", "width": "32 m", "tonnage": "65.542 GT", "decks": "13", "passengers": "2.620", "cabins": "976", "speed": "20,1 nodi", "ducks": 0}, {"name": "MSC Sinfonia", "cls": "Lirica", "year": 2002, "shipyard": "Chantiers de l’Atlantique", "length": "274,9 m", "width": "28,8 m", "tonnage": "65.591 GT", "decks": "13", "passengers": "2.646", "cabins": "976", "speed": "21,7 nodi", "ducks": 0}, {"name": "MSC Opera", "cls": "Lirica", "year": 2004, "shipyard": "Chantiers de l’Atlantique", "length": "274,9 m", "width": "28,8 m", "tonnage": "65.591 GT", "decks": "13", "passengers": "2.658", "cabins": "1.070", "speed": "20,3 nodi", "ducks": 0}, {"name": "MSC Lirica", "cls": "Lirica", "year": 2003, "shipyard": "Chantiers de l’Atlantique", "length": "274,9 m", "width": "28,8 m", "tonnage": "65.591 GT", "decks": "13", "passengers": "2.648", "cabins": "988", "speed": "21,7 nodi", "ducks": 0}, {"name": "MSC Musica", "cls": "Musica", "year": 2006, "shipyard": "Aker Yards France", "length": "293,8 m", "width": "32,2 m", "tonnage": "92.409 GT", "decks": "16", "passengers": "3.223", "cabins": "1.275", "speed": "22 nodi", "ducks": 0}, {"name": "MSC Orchestra", "cls": "Musica", "year": 2007, "shipyard": "Aker Yards France", "length": "293,8 m", "width": "32,2 m", "tonnage": "92.409 GT", "decks": "16", "passengers": "3.223", "cabins": "1.233", "speed": "22,9 nodi", "ducks": 0}, {"name": "MSC Poesia", "cls": "Musica", "year": 2008, "shipyard": "Aker Yards France", "length": "293,8 m", "width": "32,2 m", "tonnage": "92.627 GT", "decks": "16", "passengers": "3.223", "cabins": "1.223", "speed": "23 nodi", "ducks": 0}, {"name": "MSC Magnifica", "cls": "Musica", "year": 2010, "shipyard": "STX Europe", "length": "293,8 m", "width": "32,2 m", "tonnage": "95.128 GT", "decks": "16", "passengers": "3.223", "cabins": "1.259", "speed": "22,9 nodi", "ducks": 0}, {"name": "MSC Fantasia", "cls": "Fantasia", "year": 2008, "shipyard": "STX Europe", "length": "333,3 m", "width": "37,92 m", "tonnage": "137.936 GT", "decks": "18", "passengers": "4.363", "cabins": "1.636", "speed": "22,87 nodi", "ducks": 0}, {"name": "MSC Splendida", "cls": "Fantasia", "year": 2009, "shipyard": "STX Europe", "length": "333,3 m", "width": "37,92 m", "tonnage": "137.936 GT", "decks": "18", "passengers": "4.363", "cabins": "1.637", "speed": "22,87 nodi", "ducks": 0}, {"name": "MSC Divina", "cls": "Fantasia", "year": 2012, "shipyard": "STX France", "length": "333,3 m", "width": "37,92 m", "tonnage": "139.072 GT", "decks": "18", "passengers": "4.345", "cabins": "1.751", "speed": "23,75 nodi", "ducks": 0}, {"name": "MSC Preziosa", "cls": "Fantasia", "year": 2013, "shipyard": "STX France", "length": "333,3 m", "width": "37,92 m", "tonnage": "139.072 GT", "decks": "18", "passengers": "4.345", "cabins": "1.751", "speed": "24,21 nodi", "ducks": 0}, {"name": "MSC Meraviglia", "cls": "Meraviglia", "year": 2017, "shipyard": "STX France", "length": "315,83 m", "width": "43 m", "tonnage": "171.598 GT", "decks": "19", "passengers": "5.642", "cabins": "2.214", "speed": "22,89 nodi", "ducks": 0}, {"name": "MSC Bellissima", "cls": "Meraviglia", "year": 2019, "shipyard": "Chantiers de l’Atlantique", "length": "315,83 m", "width": "43 m", "tonnage": "171.598 GT", "decks": "19", "passengers": "5.654", "cabins": "2.217", "speed": "23,15 nodi", "ducks": 0}, {"name": "MSC Grandiosa", "cls": "Meraviglia Plus", "year": 2019, "shipyard": "Chantiers de l’Atlantique", "length": "331,43 m", "width": "43 m", "tonnage": "181.541 GT", "decks": "19", "passengers": "6.334", "cabins": "2.421", "speed": "20,1 nodi", "ducks": 0}, {"name": "MSC Virtuosa", "cls": "Meraviglia Plus", "year": 2021, "shipyard": "Chantiers de l’Atlantique", "length": "331 m", "width": "43 m", "tonnage": "181.541 GT", "decks": "19", "passengers": "6.334", "cabins": "2.421", "speed": "22,2 nodi", "ducks": 0}, {"name": "MSC Euribia", "cls": "Meraviglia Plus", "year": 2023, "shipyard": "Chantiers de l’Atlantique", "length": "331 m", "width": "43 m", "tonnage": "184.011 GT", "decks": "19", "passengers": "6.327", "cabins": "2.419", "speed": "22,3 nodi", "ducks": 0}, {"name": "MSC Seaside", "cls": "Seaside", "year": 2017, "shipyard": "Fincantieri", "length": "323 m", "width": "41 m", "tonnage": "153.516 GT", "decks": "20", "passengers": "5.084", "cabins": "2.026", "speed": "22,95 nodi", "ducks": 0}, {"name": "MSC Seaview", "cls": "Seaside", "year": 2018, "shipyard": "Fincantieri", "length": "323 m", "width": "41 m", "tonnage": "153.516 GT", "decks": "20", "passengers": "5.079", "cabins": "2.026", "speed": "22,98 nodi", "ducks": 0}, {"name": "MSC Seashore", "cls": "Seaside EVO", "year": 2021, "shipyard": "Fincantieri", "length": "339 m", "width": "41 m", "tonnage": "170.412 GT", "decks": "20", "passengers": "5.877", "cabins": "2.270", "speed": "21,8 nodi", "ducks": 0}, {"name": "MSC Seascape", "cls": "Seaside EVO", "year": 2022, "shipyard": "Fincantieri", "length": "339 m", "width": "41 m", "tonnage": "169.400 GT", "decks": "20", "passengers": "5.877", "cabins": "2.270", "speed": "21,8 nodi", "ducks": 0}, {"name": "MSC World Europa", "cls": "World Class", "year": 2022, "shipyard": "Chantiers de l’Atlantique", "length": "333,3 m", "width": "47 m", "tonnage": "215.863 GT", "decks": "22", "passengers": "6.762", "cabins": "2.626", "speed": "22,7 nodi", "ducks": 0}, {"name": "MSC World America", "cls": "World Class", "year": 2025, "shipyard": "Chantiers de l’Atlantique", "length": "333 m", "width": "47 m", "tonnage": "216.638 GT", "decks": "22", "passengers": "6.764", "cabins": "2.614", "speed": "22,7 nodi", "ducks": 0}];
let currentUser = null;
let state = {view:"home", ship:"MSC Seashore", filter:"Tutte", shipTab:"details"};
const app = document.getElementById("app");
const slug = n => n.toLowerCase().replace("msc ","").replaceAll(" ","-");

const SUPPORTED_LANGS=["it","en","fr","es","de"];
const LANG_INFO={
 it:{label:"Italiano",flag:"🇮🇹",locale:"it-IT"},
 en:{label:"English",flag:"🇬🇧",locale:"en-GB"},
 fr:{label:"Français",flag:"🇫🇷",locale:"fr-FR"},
 es:{label:"Español",flag:"🇪🇸",locale:"es-ES"},
 de:{label:"Deutsch",flag:"🇩🇪",locale:"de-DE"}
};
function detectLanguage(){
 const saved=localStorage.getItem("cruise360travel_language");
 if(SUPPORTED_LANGS.includes(saved)) return saved;
 const browser=(navigator.language||"it").slice(0,2).toLowerCase();
 return SUPPORTED_LANGS.includes(browser)?browser:"it";
}
let currentLang=detectLanguage();

const I18N={
"Home":{en:"Home",fr:"Accueil",es:"Inicio",de:"Start"},
"Flotta":{en:"Fleet",fr:"Flotte",es:"Flota",de:"Flotte"},
"Profilo":{en:"Profile",fr:"Profil",es:"Perfil",de:"Profil"},
"Badge":{en:"Badges",fr:"Badges",es:"Insignias",de:"Abzeichen"},
"Benvenuto a bordo!":{en:"Welcome aboard!",fr:"Bienvenue à bord !",es:"¡Bienvenido a bordo!",de:"Willkommen an Bord!"},
"La tua avventura inizia qui.":{en:"Your adventure starts here.",fr:"Votre aventure commence ici.",es:"Tu aventura comienza aquí.",de:"Dein Abenteuer beginnt hier."},
"Esplora Cruise360Travel":{en:"Explore Cruise360Travel",fr:"Explorez Cruise360Travel",es:"Explora Cruise360Travel",de:"Entdecke Cruise360Travel"},
"Flotta MSC":{en:"MSC Fleet",fr:"Flotte MSC",es:"Flota MSC",de:"MSC-Flotte"},
"Le mie Duck":{en:"My Ducks",fr:"Mes Ducks",es:"Mis Ducks",de:"Meine Ducks"},
"Trova o registra una Duck.":{en:"Find or register a Duck.",fr:"Trouvez ou enregistrez une Duck.",es:"Encuentra o registra una Duck.",de:"Finde oder registriere eine Duck."},
"I miei Badge":{en:"My Badges",fr:"Mes badges",es:"Mis insignias",de:"Meine Abzeichen"},
"Segui i tuoi traguardi.":{en:"Track your milestones.",fr:"Suivez vos objectifs.",es:"Sigue tus logros.",de:"Verfolge deine Erfolge."},
"Il mio Profilo":{en:"My Profile",fr:"Mon profil",es:"Mi perfil",de:"Mein Profil"},
"Account collegato.":{en:"Account connected.",fr:"Compte connecté.",es:"Cuenta conectada.",de:"Konto verbunden."},
"Accedi o registrati.":{en:"Sign in or register.",fr:"Connectez-vous ou inscrivez-vous.",es:"Inicia sesión o regístrate.",de:"Anmelden oder registrieren."},
"Esplora tutte le 23 navi":{en:"Explore all 23 ships",fr:"Explorez les 23 navires",es:"Explora los 23 barcos",de:"Entdecke alle 23 Schiffe"},
"Cerca una nave...":{en:"Search for a ship...",fr:"Rechercher un navire...",es:"Buscar un barco...",de:"Schiff suchen..."},
"Tutte":{en:"All",fr:"Toutes",es:"Todas",de:"Alle"},
"Duck associate":{en:"Associated Ducks",fr:"Ducks associées",es:"Ducks asociadas",de:"Zugeordnete Ducks"},
"Cronologia":{en:"Timeline",fr:"Chronologie",es:"Cronología",de:"Chronik"},
"Dettagli":{en:"Details",fr:"Détails",es:"Detalles",de:"Details"},
"DATI TECNICI":{en:"TECHNICAL DATA",fr:"DONNÉES TECHNIQUES",es:"DATOS TÉCNICOS",de:"TECHNISCHE DATEN"},
"Nome":{en:"Name",fr:"Nom",es:"Nombre",de:"Name"},
"Classe":{en:"Class",fr:"Classe",es:"Clase",de:"Klasse"},
"Anno":{en:"Year",fr:"Année",es:"Año",de:"Jahr"},
"Cantiere":{en:"Shipyard",fr:"Chantier naval",es:"Astillero",de:"Werft"},
"Lunghezza":{en:"Length",fr:"Longueur",es:"Eslora",de:"Länge"},
"Larghezza":{en:"Width",fr:"Largeur",es:"Manga",de:"Breite"},
"Stazza":{en:"Tonnage",fr:"Jauge",es:"Arqueo",de:"Tonnage"},
"Ponti":{en:"Decks",fr:"Ponts",es:"Cubiertas",de:"Decks"},
"Passeggeri":{en:"Passengers",fr:"Passagers",es:"Pasajeros",de:"Passagiere"},
"Cabine":{en:"Cabins",fr:"Cabines",es:"Camarotes",de:"Kabinen"},
"Velocità":{en:"Speed",fr:"Vitesse",es:"Velocidad",de:"Geschwindigkeit"},
"Caricamento...":{en:"Loading...",fr:"Chargement...",es:"Cargando...",de:"Wird geladen..."},
"Errore nel caricamento.":{en:"Loading error.",fr:"Erreur de chargement.",es:"Error de carga.",de:"Fehler beim Laden."},
"Nessuna Duck registrata":{en:"No Ducks registered",fr:"Aucune Duck enregistrée",es:"No hay Ducks registradas",de:"Keine Ducks registriert"},
"Nessuna attività ancora":{en:"No activity yet",fr:"Aucune activité pour le moment",es:"Aún no hay actividad",de:"Noch keine Aktivität"},
"Nascondimenti e ritrovamenti relativi a questa nave compariranno qui.":{en:"Hidings and finds related to this ship will appear here.",fr:"Les cachettes et découvertes liées à ce navire apparaîtront ici.",es:"Los escondites y hallazgos relacionados con este barco aparecerán aquí.",de:"Verstecke und Funde zu diesem Schiff erscheinen hier."},
"Registra, genera il QR e segui ogni Cruise Duck.":{en:"Register, generate the QR and follow every Cruise Duck.",fr:"Enregistrez, générez le QR et suivez chaque Cruise Duck.",es:"Registra, genera el QR y sigue cada Cruise Duck.",de:"Registriere, erstelle den QR-Code und verfolge jede Cruise Duck."},
"Crea una nuova Duck":{en:"Create a new Duck",fr:"Créer une nouvelle Duck",es:"Crear una nueva Duck",de:"Neue Duck erstellen"},
"Genera un QR collegato al database.":{en:"Generate a QR linked to the database.",fr:"Générez un QR lié à la base de données.",es:"Genera un QR vinculado a la base de datos.",de:"Erstelle einen mit der Datenbank verknüpften QR-Code."},
"Accedi per creare una Duck.":{en:"Sign in to create a Duck.",fr:"Connectez-vous pour créer une Duck.",es:"Inicia sesión para crear una Duck.",de:"Melde dich an, um eine Duck zu erstellen."},
"Trova una Duck":{en:"Find a Duck",fr:"Trouver une Duck",es:"Encontrar una Duck",de:"Duck finden"},
"Apri una Duck tramite il suo codice.":{en:"Open a Duck using its code.",fr:"Ouvrez une Duck avec son code.",es:"Abre una Duck con su código.",de:"Öffne eine Duck mit ihrem Code."},
"LE MIE DUCK":{en:"MY DUCKS",fr:"MES DUCKS",es:"MIS DUCKS",de:"MEINE DUCKS"},
"Accedi dal Profilo per vedere e creare le tue Duck.":{en:"Sign in from Profile to view and create your Ducks.",fr:"Connectez-vous depuis le Profil pour voir et créer vos Ducks.",es:"Inicia sesión desde Perfil para ver y crear tus Ducks.",de:"Melde dich im Profil an, um deine Ducks zu sehen und zu erstellen."},
"Nessuna Duck creata":{en:"No Ducks created",fr:"Aucune Duck créée",es:"No hay Ducks creadas",de:"Keine Ducks erstellt"},
"Crea la prima Duck e genera il suo QR code.":{en:"Create your first Duck and generate its QR code.",fr:"Créez votre première Duck et générez son QR code.",es:"Crea tu primera Duck y genera su código QR.",de:"Erstelle deine erste Duck und ihren QR-Code."},
"NUOVA DUCK":{en:"NEW DUCK",fr:"NOUVELLE DUCK",es:"NUEVA DUCK",de:"NEUE DUCK"},
"Il QR aprirà sempre la scheda online aggiornata.":{en:"The QR will always open the updated online Duck page.",fr:"Le QR ouvrira toujours la fiche en ligne mise à jour.",es:"El QR siempre abrirá la ficha online actualizada.",de:"Der QR-Code öffnet immer die aktuelle Online-Seite."},
"Nome della Duck":{en:"Duck name",fr:"Nom de la Duck",es:"Nombre de la Duck",de:"Name der Duck"},
"Nave":{en:"Ship",fr:"Navire",es:"Barco",de:"Schiff"},
"Luogo iniziale":{en:"Initial location",fr:"Lieu initial",es:"Lugar inicial",de:"Erster Ort"},
"Nota":{en:"Note",fr:"Note",es:"Nota",de:"Notiz"},
"Facoltativa":{en:"Optional",fr:"Facultative",es:"Opcional",de:"Optional"},
"Crea Duck e genera QR":{en:"Create Duck and generate QR",fr:"Créer la Duck et générer le QR",es:"Crear Duck y generar QR",de:"Duck erstellen und QR generieren"},
"Compila nome Duck e luogo.":{en:"Enter the Duck name and location.",fr:"Saisissez le nom de la Duck et le lieu.",es:"Introduce el nombre de la Duck y el lugar.",de:"Gib den Duck-Namen und den Ort ein."},
"QR CODE CREATO":{en:"QR CODE CREATED",fr:"QR CODE CRÉÉ",es:"CÓDIGO QR CREADO",de:"QR-CODE ERSTELLT"},
"Online":{en:"Online",fr:"En ligne",es:"Online",de:"Online"},
"Questo QR apre la scheda online della Duck da qualsiasi telefono.":{en:"This QR opens the Duck's online page from any phone.",fr:"Ce QR ouvre la fiche en ligne de la Duck depuis n’importe quel téléphone.",es:"Este QR abre la ficha online de la Duck desde cualquier teléfono.",de:"Dieser QR-Code öffnet die Online-Seite der Duck auf jedem Smartphone."},
"Apri scheda Duck":{en:"Open Duck page",fr:"Ouvrir la fiche Duck",es:"Abrir ficha Duck",de:"Duck-Seite öffnen"},
"Codice":{en:"Code",fr:"Code",es:"Código",de:"Code"},
"Luogo":{en:"Location",fr:"Lieu",es:"Lugar",de:"Ort"},
"Stato":{en:"Status",fr:"Statut",es:"Estado",de:"Status"},
"TROVA DUCK":{en:"FIND DUCK",fr:"TROUVER UNE DUCK",es:"ENCONTRAR DUCK",de:"DUCK FINDEN"},
"Codice Duck":{en:"Duck code",fr:"Code Duck",es:"Código Duck",de:"Duck-Code"},
"Apri Duck":{en:"Open Duck",fr:"Ouvrir la Duck",es:"Abrir Duck",de:"Duck öffnen"},
"Ultimo luogo":{en:"Last location",fr:"Dernier lieu",es:"Último lugar",de:"Letzter Ort"},
"Creata":{en:"Created",fr:"Créée",es:"Creada",de:"Erstellt"},
"Tenuta da":{en:"Kept by",fr:"Gardée par",es:"Guardada por",de:"Behalten von"},
"La tengo":{en:"I'll keep it",fr:"Je la garde",es:"Me la quedo",de:"Ich behalte sie"},
"Duck già tenuta":{en:"Duck already kept",fr:"Duck déjà gardée",es:"Duck ya guardada",de:"Duck bereits behalten"},
"La nascondo di nuovo":{en:"Hide it again",fr:"Je la cache à nouveau",es:"La escondo de nuevo",de:"Ich verstecke sie wieder"},
"QR CODE":{en:"QR CODE",fr:"QR CODE",es:"CÓDIGO QR",de:"QR-CODE"},
"QR permanente collegato alla scheda online.":{en:"Permanent QR linked to the online page.",fr:"QR permanent lié à la fiche en ligne.",es:"QR permanente vinculado a la ficha online.",de:"Permanenter QR-Code mit der Online-Seite verknüpft."},
"CRONOLOGIA":{en:"TIMELINE",fr:"CHRONOLOGIE",es:"CRONOLOGÍA",de:"CHRONIK"},
"Nessuna attività":{en:"No activity",fr:"Aucune activité",es:"Sin actividad",de:"Keine Aktivität"},
"Nascosta":{en:"Hidden",fr:"Cachée",es:"Escondida",de:"Versteckt"},
"Trovata":{en:"Found",fr:"Trouvée",es:"Encontrada",de:"Gefunden"},
"Tenuta":{en:"Kept",fr:"Gardée",es:"Guardada",de:"Behalten"},
"LA TENGO":{en:"I'LL KEEP IT",fr:"JE LA GARDE",es:"ME LA QUEDO",de:"ICH BEHALTE SIE"},
"Conferma che vuoi tenere":{en:"Confirm that you want to keep",fr:"Confirmez que vous souhaitez garder",es:"Confirma que quieres quedarte con",de:"Bestätige, dass du behalten möchtest"},
"Nome o nickname":{en:"Name or nickname",fr:"Nom ou pseudo",es:"Nombre o apodo",de:"Name oder Nickname"},
"Città / Paese":{en:"City / Country",fr:"Ville / Pays",es:"Ciudad / País",de:"Stadt / Land"},
"facoltativo":{en:"optional",fr:"facultatif",es:"opcional",de:"optional"},
"facoltativa":{en:"optional",fr:"facultative",es:"opcional",de:"optional"},
"Queste informazioni saranno visibili nella cronologia pubblica della Duck. Non inserire email, telefono o altri dati sensibili.":{en:"This information will be visible in the Duck's public timeline. Do not enter email addresses, phone numbers or other sensitive data.",fr:"Ces informations seront visibles dans la chronologie publique de la Duck. N’indiquez pas d’e-mail, de téléphone ni d’autres données sensibles.",es:"Esta información será visible en la cronología pública de la Duck. No introduzcas correo electrónico, teléfono ni otros datos sensibles.",de:"Diese Informationen sind in der öffentlichen Chronik der Duck sichtbar. Gib keine E-Mail-Adresse, Telefonnummer oder andere sensible Daten ein."},
"Sì, tengo questa Duck":{en:"Yes, I'll keep this Duck",fr:"Oui, je garde cette Duck",es:"Sí, me quedo con esta Duck",de:"Ja, ich behalte diese Duck"},
"Salvataggio...":{en:"Saving...",fr:"Enregistrement...",es:"Guardando...",de:"Speichern..."},
"Inserisci almeno un nome o nickname.":{en:"Enter at least a name or nickname.",fr:"Saisissez au moins un nom ou un pseudo.",es:"Introduce al menos un nombre o apodo.",de:"Gib mindestens einen Namen oder Nickname ein."},
"Questa azione è già stata registrata.":{en:"This action has already been recorded.",fr:"Cette action a déjà été enregistrée.",es:"Esta acción ya ha sido registrada.",de:"Diese Aktion wurde bereits gespeichert."},
"NASCONDI DI NUOVO":{en:"HIDE AGAIN",fr:"CACHER À NOUVEAU",es:"ESCONDER DE NUEVO",de:"ERNEUT VERSTECKEN"},
"Nuovo nascondiglio":{en:"New hiding place",fr:"Nouvelle cachette",es:"Nuevo escondite",de:"Neues Versteck"},
"Conferma nascondiglio":{en:"Confirm hiding place",fr:"Confirmer la cachette",es:"Confirmar escondite",de:"Versteck bestätigen"},
"Inserisci il nuovo nascondiglio.":{en:"Enter the new hiding place.",fr:"Saisissez la nouvelle cachette.",es:"Introduce el nuevo escondite.",de:"Gib das neue Versteck ein."},
"Nome/nickname, città/Paese e nota saranno visibili nella cronologia pubblica della Duck.":{en:"Name/nickname, city/country and note will be visible in the Duck's public timeline.",fr:"Le nom/pseudo, la ville/le pays et la note seront visibles dans la chronologie publique de la Duck.",es:"El nombre/apodo, ciudad/país y nota serán visibles en la cronología pública de la Duck.",de:"Name/Nickname, Stadt/Land und Notiz sind in der öffentlichen Chronik der Duck sichtbar."},
"Hai scelto di tenere questa Duck.":{en:"You chose to keep this Duck.",fr:"Vous avez choisi de garder cette Duck.",es:"Has elegido quedarte con esta Duck.",de:"Du hast dich entschieden, diese Duck zu behalten."},
"Hai registrato il nuovo nascondiglio.":{en:"You registered the new hiding place.",fr:"Vous avez enregistré la nouvelle cachette.",es:"Has registrado el nuevo escondite.",de:"Du hast das neue Versteck gespeichert."},
"Fatto!":{en:"Done!",fr:"C’est fait !",es:"¡Hecho!",de:"Erledigt!"},
"Vuoi creare il tuo profilo?":{en:"Want to create your profile?",fr:"Voulez-vous créer votre profil ?",es:"¿Quieres crear tu perfil?",de:"Möchtest du dein Profil erstellen?"},
"Registrati gratuitamente a Cruise360Travel oppure continua senza account.":{en:"Register for Cruise360Travel for free or continue without an account.",fr:"Inscrivez-vous gratuitement à Cruise360Travel ou continuez sans compte.",es:"Regístrate gratis en Cruise360Travel o continúa sin cuenta.",de:"Registriere dich kostenlos bei Cruise360Travel oder fahre ohne Konto fort."},
"Crea il mio account":{en:"Create my account",fr:"Créer mon compte",es:"Crear mi cuenta",de:"Mein Konto erstellen"},
"Continua senza account":{en:"Continue without an account",fr:"Continuer sans compte",es:"Continuar sin cuenta",de:"Ohne Konto fortfahren"},
"Vuoi entrare in Cruise360Travel?":{en:"Want to join Cruise360Travel?",fr:"Vous voulez rejoindre Cruise360Travel ?",es:"¿Quieres unirte a Cruise360Travel?",de:"Möchtest du Cruise360Travel beitreten?"},
"Puoi partecipare anche senza account. Registrandoti gratuitamente avrai un profilo personale e potrai continuare a far parte della community Cruise360Travel.":{en:"You can participate without an account. By registering for free, you'll get a personal profile and can continue to be part of the Cruise360Travel community.",fr:"Vous pouvez participer sans compte. En vous inscrivant gratuitement, vous aurez un profil personnel et pourrez continuer à faire partie de la communauté Cruise360Travel.",es:"Puedes participar sin cuenta. Al registrarte gratis tendrás un perfil personal y podrás seguir formando parte de la comunidad Cruise360Travel.",de:"Du kannst auch ohne Konto teilnehmen. Mit einer kostenlosen Registrierung erhältst du ein persönliches Profil und kannst Teil der Cruise360Travel-Community bleiben."},
"Crea un account gratuito":{en:"Create a free account",fr:"Créer un compte gratuit",es:"Crear una cuenta gratuita",de:"Kostenloses Konto erstellen"},
"Duck non trovata":{en:"Duck not found",fr:"Duck introuvable",es:"Duck no encontrada",de:"Duck nicht gefunden"},
"Vai alla sezione Duck":{en:"Go to the Duck section",fr:"Aller à la section Duck",es:"Ir a la sección Duck",de:"Zum Duck-Bereich"},
"Torna alla Duck":{en:"Back to the Duck",fr:"Retour à la Duck",es:"Volver a la Duck",de:"Zurück zur Duck"},
"Hai trovato una Cruise Duck 🎉":{en:"You found a Cruise Duck 🎉",fr:"Vous avez trouvé une Cruise Duck 🎉",es:"Has encontrado una Cruise Duck 🎉",de:"Du hast eine Cruise Duck gefunden 🎉"},
"Registrati gratuitamente per entrare nella community Cruise360Travel.":{en:"Register for free to join the Cruise360Travel community.",fr:"Inscrivez-vous gratuitement pour rejoindre la communauté Cruise360Travel.",es:"Regístrate gratis para unirte a la comunidad Cruise360Travel.",de:"Registriere dich kostenlos, um der Cruise360Travel-Community beizutreten."},
"Crea il tuo account":{en:"Create your account",fr:"Créez votre compte",es:"Crea tu cuenta",de:"Erstelle dein Konto"},
"Bastano email e password.":{en:"Email and password are all you need.",fr:"Un e-mail et un mot de passe suffisent.",es:"Solo necesitas correo electrónico y contraseña.",de:"E-Mail und Passwort genügen."},
"Profilo Cruise360Travel":{en:"Cruise360Travel Profile",fr:"Profil Cruise360Travel",es:"Perfil Cruise360Travel",de:"Cruise360Travel-Profil"},
"Accedi per creare Duck e sincronizzare i dati.":{en:"Sign in to create Ducks and sync your data.",fr:"Connectez-vous pour créer des Ducks et synchroniser vos données.",es:"Inicia sesión para crear Ducks y sincronizar tus datos.",de:"Melde dich an, um Ducks zu erstellen und Daten zu synchronisieren."},
"Email":{en:"Email",fr:"E-mail",es:"Correo electrónico",de:"E-Mail"},
"Password":{en:"Password",fr:"Mot de passe",es:"Contraseña",de:"Passwort"},
"Accedi":{en:"Sign in",fr:"Se connecter",es:"Iniciar sesión",de:"Anmelden"},
"Crea account":{en:"Create account",fr:"Créer un compte",es:"Crear cuenta",de:"Konto erstellen"},
"Registrati gratis":{en:"Register for free",fr:"S’inscrire gratuitement",es:"Registrarse gratis",de:"Kostenlos registrieren"},
"Usa una password di almeno 6 caratteri.":{en:"Use a password of at least 6 characters.",fr:"Utilisez un mot de passe d’au moins 6 caractères.",es:"Usa una contraseña de al menos 6 caracteres.",de:"Verwende ein Passwort mit mindestens 6 Zeichen."},
"Esci dall'account":{en:"Sign out",fr:"Se déconnecter",es:"Cerrar sesión",de:"Abmelden"},
"I badge verranno collegati alle crociere verificate nella fase successiva.":{en:"Badges will be linked to verified cruises in the next phase.",fr:"Les badges seront liés aux croisières vérifiées lors de la prochaine phase.",es:"Las insignias se vincularán a los cruceros verificados en la siguiente fase.",de:"Abzeichen werden in der nächsten Phase mit verifizierten Kreuzfahrten verknüpft."},
"Menu":{en:"Menu",fr:"Menu",es:"Menú",de:"Menü"},
"Lingua":{en:"Language",fr:"Langue",es:"Idioma",de:"Sprache"},
"Chiudi":{en:"Close",fr:"Fermer",es:"Cerrar",de:"Schließen"}
};

function tr(text){
 if(currentLang==="it") return text;
 const hit=I18N[text];
 return hit?.[currentLang] || text;
}
function trPattern(text){
 let out=text;
 const lang=currentLang;
 if(lang==="it") return out;
 const patterns=[
  [/^(\d+) navi nel catalogo\.$/,{
    en:"$1 ships in the catalog.",fr:"$1 navires dans le catalogue.",es:"$1 barcos en el catálogo.",de:"$1 Schiffe im Katalog."
  }],
  [/^(\d+) Duck associate$/,{
    en:"$1 associated Ducks",fr:"$1 Ducks associées",es:"$1 Ducks asociadas",de:"$1 zugeordnete Ducks"
  }],
  [/^Quando una Cruise Duck sarà associata a (.+), comparirà qui\.$/,{
    en:"When a Cruise Duck is associated with $1, it will appear here.",
    fr:"Lorsqu’une Cruise Duck sera associée à $1, elle apparaîtra ici.",
    es:"Cuando una Cruise Duck se asocie a $1, aparecerá aquí.",
    de:"Wenn eine Cruise Duck $1 zugeordnet wird, erscheint sie hier."
  }],
  [/^(\d+(?:[,.]\d+)?) nodi$/,{
    en:"$1 knots",fr:"$1 nœuds",es:"$1 nudos",de:"$1 Knoten"
  }],
  [/^Conferma che vuoi tenere (.+)\.$/,{
    en:"Confirm that you want to keep $1.",fr:"Confirmez que vous souhaitez garder $1.",es:"Confirma que quieres quedarte con $1.",de:"Bestätige, dass du $1 behalten möchtest."
  }],
  [/^Errore nella creazione della Duck: (.+)$/,{
    en:"Error creating the Duck: $1",fr:"Erreur lors de la création de la Duck : $1",es:"Error al crear la Duck: $1",de:"Fehler beim Erstellen der Duck: $1"
  }],
  [/^Operazione non disponibile: (.+)$/,{
    en:"Operation unavailable: $1",fr:"Opération indisponible : $1",es:"Operación no disponible: $1",de:"Aktion nicht verfügbar: $1"
  }]
 ];
 for(const [rx,vals] of patterns){
   if(rx.test(out)) return out.replace(rx,vals[lang]);
 }
 return tr(out);
}
function translateElement(root){
 if(currentLang==="it") return;
 const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
 const nodes=[];
 while(walker.nextNode()) nodes.push(walker.currentNode);
 nodes.forEach(n=>{
   const raw=n.nodeValue;
   const trimmed=raw.trim();
   if(!trimmed) return;
   const translated=trPattern(trimmed);
   if(translated!==trimmed) n.nodeValue=raw.replace(trimmed,translated);
 });
 root.querySelectorAll?.("[placeholder]").forEach(el=>{
   const p=el.getAttribute("placeholder");
   const np=trPattern(p);
   if(np!==p) el.setAttribute("placeholder",np);
 });
 root.querySelectorAll?.("[aria-label]").forEach(el=>{
   const p=el.getAttribute("aria-label");
   const np=trPattern(p);
   if(np!==p) el.setAttribute("aria-label",np);
 });
}
function setLanguage(lang){
 if(!SUPPORTED_LANGS.includes(lang)) return;
 currentLang=lang;
 localStorage.setItem("cruise360travel_language",lang);
 document.documentElement.lang=lang;
 render();
}
function openAppMenu(){
 const old=document.getElementById("appMenuOverlay");
 if(old) old.remove();
 const overlay=document.createElement("div");
 overlay.id="appMenuOverlay";
 overlay.className="app-menu-overlay";
 overlay.innerHTML=`<div class="app-menu-panel">
   <div class="app-menu-head"><strong>Cruise360Travel</strong><button id="closeAppMenu" class="menu-close">×</button></div>
   <div class="menu-label">${tr("Lingua")}</div>
   <div class="language-list">${SUPPORTED_LANGS.map(code=>`<button class="language-btn ${code===currentLang?"active":""}" data-lang="${code}"><span>${LANG_INFO[code].flag}</span><b>${LANG_INFO[code].label}</b>${code===currentLang?"✓":""}</button>`).join("")}</div>
 </div>`;
 document.body.appendChild(overlay);
 overlay.querySelector("#closeAppMenu").onclick=()=>overlay.remove();
 overlay.onclick=e=>{if(e.target===overlay) overlay.remove()};
 overlay.querySelectorAll("[data-lang]").forEach(b=>b.onclick=()=>{setLanguage(b.dataset.lang);overlay.remove()});
}
const nativeAlert=window.alert.bind(window);
window.alert=(message)=>nativeAlert(trPattern(String(message)));

function escapeHtml(v){
  return String(v ?? "").replace(/[&<>"']/g, m => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m]));
}
function fmtDate(v){
  if(!v) return "—";
  try { return new Date(v).toLocaleDateString(LANG_INFO[currentLang]?.locale||"it-IT"); } catch { return v; }
}
function statusLabel(v){
  return tr(({hidden:"Nascosta", found:"Trovata", kept:"Tenuta"})[v] || v || "—");
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
function shell(content,title="CRUISE360TRAVEL"){
 app.innerHTML=`<div class="app">
  <header class="topbar">
   <div class="brand"><img src="logo.jpeg" alt="Cruise360Travel"><strong>${escapeHtml(title)}</strong></div>
   <button class="icon-btn" aria-label="Menu">☰</button>
  </header>
  <main>${content}</main>${nav()}</div>`;
 document.documentElement.lang=currentLang;
 translateElement(app);
 bind();
}
function nav(){return `<nav class="navbar"><div class="navinner">${[
 ["home","⌂","Home"],["fleet","🚢","Flotta"],["duckSearch","🦆","Duck"],["profile","👤","Profilo"],["badges","♡","Badge"]
].map(x=>`<button class="navbtn ${state.view===x[0]?"active":""}" data-go="${x[0]}"><b>${x[1]}</b>${x[2]}</button>`).join("")}</div></nav>`}
function bind(){
 document.querySelectorAll("[data-go]").forEach(x=>x.onclick=()=>go(x.dataset.go));
 const menuBtn=document.querySelector(".icon-btn");
 if(menuBtn) menuBtn.onclick=openAppMenu;
}
function go(v){
 state.view=v;
 history.replaceState({}, "", location.pathname);
 render();
 window.scrollTo({top:0,behavior:"smooth"});
}

function home(){
 shell(`<section class="hero brand-home-hero"><img src="home-cruise360travel.jpeg" alt="Cruise360Travel"></section>
 <section class="home-welcome"><h1>Benvenuto a bordo!</h1><p>La tua avventura inizia qui.</p></section>
 <section class="section"><div class="section-head"><h2>Esplora Cruise360Travel</h2></div><div class="grid">
 <article class="card action-card" data-go="fleet"><div class="action-icon">🚢</div><div><h3>Flotta MSC</h3><p>${ships.length} navi nel catalogo.</p></div></article>
 <article class="card action-card" data-go="duckSearch"><div class="action-icon">🦆</div><div><h3>Le mie Duck</h3><p>Trova o registra una Duck.</p></div></article>
 <article class="card action-card" data-go="badges"><div class="action-icon">🏆</div><div><h3>I miei Badge</h3><p>Segui i tuoi traguardi.</p></div></article>
 <article class="card action-card" data-go="profile"><div class="action-icon">👤</div><div><h3>Il mio Profilo</h3><p>${currentUser ? "Account collegato." : "Accedi o registrati."}</p></div></article>
 </div></section>`,"CRUISE360TRAVEL");
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
       <h3>Vuoi entrare in Cruise360Travel?</h3>
       <p>Puoi partecipare anche senza account. Registrandoti gratuitamente avrai un profilo personale e potrai continuare a far parte della community Cruise360Travel.</p>
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
       <p>Registrati gratuitamente a Cruise360Travel oppure continua senza account.</p>
     </div>
     <button id="afterSignup" class="primary full">Crea il mio account</button>
     <button id="afterContinue" class="secondary full">Continua senza account</button>
   </article>
 </div>`,"CRUISE360TRAVEL");

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
     <p>Registrati gratuitamente per entrare nella community Cruise360Travel.</p>
   </div>`:""}
   <div class="center"><img class="profile-avatar" src="logo.jpeg"><h1>${inviteCode?"Crea il tuo account":"Profilo Cruise360Travel"}</h1><p class="small">${inviteCode?"Bastano email e password.":"Accedi per creare Duck e sincronizzare i dati."}</p></div>
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
       alert("Account creato! Controlla l'email per confermare la registrazione. Poi torna su Cruise360Travel e accedi.");
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
const translationObserver=new MutationObserver(mutations=>{
 if(currentLang==="it") return;
 for(const m of mutations){
   for(const node of m.addedNodes){
     if(node.nodeType===Node.ELEMENT_NODE) translateElement(node);
     else if(node.nodeType===Node.TEXT_NODE && node.parentElement) translateElement(node.parentElement);
   }
 }
});
translationObserver.observe(app,{childList:true,subtree:true});

async function init(){
 await refreshSession();
 await loadShips();
 await refreshDuckCounts();
 db.auth.onAuthStateChange((_event,session)=>{currentUser=session?.user||null;});
 const code=new URLSearchParams(location.search).get("duck");
 if(code) await duckDetail(code); else render();
}
init();
