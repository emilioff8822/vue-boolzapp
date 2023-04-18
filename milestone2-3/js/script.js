const { createApp } = Vue;
const dt = luxon.DateTime

createApp({
  data() {
    return {
      contacts: [
      { id: 1, name: 'Ulisse', avatar: 'avatar_1.jpg', lastMessage: 'Ciao!', lastMessageDate: '2023-04-17T10:30:00', messages: [] },
      { id: 2, name: 'Emilio', avatar: 'avatar_2.jpg', lastMessage: 'A presto!', lastMessageDate: '2023-04-16T15:45:00', messages: [] },
      { id: 3, name: 'Icaro', avatar: 'avatar_3.jpg', lastMessage: 'Come va?', lastMessageDate: '2023-04-15T12:00:00', messages: [] },
      { id: 4, name: 'Apollo', avatar: 'avatar_4.jpg', lastMessage: 'Buona giornata!', lastMessageDate: '2023-04-14T09:15:00', messages: [] },
      { id: 5, name: 'Orazio', avatar: 'avatar_5.jpg', lastMessage: 'Ci vediamo!', lastMessageDate: '2023-04-13T18:30:00', messages: [] },
    ],
      filteredContacts: [],
      search: '',
      activeContact: { name: '', messages: [] },
      activeContactColor: '#4caf50',
      inputMessage: '',
    };
  },
  methods: {
    
    filterContacts() {
      this.filteredContacts = this.contacts.filter((contact) =>
        contact.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
    setActiveContact(contact) {
      this.activeContact = contact;
      this.messages = contact.messages; // Carica i messaggi del contatto
    
      
    },
  // Invia un messaggio e genera una risposta automatica dopo 1 secondo
  sendMessage() {
    if (this.inputMessage.trim()) {
      const message = { id: Date.now(), text: this.inputMessage, type: 'sent' };
      this.activeContact.messages.push(message);
      this.activeContact.lastMessageDate = dt.now().toISO();
      this.inputMessage = '';

      setTimeout(() => {
        const reply = { id: Date.now() + 1, text: 'Ok', type: 'received' };
        this.activeContact.messages.push(reply);
        this.activeContact.lastMessage = reply.text;
        this.activeContact.lastMessageDate = dt.now().toISO();
      }, 1000);

    }
  },
  
  formatDate(date) {
    return dt.fromISO(date).setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS);
  },

  


  },
  mounted() {
    this.filteredContacts = this.contacts;
  
  },
}).mount("#app");
