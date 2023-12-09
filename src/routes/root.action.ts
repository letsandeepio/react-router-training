import { ActionFunction } from 'react-router-typesafe';
import { createContact } from '../contacts';

export const action = (async() =>  {
  const contact = await createContact();
  return { contact };
}) satisfies ActionFunction;
