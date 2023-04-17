const {createApp}= Vue;
createApp ({

data (){

return {
  
 

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