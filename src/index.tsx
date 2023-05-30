import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Protected from "./components/Protected/Protected";
import { Toast } from "./components/Toast/Toast";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import reportWebVitals from "./reportWebVitals";
import theme from "./theme/theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected isLoggedIn={false}>
        <Home />
      </Protected>
    ),
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <RouterProvider router={router} />

      <Toast />
    </React.StrictMode>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
