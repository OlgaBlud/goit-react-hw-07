import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { getContacts } from "./redux/contactsSlice";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import { GiH2O } from "react-icons/gi";

function App() {
  const dispatch = useDispatch();
  // Отримуємо частини стану
  const { items, loading, error } = useSelector(getContacts);
  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className="phonebookWrap">
      <h1>Phonebook</h1>
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      <h2>{items.length > 0 && JSON.stringify(items, null, 2)}</h2>
      {/* <ContactForm />
      <SearchBox />
      <ContactList /> */}
    </div>
  );
}

export default App;
