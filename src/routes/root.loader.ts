import { LoaderFunction } from "react-router-typesafe";

import { getContacts } from "../contacts";

const rootLoader = (async () => {
  const contacts = await getContacts();
  return { contacts };
}) satisfies LoaderFunction;

export default rootLoader;
