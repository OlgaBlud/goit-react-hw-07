import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { filterValue } from "../../redux/filtersSlice";
import { deleteContact } from "../../redux/contactsOps";

const ContactList = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(selectContacts);
  // console.log("items", items);
  const filter = useSelector(filterValue);

  const filteredContacts = items.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (filteredContacts.length === 0) {
    return;
  }

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <Contact
            key={id}
            id={id}
            name={name}
            phone={number}
            deleteContacts={(contactId) => {
              dispatch(deleteContact(contactId));
            }}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
