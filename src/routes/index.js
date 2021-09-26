import RegisterComponent from "../containers/Register";
import LoginComponent from "../containers/Login";
import ContactsComponent from "../containers/Contacts";
import CreateContactsComponent from "../containers/CreateContact";

const routes = [
  {
    path: "/auth/register",
    component: RegisterComponent,
    title: "Register",
  },
  {
    path: "/auth/login",
    component: LoginComponent,
    title: "Login",
  },
  {
    path: "/",
    component: ContactsComponent,
    title: "Contacts",
  },
  {
    path: "/contacts/create",
    component: CreateContactsComponent,
    title: "Create Contacts",
  },
  // {
  //     path: '/auth/register',
  //     component: RegisterComponent,
  // },
  // {
  //     path: '/auth/register',
  //     component: RegisterComponent,
  // },
];

export default routes;
