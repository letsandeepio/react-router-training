import { LoaderFunction } from "react-router-typesafe";

import { getContacts } from "../../contacts";

export const loader = (async ({request}) => {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q || undefined);
  return { contacts, q };
}) satisfies LoaderFunction;

