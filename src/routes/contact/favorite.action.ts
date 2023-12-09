import { ActionFunction } from "react-router-typesafe";
import { updateContact } from "../../contacts";

export const action = (async ({ request, params }) => {
  const formData = await request.formData();
  return updateContact(params.contactId, {
    favorite: formData.get("favorite") === "true",
  });
}) satisfies ActionFunction;
