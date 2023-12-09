import { getContact } from '../../contacts';
import { LoaderFunction } from 'react-router-typesafe';

export const loader = (async({ params }) => {
  const contact = await getContact(params.contactId);
  return { contact };
}) satisfies LoaderFunction;