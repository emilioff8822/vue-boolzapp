const {createApp}= Vue;
createApp ({

data (){

return {
  contacts: [
    { id: 1, name: 'Contatto 1', avatar: 'avatar_1.jpg', lastMessage: 'Ciao!' },
    { id: 2, name: 'Contatto 2', avatar: 'avatar_2.jpg', lastMessage: 'A presto!' },
    { id: 3, name: 'Contatto 3', avatar: 'avatar_3.jpg', lastMessage: 'Come va?' },
    { id: 4, name: 'Contatto 4', avatar: 'avatar_4.jpg', lastMessage: 'Buona giornata!' },
    { id: 5, name: 'Contatto 5', avatar: 'avatar_5.jpg', lastMessage: 'Ci vediamo!' },
  ],
  filteredContacts: [],
  search: '',
  activeContact: { name: '' },
  activeContactColor: '#4caf50',
  messages: [],
  inputMessage: '',

};  



},

methods: {
  filterContacts() {
    this.filteredContacts = this.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.search.toLowerCase())
    );
  },
  



},

mounted(){



}

}).mount("#app")