import { getContact } from '../../contacts';
import { LoaderFunction } from 'react-router-typesafe';

export const loader = (async({ params }) => {
  const contact = await getContact(params.contactId);

  console.log(contact); 
  return { contact };
}) satisfies LoaderFunction;