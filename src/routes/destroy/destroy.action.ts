import { ActionFunction, redirect } from "react-router-typesafe";
import { deleteContact } from "../../contacts";

export const action = (async ({ params }) => {
  throw new Error("Not implemented");
  await deleteContact(params.contactId);
  return redirect("/");
}) satisfies ActionFunction;
