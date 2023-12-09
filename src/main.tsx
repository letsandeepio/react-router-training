import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root/root';
import { ErrorPage } from './error-page';
import { loader as rootLoader } from './routes/root/root.loader';
import { action as rootAction } from './routes/root/root.action';
import Contact from './routes/contact/contact';
import { loader as contactLoader } from './routes/contact/contact.loader';

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
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
