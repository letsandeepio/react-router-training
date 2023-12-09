import { getContact } from '../../contacts';
import { LoaderFunction } from 'react-router-typesafe';

export const loader = (async({ params }) => {
  const contact = await getContact(params.contactId);
  if (!contact) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return { contact };
}) satisfies LoaderFunction;