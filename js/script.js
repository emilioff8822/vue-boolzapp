const { createApp } = Vue;

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
  },
  mounted() {
    
  },
}).mount("#app");
