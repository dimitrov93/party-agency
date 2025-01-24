import { lazy } from "react";
import Home from "./pages/Home";

const Contacts = lazy(() => import("./components/Contacts/Contacts"));
const Decoration = lazy(() => import("./pages/Decoration"));
const Album = lazy(() => import("./components/Sections/Album/Album"));
const Add = lazy(() => import("./components/Decoration/Add/Add"));
const Edit = lazy(() => import("./components/Decoration/Edit/Edit"));
const Card = lazy(() => import("./components/Cards/Card"));
const AddCard = lazy(() => import("./components/Cards/Add/Add"));
const Login = lazy(() => import("./components/Login/Login"));
const Logout = lazy(() => import("./components/Logout/Logout"));
const NotFound = lazy(() => import("./pages/NotFound"));

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/contacts", element: <Contacts /> },
  { path: "/cards", element: <Card /> },
  { path: "/cards/add", element: <AddCard /> },
  { path: "/decoration", element: <Decoration /> },
  { path: "/decoration/:albumType", element: <Album /> },
  { path: "/decoration/:albumType/add", element: <Add /> },
  { path: "/decoration/:albumType/:location/edit", element: <Edit /> },
  { path: "/api/login", element: <Login /> },
  { path: "/api/logout", element: <Logout /> },
  { path: "*", element: <NotFound /> },
];
