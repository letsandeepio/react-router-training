import { ActionFunction, redirect } from 'react-router-typesafe';
import { createContact } from '../../contacts';

export const action = (async() =>  {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);

}) satisfies ActionFunction;
