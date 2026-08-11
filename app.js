
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
,"LE MIE CROCIERE":{en:"MY CRUISES",fr:"MES CROISIÈRES",es:"MIS CRUCEROS",de:"MEINE KREUZFAHRTEN"}
,"Aggiungi crociera":{en:"Add cruise",fr:"Ajouter une croisière",es:"Añadir crucero",de:"Kreuzfahrt hinzufügen"}
,"Nessuna crociera registrata":{en:"No cruises registered",fr:"Aucune croisière enregistrée",es:"No hay cruceros registrados",de:"Keine Kreuzfahrten registriert"}
,"Aggiungi le tue crociere passate per costruire il tuo profilo Cruise360Travel.":{en:"Add your past cruises to build your Cruise360Travel profile.",fr:"Ajoutez vos anciennes croisières pour construire votre profil Cruise360Travel.",es:"Añade tus cruceros anteriores para crear tu perfil Cruise360Travel.",de:"Füge deine vergangenen Kreuzfahrten hinzu, um dein Cruise360Travel-Profil aufzubauen."}
,"Totale crociere":{en:"Total cruises",fr:"Total des croisières",es:"Cruceros totales",de:"Kreuzfahrten gesamt"}
,"Verificate":{en:"Verified",fr:"Vérifiées",es:"Verificados",de:"Verifiziert"}
,"In verifica":{en:"Pending verification",fr:"En vérification",es:"En verificación",de:"In Prüfung"}
,"Non verificate":{en:"Unverified",fr:"Non vérifiées",es:"No verificados",de:"Nicht verifiziert"}
,"Nome profilo":{en:"Profile name",fr:"Nom du profil",es:"Nombre del perfil",de:"Profilname"}
,"Nickname":{en:"Nickname",fr:"Pseudo",es:"Apodo",de:"Nickname"}
,"Salva profilo":{en:"Save profile",fr:"Enregistrer le profil",es:"Guardar perfil",de:"Profil speichern"}
,"Profilo aggiornato.":{en:"Profile updated.",fr:"Profil mis à jour.",es:"Perfil actualizado.",de:"Profil aktualisiert."}
,"NUOVA CROCIERA":{en:"NEW CRUISE",fr:"NOUVELLE CROISIÈRE",es:"NUEVO CRUCERO",de:"NEUE KREUZFAHRT"}
,"Data partenza":{en:"Start date",fr:"Date de départ",es:"Fecha de salida",de:"Startdatum"}
,"Data rientro":{en:"End date",fr:"Date de retour",es:"Fecha de regreso",de:"Enddatum"}
,"Codice prenotazione":{en:"Booking reference",fr:"Référence de réservation",es:"Código de reserva",de:"Buchungsnummer"}
,"facoltativo, per richiedere la verifica":{en:"optional, to request verification",fr:"facultatif, pour demander la vérification",es:"opcional, para solicitar verificación",de:"optional, um eine Verifizierung anzufordern"}
,"Salva crociera":{en:"Save cruise",fr:"Enregistrer la croisière",es:"Guardar crucero",de:"Kreuzfahrt speichern"}
,"La data di rientro non può essere precedente alla partenza.":{en:"The end date cannot be before the start date.",fr:"La date de retour ne peut pas précéder la date de départ.",es:"La fecha de regreso no puede ser anterior a la salida.",de:"Das Enddatum darf nicht vor dem Startdatum liegen."}
,"Crociera aggiunta.":{en:"Cruise added.",fr:"Croisière ajoutée.",es:"Crucero añadido.",de:"Kreuzfahrt hinzugefügt."}
,"Verifica richiesta":{en:"Verification requested",fr:"Vérification demandée",es:"Verificación solicitada",de:"Verifizierung angefordert"}
,"Non verificata":{en:"Unverified",fr:"Non vérifiée",es:"No verificado",de:"Nicht verifiziert"}
,"Verificata":{en:"Verified",fr:"Vérifiée",es:"Verificado",de:"Verifiziert"}
,"Rifiutata":{en:"Rejected",fr:"Refusée",es:"Rechazada",de:"Abgelehnt"}
,"Elimina":{en:"Delete",fr:"Supprimer",es:"Eliminar",de:"Löschen"}
,"Eliminare questa crociera?":{en:"Delete this cruise?",fr:"Supprimer cette croisière ?",es:"¿Eliminar este crucero?",de:"Diese Kreuzfahrt löschen?"}
,"Crociera eliminata.":{en:"Cruise deleted.",fr:"Croisière supprimée.",es:"Crucero eliminado.",de:"Kreuzfahrt gelöscht."}
,"I badge si sbloccano con le crociere registrate.":{en:"Badges unlock with verified cruises.",fr:"Les badges se débloquent avec les croisières vérifiées.",es:"Las insignias se desbloquean con cruceros verificados.",de:"Abzeichen werden mit verifizierten Kreuzfahrten freigeschaltet."}
,"Prima Crociera":{en:"First Cruise",fr:"Première croisière",es:"Primer crucero",de:"Erste Kreuzfahrt"}
,"Amante del Mare":{en:"Sea Lover",fr:"Amoureux de la mer",es:"Amante del mar",de:"Meeresliebhaber"}
,"Esploratore":{en:"Explorer",fr:"Explorateur",es:"Explorador",de:"Entdecker"}
,"Veterano":{en:"Veteran",fr:"Vétéran",es:"Veterano",de:"Veteran"}
,"Ammiraglio":{en:"Admiral",fr:"Amiral",es:"Almirante",de:"Admiral"}
,"1 crociera registrata":{en:"1 verified cruise",fr:"1 croisière vérifiée",es:"1 crucero verificado",de:"1 verifizierte Kreuzfahrt"}
,"3 crociere registrate":{en:"3 verified cruises",fr:"3 croisières vérifiées",es:"3 cruceros verificados",de:"3 verifizierte Kreuzfahrten"}
,"5 crociere registrate":{en:"5 verified cruises",fr:"5 croisières vérifiées",es:"5 cruceros verificados",de:"5 verifizierte Kreuzfahrten"}
,"10 crociere registrate":{en:"10 verified cruises",fr:"10 croisières vérifiées",es:"10 cruceros verificados",de:"10 verifizierte Kreuzfahrten"}
,"20 crociere registrate":{en:"20 verified cruises",fr:"20 croisières vérifiées",es:"20 cruceros verificados",de:"20 verifizierte Kreuzfahrten"}
,"Sbloccato":{en:"Unlocked",fr:"Débloqué",es:"Desbloqueado",de:"Freigeschaltet"}
,"Da sbloccare":{en:"Locked",fr:"À débloquer",es:"Por desbloquear",de:"Noch gesperrt"}
,"Progresso":{en:"Progress",fr:"Progression",es:"Progreso",de:"Fortschritt"}
,"Le crociere inserite vengono salvate direttamente nel tuo profilo Cruise360Travel.":{en:"Verifications are managed by Cruise360Travel. No personal identity document is required.",fr:"Les vérifications sont gérées par Cruise360Travel. Aucun document d’identité personnel n’est requis.",es:"Las verificaciones son gestionadas por Cruise360Travel. No se requiere ningún documento personal.",de:"Verifizierungen werden von Cruise360Travel verwaltet. Es ist kein persönliches Ausweisdokument erforderlich."}

,"Accedi per vedere i tuoi traguardi.":{en:"Sign in to see your milestones.",fr:"Connectez-vous pour voir vos objectifs.",es:"Inicia sesión para ver tus logros.",de:"Melde dich an, um deine Erfolge zu sehen."}
,"I badge si sbloccano con le crociere registrate.":{en:"Badges unlock with registered cruises.",fr:"Les badges se débloquent avec les croisières enregistrées.",es:"Las insignias se desbloquean con cruceros registrados.",de:"Abzeichen werden mit registrierten Kreuzfahrten freigeschaltet."}
,"1 crociera registrata":{en:"1 registered cruise",fr:"1 croisière enregistrée",es:"1 crucero registrado",de:"1 registrierte Kreuzfahrt"}
,"3 crociere registrate":{en:"3 registered cruises",fr:"3 croisières enregistrées",es:"3 cruceros registrados",de:"3 registrierte Kreuzfahrten"}
,"5 crociere registrate":{en:"5 registered cruises",fr:"5 croisières enregistrées",es:"5 cruceros registrados",de:"5 registrierte Kreuzfahrten"}
,"10 crociere registrate":{en:"10 registered cruises",fr:"10 croisières enregistrées",es:"10 cruceros registrados",de:"10 registrierte Kreuzfahrten"}
,"20 crociere registrate":{en:"20 registered cruises",fr:"20 croisières enregistrées",es:"20 cruceros registrados",de:"20 registrierte Kreuzfahrten"}
,"Le crociere inserite vengono salvate direttamente nel tuo profilo Cruise360Travel.":{en:"Added cruises are saved directly to your Cruise360Travel profile.",fr:"Les croisières ajoutées sont enregistrées directement dans votre profil Cruise360Travel.",es:"Los cruceros añadidos se guardan directamente en tu perfil Cruise360Travel.",de:"Hinzugefügte Kreuzfahrten werden direkt in deinem Cruise360Travel-Profil gespeichert."}

,"Pannello amministratore":{en:"Admin panel",fr:"Panneau administrateur",es:"Panel de administrador",de:"Admin-Bereich"}
,"Gestisci Cruise360Travel":{en:"Manage Cruise360Travel",fr:"Gérer Cruise360Travel",es:"Gestionar Cruise360Travel",de:"Cruise360Travel verwalten"}
,"Apri pannello admin":{en:"Open admin panel",fr:"Ouvrir le panneau admin",es:"Abrir panel admin",de:"Admin-Bereich öffnen"}
,"PANORAMICA":{en:"OVERVIEW",fr:"APERÇU",es:"RESUMEN",de:"ÜBERSICHT"}
,"UTENTI":{en:"USERS",fr:"UTILISATEURS",es:"USUARIOS",de:"BENUTZER"}
,"DUCK":{en:"DUCKS",fr:"DUCKS",es:"DUCKS",de:"DUCKS"}
,"CROCIERE":{en:"CRUISES",fr:"CROISIÈRES",es:"CRUCEROS",de:"KREUZFAHRTEN"}
,"Utenti":{en:"Users",fr:"Utilisateurs",es:"Usuarios",de:"Benutzer"}
,"Duck create":{en:"Ducks created",fr:"Ducks créées",es:"Ducks creadas",de:"Erstellte Ducks"}
,"Eventi Duck":{en:"Duck events",fr:"Événements Duck",es:"Eventos Duck",de:"Duck-Ereignisse"}
,"Crociere":{en:"Cruises",fr:"Croisières",es:"Cruceros",de:"Kreuzfahrten"}
,"Ultime Duck":{en:"Latest Ducks",fr:"Dernières Ducks",es:"Últimas Ducks",de:"Neueste Ducks"}
,"Nessun dato disponibile":{en:"No data available",fr:"Aucune donnée disponible",es:"No hay datos disponibles",de:"Keine Daten verfügbar"}
,"Amministratore":{en:"Administrator",fr:"Administrateur",es:"Administrador",de:"Administrator"}
,"Registrato il":{en:"Registered on",fr:"Inscrit le",es:"Registrado el",de:"Registriert am"}
,"Apri":{en:"Open",fr:"Ouvrir",es:"Abrir",de:"Öffnen"}
,"Elimina Duck":{en:"Delete Duck",fr:"Supprimer la Duck",es:"Eliminar Duck",de:"Duck löschen"}
,"Eliminare definitivamente questa Duck e la sua cronologia?":{en:"Permanently delete this Duck and its timeline?",fr:"Supprimer définitivement cette Duck et sa chronologie ?",es:"¿Eliminar definitivamente esta Duck y su cronología?",de:"Diese Duck und ihre Chronik dauerhaft löschen?"}
,"Duck eliminata.":{en:"Duck deleted.",fr:"Duck supprimée.",es:"Duck eliminada.",de:"Duck gelöscht."}
,"Elimina crociera":{en:"Delete cruise",fr:"Supprimer la croisière",es:"Eliminar crucero",de:"Kreuzfahrt löschen"}
,"Aggiorna":{en:"Refresh",fr:"Actualiser",es:"Actualizar",de:"Aktualisieren"}
,"Accesso non autorizzato":{en:"Unauthorized access",fr:"Accès non autorisé",es:"Acceso no autorizado",de:"Nicht autorisierter Zugriff"}
,"Questo account non è amministratore.":{en:"This account is not an administrator.",fr:"Ce compte n’est pas administrateur.",es:"Esta cuenta no es administradora.",de:"Dieses Konto ist kein Administrator."}
,"Torna al profilo":{en:"Back to profile",fr:"Retour au profil",es:"Volver al perfil",de:"Zurück zum Profil"}

,"Scegli la lingua dell'app":{en:"Choose the app language",fr:"Choisissez la langue de l’application",es:"Elige el idioma de la aplicación",de:"Wähle die Sprache der App"}

,"Cerca utenti...":{en:"Search users...",fr:"Rechercher des utilisateurs...",es:"Buscar usuarios...",de:"Benutzer suchen..."}
,"Cerca Duck...":{en:"Search Ducks...",fr:"Rechercher des Ducks...",es:"Buscar Ducks...",de:"Ducks suchen..."}
,"Cerca crociere...":{en:"Search cruises...",fr:"Rechercher des croisières...",es:"Buscar cruceros...",de:"Kreuzfahrten suchen..."}
,"Più recenti":{en:"Newest first",fr:"Plus récentes",es:"Más recientes",de:"Neueste zuerst"}
,"Più vecchie":{en:"Oldest first",fr:"Plus anciennes",es:"Más antiguas",de:"Älteste zuerst"}
,"Tutti gli stati":{en:"All statuses",fr:"Tous les statuts",es:"Todos los estados",de:"Alle Status"}
,"Risultati":{en:"Results",fr:"Résultats",es:"Resultados",de:"Ergebnisse"}
,"Nessun risultato":{en:"No results",fr:"Aucun résultat",es:"Sin resultados",de:"Keine Ergebnisse"}

,"Città del creatore":{en:"Creator city",fr:"Ville du créateur",es:"Ciudad del creador",de:"Stadt des Erstellers"}
,"Es. Trenzano (BS)":{en:"e.g. London",fr:"Ex. Lyon",es:"Ej. Madrid",de:"z. B. Berlin"}
,"Nickname del creatore":{en:"Creator nickname",fr:"Pseudo du créateur",es:"Apodo del creador",de:"Nickname des Erstellers"}
,"Inserisci nickname e città del creatore.":{en:"Enter the creator nickname and city.",fr:"Saisissez le pseudo et la ville du créateur.",es:"Introduce el apodo y la ciudad del creador.",de:"Gib Nickname und Stadt des Erstellers ein."}
,"Bigliettino Duck":{en:"Duck card",fr:"Carte Duck",es:"Tarjeta Duck",de:"Duck-Kärtchen"}
,"Crea bigliettino":{en:"Create printable card",fr:"Créer la carte imprimable",es:"Crear tarjeta imprimible",de:"Druckkarte erstellen"}
,"BIGLIETTINO DUCK":{en:"DUCK CARD",fr:"CARTE DUCK",es:"TARJETA DUCK",de:"DUCK-KÄRTCHEN"}
,"Anteprima pronta per la stampa":{en:"Print-ready preview",fr:"Aperçu prêt à imprimer",es:"Vista previa lista para imprimir",de:"Druckfertige Vorschau"}
,"CREATA DA":{en:"CREATED BY",fr:"CRÉÉE PAR",es:"CREADA POR",de:"ERSTELLT VON"}
,"CITTÀ":{en:"CITY",fr:"VILLE",es:"CIUDAD",de:"STADT"}
,"DATA":{en:"DATE",fr:"DATE",es:"FECHA",de:"DATUM"}
,"NAVE":{en:"SHIP",fr:"NAVIRE",es:"BARCO",de:"SCHIFF"}
,"CODICE DUCK":{en:"DUCK CODE",fr:"CODE DUCK",es:"CÓDIGO DUCK",de:"DUCK-CODE"}
,"Scansiona il QR e continua il viaggio di questa Duck!":{en:"Scan the QR and continue this Duck's journey!",fr:"Scannez le QR et continuez le voyage de cette Duck !",es:"¡Escanea el QR y continúa el viaje de esta Duck!",de:"Scanne den QR-Code und setze die Reise dieser Duck fort!"}
,"Stampa / Salva PDF":{en:"Print / Save PDF",fr:"Imprimer / Enregistrer en PDF",es:"Imprimir / Guardar PDF",de:"Drucken / Als PDF speichern"}
,"Torna al QR":{en:"Back to QR",fr:"Retour au QR",es:"Volver al QR",de:"Zurück zum QR"}
,"Formato 89 × 50 mm, fronte singolo.":{en:"89 × 50 mm, single-sided.",fr:"89 × 50 mm, recto uniquement.",es:"89 × 50 mm, una sola cara.",de:"89 × 50 mm, einseitig."}
,"Il bigliettino usa automaticamente la lingua impostata nell'app.":{en:"The card automatically uses the language selected in the app.",fr:"La carte utilise automatiquement la langue choisie dans l’application.",es:"La tarjeta usa automáticamente el idioma seleccionado en la aplicación.",de:"Das Kärtchen verwendet automatisch die in der App gewählte Sprache."}

,"Password dimenticata?":{en:"Forgot password?",fr:"Mot de passe oublié ?",es:"¿Olvidaste tu contraseña?",de:"Passwort vergessen?"}
,"RECUPERA PASSWORD":{en:"RESET PASSWORD",fr:"RÉINITIALISER LE MOT DE PASSE",es:"RECUPERAR CONTRASEÑA",de:"PASSWORT ZURÜCKSETZEN"}
,"Inserisci l'email usata per il tuo account Cruise360Travel.":{en:"Enter the email used for your Cruise360Travel account.",fr:"Saisissez l’e-mail utilisé pour votre compte Cruise360Travel.",es:"Introduce el correo usado para tu cuenta Cruise360Travel.",de:"Gib die E-Mail-Adresse deines Cruise360Travel-Kontos ein."}
,"Invia link di recupero":{en:"Send reset link",fr:"Envoyer le lien de réinitialisation",es:"Enviar enlace de recuperación",de:"Link zum Zurücksetzen senden"}
,"Ti abbiamo inviato un link per reimpostare la password. Controlla la tua email.":{en:"We sent you a link to reset your password. Check your email.",fr:"Nous vous avons envoyé un lien pour réinitialiser votre mot de passe. Consultez votre e-mail.",es:"Te hemos enviado un enlace para restablecer tu contraseña. Revisa tu correo.",de:"Wir haben dir einen Link zum Zurücksetzen deines Passworts gesendet. Prüfe deine E-Mails."}
,"Torna al login":{en:"Back to login",fr:"Retour à la connexion",es:"Volver al inicio de sesión",de:"Zurück zur Anmeldung"}
,"NUOVA PASSWORD":{en:"NEW PASSWORD",fr:"NOUVEAU MOT DE PASSE",es:"NUEVA CONTRASEÑA",de:"NEUES PASSWORT"}
,"Scegli una nuova password per il tuo account.":{en:"Choose a new password for your account.",fr:"Choisissez un nouveau mot de passe pour votre compte.",es:"Elige una nueva contraseña para tu cuenta.",de:"Wähle ein neues Passwort für dein Konto."}
,"Nuova password":{en:"New password",fr:"Nouveau mot de passe",es:"Nueva contraseña",de:"Neues Passwort"}
,"Conferma password":{en:"Confirm password",fr:"Confirmer le mot de passe",es:"Confirmar contraseña",de:"Passwort bestätigen"}
,"Aggiorna password":{en:"Update password",fr:"Mettre à jour le mot de passe",es:"Actualizar contraseña",de:"Passwort aktualisieren"}
,"Le password non coincidono.":{en:"The passwords do not match.",fr:"Les mots de passe ne correspondent pas.",es:"Las contraseñas no coinciden.",de:"Die Passwörter stimmen nicht überein."}
,"Password aggiornata correttamente. Ora puoi accedere con la nuova password.":{en:"Password updated successfully. You can now sign in with your new password.",fr:"Mot de passe mis à jour. Vous pouvez maintenant vous connecter avec votre nouveau mot de passe.",es:"Contraseña actualizada correctamente. Ya puedes iniciar sesión con la nueva contraseña.",de:"Passwort erfolgreich aktualisiert. Du kannst dich jetzt mit dem neuen Passwort anmelden."}
,"Invio...":{en:"Sending...",fr:"Envoi...",es:"Enviando...",de:"Senden..."}

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
   <div class="app-menu-head"><div><strong>${tr("Lingua")}</strong><div class="menu-subtitle">Cruise360Travel</div></div><button id="closeAppMenu" class="menu-close">×</button></div>
   <div class="menu-language-hint"><span>🌐</span><div><b>${tr("Lingua")}</b><small>${tr("Scegli la lingua dell'app")}</small></div></div>
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
   <button class="icon-btn language-trigger" aria-label="Lingua" title="Lingua">
     <span class="language-globe">🌐</span>
     <span class="language-current">${LANG_INFO[currentLang].flag}</span>
     <span class="language-code">${currentLang.toUpperCase()}</span>
     <span class="language-chevron">⌄</span>
   </button>
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
   else if(!data?.length) box.innerHTML=`<article class="card empty-panel"><img src="duck-captain.png"><h3>Nessuna Duck registrata</h3><p>Quando una Cruise Duck sarà associata a ${escapeHtml(s.name)}, comparirà qui.</p></article>`;
   else box.innerHTML=data.map(d=>`<article class="card saved-duck" data-openduck="${escapeHtml(d.code)}"><img src="duck-captain.png"><div class="grow"><strong>${escapeHtml(d.name)}</strong><div class="small">${escapeHtml(d.code)} · ${statusLabel(d.status)} · ${escapeHtml(d.current_place||"")}</div></div><span class="ship-chevron">›</span></article>`).join("");
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
 return "https://api.qrserver.com/v1/create-qr-code/?size=420x420&margin=18&ecc=H&data=" + encodeURIComponent(text);
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
       saved.length ? saved.map(d=>`<article class="card saved-duck" data-openduck="${escapeHtml(d.code)}"><img src="duck-captain.png"><div class="grow"><strong>${escapeHtml(d.name)}</strong><div class="small">${escapeHtml(d.code)} · ${statusLabel(d.status)}</div></div><span class="ship-chevron">›</span></article>`).join("") :
       `<article class="card empty-panel"><img src="duck-captain.png"><h3>Nessuna Duck creata</h3><p>Crea la prima Duck e genera il suo QR code.</p></article>`}
   </section>
 `,"DUCK");
 document.getElementById("createDuckAction").onclick=()=> currentUser ? duckCreate() : profile();
 document.getElementById("findDuckAction").onclick=duckFind;
 document.querySelectorAll("[data-openduck]").forEach(x=>x.onclick=()=>duckDetail(x.dataset.openduck));
}

async function duckCreate(){
 const opts=ships.map(s=>`<option value="${escapeHtml(s.dbslug||slug(s.name))}">${escapeHtml(s.name)}</option>`).join("");
 let profileRow=null;
 if(currentUser){
   const {data}=await db.from("profiles").select("username,display_name").eq("id",currentUser.id).maybeSingle();
   profileRow=data||null;
 }
 const defaultNick=profileRow?.username||profileRow?.display_name||"";
 const savedCity=localStorage.getItem("cruise360travel_creator_city")||"";

 shell(`<button class="back" id="backDuck">← Duck</button><div class="section-head"><div><h1>NUOVA DUCK</h1><p class="small">Il QR aprirà sempre la scheda online aggiornata.</p></div></div>
 <article class="card"><div class="form">
 <label>Nome della Duck<input id="dName" class="field" placeholder="Es. Sunny Explorer"></label>
 <label>Nickname del creatore<input id="dCreatorNick" class="field" maxlength="40" value="${escapeHtml(defaultNick)}"></label>
 <label>Città del creatore<input id="dCreatorCity" class="field" maxlength="60" placeholder="Es. Trenzano (BS)" value="${escapeHtml(savedCity)}"></label>
 <label>Nave<select id="dShip" class="field">${opts}</select></label>
 <label>Luogo iniziale<input id="dPlace" class="field" placeholder="Es. Ponte 8, vicino agli ascensori"></label>
 <label>Nota<textarea id="dNote" class="field" rows="3" placeholder="Facoltativa"></textarea></label>
 <button id="generateDuck" class="primary full">Crea Duck e genera QR</button>
 </div></article>`,"NUOVA DUCK");

 document.getElementById("backDuck").onclick=duckSection;
 document.getElementById("generateDuck").onclick=async()=>{
   const name=document.getElementById("dName").value.trim();
   const creator_nickname=document.getElementById("dCreatorNick").value.trim();
   const creator_city=document.getElementById("dCreatorCity").value.trim();
   const ship=document.getElementById("dShip").value;
   const place=document.getElementById("dPlace").value.trim();
   const note=document.getElementById("dNote").value.trim();

   if(!name||!place){alert("Compila nome Duck e luogo.");return;}
   if(!creator_nickname||!creator_city){alert("Inserisci nickname e città del creatore.");return;}

   localStorage.setItem("cruise360travel_creator_city",creator_city);

   const btn=document.getElementById("generateDuck");
   btn.disabled=true;
   btn.textContent="Salvataggio...";

   let code,created,error;
   for(let i=0;i<5;i++){
     code=newDuckCode();
     ({data:created,error}=await db.from("ducks").insert({
       code,
       name,
       created_by:currentUser.id,
       creator_nickname,
       creator_city,
       current_ship_slug:ship,
       current_place:place,
       status:"hidden",
       note
     }).select().single());
     if(!error) break;
   }
   if(error){
     btn.disabled=false;
     btn.textContent="Crea Duck e genera QR";
     alert("Errore nella creazione della Duck: "+error.message);
     return;
   }

   await db.from("duck_events").insert({
     duck_id:created.id,
     event_type:"created",
     ship_slug:ship,
     place,
     actor_id:currentUser.id,
     actor_name:creator_nickname,
     actor_country:creator_city
   });

   await refreshDuckCounts();
   duckQR(created);
 };
}

function duckQR(duck){
 const url=duckUrl(duck.code);
 const ship=ships.find(s=>(s.dbslug||slug(s.name))===duck.current_ship_slug)?.name||duck.current_ship_slug;
 shell(`<button class="back" id="backDuck">← Duck</button>
 <div class="qr-page"><div class="section-head"><div><h1>QR CODE CREATO</h1><p class="small">${escapeHtml(duck.name)}</p></div><span class="badge green">Online</span></div>
 <article class="card qr-card"><img class="qr-image" src="${qrImageUrl(url)}"><div class="qr-code-label">${escapeHtml(duck.code)}</div><p>Questo QR apre la scheda online della Duck da qualsiasi telefono.</p><button id="openDuck" class="primary full">Apri scheda Duck</button><button id="createTicket" class="secondary full ticket-cta">Crea bigliettino</button></article>
 <article class="card table" style="margin-top:12px">${[["Nome",duck.name],["Codice",duck.code],["Nave",ship],["Luogo",duck.current_place],["Stato",statusLabel(duck.status)]].map(r=>`<div class="row"><span>${escapeHtml(r[0])}</span><strong>${escapeHtml(r[1])}</strong></div>`).join("")}</article></div>`,"QR DUCK");
 document.getElementById("backDuck").onclick=duckSection;
 document.getElementById("openDuck").onclick=()=>duckDetail(duck.code);
 document.getElementById("createTicket").onclick=()=>duckTicket(duck);
}

function duckTicket(duck){
 const ship=ships.find(s=>(s.dbslug||slug(s.name))===duck.current_ship_slug)?.name||duck.current_ship_slug||"—";
 const nick=duck.creator_nickname||"—";
 const city=duck.creator_city||"—";
 const date=fmtDate(duck.created_at);
 const qr=qrImageUrl(duckUrl(duck.code));

 shell(`<button class="back no-print" id="ticketBack">← Torna al QR</button>
 <div class="section-head no-print"><div><h1>BIGLIETTINO DUCK</h1><p class="small">Anteprima pronta per la stampa</p></div></div>

 <div class="duck-ticket-wrap">
   <div id="duckPrintableTicket" class="duck-print-ticket">
     <div class="ticket-left">
       <img class="ticket-brand-logo" src="ticket-logo.jpeg" alt="Cruise360Travel">
       <div class="ticket-qr-wrap">
         <img class="ticket-qr" src="${qr}" alt="QR ${escapeHtml(duck.code)}">
         <span class="ticket-qr-logo"><img src="ticket-logo.jpeg" alt=""></span>
       </div>
       <div class="ticket-code"><span>CODICE DUCK</span><strong>${escapeHtml(duck.code)}</strong></div>
     </div>

     <div class="ticket-divider"></div>

     <div class="ticket-right">
       <div class="ticket-data-row"><span class="ticket-data-icon">👤</span><div><small>CREATA DA</small><strong>${escapeHtml(nick)}</strong></div></div>
       <div class="ticket-data-row"><span class="ticket-data-icon">⌖</span><div><small>CITTÀ</small><strong>${escapeHtml(city)}</strong></div></div>
       <div class="ticket-data-row"><span class="ticket-data-icon">▣</span><div><small>DATA</small><strong>${escapeHtml(date)}</strong></div></div>
       <div class="ticket-data-row"><span class="ticket-data-icon">🚢</span><div><small>NAVE</small><strong>${escapeHtml(ship)}</strong></div></div>
       <div class="ticket-message"><span>🦆</span><em>Scansiona il QR e continua il viaggio di questa Duck!</em></div>
     </div>

     <div class="ticket-instagram">◎ <strong>@cruise360travel</strong></div>
   </div>
 </div>

 <section class="section no-print">
   <article class="card ticket-info">
     <p>Formato 89 × 50 mm, fronte singolo.</p>
     <p>Il bigliettino usa automaticamente la lingua impostata nell'app.</p>
     <button id="printTicket" class="primary full">Stampa / Salva PDF</button>
   </article>
 </section>`,"BIGLIETTINO DUCK");

 document.getElementById("ticketBack").onclick=()=>duckQR(duck);
 document.getElementById("printTicket").onclick=()=>openStandaloneTicket(duck);
}

function openStandaloneTicket(duck){
 const ship=ships.find(s=>(s.dbslug||slug(s.name))===duck.current_ship_slug)?.name||duck.current_ship_slug||"—";
 const logo=new URL("ticket-logo.jpeg",location.href).href;
 const qr=qrImageUrl(duckUrl(duck.code));
 const nick=duck.creator_nickname||"—";
 const city=duck.creator_city||"—";
 const date=fmtDate(duck.created_at);
 const w=window.open("","_blank");
 if(!w){alert("Il browser ha bloccato la nuova finestra.");return;}
 const html=`<!doctype html><html lang="${currentLang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${tr("Bigliettino Duck")} - ${escapeHtml(duck.code)}</title><style>
*{box-sizing:border-box}html,body{margin:0;padding:0;background:#eef3f8;font-family:Arial,Helvetica,sans-serif;color:#082852}.toolbar{display:flex;gap:10px;justify-content:center;padding:12px;background:#061b36}.toolbar button{border:0;border-radius:10px;padding:10px 15px;font-weight:800;font-size:14px}.print{background:#1688f8;color:#fff}.close{background:#dfe9f4;color:#082852}.stage{display:flex;justify-content:center;padding:20px}.ticket{position:relative;width:890px;height:500px;overflow:hidden;border:8px solid #072852;border-radius:34px;background:#fff;display:grid;grid-template-columns:40% 1px 60%;grid-template-rows:1fr 64px;padding:28px 30px 0;box-shadow:0 18px 45px rgba(0,0,0,.18)}.left{grid-column:1;grid-row:1;display:flex;flex-direction:column;align-items:center;padding-right:24px}.logo{width:190px;height:116px;object-fit:contain;margin:-4px auto 5px}.qrbox{position:relative;width:205px;height:205px;border:5px solid #082852;border-radius:14px;padding:8px;background:#fff}.qr{width:100%;height:100%;object-fit:contain;display:block}.qrlogo{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:51px;height:51px;border:6px solid #fff;border-radius:50%;background:#fff;overflow:hidden}.qrlogo img{width:100%;height:100%;object-fit:cover}.code{width:205px;margin-top:8px;border-radius:10px;background:#082852;color:#fff;text-align:center;padding:7px}.code span{display:block;color:#4dc6ff;font-size:12px;font-weight:800}.code strong{font-size:21px}.divider{grid-column:2;grid-row:1;background:#123f70}.right{grid-column:3;grid-row:1;padding:10px 22px 0 28px;display:flex;flex-direction:column}.row{display:grid;grid-template-columns:48px 1fr;gap:12px;align-items:center;padding:8px 0;border-bottom:1px dashed #7a93ae}.icon{width:43px;height:43px;border-radius:50%;background:#082852;color:#fff;display:flex;align-items:center;justify-content:center;font-size:22px}.row small{display:block;font-size:13px;color:#1784c8;font-weight:900}.row strong{display:block;font-size:22px;margin-top:1px}.message{margin-top:auto;text-align:center;padding:10px 6px 13px}.message span{display:block;font-size:27px}.message em{font-family:Georgia,serif;font-size:22px;font-weight:700}.insta{grid-column:1/4;grid-row:2;background:#082852;color:#fff;margin:0 -30px;display:flex;align-items:center;justify-content:center;font-size:19px}@media(max-width:950px){.ticket{transform:scale(.75);transform-origin:top center}.stage{padding:14px}}@media(max-width:650px){.ticket{transform:scale(.5);margin-bottom:-250px}}@media print{@page{size:89mm 50mm;margin:0}html,body{width:89mm!important;height:50mm!important;margin:0!important;padding:0!important;background:#fff!important;overflow:hidden!important}.toolbar{display:none!important}.stage{display:block!important;width:89mm!important;height:50mm!important;padding:0!important;margin:0!important;overflow:hidden!important}.ticket{position:absolute!important;left:0!important;top:0!important;width:89mm!important;height:50mm!important;transform:none!important;margin:0!important;border-width:.7mm!important;border-radius:3mm!important;padding:2.5mm 2.8mm 0!important;box-shadow:none!important;grid-template-rows:1fr 6mm!important;-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important}.logo{width:18mm!important;height:10mm!important;margin:0 auto .4mm!important}.qrbox{width:20mm!important;height:20mm!important;border-width:.45mm!important;border-radius:1.2mm!important;padding:.6mm!important}.qrlogo{width:5.2mm!important;height:5.2mm!important;border-width:.6mm!important}.code{width:20mm!important;margin-top:.6mm!important;border-radius:1mm!important;padding:.45mm!important}.code span{font-size:1.2mm!important}.code strong{font-size:2.15mm!important}.left{padding-right:2mm!important}.right{padding:1mm 2mm 0 2.6mm!important}.row{grid-template-columns:4.5mm 1fr!important;gap:1mm!important;padding:.55mm 0!important}.icon{width:4mm!important;height:4mm!important;font-size:2mm!important}.row small{font-size:1.1mm!important}.row strong{font-size:2mm!important}.message{padding:.6mm .5mm 1mm!important}.message span{font-size:2.3mm!important}.message em{font-size:1.85mm!important}.insta{margin:0 -2.8mm!important;font-size:1.8mm!important}}
</style></head><body><div class="toolbar"><button class="print" onclick="window.print()">${tr("Stampa / Salva PDF")}</button><button class="close" onclick="window.close()">${tr("Chiudi")}</button></div><div class="stage"><div class="ticket"><div class="left"><img class="logo" src="${logo}" alt="Cruise360Travel"><div class="qrbox"><img class="qr" src="${qr}"><span class="qrlogo"><img src="${logo}"></span></div><div class="code"><span>${tr("CODICE DUCK")}</span><strong>${escapeHtml(duck.code)}</strong></div></div><div class="divider"></div><div class="right"><div class="row"><span class="icon">●</span><div><small>${tr("CREATA DA")}</small><strong>${escapeHtml(nick)}</strong></div></div><div class="row"><span class="icon">⌖</span><div><small>${tr("CITTÀ")}</small><strong>${escapeHtml(city)}</strong></div></div><div class="row"><span class="icon">▣</span><div><small>${tr("DATA")}</small><strong>${escapeHtml(date)}</strong></div></div><div class="row"><span class="icon">⚓</span><div><small>${tr("NAVE")}</small><strong>${escapeHtml(ship)}</strong></div></div><div class="message"><span>🦆</span><em>${tr("Scansiona il QR e continua il viaggio di questa Duck!")}</em></div></div><div class="insta">◎ <strong>@cruise360travel</strong></div></div></div></body></html>`;
 w.document.open(); w.document.write(html); w.document.close();
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
 <div class="duck-detail-hero"><img src="duck-captain.png"><div><span class="badge green">${escapeHtml(statusLabel(duck.status))}</span><h1>${escapeHtml(duck.name)}</h1><div class="small">${escapeHtml(duck.code)}</div></div></div>
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
     <img src="duck-captain.png">
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
 shell(`<div class="center" style="padding:40px 0"><img src="duck-captain.png" style="width:100px"><h1>Duck non trovata</h1><p class="small">${escapeHtml(code||"")}</p><div style="height:14px"></div><button class="secondary" id="goDuck">Vai alla sezione Duck</button></div>`,"DUCK");
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
    <button id="forgotPasswordBtn" class="auth-text-btn">Password dimenticata?</button>
    <button id="signupBtn" class="secondary full">${inviteCode?"Registrati gratis":"Crea account"}</button>
   </div></article></section>`,"PROFILO");
   const backInvite=document.getElementById("backToInvitedDuck");
   if(backInvite) backInvite.onclick=()=>{const c=state.inviteDuckCode;state.inviteDuckCode=null;duckDetail(c)};
   document.getElementById("forgotPasswordBtn").onclick=passwordRecoveryRequestScreen;
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

 const [{data:profileRow},{data:cruises,error:cruiseErr}] = await Promise.all([
   db.from("profiles").select("*").eq("id",currentUser.id).maybeSingle(),
   db.from("user_cruises").select("*").eq("user_id",currentUser.id).order("start_date",{ascending:false})
 ]);
 if(cruiseErr){alert(cruiseErr.message);}

 const list=cruises||[];

 shell(`<div class="center profile-top">
   <img class="profile-avatar" src="logo.jpeg">
   <h1>${escapeHtml(profileRow?.display_name||profileRow?.username||"Profilo")}</h1>
   <div class="small">${escapeHtml(currentUser.email||"")}</div>
 </div>

 <section class="section">
   <article class="card">
     <div class="form">
       <label>Nome profilo<input id="profileDisplayName" class="field" maxlength="50" value="${escapeHtml(profileRow?.display_name||"")}"></label>
       <label>Nickname<input id="profileUsername" class="field" maxlength="30" value="${escapeHtml(profileRow?.username||"")}"></label>
       <button id="saveProfileBtn" class="primary full">Salva profilo</button>
     </div>
   </article>
 </section>

 <section class="profile-stats">
   <article class="card stat-card"><strong>${list.length}</strong><span>Totale crociere</span></article>
 </section>

 <section class="section">
   <div class="section-head"><h2>LE MIE CROCIERE</h2><button id="addCruiseBtn" class="small-action">＋ Aggiungi crociera</button></div>
   <div id="myCruisesList">${renderCruiseList(list)}</div>
 </section>

 <section class="section">
   <article class="card verification-info">✓ <span>Le crociere inserite vengono salvate direttamente nel tuo profilo Cruise360Travel.</span></article>
 </section>

 ${profileRow?.is_admin ? `
 <section class="section">
   <article class="card admin-entry-card">
     <div class="admin-entry-icon">⚙️</div>
     <div class="grow"><h3>Pannello amministratore</h3><p>Gestisci Cruise360Travel</p></div>
     <button id="adminPanelBtn" class="primary">Apri pannello admin</button>
   </article>
 </section>` : ""}

 <section class="section"><article class="card"><div class="form"><button id="logoutBtn" class="secondary full">Esci dall'account</button></div></article></section>`,"PROFILO");

 document.getElementById("saveProfileBtn").onclick=saveProfileDetails;
 document.getElementById("addCruiseBtn").onclick=openAddCruise;
 document.querySelectorAll("[data-delete-cruise]").forEach(btn=>btn.onclick=()=>deleteCruise(btn.dataset.deleteCruise));
 const adminPanelBtn=document.getElementById("adminPanelBtn");
 if(adminPanelBtn) adminPanelBtn.onclick=()=>adminPanel();
 document.getElementById("logoutBtn").onclick=async()=>{await db.auth.signOut();currentUser=null;profile()};
}

function renderCruiseList(list){
 if(!list.length){
   return `<article class="card empty-panel"><h3>Nessuna crociera registrata</h3><p>Aggiungi le tue crociere passate per costruire il tuo profilo Cruise360Travel.</p></article>`;
 }
 return list.map(c=>{
   const ship=ships.find(s=>(s.dbslug||slug(s.name))===c.ship_slug);
   const dates=[c.start_date?fmtDate(c.start_date):"",c.end_date?fmtDate(c.end_date):""].filter(Boolean).join(" → ");
   return `<article class="card cruise-card">
     <div class="cruise-card-main">
       <div><h3>${escapeHtml(ship?.name||c.ship_slug)}</h3><div class="small">${escapeHtml(dates||"—")}</div></div>
     </div>
     <button class="text-danger" data-delete-cruise="${escapeHtml(c.id)}">Elimina</button>
   </article>`;
 }).join("");
}



function passwordRecoveryRequestScreen(){
 shell(`<button class="back" id="backLogin">← Torna al login</button>
 <div class="auth-recovery-head">
   <div class="auth-recovery-icon">🔑</div>
   <h1>RECUPERA PASSWORD</h1>
   <p>Inserisci l'email usata per il tuo account Cruise360Travel.</p>
 </div>
 <section class="section"><article class="card"><div class="form">
   <label>Email<input id="recoveryEmail" class="field" type="email" autocomplete="email"></label>
   <button id="sendRecoveryBtn" class="primary full">Invia link di recupero</button>
 </div></article></section>`,"PROFILO");

 document.getElementById("backLogin").onclick=profile;
 document.getElementById("sendRecoveryBtn").onclick=async()=>{
   const email=document.getElementById("recoveryEmail").value.trim();
   if(!email){alert("Email");return;}
   const btn=document.getElementById("sendRecoveryBtn");
   btn.disabled=true;
   btn.textContent=tr("Invio...");
   const {error}=await db.auth.resetPasswordForEmail(email,{
     redirectTo:PUBLIC_APP_URL+"/?reset=password"
   });
   if(error){
     btn.disabled=false;
     btn.textContent=tr("Invia link di recupero");
     alert(error.message);
     return;
   }
   shell(`<div class="auth-recovery-head">
     <div class="auth-recovery-icon success">✓</div>
     <h1>RECUPERA PASSWORD</h1>
     <p>Ti abbiamo inviato un link per reimpostare la password. Controlla la tua email.</p>
     <div style="height:12px"></div>
     <button id="recoveryBackLogin" class="secondary">Torna al login</button>
   </div>`,"PROFILO");
   document.getElementById("recoveryBackLogin").onclick=profile;
 };
}

function passwordUpdateScreen(){
 state.passwordRecovery=true;
 shell(`<div class="auth-recovery-head">
   <div class="auth-recovery-icon">🔐</div>
   <h1>NUOVA PASSWORD</h1>
   <p>Scegli una nuova password per il tuo account.</p>
 </div>
 <section class="section"><article class="card"><div class="form">
   <label>Nuova password<input id="newPassword" class="field" type="password" autocomplete="new-password"></label>
   <label>Conferma password<input id="confirmPassword" class="field" type="password" autocomplete="new-password"></label>
   <button id="updatePasswordBtn" class="primary full">Aggiorna password</button>
 </div></article></section>`,"PROFILO");

 document.getElementById("updatePasswordBtn").onclick=async()=>{
   const password=document.getElementById("newPassword").value;
   const confirmPassword=document.getElementById("confirmPassword").value;
   if(password.length<6){alert("Usa una password di almeno 6 caratteri.");return;}
   if(password!==confirmPassword){alert("Le password non coincidono.");return;}

   const btn=document.getElementById("updatePasswordBtn");
   btn.disabled=true;
   btn.textContent=tr("Salvataggio...");
   const {error}=await db.auth.updateUser({password});
   if(error){
     btn.disabled=false;
     btn.textContent=tr("Aggiorna password");
     alert(error.message);
     return;
   }

   state.passwordRecovery=false;
   history.replaceState({}, "", location.pathname);
   await db.auth.signOut();
   currentUser=null;
   alert("Password aggiornata correttamente. Ora puoi accedere con la nuova password.");
   profile();
 };
}

async function saveProfileDetails(){
 const display_name=document.getElementById("profileDisplayName").value.trim();
 const username=document.getElementById("profileUsername").value.trim()||null;
 const {error}=await db.from("profiles").update({display_name,username}).eq("id",currentUser.id);
 if(error){alert(error.message);return;}
 alert("Profilo aggiornato.");
 profile();
}

function openAddCruise(){
 const opts=ships.map(s=>`<option value="${escapeHtml(s.dbslug||slug(s.name))}">${escapeHtml(s.name)}</option>`).join("");
 shell(`<button class="back" id="backProfile">← Profilo</button>
 <h1>NUOVA CROCIERA</h1>
 <article class="card"><div class="form">
   <label>Nave<select id="cruiseShip" class="field">${opts}</select></label>
   <label>Data partenza<input id="cruiseStart" class="field" type="date"></label>
   <label>Data rientro<input id="cruiseEnd" class="field" type="date"></label>
   <button id="saveCruiseBtn" class="primary full">Salva crociera</button>
 </div></article>`,"PROFILO");
 document.getElementById("backProfile").onclick=profile;
 document.getElementById("saveCruiseBtn").onclick=saveCruise;
}

async function saveCruise(){
 const ship_slug=document.getElementById("cruiseShip").value;
 const start_date=document.getElementById("cruiseStart").value||null;
 const end_date=document.getElementById("cruiseEnd").value||null;

 if(start_date && end_date && end_date<start_date){
   alert("La data di rientro non può essere precedente alla partenza.");
   return;
 }
 const btn=document.getElementById("saveCruiseBtn");
 btn.disabled=true; btn.textContent="Salvataggio...";
 const {error}=await db.from("user_cruises").insert({
   user_id:currentUser.id,
   ship_slug,
   start_date,
   end_date,
   verification_status:"unverified"
 });
 if(error){btn.disabled=false;btn.textContent="Salva crociera";alert(error.message);return;}
 alert("Crociera aggiunta.");
 profile();
}

async function deleteCruise(id){
 if(!confirm(tr("Eliminare questa crociera?"))) return;
 const {error}=await db.from("user_cruises").delete().eq("id",id).eq("user_id",currentUser.id);
 if(error){alert(error.message);return;}
 alert("Crociera eliminata.");
 profile();
}

async function badges(){
 if(!currentUser){
   shell(`<div class="center"><img class="profile-avatar" src="logo.jpeg"><h1>I miei Badge</h1><p class="small">Accedi per vedere i tuoi traguardi.</p><div style="height:14px"></div><button id="badgeLogin" class="primary">Accedi</button></div>`,"BADGE");
   document.getElementById("badgeLogin").onclick=()=>go("profile");
   return;
 }
 const {data:cruises,error}=await db.from("user_cruises").select("id").eq("user_id",currentUser.id);
 if(error){alert(error.message);return;}
 const total=(cruises||[]).length;
 const definitions=[
   {name:"Prima Crociera",need:1,icon:"⚓",desc:"1 crociera registrata"},
   {name:"Amante del Mare",need:3,icon:"🌊",desc:"3 crociere registrate"},
   {name:"Esploratore",need:5,icon:"🧭",desc:"5 crociere registrate"},
   {name:"Veterano",need:10,icon:"🏅",desc:"10 crociere registrate"},
   {name:"Ammiraglio",need:20,icon:"🏆",desc:"20 crociere registrate"}
 ];
 shell(`<div class="badge-hero"><h1>I miei Badge</h1><p>I badge si sbloccano con le crociere registrate.</p><div class="verified-counter"><strong>${total}</strong><span>Totale crociere</span></div></div>
 <section class="badge-grid">${definitions.map(b=>{
   const unlocked=total>=b.need;
   const pct=Math.min(100,Math.round((total/b.need)*100));
   return `<article class="card badge-card ${unlocked?"unlocked":"locked"}">
     <div class="badge-medal">${b.icon}</div>
     <div class="badge-copy"><h3>${escapeHtml(b.name)}</h3><p>${escapeHtml(b.desc)}</p>
       <div class="badge-state">${unlocked?"✓ Sbloccato":"🔒 Da sbloccare"}</div>
       <div class="badge-progress"><span style="width:${pct}%"></span></div>
       <div class="small">Progresso ${Math.min(total,b.need)}/${b.need}</div>
     </div>
   </article>`;
 }).join("")}</section>`,"BADGE");
}

async function adminPanel(tab=state.adminTab||"overview"){
 state.adminTab=tab;
 if(!currentUser){go("profile");return;}

 const {data:me,error:meError}=await db.from("profiles").select("is_admin").eq("id",currentUser.id).maybeSingle();
 if(meError || !me?.is_admin){
   shell(`<div class="center admin-denied"><div class="admin-denied-icon">🔒</div><h1>Accesso non autorizzato</h1><p class="small">Questo account non è amministratore.</p><div style="height:14px"></div><button id="backProfileAdmin" class="secondary">Torna al profilo</button></div>`,"ADMIN");
   document.getElementById("backProfileAdmin").onclick=profile;
   return;
 }

 const [
   {data:users,error:usersError},
   {data:ducks,error:ducksError},
   {data:events,error:eventsError},
   {data:cruises,error:cruisesError}
 ] = await Promise.all([
   db.rpc("admin_list_users"),
   db.from("ducks").select("*").order("created_at",{ascending:false}),
   db.from("duck_events").select("id,duck_id,event_type,created_at").order("created_at",{ascending:false}),
   db.from("user_cruises").select("*").order("created_at",{ascending:false})
 ]);

 const firstError=usersError||ducksError||eventsError||cruisesError;
 if(firstError){ alert(firstError.message); return; }

 const userMap={};
 (users||[]).forEach(u=>userMap[u.user_id]=u);
 const tabs=[["overview","PANORAMICA"],["users","UTENTI"],["ducks","DUCK"],["cruises","CROCIERE"]];

 const q=(state.adminSearch||"").trim().toLowerCase();
 const sort=state.adminSort||"new";
 const duckStatus=state.adminDuckStatus||"all";

 const sorted=(arr,dateKey="created_at")=>[...arr].sort((a,b)=>{
   const av=new Date(a[dateKey]||0).getTime(), bv=new Date(b[dateKey]||0).getTime();
   return sort==="old"?av-bv:bv-av;
 });

 let content="";
 if(tab==="overview"){
   content=`
   <section class="admin-stats">
     <article class="card admin-stat"><span>👤</span><strong>${(users||[]).length}</strong><small>Utenti</small></article>
     <article class="card admin-stat"><span>🦆</span><strong>${(ducks||[]).length}</strong><small>Duck create</small></article>
     <article class="card admin-stat"><span>◷</span><strong>${(events||[]).length}</strong><small>Eventi Duck</small></article>
     <article class="card admin-stat"><span>🚢</span><strong>${(cruises||[]).length}</strong><small>Crociere</small></article>
   </section>
   <section class="section"><div class="section-head"><h2>Ultime Duck</h2></div>
     <div class="admin-list">${sorted(ducks||[]).slice(0,6).map(d=>adminDuckCard(d,false)).join("") || `<article class="card empty-panel"><h3>Nessun dato disponibile</h3></article>`}</div>
   </section>`;
 } else if(tab==="users"){
   const filtered=sorted(users||[]).filter(u=>{
     const hay=[u.email,u.display_name,u.username].filter(Boolean).join(" ").toLowerCase();
     return !q || hay.includes(q);
   });
   content=`${adminTools("users",filtered.length)}
   <section class="admin-list">${filtered.map(u=>`
     <article class="card admin-user-card">
       <div class="admin-user-avatar">${escapeHtml((u.display_name||u.username||u.email||"?").slice(0,1).toUpperCase())}</div>
       <div class="grow">
         <strong>${escapeHtml(u.display_name||u.username||u.email||"Utente")}</strong>
         <div class="small">${escapeHtml(u.email||"")}</div>
         ${u.username?`<div class="small">@${escapeHtml(u.username)}</div>`:""}
         <div class="small">Registrato il ${fmtDate(u.created_at)}</div>
       </div>
       ${u.is_admin?`<span class="badge blue">Amministratore</span>`:""}
     </article>`).join("") || `<article class="card empty-panel"><h3>Nessun risultato</h3></article>`}</section>`;
 } else if(tab==="ducks"){
   const filtered=sorted(ducks||[]).filter(d=>{
     const ship=ships.find(s=>(s.dbslug||slug(s.name))===d.current_ship_slug);
     const hay=[d.name,d.code,d.current_place,d.status,ship?.name].filter(Boolean).join(" ").toLowerCase();
     const matchesQ=!q || hay.includes(q);
     const matchesStatus=duckStatus==="all" || d.status===duckStatus;
     return matchesQ && matchesStatus;
   });
   content=`${adminTools("ducks",filtered.length)}
   <section class="admin-list">${filtered.map(d=>adminDuckCard(d,true)).join("") || `<article class="card empty-panel"><h3>Nessun risultato</h3></article>`}</section>`;
 } else if(tab==="cruises"){
   const filtered=sorted(cruises||[]).filter(c=>{
     const ship=ships.find(s=>(s.dbslug||slug(s.name))===c.ship_slug);
     const owner=userMap[c.user_id];
     const hay=[ship?.name,c.ship_slug,owner?.email,owner?.display_name,owner?.username].filter(Boolean).join(" ").toLowerCase();
     return !q || hay.includes(q);
   });
   content=`${adminTools("cruises",filtered.length)}
   <section class="admin-list">${filtered.map(c=>{
     const ship=ships.find(s=>(s.dbslug||slug(s.name))===c.ship_slug);
     const owner=userMap[c.user_id];
     return `<article class="card admin-cruise-card">
       <div class="grow">
         <strong>${escapeHtml(ship?.name||c.ship_slug)}</strong>
         <div class="small">${escapeHtml(owner?.email||c.user_id)}</div>
         <div class="small">${c.start_date?fmtDate(c.start_date):"—"}${c.end_date?` → ${fmtDate(c.end_date)}`:""}</div>
       </div>
       <button class="text-danger admin-delete-cruise" data-admin-delete-cruise="${escapeHtml(c.id)}">Elimina crociera</button>
     </article>`;
   }).join("") || `<article class="card empty-panel"><h3>Nessun risultato</h3></article>`}</section>`;
 }

 shell(`<button class="back" id="adminBackProfile">← Torna al profilo</button>
 <div class="admin-title-row"><div><h1>Pannello amministratore</h1><p class="small">Cruise360Travel</p></div><button id="adminRefresh" class="secondary">↻ Aggiorna</button></div>
 <div class="admin-tabs">${tabs.map(t=>`<button class="admin-tab ${tab===t[0]?"active":""}" data-admin-tab="${t[0]}">${t[1]}</button>`).join("")}</div>
 ${content}`,"ADMIN");

 document.getElementById("adminBackProfile").onclick=profile;
 document.getElementById("adminRefresh").onclick=()=>adminPanel(tab);
 document.querySelectorAll("[data-admin-tab]").forEach(b=>b.onclick=()=>{state.adminSearch="";state.adminDuckStatus="all";adminPanel(b.dataset.adminTab)});
 const search=document.getElementById("adminSearch");
 if(search){
   search.oninput=()=>{state.adminSearch=search.value;adminPanel(tab)};
   search.focus(); search.setSelectionRange(search.value.length,search.value.length);
 }
 const sortSel=document.getElementById("adminSort");
 if(sortSel) sortSel.onchange=()=>{state.adminSort=sortSel.value;adminPanel(tab)};
 const statusSel=document.getElementById("adminDuckStatus");
 if(statusSel) statusSel.onchange=()=>{state.adminDuckStatus=statusSel.value;adminPanel(tab)};
 document.querySelectorAll("[data-admin-open-duck]").forEach(b=>b.onclick=()=>duckDetail(b.dataset.adminOpenDuck));
 document.querySelectorAll("[data-admin-delete-duck]").forEach(b=>b.onclick=()=>adminDeleteDuck(b.dataset.adminDeleteDuck));
 document.querySelectorAll("[data-admin-delete-cruise]").forEach(b=>b.onclick=()=>adminDeleteCruise(b.dataset.adminDeleteCruise));
}

function adminTools(tab,count){
 const placeholder=tab==="users"?"Cerca utenti...":tab==="ducks"?"Cerca Duck...":"Cerca crociere...";
 return `<div class="admin-tools">
   <input id="adminSearch" class="field admin-search" placeholder="${placeholder}" value="${escapeHtml(state.adminSearch||"")}">
   <select id="adminSort" class="field admin-sort">
     <option value="new" ${(state.adminSort||"new")==="new"?"selected":""}>Più recenti</option>
     <option value="old" ${state.adminSort==="old"?"selected":""}>Più vecchie</option>
   </select>
   ${tab==="ducks"?`<select id="adminDuckStatus" class="field admin-sort">
     <option value="all" ${(state.adminDuckStatus||"all")==="all"?"selected":""}>Tutti gli stati</option>
     <option value="hidden" ${state.adminDuckStatus==="hidden"?"selected":""}>Nascosta</option>
     <option value="kept" ${state.adminDuckStatus==="kept"?"selected":""}>Tenuta</option>
     <option value="found" ${state.adminDuckStatus==="found"?"selected":""}>Trovata</option>
   </select>`:""}
   <div class="admin-result-count">${tr("Risultati")}: <strong>${count}</strong></div>
 </div>`;
}

function adminDuckCard(d,showDelete=true){
 const ship=ships.find(s=>(s.dbslug||slug(s.name))===d.current_ship_slug);
 return `<article class="card admin-duck-card">
   <img src="duck-captain.png" alt="Duck">
   <div class="grow">
     <strong>${escapeHtml(d.name)}</strong>
     <div class="small">${escapeHtml(d.code)} · ${escapeHtml(statusLabel(d.status))}</div>
     <div class="small">${escapeHtml(ship?.name||d.current_ship_slug||"—")} · ${escapeHtml(d.current_place||"—")}</div>
   </div>
   <div class="admin-actions">
     <button class="secondary mini-btn" data-admin-open-duck="${escapeHtml(d.code)}">Apri</button>
     ${showDelete?`<button class="danger-btn mini-btn" data-admin-delete-duck="${escapeHtml(d.id)}">Elimina Duck</button>`:""}
   </div>
 </article>`;
}

async function adminDeleteDuck(id){
 if(!confirm(tr("Eliminare definitivamente questa Duck e la sua cronologia?"))) return;
 const {error}=await db.from("ducks").delete().eq("id",id);
 if(error){alert(error.message);return;}
 alert("Duck eliminata.");
 await refreshDuckCounts();
 adminPanel("ducks");
}

async function adminDeleteCruise(id){
 if(!confirm(tr("Eliminare questa crociera?"))) return;
 const {error}=await db.from("user_cruises").delete().eq("id",id);
 if(error){alert(error.message);return;}
 alert("Crociera eliminata.");
 adminPanel("cruises");
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
 let recoveryEvent=false;
 db.auth.onAuthStateChange((event,session)=>{
   currentUser=session?.user||null;
   if(event==="PASSWORD_RECOVERY"){
     recoveryEvent=true;
     state.passwordRecovery=true;
     passwordUpdateScreen();
   }
 });

 await refreshSession();
 await loadShips();
 await refreshDuckCounts();

 const params=new URLSearchParams(location.search);
 const code=params.get("duck");
 const reset=params.get("reset");

 if(!recoveryEvent && reset==="password" && currentUser){
   state.passwordRecovery=true;
   passwordUpdateScreen();
   return;
 }

 if(code) await duckDetail(code); else render();
}
init();
