import { Component } from 'react';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import './App.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Chack Norris', number: '459-12-56' },
      { id: 'id-2', name: 'Silvester Stallone', number: '443-89-12' },
      { id: 'id-3', name: 'Jacky Chan', number: '645-17-79' },
      { id: 'id-4', name: 'Arnold Schvartseneger', number: '227-91-26' },
      { id: 'id-5', name: 'Bolo Yeng', number: '227-91-26' },
    ],
    filter: '',
  };

  filteredContactList = () => {
    const filterWord = this.state.filter;
    let result = [];
    result = this.state.contacts.filter(item => {
      return Object.values(item)
        .join('')
        .toLowerCase()
        .includes(filterWord.toLowerCase());
    });
    return result;
  };

  filterHandle = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter filterHandle={this.filterHandle} />
        <ContactList contactsList={this.filteredContactList()} />
      </div>
    );
  }
}

export default App;
