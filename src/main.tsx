import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ErrorPage } from './error-page';
import './index.css';
import Contact from './routes/contact/contact';
import { loader as contactLoader } from './routes/contact/contact.loader';
import EditContact from './routes/edit/edit';
import { action as editAction } from './routes/edit/edit.action';
import Root from './routes/root/root';
import { action as rootAction } from './routes/root/root.action';
import { loader as rootLoader } from './routes/root/root.loader';
import { action as destroyAction } from './routes/destroy/destroy.action';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "/contacts/:contactId",
        element: <Contact/>,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        action: editAction,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
