import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import AuthPage from "./components/AuthPage";
import WelcomePage from "./components/pages/WelcomePage";
import QuestionScreen from "./components/QuestionScreen";
import ResultScreen from "./components/ResultScreen";
import { Toaster } from "react-hot-toast";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Logout from "./components/pages/Logout";

export const routes = {
  signup: "/signup",
  login: "/login",
  protectedRoutes: {
    welcome: "/welcome",
    questions: "/questions",
    result: "/result",
    logout: "/logout",
  },
};

const router = createBrowserRouter([
  { path: "/", element: <Navigate to={routes.login} replace /> },
  {
    path: routes.signup,
    element: <Register />,
  },
  {
    path: routes.login,
    element: <Login />,
  },
  {
    path: routes.protectedRoutes.welcome,
    element: <ProtectedRoutes element={<WelcomePage />} />,
  },
  {
    path: routes.protectedRoutes.questions,
    element: <ProtectedRoutes element={<QuestionScreen />} />,
  },
  {
    path: routes.protectedRoutes.logout,
    element: <ProtectedRoutes element={<Logout />} />,
  },
  {
    path: routes.protectedRoutes.result,
    element: <ProtectedRoutes element={<ResultScreen />} />,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router}>
        <Layout />
      </RouterProvider>
      <Toaster />
    </div>
  );
};

export default App;

// const App = () => {
//   return (
//     <>
//       {/* <Layout /> */}
//       {/* <Login /> */}
//       <Register />
//       {/* <AuthPage /> */}
//       {/* <WelcomePage /> */}
//       {/* <QuestionScreen /> */}
//       {/* <ResultScreen /> */}
//     </>
//   );
// };

// export default App;
