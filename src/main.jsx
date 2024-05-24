import "./index.css";

import * as React from "react";
import * as ReactDOM from "react-dom/client";

import Contact, { loader as contactLoader } from "./routes/contact";
import EditContact, { action as editAction } from "./routes/edit";
import Root, {
   action as rootAction,
   loader as rootLoader,
} from "./routes/root";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ErrorPage from "./error-page";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      loader: rootLoader,
      action: rootAction,
      children: [
         {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
         },
         {
            path: "contacts/:contactsId/edit",
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,
         },
      ],
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
