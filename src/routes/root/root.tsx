import { Form, NavLink, Outlet, useNavigation } from "react-router-dom";
import { useLoaderData } from "react-router-typesafe";
import { Contact } from "../../contacts";
import { loader as rootLoader } from "./root.loader";
import { useEffect } from 'react';

export default function Root() {
  const { contacts, q } = useLoaderData<typeof rootLoader>();

  const navigation = useNavigation();

  useEffect(() => {
    const element = document.getElementById("q") as HTMLInputElement;
    if (element !== null) {
      element.value = q || "";
    }
  }, [q]);

  return (
    <>
      <div id='sidebar'>
        <h1>React Router Contacts</h1>
        <div>
          <Form id='search-form' role='search'>
            <input
              id='q'
              aria-label='Search contacts'
              placeholder='Search'
              type='search'
              name='q'
              defaultValue={q || ""}
            />
            <div id='search-spinner' aria-hidden hidden={true} />
            <div className='sr-only' aria-live='polite'></div>
          </Form>
          <Form method='post'>
            <button type='submit'>New</button>
          </Form>
        </div>
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact: Contact) => (
                <li key={contact.id}>
                  <NavLink
                    to={`contacts/${contact.id}`}
                    className={({ isActive, isPending }) =>
                      isActive ? "active" : isPending ? "pending" : ""
                    }
                  >
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div id='detail'
      className={
        navigation.state === "loading" ? "loading" : ""
      }>
        <Outlet />
      </div>
    </>
  );
}
