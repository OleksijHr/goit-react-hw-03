import './App.css'
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import { useEffect, useState } from 'react'

function App() {

  const [contacts, setContacts] = useState(() => {
    const saveContacts = localStorage.getItem('contacts');
    return saveContacts ? JSON.parse(saveContacts) : [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContact) => {
      return [...prevContact, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContact) => {
      return prevContact.filter((contact) => contact.id !== contactId);
    });
  };

  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );
  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={ addContact } />
      <SearchBox value={filter} onChange={ setFilter } />
      <ContactList contacts={filteredContacts} onDelete={ deleteContact } />
    </>
  )
}

export default App
