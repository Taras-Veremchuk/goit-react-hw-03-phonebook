import React from 'react';
import { ContactForm, ContactList, Filter } from 'Сomponents/index';
import shortid from 'shortid';
import { PhonTitle, ContTitle, Container } from './Сomponents/PhoneBook.styled';

const LS_KEY = 'phoneBook';
class App extends React.Component {
  state = {
    filter: '',
    contacts: [],
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };
  changeFilter = event => {
    this.setState({ filter: event.target.value });
    this.filterContactList();
  };

  filterContactList = () => {
    const normalizedFilter = this.state.filter.toLowerCase().trim();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem(LS_KEY));
    if (contacts) {
      this.setState({ contacts: contacts });
    }
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state !== prevState) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { contacts } = this.state;
    return (
      <Container>
        <PhonTitle>Phonebook</PhonTitle>
        <ContactForm
          addContact={this.addContact}
          contacts={this.state.contacts}
        />
        {contacts.length > 0 ? (
          <>
            <ContTitle>Contacts</ContTitle>
            <Filter
              filter={this.statefilter}
              onFilterChange={this.changeFilter}
            />
            <ContactList
              visibleContacts={this.filterContactList()}
              deleteContact={this.deleteContact}
            />
          </>
        ) : (
          <p message="No feedback given">No contacts added</p>
        )}
      </Container>
    );
  }
}
export default App;
