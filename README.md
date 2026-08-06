# Cruise360 Duck Tracker — MVP

Prototipo installabile (PWA) realizzato in HTML, CSS e JavaScript puro.

## Funzioni presenti
- Creazione di una cruising duck con codice univoco
- Ricerca della duck tramite codice
- Registrazione di ritrovamenti
- Nave, porto, data, autore, messaggio e scelta “la tengo / la nascondo di nuovo”
- Diario cronologico
- Statistiche base
- Salvataggio locale sul dispositivo tramite localStorage
- Installazione sulla schermata Home come web app

## Come provarlo
1. Estrai lo ZIP.
2. Avvia un piccolo server locale nella cartella, ad esempio:
   `python3 -m http.server 8080`
3. Apri `http://localhost:8080`.
4. Per la demo usa il codice `C360-0001`.

## Limiti dell'MVP
I dati restano solo sul dispositivo. Per renderla pubblica servono:
- database online;
- autenticazione;
- upload foto;
- QR code realmente collegati agli URL;
- mappa geografica;
- dominio e hosting.

## Prossima versione consigliata
Backend Supabase o Firebase, frontend Next.js/PWA, storage immagini, geolocalizzazione e QR dinamici.
