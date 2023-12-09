import { ActionFunction, redirect } from 'react-router-typesafe';
import { updateContact } from '../../contacts';

export const action = (async({ request, params }) => {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
}) satisfies ActionFunction;