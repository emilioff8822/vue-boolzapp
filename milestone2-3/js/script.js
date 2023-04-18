const { createApp } = Vue;
const dt = luxon.DateTime

createApp({
  data() {
    return {
      contacts: [
        { id: 1, name: 'Ulisse', avatar: 'avatar_1.jpg', lastMessage: 'Ciao!', messages: [] },
        { id: 2, name: 'Emilio', avatar: 'avatar_2.jpg', lastMessage: 'A presto!', messages: [] },
        { id: 3, name: 'Icaro', avatar: 'avatar_3.jpg', lastMessage: 'Come va?', messages: [] },
        { id: 4, name: 'Apollo', avatar: 'avatar_4.jpg', lastMessage: 'Buona giornata!', messages: [] },
        { id: 5, name: 'Orazio', avatar: 'avatar_5.jpg', lastMessage: 'Ci vediamo!', messages: [] },
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
      this.inputMessage = '';

      setTimeout(() => {
        const reply = { id: Date.now() + 1, text: 'Ok', type: 'received' };
        this.activeContact.messages.push(reply);
        this.activeContact.lastMessage = reply.text;
      }, 1000);

    }
  },
  printClock(){
    this.clock = dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS);
  
  },

  


  },
  mounted() {
    this.filteredContacts = this.contacts;
  
  },
}).mount("#app");
