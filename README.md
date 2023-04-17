Struttura HTML:
a. Creo un div principale con una classe, ad esempio "main-container", che conterrà sia la colonna dei contatti che la colonna della chat.
b. All'interno del "main-container", creo un div con una classe, ad esempio "sidebar", per la colonna dei contatti.
c. All'interno della "sidebar", creo un input per la ricerca dei contatti e un div con una classe, ad esempio "contacts", per l'elenco dei contatti.
d. Creo un div con una classe, ad esempio "chat", all'interno del "main-container" per la colonna della chat.
e. All'interno del div "chat", creo un div con una classe, ad esempio "header", per l'intestazione della chat.
f. Sempre all'interno del div "chat", creo un div con una classe, ad esempio "messages", per l'elenco dei messaggi.
g. Infine, creo un div con una classe, ad esempio "input-container", all'interno del div "chat" per il campo di input e il pulsante per inviare nuovi messaggi.

 CSS:

a. Definisco gli stili per gli elementi HTML come il "main-container", "sidebar", "contacts", "chat", "header", "messages" e "input-container".

b. Creo media query per rendere l'applicazione responsiva su dispositivi mobili e schermi di dimensioni diverse.




JavaScript:

Creo un'istanza Vue con un oggetto contenente le proprietà data, methods, mounted e watch.

Nella proprietà data, definisco le variabili necessarie:
a. contacts: un array di oggetti che rappresenta i contatti, con proprietà come nome, immagine e messaggi.
b. activeContact: un oggetto che rappresenta il contatto attualmente selezionato nella chat.
c. filteredContacts: un array di oggetti che rappresenta i contatti filtrati in base alla ricerca.
d. searchText: una stringa per la ricerca di contatti.
e. inputMessage: una stringa per il messaggio di input.

Nella proprietà methods, creo le seguenti funzioni:

a. filterContacts(): questa funzione viene chiamata ogni volta che l'utente digita nel campo di ricerca. Filtra i contatti in base al testo inserito dall'utente e aggiorna l'array filteredContacts.

b. setActiveContact(contact): questa funzione viene chiamata quando l'utente seleziona un contatto. Imposta il contatto selezionato come activeContact e aggiorna la chat con i messaggi corrispondenti.

c. sendMessage(): questa funzione viene chiamata quando l'utente invia un nuovo messaggio. Aggiunge il messaggio all'array dei messaggi del contatto attivo, aggiorna il campo lastMessage del contatto e svuota il campo di input.

d. formatDate(timestamp): questa funzione formatta il timestamp dei messaggi in una stringa leggibile, ad esempio "10:30 AM".

Nella proprietà mounted, inizializzo l'elenco filtrato dei contatti impostando filteredContacts uguale all'array contacts. Questo viene eseguito quando l'applicazione viene montata per la prima volta.
