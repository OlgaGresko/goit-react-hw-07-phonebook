import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import { selectContactsError, selectContactsIsLoading } from 'redux/selectors';
import { Audio } from 'react-loader-spinner';

export function App() {
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      {error !== null && <p>Oops, an error has occurred...</p>}
      {isLoading && (
        <Audio height="80" width="80" color="grey" ariaLabel="loading" />
      )}
      <ContactList />
    </div>
  );
}
