import { LoaderFunction } from "react-router-typesafe";

import { getContacts } from "../../contacts";

export const loader = (async () => {
  const contacts = await getContacts();
  return { contacts };
}) satisfies LoaderFunction;

